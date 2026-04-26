import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBoxOpen,
  FaCss3Alt,
  FaHome,
  FaBorderStyle,
  FaRulerCombined,
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";
import { MdQuiz, MdSpaceBar } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const boxParts = {
  content: {
    title: "Content",
    color: "from-cyan-500 to-blue-500",
    desc: "Element ichidagi asosiy narsa: text, rasm, button yoki boshqa content.",
    house: "Uy ichidagi xona va buyumlar.",
    code: `.card {
  width: 300px;
  height: 180px;
}`,
  },
  padding: {
    title: "Padding",
    color: "from-emerald-500 to-teal-500",
    desc: "Content bilan border orasidagi ichki bo‘shliq.",
    house: "Xona ichidagi devorgacha bo‘lgan ichki masofa.",
    code: `.card {
  padding: 24px;
}`,
  },
  border: {
    title: "Border",
    color: "from-yellow-500 to-orange-500",
    desc: "Element atrofidagi chiziq yoki ramka.",
    house: "Uyning devori.",
    code: `.card {
  border: 3px solid #f59e0b;
}`,
  },
  margin: {
    title: "Margin",
    color: "from-purple-500 to-pink-500",
    desc: "Element tashqarisidagi bo‘shliq. Boshqa elementlardan masofa.",
    house: "Uy bilan qo‘shni uy orasidagi tashqi masofa.",
    code: `.card {
  margin: 32px;
}`,
  },
};

