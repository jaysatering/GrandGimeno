# GRAND GIMENO TRACKING IMPLEMENTATION SUMMARY
**Use this as reference for implementing tracking on other sites**

---

## 🎯 TRACKING OVERVIEW

### **Current Setup:**
- ✅ Meta Pixel (Client-Side) with CAPI readiness
- ✅ Google Analytics 4 with cross-domain linking
- ✅ HubSpot Forms with hidden tracking fields
- ✅ UTM parameter capture and storage
- ✅ GCLID (Google Ads) tracking
- ✅ FBCLID (Meta Ads) tracking
- ✅ Event ID generation for deduplication
- ✅ 90-day attribution window for ad clicks

### **Conversion Flow:**
```
User clicks Meta/Google Ad
    ↓
Landing page captures GCLID/FBCLID + UTMs → Stores in cookies (90 days)
    ↓
User fills form → Hidden fields populated with all tracking data
    ↓
Form submits → Redirects to /thank-you
    ↓
Thank You page fires Lead event (Meta) + Conversion event (GA4)
    ↓
HubSpot receives complete attribution data
    ↓
Meta CAPI uses Event ID to deduplicate browser pixel events
```

---

## 📋 FILE STRUCTURE

```
/
├── App.tsx                    # Meta Pixel initialization (React)
├── index.html                 # GA4 initialization
├── pages/
│   ├── HomePage.tsx           # HubSpot form + tracking initialization
│   └── ThankYouPage.tsx       # Conversion event firing
├── utils/
│   └── tracking.ts            # Core tracking utility (UTM, GCLID, FBCLID)
└── config/
    └── tracking.ts            # Configuration (ready for Stape GTM)
```

---

## 🔧 IMPLEMENTATION DETAILS

### **1. META PIXEL (App.tsx)**

**Location:** `/App.tsx`  
**Method:** React useEffect with useRef for duplicate prevention

```typescript
import { useEffect, useRef } from 'react';

export default function App() {
  const pixelInitialized = useRef(false);

  useEffect(() => {
    // Initialize Meta Pixel only once
    if (pixelInitialized.current) return;
    
    if (!window.fbq) {
      (function(f,b,e,v,n,t,s) {
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
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', '511510642697274'); // 👈 YOUR PIXEL ID
      window.fbq('track', 'PageView');
      pixelInitialized.current = true;
      console.log('Meta Pixel initialized');
    }
  }, []);

  return (
    // Your routes...
  );
}
```

**⚠️ CRITICAL:**
- Meta Pixel loaded in **App.tsx ONLY** (not index.html)
- Uses `useRef` to prevent re-initialization on re-renders
- Fires PageView automatically on load
- **DO NOT load pixel in both index.html AND App.tsx** (causes duplicate firing)

---

### **2. GOOGLE ANALYTICS 4 (index.html)**

**Location:** `/index.html` in `<head>`

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-C53EL9R7Z6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-C53EL9R7Z6', {
    'linker': {
      'domains': ['lp.grandgimeno.com', 'grandgimeno.com']
    }
  });
</script>
```

**Configuration:**
- **Measurement ID:** `G-C53EL9R7Z6`
- **Cross-Domain Linking:** Enabled for `lp.grandgimeno.com` and `grandgimeno.com`
- **Purpose:** Tracks users across subdomain and main domain

---

### **3. HUBSPOT FORM (HomePage.tsx)**

**Location:** `/pages/HomePage.tsx`

```typescript
useEffect(() => {
  const script = document.createElement('script');
  script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
  script.charset = 'utf-8';
  script.type = 'text/javascript';
  script.async = true;
  
  script.onload = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na2",
        portalId: "48463492",           // 👈 YOUR PORTAL ID
        formId: "83c1be77-a158-4a0a-9938-e04f79ced417", // 👈 YOUR FORM ID
        target: '#hubspot-form-container',
        onFormSubmitted: function() {
          // Redirect to thank you page
          window.location.hash = '#/thank-you';
        }
      });
    }
  };
  
  document.body.appendChild(script);
  return () => {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
  };
}, []);
```

**HubSpot Form Setup:**
- **Portal ID:** `48463492`
- **Form ID:** `83c1be77-a158-4a0a-9938-e04f79ced417`
- **Region:** `na2` (North America 2)

**Hidden Fields Required in HubSpot:**
1. `gclid` - Google Click ID
2. `meta_fbc` - Facebook Click ID (_fbc cookie)
3. `meta_fbp` - Facebook Browser ID (_fbp cookie)
4. `utm_source` - UTM Source
5. `utm_medium` - UTM Medium
6. `utm_campaign` - UTM Campaign
7. `utm_content` - UTM Content
8. `utm_term` - UTM Term
9. `landing_page_url` - First page user landed on
10. `referrer_url` - Where user came from
11. `event_id` - Unique event ID for CAPI deduplication

---

### **4. TRACKING UTILITY (tracking.ts)**

**Location:** `/utils/tracking.ts`

**What It Does:**
1. **Captures URL parameters** when user lands on site
2. **Stores tracking data in cookies** (90-day attribution window)
3. **Waits for HubSpot form to load**
4. **Auto-fills hidden form fields** with tracking data

**Key Functions:**

#### **initializeTracking()**
Call this in HomePage.tsx:

```typescript
import { initializeTracking } from '../utils/tracking';

