import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAnchor,
  FaCheckCircle,
  FaCode,
  FaCrown,
  FaLayerGroup,
  FaMapPin,
  FaMousePointer,
  FaRocket,
  FaTimes,
  FaTimesCircle,
  FaWindowMaximize,
} from "react-icons/fa";
import { MdQuiz, MdStickyNote2 } from "react-icons/md";
import { HiMiniCursorArrowRays, HiSparkles } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const positions = {
  static: {
    title: "static",
    color: "from-slate-500 to-slate-700",
    desc: "Default holat. Element normal oqimda turadi. top, left, right, bottom ishlamaydi.",
    code: `.box {
  position: static;
}`,
  },
  relative: {
    title: "relative",
    color: "from-blue-500 to-cyan-500",
    desc: "Element o‘z joyini saqlaydi, lekin top/left orqali biroz siljitish mumkin.",
    code: `.box {
  position: relative;
  top: 20px;
  left: 20px;
}`,
  },
  absolute: {
    title: "absolute",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Element normal oqimdan chiqadi. Eng yaqin position berilgan parentga nisbatan joylashadi.",
    code: `.parent {
  position: relative;
}

.box {
  position: absolute;
  top: 20px;
  right: 20px;
}`,
  },
  fixed: {
    title: "fixed",
    color: "from-emerald-500 to-teal-500",
    desc: "Viewportga yopishadi. Scroll qilinsa ham joyida qoladi. Chat button, fixed menu uchun qulay.",
    code: `.button {
  position: fixed;
  right: 24px;
  bottom: 24px;
}`,
  },
  sticky: {
    title: "sticky",
    color: "from-orange-500 to-amber-500",
    desc: "Oddiy oqimda turadi, lekin scroll vaqtida belgilangan joyga yopishib qoladi.",
    code: `.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
}`,
  },
};

const quiz = [
  {
    question: "position: static da top/left ishlaydimi?",
    options: [
      "Yo‘q, ishlamaydi",
      "Ha, doim ishlaydi",
      "Faqat mobile’da ishlaydi",
    ],
    correct: 0,
  },
  {
    question: "absolute element qaysi parentga nisbatan joylashadi?",
    options: [
      "Eng yaqin position berilgan parentga",
      "Faqat bodyga",
      "Faqat headerga",
    ],
    correct: 0,
  },
  {
    question: "sticky navbar uchun eng muhim property qaysi?",
    options: ["top: 0", "font-size", "opacity: 0"],
    correct: 0,
  },
  {
    question: "Modal oynada z-index nima uchun kerak?",
    options: [
      "Modal boshqa elementlardan tepada chiqishi uchun",
      "Matnni qalin qilish uchun",
      "Rasmni yuklash uchun",
    ],
    correct: 0,
  },
  {
    question: "fixed element scroll paytida nima qiladi?",
    options: [
      "Ekranda joyida qoladi",
      "Yo‘qolib ketadi",
      "Parent ichida aylanadi",
    ],
    correct: 0,
  },
];

