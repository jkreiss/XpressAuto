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
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold tracking-wide uppercase text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Your Local Automotive Specialists
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 max-w-5xl leading-[1.1]">
          Fast. Reliable. <span className="text-primary relative inline-block">
            Trusted.
            {/* Underline accent */}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 blur-[2px]"></span>
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-medium text-white/70 mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 leading-relaxed">
          Professional automotive repair and maintenance services. We get you back on the road safely and efficiently.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
          <button 
            onClick={() => scrollTo('contact')}
            className="group relative inline-flex items-center justify-center gap-3 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] transition-all w-full sm:w-auto overflow-hidden"
            data-testid="button-book-now"
          >
            {/* subtle shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></span>
            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white shadow-sm hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto"
            data-testid="button-our-services"
          >
            Our Services
          </button>
        </div>
      </div>
      
      {/* Decorative abstract lights */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] z-0 pointer-events-none translate-x-1/3 translate-y-1/3" />
    </section>
  );
}