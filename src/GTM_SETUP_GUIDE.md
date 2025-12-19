# 🎯 Universal GTM Setup Guide
## For All 7 Brand Landing Pages via Stape Server-Side Tracking

---

## 📊 Brand Configuration

| Brand | LP Domain | Meta Pixel | GA4 |
|-------|-----------|------------|-----|
| Jay's Catering | lp.jayscatering.com | 511510642697274 | G-MNGQ6T3S7L |
| Ellie's Table | lp.elliestable.com | 1097130558389260 | G-H149DE94FR |
| Grand Gimeno | lp.grandgimeno.com | 511510642697274 | G-C53EL9R7Z6 |
| Serra Plaza | lp.serraplaza.com | 511510642697274 | G-2GGX4RHXPR |
| Hangar 21 | lp.hangar21venue.com | 511510642697274 | G-Y1WSBF33PJ |
| Estate on Second | lp.estateonsecond.com | 511510642697274 | G-HDX153V4FB |
| The Casino | lp.thecasinosc.com | 511510642697274 | G-6BSN49J27D |

**Shared Tracking:**
- ✅ HubSpot Portal: `48463492` (all brands)
- ✅ GTM Container: `GTM-TJG6R99K` (web) + Server Container (Stape)
- ✅ Stape Server: `tracking.jayscatering.com`

---

## 🧹 STEP 1: Clean Up Current GTM (Delete These)

### **In Web Container (GTM-TJG6R99K):**

