import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMobileAlt,
  FaDesktop,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaCrown,
  FaLightbulb,
  FaEye,
  FaArrowRight,
  FaLayerGroup,
} from "react-icons/fa";
import { MdQuiz, MdDevices } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  mobile: {
    title: "Mobile First",
    icon: FaMobileAlt,
    color: "from-cyan-600 via-blue-600 to-indigo-700",
    simple:
      "Avval mobile uchun CSS yoziladi, keyin katta ekranlar uchun media query qo‘shiladi.",
    result:
      "Natija: telefon versiya birinchi tayyor bo‘ladi. Keyin tablet va desktop kengaytiriladi.",
    code: `.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    preview: "mobile",
  },
  desktop: {
    title: "Desktop First",
    icon: FaDesktop,
    color: "from-violet-600 via-fuchsia-600 to-pink-700",
    simple:
      "Avval desktop uchun CSS yoziladi, keyin kichik ekranlar uchun media query yoziladi.",
    result:
      "Natija: katta ekran birinchi tayyor bo‘ladi. Keyin tablet va mobile uchun qisqartiriladi.",
    code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Tablet */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 640px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`,
    preview: "desktop",
  },
  choose: {
    title: "Qaysi biri qulay?",
    icon: FaLightbulb,
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    simple:
      "Ko‘p zamonaviy saytlar uchun mobile-first qulayroq, chunki foydalanuvchilar ko‘pincha telefon orqali kiradi.",
    result:
      "Natija: avval oddiy va tez mobile layout, keyin katta ekranlar uchun boyitilgan layout qilinadi.",
    code: `/* Modern recommendation */
Mobile First:
- landing page
- portfolio
- e-commerce
- blog
- dashboard mobile version

Desktop First:
- admin panel
- CRM system
- katta dashboard
- desktop-heavy tools`,
    preview: "choose",
  },
};

const mobileFirstCode = `<!-- HTML -->
<section class="projects">
  <article class="card">
    <h3>Landing Page</h3>
    <p>Responsive website project</p>
  </article>

  <article class="card">
    <h3>Portfolio</h3>
    <p>Personal portfolio project</p>
  </article>

  <article class="card">
    <h3>Dashboard</h3>
    <p>Admin panel UI project</p>
  </article>
</section>

/* CSS — Mobile First */
.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.card {
  padding: 24px;
  border-radius: 24px;
  background: #0f172a;
  color: white;
}

/* 768px dan katta ekranlarda */
@media (min-width: 768px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 1024px dan katta ekranlarda */
@media (min-width: 1024px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
  }
}`;

const desktopFirstCode = `<!-- HTML -->
<section class="projects">
  <article class="card">
    <h3>Landing Page</h3>
    <p>Responsive website project</p>
  </article>

  <article class="card">
    <h3>Portfolio</h3>
    <p>Personal portfolio project</p>
  </article>

  <article class="card">
    <h3>Dashboard</h3>
    <p>Admin panel UI project</p>
  </article>
</section>

/* CSS — Desktop First */
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  padding: 24px;
  border-radius: 24px;
  background: #0f172a;
  color: white;
}

/* 1024px dan kichik ekranlarda */
@media (max-width: 1024px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 640px dan kichik ekranlarda */
@media (max-width: 640px) {
  .projects {
    grid-template-columns: 1fr;
  }
}`;

const checklist = [
  "Mobile first nima ekanligi tushuntirildi",
  "Desktop first nima ekanligi tushuntirildi",
  "min-width media query tushuntirildi",
  "max-width media query tushuntirildi",
  "Mobile first kod yozildi",
  "Desktop first kod yozildi",
  "Bitta loyiha ikki xil yondashuvda qilindi",
  "Mobile, tablet, desktop preview ko‘rsatildi",
  "Qaysi holatda qaysi yondashuv qulayligi aytildi",
];

const quiz = [
  {
    question: "Mobile first nimadan boshlaydi?",
    options: ["Kichik ekrandan", "Katta ekrandan", "Faqat ranglardan"],
    correct: 0,
  },
  {
    question: "Mobile first odatda qaysi media query bilan kengayadi?",
    options: ["min-width", "max-width", "font-width"],
    correct: 0,
  },
  {
    question: "Desktop first nimadan boshlaydi?",
    options: ["Katta ekrandan", "Faqat telefondan", "Faqat rasmdan"],
    correct: 0,
  },
  {
    question: "Desktop first odatda qaysi media query bilan kichrayadi?",
    options: ["max-width", "min-width", "color-width"],
    correct: 0,
  },
];

