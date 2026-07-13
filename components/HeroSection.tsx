export function HeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/weikinn-design_bg_kl.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }}
      />
    </section>
  )
}
