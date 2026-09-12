import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Perimeter Six | UK Cybersecurity & Network Security Partner",
    template: "%s | Perimeter Six",
  },
  description:
    "Perimeter Six is a UK-based cybersecurity partner protecting networks, cloud, identities, applications and data for SMEs, enterprise and critical infrastructure. Prevent, detect, respond, recover.",
  keywords: [
    "cybersecurity UK",
    "network security",
    "managed detection and response",
    "penetration testing UK",
    "SOC as a service",
    "cloud security",
    "ISO 27001",
    "Cyber Essentials Plus",
  ],
  authors: [{ name: "Perimeter Six" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Perimeter Six",
    title: "Perimeter Six | UK Cybersecurity & Network Security Partner",
    description:
      "End-to-end cybersecurity for networks, cloud, identity, applications and data. UK-based. 24/7 monitoring. Prevent, detect, respond, recover.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Perimeter Six — UK Cybersecurity Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perimeter Six | UK Cybersecurity & Network Security Partner",
    description:
      "End-to-end cybersecurity for networks, cloud, identity, applications and data. UK-based. 24/7 monitoring.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Organization structured data — helps search engines understand the entity.
// Kept as static JSON, injected via a script tag with a fixed, non-user
// controlled payload (never interpolate user input into this block).
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Perimeter Six",
  url: siteUrl,
  description:
    "UK-based cybersecurity and network security company providing managed detection, offensive security, cloud security and compliance services.",
  areaServed: "GB",
  serviceType: [
    "Cybersecurity Services",
    "Network Security",
    "Managed Detection and Response",
    "Penetration Testing",
    "Cloud Security",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${sora.variable} ${manrope.variable}`}>
      <head>
        {/* Static, non-user-controlled JSON-LD — safe to inject */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
