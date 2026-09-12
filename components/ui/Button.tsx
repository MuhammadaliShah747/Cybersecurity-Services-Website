import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const base =
    "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-md px-5 py-3 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-accent-bright";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-white shadow-[0_8px_20px_-10px_rgba(105,118,66,0.75)] hover:bg-accent-bright hover:shadow-glow active:translate-y-0",
    secondary:
      "border border-base-borderStrong bg-white/70 text-text-primary hover:border-accent hover:text-accent hover:shadow-edge",
    ghost: "text-text-secondary hover:text-text-primary",
  };

  // Safe external-link handling: rel prevents tab-nabbing and referrer leakage.
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...externalProps}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 blur-sm transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100"
      />
      <span className="relative inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </Link>
  );
}
