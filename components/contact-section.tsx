import { ContactDetails } from "@/components/contact-details"
import { ContactForm } from "@/components/contact-form"
import { ContactMap } from "@/components/contact-map"
import { TransportInfo } from "@/components/transport-info"

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Contact Details & Form */}
          <div className="space-y-8">
            <ContactDetails />
            <ContactForm />
          </div>

          {/* Right Side - Map */}
          <div className="lg:sticky lg:top-8">
            <ContactMap />
          </div>
        </div>

        {/* Transport Information */}
        <TransportInfo />
      </div>
    </section>
  )
}
