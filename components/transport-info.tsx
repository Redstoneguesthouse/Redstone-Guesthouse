import { Car, Train, Plane, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const transportOptions = [
  {
    icon: Car,
    title: "By Car",
    description: "Free parking available when booking direct. Easy access from M55 motorway.",
    details: "Secure parking • Advance reservation recommended",
  },
  {
    icon: Train,
    title: "By Tram",
    description: "Blackpool tram system provides excellent connectivity along the promenade.",
    details: "Nearest stop: North Pier • 5-minute walk",
  },
  {
    icon: Plane,
    title: "By Air",
    description: "Manchester Airport is approximately 1 hour drive. Blackpool Airport for private flights.",
    details: "Airport transfers available on request",
  },
  {
    icon: MapPin,
    title: "Local Attractions",
    description: "Walking distance to Blackpool Tower, Winter Gardens, and the famous promenade.",
    details: "Beach • Shopping • Entertainment all nearby",
  },
]

export function TransportInfo() {
  return (
    <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Getting Here</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The Redstone Guest House is perfectly located in the heart of Blackpool with excellent transport links
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {transportOptions.map((option, index) => (
          <div key={index} className="bg-card rounded-xl p-6 text-center border">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <option.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{option.title}</h3>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{option.description}</p>
            <p className="text-primary text-xs font-medium">{option.details}</p>
          </div>
        ))}
      </div>

      {/* Directions & Booking CTA */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-foreground mb-4">Need Directions or Have Questions?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our friendly team is here to help with directions, transport advice, or any special arrangements for your
          stay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="tel:01253344004">Call for Directions</a>
          </Button>
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 bg-transparent">
            <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
              Book Your Stay
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
