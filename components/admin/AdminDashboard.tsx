"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  business_name: string;
  service: string;
  project_details: string;
  status?: "New" | "Contacted" | "Closed";
};

const BRAND = {
  deep: "#003F73",
  mid: "#005A9C",
  white: "#FFFFFF",
};

/* ---------- Particle Field ---------- */
function Particles({ count = 70 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2 + 0.5,
        d: Math.random() * 10 + 8,
        delay: Math.random() * 5,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: BRAND.white,
            boxShadow: `0 0 ${p.s * 6}px ${BRAND.mid}`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ---------- Grid Floor ---------- */
function GridFloor() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[70vh]"
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          transform: "rotateX(70deg)",
          transformOrigin: "bottom",
          backgroundImage: `
            linear-gradient(${BRAND.mid}55 1px, transparent 1px),
            linear-gradient(90deg, ${BRAND.mid}55 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
        }}
        animate={{ backgroundPositionY: ["0px", "60px"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ---------- AI Core Orb ---------- */
function AICore() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${BRAND.mid} 0%, ${BRAND.deep} 50%, transparent 70%)`,
          }}
        />
      </motion.div>
      <motion.div
        className="absolute h-[260px] w-[260px] rounded-full border opacity-40"
        style={{ borderColor: BRAND.mid }}
        animate={{ rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[180px] w-[180px] rounded-full border opacity-60"
        style={{ borderColor: BRAND.white }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ---------- Network Lines (SVG) ---------- */
function NetworkLines() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
    []
  );
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={`${n.x}%`}
            y1={`${n.y}%`}
            x2={`${m.x}%`}
            y2={`${m.y}%`}
            stroke={BRAND.mid}
            strokeWidth={0.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: (i + j) * 0.3 }}
          />
        ))
      )}
    </svg>
  );
}

