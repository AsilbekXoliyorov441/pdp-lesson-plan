import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCss3Alt,
  FaLayerGroup,
  FaEye,
  FaEyeSlash,
  FaMousePointer,
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaPuzzlePiece,
  FaRulerCombined,
} from "react-icons/fa";
import { MdQuiz, MdViewComfy, MdDashboardCustomize } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const displayTypes = {
  block: {
    title: "display: block",
    color: "from-cyan-500 to-blue-500",
    desc: "Block element yangi qatordan boshlanadi va odatda butun qator kengligini egallaydi.",
    examples: "<div>, <p>, <h1>, <section>, <header>",
    code: `.box {
  display: block;
}`,
  },
  inline: {
    title: "display: inline",
    color: "from-purple-500 to-pink-500",
    desc: "Inline element yangi qator ochmaydi. Matn ichida yonma-yon turadi. Width/height to‘liq ishlamaydi.",
    examples: "<span>, <a>, <del>, <time>",
    code: `.text {
  display: inline;
}`,
  },
  inlineBlock: {
    title: "display: inline-block",
    color: "from-emerald-500 to-teal-500",
    desc: "Inline kabi yonma-yon turadi, lekin block kabi width/height qabul qiladi.",
    examples: "<input>, <img>, <video>, <button>",
    code: `.button {
  display: inline-block;
  width: 160px;
  height: 48px;
}`,
  },
  none: {
    title: "display: none",
    color: "from-red-500 to-orange-500",
    desc: "Element sahifadan butunlay yo‘qoladi. Joyi ham qolmaydi.",
    examples: "Modal yopilganda, mobile menu yashirilganda",
    code: `.menu {
  display: none;
}`,
  },
};

