"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Shield, Sparkles, Users, Heart } from "lucide-react"

const cleaningSafetyItems = [
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    items: [
      "Professionally cleaned and disinfected daily & between stays",
      "High-touch surfaces disinfected regularly",
      "Linens washed per local guidelines (above 60°C)",
      "Mattress/pillow protectors & washable duvets",
    ],
  },
  {
    icon: Shield,
    title: "Health & Safety",
    items: [
      "Hand sanitiser available throughout property",
      "Social distancing measures in place",
      "First aid kit readily available",
      "Staff safety protocols strictly followed",
    ],
  },
  {
    icon: Users,
    title: "Guest Safety",
    items: [
      "Masks available for guests when required",
      "Staggered check-in procedures",
      "Temperature checks for staff",
      "Contactless service options available",
    ],
  },
  {
    icon: Heart,
    title: "Dining Safety",
    items: [
      "Socially-distanced dining arrangements",
      "Staggered dining time slots",
      "Sanitised tableware and surfaces",
      "Enhanced food safety protocols",
    ],
  },
]

export function CleaningSafetySection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Cleaning & Safety Protocols
            </h2>
            <p className="text-lg text-muted-foreground">Your health and safety are our top priorities</p>
          </div>

          <div className="space-y-4">
            {cleaningSafetyItems.map((section, index) => (
              <div key={index} className="bg-card rounded-xl border overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  </div>
                  {expandedItems.includes(index) ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {expandedItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <ul className="space-y-2 ml-14">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
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
        </div>
      </div>
    </section>
  )
}
