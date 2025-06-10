# 🌐 Personal Portfolio Website

This is a my very own personal portfolio website built with [**Next.js**](https://nextjs.org/), styled using [**Tailwind CSS**](https://tailwindcss.com/), written in **TypeScript**, and structured with reusable components—some of which are inspired by **ReactBits** UI patterns.
<br>

## 🚀 Live Website: 
[Checkout the live web!](https://olynsn15.vercel.app)
<br><br>


## 🧩 Portfolio Sections
The portfolio consists of the following main sections:
- **Header** — introduction & navigation  
- **About** — brief biography  
- **Experiences** — timeline of experiences  
- **Projects** — highlight of selected works  
- **Contact Me** — contact form or details  
<br>

## 🗂️ Assets Used
- **Fonts**: Lexend Deca and Syne via [Google Fonts](https://fonts.google.com)  
- **Icons**: Various sources 
- **Images**: [Devicon](https://devicon.dev/)
- **Some components**: [ReactBits](https://www.reactbits.dev/)

## ⚙️ Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)
<br><br>

## 📁 Folder Structure
```
├── app/
│ ├── components/
│ │ ├── NavFoot/
│ │ │ ├── Footer.tsx
│ │ │ └── Navbar.tsx
│ │ └── UI/
│ │ ├── About.tsx
│ │ ├── BounceCards.tsx
│ │ ├── Contact.tsx
│ │ ├── Experiences.tsx
│ │ ├── Header.tsx
│ │ └── Project.tsx
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
│
├── public/
│ ├── assets/
│ │ ├── CV-Olyn.pdf
│ │ └── tfisc.png
│ └── favicon.ico
│
├── README.md
├── TODO.md
├── next.config.js
├── tsconfig.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── .gitignore
```
<br>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
