# Three Bees Garden

A modern, responsive landing page for Three Bees Garden - a curated photography destination in Gig Harbor featuring seasonal blooms, bees, and berries.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/itzGPHarris/threebeesgarden.git
cd threebeesgarden

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
threebeesgarden/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── sections/    # Hero, About, Newsletter
│   │   └── ui/          # Buttons, Inputs, etc.
│   ├── lib/             # Utilities
│   ├── styles/          # Global CSS
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html
├── netlify.toml         # Netlify deployment config
├── package.json
└── vite.config.ts       # Vite configuration
```

## 🎨 Updating Content

### Easy Updates (No Code Changes Needed)

Most content can be updated by modifying props in `src/App.tsx`:

#### Announcement Banner
```tsx
<AnnouncementBanner message="Your new announcement here" />
```

#### Hero Section
Update images in `src/components/sections/HeroSection.tsx`:
```tsx
const heroImages = [
  { url: 'your-image-url.jpg', alt: 'Description' },
  // Add more images...
]
```

#### About Section
```tsx
<AboutSection
  title="Your Title"
  paragraphs={['Paragraph 1', 'Paragraph 2']}
  quote="Your inspiring quote"
/>
```

#### Social Links
```tsx
<Footer 
  socialLinks={{
    instagram: 'https://instagram.com/yourhandle',
    // ... other links
  }}
/>
```

### Adding Images

1. Add image files to `public/images/`
2. Reference them as `/images/your-image.jpg`
3. Or use external URLs (Unsplash, etc.)

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repo to Netlify
2. Netlify will auto-detect the settings from `netlify.toml`
3. Every push to `main` triggers a new deployment

### Manual Deploy

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🎨 Design System

### Colors
- **Brand Magenta**: `#BF46BF`
- **Moss Green**: `#2d4a3e`
- **Charcoal**: `#1a1a1a`
- **Linen**: `#f5f1e8`
- **Gold (accent)**: `#F4CC67`

### Fonts
- **Display**: Barlow Condensed (headlines, logo)
- **Serif**: Playfair Display (section titles)
- **Sans**: Barlow (body text)

All fonts are loaded from Google Fonts.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Figma to Code Workflow

When updating from Figma:

1. Export new designs from Figma Make
2. Compare component structures
3. Update relevant component files
4. Export any new images/SVGs to `public/` or `src/assets/`
5. Test responsiveness
6. Commit and push

## 📄 License

© 2025 Three Bees Garden. All rights reserved.
