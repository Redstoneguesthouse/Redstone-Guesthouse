import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactDetails() {
  return (
    <div className="bg-card rounded-2xl p-8 border">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Address</h3>
            <p className="text-muted-foreground leading-relaxed">
              9 Alexandra Road
              <br />
              Blackpool, Lancashire
              <br />
              FY1 6BU, United Kingdom
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <a
              href="tel:01253344004"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              01253344004
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a
              href="mailto:redstoneblkp@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              redstoneblkp@gmail.com
            </a>
          </div>
        </div>

        {/* Check-in Times */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Check-in Hours</h3>
            <p className="text-muted-foreground">
              Check-in: 15:00 - 22:00
              <br />
              Check-out: by 11:00
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href="tel:01253344004">Call Now</a>
        </Button>
        <Button
          variant="outline"
          asChild
          className="flex-1 border-primary text-primary hover:bg-primary/10 bg-transparent"
        >
          <a href="mailto:redstoneblkp@gmail.com">Send Email</a>
        </Button>
      </div>
    </div>
  )
}
