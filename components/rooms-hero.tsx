import { Button } from "@/components/ui/button"

export function RoomsHero() {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-hzg31JG7p8Cwe8OJnahlNXUKyJN46o.jpeg)`,
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance animate-fade-in">
            Luxury Rooms & Suites
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Experience comfort and elegance in our beautifully appointed accommodations
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
          >
            <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
