"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface Room {
  id: string
  name: string
  subtitle: string
  price: string
  mainImage: string
  gallery: string[]
  features: string[]
  amenities: Array<{ icon: any; label: string }>
}

interface RoomModalProps {
  room: Room
  onClose: () => void
}

export function RoomModal({ room, onClose }: RoomModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.gallery.length) % room.gallery.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground">{room.name}</h2>
            <p className="text-muted-foreground">{room.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Image Gallery */}
        <div className="relative h-80 bg-muted">
          <img
            src={room.gallery[currentImageIndex] || "/placeholder.svg"}
            alt={`${room.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {room.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {room.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Amenities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Room Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <amenity.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Room Features</h3>
            <ul className="space-y-2">
              {room.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                Book This Room
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
