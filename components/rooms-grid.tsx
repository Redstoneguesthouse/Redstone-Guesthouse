"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RoomModal } from "@/components/room-modal"
import { Users, Eye, Bed, Bath, Tv, Wifi, Coffee } from "lucide-react"

const rooms = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    subtitle: "Sleeps up to 3 • King bed • Child only",
    price: "From £120/night",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-bAbZK20iAa2WQzpr9ZQ6Z8hWClASf5.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-bAbZK20iAa2WQzpr9ZQ6Z8hWClASf5.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-oJTR7dcUxkwGLdpPD1CuxFSDNrvTNw.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-9vY4uaJWzDqz7WgMpBmI4tGVNIZYlV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-2IoJnBpvi5Ma2GWrqSZI7xfX89Ikpp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-hzg31JG7p8Cwe8OJnahlNXUKyJN46o.jpeg",
    ],
    features: [
      "Partial Sea & Tower views (front-facing) with window seating",
      "Large ensuite: deep bath/power shower, luxury toiletries, fluffy towels, robes & slippers",
      "Hairdryer & straighteners",
      '50" Plasma TV with Freeview',
      "Free Wi-Fi",
      "Hospitality tray: tea, coffee, fruit tea, hot chocolate, biscuits",
      "Complimentary water",
      "One child (5–12 years) can be accommodated",
      "Breakfast included",
    ],
    amenities: [
      { icon: Eye, label: "Sea Views" },
      { icon: Bath, label: "Deep Bath" },
      { icon: Tv, label: '50" TV' },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Coffee, label: "Hospitality Tray" },
      { icon: Users, label: "Sleeps 3" },
    ],
  },
  {
    id: "superior-double",
    name: "Superior Double Room",
    subtitle: "Sleeps up to 3 • King bed • Child only",
    price: "From £100/night",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Superior-Double-Room-Ensuite-Room-2-min.JPG-H0Tbh5K4W0WqmT0FO0cSOiNBrSTg9v.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Superior-Double-Room-Ensuite-Room-2-min.JPG-H0Tbh5K4W0WqmT0FO0cSOiNBrSTg9v.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-Superior-Double-Room-Ensuite-Room-2.JPG-zByidrTXnmGgDj7y2N6UZXn3kZAZNC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-Superior-Double-Room-Ensuite-Room-2.JPG-hRXQfaH7EmSdWDrhi52rbZGdLnwJiT.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Superior-Double-Room-Ensuite-Room-2.JPG-3FXMJiMaRD7iryHr0o8IfvyHgBrBaE.jpeg",
    ],
    features: [
      "Spacious with seating area",
      "Fully tiled wet-room ensuite with luxury toiletries",
      "Robes & slippers provided",
      '32" Plasma TV with Freeview',
      "Free Wi-Fi",
      "Hairdryer & straighteners",
      "Complimentary water",
      "Hospitality tray with tea, coffee, and refreshments",
      "One child (5–12 years) can be accommodated",
      "Breakfast included",
    ],
    amenities: [
      { icon: Bath, label: "Wet Room" },
      { icon: Tv, label: '32" TV' },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Coffee, label: "Hospitality Tray" },
      { icon: Users, label: "Sleeps 3" },
      { icon: Bed, label: "King Bed" },
    ],
  },
  {
    id: "king-double-ensuite",
    name: "King Double Ensuite",
    subtitle: "Sleeps up to 2 • King bed",
    price: "From £90/night",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Double%20King%20Room%20Ensuite%20Room%205.JPG-KrfaQwKiwcYQjG95QDNfX51QIwx3Co.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Double%20King%20Room%20Ensuite%20Room%205.JPG-KrfaQwKiwcYQjG95QDNfX51QIwx3Co.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Double%20King%20Room%20Ensuite%20Room%207.JPG-TC8jcB3NL8kw5cI7uoVOvhuBIPqoIH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Double%20King%20Room%20Ensuite%20Room%205.JPG-NMBofoGHY6RBnVIrWg8O8t0BgKG4vA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Double%20King%20Room%20Ensuite%20Room%205.JPG-BOkKz5E4wWEF1fyCWYaT3qe59hUWef.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Double%20King%20Room%20Ensuite%20Room%207.JPG-n3L2NQ6xfOH9xdxpaAVnKtixwL0Sh0.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Double%20King%20Room%20Ensuite%20Room%207.JPG-7afn6hZKoKMzEU4xAtuAVcKKSv0jpP.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Double%20King%20Room%20Ensuite%20Room%207.JPG-cKxkdwCHgNWDROw993qzy0yP2Yg1Qs.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-Double%20King%20Room%20Ensuite%20Room%205.JPG-BSPqA9vWDIZ7kZLc9FnKAfRmFcWiPu.jpeg",
    ],
    features: [
      "Spacious with seating area",
      "Fully tiled wet-room ensuite",
      "Luxury toiletries, robes & slippers",
      '32" Plasma TV with Freeview',
      "Free Wi-Fi",
      "Hairdryer & straighteners",
      "Complimentary water",
      "Hospitality tray with tea, coffee, and refreshments",
      "Breakfast included",
    ],
    amenities: [
      { icon: Bath, label: "Ensuite" },
      { icon: Tv, label: '32" TV' },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Coffee, label: "Hospitality Tray" },
      { icon: Users, label: "Sleeps 2" },
      { icon: Bed, label: "King Bed" },
    ],
  },
]

export function RoomsGrid() {
  const [selectedRoom, setSelectedRoom] = useState<(typeof rooms)[0] | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Our Luxury Accommodations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of beautifully appointed rooms and suites
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border group"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.mainImage || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{room.price}</Badge>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground mb-4">{room.subtitle}</p>

                {/* Amenities Icons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.amenities.slice(0, 4).map((amenity, amenityIndex) => (
                    <div key={amenityIndex} className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <amenity.icon className="h-4 w-4 text-primary" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedRoom(room)}
                    className="w-full border-primary text-primary hover:bg-primary/10"
                  >
                    View Details
                  </Button>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a
                      href="https://www.theredstoneblackpool.co.uk/en-GB/rooms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Ready to Book Your Stay?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience luxury accommodation in the heart of Blackpool with our best price guarantee and free parking.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                Book Direct & Save
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Room Modal */}
      {selectedRoom && <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />}
    </section>
  )
}
