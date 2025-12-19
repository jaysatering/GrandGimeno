# Meta Conversion Setup Guide
**Grand Gimeno & All 7 Venues**

---

## 🎯 Overview

This guide walks you through setting up Meta Pixel conversion tracking for your 7 venue landing pages using **dual-layer tracking** (form submit + thank you page) to maximize conversion capture while maintaining excellent user experience.

---

## 📊 Current Setup Summary

### **What's Happening Now:**

| Event | When It Fires | Event Type | Use Case |
|-------|---------------|------------|----------|
| `FormSubmit_GrandGimeno_LP` | User clicks submit button | Custom Event | **Backup tracking** - Fires before redirect |
| `Lead` | Thank you page loads | Standard Event | **Primary tracking** - Your current ads optimize for this |

**Both events fire for each conversion** - this is GOOD! Here's why:

✅ **Form Submit** = More reliable (no redirect failures)  
✅ **Thank You Page** = Better UX (private profile access)  
✅ **Redundancy** = Safety net for tracking

---

## 🚀 Phase 1: Verify Tracking (Do This First)

### **Step 1: Install Meta Pixel Helper (Chrome Extension)**

1. Go to [Chrome Web Store](https://chrome.google.com/webstore)
2. Search "Meta Pixel Helper"
3. Install the extension
4. Pin it to your toolbar

### **Step 2: Test Your Landing Page**

1. **Open your Grand Gimeno landing page** in Chrome
2. **Click the Pixel Helper icon** - you should see:
   - ✅ Meta Pixel ID detected
   - ✅ `PageView` event (auto-fires on page load)
3. **Open Chrome DevTools** (F12 or Right-click → Inspect)
4. **Go to Console tab**
5. **Scroll down and submit the form** (use fake data)
6. **Watch for these console messages:**
   ```
   ✅ Grand Gimeno Landing Page - Form loaded
   ✅ Grand Gimeno Landing Page - Form submitted, redirecting to thank you page...
   ```
7. **Check Pixel Helper again** - you should see:
   - ✅ `FormSubmit_GrandGimeno_LP` (custom event)
8. **Thank you page loads** - check Pixel Helper:
   - ✅ `PageView` event
   - ✅ `Lead` event (if configured on thank you page)

### **Step 3: Verify in Meta Events Manager**

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Click your **Pixel**
3. Click **Test Events** tab
4. Submit form on your landing page
5. **You should see in real-time:**
   - `FormSubmit_GrandGimeno_LP` event
   - `PageView` event (thank you page)
   - `Lead` event (if configured)

**✅ If you see all these events, your tracking is working perfectly!**

---

## 🎨 Phase 2: Create Custom Conversions (Week 1-2)

### **Why Custom Conversions?**

Meta Ads Manager needs to know which events to optimize for. Custom Conversions let you tell Meta: "This specific event = a conversion I care about."

### **Step 1: Create Custom Conversion for Form Submit Event**

1. **Go to Meta Events Manager**
2. Click **Custom Conversions** (left sidebar)
3. Click **Create Custom Conversion**
4. Fill out the form:

| Field | Value |
|-------|-------|
| **Name** | `Grand Gimeno - Landing Page Form Submit` |
| **Description** | `Form submission on Grand Gimeno landing page (fires before thank you page redirect)` |
| **Data Source** | Select your Meta Pixel |
| **Conversion Event** | Select `Custom` |
| **Event** | `FormSubmit_GrandGimeno_LP` |
| **Add URL** | Leave blank (fires on all pages) |
| **Value** | Leave default |

5. Click **Create**

### **Step 2: Let It Collect Data**

**⏰ Wait 3-7 days** before using this in campaigns. Meta needs:
- At least 50 conversions per week for optimization
- Historical data to understand patterns
- Baseline performance metrics

During this time:
- ✅ Keep your current ads running (optimizing for `Lead` event)
- ✅ Monitor the new `FormSubmit_GrandGimeno_LP` event in Events Manager
- ✅ Compare volume: Form Submit vs Thank You Page Lead events

---

## 📈 Phase 3: Compare Performance (Week 2-3)

### **Check Your Data**

1. **Go to Meta Events Manager**
2. **Click your Pixel**
3. **Look at the Data Sources tab**
4. **Compare event counts over the last 7 days:**

| Event | Count | What It Means |
|-------|-------|---------------|
| `FormSubmit_GrandGimeno_LP` | 45 | Form submits captured |
| `Lead` (Thank You Page) | 42 | Thank you page loads |

**If Form Submit > Lead:** Your backup tracking is catching conversions that would've been lost! 🎉

**If Form Submit = Lead:** Both tracking methods work, good redundancy! ✅

**If Form Submit < Lead:** Something's wrong - debug your form submit event

### **Quality Check**

1. **Go to HubSpot**
2. **Check contacts created in last 7 days**
3. **Compare to Meta event counts**

**If HubSpot contacts ≈ Form Submit events:** ✅ Tracking is accurate!

**If HubSpot contacts ≠ Form Submit events:** ⚠️ Investigation needed

---

## 🧪 Phase 4: Test New Campaigns (Week 3-4)

### **DON'T STOP YOUR CURRENT ADS!** 

Instead, create **duplicate test campaigns** optimizing for the new event.

### **Step 1: Duplicate an Existing Campaign**

1. **Go to Meta Ads Manager**
2. **Find your best-performing Grand Gimeno campaign**
3. **Click the checkbox** next to it
4. **Click "Duplicate"**
5. **Rename it:** `[ORIGINAL NAME] - Form Submit Test`

### **Step 2: Change the Optimization Event**

1. **Open the duplicated campaign**
2. **Go to Ad Set level**
3. **Scroll to "Optimization & Delivery"**
4. **Change "Conversion Event" from:**
   - ❌ `Lead` (old)
   - ✅ `Grand Gimeno - Landing Page Form Submit` (new custom conversion)
5. **Save**

### **Step 3: Run A/B Test**

**Run BOTH campaigns in parallel for 14 days:**

| Campaign | Optimization Event | Budget | Status |
|----------|-------------------|--------|--------|
| **Original** | `Lead` (Thank You Page) | $50/day | ✅ Running |
| **Test** | `FormSubmit_GrandGimeno_LP` | $50/day | ✅ Running |

### **Step 4: Compare Results After 14 Days**

**Go to Ads Manager and compare:**

| Metric | Original (Lead) | Test (Form Submit) | Winner |
|--------|-----------------|-------------------|--------|
| **Cost per conversion** | $45 | $38 | 🏆 Form Submit |
| **Conversion rate** | 3.2% | 3.8% | 🏆 Form Submit |
| **Total conversions** | 35 | 42 | 🏆 Form Submit |
| **ROAS** | 4.2x | 5.1x | 🏆 Form Submit |

**Decision:**
- ✅ **If Form Submit wins:** Gradually shift budget to new campaigns
- ⚠️ **If Lead wins:** Keep current setup, use Form Submit for backup tracking only
- 🤷 **If tie:** Keep both, they're validating each other

---

## 🎯 Phase 5: Scale the Winner (Week 5+)

### **If Form Submit Tracking Wins:**

**Week 5-6: Shift Budget**
- Increase Form Submit campaign budget by 20% per week
- Decrease Lead campaign budget by 20% per week
- Monitor performance daily

**Week 7: Full Migration**
- Pause old Lead-optimized campaigns
- Scale Form Submit campaigns to full budget
- Create new campaigns using Form Submit event

**Keep Thank You Page!**
- ✅ Users still get redirected (great UX!)
- ✅ `Lead` event still fires (backup tracking now!)
- ✅ Private profile access preserved

### **If Lead Event Wins:**

**Keep Current Setup**
- ✅ Ads optimize for `Lead` event (thank you page)
- ✅ Form Submit event runs as backup
- ✅ Better tracking reliability
- ✅ No changes needed

---

## 📋 Setup Checklist for All 7 Venues

### **Grand Gimeno** ✅
- [x] Form submit tracking added to `/pages/HomePage.tsx`
- [x] Event name: `FormSubmit_GrandGimeno_LP`
- [x] Thank you page redirect: Active
- [ ] Custom conversion created in Meta
- [ ] Test campaign running

### **Serra Plaza** (Next)
- [ ] Update Webflow embed code with `onFormSubmit`
- [ ] Event name: `FormSubmit_SerraPlaza_LP`
- [ ] Test form submission
- [ ] Create custom conversion in Meta

### **Venue 3**
- [ ] TBD

### **Venue 4**
- [ ] TBD

### **Venue 5**
- [ ] TBD

### **Venue 6**
- [ ] TBD

### **Venue 7**
- [ ] TBD

---

## 🔧 Troubleshooting

### **Problem: Form Submit Event Not Firing**

**Check:**
1. Open Chrome DevTools → Console
2. Submit form
3. Look for error messages

**Common Issues:**
- ❌ Meta Pixel not loaded → Check GTM container
- ❌ `fbq is not defined` → Pixel script blocked by ad blocker
- ❌ Form submits but no event → Check `onFormSubmit` callback code

**Fix:**
1. Test in Incognito mode (disables extensions)
2. Check Network tab for blocked scripts
3. Verify GTM container is publishing Meta Pixel

### **Problem: Conversion Count Doesn't Match HubSpot**

**Likely Causes:**
- Bot submissions (caught by HubSpot, tracked by Meta)
- Test submissions (you filling out forms)
- Duplicate submissions (user hits submit twice)

**Fix:**
1. Add bot detection to forms
2. Filter out internal traffic in Meta (Settings → Filter traffic)
3. Add `fbq('track', 'Lead', {}, { eventID: uniqueID })` for deduplication

### **Problem: Thank You Page Lead Event Not Firing**

**Check:**
1. Does thank you page have Meta Pixel code?
2. Is there a `fbq('track', 'Lead')` call on thank you page?
3. Is GTM container active on thank you page?

**Fix:**
1. Add Meta Pixel to thank you page (via GTM)
2. Create trigger: Page URL contains `/thank-you`
3. Fire `Lead` event on that trigger

---

## 📊 Recommended Meta Events Manager Setup

### **Events to Track (in order of importance):**

| Event | Type | When | Use Case |
|-------|------|------|----------|
| `PageView` | Standard | All pages load | Traffic volume |
| `ViewContent` | Standard | Landing page loads | Retargeting |
| `FormSubmit_VenueName_LP` | Custom | Form submit click | **Primary conversion** |
| `Lead` | Standard | Thank you page load | Backup conversion |
| `CompleteRegistration` | Standard | Private profile access | Engagement |

### **Custom Conversions to Create:**

1. **Landing Page Form Submit** (each venue)
   - Event: `FormSubmit_GrandGimeno_LP`
   - Use: Campaign optimization

2. **Thank You Page View** (all venues)
   - Event: `PageView`
   - URL contains: `/thank-you`
   - Use: Backup conversion tracking

3. **Private Profile Access** (all venues)
   - Event: `PageView`
   - URL contains: `/private`
   - Use: Engagement tracking

---

## 🎯 Meta Ads Campaign Structure (Recommended)

### **Campaign Level:**
```
Grand Gimeno - Landing Page Conversions
  ↓
Ad Set 1: Lookalike - Past Leads
  → Optimization: FormSubmit_GrandGimeno_LP
  → Budget: $75/day
  ↓
Ad Set 2: Interest - Luxury Events
  → Optimization: FormSubmit_GrandGimeno_LP
  → Budget: $50/day
  ↓
Ad Set 3: Retargeting - Visited Landing Page
  → Optimization: FormSubmit_GrandGimeno_LP
  → Budget: $25/day
```

**All ad sets optimize for the SAME conversion event!**

---

## 📞 Support Resources

### **Meta Events Manager:**
https://business.facebook.com/events_manager2

### **Meta Pixel Helper:**
https://chrome.google.com/webstore/detail/meta-pixel-helper/

### **Meta Learning Phase:**
https://www.facebook.com/business/help/541085379624024

### **Conversion API (Advanced):**
https://developers.facebook.com/docs/marketing-api/conversions-api

---

## ✅ Success Metrics

**You'll know your setup is working when:**

✅ **Events Manager shows both events firing** (Form Submit + Lead)  
✅ **Form Submit count ≥ Lead count** (catching all conversions)  
✅ **HubSpot contact count matches Form Submit count** (±5%)  
✅ **Cost per conversion decreases** after switching optimization  
✅ **ROAS improves** with new tracking method  

---

## 🚨 Important Reminders

⚠️ **DON'T stop running ads during testing**  
⚠️ **DON'T change multiple things at once**  
⚠️ **DON'T remove thank you page redirect**  
⚠️ **DON'T expect instant results** (Meta learning phase = 7 days)  

✅ **DO test in parallel** (old vs new)  
✅ **DO give campaigns time to optimize** (14+ days)  
✅ **DO monitor daily** (catch issues early)  
✅ **DO keep backups running** (redundancy = good)  

---

## 🎉 What You've Accomplished

By following this guide, you've created:

1. ✅ **Dual-layer conversion tracking** (form + thank you page)
2. ✅ **Backup tracking system** (no lost conversions)
3. ✅ **Great user experience** (private profile access)
4. ✅ **Optimization flexibility** (can test different events)
5. ✅ **Reliable attribution** (UTM + GCLID + FBC/FBP)

**This is a best-in-class setup that most agencies charge $5k+ to implement!** 🏆

---

**Questions? Check your browser console, Meta Events Manager Test Events tab, and HubSpot form submissions to debug any issues.**

**Good luck crushing those conversion goals! 🚀**
