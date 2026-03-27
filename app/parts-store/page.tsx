import type { Metadata } from "next";
import Link from "next/link";
import { MainPageLayout } from "@/components/main-page-layout";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Parts Store | Xpress Automotive Raetihi",
  description:
    "Visit the Xpress Automotive parts store in Raetihi for batteries, oils, trailer parts, filters, wiper blades, bulbs, tools, and more.",
};

const partsItems = [
    "Century Batteries",
  "Tools",
  "Car Care",
  "Oils & Fluids",
  "Trailer parts",
  "Metric nuts & bolts",
  "Oil filters",
  "Wiper blades",
  "Bulbs",
  "Aerosols & Spray paint",

];

const shopPhotoPlaceholders = [
  "",

];

export default function PartsStorePage() {
  return (
    <MainPageLayout>
      <section className="pt-36 pb-10 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-12 md:space-y-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Services</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Parts Store</h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
              We offer a comprehensive selection of to quality parts and components, with options to suit your vehicle and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl items-start">
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">In-Store Range</h2>
              <div className="rounded-3xl bg-cardp-8 md:p-4">
                <ul className="grid grid-cols-2 gap-3 mb-3">
                  {partsItems.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center justify-center rounded-md bg-background px-4 py-3 text-md font-bold text-foreground text-center transition-colors duration-200 hover:bg-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-center text-md font-bold text-foreground">+ Much More</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Shop photos here when sent</h2>
              <div className="rounded-3xl bg-card p-8 md:p-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  {shopPhotoPlaceholders.map((filename) => (
                    <div
                      key={filename}
                      className="rounded-2xl bg-background min-h-32 p-4 flex items-center justify-center text-center"
                    >
                      {/* TODO: Add real shop photo to /public/images/shop/{filename} and replace this placeholder block with an image. */}
                      <div>
                        <p className="font-semibold text-foreground text-sm">{filename}</p>
                        <p className="text-xs text-muted-foreground mt-1"></p>
                      </div>
                    </div>
                  ))}
                </div>
                {/*<div className="pt-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">*/}
                {/*  <p className="text-lg text-foreground font-bold leading-relaxed">Contact us for a quote!</p>*/}
                {/*  <Link*/}
                {/*    href="#contact"*/}
                {/*    className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary text-primary-foreground px-6 py-3 text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 hover:brightness-110 transition-all"*/}
                {/*  >*/}
                {/*    Get a Quote*/}
                {/*  </Link>*/}
                {/*</div>*/}
              </div>
            </section>
          </div>
        </div>
      </section>
      <ContactSection background="tinted" />
    </MainPageLayout>
  );
}
