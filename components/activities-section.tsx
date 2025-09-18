"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const activities = [
  "Bird watching",
  "Bowling",
  "Cycling",
  "Dancing",
  "Fine dining",
  "Fishing",
  "Gambling",
  "Golf (incl. mini)",
  "Horse riding",
  "Karaoke",
  "Kayaking",
  "Mountain biking",
  "Art galleries & museums",
  "Rock climbing",
  "Sailing",
  "Shopping/Antiques & fairs",
  "Skating rink",
  "Theatre",
  "Walking",
  "Water activities",
  "Water-skiing",
  "Windsurfing",
]

export function ActivitiesSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayedActivities = isExpanded ? activities : activities.slice(0, 12)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Activities & Attractions</h2>
            <p className="text-lg text-muted-foreground">
              Discover the many activities available in and around Blackpool
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {displayedActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 text-center border hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-foreground font-medium text-sm">{activity}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)} className="px-6 py-2">
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Activities <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
