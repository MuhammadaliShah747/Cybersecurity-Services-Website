import type { LucideIcon } from "lucide-react";
import {
  Radar,
  ShieldCheck,
  Swords,
  Cloud,
  Code2,
  KeyRound,
  Database,
  ClipboardCheck,
  LifeBuoy,
  Mail,
  Factory,
  Sparkles,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#why-us" },
  { label: "Resources", href: "#methodology" },
  { label: "Contact", href: "#contact" },
];

export interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "detection",
    icon: Radar,
    title: "Security Operations & Threat Detection",
    description:
      "Round-the-clock monitoring and expert-led response, so threats are found and contained before they become incidents.",
    examples: ["SOC as a Service", "Managed Detection & Response", "Managed SIEM", "Threat Hunting"],
  },
  {
    id: "network",
    icon: ShieldCheck,
    title: "Network & Infrastructure Security",
    description:
      "Architecture, segmentation and access control that shrink your attack surface without slowing the business down.",
    examples: ["Zero Trust Architecture", "Next-Gen Firewalls", "SASE / SSE", "DDoS Protection"],
  },
  {
    id: "offensive",
    icon: Swords,
    title: "Offensive Security",
    description:
      "Independent testing that shows exactly how an attacker would get in — before one does.",
    examples: ["Penetration Testing", "Red & Purple Teaming", "Breach & Attack Simulation", "Phishing Simulation"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Posture management and secure architecture across AWS, Azure and Google Cloud, built for how you actually deploy.",
    examples: ["CSPM / CNAPP", "Kubernetes Security", "Multi-Cloud Architecture Review", "Container Security"],
  },
  {
    id: "appsec",
    icon: Code2,
    title: "Application & DevSecOps Security",
    description:
      "Security folded into the delivery pipeline, so vulnerabilities are caught in code, not in production.",
    examples: ["SAST / DAST / SCA", "Secure SDLC", "CI/CD Security", "Software Supply-Chain (SBOM)"],
  },
  {
    id: "identity",
    icon: KeyRound,
    title: "Identity Security",
    description:
      "Controlling who can reach what, with the governance to prove it — a foundation for every other control you run.",
    examples: ["IAM & PAM", "MFA / SSO", "Identity Governance", "Entra ID & Active Directory Security"],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Security",
    description:
      "Protecting the information that matters most, from classification through encryption to ransomware resilience.",
    examples: ["Data Loss Prevention", "Encryption & Key Management", "Database Security", "Ransomware Resilience"],
  },
  {
    id: "grc",
    icon: ClipboardCheck,
    title: "Governance, Risk & Compliance",
    description:
      "Practical, UK-focused guidance to meet the frameworks your customers and regulators ask for.",
    examples: ["ISO 27001 Readiness", "Cyber Essentials Plus", "vCISO", "Risk & Gap Assessments"],
  },
  {
    id: "incident-response",
    icon: LifeBuoy,
    title: "Incident Response & Resilience",
    description:
      "When something does go wrong, a team that contains it, investigates it, and gets you back to business.",
    examples: ["Incident Response Retainers", "Digital Forensics", "Ransomware Response", "Tabletop Exercises"],
  },
  {
    id: "endpoint",
    icon: Mail,
    title: "Email, Endpoint & User Security",
    description:
      "Protecting the devices and inboxes attackers target first, and the people who use them every day.",
    examples: ["EDR / XDR", "Email & Anti-Phishing", "Security Awareness Training", "Device Security"],
  },
  {
    id: "ot-iot",
    icon: Factory,
    title: "OT / IoT / Critical Infrastructure",
    description:
      "Specialist protection for industrial systems, where availability and safety come first.",
    examples: ["ICS / SCADA Security", "OT Network Segmentation", "IoT Security Assessments", "Asset Discovery"],
  },
  {
    id: "emerging",
    icon: Sparkles,
    title: "Emerging Security",
    description:
      "Forward-looking coverage for the risks your existing controls weren't built for.",
    examples: ["AI / LLM Security", "AI Model Red Teaming", "Attack Surface Management", "Third-Party Risk"],
  },
];

