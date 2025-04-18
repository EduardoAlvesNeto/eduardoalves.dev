import Head from "next/head";

import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import StackSection from "@/components/ui/StackSection";
import ContactSection from "@/components/ui/ContactSection";
import WorkSection from "@/components/ui/Work";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
