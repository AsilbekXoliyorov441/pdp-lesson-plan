import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaCheckCircle,
  FaCode,
  FaFont,
  FaListUl,
  FaMagic,
  FaPalette,
  FaRegLightbulb,
  FaTimesCircle,
} from "react-icons/fa";
import { MdFormatUnderlined, MdQuiz, MdTextFields } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const textTabs = {
  align: {
    title: "text-align",
    color: "from-cyan-500 to-blue-500",
    desc: "Matnni chapga, o‘rtaga, o‘ngga yoki ikki tomonga tekislash uchun ishlatiladi.",
    code: `.title {
  text-align: center;
}`,
  },
  decoration: {
    title: "text-decoration",
    color: "from-purple-500 to-pink-500",
    desc: "Matn tagiga/ustiga chiziq berish, chiziq style va rangini boshqarish uchun.",
    code: `.link {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #ec4899;
}`,
  },
  transform: {
    title: "text-transform",
    color: "from-emerald-500 to-teal-500",
    desc: "Matnni uppercase, lowercase yoki capitalize ko‘rinishga o‘tkazadi.",
    code: `.badge {
  text-transform: uppercase;
}`,
  },
  spacing: {
    title: "spacing",
    color: "from-orange-500 to-red-500",
    desc: "line-height, letter-spacing va word-spacing orqali matn o‘qilishini yaxshilaydi.",
    code: `.paragraph {
  line-height: 1.8;
  letter-spacing: 1px;
  word-spacing: 4px;
}`,
  },
};

const quiz = [
  {
    question: "text-align nima qiladi?",
    options: ["Matnni tekislaydi", "Matn rangini o‘zgartiradi", "Rasm qo‘yadi"],
    correct: 0,
  },
  {
    question: "text-transform: uppercase nima qiladi?",
    options: [
      "Matnni katta harf qiladi",
      "Matnni yashiradi",
      "Line height beradi",
    ],
    correct: 0,
  },
  {
    question: "line-height nima uchun kerak?",
    options: [
      "Qatorlar orasidagi masofani boshqarish uchun",
      "Elementni yashirish uchun",
      "Rasmni takrorlash uchun",
    ],
    correct: 0,
  },
  {
    question: "letter-spacing nima qiladi?",
    options: [
      "Harflar orasini ochadi",
      "So‘zlar orasini ochadi",
      "Border beradi",
    ],
    correct: 0,
  },
  {
    question: "word-spacing nima qiladi?",
    options: [
      "So‘zlar orasini boshqaradi",
      "Matnni qalin qiladi",
      "Button yaratadi",
    ],
    correct: 0,
  },
  {
    question: "list-style-type nima qiladi?",
    options: [
      "Ro‘yxat marker turini belgilaydi",
      "Font family tanlaydi",
      "Box shadow beradi",
    ],
    correct: 0,
  },
  {
    question: "Gradient text qilishda asosiy hack nima?",
    options: [
      "background-clip: text va color: transparent",
      "display: none",
      "border-radius: 50%",
    ],
    correct: 0,
  },
  {
    question: "text-shadow va box-shadow farqi nima?",
    options: [
      "text-shadow matnga, box-shadow element qutisiga ishlaydi",
      "Ikkalasi bir xil",
      "Faqat imgga ishlaydi",
    ],
    correct: 0,
  },
];

