"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { WHY_US_POINTS } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POINT_ICONS = [
  "solar:layers-bold-duotone",
  "solar:sledgehammer-bold-duotone",
  "solar:radar-2-bold-duotone",
  "solar:shield-warning-bold-duotone",
  "solar:code-square-bold-duotone",
  "solar:verified-check-bold-duotone",
];

const POINT_SIGNALS = [
  { label: "Coverage model", value: "One accountable partner" },
  { label: "Operating model", value: "Tested from both sides" },
  { label: "Availability", value: "Always-on response" },
  { label: "Incident posture", value: "Ready before day one" },
  { label: "Design principle", value: "Built for real conditions" },
  { label: "Advice model", value: "Fit before affiliation" },
];

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoint = WHY_US_POINTS[activeIndex];
  const activeSignal = POINT_SIGNALS[activeIndex];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-t border-base-border py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-accent-soft/50 blur-3xl"
      />

      <div className="container-content relative grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
        <div>
          <div className="mb-5 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-accent">
            <Icon icon="solar:stars-minimalistic-bold-duotone" className="h-4 w-4" aria-hidden="true" />
            The Perimeter Six difference
          </div>
          <SectionHeading
            title="Why organisations choose Perimeter Six"
            description="Most vendors specialise in one layer. We built the team to cover all of them, so nothing falls into the gap between suppliers."
            className="max-w-lg"
          />

          <div className="mt-9 hidden items-center gap-3 text-[13px] text-text-muted lg:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
              <Icon icon="solar:cursor-bold" className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Select a principle to inspect how we work.
          </div>
        </div>

        <div className="relative">
          <div className="interactive-surface overflow-hidden rounded-2xl border border-base-border bg-white/80 shadow-edge backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-base-border px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
                <span className="h-2 w-2 rounded-full bg-signal-green shadow-[0_0_0_4px_rgba(37,138,99,0.12)]" />
                Operating principle
              </div>
              <span className="font-display text-[12px] font-semibold text-accent">
                0{activeIndex + 1} / 06
              </span>
            </div>

            <div className="relative min-h-[246px] overflow-hidden px-6 py-8 sm:px-9 sm:py-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-2rem] top-[-4rem] h-56 w-56 rounded-full border border-accent/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-8 h-40 w-40 rounded-full border border-accent/10"
              />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <Icon
                    icon={POINT_ICONS[activeIndex]}
                    className="h-10 w-10 text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 max-w-lg font-display text-2xl font-semibold leading-tight text-text-primary sm:text-3xl">
                    {activePoint.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
                    {activePoint.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-accent">
                    <span className="h-px w-8 bg-accent/50" />
                    {activeSignal.label}: {activeSignal.value}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {WHY_US_POINTS.map((point, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={point.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className={`interactive-surface group relative min-h-[76px] overflow-hidden rounded-lg border px-3.5 py-3 text-left focus-visible:outline-2 focus-visible:outline-accent-bright sm:min-h-[86px] sm:px-4 ${isActive
                    ? "border-accent bg-accent text-white shadow-glow"
                    : "border-base-border bg-base-surface/70 text-text-primary hover:bg-white"
                    }`}
                  aria-pressed={isActive}
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="text-[12px] font-bold leading-snug sm:text-[13px]">
                      {point.title}
                    </span>
                    <Icon
                      icon={isActive ? "solar:arrow-right-up-bold" : "solar:arrow-right-up-linear"}
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isActive ? "text-white" : "text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className={`mt-2 block text-[10px] uppercase tracking-[0.12em] ${isActive ? "text-white/70" : "text-text-muted"}`}>
                    Principle 0{index + 1}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
