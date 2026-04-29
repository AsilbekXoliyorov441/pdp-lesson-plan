import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaExchangeAlt,
  FaHourglassHalf,
  FaMagic,
  FaMousePointer,
  FaPlay,
  FaRedoAlt,
  FaSpinner,
  FaStopwatch,
  FaTimesCircle,
} from "react-icons/fa";
import { MdAnimation, MdQuiz } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const tabs = {
  transition: {
    title: "transition",
    color: "from-cyan-500 to-blue-500",
    desc: "Transition — element holati o‘zgarganda silliq o‘tish beradi. Masalan hover bo‘lganda rang, scale yoki shadow asta o‘zgaradi.",
    code: `.button {
  transition: 0.3s ease;
}

.button:hover {
  transform: translateY(-6px);
  background-color: #22d3ee;
}`,
  },
  animation: {
    title: "animation",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Animation — o‘zi avtomatik harakat qiladi. Hover shart emas. @keyframes orqali bosqichma-bosqich harakat yoziladi.",
    code: `.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  keyframes: {
    title: "@keyframes",
    color: "from-emerald-500 to-teal-500",
    desc: "@keyframes animatsiyaning qaysi bosqichda qanday ko‘rinishini belgilaydi: 0%, 50%, 100%.",
    code: `@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-18px);
  }
}`,
  },
};

const quiz = [
  {
    question: "transition qachon ishlaydi?",
    options: ["Holat o‘zgarganda", "Har doim avtomatik", "Faqat image’da"],
    correct: 0,
  },
  {
    question: "animation nima bilan yoziladi?",
    options: ["@keyframes bilan", "href bilan", "alt bilan"],
    correct: 0,
  },
  {
    question: "animation-duration nima qiladi?",
    options: [
      "Animatsiya davomiyligini belgilaydi",
      "Matn rangini beradi",
      "Elementni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "animation-delay nima qiladi?",
    options: [
      "Animatsiyani kechiktirib boshlaydi",
      "Rasmni siqadi",
      "Input valid qiladi",
    ],
    correct: 0,
  },
  {
    question: "iteration-count: infinite nima qiladi?",
    options: ["Cheksiz takrorlaydi", "Bir marta ishlatadi", "CSSni o‘chiradi"],
    correct: 0,
  },
  {
    question: "Loader uchun qaysi animation ko‘p ishlatiladi?",
    options: ["rotate/spin", "text-align", "list-style"],
    correct: 0,
  },
  {
    question: "Modal fade-in uchun odatda nima o‘zgaradi?",
    options: ["opacity va transform", "font-family", "border-style"],
    correct: 0,
  },
];

export default function CssM3L8() {
  const [activeTab, setActiveTab] = useState("transition");
  const [duration, setDuration] = useState(1);
  const [delay, setDelay] = useState(0);
  const [iteration, setIteration] = useState("infinite");
  const [modalOpen, setModalOpen] = useState(false);
  const [loaderType, setLoaderType] = useState("spin");
  const [bounce, setBounce] = useState(true);
  const [answers, setAnswers] = useState({});

  const tab = tabs[activeTab];

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
        className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-gradient-to-br from-[#061525] via-[#0b1020] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS • Module 3 • 8-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Transition va Animation: sahifani harakatga keltiramiz
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun transition va animation farqi, @keyframes,
              animation-duration, delay, iteration-count, loader, fade-in/out
              modal va bouncing button yaratamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaExchangeAlt}
                title="Transition"
                text="hover motion"
              />
              <HeroBadge
                icon={MdAnimation}
                title="Animation"
                text="@keyframes"
              />
              <HeroBadge icon={FaSpinner} title="Loader" text="spin effect" />
            </div>
          </div>

          <MotionHero
            duration={duration}
            delay={delay}
            iteration={iteration}
            bounce={bounce}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaBolt}
        label="Farqi"
        title="transition va animation farqi"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <FaExchangeAlt className="mb-4 text-5xl text-cyan-300" />
            <h4 className="mb-3 text-3xl font-black text-white">transition</h4>
            <p className="leading-8 text-slate-300">
              Bir holatdan ikkinchi holatga silliq o‘tadi. Odatda hover, focus,
              active kabi holatlar bilan ishlaydi.
            </p>
          </div>

          <div className="rounded-[32px] border border-violet-400/20 bg-violet-400/10 p-6">
            <MdAnimation className="mb-4 text-5xl text-violet-300" />
            <h4 className="mb-3 text-3xl font-black text-white">animation</h4>
            <p className="leading-8 text-slate-300">
              O‘zi mustaqil harakat qiladi. @keyframes orqali 0%, 50%, 100%
              bosqichlari yoziladi.
            </p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Motion map"
        title="transition, animation va @keyframes"
        color="text-violet-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(tabs).map(([key, item]) => (
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
              initial={{ opacity: 0, x: -22, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 22, scale: 0.97 }}
              className={`rounded-[32px] bg-gradient-to-br ${tab.color} p-7`}
            >
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                {tab.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {tab.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={tab.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaStopwatch}
        label="Animation controls"
        title="duration, delay va iteration-count boshqaruvi"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`animation-duration: ${duration}s`}
              min={0.3}
              max={4}
              step={0.1}
              value={duration}
              onChange={setDuration}
            />

            <RangeControl
              label={`animation-delay: ${delay}s`}
              min={0}
              max={3}
              step={0.1}
              value={delay}
              onChange={setDelay}
            />

            <ButtonGroup
              title="animation-iteration-count"
              value={iteration}
              setValue={setIteration}
              options={[
                ["1", "1"],
                ["3", "3"],
                ["infinite", "infinite"],
              ]}
            />

            <button
              type="button"
              onClick={() => setBounce(!bounce)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                bounce
                  ? "bg-emerald-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {bounce ? "Animation yoqilgan" : "Animation o‘chirilgan"}
            </button>
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid min-h-[360px] place-items-center rounded-[28px] bg-slate-100">
              <div
                className={`grid h-40 w-40 place-items-center rounded-[32px] bg-gradient-to-br from-emerald-500 to-cyan-500 text-center text-2xl font-black text-white shadow-2xl ${
                  bounce ? "animate-bounce" : ""
                }`}
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  animationIterationCount: iteration,
                }}
              >
                Bounce
              </div>
            </div>

            <CodePanel
              className="mt-5"
              code={`.box {
  animation-name: bounce;
  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-iteration-count: ${iteration};
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaSpinner}
        label="Loader"
        title="CSS loader yaratish"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Loader turi"
              value={loaderType}
              setValue={setLoaderType}
              options={[
                ["spin", "Spin"],
                ["pulse", "Pulse"],
                ["dots", "Dots"],
              ]}
            />

            <CodePanel
              code={
                loaderType === "spin"
                  ? `.loader {
  width: 54px;
  height: 54px;
  border: 5px solid rgba(255,255,255,.15);
  border-top-color: #22d3ee;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`
                  : loaderType === "pulse"
                    ? `.loader {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #22d3ee;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  50% { transform: scale(1.25); opacity: .45; }
}`
                    : `.dot {
  animation: up 0.7s ease-in-out infinite alternate;
}

.dot:nth-child(2) { animation-delay: .15s; }
.dot:nth-child(3) { animation-delay: .3s; }

@keyframes up {
  to { transform: translateY(-14px); }
}`
              }
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid min-h-[300px] place-items-center rounded-[28px] bg-slate-950">
              {loaderType === "spin" && (
                <div className="h-16 w-16 animate-spin rounded-full border-[6px] border-white/15 border-t-cyan-400" />
              )}

              {loaderType === "pulse" && (
                <div className="h-20 w-20 animate-ping rounded-full bg-cyan-400" />
              )}

              {loaderType === "dots" && (
                <div className="flex gap-4">
                  {[0, 1, 2].map((item) => (
                    <div
                      key={item}
                      className="h-5 w-5 animate-bounce rounded-full bg-cyan-400"
                      style={{ animationDelay: `${item * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Modal"
        title="Fade-in / fade-out modal"
        color="text-pink-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full cursor-pointer rounded-3xl bg-pink-400 px-5 py-4 font-black text-slate-950 transition hover:bg-pink-300 active:scale-95"
            >
              Modal ochish
            </button>

            <CodePanel
              code={`.modal {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
  transition: 0.3s ease;
}

.modal.active {
  opacity: 1;
  transform: translateY(0) scale(1);
}`}
            />
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid h-full min-h-[280px] place-items-center rounded-[28px] bg-slate-100">
              <p className="text-center text-slate-500">
                Modal ochilganda opacity va transform bilan silliq chiqadi.
              </p>
            </div>

            <AnimatePresence>
              {modalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 grid place-items-center bg-slate-950/70 p-5 backdrop-blur"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.94 }}
                    className="w-full max-w-sm rounded-[28px] bg-white p-6 text-slate-950 shadow-2xl"
                  >
                    <h4 className="text-3xl font-black">Fade Modal</h4>
                    <p className="mt-3 text-slate-600">
                      Bu modal fade-in va fade-out effect bilan chiqadi.
                    </p>
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="mt-5 cursor-pointer rounded-2xl bg-slate-950 px-5 py-3 font-black text-white"
                    >
                      Yopish
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMousePointer}
        label="Amaliy mashg‘ulot"
        title="Loader, fade modal va bouncing button"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Button uchun transition yozing",
              "Hoverda translateY yoki scale qo‘shing",
              "@keyframes spin bilan loader yarating",
              "animation-duration va infinite ishlating",
              "Modal uchun opacity + transform transition yozing",
              "Bouncing button uchun @keyframes bounce yarating",
              "Mobile’da animation juda ko‘p bo‘lib ketmasin",
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

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="rounded-[28px] bg-slate-950 p-6 text-white">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/15 border-t-cyan-400" />
              </div>

              <button className="w-full cursor-pointer animate-bounce rounded-2xl bg-cyan-400 px-5 py-4 font-black text-slate-950 transition hover:bg-cyan-300 active:scale-95">
                Bouncing Button
              </button>
            </div>

            <CodePanel
              className="mt-5"
              code={`.button {
  transition: 0.3s ease;
  animation: bounce 1s infinite;
}

.button:hover {
  transform: translateY(-6px);
}

@keyframes bounce {
  50% {
    transform: translateY(-12px);
  }
}`}
            />
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
          title="Transition va Animation quiz"
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

function MotionHero({ duration, delay, iteration, bounce }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Motion Preview</p>
          <h3 className="text-2xl font-black md:text-3xl">Animation Lab</h3>
        </div>
        <MdAnimation className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="grid min-h-[310px] place-items-center rounded-[28px] bg-slate-950 p-5 text-white">
        <div
          className={`grid h-44 w-44 place-items-center rounded-[32px] bg-gradient-to-br from-cyan-400 to-violet-500 text-center text-xl font-black shadow-2xl ${
            bounce ? "animate-bounce" : ""
          }`}
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            animationIterationCount: iteration,
          }}
        >
          CSS Motion
        </div>
      </div>
    </motion.div>
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
        className="w-full cursor-pointer accent-cyan-400"
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
      <Icon className="mb-3 text-2xl text-cyan-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
