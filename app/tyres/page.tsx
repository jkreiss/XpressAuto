import type { Metadata } from "next";
import Link from "next/link";
import { MainPageLayout } from "@/components/main-page-layout";
import { Contact } from "@/components/sections/Contact.tsx";
import { TyreBrandGrid } from "@/components/tyre-brand-grid";

export const metadata: Metadata = {
  title: "Wheels & Tyres | Xpress Automotive Raetihi",
  description:
    "Wheels and tyres in Raetihi including puncture repairs, tyre fitment, and supply of major tyre brands for cars, SUVs, utes, trailers, and ATVs.",
};

const fitmentPricing = [
  { label: "ATV", price: "$25" },
  { label: "Trailer", price: "$28" },
  { label: "Small Car", price: "$31" },
  { label: "Large SUV/Ute", price: "$35.50" },
  { label: "20” & Above", price: "$38.50" },
];

export default function WheelsTyresPage() {
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
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Wheels &amp; Tyres</h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
              Tyre fitting, replacements, and checks to keep you safe on the road with the right grip and performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl items-start">
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Tyres</h2>
              <div className="space-y-4">
                <div className="rounded-2xl p-6 md:p-4">
                  <p className="text-md uppercase tracking-wide font-bold text-primary mb-2">Tyre Puncture</p>
                  <p className="text-4xl font-black text-foreground">$45</p>
                  <p className="text-muted-foreground font-medium">Including GST</p>
                </div>

                <div className="rounded-2xl p-6 md:p-4">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">Tyre Fitment Per Tyre</h3>
                  <p className="text-sm text-muted-foreground mb-4">All prices below are excluding GST</p>
                  <div className="space-y-3">
                    {fitmentPricing.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-background px-4 py-3 flex items-center justify-between"
                      >
                        <span className="font-semibold text-foreground">{item.label}</span>
                        <span className="font-black text-foreground">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Tyre Brands</h2>
              <div className="rounded-3xl p-8 md:p-3">
                <p className="text-lg text-muted-foreground font-medium mb-6">
                  We can supply almost any brand of tyre, just to name a few
                </p>
                <TyreBrandGrid />
                <div className="pt-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
      <Contact background="tinted" heading="Need new tyres?" />
    </MainPageLayout>
  );
}
