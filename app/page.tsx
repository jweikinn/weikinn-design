import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SectionTwo } from "@/components/SectionTwo";
import { SectionThree } from "@/components/SectionThree";
import { SectionFour } from "@/components/SectionFour";
import { SectionFive } from "@/components/SectionFive";
import { SectionSix } from "@/components/SectionSix";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* Sections sit above the sticky footer in z-order */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
      <Footer />
    </main>
  );
}
