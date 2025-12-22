# 🏰 Grand Gimeno Landing Pages
## Multi-Brand Vercel Deployment with Universal GTM Tracking

**Project:** Landing pages for 7 luxury event venues  
**Tech Stack:** React + Vite + Tailwind CSS v4  
**Deployment:** Vercel (7 separate domains)  
**Tracking:** Universal GTM with Stape server-side

---

## 🚀 Quick Start

### **📖 Read Documentation**
**Overwhelmed? Start here:** [START-HERE.md](./START-HERE.md)

### **🛠️ Development**
```bash
npm install
npm run dev
```

### **📦 Build**
```bash
npm run build
```

### **🚢 Deploy**
Deploy to Vercel - tracking works automatically!

---

## 🎯 The 7 Brands

| Brand | Domain | GA4 | Meta Pixel |
|-------|--------|-----|------------|
| Jay's Catering | lp.jayscatering.com | G-MNGQ6T3S7L | 511510642697274 |
| Ellie's Table | lp.elliestable.com | G-H149DE94FR | 1097130558389260 |
| Grand Gimeno | lp.grandgimeno.com | G-C53EL9R7Z6 | 511510642697274 |
| Serra Plaza | lp.serraplaza.com | G-2GGX4RHXPR | 511510642697274 |
| Hangar 21 | lp.hangar21venue.com | G-Y1WSBF33PJ | 511510642697274 |
| Estate on Second | lp.estateonsecond.com | G-HDX153V4FB | 511510642697274 |
| The Casino | lp.thecasinosc.com | G-6BSN49J27D | 511510642697274 |

---

## 🔧 How Tracking Works

### **Automatic Brand Detection**
GTM detects which brand based on the domain and loads the correct:
- GA4 Measurement ID
- Meta Pixel ID
- Brand name for event parameters

### **No Code Changes Needed**
- Add new brand? Just update GTM variables
- Change tracking ID? Just update GTM variables
- No deployments required!

---

## 📁 Project Structure

```
/
├── components/
│   ├── GTMLoader.tsx           # Loads GTM via React
│   ├── DevNav.tsx              # Dev navigation
│   └── ui/                     # UI components
├── pages/
│   ├── HomePage.tsx            # Landing page
│   ├── ThankYouPage.tsx        # Thank you page
│   └── PrivatePage.tsx         # Private page
├── config/
│   └── tracking.ts             # Tracking configuration
├── utils/
│   └── tracking.ts             # UTM/GCLID utilities
├── styles/
│   └── globals.css             # Tailwind v4 + Design system
└── index.html                  # HubSpot form auto-fill
```

---

## 🎨 Design System

**Colors:**
- Ivory: `#EEEDE1`
- Charcoal: `#525557`
- Blue: `#669CC4`

**Typography:**
- Cormorant Garamond (serif)
- Space Mono (mono)
- Masqualero (display - Adobe Fonts)

**All styles in:** `/styles/globals.css`

---

## 📊 Tracking Infrastructure

**GTM Container:** `GTM-TJG6R99K`  
**Stape Server:** `tracking.jayscatering.com`  
**HubSpot Portal:** `48463492`

**What Gets Tracked:**
- Page views (GA4 + Meta)
- Form submissions (GA4 + Meta Lead event)
- UTM parameters (captured in HubSpot)
- Click IDs (GCLID, FBCLID)
- Cross-domain sessions

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [START-HERE.md](./START-HERE.md) | Navigation guide |
| [WHAT-YOU-ACTUALLY-HAVE.md](./WHAT-YOU-ACTUALLY-HAVE.md) | Simple reference |
| [EMPIRE_QUICK_REFERENCE.md](./EMPIRE_QUICK_REFERENCE.md) | Team instructions |
| [GTM_EMPIRE_SETUP.md](./GTM_EMPIRE_SETUP.md) | GTM configuration |
| [BRAND_IDS_REFERENCE.md](./BRAND_IDS_REFERENCE.md) | All tracking IDs |
| [MASTER_TRACKING_README.md](./MASTER_TRACKING_README.md) | Complete overview |

---

## ✅ What's Already Done

- ✅ GTM container setup
- ✅ Stape server-side tracking
- ✅ Cross-domain tracking
- ✅ HubSpot form integration
- ✅ UTM parameter capture
- ✅ Click ID tracking (GCLID, FBCLID)
- ✅ Meta CAPI ready
- ✅ GA4 enhanced measurement
- ✅ Design system implemented

---

## 🚨 Important Notes

### **DO NOT:**
- ❌ Add GTM script to `/index.html` (already in React)
- ❌ Add separate Meta Pixel code
- ❌ Add separate GA4 code
- ❌ Hardcode brand-specific tracking IDs

### **DO:**
- ✅ Keep tracking managed in GTM
- ✅ Update brand IDs in GTM (not code)
- ✅ Test in GTM Preview Mode
- ✅ Use design system CSS variables

---

## 🧪 Testing

### **Local Testing:**
```bash
npm run dev
# Open http://localhost:5173
# Check console for GTM logs
```

### **GTM Testing:**
1. GTM → Preview Mode
2. Connect to your localhost or deployed URL
3. Verify variables load correctly
4. Check tags fire

### **Production Testing:**
1. Install Meta Pixel Helper
2. Visit deployed site
3. Check GA4 Real-time reports
4. Test form submission

---

## 🔐 Environment Variables

None required! All configuration in:
- `/config/tracking.ts` - Tracking IDs
- GTM Container - Dynamic brand detection

---

## 🚀 Deployment

Deploy to Vercel with these settings:

**For each brand:**
- Domain: `lp.[brand].com`
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite

**Important:** Same codebase deploys to all 7 domains!

---

## 📞 Support

**For tracking issues:** Check [MASTER_TRACKING_README.md](./MASTER_TRACKING_README.md) → Troubleshooting

**For GTM setup:** See [GTM_EMPIRE_SETUP.md](./GTM_EMPIRE_SETUP.md)

**For your team:** Share [EMPIRE_QUICK_REFERENCE.md](./EMPIRE_QUICK_REFERENCE.md)

---

## 📝 License

Private project for Jay's Catering event venues.

---

**Built with ❤️ for luxury event experiences.**
