# 🏰 THE EMPIRE GTM SETUP
## One GTM Container to Rule Them All

**Container:** GTM-TJG6R99K  
**Stape Server:** tracking.jayscatering.com  
**Purpose:** Universal tracking for all 7 brands  
**Last Updated:** December 20, 2024

---

## ⚠️ IMPORTANT NOTE

**This document describes the GTM CONTAINER configuration.**

- The GTM container works for BOTH Vercel landing pages AND Webflow main sites
- **Vercel landing pages (this React project):** GTM loads via React component - DO NOT add HTML script
- **Webflow main sites (separate):** Add GTM HTML script to Webflow Custom Code section
- **Other projects:** Add GTM HTML script to their HTML (see EMPIRE_QUICK_REFERENCE.md)

**For Vercel React project:** GTM is already installed via `/components/GTMLoader.tsx` - nothing to add!

---

## 🎯 THE EMPIRE AT A GLANCE

**This GTM container covers 14 domains across 7 brands:**

| Brand | Webflow Domain | Vercel LP Domain | GA4 | Meta Pixel | HubSpot |
|-------|----------------|------------------|-----|------------|---------|
| Jay's Catering | jayscatering.com | lp.jayscatering.com | G-MNGQ6T3S7L | 511510642697274 | 48463492 |
| Ellie's Table | elliestable.com | lp.elliestable.com | G-H149DE94FR | 1097130558389260 | 48463492 |
| Grand Gimeno | grandgimeno.com | lp.grandgimeno.com | G-C53EL9R7Z6 | 511510642697274 | 48463492 |
| Serra Plaza | serraplazaevents.com | lp.serraplaza.com | G-2GGX4RHXPR | 511510642697274 | 48463492 |
| Hangar 21 | hangar21venue.com | lp.hangar21venue.com | G-Y1WSBF33PJ | 511510642697274 | 48463492 |
| Estate on Second | estateonsecond.com | lp.estateonsecond.com | G-HDX153V4FB | 511510642697274 | 48463492 |
| The Casino | thecasinosc.com | lp.thecasinosc.com | G-6BSN49J27D | 511510642697274 | 48463492 |

