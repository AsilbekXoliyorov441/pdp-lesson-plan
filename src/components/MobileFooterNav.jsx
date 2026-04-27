

import { useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Home } from "lucide-react";
import { useRef, useLayoutEffect } from "react";

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

export default function MobileFooterNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeIndex = NAV_ITEMS.findIndex(
    (item) => item.path === location.pathname,
  );
  const activeItem = NAV_ITEMS[activeIndex === -1 ? 0 : activeIndex];

  const buttonRefs = useRef([]);
  const navRef = useRef(null);
  const isFirstRender = useRef(true);

  const indicatorX = useMotionValue(0);
  const indicatorW = useMotionValue(70);
  const springX = useSpring(indicatorX, {
    stiffness: 380,
    damping: 30,
    mass: 0.8,
  });
  const springW = useSpring(indicatorW, {
    stiffness: 380,
    damping: 30,
    mass: 0.8,
  });

  useLayoutEffect(() => {
    const idx = activeIndex === -1 ? 0 : activeIndex;
    const btn = buttonRefs.current[idx];
    const nav = navRef.current;
    if (!btn || !nav) return;

    const x =
      btn.getBoundingClientRect().left - nav.getBoundingClientRect().left;
    const w = btn.getBoundingClientRect().width;

    if (isFirstRender.current) {
      indicatorX.set(x);
      springX.set(x);
      indicatorW.set(w);
      springW.set(w);
      isFirstRender.current = false;
    } else {
      indicatorX.set(x);
      indicatorW.set(w);
    }
  }, [activeIndex]);

  const handleTap = (item) => {
    if (item.path === location.pathname) return;
    navigate(item.path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-5 lg:hidden">
      {/* Outer glow */}
      <div
        key={activeItem.id}
        className="absolute inset-x-4 bottom-0 h-24 rounded-[36px] opacity-40 blur-xl pointer-events-none"
        style={{
          background: activeItem.glow,
          boxShadow: `0 0 60px 10px ${activeItem.glow}`,
        }}
      />

      {/* Glass pill */}
      <motion.nav
        ref={navRef}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 30, delay: 0.2 }}
        className="relative flex items-center gap-1 rounded-[32px] px-3 py-2.5"
        style={{
          background: "rgba(8,12,20,0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.5)",
        }}
      >
        {/* Sliding indicator */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-[1px] top-2.5 bottom-2.5 rounded-[22px]"
          style={{
            x: springX,
            width: springW,
            background: `radial-gradient(ellipse at 50% 0%, ${activeItem.ring} 0%, transparent 70%)`,
            border: `1px solid ${activeItem.color}30`,
            backgroundColor: `${activeItem.color}15`,
          }}
        />

        {NAV_ITEMS.map((item, index) => {
          const isActive = item.path === location.pathname;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleTap(item)}
              className="relative flex flex-col items-center  justify-center outline-none"
              aria-label={item.label}
            >
              <div className="relative flex flex-col items-center gap-0.5 w-[70px] h-[70px] justify-center">
                <motion.div
                  animate={
                    isActive ? { y: -2, scale: 1.15 } : { y: 0, scale: 1 }
                  }
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -inset-2 rounded-xl blur-md"
                      style={{ background: item.glow, opacity: 0.5 }}
                    />
                  )}
                  <Icon
                    size={18}
                    style={{ color: isActive ? item.color : "#475569" }}
                    className="relative transition-colors duration-200"
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                </motion.div>

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