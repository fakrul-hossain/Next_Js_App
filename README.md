# 🚀 Next.js App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It is a modern web application featuring custom routing, middleware-based route protection, and a clean, responsive UI powered by Tailwind CSS.

---

## 🛠️ Technologies Used

- **Next.js 15**
- **React 19**
- **Tailwind CSS**
- **Middleware (Edge API)**
- **App Router**
- **TypeScript**
- **Dynamic Routing**
- **Protected Routes**
- **Custom Layouts**
- **404 Page**
- **Loading Page**

---

## 📁 Project Structure

```
app/
├── layout.js                  # Root layout
├── page.tsx                  # Home page
├── about/                    # About page with conditional route logic
├── services/                 # Services listing page
├── services/[id]/            # Single dynamic service page
├── login/                    # Login page
├── register/                 # Registration page
├── dashboard/                # Dashboard layout and pages
├── not-found.tsx             # Custom 404 page
├── loading.tsx               # Global loading UI
components/
├── Navbar.js
├── Footer.js
├── DashboardLayout.js
public/
├── developer.png             # Hero section illustration
```

---

## 📦 Features

- ✅ Modern architecture using Next.js App Router
- 🎨 Fully responsive UI with Tailwind CSS
- 🔐 Route protection using Middleware
- 🧩 Dynamic routing for service detail pages
- 🔄 Global loading and error handling
- 🗃️ Custom layout system (Main & Dashboard)
- 🧠 Smart routing behavior on `/about` using router conditions
- 🎯 Clean, beginner-friendly structure

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view your application.

---

## 🧪 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Lint the project
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React 19 Docs](https://react.dev)

---

## 🧑‍💻 Author

**Fakrul Hossain** — Frontend Developer  
📍 Shamoli, Dhaka  
📧 dev.fakrulhossain@gmail.com

---

## 📤 Deployment

Deploy this project to the cloud using [Vercel](https://vercel.com/):

> [Deploy Now →](https://vercel.com/new)

---

> _“This project is part of my journey to mastering full-stack development using modern tools and clean architecture.”_
