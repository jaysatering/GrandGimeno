# 🚀 GTM Server Container + Meta Conversions API Setup
## The RIGHT Way - No CAPI Gateway Needed

**Created:** December 21, 2024  
**Status:** Implementation Guide  
**Goal:** Get "Browser and Server" events in Meta using GTM Server Container

---

## 🎯 WHAT WE'RE BUILDING

```
User Visits lp.grandgimeno.com
    ↓
GTM Web Container (GTM-TJG6R99K) fires
    ↓
    ├─→ Meta Pixel (Browser) → Meta ✅ "Browser"
    │   └─ Includes event_id: "evt_123abc..."
    │
    └─→ dataLayer.push() → GTM Server (tracking.jayscatering.com)
                              ↓
                         Meta CAPI Tag
                              ↓
                         Meta (Server) ✅ "Server"
                         └─ SAME event_id: "evt_123abc..."
                              ↓
                    Meta deduplicates using event_id
                              ↓
                    Result: ONE event showing "Browser and Server" ✅
```

---

## 📋 WHAT YOU NEED

### **From Facebook (Get Monday After They Fix Pixel):**
1. **Meta Access Token** for pixel 511510642697274 (Jay's)
2. **Meta Access Token** for pixel 1097130558389260 (Ellie's)

**How to get:**
1. Meta Events Manager → Select Pixel
2. Settings → Conversions API
3. Generate Access Token
4. Copy it (looks like: `EAAxxxxxxxxxxxxx...`)

### **From Stape:**
- Your server container URL: `https://tracking.jayscatering.com` ✅ (you have this)
- GTM Server Container: (you should have this set up)

---

## 🔧 STEP 1: UPDATE GTM WEB CONTAINER (GTM-TJG6R99K)

### **Why:**
Your current Meta Pixel tags don't send event_id or forward data to GTM Server. We need to fix that.

---

### **A. Update Meta Pixel - Universal Tag**

**Find this tag:** `Meta Pixel - Universal (All Brands)`

**Replace the HTML with:**

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

// Generate unique event ID for deduplication
var eventId = 'evt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);

// Use dynamic pixel ID from GTM variable
fbq('init', '{{Brand - Meta Pixel ID}}');
fbq('track', 'PageView', {}, {eventID: eventId});

// Send to GTM Server via dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'meta_server_event',
  'event_name': 'PageView',
  'event_id': eventId,
  'pixel_id': '{{Brand - Meta Pixel ID}}',
  'event_source_url': '{{Page URL}}',
  'user_data': {
    'client_ip_address': '',  // Server will capture this
    'client_user_agent': navigator.userAgent,
    'fbp': getCookie('_fbp'),
    'fbc': getCookie('_fbc')
  }
});

console.log('✅ Meta Pixel initialized for ' + '{{Brand - Name}}' + ' (ID: ' + '{{Brand - Meta Pixel ID}}' + ') - Event ID: ' + eventId);

// Helper function to get cookies
function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}
</script>
```

**What changed:**
- ✅ Added `event_id` generation
- ✅ Meta Pixel uses `eventID` parameter
- ✅ Sends same data to `dataLayer` for GTM Server
- ✅ Includes `_fbp` and `_fbc` cookies

---

### **B. Update Meta Pixel - Lead Event Tag**

**Find this tag:** `Meta Pixel - Lead Event (Form Submit)`

**Replace the HTML with:**

```html
<script>
if (window.fbq) {
  // Generate unique event ID for deduplication
  var eventId = 'evt_lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
  
  // Fire browser pixel with event_id
  fbq('track', 'Lead', {
    content_name: '{{Brand - Name}} - Contact Form',
    brand: '{{Brand - Name}}',
    source_url: '{{Page URL}}'
  }, {
    eventID: eventId
  });
  
  // Send to GTM Server via dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'meta_server_event',
    'event_name': 'Lead',
    'event_id': eventId,
    'pixel_id': '{{Brand - Meta Pixel ID}}',
    'event_source_url': '{{Page URL}}',
    'custom_data': {
      'content_name': '{{Brand - Name}} - Contact Form',
      'brand': '{{Brand - Name}}'
    },
    'user_data': {
      'client_ip_address': '',  // Server will capture this
      'client_user_agent': navigator.userAgent,
      'fbp': getCookie('_fbp'),
      'fbc': getCookie('_fbc')
    }
  });
  
  console.log('✅ Meta Pixel Lead event fired for ' + '{{Brand - Name}}' + ' - Event ID: ' + eventId);
}