export interface Industry {
  title: string;
  description: string;
}

export const INDUSTRIES: Industry[] = [
  { title: "Financial Services", description: "Resilience and control for regulated, high-value environments." },
  { title: "Healthcare", description: "Protecting patient data and clinical systems that cannot afford downtime." },
  { title: "Government & Public Sector", description: "Security aligned with NCSC guidance and public-sector assurance needs." },
  { title: "Telecommunications", description: "Securing the networks other critical services depend on." },
  { title: "Technology", description: "Security that scales with fast-moving product and engineering teams." },
  { title: "Retail & E-commerce", description: "Safeguarding payment data and customer trust at peak trading volumes." },
  { title: "Professional Services", description: "Protecting client confidentiality and sensitive case data." },
  { title: "Manufacturing", description: "Bridging IT and OT security across plant and enterprise systems." },
  { title: "Critical Infrastructure", description: "Specialist protection where safety and availability are non-negotiable." },
];

export interface MethodologyStep {
  step: string;
  description: string;
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  { step: "Discover", description: "Map assets, data flows and exposure across your estate." },
  { step: "Assess", description: "Identify vulnerabilities, risks and gaps against real threats." },
  { step: "Design", description: "Architect controls that fit your business, not a generic template." },
  { step: "Protect", description: "Implement defences across network, cloud, identity and data." },
  { step: "Monitor", description: "Watch continuously for signs of compromise, day and night." },
  { step: "Detect", description: "Identify threats early using intelligence-led analysis." },
  { step: "Respond", description: "Contain and neutralise incidents with a practised team." },
  { step: "Recover", description: "Restore operations quickly, safely and with evidence intact." },
  { step: "Improve", description: "Feed every finding back into a stronger security posture." },
];

export const CAPABILITY_LAYERS = [
  "Users",
  "Identity",
  "Devices",
  "Applications",
  "Network",
  "Cloud",
  "Data",
  "SOC / Detection / Response",
];

export interface TrustBadge {
  label: string;
  status: "aligned" | "in progress";
}

export const TRUST_BADGES: TrustBadge[] = [
  { label: "ISO 27001", status: "in progress" },
  { label: "Cyber Essentials Plus", status: "in progress" },
  { label: "CREST", status: "in progress" },
  { label: "NCSC-Aligned Practices", status: "aligned" },
  { label: "UK GDPR", status: "aligned" },
  { label: "SOC 2", status: "in progress" },
];

export const METRICS = [
  { value: "24/7", label: "Monitoring coverage" },
  { value: "< 15 min", label: "Target alert triage time" },
  { value: "9", label: "Stages of continuous protection" },
  { value: "100%", label: "UK-based analyst team" },
];

export const WHY_US_POINTS = [
  {
    title: "End-to-end coverage",
    description: "One partner across network, cloud, identity, application, data and endpoint security.",
  },
  {
    title: "Offensive and defensive expertise",
    description: "The same team that tests your defences also builds and runs them.",
  },
  {
    title: "Continuous monitoring",
    description: "Threats don't keep office hours, so neither does our SOC.",
  },
  {
    title: "Rapid, practised response",
    description: "Incident response retainers and tested playbooks, not first-time improvisation.",
  },
  {
    title: "Security-first engineering",
    description: "Controls designed to hold up under real conditions, not just pass an audit.",
  },
  {
    title: "Vendor-neutral recommendations",
    description: "We recommend what fits your environment, not what pays the best commission.",
  },
];

export const FOOTER_LINKS = {
  Services: [
    "Security Operations",
    "Network Security",
    "Offensive Security",
    "Cloud Security",
    "Governance & Compliance",
  ],
  Company: ["About Us", "Careers", "Newsroom", "Partners"],
  Resources: ["Blog", "Threat Advisories", "Case Studies", "Security Glossary"],
  Legal: ["Privacy Policy", "Cookie Policy", "Terms of Service", "Responsible Disclosure"],
};
