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
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Our Services</h3>
          <p className="text-white/60 text-lg font-medium leading-relaxed">We offer a comprehensive range of automotive services designed to keep your vehicle running at its best, safely and reliably.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:border-primary transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(138,196,255,0.15)] group relative overflow-hidden"
              data-testid={`card-service-${index}`}
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-20 h-20 rounded-2xl bg-background border border-white/5 shadow-inner flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-white/60 leading-relaxed font-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}