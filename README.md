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

## Recent improvements

### Accessibility
- ✅ Added "Skip to main content" link for keyboard users
- ✅ Enhanced focus styles for all interactive elements (buttons, links, menu items)
- ✅ Added current page indicators in navigation with `aria-current` attributes
- ✅ Improved keyboard support: Escape key closes mobile menu
- ✅ Better contrast and visual hierarchy for all text

### Navigation & UX
- ✅ Fixed broken brand link (homepage now navigates to index.html)
- ✅ Auto-close mobile menu when clicking outside
- ✅ Active page highlighting in navigation
- ✅ Smooth scrolling for anchor links
- ✅ Card hover effects with subtle lift animation

### SEO & Meta
- ✅ Added theme-color meta tags
- ✅ Added Open Graph (og:) tags for social media sharing
- ✅ Added Twitter Card meta tags
- ✅ Improved meta descriptions

### Code Quality
- ✅ Removed duplicate CSS rules
- ✅ Enhanced footer with GitHub links and call-to-action
- ✅ Better organized styles with logical grouping
- ✅ Improved JavaScript with better error handling
- ✅ Consistent spacing and padding across mobile and desktop

### Performance
- ✅ Optimized CSS transitions and animations
- ✅ Properly linked external resources
- ✅ Clean, maintainable code structure
