"use client";

import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-background min-h-175 flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90 z-10" />
        {/*<Image*/}
        {/*  src={heroImage}*/}
        {/*  alt="Mechanic working on engine"*/}
        {/*  fill*/}
        {/*  sizes="100vw"*/}
        {/*  className="w-full h-full object-cover object-[center_30%] opacity-80"*/}
        {/*/>*/}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-left text-left">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-1 text-foreground/90 leading-tight"
          style={{ fontFamily: "\"Georgia Pro\", Georgia, \"Times New Roman\", serif", fontWeight: 600 }}
        >
          <span className="text-primary relative inline-block">
            XPRESS
          </span> AUTOMOTIVE
        </h1>
        <p
          className="text-3xl md:text-4xl lg:text-5xl text-foreground/60 mb-6 leading-tight"
          style={{ fontFamily: "\"Georgia Pro\", Georgia, \"Times New Roman\", serif", fontWeight: 600 }}
        >
          Raetihi
        </p>
        <p className="text-lg md:text-2xl font-medium text-foreground/70 mb-12 max-w-2xl leading-relaxed">
          Welcome to your trusted local automotive repair shop
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ">
          <a
            href="tel:+64210774907"
            className="sm:hidden group relative inline-flex items-center justify-center gap-3 rounded-lg bg-foreground text-background px-8 py-4 text-lg font-bold brightness-110 hover:scale-105 transition-all w-full cursor-pointer"
            data-testid="button-call-now-mobile"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex group relative items-center justify-center gap-3 rounded-lg bg-foreground text-background px-8 py-4 text-lg font-bold brightness-110 hover:scale-105 transition-all w-full sm:w-auto cursor-pointer"
            data-testid="button-book-now"
          >
            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary backdrop-blur-sm px-8 py-4 text-lg font-bold text-primary-foreground shadow-sm hover:scale-105 hover:brightness-110 transition-all w-full sm:w-auto cursor-pointer"
            data-testid="button-our-services"
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Decorative abstract lights */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[radial-gradient(closest-side,var(--color-primary)_0%,transparent_100%)] opacity-20 z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(closest-side,var(--color-primary)_0%,transparent_100%)] opacity-10 z-0 pointer-events-none translate-x-1/3 translate-y-1/3" />
    </section >
  );
}
