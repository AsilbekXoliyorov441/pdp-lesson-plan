import { Link, useParams } from "react-router-dom";
import { htmlLessons } from "../lessons/html";
import Navbar from "../components/Navbar";
import { modules } from "../data/modules";

export default function LessonPage() {
  const { moduleId, lessonId } = useParams();

  const module = modules.find((item) => item.id === Number(moduleId));
  const lesson = module?.lessons.find((item) => item.id === Number(lessonId));

  if (!module || !lesson) {
    return <div className="p-10 text-white">Dars topilmadi</div>;
  }

  let LessonComponent = null;

  if (module.id === 1) {
    LessonComponent = htmlLessons[lesson.id];
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="mx-auto max-w-[1300px] px-5 py-10">
        <Link
          to={`/module/${module.id}`}
          className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
        >
          Orqaga
        </Link>

        <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-4xl font-black text-white">
            {lesson.title}: {lesson.topic}
          </h1>
        </div>

        {LessonComponent ? (
          <LessonComponent />
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
            Bu dars hali qo‘shilmagan
          </div>
        )}
      </section>
    </main>
  );
}
