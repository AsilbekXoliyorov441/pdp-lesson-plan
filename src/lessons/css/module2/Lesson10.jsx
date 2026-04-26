import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCode,
  FaCss3Alt,
  FaFigma,
  FaImage,
  FaLayerGroup,
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaTimesCircle,
} from "react-icons/fa";
import { MdQuiz, MdDesignServices, MdViewModule } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const buildSteps = {
  analyze: {
    title: "Figma analiz",
    color: "from-pink-500 to-violet-500",
    desc: "Avval dizaynni sectionlarga ajratamiz: header, hero, cards, footer. Rang, font, spacing va image joylashuvini aniqlaymiz.",
    code: `/* Figma analiz */
Header: logo + nav + button
Hero: title + text + CTA + image
Cards: 3 ta feature card
Footer: contact + links`,
  },
  html: {
    title: "HTML structure",
    color: "from-orange-500 to-red-500",
    desc: "CSS yozishdan oldin HTML skeleton to‘g‘ri tuziladi. Class nomlari ma’noli bo‘lishi kerak.",
    code: `<header class="site-header">
  <div class="container header-wrapper">
    <a class="logo" href="#">EduPro</a>
    <nav class="nav">...</nav>
  </div>
</header>`,
  },
  css: {
    title: "CSS classes",
    color: "from-cyan-500 to-blue-500",
    desc: "Classlar orqali header, hero, card, button va container qismlariga bezak beramiz.",
    code: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
  },
  polish: {
    title: "Premium styling",
    color: "from-emerald-500 to-teal-500",
    desc: "Gradient, shadow, border-radius, font-weight va spacing orqali sahifani professional ko‘rinishga keltiramiz.",
    code: `.hero-card {
  padding: 32px;
  border-radius: 32px;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  box-shadow: 0 24px 70px rgba(6, 182, 212, 0.25);
}`,
  },
};

const quiz = [
  {
    question: "Landing page analizida birinchi nima qilinadi?",
    options: [
      "Sectionlarga ajratiladi",
      "Darhol rang beriladi",
      "Font o‘chiriladi",
    ],
    correct: 0,
  },
  {
    question: "Header ichida odatda nimalar bo‘ladi?",
    options: ["Logo, nav, button", "Faqat table", "Faqat video"],
    correct: 0,
  },
  {
    question: "Hero section vazifasi nima?",
    options: [
      "Asosiy fikrni birinchi ko‘rsatish",
      "Footer yaratish",
      "List marker o‘chirish",
    ],
    correct: 0,
  },
  {
    question: "Flexbox headerda nima uchun kerak?",
    options: [
      "Logo va navni joylashtirish uchun",
      "Font format qilish uchun",
      "Rasmni zip qilish uchun",
    ],
    correct: 0,
  },
  {
    question: "Class nomi qanday bo‘lishi kerak?",
    options: ["Ma’noli va tushunarli", "a, b, c", "Faqat raqam"],
    correct: 0,
  },
  {
    question: "Container nima uchun kerak?",
    options: [
      "Contentni markazga va chegaraga olish uchun",
      "Elementni yashirish uchun",
      "Audio qo‘yish uchun",
    ],
    correct: 0,
  },
];

