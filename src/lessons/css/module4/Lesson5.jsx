import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaGamepad,
  FaUserSecret,
  FaBolt,
  FaCrown,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaStar,
  FaPalette,
} from "react-icons/fa";
import { MdQuiz, MdOutlineSportsEsports } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const missions = {
  mono: {
    title: "Monochromatic",
    icon: FaPalette,
    color: "from-slate-700 to-slate-950",
    accent: "cyan",
    desc: "Bitta asosiy rang oilasidan foydalaniladi. Masalan: dark slate background + cyan accent.",
    code: `.card {
  background: #0f172a;
  border: 1px solid #334155;
  color: #e2e8f0;
}

.card:hover {
  border-color: #22d3ee;
}`,
  },
  analogous: {
    title: "Analogous gradient",
    icon: FaLayerGroup,
    color: "from-cyan-500 via-blue-500 to-violet-600",
    accent: "violet",
    desc: "Yonma-yon ranglar gradient orqali ishlatiladi. Masalan cyan → blue → violet.",
    code: `.hero {
  background: linear-gradient(
    135deg,
    #06b6d4,
    #3b82f6,
    #8b5cf6
  );
}`,
  },
  neon: {
    title: "Dark + neon accent",
    icon: FaBolt,
    color: "from-emerald-400 via-cyan-500 to-violet-600",
    accent: "emerald",
    desc: "Qora/dark fon ustida neon cyan, violet yoki emerald accent ishlatiladi.",
    code: `.detective-card {
  background: #020617;
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.25);
}

.detective-card .target {
  color: #34d399;
}`,
  },
};

const detectiveTasks = [
  {
    title: "1-missiya",
    target: "Barcha buttonlarni toping",
    selector: "button",
    hint: "Type selector ishlatiladi",
  },
  {
    title: "2-missiya",
    target: "Faqat .premium-card elementlarini toping",
    selector: ".premium-card",
    hint: "Class selector nuqta bilan boshlanadi",
  },
  {
    title: "3-missiya",
    target: "ID si hero bo‘lgan elementni toping",
    selector: "#hero",
    hint: "ID selector # belgisi bilan boshlanadi",
  },
  {
    title: "4-missiya",
    target: "type='text' bo‘lgan inputni toping",
    selector: 'input[type="text"]',
    hint: "Attribute selector kerak",
  },
  {
    title: "5-missiya",
    target: "https bilan boshlanadigan linklarni toping",
    selector: 'a[href^="https"]',
    hint: "^= boshlanishini tekshiradi",
  },
  {
    title: "6-missiya",
    target: "Faqat juft cardlarni toping",
    selector: ".card:nth-child(even)",
    hint: "Structural selector kerak",
  },
];

const checklist = [
  "CSS Dasturchi detektivi o‘yini tushuntirildi",
  "Type selector mashq qilindi",
  "Class selector mashq qilindi",
  "ID selector mashq qilindi",
  "Attribute selector ishlatildi",
  '[type="text"] selector ishlatildi',
  '[href^="https"] selector ishlatildi',
  ":nth-child selector mashq qilindi",
  ":not() selector tushuntirildi",
  "Flukeout online game ko‘rsatildi",
  "Kim tez topadi musobaqasi qilindi",
  "Murakkab selector topish amaliyoti bajarildi",
];

const quiz = [
  {
    question: "CSS Dasturchi detektivi o‘yinida asosiy maqsad nima?",
    options: [
      "Elementlarni selector orqali topish",
      "Rasm chizish",
      "HTML faylni o‘chirish",
    ],
    correct: 0,
  },
  {
    question: ".premium-card qanday selector?",
    options: ["Class selector", "ID selector", "Type selector"],
    correct: 0,
  },
  {
    question: 'input[type="text"] qanday selector?',
    options: ["Attribute selector", "Universal selector", "Group selector"],
    correct: 0,
  },
  {
    question: 'a[href^="https"] nimani tanlaydi?',
    options: [
      "https bilan boshlanuvchi linklarni",
      "Hamma rasmlarni",
      "Faqat buttonlarni",
    ],
    correct: 0,
  },
  {
    question: ".card:nth-child(even) nimani tanlaydi?",
    options: [
      "Juft tartibdagi cardlarni",
      "Faqat birinchi cardni",
      "Hamma inputlarni",
    ],
    correct: 0,
  },
];

