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
    <footer className="bg-black pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="text-2xl font-black tracking-tight text-white flex items-center gap-2 mb-6">
              <span className="text-primary">Xpress</span> Automotive
            </button>
            <p className="text-white/60 mb-8 leading-relaxed pr-4">
              Your local trusted automotive repair specialists. Fast, reliable, and professional service you can count on.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={scrollToTop} className="text-white/60 hover:text-primary transition-colors font-medium">Home</button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="text-white/60 hover:text-primary transition-colors font-medium">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="text-white/60 hover:text-primary transition-colors font-medium">Services</button>
              </li>
              <li>
                <button onClick={() => scrollTo('reviews')} className="text-white/60 hover:text-primary transition-colors font-medium">Reviews</button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="text-white/60 hover:text-primary transition-colors font-medium">Contact</button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-white/60 font-medium">Diagnostics</li>
              <li className="text-white/60 font-medium">General Repairs</li>
              <li className="text-white/60 font-medium">WOF / Inspections</li>
              <li className="text-white/60 font-medium">Emergency Repairs</li>
              <li className="text-white/60 font-medium">Automotive Servicing</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 leading-relaxed font-medium">123 Mechanic Lane, Auto City, AC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 font-medium">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 font-medium">info@xpressautomotive.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Xpress Automotive. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative accent light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] z-0 pointer-events-none translate-x-1/3 -translate-y-1/3" />
    </footer>
  );
}