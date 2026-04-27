import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAdjust,
  FaBorderStyle,
  FaBrush,
  FaCheckCircle,
  FaCode,
  FaCrown,
  FaGem,
  FaMagic,
  FaPalette,
  FaPlay,
  FaRegCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdBlurOn, MdGradient, MdQuiz } from "react-icons/md";
import { HiMiniCursorArrowRays, HiSparkles } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const gradientTypes = {
  linear: {
    title: "linear-gradient",
    color: "from-cyan-400 via-blue-500 to-violet-600",
    desc: "Ranglar bir yo‘nalish bo‘yicha oqadi. Button, hero background va cardlarda ko‘p ishlatiladi.",
    bg: "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
    code: `.box {
  background: linear-gradient(
    135deg,
    #22d3ee,
    #3b82f6,
    #8b5cf6
  );
}`,
  },
  radial: {
    title: "radial-gradient",
    color: "from-pink-400 via-fuchsia-500 to-purple-700",
    desc: "Gradient markazdan tashqariga tarqaladi. Glow, spotlight va premium backgroundlar uchun zo‘r.",
    bg: "radial-gradient(circle at center, #f472b6, #d946ef, #581c87)",
    code: `.box {
  background: radial-gradient(
    circle at center,
    #f472b6,
    #d946ef,
    #581c87
  );
}`,
  },
  conic: {
    title: "conic-gradient",
    color: "from-amber-400 via-rose-500 to-cyan-400",
    desc: "Ranglar aylana bo‘ylab tarqaladi. Progress ring, badge, border va creative UI uchun ishlatiladi.",
    bg: "conic-gradient(from 180deg, #fbbf24, #f43f5e, #22d3ee, #fbbf24)",
    code: `.box {
  background: conic-gradient(
    from 180deg,
    #fbbf24,
    #f43f5e,
    #22d3ee,
    #fbbf24
  );
}`,
  },
};

