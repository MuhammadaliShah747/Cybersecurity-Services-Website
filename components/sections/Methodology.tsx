"use client";

import { motion } from "framer-motion";
import { METHODOLOGY_STEPS } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Methodology() {
  return (
    <section id="methodology" className="border-t border-base-border py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          title="A continuous cycle, not a one-off project"
          description="Security isn't a checklist you finish. Our methodology runs continuously, feeding every response back into a stronger posture."
        />

        <div className="relative mt-16">
          {/* Connecting line - animates in once, scroll-triggered */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[13px] hidden h-px bg-gradient-to-r from-accent/70 via-accent-bright/70 to-accent/30 lg:block"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-9">
            {METHODOLOGY_STEPS.map((item, i) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="flex items-center gap-2 lg:block">
                  <span
                    className="relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-accent bg-base text-[11px] font-medium text-accent-bright"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-[14.5px] font-semibold text-text-primary lg:mt-3">
                    {item.step}
                  </h3>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary lg:mt-2">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
