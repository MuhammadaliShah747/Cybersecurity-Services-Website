import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </Reveal>
  );
}
