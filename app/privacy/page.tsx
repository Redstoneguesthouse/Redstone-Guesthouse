import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PrivacyHero } from "@/components/privacy-hero"
import { PrivacyContent } from "@/components/privacy-content"

export const metadata = {
  title: "Privacy Policy - The Redstone Guest House | Data Protection Blackpool",
  description:
    "Our privacy policy explains how The Redstone Guest House collects, uses, and protects your personal data in compliance with GDPR.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </main>
  )
}
