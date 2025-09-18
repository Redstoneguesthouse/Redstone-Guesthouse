import { Button } from "@/components/ui/button"
import { Shield, Disc as Desk, Zap, Tv, Wifi, Coffee, Lock, Shirt } from "lucide-react"

const amenities = [
  { icon: Desk, title: "Desk", description: "Dedicated workspace in every room" },
  { icon: Lock, title: "In-room Safe", description: "Secure storage for valuables" },
  { icon: Zap, title: "Fire Alarm with Light", description: "Enhanced safety features" },
  { icon: Shirt, title: "Iron & Ironing Board", description: "Keep your clothes crisp" },
  { icon: Shield, title: "Hypoallergenic Bedding", description: "Where applicable for comfort" },
  { icon: Coffee, title: "Tea & Coffee Facilities", description: "Complimentary refreshments" },
  { icon: Wifi, title: "High-Speed Internet", description: "Fast Wi-Fi throughout" },
  { icon: Tv, title: "Non-Smoking Rooms", description: "Fresh, clean environment" },
]

export function RoomAmenities() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Standard Room Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every room includes these thoughtful amenities for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.title}</h3>
              <p className="text-muted-foreground text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Child Policy</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Children aged 5-12 years are welcome in our Deluxe King and Superior Double rooms. Breakfast is included
              for all guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                  Book Family Stay
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Contact for Special Requests</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
