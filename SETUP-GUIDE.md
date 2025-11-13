# Quick Setup Guide

This guide will help you get your landing page up and running in just a few minutes.

## ⚡ 5-Minute Setup Checklist

### Step 1: Add Your Images (Required)

📁 **Add these images to make your page look professional:**

1. **Speaker Photos** → `images/speakers/`
   - [ ] speaker-1.jpg (Prince Adebayo)
   - [ ] speaker-2.jpg (Adibe Matthew)
   - [ ] speaker-3.jpg (Christopher Ehiogie)

2. **Organization Logos** → `images/logos/`
   - [ ] adebola-logo.png
   - [ ] bkr-logo.png
   - [ ] hatman-logo.png

3. **Hero Background** → `images/hero/`
   - [ ] hero-background.jpg

💡 **Don't have images yet?** The page will still work, but placeholders will show. See `images/README.md` for detailed specifications.

---

### Step 2: Configure Payment Link (Important!)

Open `js/main.js` and find this section (around line 13):

```javascript
const CONFIG = {
    eventDate: new Date('2025-11-25T09:00:00'),
    paymentLink: 'https://paystack.com/pay/your-payment-link', // ⚠️ CHANGE THIS!
    earlyBirdDiscount: 0.05,
    regularPrice: 200000
};
```

**Replace** `https://paystack.com/pay/your-payment-link` **with your actual payment link.**

#### Where to Get Your Payment Link:

**Using Paystack:**
1. Log into your Paystack dashboard
2. Go to "Payment Pages"
3. Create a new payment page or use existing
4. Copy the payment page URL
5. Paste it in the `paymentLink` field

**Using Flutterwave:**
1. Log into Flutterwave dashboard
2. Go to "Payment Links"
3. Create a payment link for ₦200,000
4. Copy the link
5. Paste it in the `paymentLink` field

**Using Direct Bank Transfer Only:**
- Keep the link as is (clicking will scroll to bank details)
- Or set it to `'#register'` to scroll to the registration section

---

### Step 3: Test the Page

1. Open `index.html` in your web browser
2. Click "Register Now" button to test payment link
3. Check that all sections display correctly
4. Test on mobile (resize browser window)

---

### Step 4: Deploy Online

**Easiest Options:**

#### Option A: Netlify (Recommended - 2 minutes)
1. Go to https://app.netlify.com/drop
2. Drag your entire project folder onto the page
3. Get instant live URL
4. Share your link!

#### Option B: GitHub Pages (Free hosting)
1. Create GitHub account if you don't have one
2. Create new repository
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site is live at: `https://username.github.io/repository-name`

#### Option C: Your Own Hosting
1. Upload all files via FTP or cPanel
2. Extract to your domain's root folder
3. Access via your domain name

---

## 🎨 Optional Customizations

### Change Contact Phone Numbers

Open `index.html` and search for:
- `+2348178815515` → Replace with your number
- `08069479235` → Replace with your second number
- `https://wa.me/2348178815515` → Update WhatsApp link

### Change Bank Details

Open `index.html` and search for "Payment Details" section:
```html
<div class="bank-item">
    <span class="bank-label">Account Name:</span>
    <span class="bank-value">HATMAN</span> <!-- Change this -->
</div>
```

### Change Event Date/Time

Open `js/main.js` and update:
```javascript
eventDate: new Date('2025-11-25T09:00:00')  // Format: YYYY-MM-DDTHH:MM:SS
```

### Change Pricing

Open `js/main.js` and update:
```javascript
regularPrice: 200000,        // Change ₦200,000
earlyBirdDiscount: 0.05      // Change 5% discount
```

Also update in `index.html` (search for "₦200,000").

### Change Colors

Open `css/styles.css` and modify (around line 18):
```css
:root {
    --primary-green: #2B7A0B;    /* Main green color */
    --accent-yellow: #FFC436;     /* Yellow accent */
    --accent-red: #E63946;        /* Red accent */
}
```

---

## 🐛 Troubleshooting

### Problem: Images don't show
**Solution:** 
- Check file names are exactly: `speaker-1.jpg`, `speaker-2.jpg`, etc.
- Make sure images are in the correct folders
- File names are case-sensitive!

### Problem: Countdown shows wrong date
**Solution:**
- Open `js/main.js`
- Update the `eventDate` to your event date
- Clear browser cache and refresh

### Problem: Payment button doesn't work
**Solution:**
- Make sure you updated the `paymentLink` in `js/main.js`
- Check browser console for errors (press F12)
- Test the payment link directly in a new tab

### Problem: Page doesn't look right on mobile
**Solution:**
- Clear browser cache
- Try in incognito/private mode
- Check if all CSS/JS files loaded correctly

### Problem: WhatsApp link doesn't work
**Solution:**
- Format should be: `https://wa.me/2348178815515` (no spaces or special characters)
- Include country code without the +
- Test link in a new browser tab

---

## 📊 Track Your Success

### Add Google Analytics (Optional)

1. Create Google Analytics account
2. Get your Measurement ID (looks like: G-XXXXXXXXXX)
3. Open `index.html`
4. Add before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

This lets you track:
- How many people visit
- Which buttons they click
- How long they stay
- Where they come from

---

## ✅ Pre-Launch Checklist

Before sharing your landing page, verify:

- [ ] All images are uploaded and showing
- [ ] Payment link is configured and tested
- [ ] Contact phone numbers are correct
- [ ] Bank details are accurate
- [ ] Event date/time is correct
- [ ] Pricing is correct
- [ ] All links work (test each one!)
- [ ] Page loads fast (under 3 seconds)
- [ ] Mobile version looks good
- [ ] No spelling errors in content
- [ ] Speaker information is accurate

---

## 🚀 Marketing Tips

Once your page is live:

1. **Share on Social Media:**
   - Facebook, Instagram, LinkedIn, Twitter
   - Use eye-catching screenshots
   - Include a call-to-action

2. **Email Your List:**
   - Send to existing customers/contacts
   - Create urgency with countdown
   - Highlight early bird discount

3. **WhatsApp Business:**
   - Share link in relevant groups
   - Send to business contacts
   - Create a broadcast list

4. **Run Ads:**
   - Facebook Ads to hospitality business owners
   - Google Ads for relevant keywords
   - Instagram Ads with carousel images

5. **Partner Promotion:**
   - Ask partners to share on their channels
   - Create co-branded promotional materials
   - Leverage organizer networks

---

## 📞 Need Help?

**For Technical Issues:**
- Check the main `README.md` file for detailed documentation
- Review the `images/README.md` for image specifications
- Open browser console (F12) to see error messages

**For Event Questions:**
- Call: +234 817 881 5515
- Call: 0806 947 9235
- WhatsApp: Available

---

## 🎯 Success Metrics to Track

Monitor these to optimize your landing page:

- **Visitor Count:** How many people visit
- **Conversion Rate:** % who click "Register"
- **Bounce Rate:** % who leave immediately
- **Time on Page:** How long people stay
- **Mobile vs Desktop:** Where traffic comes from
- **Traffic Sources:** Social, email, direct, etc.

**Good Benchmarks:**
- Conversion Rate: 2-5% is good, 5-10% is excellent
- Time on Page: 2+ minutes shows engagement
- Bounce Rate: Under 60% is good

---

## 🎉 You're Ready!

Your landing page is now ready to start converting visitors into registrations. Good luck with your masterclass!

**Remember:** Test everything before going live, and keep monitoring performance to make improvements.

---

**Questions?** Refer to the comprehensive `README.md` file for detailed information.

*Last Updated: November 13, 2025*

