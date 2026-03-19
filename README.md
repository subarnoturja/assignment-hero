# 🚀 HERO.IO — Productivity App Store

**A modern, fully responsive productivity app store built with React.**  
Discover, install, and manage the world's top productivity apps — all in one place.

[🌐 Live Demo](https://assignment-hero-two.vercel.app/) · [📱 All Apps](https://assignment-hero-two.vercel.app/apps) · [⭐ My Installation](https://assignment-hero-two.vercel.app/installation)

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Pages](#-pages)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)

---

## 🧭 About the Project

**HERO.IO** is a fully client-side productivity app store SPA (Single Page Application) built with React and styled using Tailwind CSS + DaisyUI. It showcases a curated collection of productivity apps with the ability to browse, search, view details, and manage installations — all powered by `localStorage` for persistent state across sessions.

The project was built to demonstrate real-world front-end skills including component architecture, client-side routing, responsive design, data filtering & sorting, animated UI interactions, and localStorage-based state persistence.

---

## 🌐 Live Demo

🔗 **[https://assignment-hero-two.vercel.app/](https://assignment-hero-two.vercel.app/)**

---

## ✨ Features

### 🏠 Home Page
- Hero banner with animated floating app icons and a phone mockup
- Google Play & App Store redirect buttons
- Platform stats section (Total Downloads, Reviews, Active Apps)
- Top 8 trending apps in a responsive 4-column grid
- "Show All" button navigating to the Apps page

### 📱 All Apps Page
- Full grid of all 16+ apps (4-column → 2-column on mobile)
- **Live search** — case-insensitive, debounced (250ms) filtering by app title
- **Sort dropdown** — by downloads (High→Low / Low→High)
- Real-time app count display
- "No App Found" empty state with icon
- Loading spinner on page navigation and search

### 📊 App Details Page
- App image, title, company name, and metadata
- Stats: Downloads · Average Rating · Total Reviews
- **Install Now** button with pulsing animation
  - Becomes disabled ("✓ Installed") after clicking
  - Saves to `localStorage` for persistence
- **Success toast notification** on install
- **Recharts bar chart** — animated ratings distribution (1★ → 5★)
- Full app description section

### 📦 My Installation Page
- Reads all installed apps from `localStorage`
- Displays apps as interactive list rows with emoji, title, downloads, rating, size
- **Uninstall button** — removes app from localStorage and animates row out
- **Sort dropdown** — by Downloads or Rating (High/Low)
- Animated **empty state** when no apps are installed
- **Toast notification** on uninstall

---

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, stats, and trending apps |
| `/apps` | All Apps | Browse & search all applications |
| `/apps/:id` | App Details | Full detail view with install + ratings chart |
| `/installation` | My Installation | Manage installed apps from localStorage |
| `*` | 404 | Custom not-found error page |

---

## 🛠 Technologies

### Core Framework
| Technology | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | 18 | UI component library & SPA framework |
| [Vite](https://vitejs.dev/) | 5 | Lightning-fast build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | 6 | Client-side routing & navigation |

### Styling
| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first CSS framework |
| [DaisyUI](https://daisyui.com/) | 4 | Pre-built Tailwind component library |
| [Google Fonts](https://fonts.google.com/) | — | Syne (display) + DM Sans (body) typography |

### Data Visualization
| Technology | Version | Purpose |
|---|---|---|
| [Recharts](https://recharts.org/) | 2 | Responsive ratings bar chart on App Details |

### Storage & State
| Technology | Purpose |
|---|---|
| Browser `localStorage` | Persisting installed apps across sessions |
| React `useState` / `useEffect` | Local component state management |

### Deployment
| Technology | Purpose |
|---|---|
| [Vercel](https://vercel.com/) | Hosting & continuous deployment |

---

## 📁 Project Structure

```
hero-apps/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky responsive navbar
│   │   ├── Footer.jsx          # Dark footer with social links
│   │   ├── AppCard.jsx         # Reusable app card (grid view)
│   │   ├── AppRow.jsx          # Reusable app row (list view)
│   │   └── Toast.jsx           # Slide-in notification toast
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── AppsPage.jsx        # All apps with search & sort
│   │   ├── AppDetailsPage.jsx  # Detail view + install + chart
│   │   ├── InstallationPage.jsx# Installed apps manager
│   │   └── ErrorPage.jsx       # 404 not found
│   ├── data/
│   │   └── apps.js             # App data array (16 apps)
│   ├── App.jsx                 # Root component with router
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind directives
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---