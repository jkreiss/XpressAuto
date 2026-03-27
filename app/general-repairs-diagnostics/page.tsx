import type { Metadata } from "next";
import Link from "next/link";
import { MainPageLayout } from "@/components/main-page-layout";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "General Repairs & Diagnostics | Xpress Automotive Raetihi",
  description:
    "General vehicle repairs and diagnostics in Raetihi. Labour rate $110/hour and diagnostic scan pricing from $35 + GST plus labour.",
};

const repairItems = [
  "Brakes",
  "Suspension",
  "Transmission",
  "Cambelts",
  "Drive Belts",
  "Shafts & Axles",
  "Steering",
  "Cooling Systems",
  "Accessory Fitting",
  "Tyre Pressure Monitoring",
  "Clutch & Differential",
  "Fuel Injectors",
];

export default function GeneralRepairsDiagnosticsPage() {
  return (
    <MainPageLayout>
      <section className="pt-36 pb-10 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-12 md:space-y-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Services</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">General Repairs &amp; Diagnostics</h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
              Accurate diagnostics and quality repairs to get to the root of the problem and keep your vehicle performing as it should.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl items-start">
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Repairs</h2>
              <div className="space-y-6">
                <div className="rounded-2xl bg-card p-6 md:p-4">
                  <p className="text-md uppercase tracking-wide font-bold text-primary mb-2">Labour Rate</p>
                  <p className="text-4xl font-black text-foreground">$110</p>
                  <p className="text-muted-foreground font-medium">Per hour</p>
                </div>
                <div className="rounded-2xl bg-card p-6 md:p-4">
                  <p className="text-md uppercase tracking-wide font-bold text-primary mb-2">Diagnostic Scan</p>
                  <p className="text-2xl md:text-3xl font-black text-foreground">$35</p>
                  <p className="text-muted-foreground font-medium">+ GST and labour time</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Repair Types</h2>
              <div className="rounded-3xl bg-card p-8 md:p-3">
                <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                  We carry out a wide range of repairs and mechanical work, including:
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-3">
                  {repairItems.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center justify-center rounded-md bg-background px-4 py-3 text-md font-bold text-foreground text-center transition-colors duration-200 hover:bg-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-center text-md font-bold text-foreground mb-6">+ Much More</p>
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
      <ContactSection background="tinted" />
    </MainPageLayout>
  );
}
