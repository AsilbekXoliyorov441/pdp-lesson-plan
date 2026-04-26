// src/pages/DashboardPage.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  Rocket,
  
} from "lucide-react";


import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import Navbar from "../components/Navbar";
import { courseSections } from "../data/modules";

const SECTION_ICONS = {
  html: {
    Icon: FaHtml5,
    iconColor: "text-orange-400",
    stat: "text-orange-400",
    ring: "rgba(249,115,22,0.15)",
  },
  css: {
    Icon: FaCss3Alt,
    iconColor: "text-sky-400",
    stat: "text-sky-400",
    ring: "rgba(56,189,248,0.15)",
  },
  javascript: {
    Icon: IoLogoJavascript,
    iconColor: "text-yellow-400",
    stat: "text-yellow-400",
    ring: "rgba(250,204,21,0.15)",
  },
  react: {
    Icon: FaReact,
    iconColor: "text-cyan-400",
    stat: "text-cyan-400",
    ring: "rgba(34,211,238,0.15)",
  },
};

const SECTION_DETAILS = {
  html: {
    level: "Boshlang‘ich",
    focus: "Website strukturasi",
    result: "Semantik layout tuzish",
    skills: ["Tags", "Forms", "Tables", "SEO structure"],
  },
  css: {
    level: "Boshlang‘ich+",
    focus: "Design va layout",
    result: "Responsive sahifa yasash",
    skills: ["Flexbox", "Grid", "Animation", "Responsive"],
  },
  javascript: {
    level: "O‘rta",
    focus: "Interaktivlik",
    result: "Dinamik web elementlar",
    skills: ["DOM", "Events", "Functions", "Arrays"],
  },
  react: {
    level: "Advanced start",
    focus: "Component-based UI",
    result: "Real loyihalar qurish",
    skills: ["Components", "Props", "State", "Hooks"],
  },
};

const headerStats = [
  { label: "Bo'limlar", value: courseSections.length, icon: Layers },
  {
    label: "Modulelar",
    value: courseSections.reduce((a, s) => a + s.modules.length, 0),
    icon: BookOpen,
  },
  {
    label: "Darslar",
    value: courseSections.reduce(
      (a, s) => a + s.modules.reduce((b, m) => b + m.lessons.length, 0),
      0,
    ),
    icon: Code2,
  },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#080c14] text-white">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/6 blur-[130px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-600/6 blur-[120px]" />
        <div className="absolute bottom-10 left-1/3 h-[300px] w-[300px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 pt-8 pb-32 sm:px-6 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <Sparkles size={11} />
              PDP Junior Frontend Roadmap
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
            <div>
              <h1 className="mb-4 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                Frontend{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
                  Dars Reja
                </span>
                <br />
                Platformasi
              </h1>

              <p className="mb-8 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
                HTML, CSS, JavaScript va React JS bo‘yicha bosqichma-bosqich
                tuzilgan roadmap. Har bir bo‘limda nazariya, amaliy mashqlar,
                mini projectlar va yakuniy mustahkamlash darslari mavjud.
              </p>

              <div className="flex flex-wrap gap-3">
                {headerStats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.07 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3"
                    >
                      <div className="rounded-xl border border-white/8 bg-white/6 p-2">
                        <Icon size={15} className="text-slate-300" />
                      </div>
                      <div>
                        <p className="text-lg font-black text-white">
                          {s.value}
                        </p>
                        <p className="text-[11px] text-slate-500">{s.label}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="hidden rounded-3xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm lg:block"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Rocket size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">Yo'nalish</p>
                  <p className="text-sm font-bold text-white">Frontend Track</p>
                </div>
              </div>

              <div className="space-y-2">
                {courseSections.map((s, i) => {
                  const cfg = SECTION_ICONS[s.id] ?? SECTION_ICONS.html;
                  const Icon = cfg.Icon;
                  const totalLessons = s.modules.reduce(
                    (a, m) => a + m.lessons.length,
                    0,
                  );
                  const pct =
                    s.modules.length === 0
                      ? 5
                      : Math.min(s.modules.length * 18, 100);

                  return (
                    <button
                      key={s.id}
                      onClick={() => navigate(`/section/${s.id}`)}
                      className="group w-full rounded-2xl border border-white/6 bg-white/3 p-3 text-left transition hover:border-white/12 hover:bg-white/6"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className={`text-lg ${cfg.iconColor}`} />
                          <span className="text-sm font-semibold text-white">
                            {s.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          {s.modules.length}m · {totalLessons}d
                        </span>
                      </div>

                      <div className="h-1 overflow-hidden rounded-full bg-white/8">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{
                            delay: 0.6 + i * 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/6" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
            Bo'limni tanlang
          </span>
          <div className="h-px flex-1 bg-white/6" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {courseSections.map((section, i) => {
            const cfg = SECTION_ICONS[section.id] ?? SECTION_ICONS.html;
            const details = SECTION_DETAILS[section.id] ?? SECTION_DETAILS.html;
            const Icon = cfg.Icon;

            const isEmpty = section.modules.length === 0;
            const totalLessons = section.modules.reduce(
              (a, m) => a + m.lessons.length,
              0,
            );
            const pct = isEmpty
              ? 5
              : Math.min(section.modules.length * 18, 100);

            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.09,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, scale: 1.018 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/section/${section.id}`)}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] p-6 text-left transition-colors hover:border-white/16 hover:bg-white/[0.07]"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 40% 0%, ${cfg.ring} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative mb-6 flex items-start justify-between">
                  <div
                    className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${section.color}/10 shadow-lg shadow-black/20`}
                  >
                    <Icon
                      className={`text-4xl ${cfg.iconColor} drop-shadow-lg`}
                    />
                  </div>

                  {isEmpty ? (
                    <span className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[10px] font-bold text-slate-400">
                      Tez orada
                    </span>
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2 transition group-hover:border-white/20 group-hover:bg-white/10">
                      <ChevronRight
                        size={15}
                        className="text-slate-500 transition group-hover:text-white"
                      />
                    </div>
                  )}
                </div>

                <div className="relative mb-1">
                  <h2 className="text-2xl font-black text-white">
                    {section.title}
                  </h2>
                </div>

                <p
                  className={`relative mb-3 text-xs font-bold uppercase tracking-wider ${cfg.stat}`}
                >
                  {section.subtitle}
                </p>

                <p className="relative mb-5 text-sm leading-relaxed text-slate-400">
                  {section.description}
                </p>

                <div className="relative flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <BookOpen size={11} />
                    {section.modules.length} modul
                  </span>

                  {totalLessons > 0 && (
                    <>
                      <span className="h-3 w-px bg-white/10" />
                      <span>{totalLessons} dars</span>
                    </>
                  )}
                </div>

                {/* <div className="relative mt-auto">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <span>Roadmap progress</span>
                    <span>{pct}%</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{
                        delay: 0.4 + i * 0.1,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${section.color}`}
                    />
                  </div>
                </div> */}
              </motion.button>
            );
          })}
        </div>
      </div>

    </main>
  );
}