export default function CssM2L9() {
  const [activeTab, setActiveTab] = useState("decoration");
  const [textAlign, setTextAlign] = useState("center");
  const [decorationLine, setDecorationLine] = useState("underline");
  const [decorationStyle, setDecorationStyle] = useState("wavy");
  const [decorationColor, setDecorationColor] = useState("#ec4899");
  const [transform, setTransform] = useState("uppercase");
  const [lineHeight, setLineHeight] = useState(1.7);
  const [letterSpacing, setLetterSpacing] = useState(1);
  const [wordSpacing, setWordSpacing] = useState(4);
  const [listType, setListType] = useState("disc");
  const [shadowMode, setShadowMode] = useState("text");
  const [answers, setAnswers] = useState({});

  const active = textTabs[activeTab];

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
        className="relative overflow-hidden rounded-[44px] border border-pink-400/20 bg-gradient-to-br from-[#20051a] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm font-black text-pink-300">
              <HiSparkles />
              CSS • Module 2 • 9-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Tipografiya: matnni o‘qilishi va chiroyini boshqaramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun text-align, text-decoration, text-transform, list-style,
              line-height, letter-spacing, word-spacing, gradient text,
              text-shadow va box-shadow farqlarini amaliy ko‘ramiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={MdTextFields}
                title="Typography"
                text="text system"
              />
              <HeroBadge
                icon={FaMagic}
                title="Effects"
                text="gradient/shadow"
              />
              <HeroBadge icon={FaListUl} title="Lists" text="list-style" />
            </div>
          </div>

          <TextHero
            textAlign={textAlign}
            transform={transform}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            wordSpacing={wordSpacing}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaFont}
        label="Text formatting"
        title="Matn formatlash nima uchun kerak?"
        color="text-pink-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaAlignCenter}
            title="O‘qilishi"
            text="line-height va spacing matnni charchatmasdan o‘qishga yordam beradi."
          />
          <InfoCard
            icon={MdFormatUnderlined}
            title="Urg‘u berish"
            text="text-decoration va text-transform muhim textlarni ajratib ko‘rsatadi."
          />
          <InfoCard
            icon={FaPalette}
            title="Vizual effekt"
            text="Gradient text va shadow loyiha sarlavhasini premium ko‘rsatadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Property map"
        title="Text propertylarni tushunamiz"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(textTabs).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeTab === key
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
              key={activeTab}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${active.color} p-7`}
            >
              <h4 className="mb-3 text-4xl font-black text-white">
                {active.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{active.desc}</p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={active.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaAlignCenter}
        label="Live text controls"
        title="text-align, transform va spacingni live boshqaring"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="text-align"
              value={textAlign}
              setValue={setTextAlign}
              options={[
                ["left", <FaAlignLeft key="left" />],
                ["center", <FaAlignCenter key="center" />],
                ["right", <FaAlignRight key="right" />],
                ["justify", "justify"],
              ]}
            />

            <ButtonGroup
              title="text-transform"
              value={transform}
              setValue={setTransform}
              options={[
                ["none", "none"],
                ["uppercase", "uppercase"],
                ["lowercase", "lowercase"],
                ["capitalize", "capitalize"],
              ]}
            />

            <RangeControl
              label={`line-height: ${lineHeight}`}
              min={1}
              max={2.5}
              step={0.1}
              value={lineHeight}
              onChange={setLineHeight}
            />

            <RangeControl
              label={`letter-spacing: ${letterSpacing}px`}
              min={-2}
              max={8}
              value={letterSpacing}
              onChange={setLetterSpacing}
            />

            <RangeControl
              label={`word-spacing: ${wordSpacing}px`}
              min={0}
              max={16}
              value={wordSpacing}
              onChange={setWordSpacing}
            />
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="rounded-3xl bg-white p-8 text-slate-950">
              <h3
                className="mb-5 text-4xl font-black"
                style={{
                  textAlign,
                  textTransform: transform,
                  letterSpacing,
                }}
              >
                Frontend typography
              </h3>

              <p
                className="text-lg text-slate-600"
                style={{
                  textAlign,
                  lineHeight,
                  letterSpacing,
                  wordSpacing,
                }}
              >
                Matn dizayni sahifaning professional ko‘rinishiga juda katta
                ta’sir qiladi. To‘g‘ri line-height va spacing o‘quvchini
                charchatmaydi, aksincha sahifani o‘qishga qulay qiladi.
              </p>
            </div>

            <CodePanel
              className="mt-5"
              code={`.text {
  text-align: ${textAlign};
  text-transform: ${transform};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing}px;
  word-spacing: ${wordSpacing}px;
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdFormatUnderlined}
        label="Decoration lab"
        title="text-decoration xususiyatlarini boshqaramiz"
        color="text-orange-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="text-decoration-line"
              value={decorationLine}
              setValue={setDecorationLine}
              options={[
                ["none", "none"],
                ["underline", "underline"],
                ["overline", "overline"],
                ["line-through", "line-through"],
              ]}
            />

            <ButtonGroup
              title="text-decoration-style"
              value={decorationStyle}
              setValue={setDecorationStyle}
              options={[
                ["solid", "solid"],
                ["wavy", "wavy"],
                ["dashed", "dashed"],
                ["dotted", "dotted"],
                ["double", "double"],
              ]}
            />

            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
              <h4 className="mb-4 text-xl font-black text-white">
                text-decoration-color
              </h4>
              <div className="flex flex-wrap gap-3">
                {["#ec4899", "#22c55e", "#38bdf8", "#f59e0b"].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setDecorationColor(color)}
                    className="h-12 w-12 cursor-pointer rounded-2xl border-2 border-white/20"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-8 text-slate-950">
            <p
              className="text-center text-5xl font-black"
              style={{
                textDecorationLine: decorationLine,
                textDecorationStyle: decorationStyle,
                textDecorationColor: decorationColor,
              }}
            >
              Styled Text
            </p>

            <CodePanel
              className="mt-8"
              code={`.title {
  text-decoration-line: ${decorationLine};
  text-decoration-style: ${decorationStyle};
  text-decoration-color: ${decorationColor};
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaListUl}
        label="Lists and spacing"
        title="list-style, list-style-type va spacing"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="list-style-type"
              value={listType}
              setValue={setListType}
              options={[
                ["disc", "disc"],
                ["circle", "circle"],
                ["square", "square"],
                ["decimal", "decimal"],
                ["none", "none"],
              ]}
            />

            <CodePanel
              code={`ul {
  list-style-type: ${listType};
}

p {
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing}px;
  word-spacing: ${wordSpacing}px;
}`}
            />
          </div>

          <div className="rounded-[32px] bg-white p-8 text-slate-950">
            <h4 className="mb-5 text-3xl font-black">Frontend skills</h4>

            <ul
              className="ml-6 space-y-3 text-lg font-bold"
              style={{ listStyleType: listType }}
            >
              <li>HTML structure</li>
              <li>CSS typography</li>
              <li>Flexbox layout</li>
              <li>Responsive design</li>
            </ul>

            <p
              className="mt-6 text-slate-600"
              style={{
                lineHeight,
                letterSpacing,
                wordSpacing,
              }}
            >
              Ro‘yxat stylelari sahifani tartibli qiladi. list-style-type marker
              turini belgilaydi.
            </p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Gradient text hack"
        title="Matnga gradient berish"
        color="text-fuchsia-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 text-slate-950">
            <h3 className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 bg-clip-text text-center text-6xl font-black text-transparent">
              Gradient Title
            </h3>
            <p className="mt-5 text-center text-slate-500">
              CSS hack: background-clip: text + color: transparent
            </p>
          </div>

          <CodePanel
            code={`.gradient-title {
  background: linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Shadow comparison"
        title="text-shadow va box-shadow farqi"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {[
            ["text", "text-shadow"],
            ["box", "box-shadow"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setShadowMode(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                shadowMode === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 text-center text-slate-950">
            {shadowMode === "text" ? (
              <h3
                className="text-6xl font-black text-cyan-500"
                style={{
                  textShadow: "0 8px 24px rgba(6, 182, 212, 0.45)",
                }}
              >
                Text Shadow
              </h3>
            ) : (
              <div
                className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-10 text-4xl font-black text-white"
                style={{
                  boxShadow: "0 24px 60px rgba(6, 182, 212, 0.45)",
                }}
              >
                Box Shadow
              </div>
            )}
          </div>

          <CodePanel
            code={
              shadowMode === "text"
                ? `.title {
  text-shadow: 0 8px 24px rgba(6, 182, 212, 0.45);
}`
                : `.card {
  box-shadow: 0 24px 60px rgba(6, 182, 212, 0.45);
}`
            }
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRegLightbulb}
        label="Amaliy mashg‘ulot"
        title="Loyiha sarlavhasi va paragraflarni tipografik bezash"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Hero title uchun gradient text yarating",
              "Paragraph uchun line-height 1.7 yoki 1.8 bering",
              "Subtitle uchun letter-spacing qo‘shing",
              "CTA linkga text-decoration style bering",
              "List section uchun list-style-type tanlang",
              "Card titlega text-shadow yoki box-shadowni solishtirib ko‘ring",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-yellow-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <p className="mb-3 text-sm font-black uppercase tracking-[4px] text-pink-500">
              Premium typography
            </p>
            <h4 className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-5xl font-black leading-tight text-transparent">
              Build beautiful landing pages
            </h4>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              To‘g‘ri tipografiya sahifani professional qiladi. Sarlavha,
              paragraph, ro‘yxat va linklar bir-biriga mos ishlashi kerak.
            </p>
            <a className="mt-5 inline-block cursor-pointer font-black text-cyan-600 underline decoration-pink-500 decoration-wavy underline-offset-8">
              Start learning
            </a>
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
          title="Tipografiya quiz"
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

function TextHero({
  textAlign,
  transform,
  lineHeight,
  letterSpacing,
  wordSpacing,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-pink-600">Text Preview</p>
          <h3 className="text-3xl font-black">Typography Lab</h3>
        </div>
        <FaFont className="text-5xl text-pink-500" />
      </div>

      <div className="rounded-[30px] bg-gradient-to-br from-pink-600 to-cyan-500 p-6 text-white">
        <h4
          className="text-4xl font-black"
          style={{
            textAlign,
            textTransform: transform,
            letterSpacing,
          }}
        >
          Creative Text
        </h4>

        <p
          className="mt-4 text-white/85"
          style={{
            textAlign,
            lineHeight,
            letterSpacing,
            wordSpacing,
          }}
        >
          Matn joylashuvi, spacing va bezaklari sahifa dizaynining muhim qismi.
        </p>
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

function RangeControl({ label, min, max, value, onChange, step = 1 }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{label}</h4>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-pink-400"
      />
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
      <Icon className="mb-3 text-3xl text-pink-300" />
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
      <Icon className="mb-4 text-4xl text-pink-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
