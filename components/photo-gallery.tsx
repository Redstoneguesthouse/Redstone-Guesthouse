"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/lightbox"

const galleryImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-Y51E5NccwNCpjd56IpekDLVW8iNf3x.jpeg",
    category: "Rooms",
    title: "Deluxe King Room",
    description: "Spacious deluxe room with elegant furnishings and modern amenities",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-7OCQDJ5XnBt3LHSxqzVvttOa0Bk1nl.jpeg",
    category: "Rooms",
    title: "Deluxe King Room - Seating Area",
    description: "Comfortable seating area with luxury touches",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-Xx7byBSXn3zdyuVJHSrehk0AxK4sqN.jpeg",
    category: "Rooms",
    title: "Superior Double Room",
    description: "Elegant room with traditional decor and modern comfort",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-K1NjcR72MzlmJ4cJbY17MOZ5VzFtSW.jpeg",
    category: "Rooms",
    title: "King Double Ensuite",
    description: "Beautifully appointed room with ensuite bathroom",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Superior%20Double%20Room%20Ensuite%20Room%206.JPG-LJ4bABtJTfV5asob4hpZAz6ZXG1d6o.jpeg",
    category: "Rooms",
    title: "Superior Double Room - Entrance",
    description: "Spacious superior room with elegant entrance and seating area",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-Superior%20Double%20Room%20Ensuite%20Room%206.JPG-5sLULvn9fpifdP5vXkSrUihS0hZgjv.jpeg",
    category: "Rooms",
    title: "Superior Double Room - Overview",
    description: "Complete view of superior double room with modern amenities",
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-Superior%20Double%20Room%20Ensuite%20Room%206.JPG-jT9QmkiY4NPkz1o8hJ5tadryvwR3p6.jpeg",
    category: "Rooms",
    title: "Superior Double Room - Bedroom",
    description: "Comfortable bedroom area with premium furnishings",
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Superior%20Double%20Room%20Ensuite%20Room%206.JPG-6iGy0vs8dZONu50VSHGk5DD6nd7xF9.jpeg",
    category: "Rooms",
    title: "Superior Double Room - Detail",
    description: "Detailed view showcasing luxury bedding and decor",
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-redstone-hotel-reception-blackpool.jpg.JPG-P2ugfuZRfEOIFdhEUD72iR1GAKHdyN.jpeg",
    category: "Lounge",
    title: "Reception Lounge",
    description: "Elegant reception area with comfortable seating",
  },
  {
    id: 10,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-redstone-hotel-reception-blackpool.jpg.JPG-dTaWASsWRDxJ8CpI1uxQUrhbBfAVKk.jpeg",
    category: "Lounge",
    title: "Main Reception",
    description: "Sophisticated reception area with warm lighting",
  },
  {
    id: 11,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-redstone-hotel-reception-blackpool.jpg.JPG-BYtA51UGhmqcdMxsK7tlo3kzcu5LCC.jpeg",
    category: "Lounge",
    title: "Reception Desk",
    description: "Professional reception desk with modern amenities",
  },
  {
    id: 12,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-four-in-a-bed-trophy-winner-redstone.JPG-v1g4djiv79OxoXea2No1DIa5oRVBZ7.jpeg",
    category: "Surroundings",
    title: "Four in a Bed Winner Award",
    description: "Channel 4's Four in a Bed Winner trophy display",
  },
  {
    id: 14,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-%20surrounding%20areads.jpg-LhXcPS4f1VYxw7XMSbT6eOV74tCys3.jpeg",
    category: "Surroundings",
    title: "Hotel Exterior",
    description: "The Redstone Guest House entrance with traditional red sandstone architecture",
  },
  {
    id: 15,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackpool_tower_surrounding_area.jpg-XCcCVEnbdYl9OvTbbi9LPmXRSupRDB.jpeg",
    category: "Surroundings",
    title: "Blackpool Tower",
    description: "Iconic Blackpool Tower with beach and promenade views",
  },
  {
    id: 16,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackpool_beach_surrounding_area.jpg-ezHMOFOgNlyWs9mi6Er1kbYSbNPjpa.jpeg",
    category: "Surroundings",
    title: "Blackpool Beach Sunset",
    description: "Beautiful sunset over Blackpool beach with dramatic sky colors",
  },
  {
    id: 17,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Dining-area-breakfast-redstone.JPG-73GRafDfHxwuH8pmksiVMCxpbJVZFK.jpeg",
    category: "Lounge",
    title: "Breakfast Dining Room",
    description: "Elegant dining room with grand piano and breakfast service",
  },
  {
    id: 18,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-TBxccS6j1t84zYefqwYXZVNfkjFpiY.jpeg",
    category: "Rooms",
    title: "Deluxe King Room - Seating",
    description: "Luxurious room with comfortable seating area and elegant decor",
  },
  {
    id: 19,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-YclWa8RLSD5Zn7OYISTNCCeRK5iRng.jpeg",
    category: "Rooms",
    title: "Deluxe King Room - Suite View",
    description: "Spacious suite with ensuite bathroom and premium amenities",
  },
  {
    id: 20,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-277irGHHlkxtmLmuzS0NPpGVmOOrqe.jpeg",
    category: "Rooms",
    title: "Deluxe King Room - Living Area",
    description: "Comfortable living area with modern furnishings and city views",
  },
  {
    id: 21,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-pnf6flPriwONBezHXrasoXR5uKZuHC.jpeg",
    category: "Rooms",
    title: "Deluxe King Room - Window Seating",
    description: "Intimate seating area by the window with tea and coffee facilities",
  },
  {
    id: 22,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-Superior-Double-Room-Ensuite-Room-2.JPG-zByidrTXnmGgDj7y2N6UZXn3kZAZNC.jpeg",
    category: "Rooms",
    title: "Superior Double Room - Modern Layout",
    description: "Spacious superior room with contemporary furnishings and flat-screen TV",
  },
  {
    id: 23,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-Superior-Double-Room-Ensuite-Room-2.JPG-hRXQfaH7EmSdWDrhi52rbZGdLnwJiT.jpeg",
    category: "Rooms",
    title: "Superior Double Room - Furniture Detail",
    description: "Close-up view of elegant wooden furniture and seating arrangement",
  },
  {
    id: 24,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Double%20King%20Room%20Ensuite%20Room%207.JPG-n3L2NQ6xfOH9xdxpaAVnKtixwL0Sh0.jpeg",
    category: "Rooms",
    title: "Double King Room - Cozy Atmosphere",
    description: "Intimate king room with warm lighting and sophisticated decor",
  },
  {
    id: 25,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Superior-Double-Room-Ensuite-Room-2.JPG-3FXMJiMaRD7iryHr0o8IfvyHgBrBaE.jpeg",
    category: "Rooms",
    title: "Superior Double Room - Premium View",
    description: "Luxurious room with purple accent pillows and modern amenities",
  },
  {
    id: 26,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Double%20King%20Room%20Ensuite%20Room%205.JPG-BOkKz5E4wWEF1fyCWYaT3qe59hUWef.jpeg",
    category: "Rooms",
    title: "Double King Room - Work Area",
    description: "Professional workspace with wooden desk and city views",
  },
  {
    id: 27,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Double%20King%20Room%20Ensuite%20Room%207.JPG-7afn6hZKoKMzEU4xAtuAVcKKSv0jpP.jpeg",
    category: "Rooms",
    title: "Double King Room - Bedside Detail",
    description: "Elegant bedside area with luxury bedding and warm lighting",
  },
  {
    id: 28,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Double%20King%20Room%20Ensuite%20Room%207.JPG-cKxkdwCHgNWDROw993qzy0yP2Yg1Qs.jpeg",
    category: "Rooms",
    title: "Double King Room - Ambient Lighting",
    description: "Beautiful room showcasing crystal lamps and premium furnishings",
  },
  {
    id: 29,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-Double%20King%20Room%20Ensuite%20Room%205.JPG-BSPqA9vWDIZ7kZLc9FnKAfRmFcWiPu.jpeg",
    category: "Rooms",
    title: "Luxury Ensuite Bathroom",
    description: "Premium bathroom with dual walk-in showers and marble finishes",
  },
  {
    id: 30,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-Double-King-Room-Ensuite-Room-1.JPG-gRSUErSKKY211Hf7kaNHLaoGndXypM.jpeg",
    category: "Rooms",
    title: "Double King Room - Seating Area",
    description: "Comfortable seating area with wooden wardrobe and tea facilities",
  },
  {
    id: 31,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Double-King-Room-Ensuite-Room-1.JPG-Tw2biMANhxxWo5XfgVPOeWrdPNfskb.jpeg",
    category: "Rooms",
    title: "Double King Room - Elegant Layout",
    description: "Spacious room with king bed, wooden furniture, and crystal lamps",
  },
  {
    id: 32,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-Double-King-Room-Ensuite-Room-3-min.JPG-kMgEQPy1WHcFAHyFhDHBPHl5NjPXjq.jpeg",
    category: "Rooms",
    title: "Luxury Bathroom Sink",
    description: "Premium bathroom sink area with marble tiling and luxury toiletries",
  },
  {
    id: 33,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-Double-King-Room-Ensuite-Room-1.JPG-LnOqsE9xSud6E6ARcX7zpFoSQdP79u.jpeg",
    category: "Rooms",
    title: "Ensuite Bathroom",
    description: "Elegant ensuite with marble finishes and walk-in shower",
  },
  {
    id: 34,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Double-King-Room-Ensuite-Room-1.JPG-DiqzaC1dHpR2ox0NsAxrYv5TMNELcA.jpeg",
    category: "Rooms",
    title: "Double King Room - Bay Window",
    description: "Spacious room with bay windows and sophisticated furnishings",
  },
  {
    id: 35,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-Double-King-Room-Ensuite-Room-3.JPG-GC7gvaSXYOPnVoMWx7NxVk1GszMTsA.jpeg",
    category: "Rooms",
    title: "Tea & Coffee Facilities",
    description: "Elegant wooden desk with premium tea and coffee amenities",
  },
  {
    id: 36,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Double-King-Room-Ensuite-Room-3.JPG-BgmPEIxVb4pJ2F5JvuWBIwgMzBR6q5.jpeg",
    category: "Rooms",
    title: "Double King Room - Traditional Decor",
    description: "Classic room with traditional furnishings and warm lighting",
  },
  {
    id: 37,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Double-King-Room-Ensuite-Room-3-min.JPG-Kl3qaC1wsuTQdqL0ULZQGnrRTmZb3k.jpeg",
    category: "Rooms",
    title: "Double King Room - Modern Amenities",
    description: "Contemporary room with flat-screen TV and luxury bathrobes",
  },
  {
  id: 38,
  src: "/images/8-Double-King-Room-Ensuite-Room-3.jpg",
  category: "Rooms",
  title: "Double King Room - Elegant Comfort",
  description: "Beautifully appointed room with wooden furniture and modern amenities",
},
  {
    id: 39,
    src: "/images/double-king-room-3-alt.jpg",
    category: "Rooms",
    title: "Double King Room - Classic Style",
    description: "Traditional room with warm lighting and sophisticated decor",
  },
  {
    id: 40,
    src: "/images/double-king-room-7-detail.jpg",
    category: "Rooms",
    title: "Double King Room - Luxury Bedding",
    description: "Premium bedding with decorative pillows and elegant furnishings",
  },
  {
    id: 41,
    src: "/images/dining-breakfast-buffet.jpg",
    category: "Lounge",
    title: "Breakfast Buffet Area",
    description: "Elegant buffet setup with fresh flowers and premium breakfast items",
  },
  {
    id: 42,
    src: "/images/hotel-reception-lounge.jpg",
    category: "Lounge",
    title: "Reception Lounge Area",
    description: "Comfortable seating area with leather furniture and tropical plants",
  },
  {
    id: 43,
    src: "/images/dining-room-chandelier.jpg",
    category: "Lounge",
    title: "Formal Dining Room",
    description: "Elegant dining room with chandelier and grandfather clock",
  },
  {
    id: 44,
    src: "/images/dining-piano-detail.jpg",
    category: "Lounge",
    title: "Piano Detail",
    description: "Close-up of upright piano with breakfast table setting",
  },
  {
    id: 45,
    src: "/images/dining-piano-room.jpg",
    category: "Lounge",
    title: "Piano Dining Room",
    description: "Spacious dining area featuring grand piano and multiple seating areas",
  },
  {
    id: 46,
    src: "/images/dining-main-room.jpg",
    category: "Lounge",
    title: "Main Dining Hall",
    description: "Grand dining room with piano, chandelier, and elegant breakfast setup",
  },
  {
    id: 47,
    src: "/images/crystal-chandelier.jpg",
    category: "Lounge",
    title: "Crystal Chandelier Entrance",
    description: "Stunning crystal chandelier with multiple crystal spheres and elegant lighting during the nighttime",
  },
  {
  id: 48,
  src: "/images/2-chandelier-redstone.jpg",
  category: "Lounge",
  title: "Redstone Crystal Chandelier",
  description: "Stunning crystal chandelier with multiple crystal spheres and elegant lighting",
},

]

const categories = ["All", "Rooms", "Lounge", "Surroundings"]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter((image) => image.category === selectedCategory))
    }
  }, [selectedCategory])

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Explore Our Property</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our luxury accommodations and elegant spaces
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-white/80 text-xs">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Ready to Experience The Redstone?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book your stay and experience the luxury and elegance you've seen in our gallery.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                Book Your Stay
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <Lightbox
          images={filteredImages}
          currentImageId={lightboxImage}
          onClose={closeLightbox}
          onNavigate={setLightboxImage}
        />
      )}
    </section>
  )
}