**Total Domains Supported:** 14  
**Shared Meta Pixel:** 511510642697274 (6 brands)  
**Unique Meta Pixel:** 1097130558389260 (Ellie's Table only)  
**Shared HubSpot:** 48463492 (all brands)

---

## 🔧 PHASE 1: CREATE VARIABLES

### **Variable 1: Brand - GA4 Measurement ID**

**Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

| Input (Hostname) | Output (GA4 ID) |
|------------------|-----------------|
| jayscatering.com | G-MNGQ6T3S7L |
| lp.jayscatering.com | G-MNGQ6T3S7L |
| elliestable.com | G-H149DE94FR |
| lp.elliestable.com | G-H149DE94FR |
| grandgimeno.com | G-C53EL9R7Z6 |
| lp.grandgimeno.com | G-C53EL9R7Z6 |
| serraplazaevents.com | G-2GGX4RHXPR |
| lp.serraplaza.com | G-2GGX4RHXPR |
| hangar21venue.com | G-Y1WSBF33PJ |
| lp.hangar21venue.com | G-Y1WSBF33PJ |
| estateonsecond.com | G-HDX153V4FB |
| lp.estateonsecond.com | G-HDX153V4FB |
| thecasinosc.com | G-6BSN49J27D |
| lp.thecasinosc.com | G-6BSN49J27D |

**Default Value:** `G-MNGQ6T3S7L` (Jay's Catering - Master Brand)

---

### **Variable 2: Brand - Meta Pixel ID**

**Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

| Input (Hostname) | Output (Pixel ID) |
|------------------|-------------------|
| jayscatering.com | 511510642697274 |
| lp.jayscatering.com | 511510642697274 |
| elliestable.com | 1097130558389260 |
| lp.elliestable.com | 1097130558389260 |
| grandgimeno.com | 511510642697274 |
| lp.grandgimeno.com | 511510642697274 |
| serraplazaevents.com | 511510642697274 |
| lp.serraplaza.com | 511510642697274 |
| hangar21venue.com | 511510642697274 |
| lp.hangar21venue.com | 511510642697274 |
| estateonsecond.com | 511510642697274 |
| lp.estateonsecond.com | 511510642697274 |
| thecasinosc.com | 511510642697274 |
| lp.thecasinosc.com | 511510642697274 |

**Default Value:** `511510642697274`

---

### **Variable 3: Brand - Name**

**Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

| Input (Hostname) | Output (Brand Name) |
|------------------|---------------------|
| jayscatering.com | Jay's Catering |
| lp.jayscatering.com | Jay's Catering |
| elliestable.com | Ellie's Table |
| lp.elliestable.com | Ellie's Table |
| grandgimeno.com | Grand Gimeno |
| lp.grandgimeno.com | Grand Gimeno |
| serraplazaevents.com | Serra Plaza |
| lp.serraplaza.com | Serra Plaza |
| hangar21venue.com | Hangar 21 |
| lp.hangar21venue.com | Hangar 21 |
| estateonsecond.com | Estate on Second |
| lp.estateonsecond.com | Estate on Second |
| thecasinosc.com | The Casino |
| lp.thecasinosc.com | The Casino |

**Default Value:** `Jay's Catering` (Master Brand)

---

### **Variable 4: Enable Built-In Variables**

Go to **Variables** → **Configure**

Enable these:
- ✅ Page Hostname
- ✅ Page Path
- ✅ Page URL
- ✅ Referrer
- ✅ Click Element
- ✅ Click URL
- ✅ Form Element
- ✅ Form ID

---

## 🏷️ PHASE 2: CREATE TAGS

### **Tag 1: GA4 - Config - Universal (All Brands)**

**Tag Type:** Google Analytics: GA4 Configuration  
**Tag Name:** `GA4 - Config - Universal (All Brands)`

**Configuration:**
- **Measurement ID:** `{{Brand - GA4 Measurement ID}}`
- **Send a page view event when this configuration loads:** ❌ UNCHECKED

**Fields to Set:**
| Field Name | Value |
|------------|-------|
| brand_name | `{{Brand - Name}}` |
| send_page_view | false |

**Triggering:** All Pages

---

### **Tag 2: GA4 - Event - Pageview (via Server)**

**Tag Type:** Google Analytics: GA4 Event  
**Tag Name:** `GA4 - Event - Pageview (via Server)`

**Configuration:**
- **Configuration Tag:** `{{Brand - GA4 Measurement ID}}`
- **Event Name:** `page_view`

**Event Parameters:**
| Parameter Name | Value |
|----------------|-------|
| brand_name | `{{Brand - Name}}` |
| page_location | `{{Page URL}}` |
| page_referrer | `{{Referrer}}` |

**Triggering:** All Pages

---

### **Tag 3: Meta Pixel - Universal (All Brands)**

**Tag Type:** Custom HTML  
**Tag Name:** `Meta Pixel - Universal (All Brands)`

**HTML:**
```html
<script>
// Initialize Meta Pixel via Stape Server-Side
!function(f,b,e,v,n,t,s) {
  if(f.fbq) return;
  n=f.fbq=function(){
    n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
  };
  if(!f._fbq) f._fbq=n;
  n.push=n;
  n.loaded=!0;
  n.version='2.0';
  n.queue=[];
  t=b.createElement(e);
  t.async=!0;
  t.src='https://tracking.jayscatering.com/fbevents.js';
  s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)
}(window, document, 'script');

// Use dynamic pixel ID from GTM variable
fbq('init', '{{Brand - Meta Pixel ID}}');
fbq('track', 'PageView');

console.log('Meta Pixel initialized for ' + '{{Brand - Name}}' + ' (ID: ' + '{{Brand - Meta Pixel ID}}' + ')');
</script>
```

**Triggering:** All Pages  
**Advanced Settings → Tag firing options:** Once per page

---

### **Tag 4: Meta Pixel - Lead Event (Form Submit)**

**Tag Type:** Custom HTML  
**Tag Name:** `Meta Pixel - Lead Event (Form Submit)`

**HTML:**
```html
<script>
if (window.fbq) {
  fbq('track', 'Lead', {
    content_name: '{{Brand - Name}} - Contact Form',
    brand: '{{Brand - Name}}',
    source_url: '{{Page URL}}'
  });
  console.log('Meta Pixel Lead event fired for ' + '{{Brand - Name}}');
}
</script>
```

**Triggering:** Form Submission - All Forms

---

### **Tag 5: GA4 - Event - Form Submit**

**Tag Type:** Google Analytics: GA4 Event  
**Tag Name:** `GA4 - Event - Form Submit`

**Configuration:**
- **Configuration Tag:** `{{Brand - GA4 Measurement ID}}`
- **Event Name:** `form_submit`

**Event Parameters:**
| Parameter Name | Value |
|----------------|-------|
| brand_name | `{{Brand - Name}}` |
| form_destination | `{{Page URL}}` |

**Triggering:** Form Submission - All Forms

---

## 🧪 PHASE 3: TEST THE EMPIRE

### **Enable Preview Mode**
1. GTM → Click **"Preview"**
2. Test each domain (14 total)

### **Test Checklist:**

#### **Jay's Catering**
- [ ] jayscatering.com → GA4: G-MNGQ6T3S7L, Pixel: 511510642697274
- [ ] lp.jayscatering.com → GA4: G-MNGQ6T3S7L, Pixel: 511510642697274

#### **Ellie's Table** ⚠️ (Unique Pixel)
- [ ] elliestable.com → GA4: G-H149DE94FR, Pixel: 1097130558389260
- [ ] lp.elliestable.com → GA4: G-H149DE94FR, Pixel: 1097130558389260

#### **Grand Gimeno**
- [ ] grandgimeno.com → GA4: G-C53EL9R7Z6, Pixel: 511510642697274
- [ ] lp.grandgimeno.com → GA4: G-C53EL9R7Z6, Pixel: 511510642697274

#### **Serra Plaza**
- [ ] serraplazaevents.com → GA4: G-2GGX4RHXPR, Pixel: 511510642697274
- [ ] lp.serraplaza.com → GA4: G-2GGX4RHXPR, Pixel: 511510642697274

#### **Hangar 21**
- [ ] hangar21venue.com → GA4: G-Y1WSBF33PJ, Pixel: 511510642697274
- [ ] lp.hangar21venue.com → GA4: G-Y1WSBF33PJ, Pixel: 511510642697274

#### **Estate on Second**
- [ ] estateonsecond.com → GA4: G-HDX153V4FB, Pixel: 511510642697274
- [ ] lp.estateonsecond.com → GA4: G-HDX153V4FB, Pixel: 511510642697274

#### **The Casino**
- [ ] thecasinosc.com → GA4: G-6BSN49J27D, Pixel: 511510642697274
- [ ] lp.thecasinosc.com → GA4: G-6BSN49J27D, Pixel: 511510642697274

---

## ✅ PHASE 4: PUBLISH

**Version Name:** `Empire-Wide Universal Tracking - 14 Domains`

**Version Description:**
```
Universal multi-brand tracking for entire empire:
- 7 brands across 14 domains (Webflow + Vercel)
- Dynamic GA4 tracking with brand-specific measurement IDs
- Dynamic Meta Pixel with brand-specific pixel IDs
- Cross-domain tracking enabled
- All tracking via Stape server-side (tracking.jayscatering.com)
- Removed all duplicate tracking
- HubSpot integration (Portal 48463492)
```

---

## 🔗 PHASE 5: CROSS-DOMAIN TRACKING

### **Add Linker Tag (for cross-domain sessions)**

**Tag Type:** Custom HTML  
**Tag Name:** `Cross-Domain Linker`

**HTML:**
```html
<script>
// Cross-domain tracking for all brands
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Configure cross-domain linking
gtag('set', 'linker', {
  'domains': [
    'jayscatering.com', 'lp.jayscatering.com',
    'elliestable.com', 'lp.elliestable.com',
    'grandgimeno.com', 'lp.grandgimeno.com',
    'serraplazaevents.com', 'lp.serraplaza.com',
    'hangar21venue.com', 'lp.hangar21venue.com',
    'estateonsecond.com', 'lp.estateonsecond.com',
    'thecasinosc.com', 'lp.thecasinosc.com'
  ],
  'decorate_forms': true
});

console.log('Cross-domain tracking enabled for ' + '{{Brand - Name}}');
</script>
```

**Triggering:** All Pages  
**Advanced Settings → Tag firing priority:** 999 (fires first)

---

## 🎯 WHAT THIS GIVES YOU

### **Cross-Domain Tracking**
User journey tracked seamlessly:
```
Meta Ad → lp.grandgimeno.com → grandgimeno.com → Conversion
          └─────────── Same Session ID ────────────┘
```

### **Universal Attribution**
- Click ID preservation across domains
- UTM parameters carry through
- Accurate conversion attribution
- No session breaks

### **Empire-Wide Analytics**
- One GTM container for everything
- Centralized tag management
- Update once, applies everywhere
- No code deployments needed

---

## 🚀 DEPLOYMENT CHECKLIST

### **For Webflow Sites (7 domains):**
- [ ] Add GTM container to each Webflow site
- [ ] Settings → Custom Code → Add to `<head>`:

```html
<!-- Google Tag Manager (Server-Side via Stape) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://tracking.jayscatering.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJG6R99K');</script>
<!-- End Google Tag Manager -->
```

- [ ] Add to `<body>` (immediately after opening tag):

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://tracking.jayscatering.com/ns.html?id=GTM-TJG6R99K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### **For Vercel Landing Pages (7 domains):**
- [ ] Already done! (`/index.html` has GTM installed)
- [ ] Just deploy cleaned code

---

## 🔍 VERIFICATION

### **Test Cross-Domain Tracking:**

1. **Visit:** lp.grandgimeno.com
2. **Open DevTools Console**
3. **Get Client ID:**
```javascript
// Run in console:
ga(function(tracker) {
  console.log('Client ID:', tracker.get('clientId'));
});
```
4. **Click to main site:** grandgimeno.com
5. **Check Client ID again** → Should be SAME

### **Test Attribution:**

1. **Visit with UTM:** lp.grandgimeno.com?utm_source=meta&utm_campaign=test
2. **Fill form on landing page**
3. **Check HubSpot contact** → Should have utm_source=meta
4. **Check GA4** → Should attribute conversion to Meta campaign

---

## 📊 EMPIRE TRACKING ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                    THE EMPIRE (14 DOMAINS)                  │
│                                                              │
│  Webflow Sites:                    Vercel Landing Pages:    │
│  ├─ jayscatering.com              ├─ lp.jayscatering.com   │
│  ├─ elliestable.com               ├─ lp.elliestable.com    │
│  ├─ grandgimeno.com               ├─ lp.grandgimeno.com    │
│  ├─ serraplazaevents.com          ├─ lp.serraplaza.com     │
│  ├─ hangar21venue.com             ├─ lp.hangar21venue.com  │
│  ├─ estateonsecond.com            ├─ lp.estateonsecond.com │
│  └─ thecasinosc.com               └─ lp.thecasinosc.com    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────┐
│            ONE GTM CONTAINER (GTM-TJG6R99K)                 │
│                                                              │
│  3 Lookup Table Variables (detect brand by hostname)        │
│  5 Universal Tags (work for all brands)                     │
│  1 Cross-Domain Linker (preserve sessions)                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────┐
│         STAPE SERVER (tracking.jayscatering.com)            │
│                                                              │
│  Server-Side Tracking (iOS 14.5+ compliant)                 │
│  CAPI for Meta, GA4 relay, HubSpot integration              │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         ↓               ↓               ↓
    ┌────────┐      ┌────────┐      ┌────────┐
    │  GA4   │      │  Meta  │      │HubSpot │
    │(Brand) │      │(Brand) │      │(Shared)│
    └────────┘      └────────┘      └────────┘
```

---

## 🎉 YOU NOW HAVE

✅ **14 domains** → **1 GTM container** → **Zero code changes**  
✅ **7 brands** fully tracked with proper attribution  
✅ **Cross-domain** tracking (session preservation)  
✅ **Server-side** tracking (can't be blocked)  
✅ **Scalable** (add brands by editing variables only)  

---

## 🔥 ADDING NEW BRANDS TO THE EMPIRE

**Time:** 10 minutes per brand (2 domains)

**Steps:**
1. Edit "Brand - GA4 Measurement ID" → Add 2 rows (Webflow + Vercel)
2. Edit "Brand - Meta Pixel ID" → Add 2 rows
3. Edit "Brand - Name" → Add 2 rows
4. Add domains to Cross-Domain Linker tag
5. Test in Preview Mode
6. Publish GTM
7. Add GTM to Webflow site
8. Deploy Vercel landing page

**Done! No other code changes needed!**

---

**NOW GO RULE YOUR EMPIRE. 👑**