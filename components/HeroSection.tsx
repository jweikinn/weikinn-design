export function HeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/background.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  )
}
