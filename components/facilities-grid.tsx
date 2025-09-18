import { Briefcase, Shirt, Sofa, Phone, Wifi, Car, Monitor, Printer } from "lucide-react"

const facilities = [
  { icon: Briefcase, title: "Baggage Store", description: "Secure storage for your luggage" },
  { icon: Shirt, title: "Dry Cleaning", description: "Professional cleaning services" },
  { icon: Sofa, title: "Lounge", description: "Comfortable common areas" },
  { icon: Phone, title: "Wake-up Call", description: "Personal wake-up service" },
  { icon: Wifi, title: "Free High-Speed Internet", description: "Complimentary Wi-Fi throughout" },
  { icon: Car, title: "Secure Parking", description: "Advance reservation recommended" },
  { icon: Monitor, title: "Desk Working Station", description: "Dedicated workspace in rooms" },
  { icon: Printer, title: "Business Services", description: "Meeting, printing, photocopy, fax" },
]

export function FacilitiesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Facilities & Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <facility.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
              <p className="text-muted-foreground text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
