export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const rawTag = typeof req.query.tag === 'string' ? req.query.tag : '';
  const tag = rawTag.trim().replace(/^#/, '').toUpperCase();

  if (!/^[0289PYLQGRJCUV]{3,15}$/.test(tag)) {
    return res.status(400).json({ error: 'Invalid player tag.' });
  }

  const token = process.env.BRAWL_STARS_API_TOKEN;
  if (!token) {
    return res.status(503).json({
      error: 'La API oficial aún no está configurada. Añade BRAWL_STARS_API_TOKEN en las variables de entorno de Vercel.'
    });
  }

  try {
    const response = await fetch(
      `https://api.brawlstars.com/v1/players/%23${encodeURIComponent(tag)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      }
    );

    if (response.status === 404) {
      return res.status(404).json({ error: 'No encontramos una cuenta con ese tag.' });
    }
    if (response.status === 403) {
      return res.status(502).json({
        error: 'Supercell rechazó la solicitud. Revisa el token y la IP autorizada en el portal de desarrolladores.'
      });
    }
    if (!response.ok) {
      return res.status(502).json({ error: `La API de Brawl Stars respondió con error (${response.status}).` });
    }

    const player = await response.json();
    return res.status(200).json({ player });
  } catch {
    return res.status(502).json({ error: 'No se pudo conectar con la API de Brawl Stars. Inténtalo más tarde.' });
  }
}
