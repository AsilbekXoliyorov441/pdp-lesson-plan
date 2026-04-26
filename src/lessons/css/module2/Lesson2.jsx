import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCss3Alt,
  FaPalette,
  FaFillDrip,
  FaEyeDropper,
  FaCheckCircle,
  FaTimesCircle,
  FaMagic,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa";
import { MdGradient, MdQuiz, MdColorLens } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const colorFormats = {
  named: {
    title: "Named color",
    label: "red, blue, green",
    color: "from-red-500 to-orange-500",
    css: `h1 {
  color: red;
  background-color: yellow;
}`,
    desc: "Rang nomi bilan yoziladi. Boshlanishda oson, lekin professional projectlarda tavsiya qilinmaydi.",
    best: "Faqat tez test qilish uchun",
    previewText: "red",
    previewBg: "yellow",
  },
  hex: {
    title: "HEX",
    label: "#ff0000",
    color: "from-fuchsia-500 to-purple-500",
    css: `h1 {
  color: #ff0000;
  background-color: #fff7ed;
}`,
    desc: "Eng ko‘p ishlatiladigan formatlardan biri. Dizayn systemlarda ranglar ko‘pincha HEX ko‘rinishida beriladi.",
    best: "Figma, UI design, brand color",
    previewText: "#ff0000",
    previewBg: "#fff7ed",
  },
  rgb: {
    title: "RGB",
    label: "rgb(255, 0, 0)",
    color: "from-blue-500 to-cyan-500",
    css: `h1 {
  color: rgb(255, 0, 0);
  background-color: rgb(239, 246, 255);
}`,
    desc: "Red, Green, Blue qiymatlari orqali rang beriladi. Har biri 0 dan 255 gacha bo‘ladi.",
    best: "Dynamic ranglar, JS bilan ishlash",
    previewText: "rgb(255, 0, 0)",
    previewBg: "rgb(239, 246, 255)",
  },
  rgba: {
    title: "RGBA",
    label: "rgba(0, 0, 0, 0.5)",
    color: "from-slate-700 to-slate-950",
    css: `div {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 0, 0, 0.55);
}`,
    desc: "RGB ga opacity qo‘shilgan variant. Overlay, modal background, glassmorphism uchun juda kerak.",
    best: "Opacity, overlay, shadow effect",
    previewText: "rgba(255,255,255,1)",
    previewBg: "rgba(0,0,0,0.55)",
  },
  hsl: {
    title: "HSL / HSLA",
    label: "hsl(260, 80%, 55%)",
    color: "from-violet-500 to-indigo-500",
    css: `h1 {
  color: hsl(260, 80%, 55%);
  background-color: hsla(260, 80%, 55%, 0.12);
}`,
    desc: "Hue, Saturation, Lightness asosida ishlaydi. Ranglarni sistematik boshqarish uchun kuchli.",
    best: "Color system, theme, light/dark design",
    previewText: "hsl(260,80%,55%)",
    previewBg: "hsla(260,80%,55%,0.12)",
  },
};

const gradientTypes = {
  linear: {
    title: "Linear gradient",
    css: `background: linear-gradient(135deg, #6366f1, #ec4899);`,
    desc: "Ranglar bir yo‘nalishda silliq o‘tadi. Hero section, button, card uchun zo‘r.",
    className: "bg-gradient-to-br from-indigo-500 to-pink-500",
  },
  radial: {
    title: "Radial gradient",
    css: `background: radial-gradient(circle, #22d3ee, #0f172a);`,
    desc: "Rang markazdan tashqariga yoyiladi. Glow, spotlight effect uchun ishlatiladi.",
    className: "bg-[radial-gradient(circle,#22d3ee,#0f172a)]",
  },
  conic: {
    title: "Conic gradient",
    css: `background: conic-gradient(from 180deg, #f97316, #22c55e, #3b82f6, #f97316);`,
    desc: "Ranglar aylana bo‘ylab aylanadi. Badge, loader, decorative UI uchun qiziq.",
    className:
      "bg-[conic-gradient(from_180deg,#f97316,#22c55e,#3b82f6,#f97316)]",
  },
};

const palettes = {
  ocean: {
    title: "Ocean",
    colors: ["#0f172a", "#0369a1", "#22d3ee", "#e0f2fe"],
    usage: "Tech, dashboard, professional web sahifalar",
  },
  sunset: {
    title: "Sunset",
    colors: ["#7c2d12", "#f97316", "#facc15", "#fff7ed"],
    usage: "Landing page, travel, creative sections",
  },
  forest: {
    title: "Forest",
    colors: ["#052e16", "#16a34a", "#86efac", "#f0fdf4"],
    usage: "Eco, education, calm UI",
  },
  royal: {
    title: "Royal",
    colors: ["#1e1b4b", "#7c3aed", "#c084fc", "#faf5ff"],
    usage: "Premium product, portfolio, SaaS",
  },
};

