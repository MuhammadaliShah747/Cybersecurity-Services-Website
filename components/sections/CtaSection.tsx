"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const RISK_AREAS = [
    {
        label: "Identity",
        icon: "solar:key-minimalistic-square-bold-duotone",
        score: 72,
        status: "Exposure detected",
        priority: "Privileged access review",
        detail: "Reduce standing access and close the routes attackers use most often.",
    },
    {
        label: "Cloud",
        icon: "solar:cloud-bold-duotone",
        score: 58,
        status: "Needs attention",
        priority: "Configuration drift",
        detail: "Find the cloud controls that quietly weaken as environments scale.",
    },
    {
        label: "People",
        icon: "solar:users-group-rounded-bold-duotone",
        score: 84,
        status: "Strong foundation",
        priority: "Targeted simulation",
        detail: "Turn awareness into evidence with focused testing against real behaviour.",
    },
    {
        label: "Resilience",
        icon: "solar:restart-circle-bold-duotone",
        score: 46,
        status: "Priority signal",
        priority: "Response readiness",
        detail: "Know how quickly your team can contain, investigate and recover.",
    },
];

export function CtaSection() {
    const [activeArea, setActiveArea] = useState(0);
    const activeRisk = RISK_AREAS[activeArea];

    return (
        <section id="contact" className="border-t border-base-border py-24 sm:py-32">
            <div className="container-content">
                <Reveal>
                    <div className="relative overflow-hidden rounded-2xl border border-text-primary bg-text-primary px-6 py-10 text-white shadow-edge sm:px-10 sm:py-14 lg:px-14">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(135,153,87,0.34),transparent_38%),linear-gradient(135deg,#24251f,#454a31)]" />
                        <div aria-hidden="true" className="pointer-events-none absolute right-[-7rem] top-[-8rem] h-80 w-80 rounded-full border border-white/10" />
                        <div aria-hidden="true" className="pointer-events-none absolute right-8 top-8 h-48 w-48 rounded-full border border-white/10" />

                        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
                            <div>
                                <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-bright">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent-bright shadow-[0_0_0_4px_rgba(135,153,87,0.18)]" />
                                    Start with a clearer signal
                                </div>
                                <h2 className="max-w-xl font-display text-3xl font-semibold leading-[1.1] text-white sm:text-4xl">
                                    Know your risk before attackers do.
                                </h2>
                                <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/68">
                                    A short conversation with our security team is the fastest way to understand where you stand. No obligation, no sales script.
                                </p>
                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <Button href="#contact-form" variant="primary">
                                        Book Security Assessment
                                        <Icon icon="solar:arrow-right-up-linear" className="h-4 w-4" aria-hidden="true" />
                                    </Button>
                                    <Button href="#contact-form" variant="secondary" className="border-white/25 bg-white/10 text-white hover:border-accent-bright hover:bg-white/15 hover:text-white">
                                        Speak With an Expert
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-md sm:p-5">
                                <div className="flex items-center justify-between px-1 pb-4">
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Risk pulse</p>
                                        <p className="mt-1 text-[13px] text-white/80">Choose an area to preview the conversation.</p>
                                    </div>
                                    <Icon icon="solar:shield-check-bold-duotone" className="h-6 w-6 text-accent-bright" aria-hidden="true" />
                                </div>

                                <div className="grid grid-cols-4 gap-2">
                                    {RISK_AREAS.map((area, index) => {
                                        const isActive = activeArea === index;
                                        return (
                                            <motion.button
                                                key={area.label}
                                                type="button"
                                                onClick={() => setActiveArea(index)}
                                                whileHover={{ y: -3 }}
                                                whileTap={{ scale: 0.96 }}
                                                className={`interactive-surface group rounded-lg border px-2 py-3 text-center ${isActive ? "border-accent-bright bg-accent-bright text-text-primary" : "border-white/15 bg-white/[0.06] text-white/65 hover:border-white/35 hover:bg-white/10"}`}
                                                aria-pressed={isActive}
                                            >
                                                <Icon icon={area.icon} className={`mx-auto h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-text-primary" : "text-accent-bright"}`} aria-hidden="true" />
                                                <span className="mt-2 block text-[11px] font-bold">{area.label}</span>
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={activeArea}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="mt-4 rounded-lg border border-white/10 bg-text-primary/55 p-4"
                                    >
                                        <div className="flex items-end justify-between gap-4">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">{activeRisk.status}</p>
                                                <p className="mt-1 text-[16px] font-semibold text-white">{activeRisk.priority}</p>
                                            </div>
                                            <span className="font-display text-3xl font-semibold text-accent-bright">{activeRisk.score}<small className="ml-0.5 text-sm text-white/45">/100</small></span>
                                        </div>
                                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${activeRisk.score}%` }}
                                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                                className="h-full rounded-full bg-accent-bright"
                                            />
                                        </div>
                                        <p className="mt-3 text-[12px] leading-relaxed text-white/60">{activeRisk.detail}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
