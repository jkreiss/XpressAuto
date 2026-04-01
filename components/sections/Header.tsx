"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servicing", label: "Servicing & WOF" },
    { href: "/repairs", label: "Repairs & Diagnostics" },
    { href: "/tyres", label: "Wheels & Tyres" },
    { href: "/store", label: "Parts Store" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-4 border-b border-border" : "bg-background py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center" data-testid="link-home">
          <Image
            src="/images/xpresslogo-nobg.png"
            alt="Xpress Automotive logo"
            width={180}
            height={52}
            className={`w-auto transition-all duration-300 ${isScrolled ? "h-11 md:h-12" : "h-14 md:h-16"}`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-wide uppercase transition-colors ${active ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+64210774907" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-foreground px-5 py-2.5 text-sm font-bold text-background shadow-sm hover:scale-105 hover:brightness-110 transition-all cursor-pointer" data-testid="link-call-now">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <Link href={`${pathname}#contact`} className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 hover:scale-105 transition-all" data-testid="button-contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
