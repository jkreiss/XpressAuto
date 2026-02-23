import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-xl py-3 border-b-2 border-primary/20" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button onClick={scrollToTop} className="text-2xl font-black tracking-tighter text-foreground flex items-center gap-2 uppercase" data-testid="link-home">
          <span className="text-primary italic">Xpress</span> Automotive
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={scrollToTop} className="text-xs font-black tracking-widest text-foreground/70 hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-primary pb-1" data-testid="nav-home">Home</button>
          <button onClick={() => scrollTo('services')} className="text-xs font-black tracking-widest text-foreground/70 hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-primary pb-1" data-testid="nav-services">Services</button>
          <button onClick={() => scrollTo('reviews')} className="text-xs font-black tracking-widest text-foreground/70 hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-primary pb-1" data-testid="nav-reviews">Reviews</button>
          <button onClick={() => scrollTo('contact')} className="text-xs font-black tracking-widest text-foreground/70 hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-primary pb-1" data-testid="nav-contact">Contact</button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center border-2 border-foreground/20 bg-transparent px-6 py-2 text-xs font-black text-foreground uppercase tracking-widest hover:bg-foreground/5 transition-all" data-testid="button-contact-us">
            Get Quote
          </button>
          <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" data-testid="link-call-now">
            <Phone className="w-3 h-3" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}