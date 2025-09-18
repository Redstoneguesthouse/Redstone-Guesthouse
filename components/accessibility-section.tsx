import { Accessibility, Lightbulb, Luggage, Stars as Stairs, Tv, Wifi } from "lucide-react"

const accessibilityFeatures = [
  {
    icon: Luggage,
    title: "Luggage Assistance",
    description: "Our staff are happy to assist with luggage throughout your stay",
  },
  {
    icon: Stairs,
    title: "Building Access",
    description: "Please note there are steps at the entrance and between floors",
  },
  {
    icon: Lightbulb,
    title: "Enhanced Lighting",
    description: "Bright hallways with movement-sensor lighting for safety",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    description: "High-speed Wi-Fi available throughout the property",
  },
  {
    icon: Tv,
    title: "Accessible Entertainment",
    description: "All TVs equipped with subtitle capabilities",
  },
  {
    icon: Accessibility,
    title: "Safety Standards",
    description: "Regularly inspected portable electrical equipment",
  },
]

export function AccessibilitySection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Accessibility Information
            </h2>
            <p className="text-lg text-muted-foreground">
              We strive to accommodate all guests and provide assistance where needed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Need Special Assistance?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have specific accessibility requirements or need assistance during your stay, please contact us in
              advance so we can ensure your comfort and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01253344004"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Call: 01253344004
              </a>
              <a
                href="mailto:redstoneblkp@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