// Helper function to get cookies
function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}
</script>
```

**What changed:**
- ✅ Added `event_id` generation
- ✅ Meta Pixel uses `eventID` parameter
- ✅ Sends same data to `dataLayer` for GTM Server
- ✅ Includes `_fbp` and `_fbc` cookies

---

### **C. Save and Publish GTM Web Container**

Version Name: `Meta CAPI Event Deduplication - Browser + Server`

Version Description:
```
Updated Meta Pixel tags to include:
- Event ID generation for deduplication
- dataLayer push to GTM Server Container
- FBP/FBC cookie capture
- Proper event forwarding for Meta CAPI
```

---

## 🖥️ STEP 2: CONFIGURE GTM SERVER CONTAINER

**Open your GTM Server Container** (should be connected to tracking.jayscatering.com)

---

### **A. Create Variables**

#### **Variable 1: Event - Event ID**
- **Type:** Event Data
- **Key Path:** `event_id`
- **Name:** `Event - Event ID`

#### **Variable 2: Event - Pixel ID**
- **Type:** Event Data
- **Key Path:** `pixel_id`
- **Name:** `Event - Pixel ID`

#### **Variable 3: Event - Event Name**
- **Type:** Event Data
- **Key Path:** `event_name`
- **Name:** `Event - Event Name`

#### **Variable 4: Event - Source URL**
- **Type:** Event Data
- **Key Path:** `event_source_url`
- **Name:** `Event - Source URL`

#### **Variable 5: User Data - FBP**
- **Type:** Event Data
- **Key Path:** `user_data.fbp`
- **Name:** `User Data - FBP`

#### **Variable 6: User Data - FBC**
- **Type:** Event Data
- **Key Path:** `user_data.fbc`
- **Name:** `User Data - FBC`

#### **Variable 7: User Data - User Agent**
- **Type:** Event Data
- **Key Path:** `user_data.client_user_agent`
- **Name:** `User Data - User Agent`

#### **Variable 8: Custom Data - Object**
- **Type:** Event Data
- **Key Path:** `custom_data`
- **Name:** `Custom Data - Object`

---

### **B. Create Meta Access Token Variables**

Since you have 2 different pixels, create 2 constant variables:

#### **Variable: Meta Access Token - Jays (Shared)**
- **Type:** Constant
- **Value:** `YOUR_ACCESS_TOKEN_HERE` (get from Meta on Monday)
- **Name:** `Meta Access Token - Jays (511510642697274)`

#### **Variable: Meta Access Token - Ellies**
- **Type:** Constant
- **Value:** `YOUR_ACCESS_TOKEN_HERE` (get from Meta on Monday)
- **Name:** `Meta Access Token - Ellies (1097130558389260)`

---

### **C. Create Lookup Table for Access Tokens**

You need to pick the right access token based on which pixel is being used.

#### **Variable: Meta Access Token - Lookup**
- **Type:** Lookup Table
- **Input Variable:** `{{Event - Pixel ID}}`
- **Name:** `Meta Access Token - Lookup`

| Input | Output |
|-------|--------|
| 511510642697274 | `{{Meta Access Token - Jays (511510642697274)}}` |
| 1097130558389260 | `{{Meta Access Token - Ellies (1097130558389260)}}` |

**Default Value:** `{{Meta Access Token - Jays (511510642697274)}}`

---

### **D. Create Meta Conversions API Tag**

**Tag Type:** Meta Conversions API  
**Tag Name:** `Meta CAPI - All Events`

**Configuration:**

**Pixel ID:**
```
{{Event - Pixel ID}}
```

**API Access Token:**
```
{{Meta Access Token - Lookup}}
```

**Event Name:**
```
{{Event - Event Name}}
```

**Event ID (for deduplication):**
```
{{Event - Event ID}}
```

**Action Source:**
```
website
```

**Event Source URL:**
```
{{Event - Source URL}}
```

**User Data:**

Enable these checkboxes and map the fields:

| Field | Value | Notes |
|-------|-------|-------|
| **Email Address** | *(leave empty for now)* | Can add from form data later |
| **Phone Number** | *(leave empty for now)* | Can add from form data later |
| **Facebook Click ID (fbc)** | `{{User Data - FBC}}` | ✅ |
| **Facebook Browser ID (fbp)** | `{{User Data - FBP}}` | ✅ |
| **Client IP Address** | *Auto-captured by server* | ✅ |
| **Client User Agent** | `{{User Data - User Agent}}` | ✅ |

**Custom Data (Optional):**
```
{{Custom Data - Object}}
```

**Test Event Code (Optional):**
- Leave empty for production
- Use a test code if testing (get from Meta Events Manager → Test Events tab)

---

### **E. Create Trigger**

**Trigger Type:** Custom Event  
**Trigger Name:** `Custom Event - meta_server_event`

**Configuration:**
- **Event name:** `meta_server_event`
- **This trigger fires on:** All Custom Events

---

### **F. Add Trigger to Tag**

Go back to your `Meta CAPI - All Events` tag and set:

**Triggering:** `Custom Event - meta_server_event`

---

### **G. Publish Server Container**

Version Name: `Meta CAPI - Browser + Server Deduplication`

Version Description:
```
Meta Conversions API setup:
- Receives events from web container via dataLayer
- Forwards to Meta CAPI with event_id for deduplication
- Dynamic pixel ID routing (Jays vs Ellies)
- Dynamic access token lookup
- Full user data capture (fbp, fbc, IP, user agent)
```

---

## 🧪 STEP 3: TEST IT

### **A. Enable GTM Preview Mode (Web Container)**

1. Open GTM Web Container (GTM-TJG6R99K)
2. Click **Preview**
3. Connect to: `https://lp.grandgimeno.com`

