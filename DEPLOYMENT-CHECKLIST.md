# ✅ Pre-Deployment Checklist

Before you deploy your Rise landing page, make sure you've completed these tasks:

## 🔗 Update Links

- [ ] Replace `yourusername/rise` with your actual GitHub repo URL (appears in multiple places)
- [ ] Replace `yourinvite` with your actual Discord invite code
- [ ] Replace `yourhandle` with your Twitter username
- [ ] Update GitHub sponsors link
- [ ] Verify all links open in new tabs (`target="_blank"`)

**Where to update**: Search `src/App.jsx` for these strings

## 📸 Add Your Screenshots

- [ ] Replace placeholder screenshot in hero section
- [ ] Add 6 actual screenshots for the slideshow section
- [ ] Optimize images (use WebP format, compress)
- [ ] Add images to `public/` folder
- [ ] Update image paths in `src/App.jsx`

## 📝 Content Review

- [ ] Review all copy for accuracy
- [ ] Check that feature lists match your current MVP status
- [ ] Verify roadmap timeline is correct
- [ ] Proofread for typos

## 🔍 SEO & Meta Tags

- [ ] Update Open Graph image (create a 1200x630 preview image)
- [ ] Add your Open Graph image to `public/og-image.png`
- [ ] Update meta description in `index.html`
- [ ] Verify page title is correct

## 🧪 Testing

- [ ] Test on mobile devices (responsive design)
- [ ] Test all navigation links
- [ ] Test all external links (GitHub, Discord, etc.)
- [ ] Test smooth scroll to sections
- [ ] Check browser console for errors
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)

## 🚀 Deployment

- [ ] Push code to GitHub
- [ ] Connect to Vercel
- [ ] Verify deployment is successful
- [ ] Test production site
- [ ] Configure custom domain (optional)

## 📊 Post-Deployment

- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Monitor performance with Lighthouse
- [ ] Share on social media
- [ ] Add link to GitHub repo README

---

## Quick Find & Replace Commands

Use these commands to update links quickly:

### GitHub Links
```bash
# Find all occurrences
grep -r "yourusername/rise" src/

# Replace (macOS)
sed -i '' 's/yourusername\/rise/YOUR-USERNAME\/YOUR-REPO/g' src/App.jsx

# Replace (Linux)
sed -i 's/yourusername\/rise/YOUR-USERNAME\/YOUR-REPO/g' src/App.jsx
```

### Discord Invite
```bash
sed -i '' 's/yourinvite/YOUR-INVITE-CODE/g' src/App.jsx  # macOS
sed -i 's/yourinvite/YOUR-INVITE-CODE/g' src/App.jsx     # Linux
```

### Twitter Handle
```bash
sed -i '' 's/yourhandle/YOUR-HANDLE/g' src/App.jsx  # macOS
sed -i 's/yourhandle/YOUR-HANDLE/g' src/App.jsx     # Linux
```

---

**Ready to deploy?** Run through this checklist one more time, then follow the QUICKSTART.md guide!