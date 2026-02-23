import { CheckCircle2 } from "lucide-react";

export function About() {
  const features = [
    "WOFs (Warrant of Fitness)",
    "Automotive Servicing",
    "Small Retail Store",
    "Mechanical Fixes"
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden industrial-border">
      <div className="rugged-texture absolute inset-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative border-4 border-white/5 bg-card p-2 shadow-[20px_20px_0px_0px_rgba(138,196,255,0.05)]">
              <img 
                src="/images/about-mechanic.jpg" 
                alt="Mechanic working on engine" 
                className="w-full h-auto object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-xl z-10">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary-foreground leading-none">10+</span>
                <span className="text-xs font-black uppercase tracking-widest text-primary-foreground/80 mt-1">Years on the tools</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">The Workshop</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] uppercase italic">
              Real Work.<br/>Real People.
            </h3>
            <p className="text-lg text-white/50 mb-10 leading-snug font-bold uppercase tracking-tight max-w-lg">
              We aren't a corporate chain. We're a local crew of mechanics who give a damn about your car. No jargon, just results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border-2 border-white/5 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-white font-black uppercase text-xs tracking-wider">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}