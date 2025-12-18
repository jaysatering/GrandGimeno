# Grand Gimeno Tracking Documentation

**Last Updated:** December 18, 2024  
**Properties:**
- **Webflow Site:** `grandgimeno.com` (main website)
- **Vercel Landing Page:** `lp.grandgimeno.com` (Meta ads landing page)
- **Cross-Domain Partner:** `jayscatering.com` (for attribution tracking)

---

## Overview

This document contains all tracking codes for Grand Gimeno's multi-property setup with cross-domain tracking between Webflow, Vercel landing pages, and partner sites.

---

## 1. WEBFLOW TRACKING CODE

**Location:** Webflow → Site Settings → Custom Code → **Head Code**

### Complete Head Code for Webflow

```html
<!-- Google Analytics 4 with Cross-Domain Tracking -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-C53EL9R7Z6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-C53EL9R7Z6', {
    'linker': {
      'domains': ['grandgimeno.com', 'lp.grandgimeno.com', 'jayscatering.com']
    }
  });
</script>

<!-- Google Ads Conversion Tracking -->
<script>
  gtag('config', 'AW-11462847665');
</script>

<!-- HubSpot Tracking Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/48463492.js"></script>
```

### Webflow App Integration Settings

**IMPORTANT:** Remove GA4 from Webflow's built-in Apps & Integrations to avoid double-tracking.

