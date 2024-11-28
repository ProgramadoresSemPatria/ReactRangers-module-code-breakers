import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "TrailMap – Trilha de Desenvolvimento Front-End em 3D",
  description:
    "Explore a trilha completa de desenvolvimento front-end em um mapa interativo 3D. Comece pelos fundamentos e avance até técnicas avançadas, frameworks e ferramentas essenciais.",
  keywords: [
    "TrailMap",
    "desenvolvimento front-end",
    "mapa 3D",
    "trilha de aprendizado",
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
    title: "TrailMap – Trilha de Desenvolvimento Front-End em 3D",
    description:
      "Explore um caminho interativo para desenvolvimento front-end em um mapa 3D inovador.",
    type: "website",
    images: [
      {
        url: "/images/trailmap-thumbnail.jpg", 
        width: 1200,
        height: 630,
        alt: "TrailMap - Um mapa 3D interativo para desenvolvimento front-end",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
