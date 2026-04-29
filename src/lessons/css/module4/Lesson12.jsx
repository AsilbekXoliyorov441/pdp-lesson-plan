import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPuzzlePiece,
  FaGlobe,
  FaTools,
  FaCompressAlt,
  FaBroom,
  FaRocket,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaLayerGroup,
  FaLightbulb,
} from "react-icons/fa";
import { MdQuiz, MdBuildCircle } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const topics = {
  bem: {
    title: "BEM",
    icon: FaPuzzlePiece,
    color: "from-fuchsia-500 to-purple-600",
    desc: "BEM — class nomlarini tartibli yozish usuli. Formula: block__element--modifier.",
    best: "Katta loyihalarda class nomlari chalkashmasligi uchun",
    code: `.pricing-card {}
.pricing-card__title {}
.pricing-card__button {}
.pricing-card__button--primary {}`,
    preview: "bem",
  },
  cross: {
    title: "Cross-browser",
    icon: FaGlobe,
    color: "from-cyan-500 to-blue-600",
    desc: "Sayt Chrome, Firefox, Safari va Edge’da bir xil ishlashi kerak.",
    best: "Real foydalanuvchilar turli browserlardan kirganda",
    code: `.card {
  display: flex;
  gap: 16px;
  border-radius: 24px;
}

/* Ba’zi propertylar eski browserlarda prefix talab qilishi mumkin */`,
    preview: "cross",
  },
  autoprefixer: {
    title: "Autoprefixer",
    icon: FaTools,
    color: "from-emerald-500 to-teal-600",
    desc: "Autoprefixer CSS’ga kerakli browser prefixlarni avtomatik qo‘shadi.",
    best: "Production build jarayonida",
    code: `/* Siz yozasiz */
.box {
  user-select: none;
}

/* Builddan keyin */
.box {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}`,
    preview: "prefix",
  },
  minify: {
    title: "Minifier",
    icon: FaCompressAlt,
    color: "from-orange-500 to-red-600",
    desc: "Minify CSS ichidagi ortiqcha space, enter va commentlarni olib tashlaydi.",
    best: "Sayt tezroq yuklanishi uchun",
    code: `/* Before */
.card {
  padding: 20px;
  border-radius: 20px;
  background: #0f172a;
}

/* After */
.card{padding:20px;border-radius:20px;background:#0f172a}`,
    preview: "minify",
  },
  normalize: {
    title: "Normalize.css",
    icon: FaBroom,
    color: "from-violet-500 to-indigo-600",
    desc: "Normalize.css browserlarning default style farqlarini kamaytiradi.",
    best: "Project boshida base CSS sifatida",
    code: `@import "normalize.css";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
}`,
    preview: "normalize",
  },
};

const bemModuleCode = `<!-- HTML -->
<section class="course-card course-card--premium">
  <span class="course-card__badge">Premium</span>

  <h2 class="course-card__title">Frontend Pro</h2>

  <p class="course-card__text">
    HTML, CSS, Grid, Responsive va Clean Code darslari.
  </p>

  <ul class="course-card__list">
    <li class="course-card__item">BEM structure</li>
    <li class="course-card__item">Cross-browser CSS</li>
    <li class="course-card__item">Production build</li>
  </ul>

  <button class="course-card__button course-card__button--primary">
    Start Learning
  </button>
</section>

/* CSS */
.course-card {
  width: min(100%, 430px);
  padding: 28px;
  border-radius: 32px;
  background: #0f172a;
  color: white;
  border: 1px solid rgba(217, 70, 239, 0.25);
}

.course-card--premium {
  background: linear-gradient(135deg, #170726, #020617);
  box-shadow: 0 24px 80px rgba(217, 70, 239, 0.18);
}

.course-card__badge {
  display: inline-block;
  margin-bottom: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #d946ef;
  color: white;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.course-card__title {
  margin: 0 0 12px;
  font-size: 34px;
  font-weight: 900;
}

.course-card__text {
  margin: 0 0 20px;
  color: #cbd5e1;
  line-height: 1.7;
}

.course-card__list {
  display: grid;
  gap: 10px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
}

.course-card__item {
  padding: 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
}

.course-card__button {
  width: 100%;
  border: none;
  border-radius: 18px;
  padding: 15px 20px;
  font-weight: 900;
  cursor: pointer;
}

.course-card__button--primary {
  background: linear-gradient(135deg, #d946ef, #22d3ee);
  color: white;
}`;

const buildCode = `/* 1. Install */
npm install -D postcss autoprefixer cssnano
npm install normalize.css

/* 2. postcss.config.js */
export default {
  plugins: {
    autoprefixer: {},
    cssnano: {}
  }
}

/* 3. main.css */
@import "normalize.css";

/* 4. Build */
npm run build

/* Natija:
   CSS prefixlanadi, minify bo‘ladi va productionga tayyorlanadi.
*/`;

