import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheck,
  FaCheckCircle,
  FaCode,
  FaCrown,
  FaGem,
  FaMagic,
  FaMousePointer,
  FaPenNib,
  FaRegStar,
  FaShapes,
  FaTimesCircle,
} from "react-icons/fa";
import { MdAutoFixHigh, MdQuiz } from "react-icons/md";
import { HiMiniCursorArrowRays, HiSparkles } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const pseudoConcepts = {
  before: {
    title: "::before",
    color: "from-emerald-400 to-cyan-500",
    desc: "Element ichida asosiy contentdan oldin virtual dekorativ element yaratadi.",
    code: `.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, cyan, violet);
}`,
  },
  after: {
    title: "::after",
    color: "from-fuchsia-500 to-pink-500",
    desc: "Element ichida asosiy contentdan keyin virtual element qo‘shadi. Underline, badge va glow uchun juda qulay.",
    code: `.title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 60%;
  height: 4px;
  background: linear-gradient(90deg, #06b6d4, #d946ef);
}`,
  },
  content: {
    title: "content",
    color: "from-amber-400 to-orange-500",
    desc: "Pseudo-element ko‘rinishi uchun content property kerak. Bo‘sh dekoratsiya uchun content: '' yoziladi.",
    code: `.badge::before {
  content: "NEW";
  padding: 6px 10px;
  border-radius: 999px;
  background: #22c55e;
}`,
  },
};

const quiz = [
  {
    question: "::before va ::after ishlashi uchun eng muhim property qaysi?",
    options: ["content", "font-size", "display: flex"],
    correct: 0,
  },
  {
    question: "Dekorativ underline uchun qaysi pseudo-element qulay?",
    options: ["::after", "::placeholder", "::selection"],
    correct: 0,
  },
  {
    question: "Pseudo-element HTML ichida alohida tag yaratadimi?",
    options: [
      "Yo‘q, CSS orqali virtual element yaratadi",
      "Ha, div qo‘shadi",
      "Faqat Reactda yaratadi",
    ],
    correct: 0,
  },
  {
    question: "Badge yasashda pseudo-element nima uchun qulay?",
    options: [
      "Qo‘shimcha HTML yozmasdan dekor qo‘shish uchun",
      "Backend ulash uchun",
      "Font yuklash uchun",
    ],
    correct: 0,
  },
  {
    question:
      "Shape yasash uchun pseudo-elementda ko‘pincha nima kerak bo‘ladi?",
    options: ["width, height, border-radius", "href", "src"],
    correct: 0,
  },
];

