"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

export interface TelemetryNode {
    id: string;
    label: string;
    type: string;
    x: number;
    y: number;
    status: "healthy" | "watch" | "contained";
    detail: string;
}

export interface TelemetryEvent {
    id: string;
    time: string;
    message: string;
    source: string;
    severity: "low" | "medium" | "high";
}

export interface TelemetrySnapshot {
    nodes: TelemetryNode[];
    events: TelemetryEvent[];
    activeNodes: number;
    threatsBlocked: number;
    lastUpdated: string;
}

const DEMO_SNAPSHOT: TelemetrySnapshot = {
    activeNodes: 1204,
    threatsBlocked: 38,
    lastUpdated: "just now",
    nodes: [
        { id: "identity", label: "Identity", type: "IAM", x: 18, y: 27, status: "watch", detail: "Privileged access telemetry" },
        { id: "cloud", label: "Cloud", type: "AWS / Azure", x: 45, y: 16, status: "healthy", detail: "Configuration posture" },
        { id: "soc", label: "SOC", type: "24/7 analyst", x: 74, y: 28, status: "healthy", detail: "Detection and response" },
        { id: "endpoint", label: "Endpoint", type: "EDR / XDR", x: 28, y: 58, status: "healthy", detail: "Device health signals" },
        { id: "network", label: "Network", type: "SASE edge", x: 52, y: 47, status: "contained", detail: "Suspicious session contained" },
        { id: "data", label: "Data", type: "DLP / vault", x: 78, y: 57, status: "healthy", detail: "Sensitive data controls" },
        { id: "apps", label: "Applications", type: "DevSecOps", x: 44, y: 78, status: "watch", detail: "New release under review" },
        { id: "users", label: "Users", type: "People", x: 73, y: 82, status: "healthy", detail: "Behavioural baseline" },
    ],
    events: [
        { id: "evt-1", time: "09:42:18", message: "Privileged sign-in challenged", source: "Identity", severity: "medium" },
        { id: "evt-2", time: "09:41:56", message: "Anomalous session contained", source: "Network", severity: "high" },
        { id: "evt-3", time: "09:40:31", message: "New cloud asset assessed", source: "Cloud", severity: "low" },
    ],
};

const LINKS = [
    ["identity", "cloud"],
    ["identity", "endpoint"],
    ["cloud", "soc"],
    ["cloud", "network"],
    ["soc", "data"],
    ["endpoint", "network"],
    ["network", "data"],
    ["network", "apps"],
    ["apps", "users"],
    ["data", "users"],
] as const;

const STATUS_STYLES = {
    healthy: { color: "#879957", label: "Healthy" },
    watch: { color: "#B56D38", label: "Watch" },
    contained: { color: "#B85C4C", label: "Contained" },
};

function formatEvent(event: TelemetryEvent) {
    return event.message.length > 29 ? `${event.message.slice(0, 29)}...` : event.message;
}

interface NetworkVisualProps {
    className?: string;
    telemetry?: TelemetrySnapshot;
}

