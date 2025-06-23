import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "../globals.css";
import "../styles/animations.css";
import Header from "../components/Header";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass",
});

export const metadata: Metadata = {
  title: "Angelo Navaleza", 
  description: "Angelo Navaleza's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth'}}>
      <link rel="icon" href="/favicon.png" sizes="32x32" />
      <body className={overpass.className}>
        <Header />
        <div className="pt-16">{children}</div>
        {/* Fallback smooth scroll script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              });
            });
          `
        }} />
      </body>
    </html>
  );
} 