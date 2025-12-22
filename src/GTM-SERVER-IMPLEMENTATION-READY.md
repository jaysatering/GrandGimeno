# 🚀 YOUR CUSTOM GTM SERVER + META CAPI SETUP
## Copy-Paste Ready - No Placeholders

**Created:** December 21, 2024  
**Tokens:** ✅ Pre-filled  
**Time to Complete:** 30 minutes  
**Result:** "Browser and Server" in Meta Events Manager

---

## 📊 YOUR PIXEL SETUP

| Brand | Pixel ID | Access Token | Status |
|-------|----------|--------------|--------|
| **Jay's + 5 Others** | 511510642697274 | ✅ Loaded | Ready |
| **Ellie's Table** | 1097130558389261 | ✅ Loaded | Ready |

---

## 🎯 STEP 1: UPDATE GTM WEB CONTAINER (GTM-TJG6R99K)

### **A. Update: Meta Pixel - Universal (All Brands) Tag**

**Find this tag in your GTM Web Container**

**Replace the entire HTML with this:**

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
    'client_ip_address': '',
    'client_user_agent': navigator.userAgent,
    'fbp': getCookie('_fbp'),
    'fbc': getCookie('_fbc')
  }
});

console.log('✅ Meta PageView - Pixel: ' + '{{Brand - Meta Pixel ID}}' + ' | Event ID: ' + eventId);

