import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import StackSection from "@/components/ui/StackSection";
import ContactSection from "@/components/ui/ContactSection";
import WorkSection from "@/components/ui/Work";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8">
      <Header />
      <HeroSection />
      <WorkSection />
      <StackSection />
      <div>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
