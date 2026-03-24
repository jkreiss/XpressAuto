import { Droplet, Disc, Activity, ClipboardCheck, Wrench, ArrowRight, Plus } from "lucide-react";

export function Cost() {
  const services = [
    {
      title: "Oil & Filter Change",
      price: "$89",
      note: "From $89. Includes premium oil & filter",
      icon: <Droplet className="w-8 h-8" />,
    },
    {
      title: "Brake Pad Replacement",
      price: "$149",
      note: "From $149 per axle, includes inspection",
      icon: <Disc className="w-8 h-8" />,
    },
    {
      title: "Full Service",
      price: "$249",
      note: "From $249. Complete multipoint inspection",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "WOFs",
      price: "$65",
      note: "Comprehensive safety check",
      icon: <ClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Diagnostics",
      price: "$85",
      note: "From $85. Includes fault scanning",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      title: "And Much More",
      price: "Get a Quote",
      note: "We handle all types of mechanical repairs",
      icon: <Plus className="w-8 h-8" />,
      highlight: true,
      link: "#contact"
    }
  ];

  return (
    <section id="cost" className="py-16 relative bg-background overflow-hidden">
      {/* Soft background lighting */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Pricing</h2>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Common Services & Pricing
          </h3>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Competative pricing, services you can trust. No hidden fees.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-16">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`relative backdrop-blur-sm w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] rounded-3xl p-6 border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center group ${service.highlight ? 'bg-primary text-primary-foreground border-primary/20 shadow-primary/30 cursor-pointer' : 'bg-card/60 border-border'}`}
            >
              {service.link && (
                <a href={service.link} className="absolute inset-0 z-20 rounded-3xl">
                  <span className="sr-only">Scroll to contact</span>
                </a>
              )}
              
              {!service.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              )}
              
              <div className={`mb-4 p-4 rounded-2xl shadow-sm transition-all duration-500 z-10 group-hover:scale-110 ${service.highlight ? 'bg-white/20 text-white group-hover:bg-white group-hover:text-primary' : 'bg-background border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground'}`}>
                {service.icon}
              </div>
              
              <h4 className={`text-lg font-bold mb-2 z-10 ${service.highlight ? 'text-white' : 'text-foreground'}`}>{service.title}</h4>
              
              <div className="flex items-start justify-center gap-1 mb-2 z-10">
                <span className={`transition-colors duration-300 ${service.link ? 'text-2xl font-bold drop-shadow-sm group-hover:underline' : 'text-4xl font-black tracking-tighter drop-shadow-sm'} ${service.highlight ? 'text-white' : 'text-foreground group-hover:text-primary'}`}>{service.price}</span>
              </div>
              
              <p className={`text-sm font-medium z-10 ${service.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>{service.note}</p>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10 flex flex-col items-center">
          <p className="text-2xl text-muted-foreground font-large mb-8">Ready to book? Get in touch with us.</p>
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center gap-3 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:scale-[1.02] transition-all w-full sm:w-auto cursor-pointer shadow-lg hover:shadow-primary/20"
          >
            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}