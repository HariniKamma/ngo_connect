# NGO-Connect

NGO-Connect is a modern, youth-friendly NGO website designed to connect volunteers and donors with children and elderly support programs. The project features a React + Tailwind frontend and an Express + SQLite backend.

## Features

- 🧭 Animated Navbar with smooth transitions and highlighting
- 💖 Hero section to inspire volunteering and donations
- 📦 Programs overview for child and elder support
- 🗺️ Interactive map showing NGO centers
- 📰 Live updates feed from the organization
- 💰 Donation form (demo)
- 🤝 Volunteer registration form
- 🌈 Youthful and vibrant theme

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- React Leaflet (for map display)

### Backend
- Node.js
- Express
- SQLite3 (database)
- Body-parser, CORS

## Directory Structure

```
ngo-connect/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  └─ pages/
│  ├─ index.html
│  ├─ package.json
│  └─ tailwind.config.cjs
└─ server/
   ├─ routes/
   ├─ db.js
   ├─ index.js
   └─ package.json
```

## Getting Started

### 1. Backend Setup

```bash
cd server
npm install
node index.js
```

Server runs on: `http://localhost:4000`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

### 3. Connect Frontend and Backend

Update the `vite.config.js` proxy or directly fetch data from the backend endpoints at `/api/...`.

## Palette & Design Notes

| Purpose | Color | Hex |
|----------|--------|-----|
| Primary | Teal | #0f766e |
| Accent | Cyan | #06b6d4 |
| Warm | Amber | #f59e0b |
| Soft Background | Gray | #f3f4f6 |

Fonts: **Poppins (headers)** and **Inter (body)**

---

## Future Enhancements

- User authentication (email/OTP)
- Real payment integration (Razorpay/Stripe)
- Admin CMS for updates and volunteer management
- Deployment with Docker / Vercel / Render

---

© 2025 NGO-Connect — Empowering Communities Together.
