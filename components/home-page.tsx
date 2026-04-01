"use client";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact.tsx";
import { About } from "@/components/sections/About";
import { MainPageLayout } from "@/components/main-page-layout";

export default function Home() {
  return (
    <MainPageLayout>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact variant="full" />
    </MainPageLayout>
  );
}
