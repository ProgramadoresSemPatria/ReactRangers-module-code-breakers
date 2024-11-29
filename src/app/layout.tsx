import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Explore a complete frontend roadmap with an interactive 3D map. Start by the basics and advance to advanced techniques, frameworks, and essential tools.",
  keywords: [
    "Roadmap",
    "frontend development",
    "3D map",
    "learning path",
    "React",
    "Next.js",
    "Three.js",
    "JavaScript",
    "CSS",
    "HTML",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Roadmap – Complete frontend roadmap with an interactive 3D map",
    description:
      "Explore a complete frontend roadmap with an interactive 3D map.",
    type: "website",
    images: [
      {
        url: "/images/trailmap-thumbnail.jpg", 
        width: 1200,
        height: 630,
        alt: "Roadmap - Complete frontend roadmap with an interactive 3D map",
      },
    ],
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="author"
          content="Luan Alves de Paiva & Arthur Duarte"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗺️</text></svg>"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
