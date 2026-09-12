"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { CAPABILITY_LAYERS } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-base-border py-24 sm:py-32">
      <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          title="Protection that runs through every layer, in order"
          description="A single gap between layers is all an attacker needs. We design controls that hand off cleanly from users all the way to detection and response — no seams for threats to slip through."
        />

        <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
          {CAPABILITY_LAYERS.map((layer, i) => (
            <motion.div
              key={layer}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div
                className={`interactive-surface w-full rounded-lg border px-5 py-3.5 text-center text-[14.5px] font-medium ${layer.startsWith("SOC")
                  ? "border-accent-bright bg-accent-soft text-accent-bright"
                  : "border-base-border bg-base-surface/60 text-text-primary"
                  }`}
              >
                {layer}
              </div>
              {i < CAPABILITY_LAYERS.length - 1 && (
                <div className="flex justify-center py-1.5" aria-hidden="true">
                  <Icon icon="solar:alt-arrow-down-linear" className="h-4 w-4 text-accent/60" aria-hidden="true" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
