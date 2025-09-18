"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl lg:text-3xl font-serif font-bold text-primary transition-all duration-300 group-hover:scale-105">
              Redstone
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-foreground hover:text-primary transition-all duration-300 font-medium py-2 group ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-all duration-300 ${
                    pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 text-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 text-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 font-medium py-3 px-4 rounded-lg transform ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  } ${pathname === item.href ? "text-primary bg-muted/30" : ""}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div
                className={`pt-4 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${navItems.length * 50}ms` }}
              >
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  <a
                    href="https://www.theredstoneblackpool.co.uk/en-GB/rooms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
