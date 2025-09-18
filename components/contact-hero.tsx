import { Button } from "@/components/ui/button"

export function ContactHero() {
  return (
    <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-redstone-hotel-reception-blackpool.jpg.JPG-BYtA51UGhmqcdMxsK7tlo3kzcu5LCC.jpeg)`,
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Get in touch with our friendly team for bookings, enquiries, or special requests
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
          >
            <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
              Book Direct
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
