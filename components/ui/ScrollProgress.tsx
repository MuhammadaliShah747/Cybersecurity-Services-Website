"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame = 0;

        function updateProgress() {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
            });
        }

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
        >
            <div
                className="h-full origin-left bg-accent transition-[width] duration-150 ease-out"
                style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
}
