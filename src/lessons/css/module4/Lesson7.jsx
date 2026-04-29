import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaThLarge,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaCrown,
  FaLightbulb,
  FaLayerGroup,
  FaImages,
  FaLaptopCode,
  FaMagic,
  FaEye,
  FaArrowRight,
  FaChild,
  FaMobileAlt,
} from "react-icons/fa";
import { MdQuiz, MdDashboardCustomize } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  nested: {
    title: "Nested Grid",
    icon: FaLayerGroup,
    color: "from-cyan-600 via-blue-600 to-indigo-700",
    simple: "Nested grid — grid ichida yana bitta grid ishlatish.",
    result:
      "Natija: portfolio card ichida rasm, title, text va button tartibli joylashadi.",
    code: `.portfolio-card {
  display: grid;
  gap: 16px;
}

.card-info {
  display: grid;
  gap: 8px;
}`,
    preview: "nested",
  },
  minmax: {
    title: "minmax()",
    icon: FaMagic,
    color: "from-violet-600 via-fuchsia-600 to-pink-700",
    simple:
      "minmax(220px, 1fr) — card eng kamida 220px bo‘ladi, joy bo‘lsa kattalashadi.",
    result:
      "Natija: cardlar juda kichrayib ketmaydi va ekran kengaysa chiroyli kengayadi.",
    code: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 20px;
}`,
    preview: "minmax",
  },
  autofit: {
    title: "auto-fit",
    icon: FaMobileAlt,
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    simple: "auto-fit ekran sig‘imiga qarab cardlarni avtomatik joylashtiradi.",
    result:
      "Natija: responsive gallery paydo bo‘ladi. Desktopda ko‘p card, mobilda kam card chiqadi.",
    code: `.gallery {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );
  gap: 20px;
}`,
    preview: "autofit",
  },
  autofill: {
    title: "auto-fill",
    icon: FaThLarge,
    color: "from-amber-500 via-orange-600 to-red-700",
    simple:
      "auto-fill ham cardlar uchun joy ajratadi, lekin bo‘sh joylarni ham hisobga olishi mumkin.",
    result:
      "Natija: gallery ichida bo‘sh column joylari saqlanishi mumkin. auto-fit esa ko‘proq amaliy ishlatiladi.",
    code: `.gallery {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(220px, 1fr)
  );
  gap: 20px;
}`,
    preview: "autofill",
  },
  responsive: {
    title: "Responsive Grid",
    icon: FaImages,
    color: "from-slate-700 via-blue-700 to-cyan-700",
    simple:
      "Responsive grid — ekran o‘lchamiga qarab o‘zi moslashadigan layout.",
    result:
      "Natija: portfolio gallery desktop, tablet va mobile’da buzilmasdan chiroyli ko‘rinadi.",
    code: `.portfolio-gallery {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(240px, 1fr)
  );
  gap: 24px;
}`,
    preview: "responsive",
  },
};

const portfolioCode = `<!-- HTML -->
<section class="portfolio">
  <h2>My Portfolio Gallery</h2>

  <div class="portfolio-gallery">
    <article class="portfolio-card">
      <div class="card-image">01</div>
      <div class="card-info">
        <h3>Landing Page</h3>
        <p>HTML, CSS and responsive layout</p>
        <button>View Project</button>
      </div>
    </article>

    <article class="portfolio-card">
      <div class="card-image">02</div>
      <div class="card-info">
        <h3>Dashboard</h3>
        <p>Grid cards and analytics UI</p>
        <button>View Project</button>
      </div>
    </article>

    <article class="portfolio-card">
      <div class="card-image">03</div>
      <div class="card-info">
        <h3>Shop UI</h3>
        <p>Product cards and clean layout</p>
        <button>View Project</button>
      </div>
    </article>
  </div>
</section>

/* CSS */
.portfolio {
  padding: 40px;
  background: #020617;
  color: white;
}

.portfolio h2 {
  margin-bottom: 24px;
  font-size: 36px;
}

.portfolio-gallery {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(240px, 1fr)
  );
  gap: 24px;
}