const quiz = [
  {
    question: "Professional projectda rang nomi bilan yozish nega yaxshi emas?",
    options: [
      "Aniq design system yaratish qiyin bo‘ladi",
      "CSS umuman ishlamaydi",
      "HTML ochilmaydi",
    ],
    correct: 0,
  },
  {
    question: "RGBA nimasi bilan RGBdan farq qiladi?",
    options: ["Opacity qiymati bor", "Faqat rasm uchun", "Faqat table uchun"],
    correct: 0,
  },
  {
    question: "HEX format ko‘pincha qayerdan olinadi?",
    options: ["Figma/design systemdan", "Klaviaturadan", "Audio fayldan"],
    correct: 0,
  },
  {
    question: "linear-gradient nima qiladi?",
    options: [
      "Ranglarni bir yo‘nalishda o‘tkazadi",
      "Matnni pastga tushiradi",
      "Link yaratadi",
    ],
    correct: 0,
  },
];

export default function CssM2L2() {
  const [activeFormat, setActiveFormat] = useState("hex");
  const [activeGradient, setActiveGradient] = useState("linear");
  const [activePalette, setActivePalette] = useState("royal");
  const [opacity, setOpacity] = useState(55);
  const [answers, setAnswers] = useState({});

  const format = colorFormats[activeFormat];
  const gradient = gradientTypes[activeGradient];
  const palette = palettes[activePalette];

  const rgbaCode = `rgba(15, 23, 42, ${opacity / 100})`;

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

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
              CSS • Module 2 • 2-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Ranglar bilan UI kayfiyatini boshqaramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun color, background-color, HEX, RGB/RGBA, HSL/HSLA,
              gradientlar va rang uyg‘unligi bilan professional card sahifa
              yaratishni o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={FaPalette}
                title="Palette"
                text="Rang uyg‘unligi"
              />
              <HeroBadge icon={MdGradient} title="Gradient" text="Premium UI" />
              <HeroBadge icon={FaCode} title="Code" text="Live CSS" />
            </div>
          </div>

          <ColorHero palette={palette} />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdColorLens}
        label="Color basics"
        title="color va background-color farqi"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <FaEyeDropper className="mb-4 text-5xl text-cyan-300" />
            <h4 className="mb-3 text-3xl font-black text-white">color</h4>
            <p className="leading-7 text-slate-300">
              <b className="text-cyan-300">color</b> matn rangini o‘zgartiradi.
              Masalan: sarlavha, paragraph, link text.
            </p>

            <pre className="mt-5 rounded-2xl bg-black/40 p-4 font-mono text-sm text-cyan-300">
              {`h1 {
  color: #6366f1;
}`}
            </pre>
          </div>

          <div className="rounded-[32px] border border-fuchsia-400/20 bg-fuchsia-400/10 p-6">
            <FaFillDrip className="mb-4 text-5xl text-fuchsia-300" />
            <h4 className="mb-3 text-3xl font-black text-white">
              background-color
            </h4>
            <p className="leading-7 text-slate-300">
              <b className="text-fuchsia-300">background-color</b> elementning
              orqa fon rangini o‘zgartiradi. Card, button, sectionda ko‘p
              ishlatiladi.
            </p>

            <pre className="mt-5 rounded-2xl bg-black/40 p-4 font-mono text-sm text-fuchsia-300">
              {`div {
  background-color: #fdf4ff;
}`}
            </pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaPalette}
        label="Color formats"
        title="CSS rang formatlarini live solishtiramiz"
        color="text-fuchsia-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(colorFormats).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFormat(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeFormat === key
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
              key={activeFormat}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${format.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">{format.label}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {format.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{format.desc}</p>
              <div className="mt-5 rounded-2xl bg-white/15 p-4 font-bold text-white">
                Eng yaxshi: {format.best}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <p className="mb-3 text-sm font-black text-slate-400">
              Kod ko‘rinishi:
            </p>
            <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-7 text-cyan-300">
              {format.css}
            </pre>

            <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950">
              <p
                style={{
                  color: format.previewText,
                  backgroundColor: format.previewBg,
                }}
                className="rounded-2xl p-5 text-center text-3xl font-black"
              >
                Rang format preview
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Best practice"
        title="Nega rang nomi bilan style berish yaxshi emas?"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-red-400/20 bg-red-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              ❌ Named color muammosi
            </h4>

            <div className="space-y-3">
              {[
                "red, blue, green juda umumiy va aniq emas",
                "Figma design bilan mos rang topish qiyin",
                "Brand ranglarini boshqarish qiyinlashadi",
                "Projectda har xil usul aralashsa kod tartibsiz bo‘ladi",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              ✅ Professional yondashuv
            </h4>

            <div className="space-y-3">
              {[
                "Bitta format tanlang: masalan HEX yoki HSL",
                "Design system ranglarini saqlang",
                "Bir xil rangni qayta-qayta ishlating",
                "Primary, secondary, background, text ranglarini oldindan belgilang",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <FaCheckCircle className="text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdGradient}
        label="Gradient studio"
        title="Linear, radial va conic gradientlarni ko‘ramiz"
        color="text-purple-300"
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

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div
              className={`grid h-72 place-items-center rounded-[28px] ${gradient.className}`}
            >
              <div className="rounded-3xl bg-white/20 px-6 py-4 text-center backdrop-blur-xl">
                <h4 className="text-3xl font-black text-white">
                  {gradient.title}
                </h4>
                <p className="mt-2 text-white/80">Premium background effect</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <h4 className="mb-3 text-3xl font-black text-white">
              {gradient.title}
            </h4>
            <p className="mb-5 leading-7 text-slate-300">{gradient.desc}</p>

            <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-7 text-purple-300">
              {gradient.css}
            </pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Palette harmony"
        title="Ranglar uyg‘unligini tanlash"
        color="text-emerald-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(palettes).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActivePalette(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activePalette === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h4 className="mb-3 text-3xl font-black text-white">
              {palette.title} palette
            </h4>
            <p className="mb-5 leading-7 text-slate-300">{palette.usage}</p>

            <div className="grid grid-cols-4 overflow-hidden rounded-3xl">
              {palette.colors.map((color) => (
                <div
                  key={color}
                  className="grid h-24 place-items-center text-xs font-black text-white"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div
              className="rounded-[28px] p-6 text-white"
              style={{
                background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})`,
              }}
            >
              <p className="mb-3 text-sm font-black opacity-80">
                {palette.title} landing card
              </p>
              <h4 className="text-4xl font-black">Design rangdan boshlanadi</h4>
              <p className="mt-3 max-w-md opacity-80">
                Bir-biriga mos ranglar sahifani premium va professional qiladi.
              </p>
              <button
                className="mt-6 cursor-pointer rounded-2xl px-5 py-3 font-black"
                style={{
                  backgroundColor: palette.colors[3],
                  color: palette.colors[0],
                }}
              >
                Explore colors
              </button>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaEyeDropper}
        label="RGBA opacity"
        title="RGBA orqali shaffof fon qilish"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center p-6">
            <div
              className="rounded-[28px] p-8 text-white backdrop-blur-md"
              style={{ backgroundColor: rgbaCode }}
            >
              <h4 className="mb-3 text-4xl font-black">Glass card</h4>
              <p className="leading-7 text-white/85">
                Opacity: {opacity}% — rgba orqali orqa fon shaffof qilinyapti.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Alpha qiymatini boshqaring
            </h4>

            <input
              type="range"
              min="10"
              max="95"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full cursor-pointer accent-cyan-400"
            />

            <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-7 text-cyan-300">
              {`div {
  background-color: ${rgbaCode};
}`}
            </pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCss3Alt}
        label="Amaliy mashg‘ulot"
        title="Rangli cardlar sahifasini yaratamiz"
        color="text-fuchsia-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "3 ta card yarating",
              "Har card uchun bir xil palette tanlang",
              "Text uchun kontrast rang ishlating",
              "Button uchun alohida accent rang tanlang",
              "Gradient background qo‘shing",
              "Rang formatini bitta usulda yozing",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-fuchsia-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid gap-4 md:grid-cols-3">
              {["HTML", "CSS", "JavaScript"].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -8, rotate: index === 1 ? 1 : -1 }}
                  className="rounded-3xl p-5 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${
                      palette.colors[index]
                    }, ${palette.colors[index + 1] || palette.colors[1]})`,
                  }}
                >
                  <h4 className="text-2xl font-black">{item}</h4>
                  <p className="mt-2 text-sm text-white/80">
                    Rang uyg‘unligi bilan card chiroyli ko‘rinadi.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="CSS ranglar quiz"
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

function ColorHero({ palette }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-fuchsia-600">Color Studio</p>
          <h3 className="text-3xl font-black">Palette Preview</h3>
        </div>
        <FaPalette className="text-5xl text-fuchsia-500" />
      </div>

      <div
        className="rounded-[30px] p-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})`,
        }}
      >
        <div className="mb-8 grid grid-cols-4 overflow-hidden rounded-2xl">
          {palette.colors.map((color) => (
            <div
              key={color}
              className="h-20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <h4 className="text-4xl font-black">Premium color harmony</h4>
        <p className="mt-3 text-white/80">
          Ranglar mos bo‘lsa, oddiy sahifa ham professional ko‘rinadi.
        </p>
      </div>
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
      <Icon className="mb-3 text-3xl text-fuchsia-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