### **B. Enable GTM Server Container Preview**

1. Open GTM Server Container
2. Click **Preview**
3. You should see incoming requests

### **C. Test PageView Event**

1. Load `lp.grandgimeno.com` in browser
2. **In Web Container Preview**, check:
   - ✅ Tag `Meta Pixel - Universal (All Brands)` fired
   - ✅ dataLayer shows `meta_server_event` with `event_id`
   - ✅ Variables tab shows `{{Brand - Meta Pixel ID}}` = `511510642697274`

3. **In Server Container Preview**, check:
   - ✅ Incoming request with `event_name: PageView`
   - ✅ `event_id` matches browser event
   - ✅ Tag `Meta CAPI - All Events` fired
   - ✅ Variables tab shows correct pixel ID and event_id

### **D. Test Lead Event**

1. Fill out form on `lp.grandgimeno.com`
2. Submit form
3. **In Web Container Preview**, check:
   - ✅ Tag `Meta Pixel - Lead Event (Form Submit)` fired
   - ✅ dataLayer shows `meta_server_event` with `event_name: Lead`
   - ✅ `event_id` generated

4. **In Server Container Preview**, check:
   - ✅ Incoming request with `event_name: Lead`
   - ✅ `event_id` matches browser event
   - ✅ Tag `Meta CAPI - All Events` fired

---

### **E. Check Meta Events Manager**

**IMPORTANT:** This only works AFTER Facebook fixes your pixel on Monday.

1. Go to Meta Events Manager
2. Click your pixel (511510642697274)
3. Go to **Test Events** tab
4. Submit a form on your site
5. Wait 60 seconds
6. Check event details:
   - ✅ Event appears once (not duplicated)
   - ✅ Shows **"Browser and Server"** ✅✅✅
   - ✅ Has same `event_id` from both sources

---

## ✅ VERIFICATION CHECKLIST

Once Facebook fixes your pixel Monday, verify:

### **Meta Events Manager:**
- [ ] PageView events show "Browser and Server"
- [ ] Lead events show "Browser and Server"
- [ ] No duplicate events (deduplication working)
- [ ] Event IDs match between browser and server