.portfolio-card {
  display: grid;
  gap: 16px;
  padding: 18px;
  border-radius: 28px;
  background: linear-gradient(135deg, #0f172a, #020617);
  border: 1px solid rgba(34, 211, 238, 0.25);
}

.card-image {
  height: 180px;
  border-radius: 22px;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  display: grid;
  place-items: center;
  font-size: 42px;
  font-weight: 900;
}

.card-info {
  display: grid;
  gap: 10px;
}

.card-info h3 {
  font-size: 22px;
}

.card-info p {
  color: #94a3b8;
}

.card-info button {
  border: none;
  border-radius: 16px;
  padding: 14px 18px;
  background: #22d3ee;
  color: #020617;
  font-weight: 900;
  cursor: pointer;
}`;

const checklist = [
  "Nested grid tushuntirildi",
  "Grid ichida grid ishlatildi",
  "minmax() nima qilishi tushuntirildi",
  "auto-fit tushuntirildi",
  "auto-fill tushuntirildi",
  "auto-fit va auto-fill farqi aytildi",
  "Responsive grid tushuntirildi",
  "Portfolio gallery grid qilindi",
  "Card ichida nested grid ishlatildi",
  "To‘liq HTML/CSS kod yozildi",
  "Har bir kod natijasi ko‘rsatildi",
];

const quiz = [
  {
    question: "Nested grid nima?",
    options: [
      "Grid ichida yana grid ishlatish",
      "Faqat bitta button qilish",
      "Ranglarni o‘chirish",
    ],
    correct: 0,
  },
  {
    question: "minmax(240px, 1fr) nima degani?",
    options: [
      "Eng kamida 240px, joy bo‘lsa 1fr bo‘lib kengayadi",
      "Faqat 240px bo‘ladi",
      "Faqat 1px bo‘ladi",
    ],
    correct: 0,
  },
  {
    question: "auto-fit nima qiladi?",
    options: [
      "Cardlarni ekran sig‘imiga qarab joylashtiradi",
      "Fontni kattalashtiradi",
      "Rasmni o‘chiradi",
    ],
    correct: 0,
  },
  {
    question: "Responsive grid nima uchun kerak?",
    options: [
      "Turli ekranlarda layout buzilmasligi uchun",
      "Faqat desktop uchun",
      "Faqat rang berish uchun",
    ],
    correct: 0,
  },
];

export default function CssM4L7() {
  const [activeConcept, setActiveConcept] = useState("nested");
  const [minWidth, setMinWidth] = useState(220);
  const [gapSize, setGapSize] = useState(20);
  const [cardCount, setCardCount] = useState(6);
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

  const liveCode = `.portfolio-gallery {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${minWidth}px, 1fr)
  );
  gap: ${gapSize}px;
}

