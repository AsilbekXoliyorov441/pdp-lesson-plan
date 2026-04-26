import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, Code2, User, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Bosh sahifa",
    icon: Home,
    path: "/",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.35)",
    ring: "rgba(34,211,238,0.15)",
  },

  {
    id: "html",
    label: "HTML",
    icon: FaHtml5,
    path: "/section/html",
    color: "#f97316",
    glow: "rgba(249,115,22,0.38)",
    ring: "rgba(249,115,22,0.16)",
  },

  {
    id: "css",
    label: "CSS",
    icon: FaCss3Alt,
    path: "/section/css",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.38)",
    ring: "rgba(56,189,248,0.16)",
  },

  {
    id: "javascript",
    label: "JavaScript",
    icon: IoLogoJavascript,
    path: "/section/javascript",
    color: "#facc15",
    glow: "rgba(250,204,21,0.38)",
    ring: "rgba(250,204,21,0.16)",
  },

  {
    id: "react",
    label: "React",
    icon: FaReact,
    path: "/section/react",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.38)",
    ring: "rgba(34,211,238,0.16)",
  },
];

/* ─── Particle burst on tap ────────────────────────── */
function Particles({ color }) {
  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const dist = 28 + Math.random() * 12;
    return {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      scale: 0.4 + Math.random() * 0.6,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: p.scale }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.01 }}
          style={{ backgroundColor: color }}
          className="absolute h-1.5 w-1.5 rounded-full"
        />
      ))}
    </div>
  );
}

/* ─── Main Component ───────────────────────────────── */
export default function MobileFooterNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [burst, setBurst] = useState(null); // item id that just got tapped
  const [prevPath, setPrevPath] = useState(location.pathname);

  const activeItem =
    NAV_ITEMS.find((item) => item.path === location.pathname) ?? NAV_ITEMS[0];

  const handleTap = (item) => {
    if (item.path === location.pathname) return;
    setBurst(item.id);
    setTimeout(() => setBurst(null), 600);
    setPrevPath(location.pathname);
    navigate(item.path);
  };

  return (
    /* Wrapper: faqat mobil (lg+ da yashirin) */
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-5 lg:hidden">
      {/* Outer glow halo */}
      <motion.div
        animate={{ boxShadow: `0 0 60px 10px ${activeItem.glow}` }}
        transition={{ duration: 0.4 }}
        className="absolute inset-x-4 bottom-0 h-24 rounded-[36px] opacity-40 blur-xl"
        style={{ background: activeItem.glow }}
      />

      {/* Glass pill */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 30, delay: 0.2 }}
        className="relative flex items-center gap-1 rounded-[32px] px-3 py-2.5"
        style={{
          background: "rgba(8,12,20,0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid rgba(255,255,255,0.10)`,
          boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.5)`,
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = item.path === location.pathname;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleTap(item)}
              className="relative flex flex-col items-center outline-none"
              aria-label={item.label}
            >
              {/* Active background pill */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="absolute inset-0 rounded-[22px]"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${item.ring} 0%, transparent 70%)`,
                      border: `1px solid ${item.color}30`,
                      backgroundColor: `${item.color}15`,
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Particle burst */}
              <AnimatePresence>
                {burst === item.id && <Particles color={item.color} />}
              </AnimatePresence>

              {/* Icon + label */}
              <div className="relative flex flex-col items-center gap-0.5 w-[60px] h-[60px] justify-center">
                <motion.div
                  animate={
                    isActive ? { y: -2, scale: 1.15 } : { y: 0, scale: 1 }
                  }
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  {/* Glow behind icon when active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -inset-2 rounded-xl blur-md"
                      style={{ background: item.glow, opacity: 0.5 }}
                    />
                  )}
                  <Icon
                    size={22}
                    style={{ color: isActive ? item.color : "#475569" }}
                    className="relative transition-colors duration-200"
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                </motion.div>

                {/* Label */}
                <motion.span
                  animate={{
                    color: isActive ? item.color : "#475569",
                    fontSize: isActive ? "9px" : "8.5px",
                    fontWeight: isActive ? 700 : 500,
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative block leading-none tracking-wide"
                >
                  {item.label}
                </motion.span>
              </div>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}