const quiz = [
  {
    question: "linear-gradient qanday ishlaydi?",
    options: [
      "Ranglar yo‘nalish bo‘yicha oqadi",
      "Faqat aylana chizadi",
      "Matnni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "radial-gradient ko‘proq nimaga o‘xshaydi?",
    options: ["Markazdan tarqaladigan nurga", "Oddiy borderga", "Flexboxga"],
    correct: 0,
  },
  {
    question: "gradient text qilish uchun qaysi property kerak?",
    options: ["background-clip: text", "display: none", "z-index: -1"],
    correct: 0,
  },
  {
    question: "glassmorphism uchun asosiy effekt nima?",
    options: ["backdrop-filter: blur()", "font-size: 10px", "position: static"],
    correct: 0,
  },
  {
    question: "grayscale filter nima qiladi?",
    options: [
      "Ranglarni oq-qora qiladi",
      "Elementni kattalashtiradi",
      "Border yasaydi",
    ],
    correct: 0,
  },
];

export default function CssM3L4() {
  const [activeGradient, setActiveGradient] = useState("linear");
  const [blur, setBlur] = useState(12);
  const [contrast, setContrast] = useState(110);
  const [grayscale, setGrayscale] = useState(0);
  const [blendMode, setBlendMode] = useState("multiply");
  const [animated, setAnimated] = useState(true);
  const [answers, setAnswers] = useState({});

  const gradient = gradientTypes[activeGradient];

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
        className="relative overflow-hidden rounded-[40px] border border-fuchsia-400/20 bg-[#050816] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-fuchsia-300">
              <FaCrown />
              CSS • Module 3 • 4-DARS
            </div>

            <h2 className="mb-5 max-w-4xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-3xl font-black leading-tight text-transparent md:text-5xl">
              CSS Gradients: ranglar orqali premium UI yaratish
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun linear, radial, conic gradientlar, gradient text, gradient
              border, glassmorphism, filter effektlari va blend mode orqali
              zamonaviy UI yasaymiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={MdGradient} title="Gradient" text="rang oqimi" />
              <HeroBadge icon={FaGem} title="Glass" text="blur + shine" />
              <HeroBadge icon={MdBlurOn} title="Filter" text="visual effekt" />
            </div>
          </div>

          <GradientHero animated={animated} setAnimated={setAnimated} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaPalette}
        label="Gradient types"
        title="linear, radial va conic gradient farqlari"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(gradientTypes).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGradient(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeGradient === key
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
              key={activeGradient}
              initial={{ opacity: 0, x: -20, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.97 }}
              className={`rounded-[34px] bg-gradient-to-br ${gradient.color} p-7`}
            >
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                {gradient.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {gradient.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={gradient.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaBrush}
        label="Live preview"
        title="Gradient turini tanlab natijani ko‘ring"
        color="text-fuchsia-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 text-slate-300">
              <b className="text-fuchsia-300">linear</b> — button va hero uchun.
              <br />
              <br />
              <b className="text-fuchsia-300">radial</b> — glow va spotlight
              uchun.
              <br />
              <br />
              <b className="text-fuchsia-300">conic</b> — ring, border va
              creative UI uchun.
            </div>

            <CodePanel code={gradient.code} />
          </div>

          <div className="rounded-[34px] bg-white p-5 text-slate-950">
            <div
              className="grid min-h-[340px] place-items-center rounded-[30px] p-6 shadow-inner"
              style={{ background: gradient.bg }}
            >
              <motion.div
                layout
                className="rounded-[32px] border border-white/30 bg-white/20 p-8 text-center text-white shadow-2xl backdrop-blur-xl"
              >
                <HiSparkles className="mx-auto mb-4 text-5xl" />
                <h4 className="text-3xl font-black">Gradient Preview</h4>
                <p className="mt-2 text-white/80">{gradient.title}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaBorderStyle}
        label="Text & border"
        title="Gradient text va gradient border"
        color="text-amber-300"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[34px] bg-white p-6 text-slate-950">
            <h3 className="mb-5 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
              Premium Gradient Text
            </h3>

            <p className="leading-7 text-slate-600">
              Gradient text uchun background gradient beriladi, keyin
              background-clip text qilinadi va text transparent bo‘ladi.
            </p>

            <div className="mt-6 rounded-[28px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 p-[2px]">
              <div className="rounded-[26px] bg-white p-6">
                <h4 className="text-2xl font-black">Gradient Border Card</h4>
                <p className="mt-2 text-slate-500">
                  Border gradient uchun tashqi wrapper ishlatiladi.
                </p>
              </div>
            </div>
          </div>

          <CodePanel
            code={`.title {
  background: linear-gradient(
    90deg,
    #06b6d4,
    #d946ef,
    #f59e0b
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.border-card {
  background: linear-gradient(90deg, cyan, fuchsia, amber);
  padding: 2px;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaGem}
        label="Glassmorphism"
        title="Blur, transparent background va soft border"
        color="text-blue-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <CodePanel
            code={`.glass-card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
}`}
          />

          <div className="relative overflow-hidden rounded-[34px] bg-[#050816] p-6">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/20 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-cyan-200">Glass Card</p>
                  <h4 className="text-3xl font-black">Aurora UI</h4>
                </div>
                <FaGem className="text-4xl text-fuchsia-300" />
              </div>

              <p className="leading-7 text-white/75">
                Glassmorphism background ortida rangli glow bo‘lsa yanada
                chiroyli ko‘rinadi.
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdBlurOn}
        label="Filter lab"
        title="blur, contrast, shadow va grayscale effektlari"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`blur: ${blur}px`}
              min={0}
              max={24}
              value={blur}
              onChange={setBlur}
            />
            <RangeControl
              label={`contrast: ${contrast}%`}
              min={60}
              max={180}
              value={contrast}
              onChange={setContrast}
            />
            <RangeControl
              label={`grayscale: ${grayscale}%`}
              min={0}
              max={100}
              value={grayscale}
              onChange={setGrayscale}
            />

            <CodePanel
              code={`.image {
  filter:
    blur(${blur}px)
    contrast(${contrast}%)
    grayscale(${grayscale}%)
    drop-shadow(0 24px 40px rgba(34, 211, 238, 0.35));
}`}
            />
          </div>

          <div className="grid place-items-center rounded-[34px] bg-white p-5 text-slate-950">
            <div className="relative h-[340px] w-full overflow-hidden rounded-[30px] bg-slate-950">
              <div
                className="absolute inset-10 rounded-[50px] bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400"
                style={{
                  filter: `blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) drop-shadow(0 24px 40px rgba(34,211,238,.35))`,
                }}
              />

              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-[28px] bg-white/10 px-8 py-6 text-center text-white backdrop-blur-md">
                  <h4 className="text-3xl font-black">Filter Preview</h4>
                  <p className="mt-2 text-white/70">Live effect lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaAdjust}
        label="Blend modes"
        title="background-blend-mode va mix-blend-mode"
        color="text-rose-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Blend mode tanlang"
              value={blendMode}
              setValue={setBlendMode}
              options={[
                ["multiply", "multiply"],
                ["screen", "screen"],
                ["overlay", "overlay"],
                ["darken", "darken"],
                ["lighten", "lighten"],
              ]}
            />

            <div className="rounded-[28px] border border-rose-400/20 bg-rose-400/10 p-5 text-slate-300">
              <b className="text-rose-300">background-blend-mode</b> background
              qatlamlarini aralashtiradi.
              <br />
              <br />
              <b className="text-rose-300">mix-blend-mode</b> esa elementni
              orqadagi elementlar bilan aralashtiradi.
            </div>

            <CodePanel
              code={`.hero {
  background-image:
    linear-gradient(135deg, #06b6d4, #d946ef),
    url("/image.jpg");
  background-blend-mode: ${blendMode};
}

.title {
  mix-blend-mode: screen;
}`}
            />
          </div>

          <div
            className="grid min-h-[360px] place-items-center rounded-[34px] p-6 text-white"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #06b6d4, #d946ef), radial-gradient(circle at center, #f59e0b, #111827)",
              backgroundBlendMode: blendMode,
            }}
          >
            <h3 className="text-center text-5xl font-black mix-blend-screen md:text-7xl">
              BLEND
            </h3>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaPlay}
        label="Amaliy"
        title="Gradient button va background animatsiyasi"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <button
              onClick={() => setAnimated(!animated)}
              className="w-full cursor-pointer rounded-3xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 px-6 py-5 text-lg font-black text-white shadow-xl transition hover:scale-[1.02]"
            >
              {animated ? "Animatsiyani to‘xtatish" : "Animatsiyani yoqish"}
            </button>

            <CodePanel
              code={`.gradient-button {
  background: linear-gradient(
    90deg,
    #06b6d4,
    #d946ef,
    #f59e0b,
    #06b6d4
  );
  background-size: 300% 300%;
  animation: gradientMove 4s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}
            />
          </div>

          <div className="rounded-[34px] bg-white p-5 text-slate-950">
            <div
              className={`grid min-h-[340px] place-items-center rounded-[30px] bg-[linear-gradient(90deg,#06b6d4,#d946ef,#f59e0b,#06b6d4)] bg-[length:300%_300%] p-6 ${
                animated ? "animate-[gradientMove_4s_ease_infinite]" : ""
              }`}
            >
              <button className="rounded-full border border-white/30 bg-white/20 px-10 py-5 text-xl font-black text-white shadow-2xl backdrop-blur-xl transition hover:scale-105">
                Premium Button
              </button>
            </div>

            <style>{`
              @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Dars amaliyoti"
        title="O‘quvchilar bajaradigan vazifalar"
        color="text-amber-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "linear-gradient bilan hero background yasash",
            "radial-gradient orqali spotlight glow qo‘shish",
            "conic-gradient bilan gradient border card qilish",
            "background-clip: text orqali gradient text yozish",
            "glassmorphism card yaratish",
            "filter bilan blur, contrast, grayscale sinash",
            "background-blend-mode qiymatlarini taqqoslash",
            "gradient buttonga animation qo‘shish",
          ].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ x: 6 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-slate-300"
            >
              <span className="mr-3 font-black text-amber-300">
                {index + 1}.
              </span>
              {item}
            </motion.div>
          ))}
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-amber-400/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="CSS Gradient quiz"
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

function GradientHero({ animated, setAnimated }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[34px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-fuchsia-600">Aurora Studio</p>
          <h3 className="text-2xl font-black md:text-3xl">Gradient Lab</h3>
        </div>
        <FaPalette className="text-5xl text-fuchsia-500" />
      </div>

      <div
        className={`relative min-h-[290px] overflow-hidden rounded-[30px] bg-[linear-gradient(120deg,#22d3ee,#a855f7,#f59e0b,#22d3ee)] bg-[length:300%_300%] p-5 ${
          animated ? "animate-[gradientMove_5s_ease_infinite]" : ""
        }`}
      >
        <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-12 right-0 h-48 w-48 rounded-full bg-black/20 blur-3xl" />

        <div className="relative rounded-[28px] border border-white/30 bg-white/20 p-6 text-white shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-black uppercase tracking-widest text-white/75">
            live background
          </p>
          <h4 className="mt-3 text-4xl font-black">Neon Gradient</h4>
          <p className="mt-3 leading-7 text-white/80">
            Gradient + blur + glass effect professional UI ko‘rinishini beradi.
          </p>

          <button
            onClick={() => setAnimated(!animated)}
            className="mt-6 rounded-full bg-white px-6 py-3 font-black text-fuchsia-600"
          >
            {animated ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}

function RangeControl({ label, min, max, value, onChange }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{label}</h4>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-fuchsia-500"
      />
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
      <Icon className="mb-3 text-2xl text-fuchsia-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
