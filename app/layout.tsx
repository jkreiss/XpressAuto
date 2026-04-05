import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xpressautomotive.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xpress Automotive | Trusted Local Mechanics in Raetihi",
    template: "%s | Xpress Automotive",
  },
  description: "Helping you get on the road and stay on the road.",
  applicationName: "Xpress Automotive",
  keywords: [
    "Raetihi mechanic",
    "vehicle servicing",
    "WOF",
    "car repairs",
    "tyres",
    "automotive parts",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "/",
    siteName: "Xpress Automotive",
    title: "Xpress Automotive | Trusted Local Mechanics in Raetihi",
    description: "Helping you get on the road and stay on the road.",
    images: [
      {
        url: "/images/xpresslogo.jpg",
        alt: "Xpress Automotive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpress Automotive | Trusted Local Mechanics in Raetihi",
    description: "Helping you get on the road and stay on the road.",
    images: ["/images/xpresslogo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
