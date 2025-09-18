"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Manchester",
    rating: 5,
    text: "Absolutely stunning accommodation! The attention to detail and luxury touches made our stay unforgettable. The breakfast was exceptional and the location perfect for exploring Blackpool.",
  },
  {
    name: "Michael Thompson",
    location: "London",
    rating: 5,
    text: "The Redstone exceeded all expectations. Beautiful rooms, impeccable service, and the free parking was a huge bonus. Will definitely be returning for our next Blackpool visit.",
  },
  {
    name: "Emma Wilson",
    location: "Birmingham",
    rating: 5,
    text: "A true boutique experience in the heart of Blackpool. The room was spacious and elegantly decorated, and the staff went above and beyond to ensure our comfort.",
  },
  {
    name: "David Roberts",
    location: "Leeds",
    rating: 5,
    text: "Outstanding value for money. The luxury amenities, prime location, and exceptional breakfast made this the perfect base for our seaside getaway.",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">What Our Guests Say</h2>
          <p className="text-lg text-muted-foreground">
            Discover why guests choose The Redstone for their Blackpool stay
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-secondary fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-muted-foreground">{testimonials[currentTestimonial].location}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
