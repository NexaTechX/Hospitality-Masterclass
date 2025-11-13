# Hospitality Accounting & Taxation Masterclass - Landing Page

A high-converting, responsive landing page for the 2-Day Hospitality Accounting & Taxation Masterclass event in Lagos, Nigeria.

## 🎯 Overview

This landing page is designed to promote and drive registrations for a professional masterclass targeting hospitality business owners, accountants, and managers. It features a bold, vibrant design with multiple conversion points and comprehensive event information.

## ✨ Features

### Design
- **Bold & Vibrant Color Scheme:** Green, yellow, and red accent colors for high energy
- **Fully Responsive:** Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX:** Card-based layouts, gradients, and smooth animations
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation support

### Functionality
- **Countdown Timer:** Real-time countdown to event date (Nov 25, 2025)
- **Smooth Scroll Navigation:** Seamless page navigation with offset for sticky header
- **Scroll Animations:** Fade-in and slide-in effects on scroll
- **Sticky Navigation:** Fixed header that appears on scroll
- **Mobile Menu:** Hamburger menu for mobile devices
- **Payment Integration:** Ready for payment link integration
- **Early Bird Discount Calculator:** Automatic 5% discount calculation
- **Copy to Clipboard:** Click bank details to copy
- **WhatsApp & Phone Links:** Direct click-to-call/message functionality

### Sections
1. **Hero Section:** Eye-catching headline with countdown timer
2. **Problem Statement:** Addresses pain points of target audience
3. **Benefits:** Four key benefits with icons
4. **Curriculum:** Five learning modules in detail
5. **Event Details:** Date, time, venue, pricing, and payment info
6. **Target Audience:** Who should attend
7. **Differentiators:** What makes this event unique
8. **Speakers:** Three expert instructor profiles with photos
9. **Organizers:** Partner organization logos
10. **Final CTA:** Multiple calls-to-action with contact options
11. **Sticky Bottom CTA:** Mobile-optimized floating registration button

## 📁 Project Structure

```
hospitality-masterclass/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All styling (no external dependencies)
├── js/
│   └── main.js               # Interactive features and functionality
├── images/
│   ├── speakers/             # Speaker profile photos
│   │   ├── speaker-1.jpg     # Prince Adebayo Adekanmbi
│   │   ├── speaker-2.jpg     # Adibe Nnaemeka Matthew
│   │   └── speaker-3.jpg     # Christopher A. Ehiogie
│   ├── logos/                # Organization logos
│   │   ├── adebola-logo.png  # Adebola Sobanjo & Co.
│   │   ├── bkr-logo.png      # BKR International
│   │   └── hatman-logo.png   # HATMAN
│   ├── hero/                 # Hero background images
│   │   └── hero-background.jpg
│   └── README.md             # Image specifications guide
└── README.md                 # This file
```

## 🚀 Quick Start

### Option 1: Direct Browser Opening

1. Download or clone this repository
2. Add required images to the `images/` folders (see Image Setup below)
3. Open `index.html` in any modern web browser
4. The page will work immediately without any build process

### Option 2: Local Server (Recommended)

Using Python 3:
```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Using Node.js (with `http-server`):
```bash
npx http-server -p 8000
```

Using PHP:
```bash
php -S localhost:8000
```

## 🖼️ Image Setup

### Required Images

You need to add the following images before deploying:

#### 1. Speaker Photos (3 images)
Place in `images/speakers/`:
- `speaker-1.jpg` - Prince Adebayo Waheed Adekanmbi
- `speaker-2.jpg` - Adibe Nnaemeka Matthew  
- `speaker-3.jpg` - Mr Christopher A. Ehiogie

**Specifications:**
- Format: JPG or PNG
- Dimensions: 800px × 1000px (portrait)
- Max size: 500KB each
- Professional headshots in business attire

#### 2. Organization Logos (3 images)
Place in `images/logos/`:
- `adebola-logo.png` - Adebola Sobanjo & Co.
- `bkr-logo.png` - BKR International
- `hatman-logo.png` - HATMAN

**Specifications:**
- Format: PNG (transparent background preferred)
- Dimensions: ~300px × 150px (flexible)
- Max size: 100KB each

#### 3. Hero Background (1 image)
Place in `images/hero/`:
- `hero-background.jpg` - Professional business/hotel setting

**Specifications:**
- Format: JPG (optimized)
- Dimensions: 1920px × 1080px minimum
- Max size: 300KB
- Shows professional business meeting or hospitality environment

**See `images/README.md` for detailed specifications and image optimization tips.**

## ⚙️ Configuration

### Payment Integration

Update the payment link in `js/main.js`:

```javascript
const CONFIG = {
    eventDate: new Date('2025-11-25T09:00:00'),
    paymentLink: 'https://your-payment-provider.com/your-link', // UPDATE THIS
    earlyBirdDiscount: 0.05,
    regularPrice: 200000
};
```

### Supported Payment Methods:
- Paystack
- Flutterwave
- Direct bank transfer
- Any custom payment URL

### Event Date & Time

To change the event date, update in `js/main.js`:

```javascript
eventDate: new Date('2025-11-25T09:00:00')  // Format: YYYY-MM-DDTHH:MM:SS
```

### Pricing

To modify pricing, update in `js/main.js`:

```javascript
earlyBirdDiscount: 0.05,     // 5% discount
regularPrice: 200000         // ₦200,000
```

### Contact Information

Update contact details in `index.html`:
- Search for phone numbers: `+2348178815515` and `0806947 9235`
- Search for WhatsApp link: `https://wa.me/2348178815515`
- Update as needed

