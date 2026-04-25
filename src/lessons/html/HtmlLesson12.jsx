import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCheckCircle,
  FaTimesCircle,
  FaUserGraduate,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHtml5,
  FaFigma,
  FaUniversalAccess,
  FaCode,
  FaStar,
  FaMedal,
  FaClipboardCheck,
  FaMicrophone,
  FaRedo,
} from "react-icons/fa";
import { MdQuiz, MdAssignment, MdDashboardCustomize } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const monthTopics = [
  { title: "HTML asoslari", icon: FaHtml5, text: "Structure, tag, index.html" },
  {
    title: "Semantic HTML",
    icon: FaCode,
    text: "header, main, section, footer",
  },
  {
    title: "Form & Table",
    icon: FaClipboardCheck,
    text: "input, form, table, colspan",
  },
  {
    title: "Accessibility",
    icon: FaUniversalAccess,
    text: "ARIA, aria-label, role",
  },
  { title: "Figma", icon: FaFigma, text: "Design → HTML workflow" },
  {
    title: "Soft skills",
    icon: FaUsers,
    text: "Teamwork, feedback, presentation",
  },
];

const quiz = [
  { q: "HTML nima?", a: ["Markup language", "Database", "Server"], c: 0 },
  {
    q: "index.html nima uchun kerak?",
    a: [
      "Asosiy sahifa sifatida ochiladi",
      "Faqat CSS uchun",
      "Rasm saqlash uchun",
    ],
    c: 0,
  },
  {
    q: "<header> qayerda ishlatiladi?",
    a: ["Yuqori qism", "Jadval qatori", "Audio uchun"],
    c: 0,
  },
  { q: "<main> nima?", a: ["Asosiy content", "Pastki qism", "Rasm"], c: 0 },
  {
    q: "<section> nima uchun?",
    a: ["Alohida bo‘lim", "Telefon qilish", "Input yaratish"],
    c: 0,
  },
  {
    q: "img alt nima uchun?",
    a: ["Rasm ta’rifi uchun", "Rang berish uchun", "Video qo‘yish uchun"],
    c: 0,
  },
  {
    q: "mailto: nima qiladi?",
    a: ["Email oynasini ochadi", "Rasm yuklaydi", "Table yaratadi"],
    c: 0,
  },
  {
    q: "tel: nima uchun?",
    a: ["Telefon qilish uchun", "Sahifa ochish uchun", "Font uchun"],
    c: 0,
  },
  {
    q: "target='_blank' nima qiladi?",
    a: ["Yangi tabda ochadi", "Matnni qalin qiladi", "Rasmni yashiradi"],
    c: 0,
  },
  {
    q: "Form maqsadi nima?",
    a: ["Userdan ma’lumot olish", "Faqat video ko‘rsatish", "HTMLni o‘chirish"],
    c: 0,
  },
  {
    q: "required attributi nima qiladi?",
    a: ["To‘ldirishni majburiy qiladi", "Rasm qo‘yadi", "Table ochadi"],
    c: 0,
  },
  { q: "<tr> nima?", a: ["Table row", "Link", "Button"], c: 0 },
  {
    q: "colspan nima?",
    a: ["Ustunlarni birlashtiradi", "Qatorni yashiradi", "Audio qo‘yadi"],
    c: 0,
  },
  {
    q: "ARIA nima uchun?",
    a: ["Accessibility uchun", "CSS uchun", "Database uchun"],
    c: 0,
  },
  {
    q: "aria-label nima qiladi?",
    a: [
      "Elementni screen readerga tushuntiradi",
      "Element rangini o‘zgartiradi",
      "Video qo‘yadi",
    ],
    c: 0,
  },
  { q: "Figma nima?", a: ["Design tool", "Server", "Browser"], c: 0 },
  {
    q: "SVG qachon yaxshi?",
    a: ["Logo/icon uchun", "Uzun video uchun", "Audio uchun"],
    c: 0,
  },
  {
    q: "Landing page maqsadi nima?",
    a: [
      "Bitta actionga olib borish",
      "Faqat jadval chiqarish",
      "Kompyuterni sozlash",
    ],
    c: 0,
  },
  {
    q: "Hero section nima?",
    a: ["Birinchi asosiy qism", "Footer", "Zip fayl"],
    c: 0,
  },
  {
    q: "Pair programming nima?",
    a: [
      "Ikki kishi role bilan ishlashi",
      "Faqat yakka ishlash",
      "Faqat dizayn qilish",
    ],
    c: 0,
  },
];