export default function CssM4L9() {
  const [activeConcept, setActiveConcept] = useState("mobile");
  const [approach, setApproach] = useState("mobile");
  const [device, setDevice] = useState("mobile");
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

  const liveCode = approach === "mobile" ? mobileFirstCode : desktopFirstCode;

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
              CSS 3-OY • 4-MODUL • 9-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Mobile First va Desktop First yondashuv
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bu darsda bitta project card layout ikki xil yondashuvda qilinadi:
              avval mobile first, keyin desktop first. O‘quvchi koddagi farqni
              ham, natijadagi farqni ham ko‘rib tushunadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaMobileAlt}
                title="Mobile First"
                text="min-width"
              />
              <HeroBadge
                icon={FaDesktop}
                title="Desktop First"
                text="max-width"
              />
              <HeroBadge icon={FaEye} title="Preview" text="3 device" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Senior explanation"
        title="Eng oson farq"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard
            icon={FaMobileAlt}
            title="Mobile First"
            text="Avval telefon uchun oddiy layout yoziladi. Keyin ekran kattalashganda tablet va desktop uchun qo‘shimcha CSS yoziladi."
          />
          <InfoCard
            icon={FaDesktop}
            title="Desktop First"
            text="Avval katta ekran uchun to‘liq layout yoziladi. Keyin ekran kichrayganda tablet va mobile uchun layout soddalashtiriladi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCrown}
        label="Code + Result"
        title="Mobile first va desktop first tushunchalari"
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
        icon={MdDevices}
        label="Interactive practice"
        title="Bitta layout — ikki xil yondashuv"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-4 text-2xl font-black text-white">
              Yondashuvni tanlang
            </h4>

            <div className="mb-5 grid gap-3">
              {[
                { key: "mobile", label: "Mobile First", icon: FaMobileAlt },
                { key: "desktop", label: "Desktop First", icon: FaDesktop },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setApproach(item.key)}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 font-black transition ${
                    approach === item.key
                      ? "border-cyan-300 bg-cyan-400/20 text-cyan-300"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <item.icon />
                    {item.label}
                  </span>
                  <FaArrowRight />
                </button>
              ))}
            </div>

            <h4 className="mb-4 text-2xl font-black text-white">
              Device preview
            </h4>

            <div className="grid gap-3">
              {[
                { key: "mobile", label: "Mobile", icon: FaMobileAlt },
                { key: "tablet", label: "Tablet", icon: FaLayerGroup },
                { key: "desktop", label: "Desktop", icon: FaDesktop },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setDevice(item.key)}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 font-black transition ${
                    device === item.key
                      ? "border-emerald-300 bg-emerald-400/20 text-emerald-300"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <item.icon />
                    {item.label}
                  </span>
                  <FaEye />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Natija preview
            </h4>

            <DevicePreview device={device} />

            <CodePanel className="mt-6" code={liveCode} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Full practice"
        title="Amaliy: bir loyihani ikki xil yondashuvda responsive qilish"
        color="text-cyan-300"
      >
        <div className="space-y-6">
          <PracticeWithPreview
            title="1. Mobile First usuli"
            code={mobileFirstCode}
            type="mobile"
          />

          <PracticeWithPreview
            title="2. Desktop First usuli"
            code={desktopFirstCode}
            type="desktop"
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
          title="Mobile First / Desktop First quiz"
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

      {type === "mobile" && (
        <div className="grid gap-4">
          <DevicePreview device="mobile" />
          <p className="text-sm text-slate-400">
            Mobile first: avval 1 column. Katta ekranda column ko‘payadi.
          </p>
        </div>
      )}

      {type === "desktop" && (
        <div className="grid gap-4">
          <DevicePreview device="desktop" />
          <p className="text-sm text-slate-400">
            Desktop first: avval 3 column. Kichik ekranda column kamayadi.
          </p>
        </div>
      )}

      {type === "choose" && (
        <div className="grid gap-3">
          <div className="rounded-2xl bg-cyan-500/20 p-4 font-black text-cyan-200">
            Modern website → Mobile First
          </div>
          <div className="rounded-2xl bg-violet-500/20 p-4 font-black text-violet-200">
            Katta admin panel → Desktop First ham qulay
          </div>
        </div>
      )}
    </div>
  );
}

function DevicePreview({ device }) {
  const columns =
    device === "mobile"
      ? "grid-cols-1"
      : device === "tablet"
        ? "grid-cols-2"
        : "grid-cols-3";

  const width =
    device === "mobile"
      ? "max-w-[330px]"
      : device === "tablet"
        ? "max-w-[560px]"
        : "max-w-full";

  return (
    <div
      className={`mx-auto rounded-[28px] border border-white/10 bg-slate-900 p-4 ${width}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="font-black text-white capitalize">{device} preview</p>
        {device === "mobile" ? (
          <FaMobileAlt className="text-cyan-300" />
        ) : device === "desktop" ? (
          <FaDesktop className="text-cyan-300" />
        ) : (
          <FaLayerGroup className="text-cyan-300" />
        )}
      </div>

      <div className={`grid gap-3 ${columns}`}>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-800 to-slate-950 p-4"
          >
            <div className="mb-3 h-20 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600" />
            <h4 className="font-black text-white">Project {item}</h4>
            <p className="mt-1 text-sm text-slate-400">Responsive card</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeWithPreview({ title, code, type }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-slate-950/50 p-5">
      <h4 className="mb-5 text-xl font-black text-white">{title}</h4>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <CodePanel code={code} />
        <ResultPreview type={type} />
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Responsive Method</p>
          <h3 className="text-2xl font-black md:text-3xl">Mobile → Desktop</h3>
        </div>
        <FaMobileAlt className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <DevicePreview device="mobile" />
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
