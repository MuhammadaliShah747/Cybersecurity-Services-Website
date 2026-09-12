import Link from "next/link";
import { Icon } from "@iconify/react";
import { FOOTER_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-base-border bg-base-panel/30">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="#top"
              className="flex items-center gap-2 font-display text-[17px] font-semibold text-text-primary"
            >
              <Icon icon="solar:shield-check-bold" className="h-5 w-5 text-accent-bright" aria-hidden="true" />
              Perimeter Six
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-text-secondary">
              UK-based cybersecurity and network security partner protecting
              networks, cloud, identities, applications, data and users.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-text-secondary transition-colors hover:border-accent hover:text-accent-bright"
              aria-label="Perimeter Six on LinkedIn"
            >
              <Icon icon="mdi:linkedin" className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-[13.5px] font-medium text-text-primary">
                  {heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13.5px] text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-base-border pt-8 text-[13px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Perimeter Six Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-text-secondary">Privacy Policy</Link>
            <Link href="#" className="hover:text-text-secondary">Cookie Policy</Link>
            <Link href="mailto:hello@example.com" className="hover:text-text-secondary">
              hello@example.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