const rubricItems = [
  { key: "html", label: "HTML structure", icon: FaHtml5 },
  { key: "semantic", label: "Semantic tags", icon: FaCode },
  { key: "figma", label: "Figma accuracy", icon: FaFigma },
  { key: "accessibility", label: "Accessibility", icon: FaUniversalAccess },
  { key: "presentation", label: "Presentation", icon: FaMicrophone },
  { key: "creativity", label: "Creativity", icon: FaStar },
];

const students = ["1-o‘quvchi", "2-o‘quvchi", "3-o‘quvchi", "4-o‘quvchi"];

export default function HtmlLesson12() {
  const [mode, setMode] = useState("overview");
  const [answers, setAnswers] = useState({});
  const [activeStudent, setActiveStudent] = useState(0);
  const [rubric, setRubric] = useState({
    html: 0,
    semantic: 0,
    figma: 0,
    accessibility: 0,
    presentation: 0,
    creativity: 0,
  });
  const [feedback, setFeedback] = useState("");
  const [reflection, setReflection] = useState("");
  const [wall, setWall] = useState([]);

  const answeredCount = Object.keys(answers).length;

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.c).length,
    [answers],
  );

  const quizProgress = Math.round((answeredCount / quiz.length) * 100);
  const quizScore = correctCount * 5;
  const projectScore = Object.values(rubric).reduce((a, b) => a + Number(b), 0);
  const finalScore = Math.min(
    100,
    Math.round((quizScore + projectScore) / 1.6),
  );

  const tabs = [
    { id: "overview", label: "Overview", icon: MdDashboardCustomize },
    { id: "quiz", label: "20 Test", icon: MdQuiz },
    { id: "project", label: "Project Review", icon: MdAssignment },
    { id: "presentation", label: "Presentation", icon: FaMicrophone },
    { id: "reflection", label: "Reflection", icon: FaLightbulb },
  ];

  function resetQuiz() {
    setAnswers({});
  }

  function addReflection() {
    if (!reflection.trim()) return;
    setWall([...wall, reflection.trim()]);
    setReflection("");
  }

  function renderContent() {
    if (mode === "overview") {
      return (
        <div className="space-y-8">
          <PremiumSection
            icon={FaUserGraduate}
            label="1-oy recap"
            title="O‘quvchilar nimalarni o‘rgandi?"
            color="text-yellow-300"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {monthTopics.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
                  >
                    <Icon className="mb-4 text-4xl text-yellow-300" />
                    <h4 className="mb-2 text-2xl font-black text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-6 text-slate-300">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </PremiumSection>

          <PremiumSection
            icon={FaRocket}
            label="Final day flow"
            title="Dars qanday tartibda o‘tadi?"
            color="text-cyan-300"
          >
            <div className="grid gap-4 md:grid-cols-4">
              <StepCard
                number="01"
                title="Recap"
                text="O‘tilgan mavzularni tezkor takrorlash."
              />
              <StepCard
                number="02"
                title="Quiz"
                text="20 savollik test orqali bilimni tekshirish."
              />
              <StepCard
                number="03"
                title="Project"
                text="Portfolio landing sahifani ko‘rib chiqish."
              />
              <StepCard
                number="04"
                title="Reflection"
                text="Kim nimani tushundi, nimaga e’tibor kerak."
              />
            </div>
          </PremiumSection>
        </div>
      );
    }

    if (mode === "quiz") {
      return (
        <PremiumSection
          icon={MdQuiz}
          label="Kahoot style"
          title="20 savoldan iborat mini test"
          color="text-emerald-300"
        >
          <div className="mb-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-3 flex items-center justify-between text-white">
              <span className="font-black">Progress</span>
              <span className="font-black text-emerald-300">
                {quizProgress}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${quizProgress}%` }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Badge>To‘g‘ri: {correctCount}</Badge>
              <Badge>Xato: {answeredCount - correctCount}</Badge>
              <Badge>Ball: {quizScore}/100</Badge>

              <button
                type="button"
                onClick={resetQuiz}
                className="cursor-pointer rounded-full bg-red-400/10 px-4 py-2 text-sm font-black text-red-300"
              >
                <FaRedo className="mr-2 inline" />
                Reset
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {quiz.map((item, questionIndex) => (
              <motion.div
                key={item.q}
                whileHover={{ scale: 1.01 }}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h4 className="text-lg font-black text-white">
                    {questionIndex + 1}. {item.q}
                  </h4>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                    5 ball
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {item.a.map((option, optionIndex) => {
                    const selected = answers[questionIndex] === optionIndex;
                    const correct = item.c === optionIndex;

                    return (
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.94 }}
                        key={option}
                        onClick={() =>
                          setAnswers({
                            ...answers,
                            [questionIndex]: optionIndex,
                          })
                        }
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left text-sm font-bold transition ${
                          selected && correct
                            ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                            : selected && !correct
                              ? "border-red-400 bg-red-400/20 text-red-300"
                              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {selected ? (
                          correct ? (
                            <FaCheckCircle />
                          ) : (
                            <FaTimesCircle />
                          )
                        ) : (
                          <HiMiniCursorArrowRays />
                        )}
                        {option}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </PremiumSection>
      );
    }

    if (mode === "project") {
      return (
        <PremiumSection
          icon={MdAssignment}
          label="Mentor dashboard"
          title="Portfolio landing page loyihasini baholash"
          color="text-purple-300"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {rubricItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="text-2xl text-purple-300" />
                        <h4 className="font-black text-white">{item.label}</h4>
                      </div>
                      <span className="font-black text-purple-300">
                        {rubric[item.key]}/10
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={rubric[item.key]}
                      onChange={(e) =>
                        setRubric({
                          ...rubric,
                          [item.key]: Number(e.target.value),
                        })
                      }
                      className="w-full cursor-pointer accent-purple-400"
                    />
                  </div>
                );
              })}
            </div>

            <div className="rounded-[32px] bg-white p-5 text-slate-950">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-purple-600">
                    Project preview
                  </p>
                  <h3 className="text-3xl font-black">Portfolio Landing</h3>
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-3xl bg-purple-100 text-4xl">
                  🧑‍💻
                </div>
              </div>

              <section className="rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-500 p-6 text-white">
                <h4 className="text-3xl font-black">Hi, I am Student</h4>
                <p className="mt-2 text-white/80">
                  Frontend developer portfolio
                </p>
                <button
                  type="button"
                  className="mt-5 cursor-pointer rounded-2xl bg-white px-5 py-3 font-black text-purple-600"
                >
                  Contact me
                </button>
              </section>

              <div className="mt-5 rounded-3xl border border-slate-200 p-5">
                <h4 className="mb-3 text-xl font-black">Result</h4>
                <div className="text-5xl font-black text-purple-600">
                  {projectScore}/60
                </div>
                <p className="mt-2 text-slate-500">
                  HTML + semantic + presentation umumiy baho
                </p>
              </div>
            </div>
          </div>
        </PremiumSection>
      );
    }

    if (mode === "presentation") {
      return (
        <PremiumSection
          icon={FaMicrophone}
          label="Presentation mode"
          title="Har bir o‘quvchi loyihasini himoya qiladi"
          color="text-orange-300"
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[32px] border border-orange-400/20 bg-orange-400/10 p-6">
              <p className="mb-2 text-sm font-black text-orange-300">
                Hozirgi navbat
              </p>
              <h3 className="mb-5 text-4xl font-black text-white">
                {students[activeStudent]}
              </h3>

              <div className="space-y-3">
                {students.map((student, index) => (
                  <button
                    type="button"
                    key={student}
                    onClick={() => setActiveStudent(index)}
                    className={`w-full cursor-pointer rounded-2xl p-4 text-left font-black transition ${
                      activeStudent === index
                        ? "bg-white text-slate-950"
                        : "bg-slate-950/60 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {index + 1}. {student}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6">
              <h4 className="mb-5 text-2xl font-black text-white">
                Taqdimotda aytiladigan gaplar
              </h4>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Loyiham nima haqida?",
                  "Qaysi HTML teglarni ishlatdim?",
                  "Qaysi joyi eng qiyin bo‘ldi?",
                  "Figma dizayndan nima oldim?",
                  "Accessibility uchun nima qildim?",
                  "Keyingi safar nimani yaxshilayman?",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 6 }}
                    className="rounded-2xl bg-white/5 p-4 text-slate-300"
                  >
                    <FaCheckCircle className="mr-2 inline text-emerald-300" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Mentor feedback yozing..."
                className="mt-5 min-h-[140px] w-full resize-none rounded-3xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-orange-400"
              />
            </div>
          </div>
        </PremiumSection>
      );
    }

    if (mode === "reflection") {
      return (
        <div className="space-y-8">
          <PremiumSection
            icon={FaLightbulb}
            label="Reflection wall"
            title="Nimalar o‘rganildi? Nimaga e’tibor berish kerak?"
            color="text-yellow-300"
          >
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <textarea
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  placeholder="Bugun men nimani tushundim? Qaysi mavzu qiyin bo‘ldi?"
                  className="min-h-[180px] w-full resize-none rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-white outline-none focus:border-yellow-400"
                />
                <button
                  type="button"
                  onClick={addReflection}
                  className="mt-4 w-full cursor-pointer rounded-2xl bg-yellow-400 px-5 py-4 font-black text-slate-950"
                >
                  Reflection wallga qo‘shish
                </button>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-5">
                <h4 className="mb-4 text-2xl font-black text-white">
                  Class reflection wall
                </h4>

                {wall.length === 0 ? (
                  <p className="text-slate-400">Hali reflection yozilmagan.</p>
                ) : (
                  <div className="grid gap-3">
                    {wall.map((item, index) => (
                      <motion.div
                        key={`${item}-${index}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl bg-white/5 p-4 text-slate-300"
                      >
                        “{item}”
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </PremiumSection>

          <motion.section
            variants={fadeUp}
            className="relative overflow-hidden rounded-[40px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/20 via-slate-950 to-purple-500/20 p-8 text-center"
          >
            <FaMedal className="mx-auto mb-4 text-6xl text-yellow-300" />
            <h3 className="mb-3 text-4xl font-black text-white">
              1-oy yakunlandi 🎉
            </h3>
            <p className="mx-auto max-w-2xl text-slate-300">
              O‘quvchi endi HTML structure, semantic, form, table,
              accessibility, Figma va landing page asoslarini tushunadi.
            </p>

            <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-3">
              <Badge>Quiz: {quizScore}/100</Badge>
              <Badge>Project: {projectScore}/60</Badge>
              <Badge>Final: {finalScore}%</Badge>
            </div>
          </motion.section>
        </div>
      );
    }

    return null;
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-yellow-400/20 bg-gradient-to-br from-[#1f1600] via-[#0b1020] to-black p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300">
              <HiSparkles />
              12-DARS • FINAL EXPERIENCE
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Birinchi oy yakuni: quiz, loyiha, taqdimot va reflection
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun o‘quvchilar 1 oy davomida o‘rgangan HTML, semantic, form,
              table, accessibility, Figma va landing page bilimlarini real
              loyiha orqali himoya qiladi.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroStat title="Quiz" value={`${correctCount}/${quiz.length}`} />
              <HeroStat title="Project" value={`${projectScore}/60`} />
              <HeroStat title="Final" value={`${finalScore}%`} />
            </div>
          </div>

          <FinalScoreCard
            quizProgress={quizProgress}
            quizScore={quizScore}
            projectScore={projectScore}
            finalScore={finalScore}
          />
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-[#0f172a]/80 p-4"
      >
        <div className="grid gap-3 md:grid-cols-5">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setMode(tab.id)}
                className={`cursor-pointer rounded-2xl px-4 py-3 font-black transition ${
                  mode === tab.id
                    ? "bg-yellow-400 text-slate-950"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Icon className="mr-2 inline" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </motion.section>

      <div className="min-h-[400px]">{renderContent()}</div>
    </motion.div>
  );
}

function FinalScoreCard({ quizProgress, quizScore, projectScore, finalScore }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-yellow-600">Final dashboard</p>
          <h3 className="text-3xl font-black">Month 1 Result</h3>
        </div>
        <FaTrophy className="text-5xl text-yellow-500" />
      </div>

      <div className="mb-5 grid gap-3">
        <ScoreLine label="Quiz progress" value={`${quizProgress}%`} />
        <ScoreLine label="Quiz score" value={`${quizScore}/100`} />
        <ScoreLine label="Project score" value={`${projectScore}/60`} />
      </div>

      <div className="rounded-3xl bg-slate-950 p-6 text-center text-white">
        <p className="text-sm text-slate-400">Final score</p>
        <div className="text-6xl font-black text-yellow-300">{finalScore}%</div>
      </div>
    </motion.div>
  );
}

function ScoreLine({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-4">
      <span className="font-bold text-slate-600">{label}</span>
      <span className="font-black text-slate-950">{value}</span>
    </div>
  );
}

function PremiumSection({ icon: Icon, label, title, color, children }) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-[36px] border border-white/10 bg-[#0f172a]/80 p-6 shadow-xl backdrop-blur-xl"
    >
      <SectionTitle icon={Icon} label={label} title={title} color={color} />
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}

function SectionTitle({ icon: Icon, label, title, color }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ${color}`}
      >
        <Icon className="text-3xl" />
      </div>
      <div>
        <p className={`text-sm font-black ${color}`}>{label}</p>
        <h3 className="text-2xl font-black text-white">{title}</h3>
      </div>
    </div>
  );
}

function HeroStat({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
    >
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-1 text-2xl font-black text-white">{value}</h3>
    </motion.div>
  );
}

function StepCard({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <span className="text-4xl font-black text-white/20">{number}</span>
      <h4 className="mb-2 mt-4 text-xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white">
      {children}
    </span>
  );
}
