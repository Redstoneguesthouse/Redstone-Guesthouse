import { Button } from "@/components/ui/button"
import { Award, MapPin, Users } from "lucide-react"

export function AboutContent() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main About Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Welcome to The Redstone Guest House
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  <strong>
                    Are you looking for a luxurious place to stay right in the heart of Blackpool with Free Parking?
                  </strong>{" "}
                  The Redstone is perfectly positioned a stone's throw from the beach and all the major attractions
                  Britain's favourite seaside resort has to offer.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Our guest house has been fully refurbished to offer luxury accommodation, effortlessly combining
                  traditional features with contemporary twists. The Redstone is perfect for the discerning guest
                  looking for a relaxing base from which to explore Blackpool.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Booking direct with us we guarantee <strong>Best Prices, Free Parking and Wi-Fi</strong>. We will
                  select the best available room in your chosen room type, and if you have any special requests we will
                  do our best to meet them. <strong>Children are welcome.</strong>
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-four-in-a-bed-trophy-winner-redstone.JPG-v1g4djiv79OxoXea2No1DIa5oRVBZ7.jpeg"
                  alt="Four in a Bed Winner Award"
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Location & Attractions */}
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-12">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                Perfect Location
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Blackpool has so much on offer; whether you're simply looking to relax and unwind or seeking a
                fun-packed holiday! The sandy beach is close by, where you can take in some sea air and soak up some
                rays in the summer months.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                For thrill seekers, visit <strong>Blackpool Pleasure Beach</strong> for roller coasters. The
                world-famous <strong>Blackpool Tower</strong> is within easy reach, as are the{" "}
                <strong>Winter Gardens</strong> and the main shopping area of the town.
              </p>
            </div>

            {/* Business Guests */}
            <div className="bg-card rounded-2xl p-8 lg:p-12 border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Business Guests
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                A freshly cooked Breakfast can be arranged at a time to suit you. We provide all the amenities business
                travelers need for a productive and comfortable stay.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                  Book Business Stay
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
