import "./globals.css";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/data/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="author"
          content="Luan Alves de Paiva & Arthur Duarte"
        />
        <title>Roadmap</title>
        <meta
          name="description"
          content="This system serves as a roadmap for front-end development, offering structured guidance on building modern, scalable web applications."
        />
        <meta
          name="keywords"
          content="front-end development, roadmap, web development, React, Next.js, modern web applications, UI/UX design"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗺️</text></svg>"
        />
      </head>
      <body
        className={`antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
