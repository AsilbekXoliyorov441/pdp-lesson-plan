import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaMagic,
  FaRocket,
  FaMousePointer,
  FaCopy,
  FaCheck,
  FaSpinner,
  FaLayerGroup,
  FaBolt,
  FaEye,
  FaStar,
} from "react-icons/fa";
import { MdQuiz, MdAnimation } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  transition: {
    title: "Transition",
    icon: FaMousePointer,
    color: "from-blue-500 to-cyan-500",
    desc: "transition oddiy holatdan hover/focus kabi boshqa holatga yumshoq o‘tish uchun ishlatiladi.",
    code: `.btn {
  background: #2563eb;
  transform: translateY(0);
  transition: 0.3s ease;
}

.btn:hover {
  background: #7c3aed;
  transform: translateY(-6px);
}`,
  },
  keyframes: {
    title: "@keyframes",
    icon: MdAnimation,
    color: "from-violet-500 to-fuchsia-500",
    desc: "@keyframes murakkab, takrorlanadigan va bosqichma-bosqich animatsiyalar yaratish uchun kerak.",
    code: `@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-18px);
  }
}

.ball {
  animation: bounce 1s infinite ease-in-out;
}`,
  },
  loader: {
    title: "Loader",
    icon: FaSpinner,
    color: "from-emerald-500 to-teal-500",
    desc: "Loader foydalanuvchiga sahifa yoki ma’lumot yuklanayotganini bildiradi.",
    code: `.loader {
  width: 54px;
  height: 54px;
  border: 5px solid #334155;
  border-top-color: #38bdf8;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  skeleton: {
    title: "Skeleton screen",
    icon: FaLayerGroup,
    color: "from-orange-500 to-red-500",
    desc: "Skeleton screen real kontent kelguncha sahifaning yuklanayotgan strukturasi sifatida ko‘rsatiladi.",
    code: `.skeleton {
  height: 18px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    #1e293b,
    #475569,
    #1e293b
  );
  background-size: 200% 100%;
  animation: skeleton 1.2s infinite;
}

@keyframes skeleton {
  to {
    background-position: -200% 0;
  }
}`,
  },
};

const checklist = [
  "transition va @keyframes farqi tushuntirildi",
  "Hover button effect qilindi",
  "Loader animation qilindi",
  "Skeleton screen yaratildi",
  "Infinite animation tushuntirildi",
  "Marquee animation ko‘rsatildi",
  "Bouncing effect qilindi",
  "Pulse animation qilindi",
  "Scroll reveal tushuntirildi",
  "Animation performance haqida aytildi",
  "transform va opacity tavsiya qilindi",
  "Amaliy loader + scroll reveal bajarildi",
];

const quiz = [
  {
    question: "transition asosan qachon ishlatiladi?",
    options: [
      "Hover/focus o‘tishlarda",
      "HTML fayl ochishda",
      "Rasm yuklashda",
    ],
    correct: 0,
  },
  {
    question: "@keyframes nima uchun kerak?",
    options: [
      "Murakkab animatsiya bosqichlarini yozish uchun",
      "Font ulash uchun",
      "Input yaratish uchun",
    ],
    correct: 0,
  },
  {
    question: "Loader nima bildiradi?",
    options: ["Yuklanish jarayonini", "Xato kodni", "Sahifa tugaganini"],
    correct: 0,
  },
  {
    question: "Skeleton screen qachon ko‘rsatiladi?",
    options: [
      "Kontent hali yuklanayotganda",
      "Modal yopilganda",
      "Button bosilganda doim",
    ],
    correct: 0,
  },
  {
    question: "Performance uchun qaysi propertylar yaxshiroq?",
    options: [
      "transform va opacity",
      "width va height doim",
      "top va left doim",
    ],
    correct: 0,
  },
];

export default function CssM4L3() {
  const [activeConcept, setActiveConcept] = useState("transition");
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});
  const [copiedMain, setCopiedMain] = useState(false);

  const current = concepts[activeConcept];

  const doneCount = useMemo(
    () => checklist.filter((_, index) => checked[index]).length,
    [checked],
  );

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const mainPracticeCode = `/* Loader + Scroll Reveal */