### Bank Details

Update payment account information in `index.html`:
- Search for "Account Name: HATMAN"
- Update account name, bank, and account number

## 🎨 Customization

### Colors

Update the color scheme in `css/styles.css`:

```css
:root {
    --primary-green: #2B7A0B;
    --accent-yellow: #FFC436;
    --accent-red: #E63946;
    /* Modify as needed */
}
```

### Typography

Change fonts in `css/styles.css`:

```css
:root {
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

To use Google Fonts, add to `<head>` in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS:

```css
--font-primary: 'Poppins', sans-serif;
```

### Content Updates

All content is in `index.html`. Simply find and replace text as needed. The structure is semantic and well-commented for easy navigation.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Minimum Requirements:**
- CSS Grid support
- Intersection Observer API
- ES6 JavaScript

## 🌐 Deployment

### GitHub Pages

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at: `https://username.github.io/repo-name/`

### Netlify

1. Sign up at netlify.com
2. Drag and drop the project folder
3. Site deploys instantly
4. Get a custom domain or use Netlify subdomain

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts
4. Site deploys automatically

### Traditional Hosting (cPanel/FTP)

1. Zip all files
2. Upload to public_html or www folder
3. Extract files
4. Access via your domain

### Requirements:
- No server-side processing needed
- Static HTML/CSS/JS only
- Works on any web hosting

## 📊 Analytics Integration

### Google Analytics

Add before `</head>` in `index.html`:

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

### Facebook Pixel

Add before `</head>` in `index.html`:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🔧 Troubleshooting

### Images Not Showing

1. Check file names match exactly (case-sensitive)
2. Verify images are in correct folders
3. Check file extensions (.jpg, .png)
4. Ensure images are not corrupted

### Countdown Not Working

1. Check browser console for errors
2. Verify event date is in the future
3. Ensure JavaScript is enabled

### Mobile Menu Not Opening

1. Clear browser cache
2. Check JavaScript console for errors
3. Ensure `js/main.js` is loaded

### Smooth Scroll Not Working

1. Check if browser supports smooth scrolling
2. Verify anchor links have corresponding IDs
3. Clear browser cache

## 📈 Performance Optimization

### Image Optimization
- Compress all images before uploading
- Use WebP format for better compression (optional)
- Implement lazy loading for below-fold images

### Code Optimization
- Minify CSS and JavaScript for production
- Enable Gzip compression on server
- Use CDN for faster global delivery

### Tools:
- **CSS Minifier:** https://cssminifier.com/
- **JS Minifier:** https://javascript-minifier.com/
- **Image Compression:** https://tinypng.com/

## 🔒 Security Considerations

- No sensitive data stored in code
- Payment processing handled by third-party provider
- No form submissions (direct payment link)
- HTTPS recommended for production

## 📞 Support & Contact

For technical support or questions about this landing page:

**Event Organizers:**
- Phone: +234 817 881 5515
- Phone: 0806 947 9235
- WhatsApp: Available

**Development:**
- Built with vanilla HTML, CSS, and JavaScript
- No external dependencies
- Easy to maintain and customize

## 📄 License

This landing page was created specifically for the Hospitality Accounting & Taxation Masterclass event organized by:
- Adebola Sobanjo & Co. (Chartered Accountants)
- BKR International
- HATMAN

## 🎯 Conversion Optimization Features

1. **Multiple CTAs:** Strategically placed throughout the page
2. **Urgency Triggers:** Countdown timer, limited slots messaging
3. **Trust Indicators:** Speaker credentials, organizer logos
4. **Social Proof:** Expert profiles with years of experience
5. **Clear Value Proposition:** Benefits clearly stated
6. **Easy Contact:** Multiple ways to reach (phone, WhatsApp)
7. **Mobile Optimized:** Sticky CTA for mobile users
8. **Fast Loading:** Optimized for quick page load
9. **Accessibility:** Keyboard navigation, ARIA labels
10. **Professional Design:** Builds trust and credibility

## 🎓 Best Practices Used

- Semantic HTML5
- Mobile-first responsive design
- CSS Grid and Flexbox
- Vanilla JavaScript (no dependencies)
- Progressive enhancement
- Accessibility standards (WCAG)
- SEO-friendly structure
- Clean, maintainable code
- Comprehensive comments

## 📝 Changelog

### Version 1.0.0 (November 13, 2025)
- Initial release
- Complete landing page with all sections
- Full responsive design
- Interactive features implemented
- Documentation completed

## 🚀 Future Enhancements (Optional)

Consider adding:
- Email capture form integration
- Testimonials section
- FAQ accordion
- Photo gallery from previous events
- Live chat widget
- Multi-language support
- Blog/news section
- Video testimonials

---

**Built with ❤️ for the Hospitality Industry**

*Last Updated: November 13, 2025*

