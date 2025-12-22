# 🎯 WHAT YOU ACTUALLY HAVE
## Simple Reference - No Confusion

**Last Updated:** December 20, 2024  
**Project:** Vercel Landing Pages (7 Brands)  
**Status:** ✅ LIVE & WORKING

---

## 📍 THIS PROJECT IS:

**A single React/Vite app** that serves **7 different landing page domains** (lp.*.com) on Vercel.

- **NOT the main Webflow sites** (those are separate)
- **NOT 14 domains** (just the 7 landing pages)
- **ONE codebase** deployed to 7 different Vercel domains

---

## 🏗️ TRACKING SETUP (CURRENT STATE)

### **✅ What's Installed:**

1. **GTM Web Container:** `GTM-TJG6R99K`
   - Loaded via React component: `/components/GTMLoader.tsx`
   - **NOT in HTML** `<head>` tag
   - Loads from Stape server: `https://tracking.jayscatering.com/gtm.js`

2. **Stape Server-Side Tracking:** `tracking.jayscatering.com`
   - Server container running on Stape (you have this setup)
   - Web container sends data to server container
   - Server container relays to GA4, Meta, etc.

3. **HubSpot Form Auto-Fill Script:**
   - Located in `/index.html` (lines 29-63)
   - Auto-fills UTM params, GCLID, FBCLID into hidden form fields
   - Works for HubSpot Portal: `48463492`

### **✅ Configuration:**

**File:** `/config/tracking.ts`

```typescript
USE_SERVER_SIDE_TRACKING: true
STAPE_SERVER_URL: 'https://tracking.jayscatering.com'
GTM_CONTAINER_ID: 'GTM-TJG6R99K'
META_PIXEL_ID: '511510642697274' // Fallback (GTM handles dynamic loading)
GA4_MEASUREMENT_ID: 'G-C53EL9R7Z6' // Fallback (GTM handles dynamic loading)
```

---

## 🎯 THE 7 BRANDS

| Brand | Landing Page Domain | GA4 ID | Meta Pixel | Notes |
|-------|---------------------|--------|------------|-------|
| Jay's Catering | lp.jayscatering.com | G-MNGQ6T3S7L | 511510642697274 | Shared pixel |
| Ellie's Table | lp.elliestable.com | G-H149DE94FR | **1097130558389260** | **Unique pixel** ⚠️ |
| Grand Gimeno | lp.grandgimeno.com | G-C53EL9R7Z6 | 511510642697274 | Shared pixel |
| Serra Plaza | lp.serraplaza.com | G-2GGX4RHXPR | 511510642697274 | Shared pixel |
| Hangar 21 | lp.hangar21venue.com | G-Y1WSBF33PJ | 511510642697274 | Shared pixel |
| Estate on Second | lp.estateonsecond.com | G-HDX153V4FB | 511510642697274 | Shared pixel |
| The Casino | lp.thecasinosc.com | G-6BSN49J27D | 511510642697274 | Shared pixel |

**Shared:**
- HubSpot Portal: `48463492` (all brands)
- GTM Container: `GTM-TJG6R99K` (all brands)
- Stape Server: `tracking.jayscatering.com` (all brands)

---

## 🔧 HOW IT WORKS

### **When someone visits `lp.grandgimeno.com`:**

1. **React app loads** → `GTMLoader.tsx` runs
2. **GTM script loads** from `https://tracking.jayscatering.com/gtm.js?id=GTM-TJG6R99K`
3. **GTM detects hostname:** `lp.grandgimeno.com`
4. **GTM lookup tables** return:
   - GA4 ID: `G-C53EL9R7Z6`
   - Meta Pixel: `511510642697274`
   - Brand Name: `Grand Gimeno`
5. **GTM fires tags** with correct IDs
6. **User fills form** → HubSpot script auto-fills UTM/GCLID/FBCLID
7. **Form submits** → Conversion events fire

### **Same process for all 7 brands!**

GTM automatically detects which brand based on the domain and loads the correct tracking IDs.

---

## 📁 KEY FILES (DON'T TOUCH THESE)

### **Tracking Configuration:**
- `/config/tracking.ts` - Stape server URL, GTM container ID
- `/components/GTMLoader.tsx` - Loads GTM via React (DO NOT REMOVE)
- `/index.html` (lines 29-63) - HubSpot form auto-fill script

### **Application:**
- `/App.tsx` - Main app, includes `<GTMLoader />`
- `/pages/HomePage.tsx` - Landing page
- `/pages/ThankYouPage.tsx` - Conversion page

### **Utils:**
- `/utils/tracking.ts` - UTM/GCLID/FBCLID utilities (NOT currently used, kept for reference)

---

## 🚨 WHAT YOUR GTM CONTAINER NEEDS

Your **GTM Web Container** (`GTM-TJG6R99K`) must have these variables configured:

### **Required Lookup Table Variables:**

1. **Brand - GA4 Measurement ID**
   - Input: `{{Page Hostname}}`
   - Returns correct GA4 ID for each lp.* domain

