import { Navigation } from "../components/navigation"
import { HeroSlider } from "../components/hero-slider"
import { FeaturesSection } from "../components/features-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { Footer } from "../components/footer"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
