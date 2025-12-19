# 🧹 Tracking Cleanup Summary
## Grand Gimeno + 6 Other Brand Landing Pages

---

## ✅ What Was Cleaned

### **1. Removed Duplicate HubSpot Tracking**

**Before:**
- ❌ HubSpot script in `/index.html` (line 35)
- ❌ HubSpot script loaded via `/App.tsx` useEffect (lines 51-73)
- **Result:** HubSpot loaded TWICE on every page

**After:**
- ✅ HubSpot loaded ONCE via GTM universal tag
- ✅ HubSpot form auto-fill script remains in `/index.html` (for UTM/click ID tracking)

---

### **2. Removed Duplicate Meta Pixel Tracking**

**Before:**
- ❌ Meta Pixel hardcoded in `/App.tsx` with ID `511510642697274` (lines 18-49)
- ❌ Only worked for Grand Gimeno (ignored other brands)
- **Result:** Wrong pixel for Ellie's Table, not scalable

**After:**
- ✅ Meta Pixel loaded via GTM universal tag
- ✅ Dynamic pixel ID based on brand domain
- ✅ Correct pixel for all 7 brands (including Ellie's unique pixel)

---

### **3. Removed Brand-Specific GA4 Tracking**

**Before:**
- ❌ GTM had trigger "Host - grandgimeno.com" (only fired for Grand Gimeno)
- ❌ Other 6 brands had NO GA4 tracking at all
- **Result:** Only Grand Gimeno tracked in GA4

**After:**
- ✅ Universal GA4 tag with dynamic measurement ID
- ✅ All 7 brands tracked in their respective GA4 properties
- ✅ Scalable for future brands

---

## 📁 Files Changed

### **/index.html**
**Removed:**
```html
<!-- HubSpot Tracking Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/48463492.js"></script>
```

**Kept:**
- ✅ GTM container script (loads via Stape)
- ✅ HubSpot form auto-fill script (UTM/click ID tracking)

---

### **/App.tsx**
**Removed:**
- ❌ All Meta Pixel initialization code (50+ lines)
- ❌ All HubSpot initialization code (20+ lines)
- ❌ All useEffect hooks for tracking
- ❌ Global flag variables (`window._metaPixelInitialized`, etc.)

**Result:**
- ✅ Clean React component with ZERO tracking logic
- ✅ 85 lines → 20 lines (76% reduction)
- ✅ All tracking handled by GTM

---

## 🎯 GTM Configuration (What to Create)

### **Variables (3 total):**
1. **Brand - GA4 Measurement ID** (Lookup Table)
   - Maps hostname → GA4 ID
   - 7 rows for 7 brands

2. **Brand - Meta Pixel ID** (Lookup Table)
   - Maps hostname → Pixel ID
   - 7 rows for 7 brands
   - Handles Ellie's Table unique pixel

3. **Brand - Name** (Lookup Table)
   - Maps hostname → Brand name
   - Used for event parameters

### **Tags (4 total):**
1. **GA4 - Config - Universal** (All Brands)
   - Uses `{{Brand - GA4 Measurement ID}}`
   - Fires on All Pages

2. **GA4 - Event - Pageview** (via Server)
   - Sends page_view event
   - Includes brand name parameter

3. **Meta Pixel - Universal** (All Brands)
   - Uses `{{Brand - Meta Pixel ID}}`
   - Loads via Stape server
   - Fires on All Pages

4. **Meta Pixel - Form Submit** (Lead Event)
   - Tracks form submissions
   - Includes brand name

### **Triggers:**
- Removed: ❌ "Host - grandgimeno.com" (brand-specific)
- Uses: ✅ "All Pages" (universal)

---

## 🔍 Verification Checklist

### **After GTM Setup, Test Each Brand:**

- [ ] **lp.jayscatering.com**
  - GA4: G-MNGQ6T3S7L ✅
  - Pixel: 511510642697274 ✅
  
- [ ] **lp.elliestable.com**
  - GA4: G-H149DE94FR ✅
  - Pixel: 1097130558389260 ✅ (unique!)
  
- [ ] **lp.grandgimeno.com**
  - GA4: G-C53EL9R7Z6 ✅
  - Pixel: 511510642697274 ✅
  
- [ ] **lp.serraplaza.com**
  - GA4: G-2GGX4RHXPR ✅
  - Pixel: 511510642697274 ✅
  
- [ ] **lp.hangar21venue.com**
  - GA4: G-Y1WSBF33PJ ✅
  - Pixel: 511510642697274 ✅
  
- [ ] **lp.estateonsecond.com**
  - GA4: G-HDX153V4FB ✅
  - Pixel: 511510642697274 ✅
  
- [ ] **lp.thecasinosc.com**
  - GA4: G-6BSN49J27D ✅
  - Pixel: 511510642697274 ✅

---

## 🚀 How to Test

### **1. Use GTM Preview Mode:**
```
1. Go to GTM → Click "Preview"
2. Enter: https://lp.grandgimeno.com
3. Click "Connect"
4. Verify variables load:
   - Brand - GA4 Measurement ID = G-C53EL9R7Z6
   - Brand - Meta Pixel ID = 511510642697274
   - Brand - Name = Grand Gimeno
```

### **2. Check Browser Console:**
```javascript
// Should see:
Meta Pixel initialized for Grand Gimeno (ID: 511510642697274)
GA4 event sent: page_view
```

### **3. Verify in GA4 Real-Time:**
```
1. Go to GA4 property G-C53EL9R7Z6
2. Navigate to Real-time report
3. Visit lp.grandgimeno.com
4. Should see pageview event appear
```

### **4. Test Meta Pixel:**
```
1. Install Meta Pixel Helper Chrome extension
2. Visit lp.grandgimeno.com
3. Should show: Pixel 511510642697274 firing
4. Visit lp.elliestable.com
5. Should show: Pixel 1097130558389260 firing (different!)
```

---

## 📊 Tracking Architecture

```
USER VISITS lp.[brand].com
         ↓
    GTM Container (GTM-TJG6R99K)
         ↓
    Stape Server (tracking.jayscatering.com)
         ↓
    ┌─────────┬──────────┬──────────┐
    ↓         ↓          ↓          ↓
  GA4      Meta      HubSpot    Google Ads
(Brand)   (Brand)   (Shared)   (Future)
```

**Benefits:**
- ✅ Server-side tracking (iOS 14.5+ compliant)
- ✅ Cross-domain tracking (lp.[brand].com ↔ [brand].com)
- ✅ Centralized management (one GTM for all brands)
- ✅ No code changes needed for new brands
- ✅ Better attribution tracking
- ✅ Faster page load (fewer client-side scripts)

---

## 🎓 Key Concepts

### **Why Lookup Tables?**
Instead of creating 7 separate GA4 tags (one per brand), we use ONE tag with a lookup table that says:
- "If hostname is lp.jayscatering.com, use GA4 ID G-MNGQ6T3S7L"
- "If hostname is lp.elliestable.com, use GA4 ID G-H149DE94FR"
- etc.

### **Why Server-Side via Stape?**
- Client-side tracking can be blocked by ad blockers
- iOS 14.5+ limits cookie tracking
- Server-side tracking is more reliable and accurate
- Centralized tracking server at tracking.jayscatering.com

### **Why Remove Tracking from React?**
- GTM handles all tracking automatically
- No need for useEffect hooks or manual initialization
- Cleaner code, easier to maintain
- Less JavaScript = faster page load

---

## 🔮 Future: Adding New Brands

When you create a new landing page:

**Step 1:** Deploy to `lp.newbrand.com`

**Step 2:** Edit GTM Variables (add one row to each):
- Brand - GA4 Measurement ID → Add `lp.newbrand.com | G-XXXXXXXXX`
- Brand - Meta Pixel ID → Add `lp.newbrand.com | [pixel-id]`
- Brand - Name → Add `lp.newbrand.com | New Brand`

**Step 3:** Test in GTM Preview Mode

**Step 4:** Publish GTM

**Done!** No code changes to /index.html or /App.tsx needed.

---

## ❓ FAQ

**Q: Do I need to update /index.html for each brand?**
A: No! The same code works for all brands. GTM detects the hostname and fires the correct tracking IDs.

**Q: What if I want to track custom events?**
A: Create a new GTM tag with the event, use the brand variables, and set the trigger. No code changes needed.

**Q: Can I still use `window.fbq()` or `window.gtag()` in my React code?**
A: Yes! GTM loads these functions, so you can still fire custom events from React if needed.

**Q: What about HubSpot forms?**
A: The auto-fill script in /index.html still works and captures UTM parameters + click IDs. HubSpot tracking pixel loads via GTM.

**Q: How do I verify cross-domain tracking works?**
A: Test by clicking from lp.grandgimeno.com → grandgimeno.com and check if GA4 session continues (same session ID).

---

## 📞 Next Steps

1. ✅ **Read GTM_SETUP_GUIDE.md** for step-by-step instructions
2. ✅ **Follow the guide** to create variables and tags in GTM
3. ✅ **Test in Preview Mode** before publishing
4. ✅ **Publish GTM** once verified
5. ✅ **Deploy cleaned code** (/index.html and /App.tsx)
6. ✅ **Verify tracking** on all 7 brand landing pages

**Questions? Issues? Check the Troubleshooting section in GTM_SETUP_GUIDE.md!**