// Helper function to get cookies
function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}
</script>
```

---

### **B. Update: Meta Pixel - Lead Event (Form Submit) Tag**

**Find this tag in your GTM Web Container**

**Replace the entire HTML with this:**

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
      'client_ip_address': '',
      'client_user_agent': navigator.userAgent,
      'fbp': getCookie('_fbp'),
      'fbc': getCookie('_fbc')
    }
  });
  
  console.log('✅ Meta Lead - Pixel: ' + '{{Brand - Meta Pixel ID}}' + ' | Event ID: ' + eventId);
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

---

### **C. Publish GTM Web Container**

1. Click **Submit** (top right)
2. **Version Name:** `Meta CAPI - Event Deduplication Setup`
3. **Version Description:** `Added event_id and dataLayer push for GTM Server CAPI`
4. Click **Publish**

---

## 🖥️ STEP 2: CONFIGURE GTM SERVER CONTAINER

**Open your GTM Server Container** (the one connected to tracking.jayscatering.com)

---

### **A. Create Variables (8 total)**

Go to **Variables** → Click **New**

#### **Variable 1: Event - Event ID**
- **Variable Type:** Event Data
- **Key Path:** `event_id`
- **Name:** `Event - Event ID`
- Click **Save**

#### **Variable 2: Event - Pixel ID**
- **Variable Type:** Event Data
- **Key Path:** `pixel_id`
- **Name:** `Event - Pixel ID`
- Click **Save**

#### **Variable 3: Event - Event Name**
- **Variable Type:** Event Data
- **Key Path:** `event_name`
- **Name:** `Event - Event Name`
- Click **Save**

#### **Variable 4: Event - Source URL**
- **Variable Type:** Event Data
- **Key Path:** `event_source_url`
- **Name:** `Event - Source URL`
- Click **Save**

#### **Variable 5: User Data - FBP**
- **Variable Type:** Event Data
- **Key Path:** `user_data.fbp`
- **Name:** `User Data - FBP`
- Click **Save**

#### **Variable 6: User Data - FBC**
- **Variable Type:** Event Data
- **Key Path:** `user_data.fbc`
- **Name:** `User Data - FBC`
- Click **Save**

#### **Variable 7: User Data - User Agent**
- **Variable Type:** Event Data
- **Key Path:** `user_data.client_user_agent`
- **Name:** `User Data - User Agent`
- Click **Save**

#### **Variable 8: Custom Data - Object**
- **Variable Type:** Event Data
- **Key Path:** `custom_data`
- **Name:** `Custom Data - Object`
- Click **Save**

---

### **B. Create Access Token Variables (3 total)**

#### **Variable 9: Meta Token - Jays**
- **Variable Type:** Constant
- **Value:** `EAAKOoZBDUsHIBQO346RxMA1TJwaaIBsWJXf7esMDnUbBV4TGbUO96wFIaV3sjdO9bFXReboZBe1AtEiokqPJgZBiXSd2iFe7qZCgz4XeRQo7e5UN7aZCF6az7QEy24P2Fx6J4mQiHNCoouwjokUDUpr0DZAlGR2u8KZB4ZB6MIRSbIQHsppkgORCrYRBYwZAkDXCNUQZDZD`
- **Name:** `Meta Token - Jays (511510642697274)`
- Click **Save**

#### **Variable 10: Meta Token - Ellies**
- **Variable Type:** Constant
- **Value:** `EAAKOoZBDUsHIBQE0ZAHyHl5aBZAZCLIpOJ9sP03EPoZCTketgjHCKZBlrWpuXnBomTlFeimVG4l5i3ZCZAD0mLcHvBpPmj27DcPnZCR5DUTdDPU7nJoThq6yXbdUDcwupPSZCbBsHAxoFC9WZAm0vdnRx2bFkV23PfMM0QxPr4DMu6qgZCZA9o8miRZB3zsGWbNFKdnUilPQZDZD`
- **Name:** `Meta Token - Ellies (1097130558389261)`
- Click **Save**

#### **Variable 11: Meta Token - Lookup**
- **Variable Type:** Lookup Table
- **Input Variable:** `{{Event - Pixel ID}}`
- **Name:** `Meta Token - Lookup`

**Add these rows:**

| Input | Output |
|-------|--------|
| 511510642697274 | `{{Meta Token - Jays (511510642697274)}}` |
| 1097130558389261 | `{{Meta Token - Ellies (1097130558389261)}}` |

**Set Default Value:** `{{Meta Token - Jays (511510642697274)}}`

Click **Save**

---

### **C. Create Trigger**

Go to **Triggers** → Click **New**

- **Trigger Type:** Custom Event
- **Event name:** `meta_server_event`
- **This trigger fires on:** All Custom Events
- **Name:** `Custom Event - meta_server_event`
- Click **Save**

---

### **D. Create Meta Conversions API Tag**

Go to **Tags** → Click **New**

**Tag Configuration:**
- Click **Tag Configuration**
- Search for: **Meta Conversions API**
- Select it

**Fill in these fields:**

| Field | Value | How to Enter |
|-------|-------|--------------|
| **Pixel ID** | `{{Event - Pixel ID}}` | Click variable icon, select it |
| **API Access Token** | `{{Meta Token - Lookup}}` | Click variable icon, select it |
| **Event Name** | `{{Event - Event Name}}` | Click variable icon, select it |
| **Action Source** | `website` | Type manually |
| **Event ID** | `{{Event - Event ID}}` | Click variable icon, select it |
| **Event Source URL** | `{{Event - Source URL}}` | Click variable icon, select it |

**Scroll down to User Data section:**

Check these boxes and fill in:

- ✅ **Facebook Click ID (fbc):** `{{User Data - FBC}}`
- ✅ **Facebook Browser ID (fbp):** `{{User Data - FBP}}`
- ✅ **Client IP Address:** Leave empty (auto-captured)
- ✅ **Client User Agent:** `{{User Data - User Agent}}`

**Custom Data (optional):**
- **Custom Data:** `{{Custom Data - Object}}`

**Triggering:**
- Click **Triggering**
- Select: `Custom Event - meta_server_event`

**Tag Name:** `Meta CAPI - All Events`

Click **Save**

---

### **E. Publish Server Container**

1. Click **Submit** (top right)
2. **Version Name:** `Meta CAPI - Browser + Server Deduplication`
3. **Version Description:** `Full Meta CAPI setup with event_id deduplication for 7 brands`
4. Click **Publish**

---

## 🧪 STEP 3: TEST IT

### **A. Enable Preview Mode - Web Container**

1. Open GTM Web Container (GTM-TJG6R99K)
2. Click **Preview** (top right)
3. Enter URL: `https://lp.grandgimeno.com`
4. Click **Connect**

### **B. Check Web Container**

In preview window, look for:

**On Page Load:**
- ✅ Tag `Meta Pixel - Universal (All Brands)` fired
- ✅ Check Variables tab → `{{Brand - Meta Pixel ID}}` = `511510642697274`
- ✅ Check dataLayer → Look for `meta_server_event` with `event_id`

### **C. Enable Preview Mode - Server Container**

1. Open GTM Server Container
2. Click **Preview** (top right)
3. Should show "Listening for requests..."

### **D. Check Server Container**

When you load the page, you should see:

- ✅ Incoming request with `event_name: PageView`
- ✅ Event data shows `event_id`, `pixel_id`
- ✅ Tag `Meta CAPI - All Events` fired
- ✅ Check Variables tab → All variables populated

### **E. Test Form Submit**

1. Fill out form on lp.grandgimeno.com
2. Submit it
3. **In Web Preview:**
   - ✅ Tag `Meta Pixel - Lead Event (Form Submit)` fired
   - ✅ dataLayer shows `meta_server_event` with `event_name: Lead`
