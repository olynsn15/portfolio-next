import type { Metadata } from "next";
import { Lexend_Deca, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavFoot/Navbar";
import Footer from "./components/NavFoot/Footer";

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
        className={`${lexend_deca.className, syne.className} antialiased leading-8 overflow-x-hidden dark:bg-dark-theme dark:text-white bg-gray-100`}
      >
        <header className="fixed top-0 z-50">
          <Navbar />
        </header>
        <main className="pt-15">{children}</main>
        <Footer />
      </body>
    </html>
  );
}