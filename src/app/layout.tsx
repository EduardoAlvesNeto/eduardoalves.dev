import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/contexts/ThemeContext';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Eduardo Alves — Desenvolvedor Fullstack Freelancer • React, Node.js, TypeScript',
  description: 'Sou Eduardo Alves, desenvolvedor fullstack freelancer especializado em React, Node.js e TypeScript. Crio soluções digitais de alta performance, com foco em sites modernos, aplicativos responsivos e sistemas personalizados. Entre em contato para transformar suas ideias em realidade!',
  keywords: [
    'Eduardo Alves',
    'Desenvolvedor Fullstack',
    'Desenvolvedor JavaScript',
    'Desenvolvedor React',
    'Desenvolvedor Node.js',
    'React Developer',
    'Node.js Developer',
    'Portfólio Desenvolvedor',
    'Freelancer JavaScript',
    'Freelancer Fullstack',
    'Programador Frontend',
    'Programador Backend',
    'Desenvolvedor Web',
    'Freelancer React',
    'Freelancer Node.js'
  ],
  openGraph: {
    title: 'Eduardo Alves | Desenvolvedor Fullstack',
    description: 'Crio aplicações modernas com React, Next.js e Node.js.',
    url: 'https://www.eduardoalves.dev',
    siteName: 'Eduardo Alves Dev',
    type: 'website',
    images: [
      {
        url: 'https://www.eduardoalves.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eduardo Alves - Desenvolvedor Fullstack',
      },
    ],
  },
  authors: [{ name: 'Eduardo Alves', url: 'https://eduardoalves.dev' }],
  icons: {
    icon: '/favicon.png',
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
