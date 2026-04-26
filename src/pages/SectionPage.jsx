// src/pages/SectionPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import MobileFooterNav from "../components/MobileFooterNav";
import { courseSections } from "../data/modules";

const SECTION_META = {
  html: {
    emoji: "🌐",
    glow: "rgba(249,115,22,0.20)",
    ring: "rgba(249,115,22,0.12)",
    accent: "#f97316",
  },
  css: {
    emoji: "🎨",
    glow: "rgba(34,211,238,0.20)",
    ring: "rgba(34,211,238,0.12)",
    accent: "#22d3ee",
  },
  javascript: {
    emoji: "⚡",
    glow: "rgba(245,158,11,0.20)",
    ring: "rgba(245,158,11,0.12)",
    accent: "#f59e0b",
  },
  react: {
    emoji: "⚛️",
    glow: "rgba(168,85,247,0.20)",
    ring: "rgba(168,85,247,0.12)",
    accent: "#a855f7",
  },
};

export default function SectionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const section = courseSections.find((s) => s.id === id);

  if (!section) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#080c14] text-white">
        <p className="text-slate-400">Bo'lim topilmadi.</p>
        <button
          onClick={() => navigate("/")}
          className="rounded-xl border border-white/10 bg-white/6 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Bosh sahifaga qaytish
        </button>
      </main>
    );
  }

  const meta = SECTION_META[section.id] ?? SECTION_META.html;
  const isEmpty = section.modules.length === 0;
  const totalLessons = section.modules.reduce(
    (a, m) => a + m.lessons.length,
    0,
  );

  return (
    <main className="min-h-screen bg-[#080c14] text-white">
      <Navbar />

      {/* Ambient blob — section rangi */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full blur-[130px]"
          style={{ background: meta.glow, opacity: 0.9 }}
        />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-slate-800/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 pt-8 pb-32 sm:px-6 lg:px-8 lg:pb-20">
        {" "}
        {/* ── BACK ────────────────────────────────────────── */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-400 transition hover:border-white/16 hover:bg-white/8 hover:text-white"
        >
          <ArrowLeft size={14} />
          Orqaga
        </motion.button>
        {/* ── SECTION HEADER ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Icon */}
            <div
              className={`grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-gradient-to-br ${section.color} text-4xl shadow-xl`}
            >
              {meta.emoji}
            </div>

            <div>
              <p
                className="mb-1 text-xs font-bold uppercase tracking-widest"
                style={{ color: meta.accent }}
              >
                {section.subtitle}
              </p>
              <h1 className="mb-2 text-4xl font-black text-white sm:text-5xl">
                {section.title}
              </h1>
              <p className="text-sm leading-relaxed text-slate-400">
                {section.description}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-white/6" />

          {/* Meta row */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <BookOpen size={14} style={{ color: meta.accent }} />
              <span className="text-sm text-slate-400">
                <span className="font-bold text-white">
                  {section.modules.length}
                </span>{" "}
                modul
              </span>
            </div>
            {totalLessons > 0 && (
              <div className="flex items-center gap-2">
                <Clock size={14} style={{ color: meta.accent }} />
                <span className="text-sm text-slate-400">
                  <span className="font-bold text-white">{totalLessons}</span>{" "}
                  dars
                </span>
              </div>
            )}
            {totalLessons > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">
                  Jami:{" "}
                  <span className="font-bold text-white">
                    {Math.round((totalLessons * 90) / 60)} soat
                  </span>
                </span>
              </div>
            )}
          </div>
        </motion.div>
        {/* ── MODULE LIST ─────────────────────────────────── */}
        {isEmpty ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-white/10 bg-white/[0.02] py-20 text-center"
          >
            <div className="grid h-16 w-16 place-items-center rounded-3xl border border-white/10 bg-white/5 text-3xl">
              ⚛️
            </div>
            <div>
              <p className="mb-1 text-lg font-bold text-white">
                Modulelar tez orada qo'shiladi
              </p>
              <p className="text-sm text-slate-500">
                React JS bo'limi hozirda tayyorlanmoqda.
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="mt-2 rounded-xl border border-white/10 bg-white/6 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Boshqa bo'limlarni ko'rish
            </button>
          </motion.div>
        ) : (
          <>
            {/* Divider */}
            <div className="mb-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/6" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                {section.modules.length} ta modul
              </span>
              <div className="h-px flex-1 bg-white/6" />
            </div>

            {/* Modules */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {section.modules.map((module, idx) => {
                const lessonCount = module.lessons.length;
                const hours = Math.round((lessonCount * 90) / 60);

                return (
                  <motion.button
                    key={module.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.07 + idx * 0.07,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => navigate(`/module/${module.id}`)}
                    className="group relative flex min-h-[260px] w-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-5 text-left shadow-xl shadow-black/20 transition duration-300 hover:border-white/20 hover:bg-white/[0.075]"
                  >
                    {/* Premium glow */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 20% 0%, ${meta.ring}, transparent 55%)`,
                      }}
                    />

                    {/* Top */}
                    <div className="relative mb-5 flex items-start justify-between gap-4">
                      <div
                        className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${section.color} text-lg font-black text-white shadow-lg`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-bold text-slate-400">
                        Modul
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative flex-1">
                      <p
                        className="mb-2 text-[11px] font-black uppercase tracking-[0.18em]"
                        style={{ color: meta.accent }}
                      >
                        {module.title}
                      </p>

                      <h3 className="mb-3 line-clamp-2 text-xl font-black leading-tight text-white">
                        {module.subtitle}
                      </h3>

                      <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
                        {module.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="relative mt-6">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-slate-300">
                          <BookOpen size={12} style={{ color: meta.accent }} />
                          {lessonCount} dars
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-slate-300">
                          <Clock size={12} style={{ color: meta.accent }} />
                          {hours} soat
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/8 pt-4">
                        <span className="text-xs font-bold text-slate-500">
                          Darslarni ko‘rish
                        </span>

                        <div
                          className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05] transition group-hover:translate-x-1 group-hover:bg-white/[0.1]"
                          style={{
                            boxShadow: `0 0 22px ${meta.ring}`,
                          }}
                        >
                          <ChevronRight size={17} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <MobileFooterNav />
    </main>
  );
}
