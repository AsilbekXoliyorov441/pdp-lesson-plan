import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowsAltH,
  FaArrowsAltV,
  FaBoxOpen,
  FaCheckCircle,
  FaCode,
  FaCubes,
  FaLayerGroup,
  FaProjectDiagram,
  FaRocket,
  FaTimesCircle,
} from "react-icons/fa";
import { MdQuiz, MdViewComfy } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const flexConcepts = {
  parent: {
    title: "Flex Container",
    color: "from-sky-500 to-cyan-400",
    desc: "display: flex parent elementga beriladi. Chunki parent ichidagi child elementlarni qanday joylashishini boshqaradi.",
    example:
      "Sinf xonasi parent, o‘quvchilar child. O‘qituvchi partalarni qanday joylashni sinfga qarab belgilaydi.",
    code: `.cards-wrapper {
  display: flex;
}`,
  },
  child: {
    title: "Flex Item",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Parent ichidagi har bir element flex item bo‘ladi. Ularning joylashuvi parentdagi flex propertylar orqali boshqariladi.",
    example:
      "O‘quvchilar partada o‘tiradi. Partalar joylashuvi sinf tartibiga bog‘liq.",
    code: `.cards-wrapper {
  display: flex;
}

.card {
  width: 250px;
}`,
  },
  gap: {
    title: "gap",
    color: "from-emerald-500 to-teal-400",
    desc: "Elementlar orasidagi bo‘shliqni to‘g‘ri berish uchun gap ishlatiladi. Margin bilan qiynalib yurish shart emas.",
    example: "Partalar orasidagi masofa bir xil bo‘lishi kerak — bu gap.",
    code: `.cards-wrapper {
  display: flex;
  gap: 24px;
}`,
  },
};

