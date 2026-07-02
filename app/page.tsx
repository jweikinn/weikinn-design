import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WeikinnHeading } from "@/components/WeikinnHeading";
import { SectionTwo } from "@/components/SectionTwo";
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

        {/* Bürobezeichnung — scrollt mit dem Inhalt weg, nicht sticky; auf Mobile versteckt */}
        <div
          className="hidden md:flex"
          style={{
            position: 'absolute',
            top: '30px',
            left: 0,
            right: 0,
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 51,
            mixBlendMode: 'difference',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '14px',
            letterSpacing: '-0.02em',
            color: '#fff',
            whiteSpace: 'nowrap',
          }}>
            Büro für sinnvolle Gestaltung
          </span>
        </div>

        {/* Drei-Schicht-Übergang Hero → Section 2 */}
        <div style={{ position: 'relative', height: '200vh' }}>
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

        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
      {/* Footer liegt hinter dem Content (zIndex: 0) und wird von unten enthüllt wenn der Content hochscrollt */}
      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  );
}