#### **Tags to DELETE:**
1. ❌ **"GA4 - Config - Grand Gimeno"** (brand-specific, we're making universal)
2. ❌ Any other brand-specific GA4 tags
3. ❌ Any duplicate Meta Pixel tags
4. ❌ Any duplicate HubSpot tags

#### **Triggers to DELETE:**
1. ❌ **"Host - grandgimeno.com"** (brand-specific)
2. ❌ Any other brand-specific hostname triggers

**Keep These:**
- ✅ "All Pages" trigger
- ✅ Any form submission triggers
- ✅ Any button click triggers

---

## 🏗️ STEP 2: Create Variables (Web Container GTM-TJG6R99K)

### **Variable 1: Brand - GA4 Measurement ID**

1. Go to **Variables** → Click **"New"**
2. **Variable Name:** `Brand - GA4 Measurement ID`
3. **Variable Type:** Lookup Table
4. **Input Variable:** `{{Page Hostname}}`
5. **Add Rows:**

| Input (Page Hostname) | Output (GA4 ID) |
|----------------------|-----------------|
| lp.jayscatering.com | G-MNGQ6T3S7L |
| lp.elliestable.com | G-H149DE94FR |
| lp.grandgimeno.com | G-C53EL9R7Z6 |
| lp.serraplaza.com | G-2GGX4RHXPR |
| lp.hangar21venue.com | G-Y1WSBF33PJ |
| lp.estateonsecond.com | G-HDX153V4FB |
| lp.thecasinosc.com | G-6BSN49J27D |

6. **Set Default Value:** `G-C53EL9R7Z6` (Grand Gimeno as fallback)
7. **Save**

---

### **Variable 2: Brand - Meta Pixel ID**

1. Go to **Variables** → Click **"New"**
2. **Variable Name:** `Brand - Meta Pixel ID`
3. **Variable Type:** Lookup Table
4. **Input Variable:** `{{Page Hostname}}`
5. **Add Rows:**

| Input (Page Hostname) | Output (Pixel ID) |
|----------------------|-------------------|
| lp.jayscatering.com | 511510642697274 |
| lp.elliestable.com | 1097130558389260 |
| lp.grandgimeno.com | 511510642697274 |
| lp.serraplaza.com | 511510642697274 |
| lp.hangar21venue.com | 511510642697274 |
| lp.estateonsecond.com | 511510642697274 |
| lp.thecasinosc.com | 511510642697274 |

6. **Set Default Value:** `511510642697274` (shared pixel as fallback)
7. **Save**

---

### **Variable 3: Brand - Name**

1. Go to **Variables** → Click **"New"**
2. **Variable Name:** `Brand - Name`
3. **Variable Type:** Lookup Table
4. **Input Variable:** `{{Page Hostname}}`
5. **Add Rows:**

| Input (Page Hostname) | Output (Brand Name) |
|----------------------|---------------------|
| lp.jayscatering.com | Jay's Catering |
| lp.elliestable.com | Ellie's Table |
| lp.grandgimeno.com | Grand Gimeno |
| lp.serraplaza.com | Serra Plaza |
| lp.hangar21venue.com | Hangar 21 |
| lp.estateonsecond.com | Estate on Second |
| lp.thecasinosc.com | The Casino |

6. **Set Default Value:** `Unknown Brand`
7. **Save**

---

### **Variable 4: Enable Built-In Variables**

1. Go to **Variables**
2. Click **"Configure"** in Built-In Variables section
3. **Enable these:**
   - ✅ Page Hostname
   - ✅ Page Path
   - ✅ Page URL
   - ✅ Referrer
   - ✅ Click Element
   - ✅ Click URL
   - ✅ Form Element
   - ✅ Form ID
4. **Save**

---

## 🏷️ STEP 3: Create Universal Tags (Web Container GTM-TJG6R99K)

### **Tag 1: GA4 - Config - Universal (All Brands)**

1. Go to **Tags** → Click **"New"**
2. **Tag Name:** `GA4 - Config - Universal (All Brands)`
3. **Tag Type:** Google Analytics: GA4 Configuration
4. **Measurement ID:** `{{Brand - GA4 Measurement ID}}` (use variable)
5. **Configuration Settings:**
   - Send a page view event when this configuration loads: **UNCHECKED** ❌
   - (We'll send pageviews via server)
6. **Fields to Set:**
   - Field Name: `brand_name` → Value: `{{Brand - Name}}`
   - Field Name: `send_page_view` → Value: `false`
7. **Triggering:**
   - Trigger: **All Pages**
8. **Save**

---

### **Tag 2: GA4 - Event - Pageview (via Server)**

1. Go to **Tags** → Click **"New"**
2. **Tag Name:** `GA4 - Event - Pageview (via Server)`
3. **Tag Type:** Google Analytics: GA4 Event
4. **Configuration Tag:** `{{Brand - GA4 Measurement ID}}`
5. **Event Name:** `page_view`
6. **Event Parameters:**
   - Parameter Name: `brand_name` → Value: `{{Brand - Name}}`
   - Parameter Name: `page_location` → Value: `{{Page URL}}`
   - Parameter Name: `page_referrer` → Value: `{{Referrer}}`
7. **Triggering:**
   - Trigger: **All Pages**
8. **Save**

---

### **Tag 3: Meta Pixel - Universal (All Brands)**

1. Go to **Tags** → Click **"New"**
2. **Tag Name:** `Meta Pixel - Universal (All Brands)`
3. **Tag Type:** Custom HTML
4. **HTML:**

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

5. **Triggering:**
   - Trigger: **All Pages**
6. **Advanced Settings:**
   - Tag firing options: **Once per page**
7. **Save**

---

### **Tag 4: Meta Pixel - Form Submit (Lead Event)**

1. Go to **Tags** → Click **"New"**
2. **Tag Name:** `Meta Pixel - Form Submit (Lead Event)`
3. **Tag Type:** Custom HTML
4. **HTML:**

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

5. **Triggering:**
   - Create new trigger: **Form Submission - All Forms**
   - Or use existing form trigger
6. **Save**

---

## 🚀 STEP 4: Test the Setup

### **1. Enable Preview Mode**
1. In GTM, click **"Preview"**
2. Enter: `https://lp.grandgimeno.com`
3. Click **"Connect"**

### **2. Verify Variables Load Correctly**
- Check **Variables** tab in GTM debugger
- Confirm:
  - `Brand - GA4 Measurement ID` = `G-C53EL9R7Z6`
  - `Brand - Meta Pixel ID` = `511510642697274`
  - `Brand - Name` = `Grand Gimeno`

### **3. Test Another Brand**
1. Change preview URL to: `https://lp.jayscatering.com`
2. Verify variables change:
  - `Brand - GA4 Measurement ID` = `G-MNGQ6T3S7L`
  - `Brand - Meta Pixel ID` = `511510642697274`
  - `Brand - Name` = `Jay's Catering`

### **4. Test Ellie's Table (Unique Pixel)**
1. Change preview URL to: `https://lp.elliestable.com`
2. Verify:
  - `Brand - Meta Pixel ID` = `1097130558389260` ✅ (different!)

### **5. Check Browser Console**
- Open DevTools → Console
- Look for:
  ```
  Meta Pixel initialized for Grand Gimeno (ID: 511510642697274)
  GA4 event sent: page_view
  ```

### **6. Verify in GA4 Real-Time**
1. Go to **GA4** → Real-time report
2. Navigate between different lp.[brand].com pages
3. Verify events appear in correct GA4 properties

---

## ✅ STEP 5: Publish

1. Click **"Submit"** in GTM
2. **Version Name:** `Universal Multi-Brand Setup - 7 Brands`
3. **Version Description:**
   ```
   Implemented dynamic lookup tables for all 7 brand landing pages.
   - GA4 tracking: Universal tag with brand-specific measurement IDs
   - Meta Pixel: Universal tag with brand-specific pixel IDs
   - Removed all duplicate tracking
   - All tracking via Stape server-side (tracking.jayscatering.com)
   ```
4. Click **"Publish"**

---

## 🧪 Post-Publish Verification

### **Test Each Brand:**

1. **Grand Gimeno** → https://lp.grandgimeno.com
   - GA4: G-C53EL9R7Z6
   - Pixel: 511510642697274

2. **Jay's Catering** → https://lp.jayscatering.com
   - GA4: G-MNGQ6T3S7L
   - Pixel: 511510642697274

3. **Ellie's Table** → https://lp.elliestable.com
   - GA4: G-H149DE94FR
   - Pixel: 1097130558389260 ⚠️ (unique)

4. **Serra Plaza** → https://lp.serraplaza.com
   - GA4: G-2GGX4RHXPR
   - Pixel: 511510642697274

5. **Hangar 21** → https://lp.hangar21venue.com
   - GA4: G-Y1WSBF33PJ
   - Pixel: 511510642697274

6. **Estate on Second** → https://lp.estateonsecond.com
   - GA4: G-HDX153V4FB
   - Pixel: 511510642697274

7. **The Casino** → https://lp.thecasinosc.com
   - GA4: G-6BSN49J27D
   - Pixel: 511510642697274

---

## 📝 Adding New Brands in the Future

When you add a new brand landing page:

1. **Add to Variables:**
   - Edit `Brand - GA4 Measurement ID` → Add new row
   - Edit `Brand - Meta Pixel ID` → Add new row
   - Edit `Brand - Name` → Add new row

2. **No Tag Changes Needed!** ✅
   - All tags are universal and will automatically pick up new brands

3. **Test in Preview Mode**

4. **Publish**

---

## 🔍 Troubleshooting

### **Problem: Variable shows "Unknown Brand"**
- **Cause:** Page Hostname doesn't match lookup table
- **Fix:** Check exact hostname (remove `https://`, check for trailing `/`)

### **Problem: Wrong GA4 property receiving data**
- **Cause:** Variable not loading or default value used
- **Fix:** Verify `{{Page Hostname}}` in GTM debugger

### **Problem: Meta Pixel not firing**
- **Cause:** Script blocked or variable issue
- **Fix:** Check browser console for errors, verify Stape server responding

### **Problem: Duplicate events in GA4**
- **Cause:** Both client-side and server-side tracking active
- **Fix:** Verify `/App.tsx` has NO tracking code (cleaned in this setup)

---

## ✨ What's Been Cleaned

**Removed from /index.html:**
- ❌ Duplicate HubSpot script (now only one instance)
- ❌ Duplicate Meta Pixel (now handled by GTM)

**Removed from /App.tsx:**
- ❌ All Meta Pixel initialization code
- ❌ All HubSpot initialization code
- ❌ All tracking useEffect hooks

**What Remains:**
- ✅ GTM container script (loads via Stape)
- ✅ HubSpot form auto-fill script (UTM/click ID tracking)
- ✅ Clean React code with no tracking logic

---

## 🎯 Summary

**One GTM Container** → **7 Brand Landing Pages** → **Zero Code Changes**

All tracking is now:
- ✅ Universal (works across all brands)
- ✅ Dynamic (detects brand by hostname)
- ✅ Server-side (via Stape for iOS 14.5+ compliance)
- ✅ Clean (no duplicate scripts)
- ✅ Scalable (add brands by editing variables only)

**Questions? Check the troubleshooting section or test in Preview Mode first!**
