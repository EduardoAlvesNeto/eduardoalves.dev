'use client'

import Head from "next/head";
import { useContext } from "react";
import { motion } from "motion/react";

import { ThemeContext } from "@/components/contexts/ThemeContext";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import StackSection from "@/components/ui/StackSection";
import ContactSection from "@/components/ui/ContactSection";
import WorkSection from "@/components/ui/Work";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} dark:bg-zinc-900 transition-colors duration-400 ease-in-out`}
    >
      <Head>
        <title>Eduardo Alves — Dev Freelancer • React, Node.js, TypeScript</title>
        <meta name="description" content="Precisa de um desenvolvedor fullstack que entregue resultados rápidos e eficientes? Sou Eduardo Alves, especializado em React, Node.js e JavaScript. Vamos conversar sobre como posso ajudar o seu negócio a crescer." />
      </Head>
      <Header />
      <main className="w-full flex flex-col gap-8">
        <HeroSection />
        <WorkSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
