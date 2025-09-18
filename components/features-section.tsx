import { Wifi, Car, Coffee, Award } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Book direct for the best rates and exclusive benefits",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Complimentary secure parking when you book direct",
  },
  {
    icon: Coffee,
    title: "Cooked-to-order Breakfast",
    description: "Fresh breakfast prepared to your preferences",
  },
  {
    icon: Wifi,
    title: "Superfast Wi-Fi",
    description: "High-speed internet throughout the property",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Why Choose Redstone?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury accommodation with exceptional service and amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
