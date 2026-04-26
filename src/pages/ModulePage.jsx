import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  PlayCircle,
  Sparkles,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";
import MobileFooterNav from "../components/MobileFooterNav";
import { modules } from "../data/modules";

export default function ModulePage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const module = modules.find((item) => item.id === Number(moduleId));

  if (!module) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05070d] px-4 text-white">
        <div className="w-full max-w-sm rounded-[30px] border border-white/10 bg-white/[0.04] p-7 text-center shadow-2xl shadow-black/30 backdrop-blur-xl">
          <p className="mb-2 text-xl font-black">Module topilmadi</p>
          <p className="mb-6 text-sm text-slate-500">
            Bunday modul mavjud emas yoki noto‘g‘ri link ochilgan.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </main>
    );
  }

  const lessonCount = module.lessons.length;
  const totalHours = Math.round((lessonCount * 90) / 60);
  const firstLesson = module.lessons[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <Navbar />

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-[0.08]`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(251,146,60,0.10),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.10]" />
      </div>

      <section className="relative mx-auto w-full max-w-[1280px] px-4 pt-5 pb-32 sm:px-6 sm:pt-8 lg:px-8 lg:pb-20">
        {/* Top nav */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 flex items-center justify-between gap-3 sm:mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm font-bold text-slate-300 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft size={16} />
            Orqaga
          </button>

          <span className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 backdrop-blur-xl sm:px-4 sm:text-xs">
            Module
          </span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative mb-8 overflow-hidden rounded-[34px] border border-white/10 bg-[#090e1a]/85 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[44px] sm:p-6 lg:p-8"
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${module.color} opacity-[0.16]`}
          />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">
            <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/70 sm:text-[11px]">
                  <Sparkles size={13} className="text-cyan-300" />
                  Frontend Learning Path
                </span>

                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
                  {module.subtitle}
                </p>

                <h1 className="mb-4 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {module.title}
                </h1>

                <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {module.description}
                </p>
              </div>

              <button
                onClick={() => {
                  if (firstLesson) {
                    navigate(`/lesson/${module.id}/${firstLesson.id}`);
                  }
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-white/10 transition hover:scale-[1.02] sm:w-auto"
              >
                <PlayCircle size={18} />
                Boshlash
              </button>
            </div>

            {/* Stats */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                <BookOpen size={20} className="mb-3 text-cyan-300" />
                <p className="text-2xl font-black text-white">{lessonCount}</p>
                <p className="text-xs font-semibold text-slate-500">Darslar</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                <Clock size={20} className="mb-3 text-violet-300" />
                <p className="text-2xl font-black text-white">{totalHours}</p>
                <p className="text-xs font-semibold text-slate-500">
                  Taxminiy soat
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                <GraduationCap size={20} className="mb-3 text-orange-300" />
                <p className="text-2xl font-black text-white">Amaliy</p>
                <p className="text-xs font-semibold text-slate-500">
                  O‘rganish formati
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lessons header */}
        <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              Lessons
            </p>
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Darslar ro‘yxati
            </h2>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-bold text-slate-400">
            <CheckCircle2 size={15} className="text-cyan-300" />
            {lessonCount} ta dars mavjud
          </div>
        </div>

        {/* Lessons grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {module.lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.04 + index * 0.04,
                duration: 0.4,
              }}
              className="group relative"
            >
              <div
                className={`pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br ${module.color} opacity-0 blur-2xl transition duration-300 group-hover:opacity-25`}
              />

              <div className="relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-[1px] shadow-xl shadow-black/25 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
                <div className="h-full rounded-[29px] bg-[#080c14]/95 p-1">
                  <LessonCard
                    moduleId={module.id}
                    lesson={lesson}
                    index={index}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <MobileFooterNav />
    </main>
  );
}
