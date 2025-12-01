# 🚀 Quick Start Guide - Rise Landing Page

## Get Up and Running in 3 Minutes

### 1. Install Dependencies
```bash
cd rise-landing
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open http://localhost:5173 in your browser

### 3. Build for Production
```bash
npm run build
```
Your production-ready site will be in the `dist` folder.

---

## Deploy to Vercel (2 minutes)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Rise landing page"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy" (Vercel auto-detects Vite!)

**That's it!** Your site will be live in ~1 minute.

---

## Important: Update Your Links!

Before deploying, open `src/App.jsx` and replace:

1. **GitHub Links**: `yourusername/rise` → Your actual repo
2. **Discord Invite**: `yourinvite` → Your Discord invite code
3. **Twitter Handle**: `yourhandle` → Your Twitter username
4. **Sponsor Link**: Update GitHub sponsors URL

Search for these strings in the file and replace them all.

---

## Project Structure

```
rise-landing/
├── src/
│   ├── App.jsx       ← Your landing page (edit this!)
│   ├── main.jsx      ← React entry point
│   └── index.css     ← Global styles
├── index.html        ← HTML template
├── package.json      ← Dependencies
└── README.md         ← Full documentation
```

---

## Need Help?

- **Full README**: See README.md for complete documentation
- **Vite Docs**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com
- **React Docs**: https://react.dev

---

**Pro Tip**: The landing page is a single React component in `src/App.jsx`. All your edits go there!