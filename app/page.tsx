import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WeikinnHeading } from "@/components/WeikinnHeading";
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

        {/* Drei-Schicht-Übergang Hero → Section 2 */}
        <div style={{ position: 'relative', height: '240vh' }}>
          {/* Schicht 3 (oben): weikinn — bleibt über dem GIF stehen, scrollt erst mit Section 2 weg */}
          <div style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 3, pointerEvents: 'none', mixBlendMode: 'difference' }}>
            <WeikinnHeading />
          </div>
          {/* Schicht 2 (mitte): GIF — scrollt als erstes weg */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100vh', zIndex: 2 }}>
            <HeroSection />
          </div>
          {/* Schicht 1 (unten): Section 2 — liegt von Anfang an hinter dem GIF, wird enthüllt wenn GIF wegscrollt */}
          <div style={{ position: 'sticky', top: 0, zIndex: 1, marginTop: '-100vh' }}>
            <SectionTwo />
          </div>
        </div>

        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
      <Footer />
    </main>
  );
}
