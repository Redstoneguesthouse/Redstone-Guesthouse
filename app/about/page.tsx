import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { FacilitiesGrid } from "@/components/facilities-grid"
import { ActivitiesSection } from "@/components/activities-section"
import { CleaningSafetySection } from "@/components/cleaning-safety-section"
import { AccessibilitySection } from "@/components/accessibility-section"

export const metadata = {
  title: "About Us - The Redstone Guest House | Luxury Boutique Hotel Blackpool",
  description:
    "Discover The Redstone Guest House - luxury accommodation in the heart of Blackpool with free parking, exceptional service, and modern amenities.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <FacilitiesGrid />
      <ActivitiesSection />
      <CleaningSafetySection />
      <AccessibilitySection />
      <Footer />
    </main>
  )
}