2. **Brand - Meta Pixel ID**
   - Input: `{{Page Hostname}}`
   - Returns correct Meta Pixel ID for each lp.* domain

3. **Brand - Name**
   - Input: `{{Page Hostname}}`
   - Returns brand name for each lp.* domain

### **Required Tags:**

1. **GA4 Config Tag** - Uses `{{Brand - GA4 Measurement ID}}`
2. **GA4 Pageview Event** - Fires on all pages
3. **Meta Pixel Tag** - Uses `{{Brand - Meta Pixel ID}}`
4. **Meta Lead Event** - Fires on form submission

**See `/GTM_EMPIRE_SETUP.md` for exact GTM configuration.**

---

## 🎯 FOR YOUR TEAM WORKING ON OTHER PROJECTS

If they're building landing pages in a **different project** (not this React codebase):

### **Give them this code:**

#### **Add to `<head>`:**
```html
<!-- Google Tag Manager via Stape -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://tracking.jayscatering.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJG6R99K');</script>
<!-- End Google Tag Manager -->
```

#### **Add to `<body>` (immediately after opening tag):**
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://tracking.jayscatering.com/ns.html?id=GTM-TJG6R99K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

#### **Important:**
- ✅ Same container ID for all: `GTM-TJG6R99K`
- ✅ Same Stape server for all: `tracking.jayscatering.com`
- ✅ GTM will automatically detect which brand by domain
- ❌ Do NOT add brand-specific tracking code
- ❌ Do NOT add separate Meta Pixel or GA4 code

---

## 🧪 HOW TO TEST

### **1. Check GTM is Loading:**
1. Visit any lp.* domain
2. Open DevTools → Console
3. Look for: `✅ GTM is active and running!`

### **2. Check Variables in GTM Preview:**
1. GTM → Preview → Connect to `lp.grandgimeno.com`
2. Check Variables tab
3. Verify `{{Brand - GA4 Measurement ID}}` shows `G-C53EL9R7Z6`
4. Verify `{{Brand - Meta Pixel ID}}` shows `511510642697274`
5. Verify `{{Brand - Name}}` shows `Grand Gimeno`

### **3. Check Tags Fire:**
1. In GTM Preview, check Tags tab
2. Should see all tags fire on page load
3. Submit form → Should see Lead event tags fire

---

## ✅ CROSS-DOMAIN TRACKING

### **Current GA4 Setup:**

Your **GTM GA4 Config tag** should have this configuration:

**Tag:** `GA4 Config - Universal (All Brands)`  
**Variable:** `{{Brand - GA4 Measurement ID}}`

**Fields to Set:**
| Field Name | Value |
|------------|-------|
| linker | `{"domains":["jayscatering.com","lp.jayscatering.com","elliestable.com","lp.elliestable.com","grandgimeno.com","lp.grandgimeno.com","serraplazaevents.com","lp.serraplaza.com","hangar21venue.com","lp.hangar21venue.com","estateonsecond.com","lp.estateonsecond.com","thecasinosc.com","lp.thecasinosc.com"],"decorate_forms":true}` |

**What this does:**
- Preserves GA4 session across domain jumps
- Example: User goes from `lp.grandgimeno.com` → `grandgimeno.com`
- Session ID stays the same (no session break)

### **Server Container:**

Your Stape **server container** has a **Conversion Linker tag** that:
- Syncs cookies across domains
- Preserves GCLID, FBCLID, etc.
- Works automatically (no action needed)

---

## 🚨 IMPORTANT NOTES

### **DO:**
✅ Keep GTM loading via React component (`GTMLoader.tsx`)  
✅ Use same GTM container for all 7 brands  
✅ Let GTM handle all tracking (don't add custom scripts)  
✅ Make GTM changes in GTM interface (not code)

### **DON'T:**
❌ Add GTM script to `/index.html` (already in React component)  
❌ Add separate Meta Pixel code to project  
❌ Add separate GA4 code to project  
❌ Create brand-specific tracking code  
❌ Remove `/components/GTMLoader.tsx`

---

## 📞 QUICK REFERENCE IDs

**For THIS project (Vercel landing pages):**
- GTM Container: `GTM-TJG6R99K`
- Stape Server: `tracking.jayscatering.com`
- HubSpot Portal: `48463492`
- Meta Pixel (Shared): `511510642697274`
- Meta Pixel (Ellie's): `1097130558389260`

**For the Webflow main sites:**
- Same GTM container: `GTM-TJG6R99K`
- Same Stape server: `tracking.jayscatering.com`
- Add GTM code to Webflow Custom Code section

---

## 🎯 SUMMARY

**You have:**
- 1 React app
- 7 Vercel domains (lp.*.com)
- 1 GTM container (auto-detects brand)
- 1 Stape server (server-side tracking)
- GTM loads via React (not HTML)

**Your team needs (for other projects):**
- Same GTM container: `GTM-TJG6R99K`
- Same Stape server URL
- Add 2 scripts to their HTML
- GTM will auto-detect which brand

**Done! No code changes needed when adding brands - just update GTM variables!** 🚀