.loader {
  width: 56px;
  height: 56px;
  border: 5px solid #1e293b;
  border-top-color: #38bdf8;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.7s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}`;

  const copyMain = async () => {
    await navigator.clipboard.writeText(mainPracticeCode);
    setCopiedMain(true);
    setTimeout(() => setCopiedMain(false), 1200);
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
        className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-gradient-to-br from-[#061833] via-[#0f172a] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 3-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Animations — To‘liq amaliyot
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bu darsda o‘quvchilar transition, @keyframes, loader, skeleton,
              infinite animation, marquee, pulse va scroll reveal effektlarini
              real premium UI orqali amaliy o‘rganadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaSpinner} title="Loader" text="loading state" />
              <HeroBadge icon={FaBolt} title="Effects" text="hover & pulse" />
              <HeroBadge icon={FaEye} title="Reveal" text="scroll animation" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaMagic}
        label="Animation Lab"
        title="Asosiy animation turlari"
        color="text-cyan-300"
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
        icon={FaPlay}
        label="Live Demo"
        title="Loader, skeleton, marquee va pulse"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-4">
          <DemoCard title="Spinner Loader">
            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
          </DemoCard>

          <DemoCard title="Pulse Card">
            <div className="mx-auto grid h-20 w-20 animate-pulse place-items-center rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600">
              <FaRocket className="text-3xl text-white" />
            </div>
          </DemoCard>

          <DemoCard title="Bouncing Ball">
            <div className="flex h-20 items-end justify-center gap-2">
              <div className="h-5 w-5 animate-bounce rounded-full bg-cyan-400" />
              <div className="h-5 w-5 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />
              <div className="h-5 w-5 animate-bounce rounded-full bg-pink-400 [animation-delay:300ms]" />
            </div>
          </DemoCard>

          <DemoCard title="Skeleton">
            <div className="space-y-3">
              <div className="h-5 animate-pulse rounded-full bg-slate-700" />
              <div className="h-5 w-4/5 animate-pulse rounded-full bg-slate-700" />
              <div className="h-5 w-2/3 animate-pulse rounded-full bg-slate-700" />
            </div>
          </DemoCard>
        </div>

        <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4"
          >
            {[
              "transition",
              "@keyframes",
              "loader",
              "skeleton",
              "marquee",
              "pulse",
              "scroll reveal",
              "performance",
              "transform",
              "opacity",
            ]
              .concat([
                "transition",
                "@keyframes",
                "loader",
                "skeleton",
                "marquee",
                "pulse",
                "scroll reveal",
                "performance",
                "transform",
                "opacity",
              ])
              .map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black uppercase tracking-widest text-cyan-300"
                >
                  {item}
                </span>
              ))}
          </motion.div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Main Practice"
        title="Amaliy: loader + scroll reveal animation"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "Loader uchun circular element yaratiladi",
              "border-top-color bilan aylanish effekti qilinadi",
              "@keyframes spin yoziladi",
              "Scroll reveal uchun .reveal class yaratiladi",
              "opacity: 0 va transform: translateY ishlatiladi",
              ".show class orqali element ko‘rinadi",
              "JavaScript bilan scroll paytida class qo‘shiladi",
              "Performance uchun transform va opacity ishlatiladi",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-emerald-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={copyMain}
              className="absolute right-4 top-4 z-10 flex cursor-pointer items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:scale-105"
            >
              {copiedMain ? <FaCheck /> : <FaCopy />}
              {copiedMain ? "Copied" : "Copy"}
            </button>

            <CodePanel code={mainPracticeCode} />
          </div>
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
              "Avval transition va keyframes farqini real misolda ko‘rsating",
              "Loaderni border orqali chizdiring",
              "Skeleton real app loading holati ekanini tushuntiring",
              "Scroll revealda opacity va transform ishlatishni tavsiya qiling",
              "Ko‘p animation UI’ni charchatishi mumkinligini ayting",
            ]}
          />

          <PracticeCard
            title="Xatolar"
            items={[
              "Hamma joyga infinite animation qo‘yish",
              "width/height/top/left bilan ko‘p animatsiya qilish",
              "transition durationni juda uzun qilish",
              "Loaderni juda tez yoki juda sekin qilish",
              "Scroll revealda performance haqida gapirmaslik",
            ]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="CSS animation quiz"
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
          <p className="text-sm font-black text-cyan-600">Live Motion</p>
          <h3 className="text-2xl font-black md:text-3xl">Animation Studio</h3>
        </div>
        <FaPlay className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 p-6 shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-5 grid h-16 w-16 place-items-center rounded-full border-4 border-white/20 border-t-white"
          />
          <h4 className="text-3xl font-black">Loader + Reveal</h4>
          <p className="mt-2 text-white/75">
            Premium animations for real websites.
          </p>
        </motion.div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {["Loader", "Pulse", "Reveal"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-sm font-black"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DemoCard({ title, children }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.02 }}
      className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5"
    >
      <h4 className="mb-5 text-center font-black text-white">{title}</h4>
      <div className="grid min-h-28 place-items-center">{children}</div>
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
      className={`relative rounded-[32px] border border-white/10 bg-slate-950/80 p-5 ${className}`}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-4 top-4 flex cursor-pointer items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-black text-slate-950 transition hover:scale-105"
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? "Copied" : "Copy"}
      </button>

      <p className="mb-3 text-sm font-black text-slate-400">Code:</p>
      <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 pt-12 font-mono text-sm leading-7 text-cyan-300">
        {code}
      </pre>
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
