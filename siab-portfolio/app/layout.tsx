import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Israfil Bhagwandass | Videographer & Editor",
  description:
    "Videography and editing for events, brands, sports, and social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
