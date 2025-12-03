import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              A R <span className="text-primary">Classes</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Quality coaching for 1st to 10th standard students. Building strong foundations for academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Facilities", path: "/facilities" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/70 text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:9763852327" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                9763852327
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Vighnaharta Apartment, Opp. Hari Om Super Market, Sudarshan Nagar, Lane 2, Pimple Gurav, Pune-411061</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Clock className="h-4 w-4 shrink-0" />
                Open till 9 PM
              </div>
            </div>
          </div>

          {/* Boards */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Boards We Cover</h4>
            <div className="flex flex-wrap gap-2">
              {["CBSE", "ICSE", "State Board"].map((board) => (
                <span
                  key={board}
                  className="px-3 py-1 bg-background/10 rounded-full text-sm text-background/80"
                >
                  {board}
                </span>
              ))}
            </div>
            <p className="mt-4 text-background/70 text-sm">
              Classes 1st to 10th Standard
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} A R Classes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
