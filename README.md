# PokemonOS Website

Starter website for **PokemonOS**, an Arch Linux based distro.

## Project structure

- `index.html` - landing page with dynamic documentation
- `downloads.html` - download page
- `styles.css` - styles and responsive layout
- `script.js` - mobile menu and documentation loading
- `docs/documentation.md` - comprehensive documentation in Markdown

## Documentation System

The website now includes a dynamic documentation system that reads from Markdown files:

- **Location**: `docs/documentation.md`
- **Features**:
  - Tabbed interface (Install Guide / Post-install Setup)
  - Real-time Markdown parsing and rendering
  - Syntax highlighting for code blocks
  - Responsive design
  - Error handling for missing files

### Adding Documentation

1. Edit `docs/documentation.md` with your content
2. Use standard Markdown syntax
3. The system automatically splits content by `##` headers
4. Sections are mapped to navigation tabs

### Documentation Structure

The Markdown file should contain sections starting with `##` that correspond to the navigation tabs:

- `## Installation Guide` - Maps to "Install Guide" tab
- `## Post-Install Setup` - Maps to "Post-install Setup" tab

## Run locally

From repo root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Dependencies

- **Marked.js**: Lightweight Markdown parser loaded from CDN
- **Inter Font**: Google Fonts for typography
- No build process required - pure HTML/CSS/JS

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