export default function CssM3L3() {
  const [activePosition, setActivePosition] = useState("relative");
  const [showModal, setShowModal] = useState(false);
  const [zIndex, setZIndex] = useState(20);
  const [tooltipSide, setTooltipSide] = useState("top");
  const [answers, setAnswers] = useState({});

  const position = positions[activePosition];

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
        className="relative overflow-hidden rounded-[38px] border border-blue-400/20 bg-gradient-to-br from-[#07111f] via-[#10133a] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-300">
              <FaCrown />
              CSS • Module 3 • 3-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Position: elementlarni professional joylashtirish
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun static, relative, absolute, fixed, sticky farqlarini,
              z-index xatolarini, sticky navbar, modal va tooltip yasashni
              amaliy ko‘rinishda o‘rganamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaMapPin} title="Position" text="joylashuv" />
              <HeroBadge
                icon={MdStickyNote2}
                title="Sticky"
                text="scroll navbar"
              />
              <HeroBadge
                icon={FaWindowMaximize}
                title="Modal"
                text="overlay oyna"
              />
            </div>
          </div>

          <PositionHero activePosition={activePosition} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLayerGroup}
        label="Position types"
        title="static, relative, absolute, fixed, sticky farqlari"
        color="text-blue-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(positions).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePosition(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activePosition === key
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
              key={activePosition}
              initial={{ opacity: 0, x: -20, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.97 }}
              className={`rounded-[32px] bg-gradient-to-br ${position.color} p-7`}
            >
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                position: {position.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {position.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={position.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaAnchor}
        label="Live demo"
        title="Position preview: element qanday joylashadi?"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 text-slate-300">
              <b className="text-cyan-300">relative</b> o‘z joyini saqlaydi.
              <br />
              <br />
              <b className="text-cyan-300">absolute</b> parent ichida erkin
              joylashadi.
              <br />
              <br />
              <b className="text-cyan-300">fixed</b> viewportga yopishadi.
              <br />
              <br />
              <b className="text-cyan-300">sticky</b> scroll vaqtida tepaga
              yopishadi.
            </div>

            <CodePanel
              code={`.demo-parent {
  position: relative;
}

.demo-box {
  position: ${activePosition};
  top: 24px;
  right: 24px;
}`}
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-slate-100 p-5">
              <div className="mb-4 rounded-2xl bg-slate-950 p-4 text-center font-black text-white">
                Parent container
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 rounded-2xl bg-slate-200" />
                <div className="h-24 rounded-2xl bg-slate-200" />
                <div className="h-24 rounded-2xl bg-slate-200" />
                <div className="h-24 rounded-2xl bg-slate-200" />
              </div>

              <motion.div
                layout
                className={`grid h-24 w-32 place-items-center rounded-3xl bg-gradient-to-br ${position.color} text-center font-black text-white shadow-xl`}
                style={
                  activePosition === "absolute"
                    ? { position: "absolute", top: 92, right: 26 }
                    : activePosition === "relative"
                      ? { position: "relative", top: 20, left: 20 }
                      : activePosition === "fixed"
                        ? { position: "absolute", right: 26, bottom: 26 }
                        : activePosition === "sticky"
                          ? { position: "absolute", top: 92, left: 26 }
                          : { position: "static" }
                }
              >
                {activePosition}
              </motion.div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdStickyNote2}
        label="Sticky navbar"
        title="Scroll paytida tepada qoladigan navbar"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <CodePanel
            code={`.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
}`}
          />

          <div className="h-[390px] overflow-y-auto rounded-[32px] bg-white p-5 text-slate-950">
            <div className="sticky top-0 z-20 mb-5 flex items-center justify-between rounded-3xl border border-blue-200 bg-white/80 p-4 shadow-lg backdrop-blur-xl">
              <strong className="text-blue-600">Sticky Navbar</strong>
              <div className="flex gap-2 text-sm font-bold text-slate-500">
                <span>Home</span>
                <span>Course</span>
                <span>Contact</span>
              </div>
            </div>

            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="rounded-3xl bg-slate-100 p-6">
                  <h4 className="text-xl font-black">
                    Content block {index + 1}
                  </h4>
                  <p className="mt-2 text-slate-500">
                    Scroll qiling. Navbar tepada yopishib qoladi.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Z-index lab"
        title="Z-index xatolarini tushunish"
        color="text-fuchsia-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`Blue card z-index: ${zIndex}`}
              min={0}
              max={50}
              value={zIndex}
              onChange={setZIndex}
            />

            <div className="rounded-[28px] border border-fuchsia-400/20 bg-fuchsia-400/10 p-5 text-slate-300">
              z-index ishlashi uchun ko‘pincha elementda{" "}
              <b className="text-fuchsia-300">position</b> bo‘lishi kerak:
              relative, absolute, fixed yoki sticky.
            </div>

            <CodePanel
              code={`.blue-card {
  position: relative;
  z-index: ${zIndex};
}`}
            />
          </div>

          <div className="relative min-h-[330px] rounded-[32px] bg-white p-5 text-slate-950">
            <motion.div
              layout
              className="absolute left-12 top-16 grid h-44 w-44 place-items-center rounded-[32px] bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl font-black text-white shadow-xl"
              style={{ zIndex }}
            >
              Blue
            </motion.div>

            <div className="absolute left-36 top-32 z-30 grid h-44 w-44 place-items-center rounded-[32px] bg-gradient-to-br from-fuchsia-500 to-violet-600 text-2xl font-black text-white shadow-xl">
              Purple
            </div>

            <div className="absolute bottom-5 left-5 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-600">
              Purple z-index: 30
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMousePointer}
        label="Tooltip"
        title="Hover bo‘lganda chiqadigan tooltip"
        color="text-amber-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ButtonGroup
            title="Tooltip joylashuvi"
            value={tooltipSide}
            setValue={setTooltipSide}
            options={[
              ["top", "Top"],
              ["right", "Right"],
              ["bottom", "Bottom"],
              ["left", "Left"],
            ]}
          />

          <div className="grid min-h-[280px] place-items-center rounded-[32px] bg-white p-5 text-slate-950">
            <div className="group relative">
              <button className="rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-black text-white shadow-xl">
                Hover me
              </button>

              <div
                className={`pointer-events-none absolute rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white opacity-0 shadow-xl transition group-hover:opacity-100 ${
                  tooltipSide === "top"
                    ? "bottom-full left-1/2 mb-3 -translate-x-1/2"
                    : tooltipSide === "bottom"
                      ? "left-1/2 top-full mt-3 -translate-x-1/2"
                      : tooltipSide === "right"
                        ? "left-full top-1/2 ml-3 -translate-y-1/2"
                        : "right-full top-1/2 mr-3 -translate-y-1/2"
                }`}
              >
                Tooltip text
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaWindowMaximize}
        label="Modal practice"
        title="Modal oyna yasash"
        color="text-blue-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <button
              onClick={() => setShowModal(true)}
              className="w-full cursor-pointer rounded-3xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-5 text-lg font-black text-white shadow-xl transition hover:scale-[1.02]"
            >
              Modal ochish
            </button>

            <CodePanel
              code={`.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
}

.modal {
  position: relative;
  z-index: 101;
}`}
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="rounded-[28px] bg-slate-100 p-6">
              <h4 className="text-2xl font-black">Modal qachon kerak?</h4>
              <p className="mt-3 leading-7 text-slate-600">
                Login, delete confirmation, image preview, product details,
                notification va formalar uchun modal juda ko‘p ishlatiladi.
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Amaliy mashg‘ulot"
        title="Sticky header va modal oyna yasash"
        color="text-emerald-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Headerga position: sticky va top: 0 bering",
            "Headerga z-index: 50 bering",
            "Backdrop blur orqali premium effekt qo‘shing",
            "Modal overlay uchun position: fixed va inset: 0 ishlating",
            "Modal oynani markazga flex orqali joylashtiring",
            "Close button qo‘shing",
            "Tooltipni absolute bilan button yoniga chiqaring",
            "Z-index qiymatlarini tartibli yozing",
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
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-400/10 to-violet-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="CSS Position quiz"
          color="text-blue-300"
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

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 25 }}
              className="w-full max-w-lg rounded-[36px] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                    Modal demo
                  </p>
                  <h3 className="text-2xl font-black">
                    Position fixed ishladi
                  </h3>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700"
                >
                  <FaTimes />
                </button>
              </div>

              <p className="leading-7 text-slate-600">
                Bu modal overlay fixed orqali butun ekran ustiga chiqdi. z-index
                esa uni boshqa elementlardan yuqorida ko‘rsatdi.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-4 font-black text-white"
              >
                Tushunarli
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function PositionHero({ activePosition }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-blue-600">Position Studio</p>
          <h3 className="text-2xl font-black md:text-3xl">Layout Control</h3>
        </div>
        <HiSparkles className="text-5xl text-blue-500" />
      </div>

      <div className="relative min-h-[280px] overflow-hidden rounded-[28px] bg-slate-950 p-4">
        <div className="sticky top-0 z-20 mb-4 rounded-2xl bg-white/10 p-3 text-center text-sm font-black text-blue-200 backdrop-blur">
          Sticky header
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="h-20 rounded-2xl bg-white/10" />
          <div className="h-20 rounded-2xl bg-white/10" />
          <div className="h-20 rounded-2xl bg-white/10" />
          <div className="h-20 rounded-2xl bg-white/10" />
        </div>

        <motion.div
          layout
          className="absolute bottom-5 right-5 grid h-20 w-28 place-items-center rounded-3xl bg-gradient-to-br from-blue-400 to-violet-600 text-center font-black text-white shadow-xl"
        >
          {activePosition}
        </motion.div>
      </div>
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
        className="w-full cursor-pointer accent-blue-500"
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
      <Icon className="mb-3 text-2xl text-blue-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
