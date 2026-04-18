# 🌿 Renewly – Buy & Sell Near You

A modern, premium PWA marketplace app built with **React + Vite + Tailwind CSS**.

## ✨ Features

- 🗺️ **Location-based listings** – Choose your city; all items auto-filter by location
- 📱 **Full PWA support** – Install on Android/iOS as a home-screen app
- 🏠 **Home** – Hero banner, category grid, featured & fresh listings
- 🔍 **Browse** – Search, filter by condition, price cap, sort, category tabs
- 📋 **Post Ad** – Multi-step wizard (Category → Details → Price & Photos → Review)
- 💬 **Chat** – Conversation list + inline messaging UI
- 👤 **Profile** – Stats, active listings, menu, seller rating
- 🏷️ **Listing Detail** – Full detail, seller card, contact CTA, similar items

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production (includes PWA service worker)
npm run build

# 4. Preview the production build
npm run preview
```

Open http://localhost:5173 in your browser.

## 📦 Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Framework    | React 18                          |
| Bundler      | Vite 5                            |
| Styling      | Tailwind CSS 3                    |
| Routing      | React Router v6                   |
| Icons        | Lucide React                      |
| PWA          | vite-plugin-pwa (Workbox)         |
| Fonts        | DM Sans + Fraunces (Google Fonts) |

## 🗺️ Location System

- User selects city from **18 Indian cities** in the Location Selector modal
- All pages (`Home`, `Browse`) filter listings using `getListingsByCity(cityId)`
- Cities with no listings show a fallback notice and all listings
- The selected city persists in React Context across the whole app

## 📁 Project Structure

```
src/
├── context/
│   └── AppContext.jsx      # Global state: location, wishlist, notifications
├── data/
│   └── mockData.js         # 32 city-tagged listings + helpers
├── components/
│   ├── Header.jsx           # Sticky header with location pill + search
│   ├── BottomNav.jsx        # Mobile navigation bar with sell CTA
│   ├── ListingCard.jsx      # Card (grid) and horizontal list variants
│   └── LocationSelector.jsx # City picker bottom sheet modal
└── pages/
    ├── Home.jsx             # Landing page
    ├── Browse.jsx           # Search & filter page
    ├── PostAd.jsx           # Multi-step post ad wizard
    ├── Chat.jsx             # Messaging page
    ├── Profile.jsx          # User profile page
    └── ListingDetail.jsx    # Single listing detail page
```

## 📲 PWA Installation

After running `npm run build`, serve the `dist/` folder with a static host.

- **Chrome/Android**: "Add to Home Screen" prompt appears automatically
- **Safari/iOS**: Tap Share → "Add to Home Screen"
- **Desktop Chrome**: Install icon in address bar

## 🎨 Design

- **Colors**: White base + Green-600 primary accent
- **Typography**: Fraunces (display) + DM Sans (body)
- **Style**: Premium minimal, card-based, rounded corners
- **Animations**: Staggered fade-up on load, smooth transitions

---

Made with 💚 — Renewly
