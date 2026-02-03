# AHPC Website

A modern, professional nonprofit website for **Association of Happiness of the Palestinian Child (AHPC)** built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## ✅ Features

- **Full multi-page experience**: Home, About, Activities, News, Gallery, Donate, Contact, Admin.
- **Modern design system** with the requested color palette and typography.
- **Animated counters**, testimonials carousel, CTAs, and floating donate button.
- **Activities filter + pagination** and dedicated activity detail pages.
- **Masonry gallery** with lightbox modal.
- **Donation impact breakdown** with bank transfer details, Donorbox and Stripe placeholders.
- **Contact form** storing in Firebase (optional) or safely no-op when not configured.
- **Admin dashboard** with simple forms for activities, gallery, and messages.
- **SEO metadata** and Open Graph support.

---

## 📦 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 18, Tailwind CSS
- **Data**: Mock data (safe defaults) + optional Firebase Firestore for messages
- **Hosting**: Vercel (recommended)

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and fill in values.

```env
# Firebase (optional)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Admin demo credentials
NEXT_PUBLIC_ADMIN_EMAIL=admin@ahpc.org
NEXT_PUBLIC_ADMIN_PASSWORD=AHPC2024!
```

> If Firebase is not configured, the contact form still works without errors and does not store submissions.

---

## 🧭 Admin Dashboard

- Visit `/admin/login`.
- Use the credentials from `.env.local`.
- Dashboard is protected by a simple localStorage flag for non-technical ease.

---

## 💳 Donations

- **Bank transfer details** are included on `/donate`.
- **Donorbox embed** placeholder for international donors.
- **Stripe placeholder** (disabled by default due to local payment limitations).

---

## 🌍 Optional Integrations

### Firebase (Contact Form)

1. Create a Firebase project.
2. Enable Firestore.
3. Add keys to `.env.local`.

### Strapi (Activities & News)

You can connect Strapi Cloud later by replacing mock data with API calls from your CMS. The UI is ready for dynamic data.

---

## ✅ Deployment on Free Platforms

### Frontend (Vercel - Free)

1. Push this repo to GitHub.
2. Go to **vercel.com** and import the repo.
3. Select **Next.js** framework.
4. Add `.env` variables (optional).
5. Deploy.

### Custom Domain (Free + Vercel)

1. Buy a domain (e.g., from Namecheap or Cloudflare).
2. In Vercel → **Settings → Domains**, add your domain.
3. Vercel provides DNS records. Add them at your domain registrar.
4. Wait for DNS to propagate (usually < 1 hour).

### Firebase (Free)

Firebase Spark plan is free. Only enable Firestore if you want message storage.

---

## 📁 Project Structure

```
src/
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
├── context/            # Providers (Toast, etc.)
├── hooks/              # Custom hooks (pagination)
├── services/           # Firebase + contact services
├── utils/              # Mock data, admin auth helpers
public/
├── images/             # Placeholder media assets
```

---

## 🧾 License

Proprietary software for AHPC (Association of Happiness of the Palestinian Child).
