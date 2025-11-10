AIAGENTHUB_FINAL_CUSTOM

Static prototype of AIAGENTHUB using vanilla HTML + CSS + JS.

Features:
- Dark, minimal, product-grade UI
- RU/EN localization (stored in localStorage)
- Demo catalog of curated AI agents with search & category filters
- Separate pages: Home, Catalog, About, Support, Settings, Admin (all wired)
- Simple particle background & scroll-in animations
- All logic runs client-side, no backend

Deploy:
1. Push files to GitHub (index.html, *.html, styles.css, script.js, assets/).
2. On Vercel:
   - New Project → Import from GitHub
   - Framework preset: Other / Static
   - Build command: none
   - Output directory: root
3. Done — Vercel will serve this as a static site.
