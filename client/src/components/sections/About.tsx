import { CheckCircle2 } from "lucide-react";

export function About() {
  const features = [
    "WOFs (Warrant of Fitness)",
    "Automotive Servicing",
    "Small Retail Store",
    "Mechanical Fixes"
  ];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-background">
              <img 
                src="/images/about.jpg" 
                alt="Image not found" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-background border border-primary/20 p-8 rounded-2xl shadow-2xl z-10 backdrop-blur-xl">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary font-black text-3xl shadow-inner border border-primary/20">
                  5+
                </div>
                <div>
                  <p className="text-foreground font-bold text-xl">Years Operating</p>
                  <p className="text-primary font-medium tracking-wide">Trusted by Locals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-12 lg:mt-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">About Us</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-[1.1]">
              Complete Automotive Care Under One Roof
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
              At Xpress Automotive, we pride ourselves on delivering honest, efficient, and high-quality repairs. Whether you need a quick WOF, routine servicing, or complex mechanical fixes, our team has the expertise to get it done right the first time. Fast turnaround, honest advice, and no unnecessary delays. <br /><br />
              Just passing through town? We can diagnose and complete most repairs within a couple of days, so we can get your car running smoothly while you're cruising down the river. 
            </p>
            
            {/* <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/5 border border-black/5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-foreground font-bold">{feature}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}