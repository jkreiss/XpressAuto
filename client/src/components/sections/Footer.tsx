import { Link } from "wouter";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-20 pb-8 border-t border-black/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2 mb-6">
              <span className="text-primary">Xpress</span> Automotive
            </button>
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
                <button onClick={scrollToTop} className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-primary transition-colors font-medium">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</button>
              </li>
              <li>
                <button onClick={() => scrollTo('reviews')} className="text-muted-foreground hover:text-primary transition-colors font-medium">Reviews</button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6 tracking-wide uppercase">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground font-medium">Diagnostics</li>
              <li className="text-muted-foreground font-medium">General Repairs</li>
              <li className="text-muted-foreground font-medium">WOF / Inspections</li>
              <li className="text-muted-foreground font-medium">Emergency Repairs</li>
              <li className="text-muted-foreground font-medium">Automotive Servicing</li>
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

        {/* <div className="pt-8 border-t border-border text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm font-medium">
            © {new Date().getFullYear()} Xpress Automotive. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/40 font-medium">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div> */}
      </div>

      {/* Decorative accent light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(closest-side,var(--color-primary)_0%,transparent_100%)] opacity-5 z-0 pointer-events-none translate-x-1/3 -translate-y-1/3" />
    </footer>
  );
}