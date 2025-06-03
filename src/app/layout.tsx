import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header";

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
    <html lang="en" style={{ scrollBehavior: 'smooth'}}>
      <body>
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