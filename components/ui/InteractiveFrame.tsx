"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

interface InteractiveFrameProps {
    children: ReactNode;
    className?: string;
}

export function InteractiveFrame({ children, className }: InteractiveFrameProps) {
    const rotateX = useSpring(useMotionValue(0), {
        stiffness: 140,
        damping: 24,
        mass: 0.7,
    });
    const rotateY = useSpring(useMotionValue(0), {
        stiffness: 140,
        damping: 24,
        mass: 0.7,
    });

    function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
        if (event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        rotateX.set(-y * 7);
        rotateY.set(x * 7);
    }

    function resetTilt() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            className={className}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
        >
            {children}
        </motion.div>
    );
}
