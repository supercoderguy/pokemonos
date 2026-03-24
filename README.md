# PokemonOS Website

Starter website for **PokemonOS**, an Arch Linux based distro.

## Project structure

- `website/index.html` - landing page structure
- `website/styles.css` - styles and responsive layout
- `website/script.js` - mobile menu behavior

## Run locally

From repo root:

```bash
cd website
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Next steps

- Replace placeholder screenshot cards with real images
- Link real download artifacts and checksums
- Add docs pages (`install`, `faq`, `roadmap`)
- Set up deployment (GitHub Pages, Netlify, or Cloudflare Pages)
