# 🌟 Women Rise PathWays

**Women Rise PathWays** is a platform dedicated to empowering underrepresented women by increasing **awareness**, **accessibility**, and **opportunity** — inspired by **UN Sustainable Development Goal 5: Gender Equality**.

This site curates high-quality resources to help women learn new skills in programming, IT, music, and art, and includes real-time job and internship listings powered by the Adzuna API.

---

## ⚠️ API Key Notice

The **Jobs** page of this site relies on the [Adzuna API](https://developer.adzuna.com/), which requires valid API credentials (`APP_ID` and `APP_KEY`).

Since these are stored in environment variables for security reasons, **the Jobs page will not function unless you configure your own API keys**.

---

## 🚀 Features

- ✅ Skill resource sections: Programming, Core IT Skills, Music, and Art
- ✅ Live internship listings via Adzuna
- ✅ Dynamic filtering for job and internship searches
- ✅ Built using **Next.js 15** for performance and scalability
- ✅ GitHub Actions deployment pipeline for static hosting

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Divin2009/CVHS-Hacks-1.git
cd CVHS-HACKS-1
```

### 2. Install Dependencies

With **npm**:

```bash
npm install
```
If you have errors run:
```bash
npm install --legacy-peer-deps
```

Or with **yarn**:

```bash
yarn install
```

---

### 3. Add Environment Variables

Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

Add your **Adzuna** credentials:

```env
ADZUNA_APP_ID=your_app_id_here
ADZUNA_APP_KEY=your_app_key_here
```

You can obtain a free API key by signing up here: [https://developer.adzuna.com](https://developer.adzuna.com)

---

### 4. Run Locally

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
npm start
```

Or for a **static export** (e.g. for GitHub Pages):

```bash
npm run build
npm run export
```

> ⚠️ **Important:** The `Jobs` page and any API routes like `/api/adzuna` will **not work** when statically exported. You must move API logic to the frontend or deploy on a platform like **Vercel** that supports dynamic API routes.

---

## 🚀 Deployment Options

Since the project relies on dynamic API requests to fetch live data, GitHub Pages — which only supports static sites — is not a suitable hosting option. Therefore, we will deploy the application using Vercel, which fully supports dynamic functionality and API routes.

### ✅ Vercel (Dynamic + Static Support)

Fully supports API routes, dynamic rendering, and environment variables.

---

## 📁 Project Structure

```
/src
  /app
    /api
    /funding
    /internships      
    ...
    favicon.ico
    globals.css
    layout.js
    page.js          
  /components         
  /lib             
.env.local            ← Your API keys go here

```

---

## 🧠 Future Improvements

- User login and saved jobs/internships
- Community board or forum
- Localization for broader accessibility

---

## 📄 License

MIT License — you are free to use, modify, and share with attribution.

---

## 🙏 Acknowledgments

- [Adzuna Job API](https://developer.adzuna.com/)
- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- Inspired by [SDG Goal 5: Gender Equality](https://sdgs.un.org/goals/goal5)