export default function CssM4L5() {
  const [activeStyle, setActiveStyle] = useState("mono");
  const [activeMission, setActiveMission] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});

  const current = missions[activeStyle];
  const mission = detectiveTasks[activeMission];

  const doneCount = useMemo(
    () => checklist.filter((_, index) => checked[index]).length,
    [checked],
  );

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const answerOptions = [
    mission.selector,
    ".wrong-selector",
    "#card .button:first-child",
  ].sort(() => Math.random() - 0.5);

  const mainPracticeCode = `.game-board {
  display: grid;
  gap: 18px;
}

.game-board .card:nth-child(even) {
  border-color: #22d3ee;
}

.game-board .card:not(.active) {
  opacity: 0.65;
}

.game-board input[type="text"] {
  border: 2px solid #8b5cf6;
}

.game-board a[href^="https"] {
  color: #34d399;
  font-weight: 900;
}

.game-board button[data-level="hard"] {
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
}`;

  const handleMissionAnswer = (option) => {
    setSelectedAnswer(option);

    if (option === mission.selector) {
      setScore((prev) => prev + 1);
      setTimeout(() => {
        setSelectedAnswer("");
        setActiveMission((prev) =>
          prev === detectiveTasks.length - 1 ? 0 : prev + 1,
        );
      }, 700);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-gradient-to-br from-[#020617] via-[#07111f] to-[#111827] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 5-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Selectors o‘yini orqali tushuntirish
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugungi dars “CSS Dasturchi detektivi” formatida bo‘ladi.
              O‘quvchilar elementlarni selector orqali topadi, Flukeout online
              game orqali mashq qiladi va kim eng tez murakkab selector
              topishini musobaqa tarzida sinab ko‘radi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaUserSecret}
                title="Detective"
                text="find elements"
              />
              <HeroBadge icon={FaGamepad} title="Flukeout" text="online game" />
              <HeroBadge icon={FaBolt} title="Speed" text="fast selector" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaPalette}
        label="Design systems"
        title="Taqdimot ichidagi style yo‘nalishlari"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(missions).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStyle(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeStyle === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStyle}
              initial={{ opacity: 0, x: -22, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 22, scale: 0.97 }}
              className={`rounded-[32px] bg-gradient-to-br ${current.color} p-7`}
            >
              <current.icon className="mb-5 text-5xl text-white" />
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                {current.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {current.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={current.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineSportsEsports}
        label="Game mode"
        title="CSS Dasturchi detektivi"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                  {mission.title}
                </p>
                <h4 className="mt-1 text-2xl font-black text-white">
                  {mission.target}
                </h4>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-center">
                <p className="text-xs font-black text-emerald-300">Score</p>
                <p className="text-2xl font-black text-white">{score}</p>
              </div>
            </div>

            <div className="mb-5 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="font-black text-cyan-300">Hint:</p>
              <p className="mt-2 text-slate-300">{mission.hint}</p>
            </div>

            <div className="grid gap-3">
              {answerOptions.map((option) => {
                const selected = selectedAnswer === option;
                const correct = option === mission.selector;

                return (
                  <motion.button
                    key={option}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleMissionAnswer(option)}
                    className={`cursor-pointer rounded-2xl border p-4 text-left font-mono text-sm font-black transition ${
                      selected && correct
                        ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                        : selected && !correct
                          ? "border-red-400 bg-red-400/20 text-red-300"
                          : "border-white/10 bg-white/5 text-cyan-200 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    }`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Elementlarni topish maydoni
            </h4>

            <div className="grid gap-4">
              <div
                id="hero"
                className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
                  #hero
                </p>
                <h5 className="mt-2 text-xl font-black text-white">
                  Hero section
                </h5>
              </div>

              <div className="premium-card rounded-3xl border border-violet-400/30 bg-violet-400/10 p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-300">
                  .premium-card
                </p>
                <h5 className="mt-2 text-xl font-black text-white">
                  Premium Card
                </h5>
              </div>

              <input
                type="text"
                placeholder='input[type="text"]'
                className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 font-bold text-white outline-none placeholder:text-emerald-200/70"
              />

              <a
                href="https://flukeout.github.io/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 font-black text-cyan-300"
              >
                Flukeout selector game
                <FaExternalLinkAlt />
              </a>

              <button
                type="button"
                data-level="hard"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 p-4 font-black text-white"
              >
                button[data-level="hard"]
              </button>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaExternalLinkAlt}
        label="Online practice"
        title="Flukeout bilan selector mashqi"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <FaGamepad className="mb-5 text-5xl text-emerald-300" />

            <h4 className="mb-3 text-3xl font-black text-white">
              Flukeout game
            </h4>

            <p className="mb-6 leading-7 text-slate-300">
              Bu online o‘yinda o‘quvchilar elementlarni CSS selector orqali
              tanlaydi. Dars davomida har bir levelni kim tezroq yechishini
              musobaqa tarzida o‘tkazish mumkin.
            </p>

            <a
              href="https://flukeout.github.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-emerald-400 px-5 py-4 font-black text-slate-950 transition hover:-translate-y-1"
            >
              Flukeout’ni ochish
              <FaExternalLinkAlt />
            </a>
          </div>

          <CodePanel
            code={`/* Flukeout practice examples */

plate {
  /* type selector */
}

#fancy {
  /* id selector */
}

.small {
  /* class selector */
}

plate apple {
  /* descendant selector */
}

bento > orange {
  /* child selector */
}

plate:nth-child(2) {
  /* structural selector */
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Main practice"
        title="Kim eng tez murakkab selector topa oladi?"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "O‘quvchilar 2 yoki 3 ta jamoaga bo‘linadi",
              "Har bir jamoaga HTML structure ko‘rsatiladi",
              "O‘qituvchi target elementni aytadi",
              "Jamoalar selector yozadi",
              "Eng qisqa va to‘g‘ri selector ko‘proq ball oladi",
              "Flukeout orqali qo‘shimcha mashq qilinadi",
              "Murakkab selectorlar bilan FAQ yoki card section style qilinadi",
              "Yakunida selectorlar taqqoslanadi",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-cyan-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <CodePanel code={mainPracticeCode} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Project checklist"
        title="Dars yakunida tekshirish"
        color="text-emerald-300"
      >
        <div className="mb-5 flex items-center justify-between rounded-2xl bg-slate-950/60 p-4 text-white">
          <span>Bajarilgan vazifalar</span>
          <span className="flex items-center gap-2 font-black text-emerald-300">
            <FaCheckCircle />
            {doneCount}/{checklist.length}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {checklist.map((item, index) => {
            const active = checked[index];

            return (
              <motion.button
                key={item}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  setChecked({
                    ...checked,
                    [index]: !active,
                  })
                }
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left font-bold transition ${
                  active
                    ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {active ? <FaCheckCircle /> : <HiMiniCursorArrowRays />}
                {item}
              </motion.button>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaStar}
        label="Teacher Notes"
        title="O‘qituvchi uchun muhim eslatmalar"
        color="text-yellow-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticeCard
            good
            title="Yaxshi yondashuv"
            items={[
              "Selectorni detektiv iz qidirishga o‘xshatib tushuntiring",
              "Har bir selectorni real HTML elementda ko‘rsating",
              "Flukeout level’larini kichik musobaqaga aylantiring",
              "Eng qisqa selector va eng aniq selector farqini tushuntiring",
              "Murakkab selectorlarni FAQ yoki card sectionda mustahkamlang",
            ]}
          />

          <PracticeCard
            title="Xatolar"
            items={[
              "O‘quvchilarga birdan murakkab selector berish",
              "Class va ID belgilarini adashtirish",
              "Attribute selector syntaxini tushuntirmasdan ishlatish",
              "nth-child parentga bog‘liqligini aytmaslik",
              "O‘yinni faqat tezlikka bog‘lab, kod sifatini unutish",
            ]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-emerald-400/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="CSS selector detective quiz"
          color="text-cyan-300"
        />

        <div className="mb-5 mt-6 flex items-center justify-between rounded-2xl bg-slate-950/60 p-4 text-white">
          <span>To‘g‘ri javoblar</span>
          <span className="flex items-center gap-2 font-black text-emerald-300">
            <FaCheckCircle />
            {correctCount}/{quiz.length}
          </span>
        </div>

        <div className="space-y-5">
          {quiz.map((item, questionIndex) => (
            <motion.div
              key={item.question}
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
            >
              <h4 className="mb-4 text-lg font-black text-white">
                {questionIndex + 1}. {item.question}
              </h4>

              <div className="grid gap-3 md:grid-cols-3">
                {item.options.map((option, optionIndex) => {
                  const selected = answers[questionIndex] === optionIndex;
                  const correct = item.correct === optionIndex;

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
      </motion.section>
    </motion.div>
  );
}

function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Detective Mode</p>
          <h3 className="text-2xl font-black md:text-3xl">Find Selector</h3>
        </div>
        <FaUserSecret className="text-4xl text-violet-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-br from-cyan-500 via-violet-500 to-emerald-500 p-6 shadow-2xl shadow-cyan-500/20"
        >
          <FaSearch className="mb-5 text-5xl text-white" />
          <h4 className="text-3xl font-black">CSS Detective</h4>
          <p className="mt-2 text-white/80">
            Selector orqali elementlarni toping.
          </p>
        </motion.div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {["button", ".card", "#hero"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-center text-sm font-black text-cyan-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CodePanel({ code, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const highlightCode = (rawCode) => {
    const escaped = rawCode
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return escaped
      .replace(
        /^([.#]?[a-zA-Z0-9_\-\[\]="^$*:\(\)\s,>+~]+)(\s*\{)/gm,
        `<span class="text-cyan-300">$1</span><span class="text-slate-400">$2</span>`,
      )
      .replace(
        /([a-zA-Z-]+)(\s*:)/g,
        `<span class="text-violet-300">$1</span><span class="text-slate-400">$2</span>`,
      )
      .replace(
        /(:\s*)([^;{}]+)(;?)/g,
        `$1<span class="text-emerald-300">$2</span><span class="text-slate-500">$3</span>`,
      )
      .replace(/(\/\*[\s\S]*?\*\/)/g, `<span class="text-slate-500">$1</span>`);
  };

  return (
    <div
      className={`relative rounded-[32px] border border-cyan-400/20 bg-slate-950/90 p-5 ${className}`}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-4 top-4 flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2 text-xs font-black text-slate-950 transition hover:scale-105"
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? "Copied" : "Copy"}
      </button>

      <p className="mb-3 text-sm font-black text-cyan-300">Code:</p>

      <pre
        className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 pt-12 font-mono text-sm leading-7"
        dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
      />
    </div>
  );
}

function PremiumSection({ icon: Icon, label, title, color, children }) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-[32px] border border-white/10 bg-[#0f172a]/80 p-5 shadow-xl backdrop-blur-xl md:p-6"
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
        className={`grid h-13 w-13 place-items-center rounded-2xl bg-white/10 ${color}`}
      >
        <Icon className="text-2xl md:text-3xl" />
      </div>
      <div>
        <p className={`text-xs font-black uppercase tracking-widest ${color}`}>
          {label}
        </p>
        <h3 className="text-xl font-black text-white md:text-2xl">{title}</h3>
      </div>
    </div>
  );
}

function HeroBadge({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 md:p-5"
    >
      <Icon className="mb-3 text-2xl text-cyan-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}

function PracticeCard({ title, items, good = false }) {
  return (
    <div
      className={`rounded-[32px] border p-6 ${
        good
          ? "border-emerald-400/20 bg-emerald-400/10"
          : "border-red-400/20 bg-red-400/10"
      }`}
    >
      <h4 className="mb-4 text-3xl font-black text-white">{title}</h4>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
          >
            {good ? (
              <FaCheckCircle className="text-emerald-300" />
            ) : (
              <FaTimesCircle className="text-red-300" />
            )}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