export function NetworkVisual({ className, telemetry }: NetworkVisualProps) {
    const [snapshot, setSnapshot] = useState(telemetry ?? DEMO_SNAPSHOT);
    const [selectedNode, setSelectedNode] = useState("network");
    const [eventIndex, setEventIndex] = useState(0);

    useEffect(() => {
        if (telemetry) return;
        const timer = window.setInterval(() => {
            setEventIndex((current) => (current + 1) % snapshot.events.length);
            setSnapshot((current) => ({
                ...current,
                threatsBlocked: current.threatsBlocked + (Math.random() > 0.55 ? 1 : 0),
                lastUpdated: "a few seconds ago",
            }));
        }, 3400);

        return () => window.clearInterval(timer);
    }, [snapshot.events.length, telemetry]);

    const renderedSnapshot = telemetry ?? snapshot;
    const selected = renderedSnapshot.nodes.find((node) => node.id === selectedNode) ?? renderedSnapshot.nodes[0];
    const visibleEvents = useMemo(
        () => renderedSnapshot.events.map((_, index) => renderedSnapshot.events[(eventIndex + index) % renderedSnapshot.events.length]),
        [eventIndex, renderedSnapshot.events]
    );

    return (
        <div className={`relative h-full min-h-[360px] overflow-hidden bg-[#282823] text-white ${className ?? ""}`}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#282823,#303129)]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,253,248,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,253,248,0.8)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-4 border border-white/[0.06]" />

            <div className="relative flex h-full min-h-[360px] flex-col p-4 sm:p-5">
                <div className="flex items-start justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#879957] opacity-60" />
                            <span className="relative h-2 w-2 rounded-full bg-[#879957]" />
                        </span>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Operations surface</p>
                            <p className="mt-0.5 text-[12px] font-semibold text-white/90">UK SOC / {telemetry ? "live telemetry" : "demo stream"}</p>
                        </div>
                    </div>
                    <span className="font-display text-[10px] text-white/45">{telemetry ? "SYNCED" : "SIMULATED"} {renderedSnapshot.lastUpdated.toUpperCase()}</span>
                </div>

                <div className="relative mt-3 flex-1 min-h-[195px]">
                    <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {LINKS.map(([fromId, toId]) => {
                            const from = renderedSnapshot.nodes.find((node) => node.id === fromId)!;
                            const to = renderedSnapshot.nodes.find((node) => node.id === toId)!;
                            const isConnected = selectedNode === fromId || selectedNode === toId;
                            return (
                                <motion.line
                                    key={`${fromId}-${toId}`}
                                    x1={from.x}
                                    y1={from.y}
                                    x2={to.x}
                                    y2={to.y}
                                    stroke={isConnected ? "#B6C477" : "rgba(255,253,248,0.18)"}
                                    strokeWidth={isConnected ? "0.7" : "0.35"}
                                    strokeDasharray={isConnected ? "2 1" : "0"}
                                    animate={isConnected ? { strokeDashoffset: [0, -6] } : { strokeDashoffset: 0 }}
                                    transition={isConnected ? { duration: 1.4, repeat: Infinity, ease: "linear" } : undefined}
                                />
                            );
                        })}
                    </svg>

                    {renderedSnapshot.nodes.map((node) => {
                        const isSelected = node.id === selectedNode;
                        const status = STATUS_STYLES[node.status];
                        return (
                            <motion.button
                                key={node.id}
                                type="button"
                                onClick={() => setSelectedNode(node.id)}
                                whileHover={{ scale: 1.14 }}
                                whileTap={{ scale: 0.94 }}
                                animate={isSelected ? { opacity: [0.84, 1, 0.84] } : { opacity: 1 }}
                                transition={isSelected ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" } : { type: "spring", stiffness: 300, damping: 18 }}
                                className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-2 focus-visible:outline-[#B6C477]"
                                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                aria-label={`${node.label}: ${status.label}. ${node.detail}`}
                                aria-pressed={isSelected}
                            >
                                <span className="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: `0 0 0 1px ${status.color}` }} />
                                <span className="relative flex h-4 w-4 rotate-45 items-center justify-center rounded-[3px] border-2 border-[#282823] shadow-[0_0_0_1px_rgba(255,253,248,0.22)] sm:h-5 sm:w-5" style={{ backgroundColor: status.color }}>
                                    <span className="h-1.5 w-1.5 -rotate-45 bg-[#FFFDF8]" />
                                </span>
                                <span className={`pointer-events-none absolute left-1/2 top-7 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold transition-opacity duration-300 ${isSelected ? "text-white" : "text-white/45 group-hover:text-white/80"}`}>
                                    {node.label}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                    <div className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/45">Active nodes</p>
                        <p className="mt-0.5 font-display text-lg font-semibold text-[#B6C477]">{renderedSnapshot.activeNodes.toLocaleString()}</p>
                    </div>
                    <div className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/45">Blocked / 24h</p>
                        <p className="mt-0.5 font-display text-lg font-semibold text-[#B6C477]">{renderedSnapshot.threatsBlocked}</p>
                    </div>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={selected.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-[#24251F]/60 px-3 py-2"
                    >
                        <div className="min-w-0">
                            <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">Selected / {selected.type}</p>
                            <p className="truncate text-[11px] font-semibold text-white/90">{selected.label} · {selected.detail}</p>
                        </div>
                        <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.12em]" style={{ color: STATUS_STYLES[selected.status].color }}>
                            {STATUS_STYLES[selected.status].label}
                        </span>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-2 flex items-center gap-2 overflow-hidden text-[9px] text-white/60">
                    <Icon icon="solar:bolt-circle-bold-duotone" className="h-3.5 w-3.5 shrink-0 text-[#B6C477]" aria-hidden="true" />
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span key={visibleEvents[0].id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="truncate">
                            {visibleEvents[0].time} · {formatEvent(visibleEvents[0])} · {visibleEvents[0].source}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
