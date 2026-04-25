import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function LessonCard({ moduleId, lesson }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300">
          <PlayCircle />
        </div>

        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
          {lesson.duration}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">{lesson.title}</h3>
      <p className="mb-4 text-sm text-slate-400">{lesson.topic}</p>

      <Link
        to={`/module/${moduleId}/lesson/${lesson.id}`}
        className="block rounded-2xl bg-white/10 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-400 hover:text-slate-950"
      >
        Dars rejasini ochish
      </Link>
    </motion.div>
  );
}
