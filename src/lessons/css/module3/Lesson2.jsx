import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowsAltH,
  FaCheckCircle,
  FaCode,
  FaCrown,
  FaCubes,
  FaGem,
  FaLayerGroup,
  FaObjectGroup,
  FaProjectDiagram,
  FaRandom,
  FaRocket,
  FaTimesCircle,
} from "react-icons/fa";
import { MdQuiz, MdViewComfy } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  grow: {
    title: "flex-grow",
    color: "from-emerald-500 to-teal-500",
    desc: "Bo‘sh joy qolsa, item qanchalik kengayishini belgilaydi. flex-grow: 1 bo‘lsa, item bo‘sh joydan ulush oladi.",
    code: `.item {
  flex-grow: 1;
}`,
  },
  shrink: {
    title: "flex-shrink",
    color: "from-orange-500 to-red-500",
    desc: "Joy yetmasa, item qanchalik qisqarishini belgilaydi. 0 bo‘lsa, item qisqarishga harakat qilmaydi.",
    code: `.item {
  flex-shrink: 0;
}`,
  },
  basis: {
    title: "flex-basis",
    color: "from-cyan-500 to-blue-500",
    desc: "Itemning boshlang‘ich o‘lchamini belgilaydi. Widthga o‘xshaydi, lekin flex layout ichida kuchliroq ishlaydi.",
    code: `.item {
  flex-basis: 240px;
}`,
  },
  order: {
    title: "order",
    color: "from-violet-500 to-fuchsia-500",
    desc: "HTML tartibini o‘zgartirmasdan, ekrandagi ko‘rinish tartibini almashtirish uchun ishlatiladi.",
    code: `.first-card {
  order: 2;
}

.second-card {
  order: 1;
}`,
  },
};

