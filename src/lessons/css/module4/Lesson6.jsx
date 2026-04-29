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
  FaSlidersH,
  FaBorderAll,
  FaLightbulb,
  FaColumns,
  FaTable,
  FaMagic,
  FaChild,
  FaPuzzlePiece,
  FaArrowRight,
  FaEye,
} from "react-icons/fa";
import { MdQuiz, MdDashboardCustomize } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  intro: {
    title: "Grid nima?",
    icon: FaLightbulb,
    color: "from-cyan-600 via-blue-600 to-indigo-700",
    simple:
      "Grid — elementlarni jadval kabi qator va ustunlarga joylashtirish usuli.",
    result:
      "Natija: cardlar tartibli kataklarga joylashadi. Masalan 3 ta ustun, 3 ta qator.",
    code: `.grid-container {
  display: grid;
}`,
    preview: "intro",
  },
  container: {
    title: "Grid container",
    icon: FaThLarge,
    color: "from-indigo-600 via-violet-600 to-fuchsia-700",
    simple:
      "display: grid yozilgan ota element grid container bo‘ladi. Ichidagi elementlar grid item bo‘ladi.",
    result:
      "Natija: ota quti gridga aylanadi, ichidagi cardlar grid qoidalariga bo‘ysunadi.",
    code: `.grid-container {
  display: grid;
}

.grid-item {
  background: #1e293b;
  color: white;
  padding: 30px;
  border-radius: 20px;
}`,
    preview: "container",
  },
  columns: {
    title: "Columns va rows",
    icon: FaColumns,
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    simple:
      "columns — ustunlar, rows — qatorlar. repeat(3, 1fr) 3 ta teng ustun degani.",
    result:
      "Natija: 9 ta card 3 ta ustunga bo‘linadi. Har bir ustun teng joy oladi.",
    code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 120px);
  gap: 16px;
}`,
    preview: "columns",
  },
  gap: {
    title: "Gap",
    icon: FaSlidersH,
    color: "from-amber-500 via-orange-600 to-red-700",
    simple:
      "gap — grid itemlar orasidagi masofa. Margin emas, container ichidagi masofa.",
    result:
      "Natija: cardlar bir-biriga yopishib qolmaydi, orasida chiroyli masofa paydo bo‘ladi.",
    code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}`,
    preview: "gap",
  },
  wide: {
    title: "grid-column",
    icon: FaBorderAll,
    color: "from-slate-700 via-blue-700 to-cyan-700",
    simple:
      "grid-column orqali bitta itemni bir nechta ustun bo‘ylab cho‘zish mumkin.",
    result:
      "Natija: birinchi card 2 ta ustun joyini egallaydi. Bu banner yoki katta card uchun kerak.",
    code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.wide-card {
  grid-column: 1 / 3;
}`,
    preview: "wide",
  },
  areas: {
    title: "Grid areas",
    icon: FaTable,
    color: "from-violet-700 via-indigo-700 to-blue-700",
    simple:
      "Grid areas sahifa qismlariga nom beradi: header, sidebar, main, footer.",
    result:
      "Natija: real sayt layouti paydo bo‘ladi. Header tepada, sidebar chapda, main o‘ngda, footer pastda.",
    code: `.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 220px 1fr;
  gap: 16px;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}`,
    preview: "areas",
  },
};

const fullHtmlCssCode = `<!-- HTML -->
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

/* CSS */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  padding: 20px;
}

