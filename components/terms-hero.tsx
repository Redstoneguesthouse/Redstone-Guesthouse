export function TermsHero() {
  return (
    <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-redstone-hotel-reception-blackpool.jpg.JPG-dTaWASsWRDxJ8CpI1uxQUrhbBfAVKk.jpeg)`,
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance animate-fade-in">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Important information about your stay at The Redstone Guest House
          </p>
        </div>
      </div>
    </section>
  )
}
