import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "Contact Us - The Redstone Guest House | Get in Touch Blackpool Hotel",
  description:
    "Contact The Redstone Guest House in Blackpool. Located at 9 Alexandra Road, FY1 6BU. Call 01253344004 or email redstoneblkp@gmail.com for bookings and enquiries.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  )
}
