"use client";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Reviews";
import { ContactSection } from "@/components/sections/contact-section";
import { About } from "@/components/sections/About";
import { MainPageLayout } from "@/components/main-page-layout";

export default function Home() {
  return (
    <MainPageLayout>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <ContactSection variant="full" />
    </MainPageLayout>
  );
}
