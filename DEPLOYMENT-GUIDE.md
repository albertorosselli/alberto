# Deployment Guide - Alberto Rosselli Presentation Page

## Quick Deployment Options

Your presentation page is ready to deploy! Choose one of these options based on your needs.

---

## Option 1: GitHub Pages (Recommended - FREE)

**Best for**: Personal portfolio, easy updates, custom domain support

### Steps:

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name it: `alberto-rosselli` (or any name you prefer)
   - Make it Public
   - Click "Create repository"

2. **Upload Files**
   
   **Method A - Using GitHub Web Interface:**
   - Click "uploading an existing file"
   - Drag and drop all files from `alberto-presentation` folder
   - Click "Commit changes"

   **Method B - Using Git Command Line:**
   ```bash
   cd alberto-presentation
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/alberto-rosselli.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Click "Save"

4. **Access Your Site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/alberto-rosselli/`
   - Takes 1-2 minutes to deploy

5. **Custom Domain (Optional)**
   - In Pages settings, add your custom domain
   - Update DNS records at your domain registrar
   - GitHub provides free HTTPS

**Pros:**
- ✅ Completely free
- ✅ Easy to update (just push changes)
- ✅ Custom domain support
- ✅ Free HTTPS
- ✅ Version control included

---

## Option 2: Netlify (FREE - Easiest)

**Best for**: Instant deployment, automatic builds, great for beginners

### Steps:

1. **Go to Netlify**
   - Visit https://www.netlify.com
   - Sign up (free account)

2. **Deploy**
   
   **Method A - Drag & Drop:**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire `alberto-presentation` folder
   - Done! Site is live instantly

   **Method B - Connect to GitHub:**
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub repository
   - Netlify auto-deploys on every push

3. **Access Your Site**
   - You get a URL like: `https://random-name-123.netlify.app`
   - Can change to custom subdomain: `https://alberto-rosselli.netlify.app`

4. **Custom Domain (Optional)**
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS instructions
   - Free HTTPS included

**Pros:**
- ✅ Fastest deployment (drag & drop)
- ✅ Automatic HTTPS
- ✅ Continuous deployment from Git
- ✅ Form handling (if you add contact forms later)
- ✅ Great free tier

---

## Option 3: Vercel (FREE)

**Best for**: Developers, React projects, serverless functions

### Steps:

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up with GitHub

2. **Deploy**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Or use Vercel CLI:
     ```bash
     npm i -g vercel
     cd alberto-presentation
     vercel
     ```

3. **Access Your Site**
   - Get URL like: `https://alberto-rosselli.vercel.app`
   - Auto-deploys on Git push

**Pros:**
- ✅ Excellent performance
- ✅ Edge network (fast worldwide)
- ✅ Preview deployments for branches
- ✅ Serverless functions support

---

## Option 4: Traditional Web Hosting

**Best for**: If you already have web hosting (cPanel, etc.)

### Steps:

1. **Connect via FTP**
   - Use FileZilla or your hosting's file manager
   - Connect to your hosting account

2. **Upload Files**
   - Upload all files from `alberto-presentation` folder
   - Place in `public_html` or your domain's root folder

3. **Access Your Site**
   - Visit your domain: `https://yourdomain.com`

**Pros:**
- ✅ Full control
- ✅ Can host multiple sites
- ✅ Email hosting included (usually)

**Cons:**
- ❌ Usually costs money ($3-10/month)
- ❌ Manual updates required

---

## Option 5: Cloudflare Pages (FREE)

**Best for**: Fast global delivery, great security

### Steps:

1. **Go to Cloudflare Pages**
   - Visit https://pages.cloudflare.com
   - Sign up (free)

2. **Create Project**
   - Connect GitHub repository
   - Or use direct upload

3. **Deploy**
   - Automatic deployment on push
   - Get URL: `https://alberto-rosselli.pages.dev`

**Pros:**
- ✅ Cloudflare's global CDN
- ✅ Excellent security
- ✅ Unlimited bandwidth
- ✅ Free custom domains

---

## Recommended Setup for You

Based on your profile as a Senior IT Specialist, I recommend:

### Primary: GitHub Pages
- Shows your Git/development skills
- Easy to maintain
- Professional URL structure
- Can showcase code to potential employers/clients

### Backup: Netlify
- As a fallback/mirror
- Different URL to share
- Test new features before pushing to main

