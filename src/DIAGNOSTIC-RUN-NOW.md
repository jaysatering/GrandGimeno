# 🔍 Quick CAPI Diagnostic
## Run these checks RIGHT NOW to see what's wrong

**Created:** December 20, 2024  
**Time to complete:** 5 minutes

---

## ✅ CHECK 1: Browser Pixel (MOST IMPORTANT)

### **Test:**
1. Open: https://lp.grandgimeno.com (or any of your 7 sites)
2. Install **Meta Pixel Helper** Chrome extension (if you don't have it)
3. Click the extension icon

### **What you should see:**
- ✅ **PageView** event fires
- ✅ Pixel ID: `511510642697274` (or `1097130558389260` for Ellie's)
- ✅ Green checkmark (no errors)

### **If you see this:**
✅ **GOOD NEWS:** Your tracking is working! The issue is ONLY server-side.

### **If you DON'T see this:**
🔴 **PROBLEM:** Browser pixel broken (different issue than CAPI)

---

## ✅ CHECK 2: GTM Loading

### **Test:**
1. Stay on same page
2. Press `F12` (open DevTools)
3. Go to **Console** tab

### **What you should see:**
```
✅ GTM is active and running!
```

### **If you see this:**
✅ **GOOD:** GTM is working

### **If you see errors:**
```
❌ GTM did not load after 2 seconds!
```
🔴 **PROBLEM:** GTM not loading (check Stape server)

---

## ✅ CHECK 3: Stape Server

### **Test in browser:**
Open this URL:
```
https://tracking.jayscatering.com/gtm.js?id=GTM-TJG6R99K
```

### **What you should see:**
- ✅ JavaScript code loads (long file)
- ✅ File size: 100-200 KB

### **If you see:**
- 🔴 **404 error** → Stape server is down
- 🔴 **Timeout** → DNS issue or server offline
- 🔴 **Empty file** → Server misconfigured

---

## ✅ CHECK 4: Meta Events Manager

### **Test:**
1. Go to: https://business.facebook.com/events_manager2
2. Click on your pixel:
   - **Jay's/Grand Gimeno/etc:** 511510642697274
   - **Ellie's Table:** 1097130558389260
3. Look at "Overview" tab

### **What to check:**
- How many events in last hour?
- Any error messages at top?
- Connection status (if CAPI configured)

### **Screenshot this and share with me!**

---

## ✅ CHECK 5: Test Events Tab

### **Test:**
1. In Events Manager, click **"Test Events"** tab
2. Activate "Test Events" (toggle on)
3. Use test code: `TEST12345`
4. Go to your site and submit the form
5. Wait 30 seconds
6. Look for event in Test Events

### **What you should see:**
- ✅ Event appears within 30-60 seconds
- ✅ Event has Event ID
- ✅ Source shows "browser" or "server" or both

### **If you see:**
- **2 events with SAME Event ID** → ✅ GOOD! (Browser + CAPI both working, properly deduplicated)
- **2 events with DIFFERENT Event IDs** → 🔴 BAD! (Duplicates)
- **1 event from "browser"** → CAPI not working (browser only)
- **No events** → 🔴 Tracking broken

---

## 🎯 BASED ON YOUR RESULTS

### **Scenario A: Browser pixel working, no CAPI errors**
→ **SOLUTION:** You're fine! Just wait 24-48 hours for Meta cache to clear

### **Scenario B: Browser pixel working, CAPI showing errors**
→ **SOLUTION:** Disable CAPI temporarily, fix over weekend

### **Scenario C: Browser pixel NOT working**
→ **SOLUTION:** Different problem - GTM or Stape server issue

### **Scenario D: Duplicate events (2 with different Event IDs)**
→ **SOLUTION:** CAPI sending wrong Event IDs - need to fix server container

### **Scenario E: GTM not loading**
→ **SOLUTION:** Stape server down - check Stape dashboard

---

## 📋 SHARE WITH ME

**Copy/paste your results:**

```
CHECK 1 (Browser Pixel):
[ ] PageView event shows in Pixel Helper
[ ] Pixel ID: _______________
[ ] Any errors? _______________

CHECK 2 (GTM Loading):
[ ] Console shows "GTM is active"
[ ] Any errors? _______________

CHECK 3 (Stape Server):
[ ] tracking.jayscatering.com/gtm.js loads
[ ] File size: _______ KB
[ ] Any errors? _______________

CHECK 4 (Events Manager):
[ ] Events showing in last hour? _______
[ ] Any error messages? _______________
[ ] CAPI connection status: _______________

CHECK 5 (Test Events):
[ ] Event appeared? Yes / No
[ ] Number of events: _______
[ ] Event source(s): _______
[ ] Same or different Event IDs? _______
```

**Then tell me:**
- How urgent? (Need fix NOW / today / this weekend / next week)
- Which pixel having issues? (511510642697274 or 1097130558389260 or both)
- What changed when you "remade" CAPI? (What exactly did you do?)

---

## 🚨 MEANWHILE - EMERGENCY SAFETY

**If you need tracking working RIGHT NOW:**

### **Option 1: Disable CAPI (5 minutes)**
1. Go to Meta Events Manager
2. Click your pixel
3. Settings → Conversions API
4. Toggle OFF or Remove gateway
5. Browser pixel keeps working

### **Option 2: Do Nothing**
- Browser pixel likely still working
- You're getting ~70% of data
- Fix CAPI over the weekend

**Neither option will break anything worse!**

---

## 📞 TELL ME THE RESULTS

Share your CHECK results (1-5) and I'll give you EXACT fix steps.

**Don't change anything else until you run these checks!** 🛑