const quiz = [
  {
    question: "Padding nima?",
    options: ["Ichki bo‘shliq", "Tashqi bo‘shliq", "Matn rangi"],
    correct: 0,
  },
  {
    question: "Margin nima?",
    options: ["Tashqi bo‘shliq", "Ichki bo‘shliq", "Border rangi"],
    correct: 0,
  },
  {
    question: "Border nima?",
    options: [
      "Element atrofidagi chiziq",
      "Element ichidagi text",
      "HTML fayl",
    ],
    correct: 0,
  },
  {
    question: "box-sizing: border-box nima qiladi?",
    options: [
      "Width ichiga padding va borderni ham qo‘shib hisoblaydi",
      "Faqat rang beradi",
      "Elementni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "Universal selector qaysi?",
    options: ["*", "#", "."],
    correct: 0,
  },
  {
    question: "outline borderdan nimasi bilan farq qiladi?",
    options: [
      "Outline layout hajmiga ta’sir qilmaydi",
      "Outline faqat rasmga ishlaydi",
      "Outline HTML tegi",
    ],
    correct: 0,
  },
];

export default function CssM2L4() {
  const [activePart, setActivePart] = useState("padding");
  const [padding, setPadding] = useState(28);
  const [margin, setMargin] = useState(24);
  const [borderWidth, setBorderWidth] = useState(4);
  const [radius, setRadius] = useState(28);
  const [boxSizing, setBoxSizing] = useState("border-box");
  const [borderStyle, setBorderStyle] = useState("solid");
  const [outlineOn, setOutlineOn] = useState(false);
  const [answers, setAnswers] = useState({});

  const active = boxParts[activePart];

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
        className="relative overflow-hidden rounded-[44px] border border-amber-400/20 bg-gradient-to-br from-[#201407] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-black text-amber-300">
              <HiSparkles />
              CSS • Module 2 • 4-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Box Model: har bir element aslida quti
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun content, padding, border, margin, box-sizing, universal
              selector, container, border-radius, outline va DevTools box model
              qismini amaliy o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={FaBoxOpen}
                title="Box Model"
                text="element anatomy"
              />
              <HeroBadge
                icon={FaRulerCombined}
                title="Spacing"
                text="padding/margin"
              />
              <HeroBadge
                icon={FaTools}
                title="DevTools"
                text="box model inspect"
              />
            </div>
          </div>

          <BoxHero
            padding={padding}
            margin={margin}
            borderWidth={borderWidth}
            radius={radius}
            boxSizing={boxSizing}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaHome}
        label="Hayotiy misol"
        title="Box modelni uy orqali tushunamiz"
        color="text-amber-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(boxParts).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePart(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activePart === key
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
              key={activePart}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${active.color} p-7`}
            >
              <h4 className="mb-3 text-4xl font-black text-white">
                {active.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{active.desc}</p>
              <div className="mt-5 rounded-2xl bg-white/15 p-4 font-bold text-white">
                🏠 {active.house}
              </div>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={active.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdSpaceBar}
        label="Live spacing lab"
        title="padding, border va marginni o‘zingiz boshqaring"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`padding: ${padding}px`}
              min={0}
              max={70}
              value={padding}
              onChange={setPadding}
            />
            <RangeControl
              label={`margin: ${margin}px`}
              min={0}
              max={70}
              value={margin}
              onChange={setMargin}
            />
            <RangeControl
              label={`border-width: ${borderWidth}px`}
              min={0}
              max={16}
              value={borderWidth}
              onChange={setBorderWidth}
            />
            <RangeControl
              label={`border-radius: ${radius}px`}
              min={0}
              max={60}
              value={radius}
              onChange={setRadius}
            />
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
            <div className="rounded-3xl bg-purple-500/20 p-4">
              <div
                className="bg-cyan-400/20"
                style={{ padding: `${margin}px` }}
              >
                <motion.div
                  animate={{
                    padding,
                    borderWidth,
                    borderRadius: radius,
                  }}
                  className="border-amber-400 bg-slate-900 text-white"
                  style={{
                    borderStyle,
                    boxSizing,
                  }}
                >
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-5 text-center font-black">
                    Content
                  </div>
                </motion.div>
              </div>
            </div>

            <CodePanel
              className="mt-5"
              code={`.card {
  margin: ${margin}px;
  padding: ${padding}px;
  border: ${borderWidth}px ${borderStyle} #f59e0b;
  border-radius: ${radius}px;
  box-sizing: ${boxSizing};
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="General CSS"
        title="Universal selector, body va container"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              General kodlar project boshida yoziladi
            </h4>

            <div className="space-y-3">
              {[
                "* barcha elementlarni chaqiradi",
                "box-sizing: border-box layoutni aniqroq qiladi",
                "body default marginni olib tashlaydi",
                "container sahifani markazga olib keladi",
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

          <CodePanel
            code={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #0f172a;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="box-sizing"
        title="border-box va content-box farqi"
        color="text-purple-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {["border-box", "content-box"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setBoxSizing(item)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                boxSizing === item
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Tanlangan: {boxSizing}
            </h4>
            <p className="leading-7 text-slate-300">
              {boxSizing === "border-box"
                ? "width ichiga content + padding + border kiradi. Layout nazorat qilish osonroq."
                : "width faqat content uchun. Padding va border qo‘shilsa element umumiy hajmi kattalashadi."}
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <div className="mb-4 text-sm font-black text-slate-500">
              width: 260px; padding: 30px; border: 8px
            </div>
            <div
              className="border-8 border-purple-500 bg-purple-100 p-[30px] text-center font-black"
              style={{
                width: "260px",
                boxSizing,
              }}
            >
              Box sizing preview
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaBorderStyle}
        label="Border lab"
        title="border, border-radius va outline farqi"
        color="text-fuchsia-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="border-style"
              value={borderStyle}
              setValue={setBorderStyle}
              options={["solid", "dashed", "dotted", "double"]}
            />

            <button
              type="button"
              onClick={() => setOutlineOn(!outlineOn)}
              className={`w-full cursor-pointer rounded-2xl px-5 py-4 font-black transition ${
                outlineOn
                  ? "bg-fuchsia-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {outlineOn ? "Outline yoqilgan" : "Outline yoqish"}
            </button>

            <CodePanel
              code={`.button {
  border: ${borderWidth}px ${borderStyle} #e879f9;
  border-radius: ${radius}px;
  outline: ${outlineOn ? "4px solid #22d3ee" : "none"};
}`}
            />
          </div>

          <div className="rounded-[32px] bg-white p-8 text-center text-slate-950">
            <button
              type="button"
              className="cursor-pointer bg-slate-950 px-8 py-5 text-xl font-black text-white"
              style={{
                border: `${borderWidth}px ${borderStyle} #e879f9`,
                borderRadius: `${radius}px`,
                outline: outlineOn ? "4px solid #22d3ee" : "none",
                outlineOffset: "6px",
              }}
            >
              Premium Button
            </button>

            <p className="mt-8 text-slate-600">
              Border element hajmiga ta’sir qilishi mumkin. Outline esa tashqi
              chiziq, layoutni itarmaydi.
            </p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaTools}
        label="DevTools"
        title="DevTools orqali Box Model’ni kuzatish"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "Chrome’da sahifani oching",
              "Element ustida o‘ng tugma → Inspect",
              "Elements paneldan elementni tanlang",
              "Styles panelda CSSni ko‘ring",
              "Computed panelda Box Model diagrammasini ko‘ring",
              "Padding/margin qiymatlarini vaqtincha o‘zgartirib ko‘ring",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-cyan-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <DevToolsBoxModel
            padding={padding}
            margin={margin}
            borderWidth={borderWidth}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaBoxOpen}
        label="Amaliy mashg‘ulot"
        title="Box model bilan kichik loyiha qilish"
        color="text-amber-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "container yarating va max-width bering",
              "3 ta card yarating",
              "Har cardga padding va border-radius bering",
              "Cardlar orasiga margin/gap bering",
              "Buttonlarga border va hover uchun radius qo‘shing",
              "DevTools orqali spacinglarni tekshiring",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-amber-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="mx-auto max-w-[900px]">
              <h4 className="mb-5 text-3xl font-black">Box Model Cards</h4>
              <div className="grid gap-4 md:grid-cols-3">
                {["HTML", "CSS", "DevTools"].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -8 }}
                    className="rounded-3xl border-4 border-slate-200 bg-slate-50 p-6"
                  >
                    <h5 className="mb-3 text-2xl font-black">{item}</h5>
                    <p className="text-sm text-slate-600">
                      Padding ichki joy, border ramka, margin tashqi joy.
                    </p>
                  </motion.div>
                ))}
              </div>
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
          title="Box Model quiz"
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

