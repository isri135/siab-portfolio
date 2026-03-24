import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Israfil Bhagwandass | Videography Portfolio",
  description: "Videography and editing portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="siteHeaderInner">

            <nav className="topNav">
              <a href="#about">About</a>
              <a href="#play">Services</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}