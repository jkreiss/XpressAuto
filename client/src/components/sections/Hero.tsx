import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-black/5 min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Deep Overlay for Light Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        <img
          src="/images/diesel-mechanic-module.jpg"
          alt="Mechanic working on engine"
          className="w-full h-full object-cover object-[center_30%] opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-left text-left">
        {/* <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold tracking-wide uppercase text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Your Local Automotive Specialists
        </div> */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6 leading-relaxed">
          <span className="text-primary relative inline-block">
            Xpress
          </span> Automotive
        </h1>
        <p className="text-lg md:text-2xl font-medium text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Certified automotive repair and maintenance services.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ">
          <button
            onClick={() => scrollTo('contact')}
            className="group relative inline-flex items-center justify-center gap-3 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:scale-[1.02] transition-all w-full sm:w-auto cursor-pointer"
            data-testid="button-book-now"
          >
            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-background backdrop-blur-sm px-8 py-4 text-lg font-bold text-foreground shadow-sm hover:bg-black/10 hover:border-border transition-all w-full sm:w-auto cursor-pointer"
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