.grid-item {
  height: 120px;
  border-radius: 22px;
  background: linear-gradient(135deg, #1e293b, #020617);
  border: 1px solid rgba(34, 211, 238, 0.25);
  color: white;
  font-size: 32px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}`;

const gridColumnCode = `<!-- HTML -->
<div class="grid-container">
  <div class="grid-item wide">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>

/* CSS */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.grid-item {
  height: 120px;
  border-radius: 22px;
  background: #0f172a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wide {
  grid-column: 1 / 3;
}`;

const checklist = [
  "Grid jadvalga o‘xshatilgan holda tushuntirildi",
  "display: grid natijasi ko‘rsatildi",
  "Container va item farqi aytildi",
  "Columns va rows natijasi ko‘rsatildi",
  "repeat(3, 1fr) tushuntirildi",
  "gap natijasi ko‘rsatildi",
  "3x3 layout qilindi",
  "2x2 layout qilindi",
  "grid-column bilan item cho‘zildi",
  "Grid areas preview ko‘rsatildi",
  "To‘liq HTML/CSS kod yozildi",
  "Har bir kodning natijasi ko‘rsatildi",
];

const quiz = [
  {
    question: "CSS Grid nima uchun kerak?",
    options: [
      "Elementlarni qator va ustunlarga joylashtirish uchun",
      "Faqat rang berish uchun",
      "Faqat rasm qo‘yish uchun",
    ],
    correct: 0,
  },
  {
    question: "Grid container qilish uchun nima yoziladi?",
    options: ["display: grid", "display: button", "grid: yes"],
    correct: 0,
  },
  {
    question: "gap nima qiladi?",
    options: [
      "Itemlar orasiga masofa beradi",
      "Elementni o‘chiradi",
      "Matnni qalin qiladi",
    ],
    correct: 0,
  },
  {
    question: "grid-column nima qiladi?",
    options: [
      "Itemni ustunlar bo‘ylab cho‘zadi",
      "Rangni o‘chiradi",
      "Fontni o‘zgartiradi",
    ],
    correct: 0,
  },
];

export default function CssM4L6() {
  const [activeConcept, setActiveConcept] = useState("intro");
  const [layoutType, setLayoutType] = useState("3x3");
  const [gapSize, setGapSize] = useState(18);
  const [wideCard, setWideCard] = useState(false);
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});

  const current = concepts[activeConcept];
  const columns = layoutType === "3x3" ? 3 : 2;
  const cells = layoutType === "3x3" ? 9 : 4;

  const doneCount = useMemo(
    () => checklist.filter((_, index) => checked[index]).length,
    [checked],
  );

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const liveCode = `.grid-container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: ${gapSize}px;
}

.grid-item {
  height: 120px;
  border-radius: 22px;
  background: #0f172a;
  color: white;
}

