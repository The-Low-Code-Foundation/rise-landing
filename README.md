# Rise Landing Page

> **Visual Programming Meets Clean Code** - Marketing website for Rise

A modern, responsive landing page built with React, Vite, and Tailwind CSS. Features a stunning "Terminal-Meets-Designer" aesthetic with smooth animations and professional design.

![Rise Landing Page](https://via.placeholder.com/1200x630?text=Rise+Landing+Page)

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant dev server and HMR
- 🎨 **Modern Design** - Terminal-inspired aesthetic with gradients and animations
- 📱 **Fully Responsive** - Looks great on all devices
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🔍 **SEO Optimized** - Meta tags and Open Graph support
- 🌐 **Deploy Anywhere** - Works on Vercel, Netlify, GitHub Pages, etc.

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rise-landing-page.git
   cd rise-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔨 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📦 Project Structure

```
rise-landing-page/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main landing page component
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── README.md           # This file
```

## 🚢 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/rise-landing-page.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Vercel will auto-detect Vite - just click "Deploy"!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/rise-landing-page)

## 🌐 Deploy to Other Platforms

### Netlify

1. Push to GitHub
2. Connect your repo at [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

## ⚙️ Configuration

### Update Links

Before deploying, update the following links in `src/App.jsx`:

- GitHub repository URL: Search for `yourusername/rise` and replace
- Discord invite link: Search for `yourinvite` and replace
- Twitter handle: Search for `yourhandle` and replace
- Sponsor link: Update GitHub sponsors URL

### Add Your Screenshots

Replace the placeholder screenshot sections with actual images of your editor.

### Customize Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📄 License

MIT License - feel free to use this for your own project!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Discord: [Join our community](https://discord.gg/yourinvite)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

**Built with ❤️ for the Rise community**