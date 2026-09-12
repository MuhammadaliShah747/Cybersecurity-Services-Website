"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import type { ServiceCategory } from "@/lib/site-data";

interface ServiceCardProps {
    category: ServiceCategory;
}

export function ServiceCard({ category }: ServiceCardProps) {
    const CategoryIcon = category.icon;
    const [pointer, setPointer] = useState({ x: 0, y: 0 });
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });

    function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        setPointer({ x, y });
        pointerX.set(x);
        pointerY.set(y);
        rotateX.set((0.5 - y / bounds.height) * 3.5);
        rotateY.set((x / bounds.width - 0.5) * 3.5);
    }

    function resetPointer() {
        pointerX.set(0);
        pointerY.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            className="relative h-full"
            style={{ rotateX, rotateY, transformPerspective: 1100 }}
            whileHover={{ y: -7 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
        >
            <Link
                href={`#${category.id}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetPointer}
                className="group relative flex h-full min-h-[318px] flex-col justify-between gap-6 overflow-hidden bg-base p-7 shadow-[inset_0_0_0_1px_rgba(216,212,200,0.82)] transition-colors duration-500 hover:bg-base-panel"
            >
                <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(220px circle at ${pointer.x}px ${pointer.y}px, rgba(135,153,87,0.18), transparent 72%)` }}
                />
                <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-px w-0 bg-accent-bright transition-all duration-700 group-hover:w-full" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-signal-amber transition-all duration-700 group-hover:w-2/3" />

                <div className="relative z-10">
                    <div className="flex items-center justify-between">
                        <motion.span
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-base-border bg-base-surface text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent-soft"
                            whileHover={{ rotate: -8, scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300, damping: 16 }}
                        >
                            <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                        </motion.span>
                        <Icon
                            icon="solar:arrow-up-right-linear"
                            className="h-5 w-5 text-text-muted opacity-40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100"
                            aria-hidden="true"
                        />
                    </div>
                    <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
                        Capability / {category.id}
                    </p>
                    <h3 className="mt-2 text-[17px] font-semibold leading-snug text-text-primary">
                        {category.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">
                        {category.description}
                    </p>
                </div>

                <ul className="relative z-10 flex flex-wrap gap-1.5">
                    {category.examples.map((example) => (
                        <li
                            key={example}
                            className="rounded border border-base-border bg-base-panel/60 px-2 py-1 text-[11.5px] text-text-muted transition-colors duration-300 group-hover:border-accent/25 group-hover:text-text-secondary"
                        >
                            {example}
                        </li>
                    ))}
                </ul>
            </Link>
        </motion.div>
    );
}
