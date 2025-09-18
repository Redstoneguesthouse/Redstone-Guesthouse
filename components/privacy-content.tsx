"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, User, Database, Share2, Shield, Cookie, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const privacyData = [
  {
    id: "who-we-are",
    icon: User,
    title: "Who We Are",
    content: [
      "The Redstone Guest House is a boutique hotel located at 9 Alexandra Road, Blackpool, Lancashire, FY1 6BU, United Kingdom",
      "We are the data controller for the personal information we collect about you",
      "Contact us at redstoneblkp@gmail.com for any privacy-related queries",
      "Phone: 01253344004",
      "We are committed to protecting your privacy and handling your data responsibly",
    ],
  },
  {
    id: "data-collection",
    icon: Database,
    title: "What Data We Collect",
    content: [
      "Identity and contact details (name, email, phone number, address)",
      "Booking details (dates, room preferences, special requests)",
      "Stay preferences and dietary requirements",
      "Communications between you and us",
      "Limited technical data including IP address for security purposes",
      "Cookie usage data (see our cookie policy below)",
      "Payment information is processed securely by our payment processors and not stored by us",
    ],
  },
  {
    id: "how-we-collect",
    icon: Mail,
    title: "How We Collect Data",
    content: [
      "Website contact forms and booking enquiries",
      "Email and phone communications",
      "Direct booking requests and correspondence",
      "Guest reviews and feedback",
      "Cookies and similar technologies on our website",
      "Analytics tools like Google Analytics (anonymized data)",
      "We do not collect data from third parties without your consent",
    ],
  },
  {
    id: "why-we-use-data",
    icon: Shield,
    title: "Why We Use Your Data",
    content: [
      "To deliver our accommodation services and manage bookings",
      "To provide customer support and respond to enquiries",
      "To comply with legal obligations (guest registers, invoicing)",
      "To prevent fraud and ensure security",
      "To improve our services and website functionality",
      "To send marketing communications (only with your consent)",
      "For legitimate business interests in providing excellent service",
    ],
  },
  {
    id: "legal-basis",
    icon: User,
    title: "Legal Basis for Processing",
    content: [
      "Contract: Processing necessary to fulfill your booking and stay",
      "Legitimate interests: Improving services, security, and business operations",
      "Consent: Marketing communications and non-essential cookies",
      "Legal obligation: Guest registers, tax records, and regulatory compliance",
      "We will always use the most appropriate legal basis for each type of processing",
    ],
  },
  {
    id: "data-sharing",
    icon: Share2,
    title: "How We Share Data",
    content: [
      "We do not sell your personal data to third parties",
      "Payment processors: To handle secure transactions (PCI-DSS compliant)",
      "Service providers: Email services, website hosting (under strict data agreements)",
      "Legal authorities: When required by law or to protect our rights",
      "Emergency services: If necessary for guest safety",
      "All third parties are required to protect your data to the same standards we maintain",
    ],
  },
  {
    id: "data-retention",
    icon: Database,
    title: "Data Retention",
    content: [
      "Booking and guest data: Retained for 7 years for tax and legal compliance",
      "Marketing communications: Until you unsubscribe or withdraw consent",
      "Website analytics: Anonymized data retained for 26 months",
      "CCTV footage: Retained for 30 days for security purposes",
      "Email correspondence: Retained for 3 years for customer service purposes",
      "We regularly review and delete data that is no longer necessary",
    ],
  },
  {
    id: "your-rights",
    icon: User,
    title: "Your Rights",
    content: [
      "Access: Request a copy of the personal data we hold about you",
      "Rectification: Ask us to correct inaccurate or incomplete data",
      "Erasure: Request deletion of your data (subject to legal requirements)",
      "Restriction: Ask us to limit how we use your data",
      "Portability: Request your data in a portable format",
      "Object: Opt out of marketing communications and certain processing",
      "Withdraw consent: For processing based on consent",
      "Lodge a complaint with the ICO if you're unhappy with our data handling",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Analytics",
    content: [
      "Essential cookies: Required for website functionality and security",
      "Analytics cookies: Google Analytics to understand website usage (anonymized)",
      "Marketing cookies: Only with your consent for personalized content",
      "You can control cookies through your browser settings",
      "Disabling cookies may affect website functionality",
      "We respect your browser's 'Do Not Track' settings",
      "Cookie preferences can be managed through our cookie banner",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational security measures",
      "SSL encryption for all data transmission",
      "Limited access to personal data on a need-to-know basis",
      "Regular security assessments and updates",
      "Staff training on data protection and privacy",
      "Secure disposal of physical documents containing personal data",
      "While we take security seriously, no system is 100% secure",
    ],
  },
]

export function PrivacyContent() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Your Privacy Matters to Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We are committed to protecting your personal data and respecting your privacy rights under GDPR
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {privacyData.map((section) => (
              <div key={section.id} className="bg-card rounded-xl border overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6 animate-slide-up">
                    <ul className="space-y-3 ml-14">
                      {section.content.map((item, index) => (
                        <li key={index} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact for Privacy */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Contact Us About Privacy</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                If you have any questions about this privacy policy or wish to exercise your data protection rights,
                please contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> redstoneblkp@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> 01253344004
                </p>
                <p>
                  <strong>Post:</strong> The Redstone Guest House, 9 Alexandra Road, Blackpool, Lancashire, FY1 6BU,
                  United Kingdom
                </p>
              </div>
              <p className="text-sm mt-4">
                This privacy policy was last updated on January 2025. We may update this policy from time to time, and
                we will notify you of any significant changes.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Questions or Concerns?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We're here to help with any privacy-related questions or requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="mailto:redstoneblkp@gmail.com">Email Privacy Team</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