/* ---------- Tilt Card ---------- */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-50, 50], [12, -12]);
  const rotateY = useTransform(sx, [-50, 50], [-12, 12]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Animated Counter ---------- */
function Counter({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    const from = display;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setDisplay(Math.round(from + (value - from) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <span>{display.toLocaleString()}</span>;
}

/* ---------- Stat Cube ---------- */
function StatCube({
  label,
  value,
  hint,
  delay = 0,
}: {
  label: string;
  value: number | string;
  hint?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
    >
      <TiltCard className="relative h-full">
        <div
          className="relative h-full overflow-hidden rounded-2xl border p-6 backdrop-blur-xl"
          style={{
            borderColor: `${BRAND.mid}55`,
            background: `linear-gradient(135deg, ${BRAND.deep}55, ${BRAND.mid}22)`,
            boxShadow: `0 20px 60px -20px ${BRAND.deep}, inset 0 1px 0 ${BRAND.white}22`,
            transform: "translateZ(20px)",
          }}
        >
          <motion.div
            className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl"
            style={{ background: BRAND.mid, opacity: 0.4 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">{label}</p>
          <p
            className="mt-3 text-4xl font-bold text-white"
            style={{ textShadow: `0 0 20px ${BRAND.mid}` }}
          >
            {typeof value === "number" ? <Counter value={value} /> : value}
          </p>
          {hint && <p className="mt-2 text-xs text-white/50">{hint}</p>}
        </div>
      </TiltCard>
    </motion.div>
  );
}

/* ---------- Main Page ---------- */
export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [statuses, setStatuses] = useState<Record<string, Lead["status"]>>({});
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      setLeads((data as Lead[]) || []);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 30);
      my.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const parallaxX = useSpring(mx, { stiffness: 50, damping: 20 });
  const parallaxY = useSpring(my, { stiffness: 50, damping: 20 });

  /* Metrics */
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const weekAgo = now.getTime() - 7 * 86400000;
  const monthAgo = now.getTime() - 30 * 86400000;
  const prevMonthAgo = now.getTime() - 60 * 86400000;

  const todayLeads = leads.filter((l) => new Date(l.created_at).getTime() >= startOfDay).length;
  const weekLeads = leads.filter((l) => new Date(l.created_at).getTime() >= weekAgo).length;
  const monthLeads = leads.filter((l) => new Date(l.created_at).getTime() >= monthAgo).length;
  const prevMonth = leads.filter((l) => {
    const t = new Date(l.created_at).getTime();
    return t >= prevMonthAgo && t < monthAgo;
  }).length;
  const growth = prevMonth === 0 ? (monthLeads > 0 ? 100 : 0) : ((monthLeads - prevMonth) / prevMonth) * 100;

  const services = useMemo(
    () => Array.from(new Set(leads.map((l) => l.service).filter(Boolean))),
    [leads]
  );

  const filtered = leads
    .filter((l) => (serviceFilter === "all" ? true : l.service === serviceFilter))
    .filter((l) => {
      const q = search.toLowerCase();
      if (!q) return true;
      return (
        l.full_name?.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        l.business_name?.toLowerCase().includes(q) ||
        l.phone?.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const deleteLead = async (id: string) => {
    await supabase.from("leads").delete().eq("id", id);
    setLeads((p) => p.filter((l) => l.id !== id));
    setSelected(null);
  };

  const statusColors: Record<string, string> = {
    New: BRAND.mid,
    Contacted: "#FFB020",
    Closed: "#22C55E",
  };

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{
        background: `radial-gradient(ellipse at top, ${BRAND.deep} 0%, #000814 60%, #000 100%)`,
      }}
    >
      {/* Background layers */}
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute inset-0">
        <AICore />
      </motion.div>
      <NetworkLines />
      <Particles />
      <GridFloor />

      {/* Floating orbs */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{ background: BRAND.mid, opacity: 0.25 }}
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ background: BRAND.deep, opacity: 0.4 }}
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <div>
            <div className="flex items-center gap-3">
              <motion.div
                className="h-3 w-3 rounded-full"
                style={{ background: "#22C55E", boxShadow: "0 0 12px #22C55E" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Kangiten Command Center
              </p>
            </div>
            <h1
              className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ textShadow: `0 0 30px ${BRAND.mid}` }}
            >
              Admin Dashboard
            </h1>
          </div>
          <div
            className="rounded-full border px-4 py-2 text-xs backdrop-blur-xl"
            style={{ borderColor: `${BRAND.mid}66`, background: `${BRAND.deep}55` }}
          >
            {new Date().toLocaleString()}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          <StatCube label="Total Leads" value={leads.length} delay={0.05} />
          <StatCube label="Today" value={todayLeads} delay={0.15} />
          <StatCube label="This Week" value={weekLeads} delay={0.25} />
          <StatCube label="This Month" value={monthLeads} delay={0.35} />
          <StatCube
            label="Growth"
            value={`${growth >= 0 ? "+" : ""}${growth.toFixed(1)}%`}
            hint="vs previous 30 days"
            delay={0.45}
          />
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border p-4 backdrop-blur-xl sm:flex-row sm:items-center"
          style={{
            borderColor: `${BRAND.mid}55`,
            background: `linear-gradient(135deg, ${BRAND.deep}55, transparent)`,
            boxShadow: `0 20px 60px -20px ${BRAND.deep}`,
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads..."
            className="flex-1 rounded-xl border bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:ring-2"
            style={{ borderColor: `${BRAND.mid}66` }}
          />
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="rounded-xl border bg-black/30 px-4 py-2.5 text-sm text-white outline-none"
            style={{ borderColor: `${BRAND.mid}66` }}
          >
            <option value="all">All services</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="text-xs text-white/50">
            Sorted by newest · {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 overflow-hidden rounded-2xl border backdrop-blur-xl"
          style={{
            borderColor: `${BRAND.mid}55`,
            background: `linear-gradient(135deg, ${BRAND.deep}44, #00081455)`,
            boxShadow: `0 30px 80px -30px ${BRAND.deep}`,
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead
                className="text-xs uppercase tracking-wider text-white/60"
                style={{ background: `${BRAND.deep}66` }}
              >
                <tr>
                  {[
                    "Full Name",
                    "Email",
                    "Phone",
                    "Business",
                    "Service",
                    "Status",
                    "Created",
                    "",
                  ].map((h) => (
                    <th key={h} className="px-4 py-4 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-16 text-center text-white/50">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                        className="mx-auto mb-3 h-8 w-8 rounded-full border-2 border-white/20"
                        style={{ borderTopColor: BRAND.white }}
                      />
                      Syncing data stream...
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-16 text-center text-white/50">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((l, i) => {
                    const status = statuses[l.id] || l.status || "New";
                    return (
                      <motion.tr
                        key={l.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="border-t transition-colors hover:bg-white/5"
                        style={{ borderColor: `${BRAND.mid}22` }}
                      >
                        <td className="px-4 py-3 font-medium">{l.full_name}</td>
                        <td className="px-4 py-3 text-white/70">{l.email}</td>
                        <td className="px-4 py-3 text-white/70">{l.phone}</td>
                        <td className="px-4 py-3 text-white/70">{l.business_name}</td>
                        <td className="px-4 py-3">
                          <span
                            className="rounded-full border px-2.5 py-1 text-xs"
                            style={{
                              borderColor: `${BRAND.mid}88`,
                              background: `${BRAND.deep}66`,
                            }}
                          >
                            {l.service}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={status}
                            onChange={(e) =>
                              setStatuses((p) => ({
                                ...p,
                                [l.id]: e.target.value as Lead["status"],
                              }))
                            }
                            className="rounded-lg border bg-black/40 px-2 py-1 text-xs outline-none"
                            style={{
                              borderColor: statusColors[status!] + "AA",
                              color: statusColors[status!],
                            }}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="px-4 py-3 text-white/60">
                          {new Date(l.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => setSelected(l)}
                            className="rounded-lg border px-3 py-1.5 text-xs transition-all hover:scale-105"
                            style={{
                              borderColor: `${BRAND.mid}88`,
                              background: `${BRAND.mid}33`,
                            }}
                          >
                            View
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            style={{ background: "rgba(0,8,20,0.7)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: `linear-gradient(135deg, ${BRAND.deep}EE, #000814EE)`,
                borderColor: `${BRAND.mid}88`,
                boxShadow: `0 40px 100px -20px ${BRAND.deep}, inset 0 1px 0 ${BRAND.white}22`,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border p-8"
            >
              <motion.div
                className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
                style={{ background: BRAND.mid, opacity: 0.3 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Lead Profile</p>
              <h2
                className="mt-2 text-3xl font-bold"
                style={{ textShadow: `0 0 20px ${BRAND.mid}` }}
              >
                {selected.full_name}
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ["Email", selected.email],
                  ["Phone", selected.phone],
                  ["Business", selected.business_name],
                  ["Service", selected.service],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-xl border p-3"
                    style={{
                      borderColor: `${BRAND.mid}44`,
                      background: `${BRAND.deep}55`,
                    }}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-white/50">{k}</p>
                    <p className="mt-1 text-sm">{v}</p>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 rounded-xl border p-4"
                style={{ borderColor: `${BRAND.mid}44`, background: `${BRAND.deep}33` }}
              >
                <p className="text-[10px] uppercase tracking-wider text-white/50">
                  Project Details
                </p>
                <p className="mt-2 whitespace-pre-wrap text-sm text-white/80">
                  {selected.project_details}
                </p>
              </div>

              <p className="mt-4 text-xs text-white/40">
                Created {new Date(selected.created_at).toLocaleString()}
              </p>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-xl border px-5 py-2 text-sm transition-all hover:bg-white/5"
                  style={{ borderColor: `${BRAND.mid}66` }}
                >
                  Close
                </button>
                <button
                  onClick={() => deleteLead(selected.id)}
                  className="rounded-xl border px-5 py-2 text-sm transition-all hover:scale-105"
                  style={{
                    borderColor: "#EF444488",
                    background: "#EF444433",
                    color: "#FCA5A5",
                  }}
                >
                  Delete Lead
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}