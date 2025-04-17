import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

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
  openGraph: {
    title: "Eduardo Alves | Desenvolvedor Fullstack",
    description: "Crio aplicações modernas com React, Next.js e Node.js.",
    url: "https://www.eduardoalves.dev",
    siteName: "Eduardo Alves Dev",
    type: "website",
    images: [
      {
        url: "https://www.eduardoalves.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eduardo Alves - Desenvolvedor Fullstack",
      },
    ],
  },
  authors: [{ name: "Eduardo Alves", url: "https://eduardoalves.dev" }],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-zinc-100
  [&::-webkit-scrollbar-thumb]:bg-zinc-400 [&::-webkit-scrollbar-thumb]:rounded-full">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html >
  );
}
