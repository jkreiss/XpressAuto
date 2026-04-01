import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Wrench, Package, Disc, CarFront } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  details: string[];
  href: string;
  icon: ReactNode;
  testId: string;
};

function ServiceCard({ title, description, details, href, icon, testId }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="bg-card border border-border rounded-2xl p-8 hover:border-primary hover:translate-y-0.5 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(138,196,255,0.15)] group relative overflow-hidden flex flex-col h-full"
      data-testid={testId}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="w-20 h-20 rounded-2xl bg-background border border-border shadow-inner flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-500">
        {icon}
      </div>
      <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{title}</h4>
      <p className="mt-3 text-md text-muted-foreground">{description}</p>
      <div className="mt-3 space-y-1 text-md text-muted-foreground leading-relaxed font-medium mb-6">
        {details.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 mt-auto text-sm font-bold uppercase tracking-wide text-primary group-hover:text-foreground transition-colors">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

export function Services() {
  const services = [
    {
      title: "Servicing & WOF",
      description: "Routine servicing and WOF inspections to keep your vehicle safe and reliable.",
      details: [
        "WOF - $85",
        "Trailer WOF - $55",
        "WOF with service - $55",
      ],
      href: "/servicing",
      icon: <CarFront className="w-10 h-10 text-primary" />,
    },
    {
      title: "General Repairs & Diagnostics",
      description: "Mechanical repairs and accurate diagnostics for all makes and models.",
      details: [
        "Labour - $110/hr",
        "Diagnostic scan - $35 + GST & labour",
      ],
      href: "/repairs",
      icon: <Wrench className="w-10 h-10 text-primary" />,
    },
    {
      title: "Wheels & Tyres",
      description: "Tyre supply, fitting, and repairs to keep you safe on the road.",
      details: [
        "Puncture repair - $45 (incl. GST)",
        "Tyre fitment - from $25",
      ],
      href: "/tyres",
      icon: <Disc className="w-10 h-10 text-primary" />,
    },
    {
      title: "Parts Store",
      description: "Quality parts and workshop essentials for a wide range of vehicles.",
      details: [
        "Century Batteries",
        "Tools & car care",
        "Oils & Fluids",
          "+ More"
      ],
      href: "/store",
      icon: <Package className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_50%)] opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">What We Do</h2>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">Our Services</h3>
          <p className="text-muted-foreground text-lg font-medium leading-relaxed">
            Comprehensive automotive care designed to keep you safe and your vehicle performing at its best for longer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              testId={`card-service-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