export default function CssM3L6() {
  const [activeConcept, setActiveConcept] = useState("before");
  const [badgeText, setBadgeText] = useState("NEW");
  const [underlineType, setUnderlineType] = useState("gradient");
  const [shapeType, setShapeType] = useState("circle");
  const [buttonGlow, setButtonGlow] = useState(true);
  const [answers, setAnswers] = useState({});

  const concept = pseudoConcepts[activeConcept];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[40px] border border-emerald-400/20 bg-gradient-to-br from-[#021318] via-[#111827] to-[#190724] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-emerald-300">
              <FaCrown />
              CSS • Module 3 • 6-DARS
            </div>

            <h2 className="mb-5 max-w-4xl text-3xl font-black leading-tight text-white md:text-5xl">
              CSS Pseudo-elementlar:{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                ::before va ::after
              </span>
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun qo‘shimcha HTML yozmasdan badge, custom underline, shape,
              icon, glow va dekorativ button yasashni o‘rganamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaMagic} title="Before" text="oldidan dekor" />
              <HeroBadge icon={FaPenNib} title="After" text="underline" />
              <HeroBadge icon={FaShapes} title="Shape" text="CSS icon" />
            </div>
          </div>

          <PseudoHero />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdAutoFixHigh}
        label="Pseudo basics"
        title="::before va ::after nima?"
        color="text-emerald-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(pseudoConcepts).map(([key, item]) => (
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
              initial={{ opacity: 0, x: -20, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.97 }}
              className={`rounded-[34px] bg-gradient-to-br ${concept.color} p-7`}
            >
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                {concept.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {concept.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={concept.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheck}
        label="Badge creator"
        title="::before orqali badge yasash"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
              <h4 className="mb-4 text-xl font-black text-white">Badge text</h4>
              <div className="flex flex-wrap gap-3">
                {["NEW", "HOT", "PRO", "SALE"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setBadgeText(item)}
                    className={`rounded-2xl px-5 py-3 font-black transition ${
                      badgeText === item
                        ? "bg-white text-slate-950"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <CodePanel
              code={`.card {
  position: relative;
}

.card::before {
  content: "${badgeText}";
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 7px 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #22c55e, #06b6d4);
  color: white;
  font-weight: 900;
}`}
            />
          </div>

          <div className="rounded-[34px] bg-white p-5 text-slate-950">
            <div className="relative overflow-hidden rounded-[30px] bg-slate-950 p-7 text-white">
              <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-xs font-black">
                {badgeText}
              </div>

              <FaGem className="mb-5 text-5xl text-cyan-300" />
              <h4 className="text-3xl font-black">Premium Card</h4>
              <p className="mt-3 leading-7 text-slate-300">
                Bu badge real HTML tag emas, CSS ::before orqali qo‘shilishi
                mumkin.
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaPenNib}
        label="Custom underline"
        title="::after orqali chiroyli underline"
        color="text-fuchsia-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ButtonGroup
            title="Underline style"
            value={underlineType}
            setValue={setUnderlineType}
            options={[
              ["gradient", "Gradient"],
              ["short", "Short"],
              ["double", "Double"],
            ]}
          />

          <div className="grid min-h-[280px] place-items-center rounded-[34px] bg-white p-5 text-slate-950">
            <div className="text-center">
              <h3 className="relative inline-block text-4xl font-black md:text-5xl">
                Custom Underline
                <span
                  className={`absolute left-0 rounded-full ${
                    underlineType === "gradient"
                      ? "-bottom-4 h-2 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400"
                      : underlineType === "short"
                        ? "-bottom-4 h-2 w-1/2 bg-fuchsia-500"
                        : "-bottom-5 h-2 w-full bg-cyan-400 before:absolute before:-top-3 before:left-1/4 before:h-2 before:w-1/2 before:rounded-full before:bg-fuchsia-500"
                  }`}
                />
              </h3>
            </div>
          </div>
        </div>

        <CodePanel
          className="mt-6"
          code={`.title {
  position: relative;
  display: inline-block;
}

.title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -16px;
  width: ${underlineType === "short" ? "50%" : "100%"};
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, cyan, fuchsia, amber);
}`}
        />
      </PremiumSection>

      <PremiumSection
        icon={FaShapes}
        label="Shape lab"
        title="Pseudo-element bilan shape va icon yaratish"
        color="text-amber-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Shape tanlang"
              value={shapeType}
              setValue={setShapeType}
              options={[
                ["circle", "Circle"],
                ["diamond", "Diamond"],
                ["line", "Line"],
              ]}
            />

            <CodePanel
              code={`.icon::before {
  content: "";
  position: absolute;
  width: 54px;
  height: 54px;
  ${
    shapeType === "circle"
      ? "border-radius: 50%;"
      : shapeType === "diamond"
        ? "transform: rotate(45deg);"
        : "height: 8px; width: 90px;"
  }
  background: linear-gradient(135deg, #f59e0b, #ec4899);
}`}
            />
          </div>

          <div className="grid min-h-[330px] place-items-center rounded-[34px] bg-white p-5 text-slate-950">
            <div className="relative grid h-44 w-44 place-items-center rounded-[40px] bg-slate-950">
              <div
                className={`absolute bg-gradient-to-br from-amber-400 to-pink-500 ${
                  shapeType === "circle"
                    ? "h-20 w-20 rounded-full"
                    : shapeType === "diamond"
                      ? "h-20 w-20 rotate-45 rounded-2xl"
                      : "h-3 w-28 rounded-full"
                }`}
              />
              <FaRegStar className="relative z-10 text-5xl text-white" />
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMousePointer}
        label="Decorative button"
        title="::before glow va ::after shine bilan button"
        color="text-blue-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <button
              onClick={() => setButtonGlow(!buttonGlow)}
              className="w-full rounded-3xl bg-gradient-to-r from-blue-500 to-fuchsia-600 px-6 py-5 text-lg font-black text-white shadow-xl transition hover:scale-[1.02]"
            >
              {buttonGlow ? "Glow o‘chirish" : "Glow yoqish"}
            </button>

            <CodePanel
              code={`.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, cyan, fuchsia, amber);
  filter: blur(18px);
  opacity: ${buttonGlow ? "0.8" : "0"};
}

.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 50%;
  height: 100%;
  background: rgba(255,255,255,.35);
  transform: skewX(-20deg);
}`}
            />
          </div>

          <div className="grid min-h-[330px] place-items-center rounded-[34px] bg-slate-950 p-5">
            <button className="group relative overflow-hidden rounded-full px-10 py-5 text-xl font-black text-white">
              <span
                className={`absolute inset-[-4px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl transition ${
                  buttonGlow ? "opacity-80" : "opacity-0"
                }`}
              />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" />
              <span className="absolute left-[-80%] top-0 h-full w-1/2 -skew-x-12 bg-white/35 transition duration-700 group-hover:left-[130%]" />
              <span className="relative z-10 flex items-center gap-2">
                <HiSparkles /> Premium Button
              </span>
            </button>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Amaliy mashg‘ulot"
        title="Badge, underline va dekorativ button yasash"
        color="text-emerald-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Cardga position: relative bering",
            "::before orqali NEW badge qo‘shing",
            "Title uchun ::after bilan gradient underline qiling",
            "Button ichida ::before glow yarating",
            "::after bilan shine hover effect qo‘shing",
            "Shape uchun width, height, border-radius ishlating",
            "Pseudo-elementga content: '' berishni unutmang",
            "Elementlar ustma-ust chiqsa z-index bilan tartiblang",
          ].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ x: 6 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-slate-300"
            >
              <span className="mr-3 font-black text-emerald-300">
                {index + 1}.
              </span>
              {item}
            </motion.div>
          ))}
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 via-cyan-500/10 to-fuchsia-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Pseudo-elements quiz"
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

function PseudoHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[34px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-emerald-600">Creator Lab</p>
          <h3 className="text-2xl font-black md:text-3xl">Pseudo Elements</h3>
        </div>
        <FaCode className="text-5xl text-emerald-500" />
      </div>

      <div className="relative overflow-hidden rounded-[30px] bg-slate-950 p-5">
        <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="absolute -bottom-12 right-0 h-48 w-48 rounded-full bg-fuchsia-500/30 blur-3xl" />

        <div className="relative rounded-[28px] border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl">
          <div className="mb-5 inline-flex rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-xs font-black">
            ::before
          </div>

          <h4 className="text-4xl font-black">Decorative UI</h4>

          <div className="mt-5 h-2 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />

          <p className="mt-5 leading-7 text-white/75">
            Badge, underline, glow va shape effektlarini CSS orqali yaratamiz.
          </p>
        </div>
      </div>
    </motion.div>
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
      <p className="mb-3 flex items-center gap-2 text-sm font-black text-slate-400">
        <FaCode /> Code:
      </p>
      <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 font-mono text-sm leading-7 text-cyan-300">
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
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 md:p-5"
    >
      <Icon className="mb-3 text-2xl text-emerald-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
