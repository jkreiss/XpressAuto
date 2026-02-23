import { Activity, Wrench, ShieldCheck, AlertTriangle } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Diagnostics",
      description: "State-of-the-art computer diagnostics to quickly identify and resolve complex engine and electronic issues.",
      icon: <Activity className="w-10 h-10 text-primary" />
    },
    {
      title: "General Repairs",
      description: "Comprehensive mechanical repairs covering brakes, suspension, steering, and transmission systems.",
      icon: <Wrench className="w-10 h-10 text-primary" />
    },
    {
      title: "WOF / Inspections",
      description: "Thorough Warrant of Fitness inspections and pre-purchase vehicle checks to ensure your safety.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />
    },
    {
      title: "Emergency Repairs",
      description: "Fast-response repair services to get you out of a bind and back on the road when the unexpected happens.",
      icon: <AlertTriangle className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#8ac4ff0a_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">What We Do</h2>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">Our Services</h3>
          <p className="text-foreground/60 text-lg font-medium leading-relaxed">We offer a comprehensive range of automotive services designed to keep your vehicle running at its best, safely and reliably.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card border-2 border-foreground/5 p-8 hover:border-primary transition-all duration-300 group relative"
              data-testid={`card-service-${index}`}
            >
              <div className="w-16 h-16 bg-background border-2 border-foreground/5 flex items-center justify-center mb-8 group-hover:border-primary/40 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight">{service.title}</h4>
              <p className="text-foreground/50 leading-tight font-bold uppercase text-xs tracking-wider">{service.description}</p>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground/10 group-hover:border-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}