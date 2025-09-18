import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-serif font-bold text-secondary mb-4">Redstone</div>
            <p className="text-background/80 mb-6 leading-relaxed">
              A 5★ Boutique Guest House in the heart of Blackpool, offering luxury accommodation with exceptional
              service.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-background/80 hover:text-secondary transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background/80 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  9 Alexandra Road
                  <br />
                  Blackpool, Lancashire
                  <br />
                  FY1 6BU, United Kingdom
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:01253344004" className="text-background/80 hover:text-secondary transition-colors">
                  01253344004
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:redstoneblkp@gmail.com"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  redstoneblkp@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social & Reviews */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Follow & Review</h3>
            <div className="space-y-3">
              <a
                href="https://www.tripadvisor.co.uk/Hotel_Review-g186332-d2062913-Reviews-The_Redstone-Blackpool_Lancashire_England.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-background/80 hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">TA</span>
                </div>
                <span>TripAdvisor</span>
              </a>
              <a
                href="https://www.booking.com/Share-E5RGKe9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-background/80 hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">B</span>
                </div>
                <span>Booking.com</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063545323243"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-background/80 hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">f</span>
                </div>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm text-center md:text-left">
              © 2025 Redstone Guest House, 9 Alexandra Road, Blackpool, Lancashire, FY1 6BU, United Kingdom
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-background/60 hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-background/60 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
