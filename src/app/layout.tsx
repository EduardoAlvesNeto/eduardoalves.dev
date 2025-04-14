import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Alves — Desenvolvedor Fullstack",
  description: "Portfólio de Eduardo Alves, desenvolvedor fullstack especializado em JavaScript, Node.js e React. Conectando design e código para dar vida a suas ideias.",
  keywords: [
    "Eduardo Alves",
    "Desenvolvedor Fullstack",
    "Desenvolvedor JavaScript",
    "React Developer",
    "Node.js",
    "Portfólio Desenvolvedor",
    "Web Developer",
    "Freelancer JavaScript",
    "Programador Frontend",
    "Programador Backend"
  ],
  authors: [{ name: "Eduardo Alves", url: "https://eduardoalves.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="icon"
          href="/Logo.svg"
          sizes="any"
        />
      </head>
      <body
        className={`${font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
