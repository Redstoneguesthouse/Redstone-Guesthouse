"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const heroSlides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-redstone-hotel-reception-blackpool.jpg.JPG-dTaWASsWRDxJ8CpI1uxQUrhbBfAVKk.jpeg",
    title: "Luxury Accommodation",
    subtitle: "Experience elegance in the heart of Blackpool",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-Y51E5NccwNCpjd56IpekDLVW8iNf3x.jpeg",
    title: "Deluxe King Rooms",
    subtitle: "Spacious rooms with partial sea views",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-redstone-hotel-reception-blackpool.jpg.JPG-P2ugfuZRfEOIFdhEUD72iR1GAKHdyN.jpeg",
    title: "Elegant Lounge",
    subtitle: "Relax in our sophisticated reception area",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-redstone-hotel-reception-blackpool.jpg.JPG-BYtA51UGhmqcdMxsK7tlo3kzcu5LCC.jpeg",
    title: "Award-Winning Service",
    subtitle: "Four in a Bed Winner - Channel 4",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 100)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(false)
    }, 100)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setIsTransitioning(false)
    }, 100)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 100)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] ease-linear hover:scale-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
              The Redstone Guest House
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light">A 5★ Boutique Guest House in Blackpool</p>
            <p
              className={`text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto transition-all duration-700 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95"
              >
                <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                  Book Your Stay
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 bg-transparent hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <a href="#about">Discover More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`relative w-12 h-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 disabled:cursor-not-allowed ${
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && isPlaying && (
              <div className="absolute inset-0 bg-primary rounded-full origin-left animate-progress" />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
