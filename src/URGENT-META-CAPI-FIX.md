# 🚨 URGENT: Meta CAPI Fix Guide
## Fixing "capig.jayscatering.com" Confusion

**Created:** December 20, 2024  
**Status:** CRITICAL - Fix immediately  
**Issue:** Meta CAPI domain remade, Meta servers confused

---

## 🔥 THE PROBLEM

**What happened:**
1. You had `capig.jayscatering.com` working
2. It got deleted/remade with same domain
3. Meta's servers are now confused (cached old config)
4. Events may be duplicating, dropping, or erroring

**Why Meta is confused:**
- Meta caches CAPI gateway domains for 24-48 hours
- Old domain had different verification tokens
- New domain has same URL but different backend
- Meta thinks there are two CAPI setups

---

## ✅ SOLUTION 1: WAIT IT OUT (24-48 HOURS) - SAFEST

### **What to do:**
1. **Do NOTHING** for 24-48 hours
2. Meta's cache will clear
3. New CAPI setup will work

### **Pros:**
- ✅ No risk of breaking anything
- ✅ Will resolve automatically
- ✅ No technical changes needed

### **Cons:**
- ❌ 24-48 hours without reliable CAPI
- ❌ May lose conversion data during this time

### **Action items:**
1. Stop making changes to Meta Events Manager
2. Stop recreating CAPI setup
3. Let Meta's cache expire
4. Check back in 48 hours

---

## ✅ SOLUTION 2: USE NEW DOMAIN - FASTEST

### **What to do:**
Create a BRAND NEW CAPI domain (different URL)

### **Steps:**

#### **1. Choose new domain:**
Options:
- `capi2.jayscatering.com`
- `events.jayscatering.com`
- `tracking2.jayscatering.com`
- `pixel.jayscatering.com`

#### **2. In Stape Dashboard:**
1. Go to your Stape container
2. Settings → Custom Domain
3. Add NEW domain (e.g., `capi2.jayscatering.com`)
4. Follow Stape's DNS setup instructions

#### **3. In your DNS (GoDaddy/Cloudflare/etc.):**
Add CNAME record:
```
Type: CNAME
Name: capi2
Value: [Your Stape server domain from step 2]
TTL: Auto or 3600
```

#### **4. In Meta Events Manager:**
1. Go to Events Manager → Data Sources
2. Click your pixel (511510642697274 or 1097130558389260)
3. Settings → Conversions API
4. **REMOVE** old `capig.jayscatering.com` gateway
5. Click "Set up manually"
6. Use NEW domain: `https://capi2.jayscatering.com`
7. Generate new Access Token
8. Save

#### **5. In Stape Server Container:**
1. Open server container in GTM
2. Find "Meta Conversions API" tag
3. Update endpoint to use new domain
4. Update access token (from step 4.7)
5. Save and publish

### **Pros:**
- ✅ Works immediately (no cache issues)
- ✅ Clean slate
- ✅ Can keep old domain as backup

### **Cons:**
- ❌ Requires DNS changes (15-60 min propagation)
- ❌ Need to update Meta & Stape configs

### **Time to fix:** 1-2 hours

---

## ✅ SOLUTION 3: CLEAR META'S CACHE - RISKY

### **What to do:**
Force Meta to re-verify the domain

### **Steps:**

#### **1. In Meta Events Manager:**
1. Go to pixel settings
2. Remove CAPI gateway completely
3. **WAIT 1 HOUR** (important!)
4. Re-add CAPI gateway with `capig.jayscatering.com`

#### **2. Verify Stape is responding:**
Test in browser:
```
https://capig.jayscatering.com/healthcheck
```
Should return server status (or 404 if not configured)

#### **3. Test CAPI endpoint:**
```
curl -X POST https://capig.jayscatering.com/v15.0/[PIXEL_ID]/events \
  -H "Content-Type: application/json" \
  -d '{
    "test_event_code": "TEST12345",
    "data": []
  }'
```

### **Pros:**
- ✅ Keeps same domain
- ✅ May work faster than waiting

### **Cons:**
- ❌ May not work (Meta still cached)
- ❌ Risk of breaking working setup

### **Time to fix:** 1-2 hours (if it works)

---

## ✅ SOLUTION 4: BYPASS CAPI TEMPORARILY - EMERGENCY FALLBACK

### **What to do:**
Disable CAPI, use browser pixel only until fixed

### **Steps:**

#### **1. In your code (temporary):**
No code changes needed - browser pixel still works!

#### **2. In Meta Events Manager:**
1. Disable CAPI gateway
2. Keep browser pixel active
3. Events will fire from browser only

#### **3. In Stape (optional):**
Pause Meta CAPI tag temporarily

### **Pros:**
- ✅ No broken tracking
- ✅ Browser pixel still works
- ✅ Buys time to fix properly

### **Cons:**
- ❌ Lose iOS 14.5+ tracking (~30% of mobile)
- ❌ Not a real solution

### **When to use:**
- You need tracking NOW
- Can't wait for cache to clear
- Will fix properly later

---

## 🔍 DIAGNOSE CURRENT STATE

### **Check 1: Is browser pixel working?**
1. Open your site: `lp.grandgimeno.com`
2. Install Meta Pixel Helper Chrome extension
3. Should see PageView event
4. Submit form
5. Should see Lead event

**✅ If working:** Browser tracking is fine  
**❌ If broken:** Different problem (not CAPI)

### **Check 2: Is Stape responding?**
Test URL:
```
https://tracking.jayscatering.com/gtm.js?id=GTM-TJG6R99K
```

**✅ Should:** Load JavaScript code  
**❌ If 404:** Stape server is down

