"use client";

import { SERVICE_CATEGORIES } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            title="Full-spectrum protection, organised the way risk actually shows up"
            description="Twelve capability areas covering every layer attackers target. Each one runs deeper than a page can show — this is the map, not the whole territory."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-base-border bg-base-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category, i) => {
            return (
              <Reveal key={category.id} delay={(i % 3) * 0.05}>
                <ServiceCard category={category} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
