import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Lexend_Deca, Syne } from "next/font/google";
import "./globals.css";

const lexend_deca = Lexend_Deca({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const syne = Syne({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lexend_deca.className, syne.className} antialiased leading-8 overflow-x-hidden dark:bg-dark-theme dark:text-white bg-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}