### **Check 3: Is CAPI endpoint alive?**
In Meta Events Manager:
1. Go to pixel → Settings → Conversions API
2. Check "Connection Status"
3. Should show "Active" or "Connected"

**✅ If Active:** CAPI is working (just confused)  
**❌ If Error:** CAPI is broken

### **Check 4: Are events showing in Meta?**
In Meta Events Manager:
1. Click "Test Events" tab
2. Submit a form on your site
3. Wait 60 seconds
4. Should see event appear

**Check for duplicates:**
- 1 event = Browser pixel only
- 2 events with same Event ID = BOTH browser + CAPI (GOOD!)
- 2 events with different Event IDs = Duplicates (BAD!)

---

## 🎯 RECOMMENDED SOLUTION (BY URGENCY)

### **Need fix RIGHT NOW (next 1 hour):**
→ **SOLUTION 4** (Bypass CAPI temporarily)
- Disable CAPI in Meta Events Manager
- Browser pixel keeps working
- Fix properly later

### **Need fix TODAY (next 4-8 hours):**
→ **SOLUTION 2** (Use new domain)
- Create `capi2.jayscatering.com`
- Update Meta & Stape configs
- Works immediately

### **Can wait 2 days:**
→ **SOLUTION 1** (Wait it out)
- Do nothing
- Let Meta's cache clear
- Check back in 48 hours

### **Feeling lucky:**
→ **SOLUTION 3** (Clear cache)
- Remove & re-add in Meta
- May work, may not
- Worth a try if desperate

---

## 📋 CURRENT STATE CHECKLIST

**Before you do ANYTHING, check these:**

- [ ] Is browser pixel working? (Use Pixel Helper)
- [ ] Is GTM loading? (Check console for "✅ GTM is active")
- [ ] Is Stape server responding? (Check tracking.jayscatering.com/gtm.js)
- [ ] What's the error in Meta Events Manager? (Screenshot it)
- [ ] Are events showing in Test Events tab?
- [ ] Are there duplicate events?

**Share this info and I can give you exact fix!**

---

## 🚨 WHAT NOT TO DO

❌ **Don't** keep recreating CAPI gateway (makes it worse)  
❌ **Don't** change access tokens repeatedly  
❌ **Don't** delete and re-add pixel  
❌ **Don't** panic and change everything

✅ **Do** pick ONE solution and stick with it  
✅ **Do** wait for changes to propagate  
✅ **Do** test in Test Events tab  
✅ **Do** document what you change

---

## 🔧 IMMEDIATE ACTION PLAN

### **RIGHT NOW (next 5 minutes):**

1. **Check if browser pixel works:**
   - Visit your site
   - Use Meta Pixel Helper
   - Confirm PageView fires

2. **Check what error Meta is showing:**
   - Go to Events Manager
   - Screenshot the error
   - Note exact error message

3. **Check Stape server status:**
   - Visit: `https://tracking.jayscatering.com/gtm.js?id=GTM-TJG6R99K`
   - Should load JavaScript
   - If not loading, Stape is down

### **NEXT (choose one):**

**If browser pixel works:**
- **Option A:** Disable CAPI temporarily (Solution 4)
- **Option B:** Wait 48 hours (Solution 1)
- **Option C:** Create new domain (Solution 2)

**If browser pixel broken:**
- Different problem (not CAPI)
- Check GTM is loading
- Check for ad blockers

---

## 📞 SPECIFIC FIXES BY ERROR MESSAGE

### **Error: "Domain verification failed"**
**Fix:** Use new domain (Solution 2)

### **Error: "Access token invalid"**
**Fix:**
1. Go to Meta Business Settings → System Users
2. Generate new access token
3. Update in Stape server container

### **Error: "Too many requests"**
**Fix:** Wait 1 hour, Meta rate limited you

### **Error: "Endpoint not found"**
**Fix:** Check Stape server is running

### **No error, but events not showing:**
**Fix:**
1. Check Test Events tab
2. Make sure Event ID is being sent
3. Wait 2-5 minutes for events to appear

---

## ✅ VERIFICATION (Once Fixed)

### **Test this flow:**

1. **Browser pixel test:**
   - Visit lp.grandgimeno.com
   - Meta Pixel Helper should show PageView
   - No duplicates

2. **Form submission test:**
   - Fill out form
   - Submit
   - Go to Thank You page
   - Meta Pixel Helper should show Lead event
   - Check Event ID is present

3. **Meta Events Manager test:**
   - Go to Test Events tab
   - Submit form again
   - Wait 60 seconds
   - Should see ONE event with Event ID
   - Click event → Should show "browser" AND "server" sources

4. **Deduplication test:**
   - Submit another form
   - Check Test Events
   - Should only see 1 event (not 2)
   - Event should show both browser + server

**✅ If all pass:** CAPI is working correctly!

---

## 🎯 MY RECOMMENDATION

**Based on urgency:**

### **TODAY (Friday night):**
1. Verify browser pixel works (5 min)
2. Disable CAPI in Meta temporarily (5 min)
3. Your ads keep running with browser tracking

### **THIS WEEKEND:**
1. Create new domain: `capi2.jayscatering.com`
2. Set up CAPI fresh with new domain
3. Test thoroughly

### **MONDAY:**
1. Verify CAPI working with new domain
2. Document the fix
3. Never use old domain again

---

**Tell me:**
1. What error is Meta showing?
2. Is browser pixel working?
3. How urgent is this? (Need fix in 1 hour? 1 day? Can wait 2 days?)

**I'll give you EXACT steps based on your answers.** 🚀
