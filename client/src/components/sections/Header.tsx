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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-4 border-b border-black/5" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button onClick={scrollToTop} className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2" data-testid="link-home">
          <span className="text-primary">Xpress</span> Automotive
        </button>
        {/* <button onClick={scrollToTop} className="flex items-center" data-testid="link-home">
          <img src="/images/xpresslogo.jpg" alt="Xpress Automotive Logo" className="h-12 w-auto" />
        </button> */}

        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={scrollToTop} className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase" data-testid="nav-home">Home</button>
          <button onClick={() => scrollTo('services')} className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase" data-testid="nav-services">Services</button>
          <button onClick={() => scrollTo('reviews')} className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase" data-testid="nav-reviews">Reviews</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase" data-testid="nav-contact">Contact</button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-bold text-foreground shadow-sm hover:bg-black/5 transition-all" data-testid="button-contact-us">
            Contact Us
          </button>
          <a href="tel:+64210774907" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all" data-testid="link-call-now">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}