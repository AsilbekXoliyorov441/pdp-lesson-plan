import { motion } from "framer-motion";
import { BookOpen, Code2, Layers, Rocket, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import ModuleCard from "../components/ModuleCard";
import { courseSections } from "../data/modules";

const stats = [
  { label: "Bo‘limlar", value: "4", icon: Layers },
  { label: "Modulelar", value: "10+", icon: BookOpen },
  { label: "Darslar", value: "120+", icon: Code2 },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-5 py-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-60 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-10 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-2xl md:p-10"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <Sparkles size={16} />
                PDP Junior Frontend Roadmap
              </div>

              <h1 className="mb-5 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
                Interaktiv, zamonaviy va amaliy dars reja platformasi
              </h1>

              <p className="max-w-2xl text-base leading-7 text-slate-300">
                HTML, CSS, JavaScript va React JS bo‘yicha 14-16 yoshli
                o‘quvchilar uchun qiziqarli, vizual va project-based darslar.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-white/10 bg-slate-950/50 p-5"
                    >
                      <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon size={21} />
                      </div>

                      <h3 className="text-3xl font-black text-white">
                        {item.value}
                      </h3>
                      <p className="text-sm text-slate-400">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Current Track</p>
                    <h3 className="text-2xl font-black text-white">Frontend</h3>
                  </div>

                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                    <Rocket className="text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  {courseSections.map((section, index) => (
                    <div
                      key={section.id}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-bold text-white">
                          {index + 1}. {section.title}
                        </span>
                        <span className="text-xs text-slate-400">
                          {section.modules.length} module
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${section.color}`}
                          style={{
                            width:
                              section.modules.length === 0
                                ? "18%"
                                : `${Math.min(
                                    section.modules.length * 18,
                                    100,
                                  )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative space-y-12">
          {courseSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.08 }}
              className="rounded-[34px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-7"
            >
              <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${section.color} shadow-lg`}
                    >
                      <BookOpen className="text-white" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-cyan-300">
                        {section.subtitle}
                      </p>
                      <h2 className="text-3xl font-black text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <p className="max-w-3xl text-sm leading-6 text-slate-300">
                    {section.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4">
                  <p className="text-xs text-slate-400">Jami module</p>
                  <p className="text-2xl font-black text-white">
                    {section.modules.length}
                  </p>
                </div>
              </div>

              {section.modules.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {section.modules.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-white/15 bg-slate-950/40 p-8 text-center">
                  <p className="text-lg font-bold text-white">
                    React JS modulelari keyin qo‘shiladi
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Hozircha HTML, CSS va JavaScript bo‘limlari tayyorlanmoqda.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
