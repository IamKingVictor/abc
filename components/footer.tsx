import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">
              Agape Bible Club
            </h3>
            <p className="text-sm opacity-90">
              A community united in God's love through Scripture study and
              fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:opacity-80 transition-opacity"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:opacity-80 transition-opacity"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/devotionals"
                  className="hover:opacity-80 transition-opacity"
                >
                  Devotionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <p className="text-sm mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@agapebibleclub.com
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:opacity-80 transition-opacity"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {currentYear} Agape Bible Club. All rights reserved. | "God's
            Unconditional Love"
          </p>
        </div>
      </div>
    </footer>
  )
}
