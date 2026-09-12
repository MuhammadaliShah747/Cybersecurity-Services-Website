"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/lib/site-data";

function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  const numericMatch = value.match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : null;

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1200, bounce: 0 });

  useEffect(() => {
    // display already initializes to `value`, so non-numeric metrics need
    // no effect at all — only kick off the spring when there's a number
    // to animate toward, avoiding a redundant setState-in-effect call.
    if (inView && numeric !== null) {
      motionVal.set(numeric);
    }
  }, [inView, numeric, motionVal]);

  useEffect(() => {
    if (numeric === null) return;
    const unsub = spring.on("change", (latest) => {
      const rounded =
        numeric % 1 === 0 ? Math.round(latest) : latest.toFixed(1);
      setDisplay(value.replace(numericMatch![0], String(rounded)));
    });
    return unsub;
  }, [spring, numeric, value, numericMatch]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-accent-bright sm:text-5xl">
      {display}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="border-t border-base-border bg-base-panel/40 py-20">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center sm:text-left">
              <AnimatedMetric value={metric.value} />
              <p className="mt-2 text-[13.5px] text-text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
