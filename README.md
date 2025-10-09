# Alberto Rosselli - Professional Presentation Page

A modern, responsive single-page presentation/resume website with dark and light mode toggle.

## Features

### Design
- **Dual Theme Support**: Toggle between light and dark modes with a single click
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design inspired by contemporary resume templates
- **Smooth Animations**: Fade-in effects and hover interactions for enhanced user experience

### Sections
1. **Profile Photo**: Circular profile image with accent border
2. **About Me**: Professional summary and introduction
3. **Contact Information**: Address, phone, and email with icons
4. **Social Links**: Website, LinkedIn, GitHub, and WhatsApp
5. **Education**: Academic background with timeline
6. **Experience**: Professional work history with detailed descriptions
7. **Skills**: Visual skill cards with icons for different competencies
8. **Languages**: Language proficiency with flag indicators

### Technical Features
- **Theme Persistence**: Selected theme is saved in browser localStorage
- **Keyboard Shortcut**: Press `Ctrl+Shift+T` (or `Cmd+Shift+T` on Mac) to toggle theme
- **Smooth Scrolling**: Animated scroll behavior for better navigation
- **Print-Friendly**: Optimized styles for printing
- **Accessibility**: Proper ARIA labels and semantic HTML

## File Structure

```
alberto-presentation/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles with theme variables
├── script.js           # JavaScript for interactivity
├── profile-photo.png   # Profile photo
└── README.md          # This file
```

## Usage

### Local Development

1. **Open the page**:
   - Simply open `index.html` in any modern web browser
   - Or use a local server:
     ```bash
     python3 -m http.server 8000
     ```
   - Then navigate to `http://localhost:8000`

2. **Toggle Theme**:
   - Click the sun/moon icon in the top-right corner
   - Or press `Ctrl+Shift+T` (Windows/Linux) or `Cmd+Shift+T` (Mac)

3. **View on Mobile**:
   - Open browser DevTools (F12)
   - Toggle device toolbar
   - Test responsive design

### Deployment Options

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name/`

#### Option 2: Netlify (Free)
1. Go to https://www.netlify.com
2. Drag and drop the `alberto-presentation` folder
3. Get instant deployment with custom domain support

#### Option 3: Vercel (Free)
1. Go to https://vercel.com
2. Import from GitHub or upload files
3. Automatic deployment with preview URLs

#### Option 4: Traditional Web Hosting
1. Upload all files to your web hosting via FTP
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-accent: #f0a500;  /* Change accent color */
    --bg-left: #5a6268;    /* Change left section background */
}
```

### Updating Content

Edit `index.html` to modify:
- Personal information
- Work experience
- Education details
- Skills
- Contact information

### Adding Sections

1. Add new section in HTML:
```html
<section class="section">
    <h2 class="section-title">New Section</h2>
    <!-- Your content here -->
</section>
```

2. Style it in `styles.css` if needed

### Changing Profile Photo

Replace `profile-photo.png` with your own photo (recommended size: 500x500px or larger)

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer (not supported)

## Performance

- **Lightweight**: Total page size < 1.5MB (including photo)
- **Fast Loading**: No heavy frameworks, pure HTML/CSS/JS
- **CDN**: Font Awesome loaded from CDN for icons
- **Optimized**: Minimal HTTP requests

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for readability
- Alt text for images

## SEO Optimization

To improve SEO, add these meta tags in `<head>`:

```html
<meta name="description" content="Alberto Rosselli - Senior IT Specialist with 15+ years of experience in cloud architecture and full-stack development">
<meta name="keywords" content="IT Specialist, Cloud Architect, Full-Stack Developer, Norway">
<meta name="author" content="Alberto Rosselli">
<meta property="og:title" content="Alberto Rosselli - Senior IT Specialist">
<meta property="og:description" content="Professional presentation page">
<meta property="og:image" content="profile-photo.png">
<meta property="og:url" content="https://yourwebsite.com">
```

## License

This presentation page is created for Alberto Rosselli. Feel free to use and modify as needed.

## Credits

- **Design Inspiration**: Modern resume templates
- **Icons**: Font Awesome 6.4.0
- **Fonts**: System fonts (Segoe UI, etc.)
- **Development**: Custom HTML/CSS/JavaScript

## Support

For questions or issues:
- Email: alberto@rosselli.no
- Website: https://www.ntnu.no/ansatte/alberto.rosselli

## Version History

- **v1.0.0** (October 2025): Initial release
  - Dark/Light theme toggle
  - Responsive design
  - Complete CV information
  - Social media links
  - Print-friendly layout

---

**Built with ❤️ for professional presentation**

