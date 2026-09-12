"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { INDUSTRIES } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SECTOR_ICONS = [
    "solar:card-2-bold-duotone",
    "solar:health-bold-duotone",
    "solar:buildings-2-bold-duotone",
    "solar:wi-fi-router-bold-duotone",
    "solar:code-square-bold-duotone",
    "solar:cart-large-2-bold-duotone",
    "solar:case-minimalistic-bold-duotone",
    "solar:settings-bold-duotone",
    "solar:transmission-bold-duotone",
];

const SECTOR_PROFILES = [
    { lens: "Primary risk lens", value: "Fraud, resilience & regulatory exposure", signal: "High-value environments" },
    { lens: "Primary risk lens", value: "Patient safety & clinical continuity", signal: "Zero tolerance for downtime" },
    { lens: "Primary risk lens", value: "Public trust & essential services", signal: "Assurance-led security" },
    { lens: "Primary risk lens", value: "Availability & network dependency", signal: "Always-on infrastructure" },
    { lens: "Primary risk lens", value: "Product velocity & supply chain", signal: "Security at release speed" },
    { lens: "Primary risk lens", value: "Payments & customer confidence", signal: "Peak-volume resilience" },
    { lens: "Primary risk lens", value: "Confidentiality & client privilege", signal: "Trust is the product" },
    { lens: "Primary risk lens", value: "IT / OT convergence & safety", signal: "Plant-to-cloud visibility" },
    { lens: "Primary risk lens", value: "Safety, uptime & national reliance", signal: "Critical systems protection" },
];

export function Industries() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndustry = INDUSTRIES[activeIndex];
    const activeProfile = SECTOR_PROFILES[activeIndex];

    return (
        <section
            id="industries"
            className="relative overflow-hidden border-t border-base-border bg-base-surface/45 py-24 sm:py-32"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-14rem] top-32 h-[34rem] w-[34rem] rounded-full bg-accent-soft/55 blur-3xl"
            />

            <div className="container-content relative">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-accent">
                            <Icon icon="solar:buildings-3-bold-duotone" className="h-4 w-4" aria-hidden="true" />
                            Sector intelligence
                        </div>
                        <SectionHeading
                            title="Built for the sectors where security failure isn't an option"
                            description="Every industry carries different risk, regulation and consequences. Select a sector to see the pressure points we design around."
                            className="max-w-2xl"
                        />
                    </div>
                    <div className="hidden items-center gap-2 pb-1 text-[12px] font-semibold text-text-muted lg:flex">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-signal-green" />
                        Context-led protection
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-3 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {INDUSTRIES.map((industry, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.button
                                    key={industry.title}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    whileHover={{ y: -5, scale: 1.015 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 340, damping: 24 }}
                                    className={`interactive-surface group relative flex min-h-[142px] flex-col justify-between overflow-hidden rounded-xl border p-4 text-left sm:min-h-[158px] sm:p-5 ${isActive
                                        ? "border-accent bg-accent text-white shadow-glow"
                                        : "border-base-border bg-white/75 text-text-primary hover:bg-white"
                                        }`}
                                    aria-pressed={isActive}
                                >
                                    <span className="flex items-start justify-between gap-3">
                                        <Icon
                                            icon={SECTOR_ICONS[index]}
                                            className={`h-7 w-7 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${isActive ? "text-white" : "text-accent"}`}
                                            aria-hidden="true"
                                        />
                                        <span className={`font-display text-[11px] font-semibold ${isActive ? "text-white/70" : "text-text-muted"}`}>
                                            0{index + 1}
                                        </span>
                                    </span>
                                    <span>
                                        <span className="block max-w-[13ch] text-[13px] font-bold leading-snug sm:text-[14px]">
                                            {industry.title}
                                        </span>
                                        <span className={`mt-2 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${isActive ? "text-white/70" : "text-text-muted"}`}>
                                            Explore profile
                                            <Icon icon="solar:arrow-right-up-linear" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                        </span>
                                    </span>
                                    {isActive && (
                                        <motion.span layoutId="sector-active" className="absolute bottom-0 left-4 right-4 h-1 rounded-t-full bg-white/70" />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    <div className="interactive-surface relative min-h-[430px] overflow-hidden rounded-2xl border border-base-border bg-text-primary p-7 text-white shadow-edge sm:p-9">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(135,153,87,0.32),transparent_38%),linear-gradient(135deg,rgba(36,37,31,1),rgba(67,73,45,0.96))]" />
                        <div aria-hidden="true" className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-64 w-64 rounded-full border border-white/10" />
                        <div aria-hidden="true" className="pointer-events-none absolute right-8 top-8 h-40 w-40 rounded-full border border-white/10" />

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex h-full min-h-[374px] flex-col"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
                                        <span className="h-2 w-2 rounded-full bg-accent-bright shadow-[0_0_0_4px_rgba(135,153,87,0.18)]" />
                                        Sector profile
                                    </span>
                                    <span className="font-display text-[12px] font-semibold text-accent-bright">
                                        0{activeIndex + 1} / 09
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <Icon icon={SECTOR_ICONS[activeIndex]} className="h-12 w-12 text-accent-bright" aria-hidden="true" />
                                    <h3 className="mt-6 max-w-md font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                                        {activeIndustry.title}
                                    </h3>
                                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
                                        {activeIndustry.description}
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">{activeProfile.lens}</p>
                                            <p className="mt-1.5 text-[13px] font-semibold text-white">{activeProfile.value}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">Our orientation</p>
                                            <p className="mt-1.5 text-[13px] font-semibold text-accent-bright">{activeProfile.signal}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