export default function CssM2L10() {
  const [activeStep, setActiveStep] = useState("analyze");
  const [showNav, setShowNav] = useState(true);
  const [heroLayout, setHeroLayout] = useState("row");
  const [accent, setAccent] = useState("violet");
  const [checked, setChecked] = useState({
    figma: true,
    html: false,
    header: false,
    hero: false,
    cards: false,
    polish: false,
  });
  const [answers, setAnswers] = useState({});

  const step = buildSteps[activeStep];
  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const progress = Object.values(checked).filter(Boolean).length;

  const accentMap = {
    violet: {
      gradient: "from-violet-600 to-cyan-500",
      text: "text-violet-600",
      bg: "bg-violet-600",
      soft: "bg-violet-100",
    },
    emerald: {
      gradient: "from-emerald-600 to-teal-400",
      text: "text-emerald-600",
      bg: "bg-emerald-600",
      soft: "bg-emerald-100",
    },
    orange: {
      gradient: "from-orange-500 to-pink-500",
      text: "text-orange-600",
      bg: "bg-orange-500",
      soft: "bg-orange-100",
    },
  };

  const theme = accentMap[accent];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-cyan-400/20 bg-gradient-to-br from-[#07162f] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              <HiSparkles />
              CSS • Module 2 • 10-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Bezak berilgan landing page: Figma’dan real sahifaga
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun Figma dizaynni analiz qilamiz, HTML structure va CSS
              classlarni tayyorlaymiz, header, nav, hero section va cardlarni
              Flexbox yordamida premium ko‘rinishda stillaymiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={FaFigma}
                title="Analyze"
                text="Figma → sections"
              />
              <HeroBadge
                icon={FaCode}
                title="Structure"
                text="HTML + classes"
              />
              <HeroBadge
                icon={FaCss3Alt}
                title="Style"
                text="premium landing"
              />
            </div>
          </div>

          <LandingHeroPreview
            showNav={showNav}
            heroLayout={heroLayout}
            theme={theme}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaFigma}
        label="Figma analysis"
        title="Figmadagi landing page dizaynni tahlil qilish"
        color="text-pink-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaLayerGroup}
            title="Sectionlar"
            text="Dizaynni header, hero, features, footer kabi katta qismlarga ajratamiz."
          />
          <InfoCard
            icon={FaPalette}
            title="Style guide"
            text="Ranglar, fontlar, border-radius, shadow va spacing qiymatlarini yozib olamiz."
          />
          <InfoCard
            icon={FaImage}
            title="Assets"
            text="Rasm, icon va logolarni SVG/PNG/JPG formatda ajratib olamiz."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdDesignServices}
        label="Build steps"
        title="Landing page yasash metodikasi"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(buildSteps).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStep(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeStep === key
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
              key={activeStep}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${step.color} p-7`}
            >
              <h4 className="mb-3 text-4xl font-black text-white">
                {step.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{step.desc}</p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={step.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdViewModule}
        label="Interactive preview"
        title="Header, nav va hero sectionni live sozlash"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
              <h4 className="mb-4 text-xl font-black text-white">Navigation</h4>
              <button
                onClick={() => setShowNav(!showNav)}
                className={`w-full cursor-pointer rounded-2xl px-5 py-4 font-black ${
                  showNav
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/10 text-white"
                }`}
              >
                {showNav ? "Nav ko‘rinyapti" : "Nav yashirilgan"}
              </button>
            </div>

            <ButtonGroup
              title="Hero layout"
              value={heroLayout}
              setValue={setHeroLayout}
              options={[
                ["row", "Text + Image"],
                ["column", "Vertical"],
              ]}
            />

            <ButtonGroup
              title="Color theme"
              value={accent}
              setValue={setAccent}
              options={[
                ["violet", "Violet"],
                ["emerald", "Emerald"],
                ["orange", "Orange"],
              ]}
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <LandingMiniPreview
              showNav={showNav}
              heroLayout={heroLayout}
              theme={theme}
            />

            <CodePanel
              className="mt-5"
              code={`.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero {
  display: flex;
  flex-direction: ${heroLayout};
  gap: 40px;
}

.hero-button {
  background: ${
    accent === "violet"
      ? "#7c3aed"
      : accent === "emerald"
        ? "#059669"
        : "#f97316"
  };
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLaptopCode}
        label="HTML + CSS"
        title="To‘liq landing page skeleton"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <CodePanel
            code={`<!-- index.html -->
<header class="site-header">
  <div class="container header-wrapper">
    <a href="#" class="logo">EduPro</a>

    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Courses</a>
      <a href="#">Contact</a>
    </nav>

    <a href="#" class="header-btn">Start</a>
  </div>
</header>

<main>
  <section class="hero">
    <div class="hero-content">
      <h1>Learn frontend with practice</h1>
      <p>HTML va CSS orqali zamonaviy saytlar yarating.</p>
      <a href="#" class="hero-btn">Start learning</a>
    </div>

    <div class="hero-image">
      <img src="./student.png" alt="Student learning frontend" />
    </div>
  </section>
</main>`}
          />

          <CodePanel
            code={`/* style.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background-color: #0f172a;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-wrapper,
.hero {
  display: flex;
  align-items: center;
}

.header-wrapper {
  justify-content: space-between;
}

.hero {
  min-height: 80vh;
  gap: 48px;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Build checklist"
        title="Amaliyot davomida bosqichma-bosqich bajaring"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              ["figma", "Figma analiz qilindi"],
              ["html", "HTML skeleton yozildi"],
              ["header", "Header va navigation yaratildi"],
              ["hero", "Hero section flex bilan joylandi"],
              ["cards", "Card/sectionlar stillandi"],
              ["polish", "Rang, font, shadow, radius qo‘shildi"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setChecked({ ...checked, [key]: !checked[key] })}
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left font-black transition ${
                  checked[key]
                    ? "border-yellow-400 bg-yellow-400/15 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/10"
                }`}
              >
                {checked[key] ? "✅" : "⬜"} {label}
              </button>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6">
            <div className="mb-4 flex items-center justify-between text-white">
              <h4 className="text-2xl font-black">Project progress</h4>
              <span className="text-2xl font-black text-yellow-300">
                {progress}/6
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${(progress / 6) * 100}%` }}
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
              />
            </div>

            <div className="mt-6 rounded-3xl bg-white p-5 text-slate-950">
              <h5 className="text-3xl font-black">Final target</h5>
              <p className="mt-2 text-slate-600">
                Dars oxirida o‘quvchi header + hero + card sectionga ega
                stillangan landing page yasagan bo‘lishi kerak.
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCss3Alt}
        label="Styling rules"
        title="Premium ko‘rinish uchun CSS qoidalar"
        color="text-pink-300"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Spacing"
            text="padding, margin va gap qiymatlarini tartibli ishlating."
          />
          <StepCard
            number="02"
            title="Typography"
            text="Sarlavha katta, paragraph o‘qilishi oson bo‘lsin."
          />
          <StepCard
            number="03"
            title="Color"
            text="2–3 ta asosiy rangdan oshirmang."
          />
          <StepCard
            number="04"
            title="Polish"
            text="border-radius, shadow va hover effect qo‘shing."
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Landing page amaliyot quiz"
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

function LandingHeroPreview({ showNav, heroLayout, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Landing Preview</p>
          <h3 className="text-3xl font-black">Build Mode</h3>
        </div>
        <FaRocket className="text-5xl text-cyan-500" />
      </div>

      <LandingMiniPreview
        showNav={showNav}
        heroLayout={heroLayout}
        theme={theme}
      />
    </motion.div>
  );
}

function LandingMiniPreview({ showNav, heroLayout, theme }) {
  return (
    <div className="rounded-[30px] bg-slate-950 p-5 text-white">
      <header className="mb-8 flex items-center justify-between">
        <strong className="text-xl">EduPro</strong>

        {showNav && (
          <nav className="hidden gap-4 text-sm text-white/70 md:flex">
            <span>Home</span>
            <span>Courses</span>
            <span>Contact</span>
          </nav>
        )}

        <button
          className={`rounded-2xl px-4 py-2 font-black text-white ${theme.bg}`}
        >
          Start
        </button>
      </header>

      <section
        className={`grid gap-6 ${
          heroLayout === "row" ? "md:grid-cols-2 md:items-center" : ""
        }`}
      >
        <div>
          <p className={`mb-3 font-black ${theme.text}`}>Frontend course</p>
          <h4 className="text-4xl font-black leading-tight">
            Learn coding with real projects
          </h4>
          <p className="mt-3 text-white/70">
            HTML va CSS orqali zamonaviy landing page yarating.
          </p>
          <button
            className={`mt-6 rounded-2xl px-5 py-3 font-black text-white ${theme.bg}`}
          >
            Start learning
          </button>
        </div>

        <div
          className={`rounded-[28px] bg-gradient-to-br ${theme.gradient} p-6`}
        >
          <div className="grid h-44 place-items-center rounded-3xl bg-white/20 text-6xl backdrop-blur">
            🧑‍💻
          </div>
        </div>
      </section>
    </div>
  );
}

function ButtonGroup({ title, value, setValue, options }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setValue(key)}
            className={`cursor-pointer rounded-2xl px-4 py-3 text-sm font-black transition ${
              value === key
                ? "bg-white text-slate-950"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function CodePanel({ code, className = "" }) {
  return (
    <div
      className={`rounded-[32px] border border-white/10 bg-slate-950/80 p-5 ${className}`}
    >
      <p className="mb-3 text-sm font-black text-slate-400">Code:</p>
      <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 font-mono text-sm leading-7 text-cyan-300">
        {code}
      </pre>
    </div>
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
      <Icon className="mb-3 text-3xl text-cyan-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
