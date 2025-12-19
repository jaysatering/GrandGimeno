# ✅ Quick Start Checklist
## GTM Universal Setup for 7 Brands

**Time Required:** 30-45 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Access to GTM Web Container (GTM-TJG6R99K)

---

## 📋 Pre-Flight Check

Before you start, make sure you have:

- [ ] Access to GTM account (web container GTM-TJG6R99K)
- [ ] All 7 brand IDs ready (see BRAND_IDS_REFERENCE.md)
- [ ] Test access to at least 2 brand domains (e.g., lp.grandgimeno.com + lp.jayscatering.com)
- [ ] Chrome browser with Meta Pixel Helper extension (optional but helpful)

**Read this first if you're new to GTM:** GTM_SETUP_GUIDE.md (full instructions)

---

## 🧹 Phase 1: Clean Up (5 minutes)

### In GTM Web Container (GTM-TJG6R99K):

**Delete These Tags:**
- [ ] ❌ "GA4 - Config - Grand Gimeno" (or any brand-specific GA4 tag)
- [ ] ❌ Any duplicate Meta Pixel tags
- [ ] ❌ Any duplicate HubSpot tags

**Delete These Triggers:**
- [ ] ❌ "Host - grandgimeno.com" (or any brand-specific hostname trigger)

**Keep These:**
- [ ] ✅ "All Pages" trigger (or create if missing)
- [ ] ✅ Any form submission triggers
- [ ] ✅ Any button click triggers

---

## 🔧 Phase 2: Create Variables (15 minutes)

### Step 1: Enable Built-In Variables
- [ ] Go to **Variables** → Click **"Configure"**
- [ ] Enable: Page Hostname, Page Path, Page URL, Referrer
- [ ] Enable: Click Element, Click URL, Form Element, Form ID

### Step 2: Create "Brand - GA4 Measurement ID"
- [ ] Click **"New"** in User-Defined Variables
- [ ] Name: `Brand - GA4 Measurement ID`
- [ ] Type: **Lookup Table**
- [ ] Input Variable: `{{Page Hostname}}`
- [ ] Add 7 rows (copy from BRAND_IDS_REFERENCE.md)
- [ ] Default: `G-C53EL9R7Z6`
- [ ] **Save**

### Step 3: Create "Brand - Meta Pixel ID"
- [ ] Click **"New"**
- [ ] Name: `Brand - Meta Pixel ID`
- [ ] Type: **Lookup Table**
- [ ] Input Variable: `{{Page Hostname}}`
- [ ] Add 7 rows (copy from BRAND_IDS_REFERENCE.md)
- [ ] Default: `511510642697274`
- [ ] **Save**

### Step 4: Create "Brand - Name"
- [ ] Click **"New"**
- [ ] Name: `Brand - Name`
- [ ] Type: **Lookup Table**
- [ ] Input Variable: `{{Page Hostname}}`
- [ ] Add 7 rows (copy from BRAND_IDS_REFERENCE.md)
- [ ] Default: `Unknown Brand`
- [ ] **Save**

---

## 🏷️ Phase 3: Create Tags (15 minutes)

### Tag 1: GA4 - Config - Universal
- [ ] Go to **Tags** → Click **"New"**
- [ ] Name: `GA4 - Config - Universal (All Brands)`
- [ ] Type: **Google Analytics: GA4 Configuration**
- [ ] Measurement ID: `{{Brand - GA4 Measurement ID}}`
- [ ] ⚠️ **UNCHECK** "Send a page view event when this configuration loads"
- [ ] Add Field: `brand_name` = `{{Brand - Name}}`
- [ ] Add Field: `send_page_view` = `false`
- [ ] Trigger: **All Pages**
- [ ] **Save**

### Tag 2: GA4 - Event - Pageview
- [ ] Click **"New"**
- [ ] Name: `GA4 - Event - Pageview (via Server)`
- [ ] Type: **Google Analytics: GA4 Event**
- [ ] Configuration Tag: `{{Brand - GA4 Measurement ID}}`
- [ ] Event Name: `page_view`
- [ ] Add Parameter: `brand_name` = `{{Brand - Name}}`
- [ ] Add Parameter: `page_location` = `{{Page URL}}`
- [ ] Add Parameter: `page_referrer` = `{{Referrer}}`
- [ ] Trigger: **All Pages**
- [ ] **Save**

