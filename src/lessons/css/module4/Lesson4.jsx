import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaSearch,
  FaLayerGroup,
  FaStar,
  FaCrown,
  FaGem,
  FaFilter,
  FaMousePointer,
  FaLightbulb,
} from "react-icons/fa";
import { MdQuiz, MdOutlineRule } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  basic: {
    title: "Basic selectors",
    icon: FaCode,
    color: "from-yellow-400 to-amber-600",
    desc: "Type, class, ID, universal va group selectors CSS’da elementlarni tanlab style berishning eng asosiy yo‘llari hisoblanadi.",
    code: `/* Type selector */
p {
  color: #334155;
}

/* Class selector */
.card {
  border-radius: 24px;
}

/* ID selector */
#hero {
  padding: 80px;
}

/* Universal selector */
* {
  box-sizing: border-box;
}

/* Group selector */
h1, h2, h3 {
  font-family: sans-serif;
}`,
  },
  attribute: {
    title: "Attribute selectors",
    icon: FaFilter,
    color: "from-orange-400 to-yellow-500",
    desc: "Attribute selector elementning atributiga qarab tanlaydi. Masalan input type yoki link href qiymatiga qarab style berish mumkin.",
    code: `input[type="text"] {
  border: 2px solid #facc15;
}

a[href^="https"] {
  color: #22c55e;
}

img[alt] {
  outline: 2px solid #f59e0b;
}

button[data-variant="gold"] {
  background: linear-gradient(135deg, #facc15, #b45309);
}`,
  },
  structural: {
    title: "Structural selectors",
    icon: FaLayerGroup,
    color: "from-amber-500 to-orange-700",
    desc: "Structural selector elementning HTML ichidagi joylashuviga qarab ishlaydi. FAQ, table, list va cardlarda juda foydali.",
    code: `.faq-item:first-child {
  border-top: 3px solid #facc15;
}

.faq-item:nth-child(even) {
  background: rgba(250, 204, 21, 0.08);
}

.faq-item:not(.active) {
  opacity: 0.75;
}

.faq-item:last-child {
  margin-bottom: 0;
}`,
  },
  advanced: {
    title: "Advanced FAQ selectors",
    icon: MdOutlineRule,
    color: "from-yellow-300 to-stone-700",
    desc: "Murakkab selectorlar orqali FAQ sectionni JavaScriptsiz ham tartibli, professional va interaktiv ko‘rinishga keltirish mumkin.",
    code: `.faq details[open] {
  border-color: #facc15;
}

.faq details[open] summary {
  color: #facc15;
}

.faq details:not([open]) p {
  display: none;
}

.faq summary:hover {
  transform: translateX(8px);
}`,
  },
};

const checklist = [
  "Type selector tushuntirildi",
  "Class selector tushuntirildi",
  "ID selector tushuntirildi",
  "Universal selector ko‘rsatildi",
  "Group selector ishlatildi",
  "Attribute selector tushuntirildi",
  '[type="text"] bilan input tanlandi',
  '[href^="https"] bilan link tanlandi',
  ":first-child ishlatildi",
  ":nth-child ishlatildi",
  ":not() selector tushuntirildi",
  "FAQ section advanced selectors bilan qilindi",
];

const quiz = [
  {
    question: "Class selector qanday yoziladi?",
    options: [".card", "#card", "card"],
    correct: 0,
  },
  {
    question: "ID selector qanday belgidan boshlanadi?",
    options: ["#", ".", "*"],
    correct: 0,
  },
  {
    question: '[type="text"] qanday selector?',
    options: ["Attribute selector", "Universal selector", "Group selector"],
    correct: 0,
  },
  {
    question: ":nth-child(2) nima qiladi?",
    options: [
      "Ikkinchi child elementni tanlaydi",
      "Hamma elementni tanlaydi",
      "Faqat oxirgi elementni tanlaydi",
    ],
    correct: 0,
  },
  {
    question: ":not(.active) nimani tanlaydi?",
    options: [
      ".active bo‘lmagan elementlarni",
      "Faqat .active elementni",
      "Faqat birinchi elementni",
    ],
    correct: 0,
  },
];