useEffect(() => {
  initializeTracking();
}, []);
```

#### **Cookie Storage:**
- **GCLID:** 90 days (Google Ads)
- **FBCLID:** 90 days (Meta Ads, stored as `_fbc` cookie)
- **UTM Parameters:** 30 days
- **Landing Page:** 30 days (first visit only)
- **Referrer:** 30 days (first visit only)

#### **Auto-Fill Logic:**
- Uses **MutationObserver** for efficient form detection
- Falls back to **polling** if MutationObserver fails
- Fills fields from cookies OR URL parameters (cookies take precedence)
- Console logs each field that gets populated

---

### **5. CONVERSION EVENTS (ThankYouPage.tsx)**

**Location:** `/pages/ThankYouPage.tsx`

```typescript
import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Generate unique event ID for deduplication between browser pixel and CAPI
    const eventID = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(7);
    
    // Fire Meta Pixel Lead event
    if (window.fbq) {
      window.fbq('track', 'Lead', {}, { eventID: eventID });
    }
    
    // Fire GA4 conversion event
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'Form',
        event_label: 'Grand Gimeno Inquiry Submitted'
      });
    }
  }, []);

  return (
    // Thank you page content...
  );
}
```

**Event Firing:**
- **Meta Pixel:** `Lead` event with unique Event ID
- **GA4:** `conversion` event with category/label
- **Event ID Format:** `lead_1734456789_abc123xyz`
- **Purpose of Event ID:** Deduplicates browser pixel events from CAPI events

---

## 🔗 AD PLATFORM URL PARAMETERS

### **Meta Ads (Facebook/Instagram)**

**URL Template:**
```
https://lp.grandgimeno.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}&fbclid={{click_id}}
```

**Dynamic Parameters:**
- `{{campaign.name}}` - Campaign name
- `{{adset.name}}` - Ad set name
- `{{ad.name}}` - Individual ad name
- `{{click_id}}` - Meta's FBCLID

### **Google Ads**

**URL Template:**
```
https://lp.grandgimeno.com/?utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_content={adgroup}&utm_term={keyword}&gclid={gclid}
```

**Dynamic Parameters:**
- `{campaign}` - Campaign name
- `{adgroup}` - Ad group name
- `{keyword}` - Keyword that triggered ad
- `{gclid}` - Google Click ID

---

## 🎯 META PIXEL CONVERSIONS API (CAPI)

### **Current Setup:**
- ✅ **Event ID generation** for deduplication
- ✅ **_fbc cookie** capture (Facebook Click ID)
- ✅ **_fbp cookie** capture (Facebook Browser ID)
- ✅ **Lead event** fires on thank you page with Event ID

### **CAPI Gateway (Automatic):**
Meta Pixel has automatic Conversions API Gateway enabled. This means:
1. Browser fires `Lead` event with Event ID
2. Meta's gateway automatically sends same event server-side
3. Event ID prevents duplicate counting

### **For Manual CAPI Integration:**
If you want to send events server-side manually:

**Required Data Points:**
- `event_id` - From thank you page
- `fbc` - Facebook Click ID (_fbc cookie)
- `fbp` - Facebook Browser ID (_fbp cookie)
- `event_source_url` - Current page URL
- User data (email, phone, etc.) - hashed with SHA-256

**Event ID must match** between browser pixel and server-side event!

---

## 📊 TESTING CHECKLIST

### **Before Going Live:**

#### **Meta Pixel Helper:**
- [ ] Install [Meta Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- [ ] Visit landing page
- [ ] Should show: **1 PageView event** (not 2 or 3!)
- [ ] Submit form and visit thank you page
- [ ] Should show: **1 Lead event** with Event ID

#### **GA4 DebugView:**
- [ ] Open GA4 → Configure → DebugView
- [ ] Visit site in browser
- [ ] Should see: **page_view** events
- [ ] Submit form
- [ ] Should see: **conversion** event

#### **HubSpot Form:**
- [ ] Test form submission
- [ ] Check contact record in HubSpot
- [ ] Verify hidden fields are populated:
  - [ ] GCLID (if from Google Ad)
  - [ ] Meta FBC (if from Meta Ad)
  - [ ] Meta FBP (always)
  - [ ] UTM parameters (if present in URL)
  - [ ] Landing page URL
  - [ ] Referrer URL
  - [ ] Event ID

#### **Browser Console:**
- [ ] Open DevTools → Console
- [ ] Look for tracking logs:
  ```
  Meta Pixel initialized
  [Tracking] GCLID field populated: xxx
  [Tracking] Meta FBC field populated: fb.1.xxx
  [Tracking] UTM Source field populated: facebook
  [Tracking] Event ID field populated: lead_xxx
  ```

#### **Cookie Inspection:**
- [ ] Open DevTools → Application → Cookies
- [ ] Check for:
  - [ ] `_fbc` (if FBCLID in URL)
  - [ ] `_fbp` (always set by Meta Pixel)
  - [ ] `gclid` (if from Google Ad)
  - [ ] `utm_source`, `utm_medium`, etc. (if UTMs in URL)

---

## 🚨 COMMON ISSUES & FIXES

### **Issue: Meta Pixel fires multiple times**
**Cause:** Pixel loaded in both index.html AND App.tsx  
**Fix:** Keep pixel in **App.tsx ONLY**, remove from index.html

### **Issue: GCLID not captured**
**Cause:** Google Ads auto-tagging disabled  
**Fix:** In Google Ads → Settings → Account Settings → Auto-tagging → Enable

### **Issue: FBCLID not captured**
**Cause:** Meta ad URL not using `{{click_id}}` parameter  
**Fix:** Add `&fbclid={{click_id}}` to ad URL template

### **Issue: HubSpot hidden fields not populating**
**Cause:** Fields don't exist in HubSpot form or wrong field names  
**Fix:** In HubSpot form editor → Add hidden fields with EXACT names:
- `gclid`
- `meta_fbc`
- `meta_fbp`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- `landing_page_url`
- `referrer_url`
- `event_id`

### **Issue: Cross-domain tracking not working**
**Cause:** Linker not configured in GA4  
**Fix:** Verify GA4 config in index.html includes:
```javascript
gtag('config', 'G-XXXXXXXX', {
  'linker': {
    'domains': ['yourdomain.com', 'lp.yourdomain.com']
  }
});
```

### **Issue: Conversions not showing in Meta Ads Manager**
**Cause:** Event Setup Tool not configured  
**Fix:** 
1. Go to Meta Events Manager
2. Select your pixel
3. Settings → Event Setup Tool
4. Map "Lead" event to your conversion

---

## 🎯 MULTI-VENUE SETUP

### **Shared Meta Pixel Across Venues:**

**Same Pixel ID:** `511510642697274`  
**Different Domains:**
- `lp.grandgimeno.com`
- `lp.venuename2.com`
- `lp.venuename3.com`

**How to distinguish venues in Meta Ads:**
1. **Use UTM Campaign naming:** `venue_grandgimeno_campaign1`
2. **Or use custom parameters:** `&venue=grandgimeno`
3. **Set up Custom Conversions in Meta:**
   - Go to Events Manager → Custom Conversions → Create Custom
   - Name: "Grand Gimeno Leads"
   - Rule: URL contains `lp.grandgimeno.com` AND Event = Lead
   - Repeat for each venue

**Custom Conversion Setup:**
```
Name: Grand Gimeno Leads
URL Rule: URL contains "lp.grandgimeno.com"
Event: Lead
```

This allows you to optimize campaigns per venue while using same pixel!

---

## 🔄 ATTRIBUTION WINDOWS

### **Cookie Expiry:**
- **GCLID:** 90 days (Google standard)
- **FBCLID (_fbc):** 90 days (Meta standard)
- **UTM Parameters:** 30 days
- **Landing Page:** 30 days (persists across sessions)
- **Referrer:** 30 days (first touch only)

### **Why 90 Days for Ad Clicks?**
- Matches Meta's default conversion window (7-day click, 1-day view)
- Matches Google's default conversion window (30-90 days)
- Ensures attribution even if user takes weeks to convert

---

## 📁 CONFIGURATION FILE (tracking.ts)

**Location:** `/config/tracking.ts`

```typescript
export const TRACKING_CONFIG = {
  // Server-Side Tracking (Stape) - For future use
  USE_SERVER_SIDE_TRACKING: false,
  STAPE_SERVER_URL: '', // e.g., 'https://yoursubdomain.stape.io'
  GTM_CONTAINER_ID: '', // e.g., 'GTM-XXXXXX'
  
  // Client-Side Tracking (Current Setup)
  META_PIXEL_ID: '511510642697274',
  GA4_MEASUREMENT_ID: 'G-C53EL9R7Z6',
  
  // Cross-Domain Tracking
  LINKED_DOMAINS: ['lp.grandgimeno.com', 'grandgimeno.com']
};
```

**To switch to Stape GTM (server-side tracking):**
1. Set `USE_SERVER_SIDE_TRACKING: true`
2. Add your Stape server URL
3. Add your GTM container ID
4. Rebuild app
5. Script URLs automatically switch to your Stape server

---

## ✅ DEPLOYMENT CHECKLIST

### **Before Deploying to New Venue:**

1. **Update Pixel ID** (if different):
   - [ ] App.tsx → `window.fbq('init', 'YOUR_PIXEL_ID')`

2. **Update GA4 ID** (if different):
   - [ ] index.html → `gtag('config', 'G-XXXXXXXXXX')`

3. **Update HubSpot Form**:
   - [ ] HomePage.tsx → `portalId` and `formId`
   - [ ] Verify hidden fields exist in HubSpot form

4. **Update Cross-Domain Linking**:
   - [ ] index.html → GA4 config → linker domains
   - [ ] Add new venue's domain

5. **Update Ad URL Templates**:
   - [ ] Meta Ads → Use correct landing page URL
   - [ ] Google Ads → Use correct landing page URL

6. **Test Everything**:
   - [ ] Meta Pixel Helper shows 1 PageView
   - [ ] Lead event fires on thank you page
   - [ ] GA4 DebugView shows events
   - [ ] HubSpot form fields populate
   - [ ] Console shows tracking logs

7. **Set Up Custom Conversions** (if multi-venue):
   - [ ] Meta Events Manager → Custom Conversions
   - [ ] Create conversion for this venue's domain

---

## 🎓 KEY LEARNINGS

### **What Works:**
✅ Meta Pixel in React (App.tsx) with useRef prevents duplicates  
✅ GA4 in index.html for early page tracking  
✅ Tracking utility with MutationObserver + polling fallback  
✅ 90-day cookie storage for ad click attribution  
✅ Event IDs for CAPI deduplication  
✅ Cross-domain linking for subdomain tracking  

### **What to Avoid:**
❌ Loading Meta Pixel in both index.html AND App.tsx  
❌ Short cookie expiry (use 90 days for ad clicks)  
❌ Missing Event IDs (causes duplicate conversions in CAPI)  
❌ Forgetting cross-domain linking for subdomains  
❌ Not testing with Meta Pixel Helper before launch  

---

## 📞 SUPPORT CONTACTS

**Meta Pixel ID:** 511510642697274  
**GA4 Property ID:** G-C53EL9R7Z6  
**HubSpot Portal:** 48463492  

**Useful Links:**
- [Meta Events Manager](https://business.facebook.com/events_manager2)
- [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- [GA4 DebugView](https://support.google.com/analytics/answer/7201382)
- [HubSpot Forms](https://app.hubspot.com/forms/)

---

**Last Updated:** December 17, 2024  
**Version:** 1.0  
**Site:** lp.grandgimeno.com