### Tag 3: Meta Pixel - Universal
- [ ] Click **"New"**
- [ ] Name: `Meta Pixel - Universal (All Brands)`
- [ ] Type: **Custom HTML**
- [ ] Copy HTML from BRAND_IDS_REFERENCE.md (Meta Pixel section)
- [ ] Trigger: **All Pages**
- [ ] Advanced Settings → Tag firing options: **Once per page**
- [ ] **Save**

### Tag 4: Meta Pixel - Form Submit
- [ ] Click **"New"**
- [ ] Name: `Meta Pixel - Form Submit (Lead Event)`
- [ ] Type: **Custom HTML**
- [ ] HTML:
```html
<script>
if (window.fbq) {
  fbq('track', 'Lead', {
    content_name: '{{Brand - Name}} - Contact Form',
    brand: '{{Brand - Name}}'
  });
  console.log('Meta Pixel Lead event fired for ' + '{{Brand - Name}}');
}
</script>
```
- [ ] Trigger: **Form Submission - All Forms** (or your form trigger)
- [ ] **Save**

---

## 🧪 Phase 4: Test in Preview Mode (10 minutes)

### Test Brand 1: Grand Gimeno
- [ ] Click **"Preview"** in GTM
- [ ] Enter URL: `https://lp.grandgimeno.com`
- [ ] Click **"Connect"**
- [ ] Check **Variables** tab:
  - [ ] `Brand - GA4 Measurement ID` = `G-C53EL9R7Z6` ✅
  - [ ] `Brand - Meta Pixel ID` = `511510642697274` ✅
  - [ ] `Brand - Name` = `Grand Gimeno` ✅
- [ ] Check **Tags** tab:
  - [ ] GA4 - Config - Universal → **Fired** ✅
  - [ ] GA4 - Event - Pageview → **Fired** ✅
  - [ ] Meta Pixel - Universal → **Fired** ✅
- [ ] Check browser console:
  - [ ] See: `Meta Pixel initialized for Grand Gimeno` ✅

### Test Brand 2: Jay's Catering
- [ ] Change preview URL: `https://lp.jayscatering.com`
- [ ] Check **Variables** tab:
  - [ ] `Brand - GA4 Measurement ID` = `G-MNGQ6T3S7L` ✅
  - [ ] `Brand - Meta Pixel ID` = `511510642697274` ✅
  - [ ] `Brand - Name` = `Jay's Catering` ✅
- [ ] Verify all tags fired ✅

### Test Brand 3: Ellie's Table (Critical - Unique Pixel!)
- [ ] Change preview URL: `https://lp.elliestable.com`
- [ ] Check **Variables** tab:
  - [ ] `Brand - GA4 Measurement ID` = `G-H149DE94FR` ✅
  - [ ] `Brand - Meta Pixel ID` = `1097130558389260` ✅ **← Different!**
  - [ ] `Brand - Name` = `Ellie's Table` ✅
- [ ] Verify all tags fired ✅

### Quick Test Remaining Brands
- [ ] Test lp.serraplaza.com → Verify variables correct ✅
- [ ] Test lp.hangar21venue.com → Verify variables correct ✅
- [ ] Test lp.estateonsecond.com → Verify variables correct ✅
- [ ] Test lp.thecasinosc.com → Verify variables correct ✅

---

## 🚀 Phase 5: Publish (2 minutes)

- [ ] Click **"Submit"** in GTM (top right)
- [ ] Version Name: `Universal Multi-Brand Setup - 7 Brands`
- [ ] Version Description:
```
Implemented dynamic lookup tables for all 7 brand landing pages.
- GA4 tracking: Universal tag with brand-specific measurement IDs
- Meta Pixel: Universal tag with brand-specific pixel IDs  
- Removed all duplicate tracking
- All tracking via Stape server-side (tracking.jayscatering.com)
```
- [ ] Click **"Publish"**
- [ ] Wait for "Published" confirmation ✅

---

## ✅ Phase 6: Deploy Cleaned Code (5 minutes)

### Verify Files Are Clean
- [ ] Check `/index.html` → Should have NO duplicate HubSpot script
- [ ] Check `/App.tsx` → Should be ~22 lines with NO tracking code

