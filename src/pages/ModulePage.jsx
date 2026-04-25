import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";
import { modules } from "../data/modules";

export default function ModulePage() {
  const { moduleId } = useParams();

  const module = modules.find((item) => item.id === Number(moduleId));

  if (!module) {
    return <div className="p-10 text-white">Module topilmadi</div>;
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 py-10">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
        >
          <ArrowLeft size={17} />
          Orqaga
        </Link>

        <div
          className={`mb-10 rounded-[32px] bg-gradient-to-br ${module.color} p-8`}
        >
          <p className="mb-3 font-semibold text-white/80">{module.subtitle}</p>
          <h1 className="mb-3 text-4xl font-black text-white">
            {module.title}
          </h1>
          <p className="text-white/80">{module.description}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {module.lessons.map((lesson) => (
            <LessonCard key={lesson.id} moduleId={module.id} lesson={lesson} />
          ))}
        </div>
      </section>
    </main>
  );
}