**What to KEEP in Apps & Integrations:**
- ✅ **Meta Pixel ID:** `511510642697274` (keep in Webflow app)
- ✅ **HubSpot App:** Keep connected
- ❌ **GA4 Measurement ID:** Remove `G-C53EL9R7Z6` from Webflow app (we're loading it via custom code instead)

---

## 2. VERCEL LANDING PAGE TRACKING CODE

**Location:** `/index.html` → `<head>` section

### Complete Head Code for Vercel

```html
<!-- Google Analytics 4 with Cross-Domain Tracking -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-C53EL9R7Z6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-C53EL9R7Z6', {
    'linker': {
      'domains': ['grandgimeno.com', 'lp.grandgimeno.com', 'jayscatering.com']
    }
  });
</script>

<!-- Google Ads Conversion Tracking -->
<script>
  gtag('config', 'AW-11462847665');
</script>

<!-- Meta Pixel & HubSpot loaded via React in App.tsx -->
```

**Note:** Meta Pixel (`511510642697274`) and HubSpot (`48463492`) are loaded dynamically in `/App.tsx` for the Vercel landing page.

---

## 3. CROSS-DOMAIN TRACKING SETUP

### Domains Included in Cross-Domain Tracking

```javascript
'linker': {
  'domains': ['grandgimeno.com', 'lp.grandgimeno.com', 'jayscatering.com']
}
```

### How Cross-Domain Tracking Works

1. **User visits `lp.grandgimeno.com`** (Vercel landing page from Meta ad)
   - GA4 creates a Client ID (stored in `_ga` cookie)
   
2. **User clicks link to `grandgimeno.com`** (Webflow main site)
   - GA4 linker automatically appends `?_gl=xxxxx` parameter to URL
   - Webflow site reads the parameter and continues the same session
   - User is tracked as **same visitor** (not a new session)

3. **User visits `jayscatering.com`** (partner site)
   - Same cross-domain tracking applies
   - Allows attribution tracking across venue family

### Testing Cross-Domain Tracking

**Test if cross-domain is working:**

1. Open `grandgimeno.com` in browser
2. Open DevTools Console (`Cmd+Option+I` on Mac, `F12` on Windows)
3. Paste this code:
```javascript
document.cookie.split(';').filter(c => c.includes('_ga')).join('\n')
```
4. Copy the `_ga` cookie value
5. Click a link to `lp.grandgimeno.com`
6. Run the same code on the new page
7. **If values match** → Cross-domain is working ✅
8. **If values differ** → Cross-domain is broken ❌

---

## 4. UNWANTED REFERRALS EXCLUSION

### GA4 Referral Exclusion List

**Location:** GA4 Admin → Data Streams → Click your stream → Configure tag settings → Show more → List unwanted referrals

**Add these domains to exclude internal traffic from being counted as referrals:**

```
grandgimeno.com
lp.grandgimeno.com
jayscatering.com
www.grandgimeno.com
www.lp.grandgimeno.com
www.jayscatering.com
```

**Why this matters:**
- Without exclusions, GA4 treats clicks between your own sites as "referral traffic"
- Inflates referral numbers and breaks attribution
- Excludes these domains so traffic flowing between them is tracked as **same session**

### How to Add Unwanted Referrals in GA4

1. Go to **GA4 Admin** (bottom left gear icon)
2. Click **Data Streams** (under Property column)
3. Click your data stream (`G-C53EL9R7Z6`)
4. Click **Configure tag settings**
5. Scroll down → Click **Show more**
6. Click **List unwanted referrals**
7. Click **Add condition** → **Referral domain contains**
8. Add each domain above (one at a time)
9. Click **Save**

---

## 5. GOOGLE ADS CONVERSION TRACKING

### Google Ads Account ID

```
AW-11462847665
```

### Basic Conversion Tracking

The base Google Ads tracking is installed on both sites (see codes above). This tracks:
- ✅ Page views
- ✅ Remarketing audiences
- ✅ Basic conversions

### Event-Specific Conversion Tracking

To track specific conversions (e.g., form submissions), add this code when the conversion happens:

```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-11462847665/YOUR_CONVERSION_LABEL'
});
```

**Where to find your conversion label:**
1. Go to Google Ads → Tools → Conversions
2. Click on your conversion action
3. Copy the conversion label (looks like `abc123DEF456`)
4. Replace `YOUR_CONVERSION_LABEL` in the code above

**Example:** Form submission conversion
```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-11462847665/abc123DEF456',
  'value': 1.0,
  'currency': 'USD'
});
```

---

## 6. META PIXEL TRACKING

### Meta Pixel ID

```
511510642697274
```

### Installation Locations

**Webflow:**
- Installed via **Webflow Apps & Integrations**
- Go to Site Settings → Integrations → Meta Pixel → Enter `511510642697274`

**Vercel:**
- Installed via **React App.tsx** (dynamic loading with Event IDs for CAPI deduplication)
- Standard events: `PageView`, `Lead` (on form submission)

### Custom Conversions

**Important:** All venues share the same Meta Pixel ID (`511510642697274`) but use **domain-specific custom conversions** in Meta Events Manager.

**How to set up custom conversions:**
1. Go to **Meta Events Manager** → Click your pixel
2. Click **Custom Conversions** tab
3. Create a new custom conversion
4. Set URL rule: `URL contains lp.grandgimeno.com` (or specific page)
5. Assign conversion event (e.g., `Lead`)
6. Use this custom conversion in your Meta ad campaigns

---

## 7. HUBSPOT TRACKING

### HubSpot Portal ID

```
48463492
```

### Installation

**Webflow:**
- Installed via **Webflow Apps & Integrations** (HubSpot app connected)
- Also loaded in Head Code for forms

**Vercel:**
- Loaded dynamically in **App.tsx**

### Form Tracking

HubSpot automatically tracks:
- ✅ Form submissions
- ✅ Page views
- ✅ Contact creation/updates
- ✅ Email engagement

---

## 8. TRACKING IDS QUICK REFERENCE

| Platform | ID/Code | Purpose |
|----------|---------|---------|
| **GA4** | `G-C53EL9R7Z6` | Analytics + cross-domain tracking |
| **Google Ads** | `AW-11462847665` | Conversion tracking + remarketing |
| **Meta Pixel** | `511510642697274` | Facebook/Instagram ads tracking |
| **HubSpot** | `48463492` | CRM + form tracking |

---

## 9. DEPLOYMENT CHECKLIST

### When Deploying Tracking Updates

**Webflow:**
- [ ] Update Head Code in Site Settings → Custom Code
- [ ] Remove GA4 from Apps & Integrations (if not already removed)
- [ ] Verify Meta Pixel is in Apps & Integrations
- [ ] **Publish site**
- [ ] Test with GA4 Realtime

**Vercel:**
- [ ] Update `/index.html` with tracking code
- [ ] Ensure `/App.tsx` loads Meta Pixel and HubSpot
- [ ] **Deploy to Vercel**
- [ ] Test with GA4 Realtime

**GA4 Admin:**
- [ ] Verify cross-domain domains are listed in tag settings
- [ ] Add unwanted referrals exclusions
- [ ] Test cross-domain with cookie inspection

**Google Ads:**
- [ ] Verify conversion tracking tag is firing (Google Tag Assistant)
- [ ] Set up conversion actions with labels

**Meta Events Manager:**
- [ ] Verify pixel is firing (Meta Pixel Helper Chrome extension)
- [ ] Create domain-specific custom conversions
- [ ] Test Lead event with Event ID deduplication

---

## 10. TROUBLESHOOTING

### GA4 Not Tracking

**Check:**
1. Is `gtag.js` script loading? (Check Network tab in DevTools)
2. Is `dataLayer` being pushed? (Console: `window.dataLayer`)
3. Is Realtime showing activity? (GA4 → Realtime)

**Common fixes:**
- Clear browser cache
- Check for ad blockers
- Verify measurement ID is correct

### Cross-Domain Not Working

**Check:**
1. Are linker domains matching exactly in both sites?
2. Are links between sites using standard `<a>` tags? (Not JavaScript redirects)
3. Are unwanted referrals added to GA4 exclusion list?

**Test with:**
```javascript
document.cookie.split(';').filter(c => c.includes('_ga'))
```

### Double Tracking in GA4

**Check:**
- Is GA4 installed in BOTH Webflow custom code AND Apps & Integrations?
- Remove from Apps & Integrations, keep only custom code

### Meta Pixel Not Firing

**Check:**
1. Install Meta Pixel Helper Chrome extension
2. Visit site → Click extension → Should show green checkmark
3. Check Events Manager for live events

---

## 11. NOTES

- **Growify Pixel:** Previously installed, removed December 2024 (agency leftover)
- **Cross-Domain Updates:** If adding more domains, update BOTH Webflow and Vercel tracking codes
- **Server-Side Tracking:** Vercel app is ready for Stape GTM server-side tracking (see `/config/tracking.ts`)
- **CAPI:** Meta Conversions API not yet implemented (Event IDs ready for future CAPI setup)

---

## Questions?

Contact: [Your contact info here]

Last reviewed: December 18, 2024