### Deploy to Vercel
- [ ] Commit changes: `git add . && git commit -m "Clean up duplicate tracking - GTM universal setup"`
- [ ] Push: `git push origin main`
- [ ] Wait for Vercel deployment ✅

---

## 🔍 Phase 7: Production Verification (10 minutes)

### Test Each Brand in Production

**Grand Gimeno:**
- [ ] Visit: https://lp.grandgimeno.com
- [ ] Open DevTools Console
- [ ] See: `Meta Pixel initialized for Grand Gimeno (ID: 511510642697274)` ✅
- [ ] Check GA4 Real-Time report for G-C53EL9R7Z6 → See pageview ✅

**Jay's Catering:**
- [ ] Visit: https://lp.jayscatering.com
- [ ] Console: `Meta Pixel initialized for Jay's Catering (ID: 511510642697274)` ✅
- [ ] GA4 Real-Time for G-MNGQ6T3S7L → See pageview ✅

**Ellie's Table (Critical!):**
- [ ] Visit: https://lp.elliestable.com
- [ ] Console: `Meta Pixel initialized for Ellie's Table (ID: 1097130558389260)` ✅ **← Unique!**
- [ ] GA4 Real-Time for G-H149DE94FR → See pageview ✅
- [ ] Meta Pixel Helper: Shows pixel `1097130558389260` firing ✅

**Quick Check Remaining Brands:**
- [ ] lp.serraplaza.com → Console + GA4 ✅
- [ ] lp.hangar21venue.com → Console + GA4 ✅
- [ ] lp.estateonsecond.com → Console + GA4 ✅
- [ ] lp.thecasinosc.com → Console + GA4 ✅

---

## 🎉 Success Criteria

You're done when ALL of these are ✅:

- [ ] All 7 brands show correct tracking in console
- [ ] Each brand's GA4 property shows real-time data
- [ ] Ellie's Table shows unique pixel `1097130558389260`
- [ ] Other 6 brands show shared pixel `511510642697274`
- [ ] No duplicate script errors in console
- [ ] Form submissions fire Lead event in Meta Pixel
- [ ] GTM debugger shows all variables populating correctly

---

## ❌ Common Issues & Quick Fixes

### Issue: Variable shows "Unknown Brand"
**Fix:** Page Hostname not matching lookup table
- Check exact hostname (no https://, no trailing /)
- Verify lookup table has exact match: `lp.brandname.com`

### Issue: Tags not firing
**Fix:** Trigger not set correctly
- Verify trigger is "All Pages"
- Check in GTM Preview Mode → Tags tab

### Issue: Wrong GA4 property receiving data
**Fix:** Variable not loading
- Check Built-In Variables → Page Hostname is enabled
- Verify variable syntax: `{{Brand - GA4 Measurement ID}}`

### Issue: Meta Pixel Helper shows wrong pixel
**Fix:** Cache or variable issue
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check GTM Preview Mode → Variables tab for correct pixel ID

### Issue: Duplicate events in GA4
**Fix:** Old tracking code still running
- Verify `/App.tsx` has NO useEffect hooks for tracking
- Check `/index.html` has NO duplicate scripts
- Clear browser cache and test again

---

## 📞 Next Steps After Completion

- [ ] Document your setup (you already have these docs!)
- [ ] Train team on how to add new brands (see GTM_SETUP_GUIDE.md)
- [ ] Set up custom conversions in Meta Ads Manager (per brand)
- [ ] Configure cross-domain tracking if needed
- [ ] Set up conversion goals in each GA4 property

---

## 📚 Reference Documents

Need more details? Check these:

- **Full Instructions:** GTM_SETUP_GUIDE.md
- **Brand IDs:** BRAND_IDS_REFERENCE.md
- **Before/After:** BEFORE_AFTER_COMPARISON.md
- **Summary:** TRACKING_CLEANUP_SUMMARY.md

---

**🎯 Pro Tip:** Bookmark this checklist and use it every time you set up a new multi-brand GTM configuration!

**⏱️ Total Time:** ~45 minutes (first time) → ~15 minutes (after you've done it once)

**Ready? Let's go! Start with Phase 1! 🚀**
