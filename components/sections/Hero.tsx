"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { InteractiveFrame } from "@/components/ui/InteractiveFrame";
import { NetworkVisual } from "@/components/ui/NetworkVisual";

const TRUST_LINE_ITEMS = [
  "UK-based security operations",
  "24/7 monitoring",
  "Prevent, detect, respond, recover",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid-fade pt-[calc(68px+3.5rem)] pb-20 sm:pb-28"
    >
      {/* Faint top-down line to anchor the hero, restrained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-px -translate-x-1/2 bg-line-fade"
      />

      <div className="container-content grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-panel/60 px-3.5 py-1.5 text-[13px] text-text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green" />
            </span>
            UK security operations centre — status: monitoring
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[2.5rem] leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]"
          >
            One security partner for every layer attackers actually target.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-[17px] leading-relaxed text-text-secondary"
          >
            Perimeter Six protects networks, cloud, identities, applications,
            data and users for UK organisations that can&apos;t afford to get
            this wrong — from growing SMEs to regulated enterprise and
            critical infrastructure. We prevent what we can, detect what
            slips through, and respond before it spreads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row"
          >
            <Button href="#contact" variant="primary">
              Book a Security Consultation
              <Icon icon="solar:arrow-right-up-linear" className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
          >
            {TRUST_LINE_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[14px] text-text-secondary"
              >
                <Icon icon="solar:check-circle-bold-duotone" className="h-4 w-4 shrink-0 text-accent-bright" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <InteractiveFrame className="relative animate-float">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-base-border bg-base-panel/70 shadow-edge [transform:translateZ(20px)]">
              <NetworkVisual className="h-full w-full" />
            </div>
          </motion.div>
        </InteractiveFrame>
      </div>
    </section>
  );
}
