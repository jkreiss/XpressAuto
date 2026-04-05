import type { Metadata } from "next";
import Link from "next/link";
import { MainPageLayout } from "@/components/main-page-layout";
import { Contact } from "@/components/sections/Contact.tsx";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Servicing & WOF | Xpress Automotive Raetihi",
  description:
    "Book servicing and WOF checks in Raetihi. Vehicle WOF $85, Trailer WOF $55, and discounted Service + WOF combo pricing.",
};

export default function ServicingWofPage() {
  return (
    <MainPageLayout>
      <section className="pt-36 pb-10 bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-primary/15 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 space-y-12 md:space-y-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Services</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Services</h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
              Everything you need to keep your vehicle running reliably, from routine maintenance to more involved mechanical work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl items-start">
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">WOFs</h2>
              <div className="space-y-4">
                <div className="rounded-2xl p-6 md:p-4">
                  <p className="text-md uppercase tracking-wide font-bold text-primary mb-2">Vehicle Warrant Of Fitness</p>
                  <p className="text-4xl font-black text-foreground">$85</p>
                </div>

                <div className="rounded-2xl p-6 md:p-4">
                  <p className="text-md uppercase tracking-wide font-bold text-primary mb-2">Trailer Warrant Of Fitness</p>
                  <p className="text-4xl font-black text-foreground">$55</p>
                </div>

                <div className="rounded-2xl bg-card p-6 md:p-4">
                  <p className="text-md uppercase tracking-wide font-bold text-primary mb-2">Service and WOF Combo</p>
                  <p className="text-2xl md:text-3xl font-black text-foreground">WOF only $55</p>
                  <p className="text-muted-foreground font-medium mt-2">
                    when done in conjunction with your Vehicle Service
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Services</h2>
              <div className="rounded-3xl p-8 md:p-3 space-y-4">
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Vehicle servicing is an important requirement to keep your vehicle reliable and healthy.
                </p>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  With so many different makes and models on the road today, not every vehicle is the same when it comes to servicing.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-lg text-foreground font-bold leading-relaxed">Contact us for a quote!</p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary text-primary-foreground px-6 py-3 text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 hover:brightness-110 transition-all"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Contact background="tinted" heading="Ready to book a service of WOF?" />
    </MainPageLayout>
  );
}
