import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-8 border-t border-black/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-6" aria-label="Xpress Automotive home">
              <Image
                src="/images/xpresslogo-nobg.png"
                alt="Xpress Automotive"
                width={260}
                height={80}
                className="h-25 w-auto"
                priority={false}
              />
            </Link>
            <p className="text-muted-foreground mb-8 leading-relaxed pr-4">
              Helping you get on the road and stay on the road.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#hero" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-muted-foreground hover:text-primary transition-colors font-medium">Reviews</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6 tracking-wide uppercase">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground font-medium">Servicing & WOF</li>
              <li className="text-muted-foreground font-medium">General Repairs & Diagnostics</li>
              <li className="text-muted-foreground font-medium">Wheels & Tyres</li>
              <li className="text-muted-foreground font-medium">Parts Store</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6 tracking-wide uppercase">Contact Info</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=9+Seddon+Street,+Raetihi+4632,+New+Zealand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">9 Seddon Street, Raetihi 4632</span>
                </a>
              </li>
              <li>
                <a href="tel:0210774907" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">0210 774 907</span>
                </a>
              </li>
              <li>
                <a href="mailto:xpress_autos@hotmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">xpress_autos@hotmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Decorative accent light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(closest-side,var(--color-primary)_0%,transparent_100%)] opacity-5 z-0 pointer-events-none translate-x-1/3 -translate-y-1/3" />
    </footer>
  );
}
