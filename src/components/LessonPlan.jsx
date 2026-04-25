export default function LessonPlan({ lesson }) {
  if (lesson.moduleId === 1 && lesson.id !== 1) {
    return (
      <div className="rounded-[36px] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl">
        <h2 className="mb-3 text-3xl font-black text-white">
          {lesson.title}: {lesson.topic}
        </h2>

        <p className="mx-auto max-w-xl text-slate-300">
          Bu dars uchun interaktiv sahifa hali qo‘shilmagan. Mavzuni
          tashlasangiz, men shu darsga alohida chiroyli interactive lesson board
          qilib beraman.
        </p>
      </div>
    );
  }

}