---

## Post-Deployment Checklist

After deploying, complete these steps:

### 1. Update Social Links
Edit `index.html` and update these URLs:
```html
<a href="https://www.ntnu.no/ansatte/alberto.rosselli" target="_blank">
<a href="https://www.linkedin.com/in/albertorosselli" target="_blank">
<a href="https://github.com/albertorosselli" target="_blank">
```

### 2. Test on Multiple Devices
- [ ] Desktop browser (Chrome, Firefox, Edge)
- [ ] Mobile phone
- [ ] Tablet
- [ ] Test dark/light mode toggle
- [ ] Test all social links

### 3. SEO Optimization
Add to `<head>` section in `index.html`:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Alberto Rosselli - Senior IT Specialist with 15+ years of experience in cloud architecture, full-stack development, and technical infrastructure. Based in Trondheim, Norway.">
<meta name="keywords" content="Alberto Rosselli, IT Specialist, Cloud Architect, Full-Stack Developer, Norway, Trondheim, NTNU">
<meta name="author" content="Alberto Rosselli">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourusername.github.io/alberto-rosselli/">
<meta property="og:title" content="Alberto Rosselli - Senior IT Specialist">
<meta property="og:description" content="Senior IT Specialist with 15+ years of experience in cloud architecture and full-stack development">
<meta property="og:image" content="https://yourusername.github.io/alberto-rosselli/profile-photo.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourusername.github.io/alberto-rosselli/">
<meta property="twitter:title" content="Alberto Rosselli - Senior IT Specialist">
<meta property="twitter:description" content="Senior IT Specialist with 15+ years of experience in cloud architecture and full-stack development">
<meta property="twitter:image" content="https://yourusername.github.io/alberto-rosselli/profile-photo.png">
```

### 4. Add Google Analytics (Optional)
If you want to track visitors:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Add Favicon
Create a favicon and add to `<head>`:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

## Updating Your Site

### For GitHub Pages:
```bash
cd alberto-presentation
# Make your changes
git add .
git commit -m "Update content"
git push
# Site updates automatically in 1-2 minutes
```

### For Netlify/Vercel:
- Just push to GitHub, auto-deploys
- Or drag & drop new files

### For Traditional Hosting:
- Upload changed files via FTP
- Overwrite existing files

---

## Custom Domain Setup

If you have a custom domain (e.g., `albertorosselli.com`):

### For GitHub Pages:
1. Add `CNAME` file to repository with your domain
2. In domain registrar, add DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

### For Netlify/Vercel/Cloudflare:
- Follow their custom domain instructions
- Usually just add DNS records they provide

---

## Performance Optimization

Your site is already optimized, but for even better performance:

### 1. Compress Profile Photo
```bash
# Using ImageMagick
convert profile-photo.png -quality 85 -resize 500x500 profile-photo-optimized.png
```

### 2. Enable Caching
Add `.htaccess` file (for traditional hosting):
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 3. Use CDN for Font Awesome
Already done! Font Awesome loads from CDN.

---

## Troubleshooting

### Site not loading?
- Check if files are in correct directory
- Ensure `index.html` is in root
- Clear browser cache (Ctrl+Shift+R)

### Theme toggle not working?
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded correctly

### Photos not showing?
- Check file path in HTML
- Ensure `profile-photo.png` is uploaded
- Check file permissions (755 for directories, 644 for files)

### Mobile layout broken?
- Test in browser DevTools mobile view
- Check viewport meta tag is present
- Ensure responsive CSS is loading

---

## Security Best Practices

### 1. HTTPS Only
- Always use HTTPS (all recommended platforms provide it free)
- Update all links to use HTTPS

### 2. Content Security Policy
Add to `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' data:; font-src 'self' https://cdnjs.cloudflare.com;">
```

### 3. Regular Updates
- Keep Font Awesome version updated
- Review and update content regularly
- Monitor for broken links

---

## Next Steps

1. **Choose deployment platform** (I recommend GitHub Pages)
2. **Deploy your site**
3. **Test thoroughly**
4. **Add to your CV/LinkedIn** as portfolio link
5. **Share with network**

---

## Support

If you need help with deployment:
- GitHub Pages: https://docs.github.com/pages
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs

---

**Your presentation page is ready to go live! Choose your platform and deploy.** 🚀

