# 📋 Brand IDs Quick Reference
## All 7 Brands - Copy/Paste Ready for GTM

**Last Updated:** December 20, 2024  
**Purpose:** Reference for configuring GTM lookup table variables

---

## ⚠️ WHAT THIS IS

This document contains all tracking IDs for the 7 brands in copy-paste format.

**Use this when:**
- Configuring GTM lookup table variables
- Verifying tracking IDs are correct
- Sharing IDs with team members

**This is NOT:**
- Implementation code (see EMPIRE_QUICK_REFERENCE.md for that)
- GTM setup instructions (see GTM_EMPIRE_SETUP.md for that)

---

## 🎯 For GTM Variable: "Brand - GA4 Measurement ID"

**Variable Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

| Input | Output |
|-------|--------|
| lp.jayscatering.com | G-MNGQ6T3S7L |
| lp.elliestable.com | G-H149DE94FR |
| lp.grandgimeno.com | G-C53EL9R7Z6 |
| lp.serraplaza.com | G-2GGX4RHXPR |
| lp.hangar21venue.com | G-Y1WSBF33PJ |
| lp.estateonsecond.com | G-HDX153V4FB |
| lp.thecasinosc.com | G-6BSN49J27D |

**Default Value:** `G-C53EL9R7Z6`

---

## 🎯 For GTM Variable: "Brand - Meta Pixel ID"

**Variable Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

| Input | Output |
|-------|--------|
| lp.jayscatering.com | 511510642697274 |
| lp.elliestable.com | 1097130558389260 |
| lp.grandgimeno.com | 511510642697274 |
| lp.serraplaza.com | 511510642697274 |
| lp.hangar21venue.com | 511510642697274 |
| lp.estateonsecond.com | 511510642697274 |
| lp.thecasinosc.com | 511510642697274 |

**Default Value:** `511510642697274`

---

## 🎯 For GTM Variable: "Brand - Name"

**Variable Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

| Input | Output |
|-------|--------|
| lp.jayscatering.com | Jay's Catering |
| lp.elliestable.com | Ellie's Table |
| lp.grandgimeno.com | Grand Gimeno |
| lp.serraplaza.com | Serra Plaza |
| lp.hangar21venue.com | Hangar 21 |
| lp.estateonsecond.com | Estate on Second |
| lp.thecasinosc.com | The Casino |

**Default Value:** `Unknown Brand`

---

## 📊 Brand Details Table

| Brand | Webflow Domain | Vercel LP Domain | GA4 | Meta Pixel | HubSpot |
|-------|----------------|------------------|-----|------------|---------|
| Jay's Catering | jayscatering.com | lp.jayscatering.com | G-MNGQ6T3S7L | 511510642697274 | 48463492 |
| Ellie's Table | elliestable.com | lp.elliestable.com | G-H149DE94FR | 1097130558389260 ⚠️ | 48463492 |
| Grand Gimeno | grandgimeno.com | lp.grandgimeno.com | G-C53EL9R7Z6 | 511510642697274 | 48463492 |
| Serra Plaza | serraplazaevents.com | lp.serraplaza.com | G-2GGX4RHXPR | 511510642697274 | 48463492 |
| Hangar 21 | hangar21venue.com | lp.hangar21venue.com | G-Y1WSBF33PJ | 511510642697274 | 48463492 |
| Estate on Second | estateonsecond.com | lp.estateonsecond.com | G-HDX153V4FB | 511510642697274 | 48463492 |
| The Casino | thecasinosc.com | lp.thecasinosc.com | G-6BSN49J27D | 511510642697274 | 48463492 |

**Notes:**
- ⚠️ **Ellie's Table** has unique Meta Pixel: `1097130558389260`
- All other brands share Meta Pixel: `511510642697274`
- All brands share HubSpot Portal: `48463492`

---

## 🔧 Shared Tracking Infrastructure

| Service | ID/Domain | Usage |
|---------|-----------|-------|
| **GTM Web Container** | GTM-TJG6R99K | All 7 brands |
| **Stape Server** | tracking.jayscatering.com | All 7 brands |
| **HubSpot Portal** | 48463492 | All 7 brands |
| **Meta Pixel (Shared)** | 511510642697274 | 6 brands (all except Ellie's) |
| **Meta Pixel (Ellie's)** | 1097130558389260 | Ellie's Table only |

---

## 🚀 Copy/Paste for Meta Pixel Tag (GTM)

**Tag Type:** Custom HTML  
**Triggering:** All Pages  
**Tag Firing Options:** Once per page

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

---

## 🎯 Testing URLs

Use these URLs to test each brand in GTM Preview Mode:

```
https://lp.jayscatering.com
https://lp.elliestable.com
https://lp.grandgimeno.com
https://lp.serraplaza.com
https://lp.hangar21venue.com
https://lp.estateonsecond.com
https://lp.thecasinosc.com
```

**Expected Results:**
- Variables should populate with correct brand IDs
- GA4 tag should fire with correct measurement ID
- Meta Pixel tag should fire with correct pixel ID
- All tags should fire on All Pages trigger

---

## ✅ Verification Commands (Browser Console)

After page loads, run these in DevTools Console:

```javascript
// Check GA4 Measurement ID
dataLayer.filter(item => item['gtm.uniqueEventId']).map(item => item.event)

// Check Meta Pixel ID
fbq && fbq.getState ? fbq.getState().pixels : 'fbq not loaded'

// Check Page Hostname
{{Page Hostname}} // Should match lp.[brand].com

// Check Brand Name Variable
// (Check in GTM Preview Mode > Variables tab)
```

---

## 📝 Future Brand Template

When adding a new brand, copy this template:

```
Brand Name: [New Brand]
Webflow Domain: [newbrand].com
Vercel LP Domain: lp.[newbrand].com
GA4 Measurement ID: G-XXXXXXXXX
Meta Pixel ID: [shared: 511510642697274 or unique: XXXXXX]
HubSpot Portal: 48463492 (shared)

GTM Variable Updates:
1. Brand - GA4 Measurement ID → Add row: lp.[newbrand].com | G-XXXXXXXXX
2. Brand - Meta Pixel ID → Add row: lp.[newbrand].com | [pixel-id]
3. Brand - Name → Add row: lp.[newbrand].com | [New Brand]

Test URL: https://lp.[newbrand].com
```

---

**💡 Tip:** Bookmark this page for quick reference when setting up GTM variables!