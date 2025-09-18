import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RoomsHero } from "@/components/rooms-hero"
import { RoomsGrid } from "@/components/rooms-grid"
import { RoomAmenities } from "@/components/room-amenities"

export const metadata = {
  title: "Rooms & Suites - The Redstone Guest House | Luxury Accommodation Blackpool",
  description:
    "Discover our luxury rooms and suites at The Redstone Guest House. Deluxe King Rooms with sea views, Superior Double Rooms, and King Double Ensuite rooms.",
}

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <RoomsHero />
      <RoomsGrid />
      <RoomAmenities />
      <Footer />
    </main>
  )
}
