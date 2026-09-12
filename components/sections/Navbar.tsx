"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NAV_LINKS } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-base/85 backdrop-blur-md border-b border-base-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <ScrollProgress />
      <nav
        aria-label="Primary"
        className="container-content flex h-[68px] items-center justify-between"
      >
        <Link
          href="#top"
          className="flex items-center gap-2 font-display text-[17px] font-semibold text-text-primary"
        >
          <Icon icon="solar:shield-check-bold" className="h-5 w-5 text-accent-bright" aria-hidden="true" />
          Perimeter Six
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14.5px] text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" className="text-[14px] px-4 py-2.5">
            Book a Security Consultation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-text-primary lg:hidden"
        >
          {mobileOpen ? <Icon icon="solar:close-circle-linear" className="h-6 w-6" /> : <Icon icon="solar:hamburger-menu-linear" className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-base-border bg-base/98 backdrop-blur-md lg:hidden"
        >
          <ul className="container-content flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2 py-3 text-[15px] text-text-secondary hover:bg-base-surface hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#contact"
                variant="primary"
                className="w-full"
              >
                Book a Security Consultation
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
