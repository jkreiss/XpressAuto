import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Deep Overlay for Dark Theme */}
      <div className="absolute inset-0 z-0">
        {/* We use a multi-stop gradient to ensure text readability while keeping the moody aesthetic */}
        <div className="absolute inset-0 bg-background/90 bg-gradient-to-t from-background via-background/80 to-background/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 z-10" />
        <img 
          src="/images/hero-bg.jpg" 
          alt="Automotive Repair Workshop" 
          className="w-full h-full object-cover object-center grayscale-[30%] opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center border-l-4 border-primary bg-primary/10 px-6 py-2 text-xs font-black tracking-[0.2em] uppercase text-primary mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
          Local Workshop Since 2014
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 max-w-5xl leading-[0.9] uppercase italic">
          Fast. Reliable. <span className="text-primary block md:inline not-italic">
            Trusted.
          </span>
        </h1>
        <p className="text-lg md:text-xl font-bold text-white/60 mb-12 max-w-xl animate-in fade-in duration-700 delay-300 leading-tight uppercase tracking-tight">
          No corporate fluff. Just honest mechanical work from local experts.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
          <button 
            onClick={() => scrollTo('contact')}
            className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-xl font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(138,196,255,0.2)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all w-full sm:w-auto"
            data-testid="button-book-now"
          >
            Book Your Service
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 bg-transparent px-10 py-5 text-xl font-black uppercase tracking-widest text-white hover:bg-white/5 hover:border-white/40 transition-all w-full sm:w-auto"
            data-testid="button-our-services"
          >
            What We Do
          </button>
        </div>
      </div>
      
      {/* Decorative abstract lights */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] z-0 pointer-events-none translate-x-1/3 translate-y-1/3" />
    </section>
  );
}