# Setting Up alberto.rosselli.no - Complete Guide

## Overview

You want to host your presentation page at: **https://alberto.rosselli.no**

Since you own `rosselli.no` and use domene.shop control panel, here's the complete setup process.

---

## Recommended Approach: GitHub Pages + Custom Subdomain

This is the best option because:
- ✅ FREE hosting
- ✅ Automatic HTTPS
- ✅ Easy updates via Git
- ✅ Professional setup
- ✅ Perfect for your IT profile

---

## Step-by-Step Setup

### Phase 1: Deploy to GitHub Pages (10 minutes)

#### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `alberto-presentation` (or any name)
3. Set to **Public**
4. Click "Create repository"

#### 2. Upload Your Files

**Option A - Using GitHub Web Interface:**

1. On your repository page, click "uploading an existing file"
2. Drag and drop ALL files from `alberto-presentation` folder:
   - index.html
   - styles.css
   - script.js
   - profile-photo.png
   - README.md
3. Click "Commit changes"

**Option B - Using Git Command Line:**

```bash
cd ~/alberto-presentation

# Initialize Git
git init
git add .
git commit -m "Initial commit - Alberto Rosselli presentation page"

# Connect to GitHub (replace YOUR_USERNAME)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/alberto-presentation.git
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment

#### 4. Add Custom Domain to GitHub

1. Still in Pages settings
2. Under "Custom domain", enter: `alberto.rosselli.no`
3. Click **Save**
4. **Important**: Leave the page open - you'll see a DNS check status

---

### Phase 2: Configure DNS in domene.shop (5 minutes)

Now you need to point `alberto.rosselli.no` to GitHub Pages.

#### 1. Log into domene.shop Control Panel

- Go to https://domene.shop
- Log in to your account
- Find `rosselli.no` domain

#### 2. Access DNS Settings

Look for one of these options:
- "DNS Settings"
- "DNS Management"
- "DNS Records"
- "Name Servers"
- "Advanced DNS"

#### 3. Add CNAME Record

You need to create a **CNAME record** for the subdomain:

```
Type:     CNAME
Name:     alberto
Value:    YOUR_GITHUB_USERNAME.github.io
TTL:      3600 (or leave default)
```

**Example:**
```
Type:     CNAME
Name:     alberto
Value:    albertorosselli.github.io
TTL:      3600
```

**Important Notes:**
- The "Name" field should be just `alberto` (not the full `alberto.rosselli.no`)
- The "Value" should be `YOUR_USERNAME.github.io` (replace with your actual GitHub username)
- Some panels use "Host" instead of "Name"
- Some panels use "Points to" or "Target" instead of "Value"

#### 4. Save DNS Record

- Click "Save" or "Add Record"
- DNS changes can take 5 minutes to 48 hours (usually 10-30 minutes)

---

### Phase 3: Enable HTTPS on GitHub (2 minutes)

After DNS propagates (wait 10-30 minutes):

1. Go back to GitHub repository → Settings → Pages
2. You should see: ✅ "DNS check successful"
3. Check the box: **"Enforce HTTPS"**
4. Click Save

Your site will now be available at: **https://alberto.rosselli.no**

---

## domene.shop Specific Instructions

### If You See These Options:

#### Option 1: "Simple DNS Editor"
1. Click "Add Record"
2. Type: CNAME
3. Host: alberto
4. Points to: your-username.github.io
5. Save

#### Option 2: "Advanced DNS Zone Editor"
1. Find CNAME Records section
2. Click "Add CNAME Record"
3. Name: alberto
4. CNAME: your-username.github.io.
5. Save

#### Option 3: "DNS Management Table"
Look for a table with columns like:
| Type | Name | Value | TTL |

Add new row:
| CNAME | alberto | your-username.github.io | 3600 |

---

## Verification Steps

### Check DNS Propagation

After adding the CNAME record, verify it's working:

**Method 1 - Online Tool:**
1. Go to https://dnschecker.org
2. Enter: `alberto.rosselli.no`
3. Type: CNAME
4. Click "Search"
5. Should show: `your-username.github.io`

**Method 2 - Command Line:**

**On Windows:**
```cmd
nslookup alberto.rosselli.no
```

**On Mac/Linux:**
```bash
dig alberto.rosselli.no CNAME
```

Should return: `your-username.github.io`

### Check Website

1. Wait 10-30 minutes after DNS changes
2. Visit: http://alberto.rosselli.no (without HTTPS first)
3. Should load your page
4. Then enable HTTPS in GitHub Pages settings
5. Visit: https://alberto.rosselli.no (with HTTPS)

---

## Troubleshooting

### DNS Not Propagating?

**Check:**
1. CNAME record name is exactly: `alberto` (not `alberto.rosselli.no`)
2. CNAME value is: `your-username.github.io` (with your actual username)
3. No trailing dot at the end (unless required by domene.shop)
4. Wait longer - can take up to 48 hours

**Fix:**
- Delete the record and recreate it
- Clear your browser cache
- Try incognito/private browsing
- Test from different device/network

### GitHub Shows "DNS Check Failed"?

**Reasons:**
1. DNS not propagated yet → Wait 30 minutes
2. Wrong CNAME value → Double-check your GitHub username
3. Conflicting A records → Remove any A records for `alberto` subdomain

**Fix:**
1. Go to domene.shop DNS settings
2. Remove any A records for `alberto`
3. Ensure only CNAME record exists for `alberto`
4. Wait and try again

### "Certificate Error" or "Not Secure"?

**Reason:** HTTPS not enabled yet

**Fix:**
1. Wait for DNS to fully propagate (30 minutes to 2 hours)
2. Go to GitHub Pages settings
3. Wait for "DNS check successful" message
4. Enable "Enforce HTTPS"
5. Wait 10-15 minutes for certificate generation

### Page Shows 404 Error?

**Reasons:**
1. GitHub Pages not enabled → Check repository Settings → Pages
2. Wrong branch selected → Should be "main" branch
3. Files in wrong location → `index.html` must be in root

**Fix:**
1. Verify GitHub Pages is enabled
2. Check branch is set to "main"
3. Ensure `index.html` is in repository root (not in subfolder)

---

## Alternative: Using Netlify with Custom Subdomain

If you prefer Netlify over GitHub Pages:

### 1. Deploy to Netlify

1. Go to https://www.netlify.com
2. Sign up (free)
3. Drag & drop `alberto-presentation` folder
4. Site deploys instantly

### 2. Add Custom Domain in Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `alberto.rosselli.no`
4. Netlify will show you DNS instructions

### 3. Configure DNS in domene.shop

Add CNAME record:
```
Type:     CNAME
Name:     alberto
Value:    [your-site-name].netlify.app
```

Netlify automatically handles HTTPS!

---

## Alternative: Using Cloudflare (Advanced)

For better performance and security:

### 1. Move DNS to Cloudflare

1. Sign up at https://www.cloudflare.com (free)
2. Add domain: `rosselli.no`
3. Cloudflare gives you nameservers

### 2. Update Nameservers in domene.shop

1. In domene.shop control panel
2. Find "Nameservers" or "DNS Servers"
3. Change to Cloudflare's nameservers
4. Save

### 3. Configure in Cloudflare

1. Add CNAME record in Cloudflare:
   ```
   Type:     CNAME
   Name:     alberto
   Value:    your-username.github.io
   Proxy:    Enabled (orange cloud)
   ```

**Benefits:**
- ✅ Faster global loading
- ✅ Better security (DDoS protection)
- ✅ Free SSL
- ✅ Analytics
- ✅ Caching

---

## Recommended DNS Configuration

### For GitHub Pages (Recommended)

```
Type      Name      Value                           TTL
CNAME     alberto   your-username.github.io         3600
```

### For Netlify

```
Type      Name      Value                           TTL
CNAME     alberto   your-site.netlify.app           3600
```

### For Vercel

```
Type      Name      Value                           TTL
CNAME     alberto   cname.vercel-dns.com            3600
```

---

## Complete Setup Checklist

### GitHub Setup
- [ ] Create GitHub account (if needed)
- [ ] Create repository
- [ ] Upload all files
- [ ] Enable GitHub Pages
- [ ] Add custom domain: alberto.rosselli.no

### DNS Setup (domene.shop)
- [ ] Log into domene.shop
- [ ] Access DNS settings for rosselli.no
- [ ] Add CNAME record: alberto → your-username.github.io
- [ ] Save changes
- [ ] Verify DNS propagation (dnschecker.org)

### HTTPS Setup
- [ ] Wait for DNS propagation (10-30 minutes)
- [ ] Check GitHub Pages shows "DNS check successful"
- [ ] Enable "Enforce HTTPS"
- [ ] Wait for certificate (10-15 minutes)
- [ ] Test: https://alberto.rosselli.no

### Final Testing
- [ ] Visit http://alberto.rosselli.no
- [ ] Visit https://alberto.rosselli.no
- [ ] Test on mobile device
- [ ] Test theme toggle
- [ ] Check all links work
- [ ] Test on different browsers

---

## Timeline

| Step | Time |
|------|------|
| Create GitHub repo & upload files | 5 min |
| Enable GitHub Pages | 2 min |
| Add custom domain in GitHub | 1 min |
| Configure DNS in domene.shop | 5 min |
| Wait for DNS propagation | 10-30 min |
| Enable HTTPS | 2 min |
| Wait for SSL certificate | 10-15 min |
| **Total** | **35-60 min** |

---

## What to Do Right Now

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Name: `alberto-presentation`
3. Public repository
4. Create

### Step 2: Upload Files
1. Click "uploading an existing file"
2. Drag all files from `alberto-presentation` folder
3. Commit

### Step 3: Enable Pages
1. Settings → Pages
2. Branch: main
3. Save

### Step 4: Add Custom Domain
1. Still in Pages settings
2. Custom domain: `alberto.rosselli.no`
3. Save

### Step 5: Configure DNS
1. Log into domene.shop
2. Find DNS settings for rosselli.no
3. Add CNAME:
   - Name: `alberto`
   - Value: `your-username.github.io`
4. Save

### Step 6: Wait & Enable HTTPS
1. Wait 10-30 minutes
2. Check GitHub Pages for "DNS check successful"
3. Enable "Enforce HTTPS"
4. Done!

---

## Support

### domene.shop Support
- Website: https://domene.shop
- Look for "Support" or "Help" section
- They can help with DNS configuration

### GitHub Pages Documentation
- https://docs.github.com/pages
- Custom domain setup guide
- Troubleshooting

### DNS Checking Tools
- https://dnschecker.org - Check DNS propagation
- https://www.whatsmydns.net - Global DNS checker
- https://mxtoolbox.com/DNSLookup.aspx - DNS lookup

---

## After Setup

### Updating Your Site

When you want to update content:

1. Edit files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Site updates automatically in 1-2 minutes

### Monitoring

- Check site loads correctly: https://alberto.rosselli.no
- Monitor uptime (GitHub Pages has 99.9% uptime)
- Check SSL certificate renewal (automatic)

---

## Quick Reference

**Your Domain:** rosselli.no
**Your Subdomain:** alberto.rosselli.no
**DNS Provider:** domene.shop
**Hosting:** GitHub Pages (recommended)
**GitHub Username:** [Your username]

**DNS Record:**
```
CNAME    alberto    your-username.github.io
```

**Final URL:** https://alberto.rosselli.no

---

**Ready to set up? Follow Step 1 above and let me know if you need help with any step!** 🚀

