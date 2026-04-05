import type { Metadata } from "next";
import HomePage from "@/components/home-page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Xpress Automotive | Trusted Local Mechanics in Raetihi",
  description:
    "Xpress Automotive in Raetihi for servicing, WOF, diagnostics, repairs, wheels, tyres, and parts. Honest work, clear pricing, and trusted local care.",
};

export default function Page() {
  return <HomePage />;
}
