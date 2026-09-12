import { TRUST_BADGES } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@iconify/react";

export function TrustBar() {
  return (
    <section className="border-y border-base-border bg-base-panel/40 py-12">
      <div className="container-content">
        <Reveal>
          <p className="text-[13px] text-text-muted">
            Aligned with recognised security frameworks. Certifications in
            progress are clearly marked — we don&apos;t claim what we haven&apos;t
            earned.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_BADGES.map((badge, i) => (
            <Reveal key={badge.label} delay={i * 0.03}>
              <div className="interactive-surface group relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-lg border border-base-border bg-base-surface/50 p-4 hover:bg-white">
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent-soft/0 blur-xl transition-all duration-500 group-hover:bg-accent-soft/90" />
                <Icon icon="solar:medal-star-bold-duotone" className="relative z-10 h-5 w-5 text-accent-bright transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-125" aria-hidden="true" />
                <div>
                  <p className="text-[13.5px] font-medium text-text-primary">
                    {badge.label}
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-text-muted">
                    {badge.status === "aligned" ? "Aligned" : "In progress"}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