const quiz = [
  {
    question: "display: flex qaysi elementga beriladi?",
    options: ["Parent elementga", "Faqat birinchi childga", "Faqat img tegiga"],
    correct: 0,
  },
  {
    question: "Flex container nima?",
    options: [
      "Childlarni boshqaradigan parent",
      "Faqat button",
      "CSS fayl nomi",
    ],
    correct: 0,
  },
  {
    question: "Flex item nima?",
    options: [
      "Flex container ichidagi child element",
      "Browser extension",
      "HTML fayl",
    ],
    correct: 0,
  },
  {
    question: "gap nima uchun ishlatiladi?",
    options: [
      "Elementlar orasiga bo‘shliq berish uchun",
      "Text rangini o‘zgartirish uchun",
      "Rasm yuklash uchun",
    ],
    correct: 0,
  },
  {
    question: "justify-content asosan qaysi o‘q bo‘yicha ishlaydi?",
    options: ["Main axis", "Faqat vertical axis", "Faqat z-index"],
    correct: 0,
  },
  {
    question: "align-items asosan qaysi o‘q bo‘yicha ishlaydi?",
    options: ["Cross axis", "Faqat linklar", "Faqat table"],
    correct: 0,
  },
  {
    question: "flex-direction: column bo‘lsa main axis qanday bo‘ladi?",
    options: ["Vertical", "Horizontal", "Diagonal"],
    correct: 0,
  },
  {
    question: "flex-wrap: wrap nima qiladi?",
    options: [
      "Elementlar sig‘masa keyingi qatorga tushadi",
      "Elementni yashiradi",
      "Textni qalin qiladi",
    ],
    correct: 0,
  },
  {
    question: "space-between nima qiladi?",
    options: [
      "Elementlar orasini maksimal ochadi",
      "Barchasini chapga yopishtiradi",
      "Elementlarni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "align-self nima qiladi?",
    options: [
      "Bitta itemni alohida align qiladi",
      "Parentni o‘chiradi",
      "Image yuklaydi",
    ],
    correct: 0,
  },
];

export default function CssM2L7() {
  const [activeConcept, setActiveConcept] = useState("parent");
  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("nowrap");
  const [justify, setJustify] = useState("space-between");
  const [align, setAlign] = useState("center");
  const [alignContent, setAlignContent] = useState("stretch");
  const [alignSelf, setAlignSelf] = useState("auto");
  const [gap, setGap] = useState(18);
  const [answers, setAnswers] = useState({});

  const concept = flexConcepts[activeConcept];

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
        className="relative overflow-hidden rounded-[44px] border border-teal-400/20 bg-gradient-to-br from-[#042f2e] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-black text-teal-300">
              <HiSparkles />
              CSS • Module 2 • 7-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Flexbox bilan elementlarni professional joylashtiramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun flex container, flex item, direction, wrap, justify-content,
              align-items, align-content, align-self va gap propertylarini live
              playground orqali o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={FaProjectDiagram}
                title="Parent"
                text="flex container"
              />
              <HeroBadge icon={FaCubes} title="Items" text="flex children" />
              <HeroBadge icon={FaRocket} title="Layout" text="landing cards" />
            </div>
          </div>

          <FlexHero
            direction={direction}
            justify={justify}
            align={align}
            gap={gap}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaProjectDiagram}
        label="Flexbox nima?"
        title="Flexbox qachon ishlatiladi?"
        color="text-teal-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaLayerGroup}
            title="Yonma-yon layout"
            text="Cardlar, navbar, button group, hero section qismlarini joylashtirish uchun ishlatiladi."
          />
          <InfoCard
            icon={FaArrowsAltH}
            title="Main axis"
            text="justify-content elementlarni asosiy o‘q bo‘yicha joylashtiradi."
          />
          <InfoCard
            icon={FaArrowsAltV}
            title="Cross axis"
            text="align-items elementlarni qarama-qarshi o‘q bo‘yicha joylashtiradi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaBoxOpen}
        label="Parent va child"
        title="display: flex nima uchun parentga beriladi?"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(flexConcepts).map(([key, item]) => (
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
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${concept.color} p-7`}
            >
              <h4 className="mb-3 text-4xl font-black text-white">
                {concept.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{concept.desc}</p>
              <div className="mt-5 rounded-2xl bg-white/15 p-4 font-bold text-white">
                Hayotiy misol: {concept.example}
              </div>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={concept.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdViewComfy}
        label="Flex playground"
        title="Flex propertylarni live boshqaring"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="flex-direction"
              value={direction}
              setValue={setDirection}
              options={["row", "row-reverse", "column", "column-reverse"]}
            />

            <ButtonGroup
              title="flex-wrap"
              value={wrap}
              setValue={setWrap}
              options={["nowrap", "wrap", "wrap-reverse"]}
            />

            <ButtonGroup
              title="justify-content"
              value={justify}
              setValue={setJustify}
              options={[
                "flex-start",
                "center",
                "flex-end",
                "left",
                "right",
                "space-between",
                "space-around",
                "space-evenly",
              ]}
            />

            <ButtonGroup
              title="align-items"
              value={align}
              setValue={setAlign}
              options={[
                "stretch",
                "flex-start",
                "center",
                "flex-end",
                "baseline",
                "first baseline",
                "last baseline",
              ]}
            />

            <ButtonGroup
              title="align-content"
              value={alignContent}
              setValue={setAlignContent}
              options={[
                "stretch",
                "flex-start",
                "center",
                "flex-end",
                "space-between",
                "space-around",
              ]}
            />

            <ButtonGroup
              title="align-self — 2-item"
              value={alignSelf}
              setValue={setAlignSelf}
              options={["auto", "flex-start", "center", "flex-end", "stretch"]}
            />

            <RangeControl
              label={`gap: ${gap}px`}
              min={0}
              max={48}
              value={gap}
              onChange={setGap}
            />
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="min-h-[420px] rounded-[28px] border border-white/10 bg-white p-5">
              <div
                className="h-[370px] rounded-3xl bg-slate-100 p-4"
                style={{
                  display: "flex",
                  flexDirection: direction,
                  flexWrap: wrap,
                  justifyContent: justify,
                  alignItems: align,
                  alignContent,
                  gap,
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    layout
                    className={`grid place-items-center rounded-2xl font-black text-white shadow-lg ${
                      item === 1
                        ? "bg-teal-500"
                        : item === 2
                          ? "bg-violet-500"
                          : item === 3
                            ? "bg-cyan-500"
                            : item === 4
                              ? "bg-emerald-500"
                              : item === 5
                                ? "bg-indigo-500"
                                : "bg-fuchsia-500"
                    }`}
                    style={{
                      width: 82,
                      height: item === 2 ? 120 : 82,
                      alignSelf: item === 2 ? alignSelf : "auto",
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <CodePanel
              className="mt-5"
              code={`.parent {
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${align};
  align-content: ${alignContent};
  gap: ${gap}px;
}

.item-2 {
  align-self: ${alignSelf};
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaArrowsAltH}
        label="Axis logic"
        title="Direction o‘zgarsa justify va align ham o‘zgaradi"
        color="text-amber-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-amber-400/20 bg-amber-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Main axis va Cross axis
            </h4>
            <p className="leading-7 text-slate-300">
              <b className="text-amber-300">justify-content</b> doim main axis
              bo‘yicha ishlaydi. <b className="text-amber-300">align-items</b>{" "}
              doim cross axis bo‘yicha ishlaydi. Agar flex-direction column
              bo‘lsa, main axis verticalga aylanadi.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <div className="mb-4 flex flex-wrap gap-2">
              {["row", "column"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setDirection(item)}
                  className={`cursor-pointer rounded-2xl px-4 py-3 font-black ${
                    direction === item
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="rounded-3xl bg-slate-100 p-5">
              <div className="mb-3 font-black">
                Current direction: {direction}
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl bg-teal-100 p-4">
                  Main axis:{" "}
                  <b>
                    {direction.includes("column") ? "vertical" : "horizontal"}
                  </b>
                </div>
                <div className="rounded-2xl bg-violet-100 p-4">
                  Cross axis:{" "}
                  <b>
                    {direction.includes("column") ? "horizontal" : "vertical"}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCubes}
        label="Card layout"
        title="Flexbox bilan kartochkalarni joylashtirish"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "cards-wrapper parent element yarating",
              "parentga display: flex bering",
              "gap orqali cardlar orasiga joy bering",
              "flex-wrap: wrap orqali sig‘masa pastga tushiring",
              "justify-content orqali gorizontal joylashni boshqaring",
              "align-items orqali cardlarni vertical tekislang",
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

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="text-3xl font-black">Course Cards</h4>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700">
                flex-wrap
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {["HTML", "CSS", "JavaScript", "React"].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                  className="w-[180px] rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 p-5 text-white shadow-xl"
                >
                  <h5 className="text-2xl font-black">{item}</h5>
                  <p className="mt-2 text-sm text-white/80">
                    Flexbox bilan joylashdi
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Amaliy mashg‘ulot"
        title="Kichik landing page ustida amaliyot"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Header ichida logo va nav linklarni flex qiling",
              "Hero sectionda text va image blokni yonma-yon joylashtiring",
              "Card sectionda 3–4 ta cardni flex-wrap bilan qiling",
              "Buttonlarni inline-flex yoki flex bilan markazlang",
              "gap orqali toza spacing bering",
              "DevTools orqali justify/align qiymatlarini sinab ko‘ring",
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

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-7">
            <p className="text-cyan-300">.header {"{"}</p>
            <p className="pl-5 text-white">display: flex;</p>
            <p className="pl-5 text-white">justify-content: space-between;</p>
            <p className="pl-5 text-white">align-items: center;</p>
            <p className="text-cyan-300">{"}"}</p>
            <br />
            <p className="text-emerald-300">.cards {"{"}</p>
            <p className="pl-5 text-white">display: flex;</p>
            <p className="pl-5 text-white">flex-wrap: wrap;</p>
            <p className="pl-5 text-white">gap: 24px;</p>
            <p className="pl-5 text-white">justify-content: center;</p>
            <p className="text-emerald-300">{"}"}</p>
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
          title="Flexbox quiz"
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

function FlexHero({ direction, justify, align, gap }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-teal-600">Flex Preview</p>
          <h3 className="text-3xl font-black">Control Room</h3>
        </div>
        <FaProjectDiagram className="text-5xl text-teal-500" />
      </div>

      <div className="rounded-3xl bg-slate-100 p-5">
        <div
          className="flex h-72 rounded-3xl bg-slate-950 p-4"
          style={{
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            gap,
          }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              layout
              className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 font-black text-white"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-slate-950 p-4 font-mono text-sm text-cyan-300">
        flex-direction: {direction};<br />
        justify-content: {justify};<br />
        align-items: {align};<br />
        gap: {gap}px;
      </div>
    </motion.div>
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
        className="w-full cursor-pointer accent-teal-400"
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
      <Icon className="mb-3 text-3xl text-teal-300" />
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
      <Icon className="mb-4 text-4xl text-teal-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
