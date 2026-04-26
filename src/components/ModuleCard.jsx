import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Layers, Sparkles } from "lucide-react";

export default function ModuleCard({ module }) {
  const lessonCount = module.lessons?.length || 0;
  const totalHours = Math.round((lessonCount * 90) / 60);

  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1020]/80 p-[1px] shadow-2xl shadow-black/30 backdrop-blur-2xl"
    >
      {/* Gradient border glow */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 transition duration-500 group-hover:opacity-35`}
      />

      {/* Inner card */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[31px] bg-[#070b14]/95 p-6">
        {/* Ambient glow */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${module.color} opacity-25 blur-3xl transition duration-500 group-hover:opacity-45`}
        />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Top */}
        <div className="relative mb-7 flex items-start justify-between gap-4">
          <div
            className={`grid h-16 w-16 place-items-center rounded-[24px] bg-gradient-to-br ${module.color} shadow-xl shadow-black/30`}
          >
            <BookOpen size={28} className="text-white" />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
            <Sparkles size={12} className="text-cyan-300" />
            Module
          </span>
        </div>

        {/* Content */}
        <div className="relative flex-1">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            {module.subtitle}
          </p>

          <h2 className="mb-4 line-clamp-2 text-2xl font-black leading-tight tracking-tight text-white">
            {module.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
            {module.description}
          </p>
        </div>

        {/* Stats */}
        <div className="relative mt-7 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <Layers size={17} className="text-cyan-300" />
            </div>
            <p className="text-xl font-black text-white">{lessonCount}</p>
            <p className="text-[11px] font-semibold text-slate-500">Darslar</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <Clock size={17} className="text-violet-300" />
            </div>
            <p className="text-xl font-black text-white">{totalHours}</p>
            <p className="text-[11px] font-semibold text-slate-500">Soat</p>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/module/${module.id}`}
          className="relative mt-6 flex items-center justify-between overflow-hidden rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-white/10 transition duration-300 hover:scale-[1.02]"
        >
          <span>Modulga kirish</span>

          <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950 text-white transition group-hover:translate-x-1">
            <ArrowRight size={17} />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
