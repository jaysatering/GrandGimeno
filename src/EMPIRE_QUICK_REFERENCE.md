# 🔥 EMPIRE QUICK REFERENCE
## Copy/Paste Ready for GTM Variables

---

## 📋 VARIABLE 1: Brand - GA4 Measurement ID

**Variable Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

```
jayscatering.com          G-MNGQ6T3S7L
lp.jayscatering.com       G-MNGQ6T3S7L
elliestable.com           G-H149DE94FR
lp.elliestable.com        G-H149DE94FR
grandgimeno.com           G-C53EL9R7Z6
lp.grandgimeno.com        G-C53EL9R7Z6
serraplazaevents.com      G-2GGX4RHXPR
lp.serraplaza.com         G-2GGX4RHXPR
hangar21venue.com         G-Y1WSBF33PJ
lp.hangar21venue.com      G-Y1WSBF33PJ
estateonsecond.com        G-HDX153V4FB
lp.estateonsecond.com     G-HDX153V4FB
thecasinosc.com           G-6BSN49J27D
lp.thecasinosc.com        G-6BSN49J27D
```

**Default Value:** `G-MNGQ6T3S7L` (Jay's Catering - Master Brand)

**Total Rows:** 14

---

## 📋 VARIABLE 2: Brand - Meta Pixel ID

**Variable Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

```
jayscatering.com          511510642697274
lp.jayscatering.com       511510642697274
elliestable.com           1097130558389260
lp.elliestable.com        1097130558389260
grandgimeno.com           511510642697274
lp.grandgimeno.com        511510642697274
serraplazaevents.com      511510642697274
lp.serraplaza.com         511510642697274
hangar21venue.com         511510642697274
lp.hangar21venue.com      511510642697274
estateonsecond.com        511510642697274
lp.estateonsecond.com     511510642697274
thecasinosc.com           511510642697274
lp.thecasinosc.com        511510642697274
```

**Default Value:** `511510642697274`

**Total Rows:** 14

---

## 📋 VARIABLE 3: Brand - Name

**Variable Type:** Lookup Table  
**Input Variable:** `{{Page Hostname}}`

```
jayscatering.com          Jay's Catering
lp.jayscatering.com       Jay's Catering
elliestable.com           Ellie's Table
lp.elliestable.com        Ellie's Table
grandgimeno.com           Grand Gimeno
lp.grandgimeno.com        Grand Gimeno
serraplazaevents.com      Serra Plaza
lp.serraplaza.com         Serra Plaza
hangar21venue.com         Hangar 21
lp.hangar21venue.com      Hangar 21
estateonsecond.com        Estate on Second
lp.estateonsecond.com     Estate on Second
thecasinosc.com           The Casino
lp.thecasinosc.com        The Casino
```

**Default Value:** `Jay's Catering` (Master Brand)

**Total Rows:** 14

---

## 🔗 CROSS-DOMAIN LINKER TAG

**Tag Name:** Cross-Domain Linker  
**Tag Type:** Custom HTML  
**Trigger:** All Pages  
**Firing Priority:** 999

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

---

## 🎯 GTM CONTAINER CODE (FOR WEBFLOW)

### Add to `<head>`:

```html
<!-- Google Tag Manager (Server-Side via Stape) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://tracking.jayscatering.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJG6R99K');</script>
<!-- End Google Tag Manager -->
```

### Add to `<body>` (immediately after opening tag):

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://tracking.jayscatering.com/ns.html?id=GTM-TJG6R99K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## 📊 THE EMPIRE (14 DOMAINS)

### Jay's Catering
- ✅ jayscatering.com
- ✅ lp.jayscatering.com
- **GA4:** G-MNGQ6T3S7L
- **Meta Pixel:** 511510642697274

### Ellie's Table ⚠️
- ✅ elliestable.com
- ✅ lp.elliestable.com
- **GA4:** G-H149DE94FR
- **Meta Pixel:** 1097130558389260 (unique!)

### Grand Gimeno
- ✅ grandgimeno.com
- ✅ lp.grandgimeno.com
- **GA4:** G-C53EL9R7Z6
- **Meta Pixel:** 511510642697274

### Serra Plaza
- ✅ serraplazaevents.com
- ✅ lp.serraplaza.com
- **GA4:** G-2GGX4RHXPR
- **Meta Pixel:** 511510642697274

### Hangar 21
- ✅ hangar21venue.com
- ✅ lp.hangar21venue.com
- **GA4:** G-Y1WSBF33PJ
- **Meta Pixel:** 511510642697274

### Estate on Second
- ✅ estateonsecond.com
- ✅ lp.estateonsecond.com
- **GA4:** G-HDX153V4FB
- **Meta Pixel:** 511510642697274

### The Casino
- ✅ thecasinosc.com
- ✅ lp.thecasinosc.com
- **GA4:** G-6BSN49J27D
- **Meta Pixel:** 511510642697274

---

## ✅ IMPLEMENTATION CHECKLIST

### GTM Setup:
- [ ] Create Variable: Brand - GA4 Measurement ID (14 rows)
- [ ] Create Variable: Brand - Meta Pixel ID (14 rows)
- [ ] Create Variable: Brand - Name (14 rows)
- [ ] Create Tag: GA4 - Config - Universal
- [ ] Create Tag: GA4 - Event - Pageview
- [ ] Create Tag: Meta Pixel - Universal
- [ ] Create Tag: Meta Pixel - Lead Event
- [ ] Create Tag: GA4 - Form Submit
- [ ] Create Tag: Cross-Domain Linker

### Webflow Deployment (7 sites):
- [ ] jayscatering.com → Add GTM code
- [ ] elliestable.com → Add GTM code
- [ ] grandgimeno.com → Add GTM code
- [ ] serraplazaevents.com → Add GTM code
- [ ] hangar21venue.com → Add GTM code
- [ ] estateonsecond.com → Add GTM code
- [ ] thecasinosc.com → Add GTM code

### Vercel Deployment (7 sites):
- [ ] Already done! (GTM in /index.html)

### Testing (14 domains):
- [ ] Test all 14 domains in GTM Preview Mode
- [ ] Verify variables load correctly for each
- [ ] Verify tags fire for each
- [ ] Test cross-domain tracking (lp → main site)
- [ ] Test form submissions
- [ ] Check GA4 Real-Time for each brand
- [ ] Check Meta Pixel Helper for each brand

### Publish:
- [ ] Publish GTM container
- [ ] Verify production tracking on all 14 domains

---

## 🔥 TOTAL COVERAGE

**Domains:** 14  
**Brands:** 7  
**GTM Containers:** 1  
**Variables:** 3  
**Tags:** 6  
**Code Changes:** 0 (after initial GTM install)  

**ONE CONTAINER TO RULE THEM ALL.** 👑
