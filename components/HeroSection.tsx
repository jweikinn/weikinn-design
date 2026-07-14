export function HeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '100vh' }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }}
      >
        <source src="/weikinn-design_bg_kl.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
