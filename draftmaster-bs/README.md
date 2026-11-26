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
