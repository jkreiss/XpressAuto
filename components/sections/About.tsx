import Image from "next/image";
import aboutImage from "@/public/images/about.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-background">
              {/* TODO: Replace /images/team-photo-placeholder.jpg with the real team photo asset. */}
              <Image
                src={aboutImage}
                alt="Xpress Automotive team"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="relative mt-4 ml-auto max-w-[260px] bg-background border border-primary/20 p-5 md:p-8 rounded-2xl shadow-2xl z-10 backdrop-blur-xl md:absolute md:mt-0 md:max-w-none md:-bottom-8 md:right-4 lg:-bottom-12 lg:-right-12">
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

          <div className="flex flex-col mt-0 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">About Us</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-[1.1]">
              Your Local Team, Trusted Automotive Care
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
              At Xpress Automotive we believe that automotive care is about more than just fixing cars, it&apos;s about providing peace of mind and keeping you safe. We pride ourselves on delivering honest, efficient, and high-quality repairs.
              <br />
              <br />
              We don&apos;t just look for a quick fix. Our team combines years of technical expertise with the latest diagnostic technology to ensure your vehicle is maintained to the highest safety standards. From the moment you hand over your keys, you can trust that your car is in the hands of professionals who treat it as if it were their own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
