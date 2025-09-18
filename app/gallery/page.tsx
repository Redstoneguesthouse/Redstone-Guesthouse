import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { PhotoGallery } from "@/components/photo-gallery"

export const metadata = {
  title: "Gallery - The Redstone Guest House | Luxury Hotel Photos Blackpool",
  description:
    "Explore our photo gallery showcasing the luxury rooms, elegant lounge areas, and beautiful surroundings of The Redstone Guest House in Blackpool.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <PhotoGallery />
      <Footer />
    </main>
  )
}
