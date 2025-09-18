"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Clock, CreditCard, Users, Car, Shield, Gavel } from "lucide-react"
import { Button } from "@/components/ui/button"

const termsData = [
  {
    id: "checkin-checkout",
    icon: Clock,
    title: "Check-in & Check-out",
    content: [
      "Check-in: 15:00 to 22:00 daily",
      "Check-out: by 11:00",
      "Early check-in or late check-out may be available upon request and subject to availability",
      "Please contact us if you expect to arrive outside of check-in hours",
      "Valid photo identification required at check-in",
    ],
  },
  {
    id: "children-policy",
    icon: Users,
    title: "Children & Occupancy",
    content: [
      "Children are welcome at The Redstone Guest House",
      "Deluxe King Room: accommodates up to 3 guests (one child aged 5-12 years)",
      "Superior Double Room: accommodates up to 3 guests (one child aged 5-12 years)",
      "King Double Ensuite: accommodates up to 2 guests",
      "Breakfast is included for all guests including children",
      "Additional charges may apply for extra occupancy beyond stated room capacity",
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payment & Pricing",
    content: [
      "We accept all major credit and debit cards",
      "American Express is NOT accepted",
      "Best Price Guarantee when booking direct with us",
      "Prices are quoted per room per night and include breakfast",
      "All prices include VAT at the current rate",
      "Payment is required at the time of booking or upon arrival as specified",
      "Additional services and incidentals will be charged separately",
    ],
  },
  {
    id: "cancellation",
    icon: Shield,
    title: "Cancellation & Prepayment",
    content: [
      "Cancellation and prepayment policies vary by rate and season",
      "Specific terms will be clearly stated at the time of booking",
      "Booking direct with us often provides more flexible cancellation terms",
      "Cancellations must be made in writing (email acceptable)",
      "No-shows will be charged the full amount of the reservation",
      "We recommend booking with flexible rates when possible",
    ],
  },
  {
    id: "parking",
    icon: Car,
    title: "Parking",
    content: [
      "Free secure parking available when booking direct",
      "Advance reservation of parking is recommended",
      "Parking is subject to availability",
      "One parking space per room reservation",
      "Guests are responsible for their vehicles and belongings",
      "The hotel is not liable for any damage or theft to vehicles",
    ],
  },
  {
    id: "policies",
    icon: Gavel,
    title: "Property Policies",
    content: [
      "No smoking throughout the property - this is strictly enforced",
      "No parties or events permitted on the premises",
      "No pets allowed (service animals excepted)",
      "Quiet hours: 22:00 to 08:00",
      "Guests are responsible for any damage to property during their stay",
      "Additional cleaning fees may apply for excessive mess or smoking violations",
      "Management reserves the right to refuse service or ask guests to leave for policy violations",
    ],
  },
  {
    id: "liability",
    icon: Shield,
    title: "Liability & Force Majeure",
    content: [
      "The hotel's liability is limited to the cost of accommodation booked",
      "We are not liable for loss or damage to personal belongings",
      "Guests are advised to arrange appropriate travel insurance",
      "We are not liable for circumstances beyond our reasonable control (force majeure)",
      "This includes but is not limited to: natural disasters, government actions, strikes, or pandemics",
      "In case of force majeure, we will work with guests to reschedule or provide appropriate alternatives",
    ],
  },
]

export function TermsContent() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Booking Terms</h2>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before making your reservation
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {termsData.map((section) => (
              <div key={section.id} className="bg-card rounded-xl border overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6 animate-slide-up">
                    <ul className="space-y-3 ml-14">
                      {section.content.map((item, index) => (
                        <li key={index} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legal Notice */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Legal Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong>Governing Law:</strong> These terms and conditions are governed by the laws of England and
                Wales.
              </p>
              <p>
                <strong>Jurisdiction:</strong> Any disputes arising from these terms will be subject to the exclusive
                jurisdiction of the English courts.
              </p>
              <p>
                <strong>Entire Agreement:</strong> These terms constitute the entire agreement between the guest and The
                Redstone Guest House.
              </p>
              <p className="text-sm">
                Full terms and conditions are confirmed at the time of booking. The Redstone Guest House reserves the
                right to update these terms at any time.
              </p>
            </div>
          </div>

          {/* Contact & Booking */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Questions About Our Terms?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              If you have any questions about our terms and conditions, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                  Book Your Stay
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