### **GTM Preview:**
- [ ] Web container: dataLayer push happening
- [ ] Server container: receiving events
- [ ] Server container: Meta CAPI tag firing
- [ ] Variables populating correctly

### **Both Pixels:**
- [ ] Test Jay's pixel (511510642697274) on lp.grandgimeno.com
- [ ] Test Ellie's pixel (1097130558389260) on lp.elliestable.com
- [ ] Both show "Browser and Server"

---

## 🎯 WHAT THIS GIVES YOU

### **Better Tracking:**
- ✅ iOS 14.5+ users tracked via server-side
- ✅ Ad blocker bypass
- ✅ More accurate conversion data

### **Proper Deduplication:**
- ✅ Browser event + Server event = ONE event in Meta
- ✅ No double-counting conversions
- ✅ Accurate ROAS reporting

### **No CAPI Gateway Needed:**
- ✅ GTM Server handles everything
- ✅ One system for ALL platforms (Meta, GA4, TikTok, etc.)
- ✅ Full control over data

---

## 🚨 MONDAY ACTION ITEMS

### **After Facebook Fixes Pixel:**

1. **Get Access Tokens:**
   - Meta Events Manager → Pixel 511510642697274 → Settings → Conversions API → Generate Access Token
   - Meta Events Manager → Pixel 1097130558389260 → Settings → Conversions API → Generate Access Token

2. **Update GTM Server Container:**
   - Edit `Meta Access Token - Jays (511510642697274)` variable
   - Edit `Meta Access Token - Ellies (1097130558389260)` variable
   - Paste your access tokens
   - Publish container

3. **Delete CAPI Gateway (if you created one):**
   - You don't need it anymore
   - GTM Server handles everything

4. **Test:**
   - Follow testing steps above
   - Verify "Browser and Server" in Meta Events Manager

---

## 📊 ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────┐
│             USER VISITS WEBSITE                     │
└────────────────────┬────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────┐
│         GTM WEB CONTAINER (GTM-TJG6R99K)            │
│                                                      │
│  1. Meta Pixel fires (Browser)                      │
│     fbq('track', 'Lead', {}, {eventID: 'evt_123'})  │
│                                                      │
│  2. dataLayer.push() sends to server:               │
│     {                                                │
│       event: 'meta_server_event',                   │
│       event_id: 'evt_123',  // SAME ID              │
│       event_name: 'Lead',                           │
│       pixel_id: '511510642697274',                  │
│       user_data: {...}                              │
│     }                                                │
└────────────────────┬────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ↓            ↓            ↓
   ┌────────┐  ┌──────────┐  ┌─────────────────┐
   │  Meta  │  │   GTM    │  │      Meta       │
   │(Browser│  │  Server  │  │   (Server)      │
   │  evt_  │  │Container │  │    evt_123      │
   │  123)  │  │          │  │                 │
   └────────┘  └────┬─────┘  └─────────────────┘
                    │
                    ↓
           ┌─────────────────┐
           │  Meta CAPI Tag  │
           │                 │
           │  - Pixel ID     │
           │  - Access Token │
           │  - Event ID     │
           │  - User Data    │
           └────────┬────────┘
                    │
                    ↓
           ┌─────────────────┐
           │      Meta       │
           │ Deduplicates:   │
           │  evt_123        │
           │ (Browser+Server)│
           │       ✅        │
           └─────────────────┘
```

---

## 🔥 SUMMARY

**What you're doing:**
- GTM Web fires Meta Pixel (browser) with `event_id`
- GTM Web sends same event to GTM Server via `dataLayer`
- GTM Server fires Meta CAPI tag with SAME `event_id`
- Meta sees both, deduplicates using `event_id`, shows "Browser and Server"

**What you DON'T need:**
- ❌ CAPI Gateway (capig.jayscatering.com)
- ❌ Separate tracking systems
- ❌ Complex setup

**What happens Monday:**
- Get access tokens from Meta
- Add to GTM Server Container
- Publish
- Test
- See "Browser and Server" ✅

---

**YOU'RE GOING TO CRUSH IT MONDAY.** 🚀
