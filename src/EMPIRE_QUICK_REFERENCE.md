# 🚀 Quick Reference for Your Team
## "Just give me what I need to add to my project"

**Last Updated:** December 20, 2024

---

## 🎯 FOR TEAMS BUILDING OTHER LANDING PAGES

If you're building landing pages for any of these 7 brands in a **different project** (not the main React codebase), here's what you need:

---

## ✅ WHAT TO ADD TO YOUR HTML

### **Step 1: Add to `<head>` tag (right after opening `<head>`)**

```html
<!-- Google Tag Manager via Stape Server -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://tracking.jayscatering.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJG6R99K');</script>
<!-- End Google Tag Manager -->
```

### **Step 2: Add to `<body>` tag (immediately after opening `<body>`)**

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://tracking.jayscatering.com/ns.html?id=GTM-TJG6R99K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### **Step 3 (Optional): Add HubSpot Form Auto-Fill**

If you're using HubSpot forms and want to capture UTM parameters and click IDs:

```html
<!-- HubSpot Form Auto-Fill for UTM & Click ID Tracking -->
<script>
window.addEventListener('message', function(event) {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
        var form = document.querySelector('form[data-form-id="' + event.data.id + '"]');
        
        function getCookie(name) {
            var match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
            return match ? match.pop() : '';
        }

        var urlParams = new URLSearchParams(window.location.search);
        
        var tracking = {
            'utm_source': urlParams.get('utm_source'),
            'utm_medium': urlParams.get('utm_medium'),
            'utm_campaign': urlParams.get('utm_campaign'),
            'utm_content': urlParams.get('utm_content'),
            'utm_term': urlParams.get('utm_term'),
            'gclid': urlParams.get('gclid'),
            'fbc': getCookie('_fbc') || (urlParams.get('fbclid') ? 'fb.1.' + Date.now() + '.' + urlParams.get('fbclid') : ''),
            'fbp': getCookie('_fbp')
        };

        for (var key in tracking) {
            if (tracking[key]) {
                var input = form.querySelector('input[name="' + key + '"]');
                if (input) {
                    input.value = tracking[key];
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
        }
    }
});
</script>
```

**⚠️ Add this script to `<head>` BEFORE the closing `</head>` tag.**

---

## ❌ WHAT NOT TO ADD

**DO NOT add:**
- ❌ Separate Meta Pixel code
- ❌ Separate GA4 code
- ❌ Brand-specific tracking IDs
- ❌ Any other GTM container
- ❌ HubSpot tracking pixel (GTM handles this)

**WHY?** 
GTM automatically detects which brand you are based on your domain and loads the correct tracking IDs.

---

## 🎯 HOW IT WORKS

When someone visits your site:

1. **GTM loads** from `tracking.jayscatering.com`
2. **GTM detects your domain** (e.g., `lp.grandgimeno.com`)
3. **GTM looks up the brand** in its lookup table
4. **GTM loads the correct:**
   - GA4 Measurement ID
   - Meta Pixel ID
   - Brand name for events
5. **Tracking starts automatically** - you do nothing else!

---

## 📊 THE 7 BRANDS & THEIR DOMAINS

| Brand | Your Domain | What GTM Loads |
|-------|-------------|----------------|
| **Jay's Catering** | lp.jayscatering.com | GA4: G-MNGQ6T3S7L<br>Meta: 511510642697274 |
| **Ellie's Table** | lp.elliestable.com | GA4: G-H149DE94FR<br>Meta: **1097130558389260** ⚠️ |
| **Grand Gimeno** | lp.grandgimeno.com | GA4: G-C53EL9R7Z6<br>Meta: 511510642697274 |
| **Serra Plaza** | lp.serraplaza.com | GA4: G-2GGX4RHXPR<br>Meta: 511510642697274 |
| **Hangar 21** | lp.hangar21venue.com | GA4: G-Y1WSBF33PJ<br>Meta: 511510642697274 |
| **Estate on Second** | lp.estateonsecond.com | GA4: G-HDX153V4FB<br>Meta: 511510642697274 |
| **The Casino** | lp.thecasinosc.com | GA4: G-6BSN49J27D<br>Meta: 511510642697274 |

**Note:** Ellie's Table has a unique Meta Pixel. All others share one.

---

## 🧪 HOW TO TEST

### **1. Check GTM Loaded:**
1. Open your site in browser
2. Press `F12` to open DevTools
3. Go to **Console** tab
4. Look for: `✅ GTM is active and running!`

### **2. Check Tags Fire:**
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your page
3. Should show: **PageView event** with correct Pixel ID
4. Submit form
5. Should show: **Lead event**

### **3. Check GA4:**
1. Go to your brand's GA4 property
2. Navigate to **Reports → Realtime**
3. Visit your page
4. Should see your pageview appear within 30 seconds

---

## 🚨 COMMON ISSUES

### **Issue: "GTM not loading"**
**Fix:**
- Check you added BOTH scripts (head + body)
- Check you're using the exact code above (no typos)
- Check Network tab in DevTools for blocked requests

### **Issue: "Wrong tracking IDs firing"**
**Fix:**
- Verify your domain is EXACTLY: `lp.brandname.com`
- No `www.`, no extra subdomains
- Contact the GTM admin to add your domain to lookup tables

### **Issue: "Meta Pixel fires twice"**
**Fix:**
- Remove any separate Meta Pixel code from your project
- Only use the GTM script above

### **Issue: "GA4 shows wrong property"**
**Fix:**
- Verify your domain matches the lookup table
- Contact GTM admin to verify GA4 ID is correct

---

## 📞 WHO TO CONTACT

### **For GTM Issues:**
Contact the GTM container admin to:
- Add new domains to lookup tables
- Update tracking IDs
- Verify GTM configuration

### **For GA4 Issues:**
Check with GA4 property owner for your brand.

### **For Meta Pixel Issues:**
- **6 brands:** Use shared pixel `511510642697274`
- **Ellie's Table:** Has unique pixel `1097130558389260`

---

## ✅ DEPLOYMENT CHECKLIST

Before launching your site:

- [ ] Added GTM script to `<head>`
- [ ] Added GTM noscript to `<body>`
- [ ] Added HubSpot auto-fill script (if using HubSpot forms)
- [ ] Tested GTM loads (check console)
- [ ] Tested Meta Pixel fires (use Pixel Helper)
- [ ] Tested GA4 tracks (check Realtime report)
- [ ] Tested form submission (check Lead event)
- [ ] Removed any duplicate tracking code
- [ ] Verified correct domain: `lp.brandname.com`

---

## 🎯 SUMMARY

**What you add:**
- 2 GTM scripts (head + body)
- 1 HubSpot auto-fill script (optional)

**What GTM does automatically:**
- Detects your brand
- Loads correct GA4 ID
- Loads correct Meta Pixel
- Tracks pageviews
- Tracks conversions

**What you DON'T add:**
- Separate Meta Pixel code
- Separate GA4 code
- Brand-specific IDs

---

**Questions? Check [WHAT-YOU-ACTUALLY-HAVE.md](./WHAT-YOU-ACTUALLY-HAVE.md) for full details.** 🚀