export default function CssM4L4() {
  const [activeConcept, setActiveConcept] = useState("basic");
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});
  const [activeFaq, setActiveFaq] = useState(0);

  const current = concepts[activeConcept];

  const doneCount = useMemo(
    () => checklist.filter((_, index) => checked[index]).length,
    [checked],
  );

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const mainPracticeCode = `/* FAQ section with advanced selectors */

.faq {
  display: grid;
  gap: 16px;
}

.faq details {
  border: 1px solid rgba(250, 204, 21, 0.25);
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.75);
  padding: 20px;
  transition: 0.3s ease;
}

.faq details:first-child {
  border-top: 3px solid #facc15;
}

.faq details:nth-child(even) {
  background: rgba(250, 204, 21, 0.08);
}

.faq details:not([open]) {
  opacity: 0.75;
}

.faq details[open] {
  border-color: #facc15;
  box-shadow: 0 20px 60px rgba(250, 204, 21, 0.16);
}

.faq summary {
  cursor: pointer;
  font-weight: 900;
  color: #fff7ed;
}

.faq details[open] summary {
  color: #facc15;
}

.faq summary:hover {
  transform: translateX(8px);
}

.faq a[href^="https"] {
  color: #facc15;
  font-weight: 900;
}`;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[38px] border border-yellow-400/20 bg-gradient-to-br from-[#1c1203] via-[#0f172a] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-yellow-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 4-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Selectors — asosiy va murakkab selectorlar
            </h2>

            <p className="max-w-3xl text-base leading-8 text-yellow-50/75 md:text-lg">
              Bu darsda o‘quvchilar type, class, ID, universal, group, attribute
              va structural selectorlarni o‘rganadi. Amaliyotda esa advanced
              selectors yordamida gold style FAQ section yaratadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaSearch}
                title="Selectors"
                text="basic to advanced"
              />
              <HeroBadge
                icon={FaFilter}
                title="Attribute"
                text="input & links"
              />
              <HeroBadge
                icon={FaCrown}
                title="Gold FAQ"
                text="premium practice"
              />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Lesson goal"
        title="Dars maqsadi"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaCode}
            title="Basic selectors"
            text="Type, class, ID, universal va group selectorlarni to‘g‘ri farqlash."
          />
          <InfoCard
            icon={FaFilter}
            title="Attribute selectors"
            text="Input, link va custom data atributlar orqali element tanlash."
          />
          <InfoCard
            icon={FaLayerGroup}
            title="Structural selectors"
            text=":first-child, :nth-child va :not() orqali FAQ sectionni bezash."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaGem}
        label="Selector Library"
        title="Selector turlari"
        color="text-amber-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(concepts).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveConcept(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeConcept === key
                  ? "bg-yellow-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-yellow-400/20"
              }`}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConcept}
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
        icon={FaMousePointer}
        label="Live Practice"
        title="FAQ section with advanced selectors"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-yellow-400/20 bg-slate-950/70 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Gold FAQ preview
            </h4>

            <div className="space-y-4">
              {[
                {
                  q: "CSS selector nima?",
                  a: "CSS selector HTML elementni tanlab, unga style berish uchun ishlatiladi.",
                },
                {
                  q: "Attribute selector qachon kerak?",
                  a: "Elementni classsiz, uning type, href yoki data atributiga qarab tanlash kerak bo‘lganda.",
                },
                {
                  q: ":nth-child nima qiladi?",
                  a: "Elementning parent ichidagi tartib raqamiga qarab style beradi.",
                },
                {
                  q: ":not() nima uchun foydali?",
                  a: "Ma’lum class yoki holatga ega bo‘lmagan elementlarni tanlash uchun.",
                },
              ].map((item, index) => (
                <motion.button
                  key={item.q}
                  whileHover={{ x: 6 }}
                  onClick={() => setActiveFaq(index)}
                  className={`w-full cursor-pointer rounded-3xl border p-5 text-left transition ${
                    activeFaq === index
                      ? "border-yellow-400 bg-yellow-400/15 shadow-2xl shadow-yellow-500/10"
                      : "border-white/10 bg-white/5 hover:border-yellow-400/40"
                  } ${index % 2 === 1 ? "bg-yellow-400/8" : ""}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h5
                      className={`font-black ${
                        activeFaq === index ? "text-yellow-300" : "text-white"
                      }`}
                    >
                      {index + 1}. {item.q}
                    </h5>
                    <FaCrown className="text-yellow-300" />
                  </div>

                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 overflow-hidden leading-7 text-slate-300"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
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
            title="Yaxshi tushuntirish"
            items={[
              "Selectorni 'HTML elementni topuvchi manzil' deb tushuntiring",
              "Class va ID farqini real card misolida ko‘rsating",
              "Attribute selectorni input va link bilan tushuntiring",
              "nth-child’ni ro‘yxat yoki FAQ orqali ko‘rsating",
              ":not() selectorni active bo‘lmagan cardlar bilan tushuntiring",
            ]}
          />

          <PracticeCard
            title="Xatolar"
            items={[
              "ID selectorni juda ko‘p ishlatish",
              "Class va ID belgilarini adashtirish",
              "Attribute selector syntaxini noto‘g‘ri yozish",
              "nth-child raqamini parentga nisbatan ekanini unutish",
              ":not() ichiga noto‘g‘ri selector yozish",
            ]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="CSS selectors quiz"
          color="text-yellow-300"
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
      className="rounded-[32px] border border-yellow-400/20 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-amber-600">Gold Selector Lab</p>
          <h3 className="text-2xl font-black md:text-3xl">Advanced FAQ</h3>
        </div>
        <FaCrown className="text-4xl text-yellow-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-700 p-6 shadow-2xl shadow-yellow-500/20"
        >
          <FaGem className="mb-5 text-5xl text-white" />
          <h4 className="text-3xl font-black">CSS Selectors</h4>
          <p className="mt-2 text-white/80">
            Basic, attribute va structural selectors.
          </p>
        </motion.div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[".class", "#id", ":nth"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-3 text-center text-sm font-black text-yellow-300"
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

  return (
    <div
      className={`relative rounded-[32px] border border-yellow-400/20 bg-slate-950/80 p-5 ${className}`}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-4 top-4 flex cursor-pointer items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2 text-xs font-black text-slate-950 transition hover:scale-105"
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? "Copied" : "Copy"}
      </button>

      <p className="mb-3 text-sm font-black text-yellow-300">Code:</p>
      <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 pt-12 font-mono text-sm leading-7 text-yellow-200">
        {code}
      </pre>
    </div>
  );
}

function PremiumSection({ icon: Icon, label, title, color, children }) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-[32px] border border-yellow-400/15 bg-[#0f172a]/80 p-5 shadow-xl backdrop-blur-xl md:p-6"
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
        className={`grid h-13 w-13 place-items-center rounded-2xl bg-yellow-400/10 ${color}`}
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
      className="rounded-3xl border border-yellow-400/15 bg-yellow-400/[0.06] p-4 md:p-5"
    >
      <Icon className="mb-3 text-2xl text-yellow-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-yellow-50/60">{text}</p>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.02 }}
      className="rounded-3xl border border-yellow-400/15 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-yellow-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
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
