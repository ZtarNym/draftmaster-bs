# DraftMaster BS — Starter 0.1.0

Primera base funcional de la aplicación web con estética esports y diseño responsive.

## Funciones incluidas
- Dashboard y navegación por módulos.
- Draft Analyzer: mapa, modo, 3 picks aliados, 3 picks rivales y bans.
- Colección editable con nivel de poder.
- Persistencia local en el navegador.
- Importación y exportación JSON de la colección.
- Paneles de Meta Intelligence y Pro Intelligence con estado explícito de fuentes no conectadas.

## Ejecutar
Requiere Node.js 20+.

```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build
npm run preview
```

## Publicar en Vercel
1. Sube el contenido del proyecto a un repositorio GitHub.
2. En Vercel, importa ese repositorio.
3. Selecciona framework preset **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Pulsa Deploy.

## Importante
Esta versión es un starter funcional de frontend. No incluye todavía estadísticas reales, scraping, backend, autenticación ni un motor competitivo. No presenta datos ficticios como si fueran actuales. La colección se guarda localmente en el navegador y no se sincroniza entre dispositivos.

## Próximas fases
Backend y perfiles, integración de fuentes de Brawl Stars, pipeline de esports/High Tier, catálogo validado de brawlers y motor de draft con counters, sinergias, mapa, modo y nivel.

## Sincronización de cuenta por tag

La sección **My Collection** permite introducir el tag y consultar el perfil y la lista de brawlers mediante una función serverless. El token nunca se envía al navegador.

### Configurar en Vercel
1. En el proyecto de Vercel, establece **Root Directory** como `draftmaster-bs` si el repositorio conserva la carpeta contenedora.
2. En **Settings → Environment Variables**, añade `BRAWL_STARS_API_TOKEN` con el token creado en el portal oficial de desarrolladores de Supercell.
3. Autoriza en el portal la IP de salida que corresponda al despliegue. La API oficial puede rechazar la petición si la IP no coincide con la permitida.
4. Vuelve a desplegar el proyecto.

El endpoint `/api/player?tag=...` consulta el perfil oficial. Si no existe el token, la web mostrará un aviso de configuración en vez de simular una sincronización. La colección importada se guarda en el navegador del usuario.
