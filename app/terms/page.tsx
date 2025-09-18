import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TermsHero } from "@/components/terms-hero"
import { TermsContent } from "@/components/terms-content"

export const metadata = {
  title: "Terms & Conditions - The Redstone Guest House | Booking Terms Blackpool",
  description:
    "Read our terms and conditions for staying at The Redstone Guest House in Blackpool. Check-in times, payment policies, and booking conditions.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TermsHero />
      <TermsContent />
      <Footer />
    </main>
  )
}