4. **In Server Preview:**
   - ✅ Incoming request with `event_name: Lead`
   - ✅ Tag `Meta CAPI - All Events` fired

---

## ✅ STEP 4: VERIFY IN META

### **Check Meta Events Manager:**

1. Go to **Meta Events Manager**
2. Click pixel **511510642697274** (Jay's)
3. Go to **Test Events** tab
4. Submit a form on lp.grandgimeno.com
5. Wait 30-60 seconds
6. **Look for:**
   - ✅ Event appears
   - ✅ Shows **"Browser and Server"** 🎯🎯🎯
   - ✅ Click event → Both sources listed
   - ✅ Event ID matches

### **Repeat for Ellie's:**

1. Click pixel **1097130558389261** (Ellie's)
2. Go to **Test Events** tab
3. Submit form on lp.elliestable.com
4. Verify "Browser and Server"

---

## 🎯 VERIFICATION CHECKLIST

### **For Grand Gimeno (lp.grandgimeno.com):**
- [ ] GTM Web Preview: Both tags fire
- [ ] GTM Server Preview: Request received, tag fires
- [ ] Meta Test Events: Shows "Browser and Server"
- [ ] Pixel ID: 511510642697274 ✅
- [ ] No duplicate events

### **For Ellie's Table (lp.elliestable.com):**
- [ ] GTM Web Preview: Both tags fire
- [ ] GTM Server Preview: Request received, tag fires
- [ ] Meta Test Events: Shows "Browser and Server"
- [ ] Pixel ID: 1097130558389261 ✅
- [ ] No duplicate events

### **Test All 7 Brands:**
- [ ] Jay's Catering (lp.jayscatering.com) → 511510642697274
- [ ] Ellie's Table (lp.elliestable.com) → 1097130558389261
- [ ] Grand Gimeno (lp.grandgimeno.com) → 511510642697274
- [ ] Serra Plaza (lp.serraplaza.com) → 511510642697274
- [ ] Hangar 21 (lp.hangar21venue.com) → 511510642697274
- [ ] Estate on Second (lp.estateonsecond.com) → 511510642697274
- [ ] The Casino (lp.thecasinosc.com) → 511510642697274

---

## 🚨 TROUBLESHOOTING

### **"Browser Only" in Meta:**

**Check:**
1. Is GTM Server tag firing? (Server Preview)
2. Is `event_id` present in both browser and server?
3. Are access tokens correct?
4. Is pixel ID matching?

**Fix:**
- Verify variables in Server Preview
- Check Meta Token - Lookup table
- Make sure both containers published

### **Duplicate Events:**

**Check:**
1. Same `event_id` in browser and server?
2. Both events within 5 minutes of each other?

**Fix:**
- Verify `event_id` generation in web tags
- Check it's being passed to server correctly

### **Server Tag Not Firing:**

**Check:**
1. Is trigger `meta_server_event` firing?
2. Is dataLayer.push() in web tag?

**Fix:**
- Check web tag has dataLayer.push() code
- Verify trigger is attached to server tag

---

## 🎉 SUCCESS LOOKS LIKE

### **In GTM Web Preview:**
```
✅ Meta Pixel - Universal (All Brands) - Succeeded
✅ Meta Pixel - Lead Event (Form Submit) - Succeeded
```

### **In GTM Server Preview:**
```
✅ Incoming Request: meta_server_event
✅ Meta CAPI - All Events - Succeeded
```

### **In Meta Events Manager:**
```
Event: Lead
Match Quality: 9.0
Connection Method: Browser and Server ✅✅✅
Deduplicated: Yes
```

---

## 🔥 YOU'RE DONE

**What you just built:**
- ✅ Browser pixel fires with event_id
- ✅ Server CAPI fires with same event_id
- ✅ Meta deduplicates → "Browser and Server"
- ✅ Works for all 7 brands automatically
- ✅ iOS 14.5+ tracking recovered
- ✅ Ad blocker resistant

**No CAPI Gateway needed. Full control. One system.**

---

## 📊 YOUR ARCHITECTURE

```
User visits lp.grandgimeno.com
         ↓
GTM Web (GTM-TJG6R99K)
    ├─→ Meta Pixel (Browser) [event_id: evt_123]
    └─→ dataLayer.push() [event_id: evt_123]
              ↓
    GTM Server (tracking.jayscatering.com)
              ↓
    Meta CAPI Tag [event_id: evt_123]
              ↓
         Meta Deduplicates
              ↓
    Result: "Browser and Server" ✅
```

---

**NOW GO LAUNCH THIS BEAUTY.** 🚀