${
  wideCard
    ? `.grid-item:first-child {
  grid-column: 1 / 3;
}`
    : ""
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
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 6-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Grid — kod va natijani birga ko‘rib o‘rganamiz
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Gridni oson tushunish uchun har bir kodning yonida natijasi
              ko‘rsatiladi. O‘quvchi kodni ko‘radi, keyin shu kod sahifada
              qanday ko‘rinishini darrov tushunib oladi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaChild} title="12–15 yosh" text="oson tilda" />
              <HeroBadge icon={FaEye} title="Preview" text="kod natijasi" />
              <HeroBadge icon={FaCode} title="To‘liq kod" text="copy ready" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Simple idea"
        title="Gridni qanday tasavvur qilamiz?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaTable}
            title="Jadval kabi"
            text="Gridni Excel jadvalga o‘xshating: ustunlar bor, qatorlar bor, kataklar bor."
          />
          <InfoCard
            icon={FaThLarge}
            title="Container va item"
            text="Grid container — ota quti. Grid item — uning ichidagi cardlar."
          />
          <InfoCard
            icon={FaMagic}
            title="Nega kerak?"
            text="Cardlar, galereya, dashboard, portfolio va admin panel layoutlarini tartibli qilish uchun."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCrown}
        label="Code + Result"
        title="Har bir kod natijasi bilan tushuntirish"
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
        title="Grid Builder — kod o‘zgaradi, natija ham o‘zgaradi"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-2 text-2xl font-black text-white">
              Grid sozlamalari
            </h4>
            <p className="mb-5 leading-7 text-slate-400">
              Quyidagi tugmalarni bosing. O‘ng tomonda natija ham, pastida kod
              ham o‘zgaradi.
            </p>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                {["3x3", "2x2"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setLayoutType(type)}
                    className={`cursor-pointer rounded-2xl border p-4 font-black transition ${
                      layoutType === type
                        ? "border-cyan-300 bg-cyan-400/20 text-cyan-300"
                        : "border-white/10 bg-white/5 text-slate-300"
                    }`}
                  >
                    {type} Layout
                  </button>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-black text-white">Gap</span>
                  <span className="rounded-xl bg-cyan-400/20 px-3 py-1 font-black text-cyan-300">
                    {gapSize}px
                  </span>
                </div>

                <input
                  type="range"
                  min="4"
                  max="40"
                  value={gapSize}
                  onChange={(e) => setGapSize(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <button
                onClick={() => setWideCard(!wideCard)}
                className={`flex cursor-pointer items-center justify-between rounded-3xl border p-5 font-black transition ${
                  wideCard
                    ? "border-violet-400 bg-violet-400/20 text-violet-300"
                    : "border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                1-cardni kengaytirish
                {wideCard ? <FaCheckCircle /> : <FaArrowRight />}
              </button>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Natija preview
            </h4>

            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap: `${gapSize}px`,
              }}
            >
              {Array.from({ length: cells }).map((_, index) => {
                const isWide = wideCard && index === 0 && columns === 3;

                return (
                  <motion.div
                    key={index}
                    layout
                    whileHover={{ y: -5, scale: 1.02 }}
                    style={{
                      gridColumn: isWide ? "span 2" : "auto",
                    }}
                    className="grid min-h-28 place-items-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-800 to-slate-950 p-5 text-3xl font-black text-white shadow-xl"
                  >
                    {index + 1}
                  </motion.div>
                );
              })}
            </div>

            <CodePanel className="mt-6" code={liveCode} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Full practice"
        title="To‘liq yozilgan kodlar va natijalari"
        color="text-cyan-300"
      >
        <div className="space-y-6">
          <PracticeWithPreview
            title="1. Oddiy 3x3 Grid layout"
            code={fullHtmlCssCode}
            preview="columns"
          />

          <PracticeWithPreview
            title="2. grid-column bilan cardni kengaytirish"
            code={gridColumnCode}
            preview="wide"
          />

          <PracticeWithPreview
            title="3. Grid areas bilan sahifa layouti"
            code={`<!-- HTML -->
<div class="page">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main</main>
  <footer class="footer">Footer</footer>
</div>

/* CSS */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 220px 1fr;
  gap: 16px;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}`}
            preview="areas"
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
          title="CSS Grid quiz"
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

      {type === "intro" && <PreviewGrid columns={3} count={9} gap={10} />}
      {type === "container" && <PreviewGrid columns={1} count={3} gap={12} />}
      {type === "columns" && <PreviewGrid columns={3} count={9} gap={12} />}
      {type === "gap" && <PreviewGrid columns={3} count={6} gap={24} />}
      {type === "wide" && <PreviewWide />}
      {type === "areas" && <PreviewAreas />}
    </div>
  );
}

function PreviewGrid({ columns, count, gap }) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="grid h-20 place-items-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-800 to-slate-950 text-xl font-black text-white"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

function PreviewWide() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4].map((item, index) => (
        <div
          key={item}
          className={`grid h-20 place-items-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-slate-800 to-slate-950 text-xl font-black text-white ${
            index === 0
              ? "col-span-2 bg-gradient-to-br from-violet-500 to-cyan-500"
              : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function PreviewAreas() {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4">
      <div className="col-span-2 rounded-2xl bg-cyan-500 p-4 text-center font-black text-slate-950">
        Header
      </div>
      <div className="rounded-2xl bg-violet-500 p-4 text-center font-black text-white">
        Sidebar
      </div>
      <div className="rounded-2xl bg-slate-800 p-4 text-center font-black text-white">
        Main
      </div>
      <div className="col-span-2 rounded-2xl bg-emerald-500 p-4 text-center font-black text-slate-950">
        Footer
      </div>
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
          <p className="text-sm font-black text-cyan-600">Grid Studio</p>
          <h3 className="text-2xl font-black md:text-3xl">Code + Result</h3>
        </div>
        <FaThLarge className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <PreviewGrid columns={3} count={9} gap={10} />
        <p className="mt-5 text-center text-sm font-bold text-slate-300">
          Grid = qator + ustun + gap
        </p>
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
