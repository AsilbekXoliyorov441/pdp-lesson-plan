import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export default function ModuleCard({ module }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
    >
      <div
        className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${module.color} opacity-30 blur-2xl`}
      />

      <div
        className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${module.color}`}
      >
        <BookOpen className="text-white" />
      </div>

      <p className="mb-2 text-sm font-medium text-cyan-300">
        {module.subtitle}
      </p>

      <h2 className="mb-3 text-2xl font-black text-white">{module.title}</h2>

      <p className="mb-6 text-sm leading-6 text-slate-300">
        {module.description}
      </p>

      <div className="mb-6 flex items-center justify-between rounded-2xl bg-black/20 p-4">
        <span className="text-sm text-slate-400">Darslar soni</span>
        <span className="text-lg font-bold text-white">
          {module.lessons.length} ta
        </span>
      </div>

      <Link
        to={`/module/${module.id}`}
        className="flex items-center justify-between rounded-2xl bg-white px-5 py-3 font-bold text-slate-950 transition group-hover:bg-cyan-300"
      >
        Modulga kirish
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}