function BoxHero({ padding, margin, borderWidth, radius, boxSizing }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-amber-600">Live Box Model</p>
          <h3 className="text-3xl font-black">Element Anatomy</h3>
        </div>
        <FaBoxOpen className="text-5xl text-amber-500" />
      </div>

      <div className="rounded-3xl bg-purple-100 p-5">
        <div className="bg-cyan-100" style={{ padding: `${margin}px` }}>
          <div
            className="border-amber-400 bg-slate-900 text-white"
            style={{
              padding,
              borderWidth,
              borderStyle: "solid",
              borderRadius: radius,
              boxSizing,
            }}
          >
            <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-5 text-center font-black">
              Content
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-black">
        <span className="rounded-xl bg-purple-100 p-3">margin: {margin}px</span>
        <span className="rounded-xl bg-emerald-100 p-3">
          padding: {padding}px
        </span>
        <span className="rounded-xl bg-amber-100 p-3">
          border: {borderWidth}px
        </span>
        <span className="rounded-xl bg-cyan-100 p-3">{boxSizing}</span>
      </div>
    </motion.div>
  );
}

function DevToolsBoxModel({ padding, margin, borderWidth }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
      <div className="mb-4 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>

      <div className="rounded-2xl bg-black/40 p-5">
        <p className="mb-4 font-black text-white">Computed → Box Model</p>

        <div className="rounded-3xl bg-purple-500/30 p-6 text-center text-purple-200">
          margin: {margin}px
          <div className="mt-3 rounded-3xl bg-amber-500/40 p-5 text-amber-100">
            border: {borderWidth}px
            <div className="mt-3 rounded-3xl bg-emerald-500/40 p-5 text-emerald-100">
              padding: {padding}px
              <div className="mt-3 rounded-2xl bg-cyan-500 p-5 font-black text-white">
                content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        className="w-full cursor-pointer accent-amber-400"
      />
    </div>
  );
}

function ButtonGroup({ title, value, setValue, options }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setValue(item)}
            className={`cursor-pointer rounded-2xl px-4 py-3 text-sm font-black transition ${
              value === item
                ? "bg-white text-slate-950"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {item}
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
      <p className="mb-3 text-sm font-black text-slate-400">CSS code:</p>
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
      <Icon className="mb-3 text-3xl text-amber-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
