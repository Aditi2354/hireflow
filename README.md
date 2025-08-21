# 🚀 HireFlow – AI-Powered Interview Preparation Platform

![HireFlow Banner](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Auth](https://img.shields.io/badge/Auth-NextAuth.js-blue?logo=auth0)
![Status](https://img.shields.io/badge/Deployed%20on-Render-purple?logo=render)

> 🔗 **Live Demo:** [hireflow-2.onrender.com](https://hireflow-2.onrender.com)

HireFlow is a full-stack MERN + Next.js project designed to help candidates **prepare for technical interviews**.  
It combines **curated Q&A banks**, **daily challenges**, **progress tracking**, and **resume analysis** into a clean dashboard.

---

## ✨ Features

✅ **Authentication** – Sign up & login with Email, Google, or GitHub  
✅ **Interview Q&A Banks** – Filter by **difficulty** (Easy / Medium / Hard) & **technology** (JavaScript, React, Node.js, MongoDB…)  
✅ **Daily Challenges** – Get a new question every day to stay consistent  
✅ **Progress Tracker** – Visualize solved questions and track growth  
✅ **Resume Analyzer** – Upload your resume & compare against job descriptions  
✅ **Modern UI** – Tailwind CSS + Lucide icons + Framer Motion for smooth animations  
✅ **Deployed** – Hosted on [Render](https://render.com) with MongoDB Atlas backend

---

## 🖼️ Screenshots

| Dashboard | Q&A Bank | Resume Analyzer |
|-----------|----------|-----------------|
| ![Dashboard](https://via.placeholder.com/300x180.png?text=Dashboard) | ![Q&A](https://via.placeholder.com/300x180.png?text=Question+Bank) | ![Resume](https://via.placeholder.com/300x180.png?text=Resume+Analyzer) |

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js 14](https://nextjs.org/), [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)  
- **Backend:** [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/router-handlers), [Mongoose](https://mongoosejs.com/)  
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)  
- **Auth:** [NextAuth.js](https://next-auth.js.org/) (Google + GitHub providers)  
- **Deployment:** [Render](https://render.com)  

---

## ⚡ Getting Started (Local Development)

Clone the repo and install dependencies:

```bash
git clone https://github.com/Aditi2354/hireflow.git
cd hireflow
npm install

Run the development server:
npm run dev


Build for production:
npm run build
npm start

🔑 Environment Variables

Create a .env.local file in the project root:

NODE_VERSION=22.14.0
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

MONGODB_URI=your-mongodb-uri

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret


🧑‍💻 Contributing

Contributions are welcome! Feel free to fork the repo, open issues, or submit PRs.
Make sure to run npm run lint before pushing changes.

📜 License

This project is licensed under the MIT License.

💡 Inspiration

HireFlow was built as a personal project to strengthen technical interview preparation.
It showcases MERN + Next.js full-stack skills, clean UI design, and real-world deployment setup.