const quiz = [
  {
    question: "flex-grow nima qiladi?",
    options: [
      "Bo‘sh joyni egallash ulushini belgilaydi",
      "Matn rangini beradi",
      "Elementni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "flex-shrink nima qiladi?",
    options: [
      "Joy yetmasa qisqarishni boshqaradi",
      "Fontni qalin qiladi",
      "Rasm yuklaydi",
    ],
    correct: 0,
  },
  {
    question: "flex-basis nima?",
    options: [
      "Flex itemning boshlang‘ich o‘lchami",
      "CSS fayl nomi",
      "Border rangi",
    ],
    correct: 0,
  },
  {
    question: "align-items va align-content farqi nima?",
    options: [
      "items bitta qator itemlarini, content ko‘p qatorlarni boshqaradi",
      "Ikkalasi bir xil",
      "Faqat image uchun",
    ],
    correct: 0,
  },
  {
    question: "Nested flexbox nima?",
    options: [
      "Flex ichida yana flex layout ishlatish",
      "Font ichida rasm",
      "CSSni minify qilish",
    ],
    correct: 0,
  },
  {
    question: "order nima uchun ishlatiladi?",
    options: [
      "Element ko‘rinish tartibini o‘zgartirish uchun",
      "Elementni ranglash uchun",
      "GZIP uchun",
    ],
    correct: 0,
  },
  {
    question: "order HTML strukturani o‘zgartiradimi?",
    options: [
      "Yo‘q, faqat visual tartibni o‘zgartiradi",
      "Ha, HTML faylni qayta yozadi",
      "Browserni yopadi",
    ],
    correct: 0,
  },
];

export default function CssM3L2() {
  const [activeConcept, setActiveConcept] = useState("grow");
  const [grow, setGrow] = useState(1);
  const [shrink, setShrink] = useState(1);
  const [basis, setBasis] = useState(180);
  const [alignMode, setAlignMode] = useState("items");
  const [alignValue, setAlignValue] = useState("center");
  const [orderMode, setOrderMode] = useState(false);
  const [nestedMode, setNestedMode] = useState("dashboard");
  const [answers, setAnswers] = useState({});

  const concept = concepts[activeConcept];

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
        className="relative overflow-hidden rounded-[38px] border border-amber-400/20 bg-gradient-to-br from-[#221504] via-[#0b1020] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-amber-300">
              <FaCrown />
              CSS • Module 3 • 2-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Flexbox Advanced: murakkab layoutlarni boshqaramiz
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun flex-grow, flex-shrink, flex-basis, align-items vs
              align-content, nested flexbox layout va order orqali professional
              joylashuvlar yaratamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaArrowsAltH} title="Grow" text="bo‘sh joy" />
              <HeroBadge
                icon={FaObjectGroup}
                title="Nested"
                text="flex ichida flex"
              />
              <HeroBadge icon={FaRandom} title="Order" text="visual tartib" />
            </div>
          </div>

          <FlexArchitectHero
            grow={grow}
            shrink={shrink}
            basis={basis}
            orderMode={orderMode}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaProjectDiagram}
        label="Quick review"
        title="Flexbox asoslarini eslab o‘tamiz"
        color="text-amber-300"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          <InfoCard
            icon={FaLayerGroup}
            title="Container"
            text="display:flex parent elementga beriladi."
          />
          <InfoCard
            icon={FaCubes}
            title="Items"
            text="Parent ichidagi childlar flex item bo‘ladi."
          />
          <InfoCard
            icon={FaArrowsAltH}
            title="Main axis"
            text="justify-content asosiy o‘q bo‘yicha ishlaydi."
          />
          <InfoCard
            icon={MdViewComfy}
            title="Cross axis"
            text="align-items qarama-qarshi o‘q bo‘yicha ishlaydi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaGem}
        label="Advanced concepts"
        title="flex-grow, flex-shrink, flex-basis va order"
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
              className={`rounded-[32px] bg-gradient-to-br ${concept.color} p-7`}
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
        icon={FaArrowsAltH}
        label="Flex sizing lab"
        title="grow, shrink va basis qiymatlarini live boshqaring"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`flex-grow: ${grow}`}
              min={0}
              max={4}
              value={grow}
              onChange={setGrow}
            />
            <RangeControl
              label={`flex-shrink: ${shrink}`}
              min={0}
              max={4}
              value={shrink}
              onChange={setShrink}
            />
            <RangeControl
              label={`flex-basis: ${basis}px`}
              min={90}
              max={320}
              value={basis}
              onChange={setBasis}
            />

            <CodePanel
              code={`.special-card {
  flex-grow: ${grow};
  flex-shrink: ${shrink};
  flex-basis: ${basis}px;
}`}
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <p className="mb-4 text-sm font-black text-emerald-600">
              Resize logic preview
            </p>

            <div className="flex min-h-[260px] gap-4 rounded-[28px] bg-slate-100 p-4">
              <motion.div
                layout
                className="grid flex-[1_1_140px] place-items-center rounded-3xl bg-slate-950 p-4 text-center font-black text-white"
              >
                Normal item
              </motion.div>

              <motion.div
                layout
                className="grid place-items-center rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-4 text-center font-black text-white"
                style={{
                  flexGrow: grow,
                  flexShrink: shrink,
                  flexBasis: basis,
                }}
              >
                Special item
              </motion.div>

              <motion.div
                layout
                className="grid flex-[1_1_140px] place-items-center rounded-3xl bg-slate-950 p-4 text-center font-black text-white"
              >
                Normal item
              </motion.div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaObjectGroup}
        label="Align comparison"
        title="align-items vs align-content"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Qaysi property?"
              value={alignMode}
              setValue={setAlignMode}
              options={[
                ["items", "align-items"],
                ["content", "align-content"],
              ]}
            />

            <ButtonGroup
              title="Qiymat"
              value={alignValue}
              setValue={setAlignValue}
              options={[
                ["stretch", "stretch"],
                ["flex-start", "flex-start"],
                ["center", "center"],
                ["flex-end", "flex-end"],
                ["space-between", "space-between"],
                ["space-around", "space-around"],
              ]}
            />

            <div className="rounded-[32px] border border-violet-400/20 bg-violet-400/10 p-5 text-slate-300">
              <b className="text-violet-300">align-items</b> bitta qatordagi
              itemlarni cross axis bo‘yicha tekislaydi.
              <br />
              <br />
              <b className="text-violet-300">align-content</b> esa wrap bo‘lgan
              ko‘p qatorlarning umumiy joylashuvini boshqaradi.
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div
              className="flex h-[360px] flex-wrap gap-4 rounded-[28px] bg-slate-100 p-4"
              style={{
                alignItems:
                  alignMode === "items" && !alignValue.includes("space")
                    ? alignValue
                    : "stretch",
                alignContent: alignMode === "content" ? alignValue : "stretch",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  layout
                  className="grid w-[120px] place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-black text-white"
                  style={{
                    height: item % 2 === 0 ? 92 : 62,
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <CodePanel
              className="mt-5"
              code={`.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  ${
    alignMode === "items"
      ? `align-items: ${alignValue};`
      : `align-content: ${alignValue};`
  }
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Nested flexbox"
        title="Flex ichida yana flex layout"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Layout turi"
              value={nestedMode}
              setValue={setNestedMode}
              options={[
                ["dashboard", "Dashboard card"],
                ["navbar", "Navbar"],
                ["pricing", "Pricing card"],
              ]}
            />

            <CodePanel
              code={`.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-actions {
  display: flex;
  gap: 12px;
}`}
            />
          </div>

          <NestedPreview mode={nestedMode} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRandom}
        label="Order playground"
        title="order orqali visual tartibni o‘zgartirish"
        color="text-pink-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setOrderMode(!orderMode)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                orderMode
                  ? "bg-pink-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {orderMode ? "Order o‘zgargan" : "Order normal"}
            </button>

            <div className="rounded-[32px] border border-pink-400/20 bg-pink-400/10 p-5 text-slate-300">
              <b className="text-pink-300">Muhim:</b> order faqat visual
              tartibni o‘zgartiradi. HTML strukturani o‘zgartirmaydi. Juda ko‘p
              ishlatish accessibility uchun noqulay bo‘lishi mumkin.
            </div>

            <CodePanel
              code={
                orderMode
                  ? `.card-a { order: 3; }
.card-b { order: 1; }
.card-c { order: 2; }`
                  : `.card-a { order: 1; }
.card-b { order: 2; }
.card-c { order: 3; }`
              }
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="flex flex-wrap gap-4">
              {[
                ["A", orderMode ? 3 : 1, "from-red-500 to-orange-500"],
                ["B", orderMode ? 1 : 2, "from-cyan-500 to-blue-500"],
                ["C", orderMode ? 2 : 3, "from-emerald-500 to-teal-500"],
              ].map(([label, order, color]) => (
                <motion.div
                  key={label}
                  layout
                  className={`grid h-32 flex-1 basis-[140px] place-items-center rounded-3xl bg-gradient-to-br ${color} text-5xl font-black text-white`}
                  style={{ order }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Amaliy mashg‘ulot"
        title="Murakkab card layout yaratish"
        color="text-amber-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Parent wrapperga display:flex bering",
              "Cardlarga flex-basis orqali boshlang‘ich kenglik bering",
              "Asosiy cardga flex-grow: 2 qilib ko‘ring",
              "Container toraysa flex-shrink qanday ishlashini tekshiring",
              "Card ichida nested flex bilan header/action qismini joylang",
              "order orqali mobile/desktop tartibni sinab ko‘ring",
              "align-items va align-content farqini wrap bilan ko‘rsating",
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
            <div className="flex flex-wrap gap-4">
              <div className="flex-[2_1_260px] rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 p-6 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-2xl font-black">Main Card</h4>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black">
                    grow: 2
                  </span>
                </div>
                <p className="text-white/80">
                  Bu card ko‘proq joy egallaydi va ichida nested flex ishlaydi.
                </p>
              </div>

              <div className="flex-[1_1_180px] rounded-3xl bg-slate-950 p-6 text-white">
                <h4 className="text-xl font-black">Side Card</h4>
                <p className="mt-2 text-sm text-white/60">basis: 180px</p>
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
          title="Flexbox Advanced quiz"
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

function FlexArchitectHero({ grow, shrink, basis, orderMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-amber-600">Flex Architect</p>
          <h3 className="text-2xl font-black md:text-3xl">Advanced Layout</h3>
        </div>
        <FaCrown className="text-4xl text-amber-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-4 text-white">
        <div className="flex gap-3">
          {[
            ["A", orderMode ? 3 : 1],
            ["B", orderMode ? 1 : 2],
            ["C", orderMode ? 2 : 3],
          ].map(([label, order], index) => (
            <motion.div
              key={label}
              layout
              style={{
                order,
                flexGrow: index === 1 ? grow : 1,
                flexShrink: index === 1 ? shrink : 1,
                flexBasis: index === 1 ? basis : 90,
              }}
              className="grid h-24 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 font-black text-slate-950"
            >
              {label}
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-white/10 p-4 font-mono text-xs text-amber-200">
          grow: {grow}; shrink: {shrink}; basis: {basis}px;
        </div>
      </div>
    </motion.div>
  );
}

function NestedPreview({ mode }) {
  return (
    <div className="rounded-[32px] bg-white p-5 text-slate-950">
      {mode === "dashboard" && (
        <div className="flex flex-col gap-4 rounded-[28px] bg-slate-100 p-5">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-black">Dashboard</h4>
            <button className="rounded-xl bg-cyan-500 px-4 py-2 font-black text-white">
              New
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Revenue", "Students", "Tasks"].map((item) => (
              <div
                key={item}
                className="flex-1 basis-[140px] rounded-2xl bg-white p-4"
              >
                <p className="text-sm text-slate-500">{item}</p>
                <h5 className="text-2xl font-black">24k</h5>
              </div>
            ))}
          </div>
        </div>
      )}

      {mode === "navbar" && (
        <div className="rounded-[28px] bg-slate-950 p-5 text-white">
          <div className="flex items-center justify-between">
            <strong>Brand</strong>
            <nav className="flex gap-4 text-sm text-white/70">
              <span>Home</span>
              <span>Course</span>
              <span>Contact</span>
            </nav>
          </div>
        </div>
      )}

      {mode === "pricing" && (
        <div className="flex flex-col gap-5 rounded-[28px] bg-gradient-to-br from-violet-600 to-cyan-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-black">Premium</h4>
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-black">
              Popular
            </span>
          </div>
          <p className="text-white/80">Nested flex card header + actions.</p>
          <div className="flex gap-3">
            <button className="flex-1 rounded-2xl bg-white px-4 py-3 font-black text-violet-600">
              Buy
            </button>
            <button className="rounded-2xl bg-white/20 px-4 py-3 font-black">
              Info
            </button>
          </div>
        </div>
      )}
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
      <p className="mb-3 text-sm font-black text-slate-400">Code:</p>
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
      <Icon className="mb-3 text-2xl text-amber-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-amber-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