.portfolio-card {
  display: grid;
  gap: 16px;
}`;

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
              CSS 3-OY • 4-MODUL • 7-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Grid — Advanced Layouts
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bu darsda o‘quvchilar Grid’ning professional qismiga o‘tadi:
              nested grid, minmax(), auto-fit, auto-fill va responsive portfolio
              gallery layoutni kod + natija orqali tushunadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaLayerGroup}
                title="Nested"
                text="grid ichida grid"
              />
              <HeroBadge
                icon={FaMobileAlt}
                title="Responsive"
                text="auto-fit"
              />
              <HeroBadge
                icon={FaImages}
                title="Portfolio"
                text="gallery grid"
              />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Simple idea"
        title="Advanced Grid nima uchun kerak?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaChild}
            title="Oddiy tushuncha"
            text="Oddiy Grid 3x3 yoki 2x2 layout qiladi. Advanced Grid esa ekran o‘zgarsa ham layoutni avtomatik moslaydi."
          />
          <InfoCard
            icon={FaMobileAlt}
            title="Responsive"
            text="auto-fit va minmax yordamida cardlar mobile, tablet va desktopda o‘zi joylashadi."
          />
          <InfoCard
            icon={FaLaptopCode}
            title="Real project"
            text="Portfolio gallery, product cards, blog cards va dashboard cardlar uchun juda kerak."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCrown}
        label="Code + Result"
        title="Advanced Grid tushunchalari"
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
        icon={MdDashboardCustomize}
        label="Interactive builder"
        title="Portfolio Gallery Builder"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-2 text-2xl font-black text-white">
              Gallery sozlamalari
            </h4>
            <p className="mb-5 leading-7 text-slate-400">
              Bu yerda `minmax`, `auto-fit`, `gap` va cardlar soni qanday ta’sir
              qilishini jonli ko‘rasiz.
            </p>

            <ControlSlider
              label="minmax minimum width"
              value={minWidth}
              min={160}
              max={320}
              suffix="px"
              onChange={setMinWidth}
            />

            <ControlSlider
              label="gap"
              value={gapSize}
              min={8}
              max={36}
              suffix="px"
              onChange={setGapSize}
            />

            <ControlSlider
              label="card count"
              value={cardCount}
              min={3}
              max={9}
              suffix="ta"
              onChange={setCardCount}
            />
          </div>

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Natija preview
            </h4>

            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
                gap: `${gapSize}px`,
              }}
            >
              {Array.from({ length: cardCount }).map((_, index) => (
                <PortfolioCard key={index} index={index + 1} />
              ))}
            </div>

            <CodePanel className="mt-6" code={liveCode} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Full practice"
        title="Portfolio gallery grid — to‘liq kod va natija"
        color="text-cyan-300"
      >
        <PracticeWithPreview
          title="Responsive portfolio gallery"
          code={portfolioCode}
          preview="portfolio"
        />
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
          title="Advanced Grid quiz"
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

      {type === "nested" && (
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900 p-4">
          <div className="mb-4 grid h-28 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-3xl font-black text-white">
            01
          </div>
          <div className="grid gap-2">
            <div className="h-5 rounded-full bg-white/80" />
            <div className="h-4 w-3/4 rounded-full bg-white/30" />
            <button className="mt-2 rounded-xl bg-cyan-300 p-3 font-black text-slate-950">
              View
            </button>
          </div>
        </div>
      )}

      {type === "minmax" && <PreviewGallery count={3} min="130px" />}
      {type === "autofit" && <PreviewGallery count={6} min="120px" />}
      {type === "autofill" && <PreviewGallery count={4} min="120px" empty />}
      {type === "responsive" && <PreviewGallery count={6} min="110px" />}
      {type === "portfolio" && (
        <PreviewGallery count={6} min="150px" portfolio />
      )}
    </div>
  );
}

function PreviewGallery({ count, min, empty = false, portfolio = false }) {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <PortfolioCard key={index} index={index + 1} simple={!portfolio} />
      ))}

      {empty && (
        <div className="grid min-h-24 place-items-center rounded-2xl border border-dashed border-slate-500 text-sm font-black text-slate-500">
          empty space
        </div>
      )}
    </div>
  );
}

function PortfolioCard({ index, simple = false }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-800 to-slate-950 p-4 shadow-xl"
    >
      <div className="grid h-24 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-3xl font-black text-white">
        {String(index).padStart(2, "0")}
      </div>

      {!simple && (
        <div className="mt-4 grid gap-2">
          <h4 className="font-black text-white">Project {index}</h4>
          <p className="text-sm text-slate-400">Responsive portfolio card</p>
          <button className="rounded-xl bg-cyan-300 p-3 font-black text-slate-950">
            View Project
          </button>
        </div>
      )}
    </motion.div>
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

function ControlSlider({ label, value, min, max, suffix, onChange }) {
  return (
    <div className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-black text-white">{label}</span>
        <span className="rounded-xl bg-cyan-400/20 px-3 py-1 font-black text-cyan-300">
          {value}
          {suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-cyan-400"
      />
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Advanced Grid</p>
          <h3 className="text-2xl font-black md:text-3xl">Portfolio Gallery</h3>
        </div>
        <FaImages className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <PreviewGallery count={4} min="110px" portfolio />
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