const quiz = [
  {
    question: "display: block qanday ishlaydi?",
    options: [
      "Yangi qatordan boshlanadi",
      "Faqat matn ichida turadi",
      "Elementni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "display: inline elementga width/height berilsa nima bo‘ladi?",
    options: ["To‘liq ishlamaydi", "Har doim ishlaydi", "HTML o‘chadi"],
    correct: 0,
  },
  {
    question: "inline-block nimasi bilan qulay?",
    options: [
      "Yonma-yon turadi va width/height oladi",
      "Faqat yashiradi",
      "Faqat table yaratadi",
    ],
    correct: 0,
  },
  {
    question: "display: none nima qiladi?",
    options: [
      "Elementni joyi bilan yashiradi",
      "Faqat rangini yashiradi",
      "Elementni kattalashtiradi",
    ],
    correct: 0,
  },
  {
    question: "visibility: hidden nima qiladi?",
    options: [
      "Element ko‘rinmaydi, lekin joyi qoladi",
      "Element joyi bilan yo‘qoladi",
      "Elementni yangi qatorga o‘tkazadi",
    ],
    correct: 0,
  },
  {
    question: "span default qaysi display turiga yaqin?",
    options: ["inline", "block", "none"],
    correct: 0,
  },
  {
    question: "button odatda qaysi display turiga o‘xshaydi?",
    options: ["inline-block", "block", "none"],
    correct: 0,
  },
  {
    question: "Pixel perfect degani nima?",
    options: [
      "Elementlar dizaynga aniq mos joylashishi",
      "Faqat ko‘k rang ishlatish",
      "Kod yozmaslik",
    ],
    correct: 0,
  },
];

export default function CssM2L5() {
  const [activeDisplay, setActiveDisplay] = useState("block");
  const [hideMode, setHideMode] = useState("visible");
  const [challenge, setChallenge] = useState({
    title: true,
    image: false,
    button: false,
  });
  const [answers, setAnswers] = useState({});

  const active = displayTypes[activeDisplay];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const challengeScore = Object.values(challenge).filter(Boolean).length;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-indigo-400/20 bg-gradient-to-br from-[#080d2a] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-black text-indigo-300">
              <HiSparkles />
              CSS • Module 2 • 5-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Display elementlarning sahifadagi harakatini boshqaradi
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun block, inline, inline-block, none, visibility hidden va
              display none farqlarini live preview orqali ko‘ramiz. Keyin
              elementlarni pixel-perfect joylashtiramiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={FaLayerGroup}
                title="Display"
                text="block/inline"
              />
              <HeroBadge icon={FaEyeSlash} title="Hide" text="none vs hidden" />
              <HeroBadge
                icon={FaRulerCombined}
                title="Layout"
                text="pixel perfect"
              />
            </div>
          </div>

          <DisplayHero activeDisplay={activeDisplay} />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdViewComfy}
        label="Display nima?"
        title="HTML elementlar sahifada qanday joylashadi?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaLayerGroup}
            title="Display"
            text="Element sahifada qator egallaydimi, yonma-yon turadimi yoki butunlay yashirinadimi — display belgilaydi."
          />
          <InfoCard
            icon={FaCss3Alt}
            title="Default display"
            text="Har HTML tegning default display turi bor. Masalan div block, span inline."
          />
          <InfoCard
            icon={FaPuzzlePiece}
            title="Layout control"
            text="To‘g‘ri display tanlash elementlarni to‘g‘ri joylashtirishning birinchi qadami."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Display playground"
        title="block, inline, inline-block va none farqlarini ko‘ramiz"
        color="text-indigo-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(displayTypes).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDisplay(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeDisplay === key
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
              key={activeDisplay}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${active.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">
                Misollar: {active.examples}
              </p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {active.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{active.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <DisplayPreview type={activeDisplay} />

            <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-black/40 p-4 font-mono text-sm leading-7 text-cyan-300">
              {active.code}
            </pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaEyeSlash}
        label="Hide elements"
        title="visibility: hidden vs display: none"
        color="text-orange-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {[
            ["visible", "Normal"],
            ["hidden", "visibility: hidden"],
            ["none", "display: none"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setHideMode(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                hideMode === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <div className="grid grid-cols-3 gap-4">
              <DemoBox label="Box 1" color="bg-cyan-500" />
              <div
                className={`grid h-28 place-items-center rounded-3xl font-black text-white transition ${
                  hideMode === "none" ? "hidden" : "bg-orange-500"
                }`}
                style={{
                  visibility: hideMode === "hidden" ? "hidden" : "visible",
                }}
              >
                Box 2
              </div>
              <DemoBox label="Box 3" color="bg-purple-500" />
            </div>

            <p className="mt-5 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
              {hideMode === "visible" && "Hamma boxlar ko‘rinib turibdi."}
              {hideMode === "hidden" &&
                "Box 2 ko‘rinmayapti, lekin joyi saqlanib turibdi."}
              {hideMode === "none" &&
                "Box 2 butunlay yo‘qoldi, joyi ham qolmadi."}
            </p>
          </div>

          <CodePanel
            code={
              hideMode === "hidden"
                ? `.box-2 {
  visibility: hidden;
}`
                : hideMode === "none"
                  ? `.box-2 {
  display: none;
}`
                  : `.box-2 {
  display: block;
  visibility: visible;
}`
            }
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdDashboardCustomize}
        label="Element layout"
        title="Sahifada elementlar joylashuvini o‘zgartirish"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <ToggleTask
              active={challenge.title}
              title="Title block bo‘lsin"
              text="Sarlavha alohida qatorda turishi kerak"
              onClick={() =>
                setChallenge({ ...challenge, title: !challenge.title })
              }
            />
            <ToggleTask
              active={challenge.image}
              title="Image inline-block bo‘lsin"
              text="Rasm yonma-yon elementlar bilan ishlashi kerak"
              onClick={() =>
                setChallenge({ ...challenge, image: !challenge.image })
              }
            />
            <ToggleTask
              active={challenge.button}
              title="Button inline-block bo‘lsin"
              text="Button width/height olsin va yonma-yon turishi mumkin bo‘lsin"
              onClick={() =>
                setChallenge({ ...challenge, button: !challenge.button })
              }
            />

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-white">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-black">Pixel perfect score</span>
                <span className="font-black text-emerald-300">
                  {challengeScore}/3
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: `${(challengeScore / 3) * 100}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                />
              </div>
            </div>
          </div>

          <PixelPerfectPreview challenge={challenge} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMousePointer}
        label="Pixel perfect practice"
        title="Dizaynga aniq mos joylashtirish qoidalari"
        color="text-fuchsia-300"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Element turini biling"
            text="div block, span inline, button inline-block kabi."
          />
          <StepCard
            number="02"
            title="Kerakli display tanlang"
            text="Element yonma-yonmi yoki alohida qatordami?"
          />
          <StepCard
            number="03"
            title="Width/height tekshiring"
            text="inline element width/height bilan ishlamasligini unutmang."
          />
          <StepCard
            number="04"
            title="DevTools bilan solishtiring"
            text="Element joyi, o‘lchami va bo‘shliqlarini tekshiring."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Amaliy mashg‘ulot"
        title="Sahifa layoutini pixel-perfect qilish"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Hero section yarating",
              "h1 block sifatida alohida qatorda tursin",
              "span orqali matn ichida rangli so‘z ajrating",
              "buttonlarga inline-block bering",
              "display none orqali mobile menu yashiring",
              "visibility hidden bilan joy saqlanishini tekshiring",
              "DevToolsda element o‘lchamini tekshiring",
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
            <p className="text-cyan-300">.hero-title {"{"}</p>
            <p className="pl-5 text-white">display: block;</p>
            <p className="text-cyan-300">{"}"}</p>
            <br />
            <p className="text-emerald-300">.accent {"{"}</p>
            <p className="pl-5 text-white">display: inline;</p>
            <p className="pl-5 text-white">color: #22c55e;</p>
            <p className="text-emerald-300">{"}"}</p>
            <br />
            <p className="text-purple-300">.btn {"{"}</p>
            <p className="pl-5 text-white">display: inline-block;</p>
            <p className="pl-5 text-white">width: 160px;</p>
            <p className="pl-5 text-white">height: 48px;</p>
            <p className="text-purple-300">{"}"}</p>
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
          title="Display quiz"
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

function DisplayHero({ activeDisplay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-indigo-600">Layout Preview</p>
          <h3 className="text-3xl font-black">Display Mode</h3>
        </div>
        <FaLayerGroup className="text-5xl text-indigo-500" />
      </div>

      <div className="rounded-3xl bg-slate-100 p-5">
        <DisplayPreview type={activeDisplay} />
      </div>

      <div className="mt-4 rounded-2xl bg-slate-950 p-4 font-mono text-sm text-cyan-300">
        display:{" "}
        {activeDisplay === "inlineBlock" ? "inline-block" : activeDisplay};
      </div>
    </motion.div>
  );
}

function DisplayPreview({ type }) {
  const common =
    "rounded-2xl px-5 py-4 font-black text-white shadow-lg transition";

  if (type === "block") {
    return (
      <div className="space-y-3">
        <div className={`${common} block bg-cyan-500`}>Block 1</div>
        <div className={`${common} block bg-blue-500`}>Block 2</div>
        <div className={`${common} block bg-indigo-500`}>Block 3</div>
      </div>
    );
  }

  if (type === "inline") {
    return (
      <div className="rounded-2xl bg-white p-5 leading-[60px]">
        <span className="rounded-xl bg-purple-500 px-4 py-3 font-black text-white">
          inline span
        </span>{" "}
        <a className="rounded-xl bg-pink-500 px-4 py-3 font-black text-white">
          inline link
        </a>{" "}
        <time className="rounded-xl bg-fuchsia-500 px-4 py-3 font-black text-white">
          inline time
        </time>
      </div>
    );
  }

  if (type === "inlineBlock") {
    return (
      <div className="rounded-2xl bg-white p-5">
        {["Button", "Input", "Image"].map((item) => (
          <div
            key={item}
            className="mr-3 inline-block h-20 w-28 rounded-2xl bg-emerald-500 p-4 text-center font-black text-white"
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-5">
      <div className={`${common} bg-red-500`}>Box 1</div>
      <div className="hidden">Hidden Box</div>
      <div className={`${common} mt-3 bg-orange-500`}>Box 3</div>
    </div>
  );
}

function PixelPerfectPreview({ challenge }) {
  return (
    <div className="rounded-[32px] bg-white p-5 text-slate-950">
      <div className="rounded-[30px] bg-gradient-to-br from-indigo-600 to-cyan-500 p-6 text-white">
        <h3
          className={`font-black transition ${
            challenge.title ? "mb-4 block text-4xl" : "inline text-xl"
          }`}
        >
          Pixel Perfect
        </h3>

        <span className="text-white/80">
          elementlarni to‘g‘ri joylashtirish
        </span>

        <div className="mt-6">
          <div
            className={`rounded-3xl bg-white/20 text-center text-5xl backdrop-blur ${
              challenge.image
                ? "mr-4 inline-grid h-32 w-32 place-items-center"
                : "grid h-20 w-full place-items-center"
            }`}
          >
            🖼️
          </div>

          <button
            type="button"
            className={`cursor-pointer rounded-2xl bg-white font-black text-indigo-600 ${
              challenge.button
                ? "inline-block h-14 w-40"
                : "block w-full px-5 py-4 mt-4"
            }`}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

function DemoBox({ label, color }) {
  return (
    <div
      className={`grid h-28 place-items-center rounded-3xl font-black text-white ${color}`}
    >
      {label}
    </div>
  );
}

function ToggleTask({ active, title, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full cursor-pointer rounded-3xl border p-5 text-left transition ${
        active
          ? "border-emerald-400 bg-emerald-400/15"
          : "border-white/10 bg-slate-950/70 hover:bg-white/10"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-black text-white">{title}</h4>
        {active ? (
          <FaCheckCircle className="text-emerald-300" />
        ) : (
          <FaMousePointer className="text-slate-400" />
        )}
      </div>
      <p className="text-sm text-slate-300">{text}</p>
    </button>
  );
}

function CodePanel({ code }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
      <p className="mb-3 text-sm font-black text-slate-400">CSS code:</p>
      <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 font-mono text-sm leading-7 text-cyan-300">
        {code}
      </pre>
    </div>
  );
}

function StepCard({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <span className="text-4xl font-black text-white/20">{number}</span>
      <h4 className="mb-2 mt-4 text-xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
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
      <Icon className="mb-3 text-3xl text-indigo-300" />
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
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
