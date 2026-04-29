import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaCrown,
  FaLightbulb,
  FaEye,
  FaPuzzlePiece,
  FaGlobe,
  FaCompressAlt,
  FaTools,
  FaRocket,
  FaLayerGroup,
  FaBroom,
} from "react-icons/fa";
import { MdQuiz, MdBuildCircle } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  bem: {
    title: "BEM metodologiyasi",
    icon: FaPuzzlePiece,
    color: "from-cyan-600 via-blue-600 to-indigo-700",
    simple:
      "BEM — class nomlarini tartibli yozish usuli: block__element--modifier.",
    result:
      "Natija: class nomlari chalkash bo‘lmaydi. Katta projectda ham CSS tartibli qoladi.",
    code: `/* BEM formula */
.block {}
.block__element {}
.block__element--modifier {}

/* Example */
.card {}
.card__title {}
.card__button {}
.card__button--primary {}`,
    preview: "bem",
  },
  cross: {
    title: "Cross-browser",
    icon: FaGlobe,
    color: "from-violet-600 via-fuchsia-600 to-pink-700",
    simple:
      "Cross-browser — sayt Chrome, Firefox, Safari, Edge kabi browserlarda bir xil ishlashi.",
    result: "Natija: foydalanuvchi qaysi browserdan kirsa ham sayt buzilmaydi.",
    code: `.card {
  display: flex;
  gap: 16px;
  border-radius: 20px;
}

/* Ba’zi eski browserlarda ayrim propertylar boshqacha ishlashi mumkin */`,
    preview: "cross",
  },
  autoprefixer: {
    title: "Autoprefixer",
    icon: FaTools,
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    simple:
      "Autoprefixer CSS’ga kerakli browser prefixlarni avtomatik qo‘shadi.",
    result: "Natija: qo‘lda -webkit-, -ms-, -moz- yozib yurish shart emas.",
    code: `/* Siz yozgan CSS */
.box {
  user-select: none;
  display: flex;
}

/* Builddan keyin */
.box {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  display: flex;
}`,
    preview: "autoprefixer",
  },
  minify: {
    title: "Minifier",
    icon: FaCompressAlt,
    color: "from-amber-500 via-orange-600 to-red-700",
    simple:
      "Minify — CSS koddan ortiqcha bo‘sh joy, enter va commentlarni olib tashlash.",
    result: "Natija: fayl hajmi kichrayadi, sayt tezroq yuklanadi.",
    code: `/* Before */
.card {
  padding: 20px;
  border-radius: 20px;
  background: #0f172a;
}

/* After minify */
.card{padding:20px;border-radius:20px;background:#0f172a}`,
    preview: "minify",
  },
  normalize: {
    title: "Normalize.css",
    icon: FaBroom,
    color: "from-slate-700 via-blue-700 to-cyan-700",
    simple:
      "Normalize.css browserlarning default style farqlarini kamaytiradi.",
    result:
      "Natija: button, input, heading, margin kabi elementlar browserlarda barqarorroq ko‘rinadi.",
    code: `/* main.css */
@import "normalize.css";

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
<section class="pricing-card pricing-card--premium">
  <div class="pricing-card__badge">Premium</div>

  <h2 class="pricing-card__title">Frontend Pro</h2>

  <p class="pricing-card__text">
    HTML, CSS, Grid, Responsive va Clean Code kursi.
  </p>

  <ul class="pricing-card__list">
    <li class="pricing-card__item">Responsive design</li>
    <li class="pricing-card__item">Clean CSS structure</li>
    <li class="pricing-card__item">Real project practice</li>
  </ul>

  <button class="pricing-card__button pricing-card__button--primary">
    Start Learning
  </button>
</section>

/* CSS */
.pricing-card {
  width: min(100%, 420px);
  padding: 28px;
  border-radius: 32px;
  background: #0f172a;
  border: 1px solid rgba(34, 211, 238, 0.25);
  color: white;
}

.pricing-card--premium {
  background: linear-gradient(135deg, #0f172a, #020617);
  box-shadow: 0 24px 80px rgba(34, 211, 238, 0.18);
}

.pricing-card__badge {
  display: inline-block;
  margin-bottom: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #22d3ee;
  color: #020617;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.pricing-card__title {
  margin: 0 0 12px;
  font-size: 32px;
}

.pricing-card__text {
  margin: 0 0 20px;
  color: #94a3b8;
  line-height: 1.7;
}

.pricing-card__list {
  display: grid;
  gap: 10px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
}

.pricing-card__item {
  padding: 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
}

.pricing-card__button {
  width: 100%;
  border: none;
  border-radius: 18px;
  padding: 15px 20px;
  font-weight: 900;
  cursor: pointer;
}

.pricing-card__button--primary {
  background: linear-gradient(135deg, #22d3ee, #8b5cf6);
  color: white;
}`;

const buildCode = `/* 1. Paketlarni o‘rnatish */
npm install -D postcss autoprefixer cssnano

/* 2. postcss.config.js */
export default {
  plugins: {
    autoprefixer: {},
    cssnano: {}
  }
}

/* 3. package.json */
{
  "scripts": {
    "build": "vite build"
  }
}

/* 4. Build */
npm run build

/* Natija:
   CSS fayl build paytida prefixlanadi va minify bo‘ladi.
*/`;

const normalizeCode = `/* main.css */
@import "normalize.css";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #020617;
  color: #f8fafc;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}`;

const checklist = [
  "BEM metodologiyasi tushuntirildi",
  "block__element--modifier formulasi ko‘rsatildi",
  "BEM asosida modul yozildi",
  "Cross-browser muammolari tushuntirildi",
  "Autoprefixer nima qilishi tushuntirildi",
  "Prefixlar misolda ko‘rsatildi",
  "CSS minify tushuntirildi",
  "Normalize.css nima ekanligi tushuntirildi",
  "postcss/autoprefixer build jarayoni ko‘rsatildi",
  "To‘liq amaliy BEM card kodi yozildi",
];

const quiz = [
  {
    question: "BEM formulasi qaysi?",
    options: [
      "block__element--modifier",
      "box-element-modifier",
      "block.element#modifier",
    ],
    correct: 0,
  },
  {
    question: "Autoprefixer nima qiladi?",
    options: [
      "CSS prefixlarni avtomatik qo‘shadi",
      "HTML faylni o‘chiradi",
      "Rasmni kichraytiradi",
    ],
    correct: 0,
  },
  {
    question: "Minify nima uchun kerak?",
    options: [
      "Fayl hajmini kichraytirish uchun",
      "Kodga rang berish uchun",
      "Button yaratish uchun",
    ],
    correct: 0,
  },
  {
    question: "Normalize.css nima qiladi?",
    options: [
      "Browser default style farqlarini kamaytiradi",
      "JavaScript yozadi",
      "Deploy qiladi",
    ],
    correct: 0,
  },
];

export default function CssM4L11() {
  const [activeConcept, setActiveConcept] = useState("bem");
  const [buildStep, setBuildStep] = useState(0);
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});

  const current = concepts[activeConcept];

  const doneCount = useMemo(
    () => checklist.filter((_, index) => checked[index]).length,
    [checked],
  );

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const buildSteps = [
    "BEM bilan class nomlari yoziladi",
    "Normalize.css orqali browser default farqlari kamaytiriladi",
    "Autoprefixer kerakli prefixlarni qo‘shadi",
    "Minifier CSS hajmini kichraytiradi",
    "Build qilingan project production uchun tayyor bo‘ladi",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.08 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[42px] border border-cyan-400/20 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 11-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              BEM, Cross-Browser, Autoprefixer, Minifier, Normalize.css
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bu darsda o‘quvchilar CSS’ni professional project darajasida
              yozishni o‘rganadi: BEM bilan class nomlash, browserlarda moslik,
              Autoprefixer, minify va Normalize.css jarayoni to‘liq
              ko‘rsatiladi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaPuzzlePiece} title="BEM" text="clean naming" />
              <HeroBadge icon={FaGlobe} title="Browser" text="compatibility" />
              <HeroBadge icon={FaRocket} title="Build" text="production CSS" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Senior explanation"
        title="Bu mavzular nima uchun kerak?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaPuzzlePiece}
            title="BEM"
            text="Katta projectda class nomlari chalkashmasligi uchun kerak."
          />
          <InfoCard
            icon={FaGlobe}
            title="Cross-browser"
            text="Sayt har xil browserlarda buzilmasdan ishlashi uchun kerak."
          />
          <InfoCard
            icon={FaTools}
            title="Build tools"
            text="Autoprefixer va minifier CSS’ni productionga tayyorlaydi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCrown}
        label="Code + Result"
        title="Asosiy tushunchalar"
        color="text-indigo-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(concepts).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveConcept(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeConcept === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-cyan-400/20"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.8fr_1fr_0.9fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConcept}
              initial={{ opacity: 0, x: -22, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 22, scale: 0.97 }}
              className={`rounded-[34px] bg-gradient-to-br ${current.color} p-7`}
            >
              <current.icon className="mb-5 text-5xl text-white" />
              <h4 className="mb-4 text-3xl font-black text-white">
                {current.title}
              </h4>

              <div className="mb-4 rounded-2xl bg-white/15 p-4">
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  Oddiy tushuncha
                </p>
                <p className="mt-2 text-lg font-black leading-8 text-white">
                  {current.simple}
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  Natijasi
                </p>
                <p className="mt-2 leading-8 text-white/90">{current.result}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={current.code} />

          <ResultPreview type={current.preview} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdBuildCircle}
        label="Interactive build"
        title="CSS build jarayoni qanday ishlaydi?"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Build bosqichlari
            </h4>

            <div className="grid gap-3">
              {buildSteps.map((step, index) => (
                <button
                  key={step}
                  onClick={() => setBuildStep(index)}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left font-black transition ${
                    buildStep === index
                      ? "border-cyan-300 bg-cyan-400/20 text-cyan-300"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10">
                    {index + 1}
                  </span>
                  {step}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Jarayon preview
            </h4>

            <div className="grid gap-4 md:grid-cols-5">
              {["BEM", "Normalize", "Prefix", "Minify", "Build"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`rounded-3xl border p-4 text-center font-black transition ${
                      buildStep >= index
                        ? "border-cyan-400 bg-cyan-400/20 text-cyan-300"
                        : "border-white/10 bg-white/5 text-slate-400"
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <CodePanel className="mt-6" code={buildCode} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Full practice"
        title="Amaliy: BEM asosida modul yozish + build"
        color="text-cyan-300"
      >
        <div className="space-y-6">
          <PracticeWithPreview
            title="1. BEM asosida pricing card moduli"
            code={bemModuleCode}
            preview="bem-card"
          />

          <PracticeWithPreview
            title="2. Normalize.css bilan base CSS"
            code={normalizeCode}
            preview="normalize-card"
          />

          <PracticeWithPreview
            title="3. Autoprefixer + Minifier build sozlamasi"
            code={buildCode}
            preview="build-card"
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Checklist"
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
              <button
                key={item}
                onClick={() => setChecked({ ...checked, [index]: !active })}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left font-bold transition ${
                  active
                    ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                    : "border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                {active ? <FaCheckCircle /> : <HiMiniCursorArrowRays />}
                {item}
              </button>
            );
          })}
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini quiz"
          title="BEM va CSS build quiz"
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
            <div
              key={item.question}
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
                    <button
                      type="button"
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
                            : "border-white/10 bg-white/5 text-slate-300"
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
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

function ResultPreview({ type }) {
  return (
    <div className="rounded-[32px] border border-cyan-400/20 bg-slate-950/80 p-5">
      <div className="mb-4 flex items-center gap-3">
        <FaEye className="text-2xl text-cyan-300" />
        <h4 className="text-xl font-black text-white">Natija:</h4>
      </div>

      {type === "bem" && (
        <div className="space-y-3 font-mono text-sm">
          <div className="rounded-xl bg-cyan-400/20 p-3 text-cyan-200">
            .card
          </div>
          <div className="ml-5 rounded-xl bg-violet-400/20 p-3 text-violet-200">
            .card__title
          </div>
          <div className="ml-5 rounded-xl bg-emerald-400/20 p-3 text-emerald-200">
            .card__button--primary
          </div>
        </div>
      )}

      {type === "cross" && (
        <div className="grid gap-3 md:grid-cols-2">
          {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
            <div
              key={browser}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center font-black text-slate-200"
            >
              {browser}
            </div>
          ))}
        </div>
      )}

      {type === "autoprefixer" && (
        <div className="grid gap-3">
          <div className="rounded-2xl bg-white/5 p-4 text-slate-300">
            Siz yozasiz: <b className="text-cyan-300">user-select</b>
          </div>
          <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-200">
            Build qo‘shadi: <b>-webkit-user-select</b>
          </div>
        </div>
      )}

      {type === "minify" && (
        <div className="grid gap-3">
          <div className="rounded-2xl bg-white/5 p-4 text-slate-300">
            Before: ko‘p qatorli CSS
          </div>
          <div className="rounded-2xl bg-emerald-400/10 p-4 text-emerald-200">
            After: bitta ixcham CSS
          </div>
        </div>
      )}

      {type === "normalize" && (
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900 p-4">
          <button className="rounded-xl bg-cyan-300 px-4 py-3 font-black text-slate-950">
            Normal button
          </button>
          <p className="mt-3 text-sm text-slate-400">
            Browser default farqlari kamayadi.
          </p>
        </div>
      )}

      {type === "bem-card" && <BemCardPreview />}
      {type === "normalize-card" && (
        <div className="rounded-3xl bg-slate-900 p-5 text-slate-200">
          Base style: margin reset, box-sizing, img responsive, form inherit.
        </div>
      )}
      {type === "build-card" && (
        <div className="grid gap-3">
          {["CSS", "Autoprefixer", "Minify", "Production"].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-cyan-400/10 p-4 font-black text-cyan-200"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BemCardPreview() {
  return (
    <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white">
      <span className="rounded-full bg-cyan-300 px-3 py-2 text-xs font-black uppercase text-slate-950">
        Premium
      </span>
      <h3 className="mt-5 text-3xl font-black">Frontend Pro</h3>
      <p className="mt-3 leading-7 text-slate-400">
        HTML, CSS, Grid, Responsive va Clean Code kursi.
      </p>
      <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 p-4 font-black">
        Start Learning
      </button>
    </div>
  );
}

function PracticeWithPreview({ title, code, preview }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-slate-950/50 p-5">
      <h4 className="mb-5 text-xl font-black text-white">{title}</h4>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <CodePanel code={code} />
        <ResultPreview type={preview} />
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Production CSS</p>
          <h3 className="text-2xl font-black md:text-3xl">Build Pipeline</h3>
        </div>
        <FaRocket className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <div className="grid gap-3">
          {["BEM naming", "Normalize.css", "Autoprefixer", "Minifier"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 font-black text-cyan-200"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
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

      <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 pt-12 font-mono text-sm leading-7 text-cyan-100">
        {code}
      </pre>
    </div>
  );
}

function PremiumSection({ icon: Icon, label, title, color, children }) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-[34px] border border-white/10 bg-[#0f172a]/80 p-5 shadow-xl backdrop-blur-xl md:p-6"
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
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 md:p-5">
      <Icon className="mb-3 text-2xl text-cyan-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