const quiz = [
  {
    question: "BEM formulasi qaysi?",
    options: [
      "block__element--modifier",
      "block-element-modifier",
      "block.element.modifier",
    ],
    correct: 0,
  },
  {
    question: "Autoprefixer nima qiladi?",
    options: [
      "CSS prefixlarni avtomatik qo‘shadi",
      "HTML yaratadi",
      "Rasmni siqadi",
    ],
    correct: 0,
  },
  {
    question: "Minify nima uchun kerak?",
    options: [
      "Fayl hajmini kichraytirish uchun",
      "Class nomini o‘zgartirish uchun",
      "Browserni yopish uchun",
    ],
    correct: 0,
  },
  {
    question: "Normalize.css nima qiladi?",
    options: [
      "Browser default style farqlarini kamaytiradi",
      "JS kodni yozadi",
      "Deploy qiladi",
    ],
    correct: 0,
  },
];

export default function CssM4L12() {
  const [activeTopic, setActiveTopic] = useState("bem");
  const [buildStep, setBuildStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const topic = topics[activeTopic];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const buildSteps = [
    "BEM bilan class nomlarini yozamiz",
    "Normalize.css bilan default style farqlarini kamaytiramiz",
    "Autoprefixer browser prefixlarni qo‘shadi",
    "Minifier CSS hajmini kichraytiradi",
    "Build production uchun tayyor bo‘ladi",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-fuchsia-400/20 bg-gradient-to-br from-[#170726] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm font-black text-fuchsia-300">
              <HiSparkles />
              CSS • Module 4 • 12-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Professional CSS workflow
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun BEM metodologiyasi, cross-browser muammolari, Autoprefixer,
              CSS minify va Normalize.css orqali CSS’ni real project darajasida
              tayyorlashni o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaPuzzlePiece} title="BEM" text="Clean naming" />
              <HeroBadge icon={FaGlobe} title="Browser" text="Compatibility" />
              <HeroBadge icon={FaRocket} title="Build" text="Production CSS" />
            </div>
          </div>

          <WorkflowHero buildStep={buildStep} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Senior mindset"
        title="Bu mavzular nega kerak?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaPuzzlePiece}
            title="Class nomlari tartibli bo‘ladi"
            text="BEM katta projectda CSS chalkashib ketmasligi uchun juda foydali."
          />
          <InfoCard
            icon={FaGlobe}
            title="Browserlarda bir xil ishlaydi"
            text="Cross-browser fikrlash saytni turli browserlarda test qilishni o‘rgatadi."
          />
          <InfoCard
            icon={FaTools}
            title="Build productionga tayyorlaydi"
            text="Autoprefixer va minifier CSS’ni tez, ixcham va mos qiladi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Core concepts"
        title="Asosiy tushunchalarni live ko‘ramiz"
        color="text-fuchsia-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(topics).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTopic(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeTopic === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${topic.color} p-7`}
            >
              <topic.icon className="mb-5 text-5xl text-white" />
              <h4 className="mb-3 text-4xl font-black text-white">
                {topic.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{topic.desc}</p>
              <div className="mt-5 rounded-2xl bg-white/15 p-4 font-bold text-white">
                Eng yaxshi: {topic.best}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="grid gap-6 lg:grid-cols-2">
            <CodePanel code={topic.code} />
            <ResultPreview type={topic.preview} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdBuildCircle}
        label="Interactive build"
        title="Build pipeline qanday ishlaydi?"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h4 className="mb-5 text-3xl font-black text-white">
              Build bosqichlari
            </h4>

            <div className="space-y-3">
              {buildSteps.map((step, index) => (
                <motion.button
                  key={step}
                  whileHover={{ x: 7 }}
                  onClick={() => setBuildStep(index)}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl p-4 text-left font-bold transition ${
                    buildStep === index
                      ? "bg-white text-slate-950"
                      : "bg-slate-950/60 text-slate-300 hover:bg-slate-950"
                  }`}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400 text-slate-950 font-black">
                    {index + 1}
                  </span>
                  {step}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
            <div className="mb-6 grid gap-3 md:grid-cols-5">
              {["BEM", "Normalize", "Prefix", "Minify", "Build"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-4 text-center font-black transition ${
                      buildStep >= index
                        ? "bg-cyan-400 text-slate-950"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {item}
                  </motion.div>
                ),
              )}
            </div>

            <CodePanel code={buildCode} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Amaliy mashg‘ulot"
        title="BEM asosida modul yozish + autoprefixer bilan build qilish"
        color="text-fuchsia-300"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CodePanel code={bemModuleCode} />
          <BemCardPreview />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Production commands"
        title="O‘quvchi bajaradigan real workflow"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "1. Paketlar",
              text: "postcss, autoprefixer, cssnano va normalize.css o‘rnatiladi.",
              code: "npm install -D postcss autoprefixer cssnano\nnpm install normalize.css",
            },
            {
              title: "2. Config",
              text: "postcss.config.js ichida pluginlar ulanadi.",
              code: "export default {\n  plugins: {\n    autoprefixer: {},\n    cssnano: {}\n  }\n}",
            },
            {
              title: "3. Build",
              text: "Project production uchun yig‘iladi.",
              code: "npm run build",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-orange-400/20 bg-orange-400/10 p-6"
            >
              <h4 className="mb-3 text-2xl font-black text-white">
                {item.title}
              </h4>
              <p className="mb-4 leading-7 text-slate-300">{item.text}</p>
              <pre className="rounded-2xl bg-black/40 p-4 text-sm text-orange-200">
                {item.code}
              </pre>
            </div>
          ))}
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="BEM va build quiz"
          color="text-emerald-300"
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

function ResultPreview({ type }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
      <p className="mb-3 text-sm font-black text-slate-400">Natija preview:</p>

      {type === "bem" && (
        <div className="space-y-3 font-mono text-sm">
          <div className="rounded-xl bg-fuchsia-400/20 p-3 text-fuchsia-200">
            .course-card
          </div>
          <div className="ml-5 rounded-xl bg-cyan-400/20 p-3 text-cyan-200">
            .course-card__title
          </div>
          <div className="ml-5 rounded-xl bg-emerald-400/20 p-3 text-emerald-200">
            .course-card__button--primary
          </div>
        </div>
      )}

      {type === "cross" && (
        <div className="grid grid-cols-2 gap-3">
          {["Chrome", "Firefox", "Safari", "Edge"].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-4 text-center font-black text-white"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {type === "prefix" && (
        <div className="space-y-3">
          <div className="rounded-2xl bg-white/10 p-4 text-slate-300">
            user-select: none;
          </div>
          <div className="rounded-2xl bg-cyan-400/20 p-4 font-black text-cyan-200">
            -webkit-user-select qo‘shiladi
          </div>
        </div>
      )}

      {type === "minify" && (
        <div className="grid gap-3">
          <div className="rounded-2xl bg-white/10 p-4 text-slate-300">
            Before: ko‘p qatorli CSS
          </div>
          <div className="rounded-2xl bg-emerald-400/20 p-4 text-emerald-200">
            After: ixcham CSS
          </div>
        </div>
      )}

      {type === "normalize" && (
        <div className="rounded-3xl bg-white p-5 text-slate-950">
          <button className="rounded-xl bg-fuchsia-500 px-5 py-3 font-black text-white">
            Normal button
          </button>
          <p className="mt-3 text-sm text-slate-600">
            Browser default farqlari kamayadi.
          </p>
        </div>
      )}
    </div>
  );
}

function BemCardPreview() {
  return (
    <div className="rounded-[36px] bg-white p-5 text-slate-950">
      <div className="rounded-[30px] border border-fuchsia-400/20 bg-gradient-to-br from-[#170726] to-[#020617] p-7 text-white shadow-2xl">
        <span className="rounded-full bg-fuchsia-500 px-4 py-2 text-xs font-black uppercase">
          Premium
        </span>
        <h3 className="mt-6 text-4xl font-black">Frontend Pro</h3>
        <p className="mt-3 leading-7 text-slate-300">
          HTML, CSS, Grid, Responsive va Clean Code darslari.
        </p>
        <div className="mt-5 grid gap-3">
          {["BEM structure", "Cross-browser CSS", "Production build"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-4 font-bold text-slate-200"
              >
                {item}
              </div>
            ),
          )}
        </div>
        <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 p-4 font-black text-white">
          Start Learning
        </button>
      </div>
    </div>
  );
}

function WorkflowHero({ buildStep }) {
  const steps = ["BEM", "Normalize", "Prefix", "Minify", "Build"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-fuchsia-600">CSS Pipeline</p>
          <h3 className="text-3xl font-black">Production Ready</h3>
        </div>
        <FaRocket className="text-5xl text-fuchsia-500" />
      </div>

      <div className="rounded-[30px] bg-slate-950 p-6 text-white">
        <div className="grid gap-3">
          {steps.map((item, index) => (
            <div
              key={item}
              className={`rounded-2xl p-4 font-black transition ${
                buildStep >= index
                  ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white"
                  : "bg-white/10 text-slate-400"
              }`}
            >
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CodePanel({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="relative rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-4 top-4 flex cursor-pointer items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-black text-slate-950 transition hover:scale-105"
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? "Copied" : "Copy"}
      </button>

      <p className="mb-3 text-sm font-black text-slate-400">Kod:</p>
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 pt-12 font-mono text-sm leading-7 text-cyan-300">
        {code}
      </pre>
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

function HeroBadge({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
    >
      <Icon className="mb-3 text-3xl text-fuchsia-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6"
    >
      <Icon className="mb-4 text-5xl text-cyan-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="leading-7 text-slate-300">{text}</p>
    </motion.div>
  );
}
