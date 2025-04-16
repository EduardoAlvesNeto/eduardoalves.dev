import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import StackSection from "@/components/ui/StackSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";

import ReactPNG from '@/../public/react.png'
import NextPNG from '@/../public/next.png'
import NodePNG from '@/../public/node.png'

import { DocumentDownload, Messages1, Layer, GlobalSearch } from "iconsax-react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8">
      <Header />
      <HeroSection />
      <StackSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
