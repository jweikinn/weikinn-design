# Weikinn.Design

> Brand & Web Design Specialist

## Brand Identity

- **Persönlichkeit:** Professionell, modern, mutig — Design-Agentur mit klarer Handschrift
- **Hintergrund:** Tiefschwarz (#000000)
- **Textfarbe:** Hell-Lavendel (#d5d3e6) für große Display-Texte
- **Akzentfarbe:** Lila (#6759D7)
- **Schriftarten:** Adobe Fonts via Kit `yhk3mxv`
  - `commissioner-variable` → var(--font-sans) — für alle Fließtexte, Buttons, UI
  - `loretta-display-variable` → var(--font-display) — für große Kursiv-Headlines

## Schriftart einrichten

Die Font-Dateien müssen unter `/public/fonts/` abgelegt werden:

| Dateiname | Gewicht |
|---|---|
| SequelSans-Roman.woff2 / .woff | 400 (Normal) |
| SequelSans-Book.woff2 / .woff | 300 (Leicht) |
| SequelSans-Bold.woff2 / .woff | 700 (Fett) |
| SequelSans-Heavy.woff2 / .woff | 900 (Heavy) |

## Seiten

- **Homepage** (`/`) — Hauptseite mit allen Sektionen

## Sektionen (Homepage)

- **Section 1 – Hero** ✅ — GIF-Hintergrund (100vh). „weikinn" scrollt als eigene Schicht (bleibt stehen während das GIF wegscrollt, dann gemeinsam mit Section 2 weg).
- **Section 2 – Haltung** ✅ — Schwarzer Hintergrund, min-height 100vh, vertikal zentriert. Links: „Sichtbar machen, was trägt." (Loretta Display, italic, weight 200). Rechts: Stempel-SVG + Body-Text (Commissioner, 18px) + „Projektanfrage"-Button (#d5d3e6 Hintergrund, #2f2483 Text).

## Komponenten

- **Navbar** (`components/Navbar.tsx`) — Navigation oben über dem GIF: Logo links, Links mittig (mit kleinem roten Punkt unter dem aktiven Link), „Let's talk"-Button rechts (weiße Pille mit schwarzer Schrift). Mobil: Logo + Hamburger-Menü.
- **HeroSection** (`components/HeroSection.tsx`) — Vollbild-Hero mit GIF-Hintergrund (`/public/background.gif`). Der riesige „Weikinn Design"-Schriftzug liegt als helle, halbtransparente Watermark **hinter** dem iPad am unteren Bildrand. Rechts unten erscheint der Claim „Brand & Web Design Spezialistin" in Electric Blue. Beim Scrollen verschiebt sich der Schriftzug horizontal nach links und enthüllt „Design". Auf Mobil: „Brand & Web Design Spezialistin" in Blau + „Let's talk"-Button.
- **SectionFive** (`components/SectionFive.tsx`) — „Selected Work"-Sektion auf weißem Hintergrund. Header „Selected Work" + „004" links, Intro-Text rechts (Desktop only). Desktop: zwei Spalten — links Praxis + SAAS + CTA-Block (justify-between), rechts Erscheinungsbild + Broschüre (240px Versatz nach unten, 117px Abstand). Mobil: eine Spalte, alle vier Projekte gestapelt + CTA. Jede Projektkarte: Bild mit Frosted-Glass-Tags unten links + Titel + Pfeil-Icon.
- **SectionFour** (`components/SectionFour.tsx`) — Services-Sektion auf schwarzem Hintergrund. „Services"-Header mit „003"-Label, dann vier Blöcke (Branddesign, Webdesign, Editorial Design, Content), jeweils mit dünner weißer Trennlinie, 96 px Light Service-Name, 40 px Untertitel und 18 px Detail-Text. **Desktop-Hover:** Fährt man über einen Service, erscheint das zugehörige Bild (Handy-Mockup, iMac-Mockup, Print-Broschüren) mit Opacity-Fade auf der rechten Seite — Positionen aus Figma übernommen. **Mobil:** Bilder sind immer sichtbar und überlagern den Text von rechts. Bilder liegen unter `/public/services/` (branddesign.png, webdesign.png, editorial.png).
- **Footer** (`components/Footer.tsx`) — Blauer Footer (#1626FF). Oben links: CTA-Text mit gemischten Schnitten (Light + Black) + E-Mail-Link + „Kontakt"-Pill-Button (weißer Rand). Oben rechts (Desktop): INSTAGRAM / LINKEDIN rechtsbündig. Trennlinie. Unten: „Weikinn.Design" in 170 px Bold + IMPRESSUM / DATENSCHUTZ rechts gestapelt (Desktop), zentriert oberhalb (Mobil). Mobil: alles einspanig gestapelt, „Weikinn.Design" in 52 px ganz unten.
- **SectionTwo** (`components/SectionTwo.tsx`) — Portrait (`/public/portrait.jpg`) füllt den Viewport. Eine weiße Maske aus vier Rechtecken (oben/unten/links/rechts) lässt initial nur ein kleines Fenster mit dem Gesicht sichtbar. Beim Scrollen schrumpfen die Masken bis zu null, sodass das Bild browserfüllend wird. Desktop: blaue Stats „Freelance Designerin / 12+ / Jahre Erfahrung" rechts, faden über die ersten 35 % des Scrolls aus. Mobile: kleines, oben zentriertes Portraitfenster ohne Stats. `objectPosition: 64% center` rückt das Gesicht ins sichtbare Fenster.

## Schriftart

Sequel Sans (MyFonts Webfont Kit) — 48 Schnitte in `/public/fonts/` mit kryptischen Namen `33C934_*`. Die `globals.css` mappt sie auf zwei CSS-Familien:
- `Sequel Sans` (Body Text, alle Gewichte 300–900 + Italic) — Standard
- `Sequel Sans Display` (Display, Gewichte 300–900) — für große Headlines via `var(--font-display)`

## Design Tokens (in `app/globals.css`)

Aus dem Figma-Frame `95:244` ausgelesen und als CSS-Variablen + Utility-Klassen hinterlegt:

**Farben (Tailwind-Klassen):** `bg-accent` / `text-accent` (#0044FF), `bg-footer` (#1626FF)

**Typo-Stile (CSS-Klassen, direkt verwendbar):**
- `.type-h2` — 96px Roman, line-height 0.9 (z. B. „Selected Work")
- `.type-services` — 96px Light, line-height 1.0 (z. B. „Branddesign")
- `.type-arbeitsbeispiel` — 36px Bold (Projekt-Titel)
- `.type-copy-large` — 40px Light (Intro-Texte)
- `.type-copy-small` — 18px Light (Fließtext)
- `.type-bu-blau` — 18px Bold in Akzentblau (Berufstitel)
- `.type-button` — 14px Heavy (Buttons)
- `.type-nav` — 16px Medium (Navigation)

**Spacing-Tokens:** `--spacing-page` (32px), `--spacing-section-y` (80px), `--spacing-footer-gap` (120px), `--radius-pill` (24px für Pillen-Buttons).

## Aktuelle Komponenten (Figma-Rebuild)

- **WeikinnHeading** (`components/WeikinnHeading.tsx`) — Das große „weikinn" als eigene sticky Schicht (z-index 3). Füllt die volle Breite via JS-Messung, interaktiver Gewichts-Gradient beim Hover, mix-blend-mode: difference gegen das GIF.
- **HeroSection** (`components/HeroSection.tsx`) — Nur noch das GIF (`/public/background.gif`), 100vh.
- **SectionTwo** (`components/SectionTwo.tsx`) — „Sichtbar machen, was trägt." + Body-Text + Button. Sticky Schicht (z-index 1), scrollt gemeinsam mit weikinn weg.
- **Navbar** (`components/Navbar.tsx`) — Fixed, mix-blend-mode: difference auf Logo + Burger. Menü nur im Burger-Dropdown.

## Letzte Änderungen

- 2026-06-26: Kompletter Figma-Rebuild gestartet. Schriften auf Adobe Fonts umgestellt (commissioner-variable + loretta-display-variable). Akzent von #0044FF auf #6759D7 geändert. Hero neu: GIF-Schicht + weikinn-Schicht + Section-2-Schicht im 300vh-Wrapper mit Sticky-Stacking-Effekt. Section 2 neu implementiert nach Figma.
- 2026-05-19: Footer — Sticky-Footer-Effekt: Footer hat `position: sticky; bottom: 0; z-index: 0`. Alle Sections sind in einem Wrapper mit `z-index: 1`, scrollen über den Footer hinweg und geben ihn von unten frei. „Weikinn.Design"-Wordmark wird dynamisch auf die maximale Schriftgröße skaliert, die neben Impressum/Datenschutz Platz hat (Messung per Ref + ResizeObserver). Footer-Layout auf Desktop als 2-Spalten-Grid umgebaut: rechte Spalte enthält Instagram UND Impressum/Datenschutz → garantiert identische Rechtsbündigkeit. Impressum paddingBottom: px(3,17) für Ausrichtung an der „n"-Grundlinie von „Weikinn.Design".
- 2026-05-19: Scroll-Animationen auf Textblöcken — positionsbasierter Word-Reveal (jedes Wort leuchtet auf wenn es die Leselinie bei 65% Viewport-Höhe erreicht, Übergangsband 55px ≈ eine Zeilenhöhe, Startopazität 15%): Section 3 (große Copy + Detail-Text), Section 5 (Intro-Text + CTA-Text Desktop + CTA-Text Mobil), Section 6 (Quote + Detail aller drei Kundenstimmen).
- 2026-05-19: Hero Section 1 — Parallax-Scroll: „Weikinn Design" bewegt sich 2px pro 1px Scroll nach links (Faktor 2.0), Seite scrollt frei ohne Sticky-Lock. Navbar: 3-Phasen-System (transparent → versteckt → weiß/kompakt), Threshold 10px. Hover-Animationen: Nav-Links rollen mit blauem Text ein (CSS `::after` + translateY), „Let's talk"-Button mit blauem Wipe-Effekt.
- 2026-05-19: Sektion 6 (Love Letters) — Custom-Cursor: innerhalb der Sektion verschwindet der normale Mauszeiger. Links eine Pfeil-links-SVG, rechts eine Pfeil-rechts-SVG in Akzentblau (#0044FF), 1pt Strich, 38px (~1cm). Position wird per `transform` ohne React-Re-render aktualisiert; Seite wechselt nur bei Linke/Rechte-Halbierung.
- 2026-05-19: Projektbilder in „Selected Work" lokal gespeichert unter `/public/work/` (praxis.png, saas.png, imac.png, office.png, brochure.png, arrow.svg) — vorher wurden sie von einem lokalen Figma-Asset-Server geladen, der nicht immer verfügbar ist. SectionFive.tsx nutzt jetzt lokale Pfade.

- 2026-05-18: Footer hinzugefügt — blauer Hintergrund (#1626FF), CTA-Text mit E-Mail-Link + „Kontakt"-Button + Social-Links, Trennlinie, großes „Weikinn.Design"-Wordmark (170px Desktop / 52px Mobil) + Impressum/Datenschutz-Links.

- 2026-05-15: Section 4 (Services) hinzugefügt — schwarzer Hintergrund, „Services"-Header + vier Blöcke (Branddesign, Webdesign, Editorial Design, Content) mit weißen Trennlinien und drei Textebenen (Service-Name / Untertitel / Detail). Responsive per clamp() von Desktop auf Mobil.
- 2026-05-15: Section 3 — Logo-Marquee: G+J und SKODA sind jetzt eigenständige Logos in der Reihe (statt als enge Untergruppe mit 8 px Abstand) und bekommen den normalen 96 px-Abstand zu ihren Nachbarn. Hintergrund: Die Dateien heißen historisch `psycho-text.svg`/`psycho-mark.svg`, enthalten aber tatsächlich die Marken Gruner + Jahr (kleines G+J) und Skoda (Wortmarke). Alt-Texte und Kommentar entsprechend korrigiert.
- 2026-05-15: Section 3 — Logo-Marquee läuft jetzt nach links statt nach rechts (Geschwindigkeit unverändert, 60 s). Zwei Logos entstaucht: G+J auf 34×20 (Symbol-Aspect 1.7:1), Skoda-Wortmarke auf 122×16 (Aspect 7.6:1), damit `preserveAspectRatio="none"` sie nicht mehr verzerrt.
- 2026-05-15: Section 2 — Stats-Block linksbündig zum „Brand & Web Design Spezialistin"-Text aus Section 1 (left: 75.55 %, width: 15.3 %). „Freelance Designerin" und „Jahre Erfahrung" verwenden `.type-bu-blau` (18 px Bold, Akzentblau) — gleiche Größe wie alle anderen blauen Schriften im Projekt. Nur „12+" bleibt groß (clamp 80–136 px). Fade-out entfernt: blauer Text bleibt sichtbar, auch wenn das Foto aufgescrollt wird.
- 2026-05-15: Section 2 hinzugefügt — Portrait-Bild mit weißer Maske (4 Rechtecke), die beim Scrollen schrumpft, bis das Bild browserfüllend ist. Desktop: Stats „12+ Jahre Erfahrung" rechts. Mobile: kleines, oben sitzendes Portraitfenster (zeigt nur das Gesicht), wächst auf Vollbild. Section ist 200 vh hoch, Sticky-Inner = 100 vh, Animation läuft über genau eine Viewport-Höhe.
- 2026-05-15: Watermark voll deckend — Farbe von `rgba(255,255,255,0.45)` auf `#ffffff` (volle Deckkraft, kein Alpha) auf Desktop + Mobil. In Figma erzeugt das Overlay-Blend den Effekt selbst, nicht durch Transparenz — die Schrift ist dort eine voll-opake weiße Fläche, und das Overlay-Blend mit dem Beton-Hintergrund macht die Helligkeitsvariation in den Buchstaben. Multiply-Abdunklung über dem GIF von 20 % auf 5 % reduziert, damit die Beton-Helligkeitsvariation für den Overlay-Effekt erhalten bleibt.
- 2026-05-15: Watermark-Blend-Fix — `isolation: isolate` (`isolate`-Klasse) auf den Sticky-Container hinzugefügt. Vorher rendert `mix-blend-mode: overlay` auf dem `<h1>` als flacher halbtransparenter Layer ohne Textur-Interaktion, weil der Watermark-Wrapper mit `z-10` einen eigenen Stacking-Kontext öffnete und Overlay nur gegen den leeren Wrapper-Hintergrund blendete. Mit `isolate` auf dem Sticky bildet das Hero eine Blend-Isolations-Gruppe — Overlay blendet jetzt korrekt gegen GIF + 20%-Abdunklungs-Layer und zeigt die Beton-Textur durch die Buchstaben hindurch, wie in Figma.
- 2026-05-15: Bugfix Sichtbarkeit — der vorherige `stageRef`-Container (`left-12 right-12 hidden md:flex`) lieferte beim Initial-Measure unter bestimmten Bedingungen `offsetWidth = 0`, weil Tailwind `display: flex` noch nicht aktiv war. Dadurch blieb `fontSizePx` auf 0 und sowohl Watermark als auch blauer Text waren `visibility: hidden`. Lösung: Container wieder auf `absolute inset-0` (full-width), Messung läuft jetzt über `sectionRef` (immer >0), Linksbündigkeit per `marginLeft: 48px` direkt auf dem `<h1>`. Plus: Desktop-Opazität zurück auf den bewährten Originalwert `rgba(255, 255, 255, 0.45)` (overlay) — 0.85 + overlay auf dunklem Hintergrund war zu kontrastarm.
- 2026-05-15: „Weikinn"-Watermark und „Design"-Reveal sind linksbündig zum Logo. Desktop: Schrift wird auf die Content-Breite (Section minus 2× 48 px) skaliert, h1 hat `marginLeft: 48px`. Translate-Distanz = Content-Breite, sodass nach dem Scroll „D" exakt am selben x-Pixel sitzt wie der „W"-Anfang davor. Mobile: Watermark + blauer Text + „Let's talk"-Button von 16 px auf 32 px linker Abstand verschoben (= mobile navbar `px-8`).
- 2026-05-15: Scroll-Reveal für „Weikinn Design" wiederhergestellt — Hero-Section ist jetzt 200 vh hoch mit einer Sticky-Bühne, sodass beim Scrollen der Schriftzug horizontal nach links wandert und „Design" sichtbar wird (Animation läuft über genau 1 Viewport-Höhe).
- 2026-05-14: Desktop „Brand & Web Design Spezialistin" wird jetzt dynamisch auf Höhe des i-Punkts der „Weikinn"-Watermark positioniert (bottom: `calc(5% + 0.74 × fontSizePx)`). Mobile Sektion 1 nach Figma `63:2556` neu gebaut: kleine 18-px-Spezialistin-Schrift links oben (statt Riesen-Headline), gestapelte „Weikinn / Design"-Watermark in 98 px, kompakter 12-px-„Let's talk"-Button unten links. Hamburger-Icon auf zwei dünne 1.5-px-Linien (3→21) umgestellt — näher an Figma. `--tracking-bu-blau` von -0.03em auf -0.02em korrigiert.
- 2026-05-14: Hero-Section ist jetzt strikt 100 vh hoch (keine 200-vh-Sticky-Konstruktion mehr, dadurch keine schwarze Fläche darunter). Die „Design"-Reveal-Animation läuft während der ersten 50 vh des Page-Scrolls — das „D" wird sichtbar bevor der Hero komplett aus dem Viewport verschwindet.
- 2026-05-14: Hero-Höhe wieder auf 100 vh (Browserfenster-Höhe). Dezente Abdunklungs-Fläche über dem GIF ergänzt (schwarz, mix-blend-multiply, 20% Opazität) — wie in Figma Node `95:463`.
- 2026-05-14: Navigation auf `fixed top-0` umgestellt (bleibt beim Scrollen sichtbar). Roter Punkt-Indikator unter „Projects" entfernt — war eine Eigenerweiterung, nicht aus Figma.
- 2026-05-14: „Weikinn"-Watermark füllt jetzt die volle Hero-Breite (Schriftgröße wird per JS dynamisch gemessen und auf die Stage-Breite skaliert). Das „D" sitzt initial komplett rechts außerhalb und kommt erst beim Scrollen rein. Position der „Brand & Web Design Spezialistin" auf top 52% angehoben, damit sie deutlich über der Watermark sitzt (zuvor kollidierte sie mit den i-Punkten).
- 2026-05-14: Hero an Figma-Layout angeglichen — Stage-Höhe folgt jetzt der Figma-Aspect-Ratio 1440:847 (statt 100 vh), GIF wirkt dadurch nicht mehr überdimensioniert. „Brand & Web Design Spezialistin" sitzt links-aligned, 18px Bold Akzentblau — analog zum Figma-Frame `95:461`.
- 2026-05-14: Design Tokens aus Figma in `globals.css` hinterlegt — Farben (`accent`, `footer`), Schriftgrößen, Letter-Spacings, Spacing- und Radius-Variablen sowie 8 Typo-Utility-Klassen (`.type-h2`, `.type-services`, …) für konsistente Verwendung.
- 2026-05-14: Schriftschnitte vereinheitlicht — Logo auf Black (900), Menüpunkte auf Medium (500), „Let's talk"-Button auf Black (900), „Brand & Web Design Spezialistin" auf Bold (700). Akzentfarbe Blau von #2424FF auf #0044FF geändert.
- 2026-05-14: Hero-Layout angepasst — „Weikinn"-Schriftzug nach unten verschoben und als halbtransparente Watermark (mix-blend-mode overlay) eingefügt. Claim „Brand & Web Design Spezialistin" in Blau rechts unten ergänzt. „Let's talk"-Button auf weiß gefüllt mit schwarzer Schrift umgestellt.
- 2026-05-14: Hero komplett umgestellt — GIF als Vollbild-Hintergrund, „Weikinn Design"-Schriftzug als Overlay mit horizontalem Scroll-Reveal (Sticky-Sektion 200 vh). iPad-Mockup entfernt.
- 2026-05-14: 48 Sequel-Sans-Schnitte aus MyFonts-Webfont-Kit identifiziert und in `globals.css` als `Sequel Sans` (Body) und `Sequel Sans Display` gemappt.
- 2026-05-14: Section 1 (Hero) erste Versionen mit iPad-Mockup.

## So anpassen

- **Akzentfarbe ändern:** In `app/globals.css` den Wert `--accent: #0044FF` anpassen
- **Logo-Text ändern:** In `components/Navbar.tsx` „Weikinn.Design" suchen und ersetzen
- **Navigations-Links ändern:** In `components/Navbar.tsx` das Array `navLinks` bearbeiten
- **Mobile Headline ändern:** In `app/page.tsx` unter „Mobile hero" den Text anpassen
