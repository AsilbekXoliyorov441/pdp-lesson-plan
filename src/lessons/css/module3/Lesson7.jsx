import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaCode,
  FaCube,
  FaExchangeAlt,
  FaEye,
  FaLayerGroup,
  FaMousePointer,
  FaRedoAlt,
  FaTimesCircle,
} from "react-icons/fa";
import { Md3dRotation, MdQuiz, MdTransform } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const transformTabs = {
  scale: {
    title: "scale()",
    color: "from-emerald-500 to-teal-500",
    desc: "Elementni kattalashtirish yoki kichraytirish uchun ishlatiladi. Card hover effectlarda juda ko‘p ishlatiladi.",
    code: `.card:hover {
  transform: scale(1.08);
}`,
  },
  rotate: {
    title: "rotate()",
    color: "from-orange-500 to-red-500",
    desc: "Elementni aylantirish uchun ishlatiladi. Badge, icon, card hoverlarda qiziqarli effekt beradi.",
    code: `.icon:hover {
  transform: rotate(12deg);
}`,
  },
  translate: {
    title: "translate()",
    color: "from-cyan-500 to-blue-500",
    desc: "Elementni X yoki Y yo‘nalishda siljitadi. Hoverda cardni tepaga ko‘tarish uchun juda qulay.",
    code: `.card:hover {
  transform: translateY(-12px);
}`,
  },
  skew: {
    title: "skew()",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Elementni qiyshaytiradi. Dekorativ designlarda ehtiyotkorlik bilan ishlatiladi.",
    code: `.shape {
  transform: skew(-8deg);
}`,
  },
};

const origins = [
  "center",
  "top left",
  "top right",
  "bottom left",
  "bottom right",
];

const quiz = [
  {
    question: "scale() nima qiladi?",
    options: [
      "Elementni kattalashtiradi/kichraytiradi",
      "Matn rangini o‘zgartiradi",
      "Elementni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "rotate() nima qiladi?",
    options: [
      "Elementni aylantiradi",
      "Input valid qiladi",
      "Rasm formatini o‘zgartiradi",
    ],
    correct: 0,
  },
  {
    question: "translateY(-10px) nima qiladi?",
    options: [
      "Elementni tepaga siljitadi",
      "Elementni pastga tushiradi",
      "Elementni aylantiradi",
    ],
    correct: 0,
  },
  {
    question: "skew() nima qiladi?",
    options: [
      "Elementni qiyshaytiradi",
      "Font ulaydi",
      "Border rangini beradi",
    ],
    correct: 0,
  },
  {
    question: "transform-origin nima uchun kerak?",
    options: [
      "Transform qaysi nuqtadan boshlanishini belgilaydi",
      "Font family tanlaydi",
      "Elementni flex qiladi",
    ],
    correct: 0,
  },
  {
    question: "3D card flip uchun qaysi transform ishlatiladi?",
    options: ["rotateY()", "text-align", "line-height"],
    correct: 0,
  },
  {
    question: "Transform smooth bo‘lishi uchun nima kerak?",
    options: ["transition", "list-style", "alt"],
    correct: 0,
  },
];

export default function CssM3L7() {
  const [activeTab, setActiveTab] = useState("scale");
  const [scale, setScale] = useState(1.08);
  const [rotate, setRotate] = useState(8);
  const [translate, setTranslate] = useState(-14);
  const [skew, setSkew] = useState(0);
  const [origin, setOrigin] = useState("center");
  const [flip, setFlip] = useState(false);
  const [answers, setAnswers] = useState({});

  const active = transformTabs[activeTab];

  const transformValue = `translateY(${translate}px) rotate(${rotate}deg) scale(${scale}) skew(${skew}deg)`;

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
        className="relative overflow-hidden rounded-[38px] border border-purple-400/20 bg-gradient-to-br from-[#150726] via-[#0b1020] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-purple-300">
              <HiSparkles />
              CSS • Module 3 • 7-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              CSS Transform: 2D va 3D hover effektlar
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun scale, rotate, translate, skew, transform-origin,
              kombinatsiyalar va 3D card flip orqali professional hover card
              animatsiyalari yaratamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={MdTransform} title="2D" text="scale/rotate" />
              <HeroBadge icon={FaCube} title="3D" text="card flip" />
              <HeroBadge
                icon={FaMousePointer}
                title="Hover"
                text="interactive card"
              />
            </div>
          </div>

          <TransformHero
            transformValue={transformValue}
            origin={origin}
            flip={flip}
            setFlip={setFlip}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdTransform}
        label="Transform nima?"
        title="Elementni joyidan ko‘chirmasdan vizual o‘zgartirish"
        color="text-purple-300"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          <InfoCard
            icon={FaExchangeAlt}
            title="translate"
            text="Elementni X/Y bo‘yicha siljitadi."
          />
          <InfoCard
            icon={FaRedoAlt}
            title="rotate"
            text="Elementni berilgan gradusga aylantiradi."
          />
          <InfoCard
            icon={FaBoxOpen}
            title="scale"
            text="Elementni kattalashtiradi yoki kichraytiradi."
          />
          <InfoCard
            icon={FaLayerGroup}
            title="skew"
            text="Elementni dekorativ tarzda qiyshaytiradi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Transform map"
        title="scale, rotate, translate va skew farqlari"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(transformTabs).map(([key, item]) => (
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
              className={`rounded-[32px] bg-gradient-to-br ${active.color} p-7`}
            >
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                {active.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {active.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={active.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaEye}
        label="Live playground"
        title="Transform kombinatsiyasini o‘zingiz boshqaring"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`scale: ${scale}`}
              min={0.7}
              max={1.5}
              step={0.01}
              value={scale}
              onChange={setScale}
            />
            <RangeControl
              label={`rotate: ${rotate}deg`}
              min={-35}
              max={35}
              value={rotate}
              onChange={setRotate}
            />
            <RangeControl
              label={`translateY: ${translate}px`}
              min={-60}
              max={60}
              value={translate}
              onChange={setTranslate}
            />
            <RangeControl
              label={`skew: ${skew}deg`}
              min={-25}
              max={25}
              value={skew}
              onChange={setSkew}
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid min-h-[360px] place-items-center rounded-[28px] bg-slate-100 p-6">
              <motion.div
                animate={{
                  transform: transformValue,
                  transformOrigin: origin,
                }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
                className="grid h-44 w-44 place-items-center rounded-[32px] bg-gradient-to-br from-emerald-500 to-cyan-500 text-center text-2xl font-black text-white shadow-2xl"
              >
                Transform
              </motion.div>
            </div>

            <CodePanel
              className="mt-5"
              code={`.card:hover {
  transform: ${transformValue};
  transform-origin: ${origin};
  transition: 0.35s ease;
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Transform origin"
        title="Transform qaysi nuqtadan boshlanishini boshqarish"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {origins.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setOrigin(item)}
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left font-black transition ${
                  origin === item
                    ? "border-yellow-400 bg-yellow-400/15 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/10"
                }`}
              >
                {origin === item ? "✅" : "⬜"} transform-origin: {item}
              </button>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid min-h-[330px] place-items-center rounded-[28px] bg-slate-100">
              <motion.div
                key={origin}
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 18, scale: 1.12 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                }}
                className="grid h-44 w-44 place-items-center rounded-[32px] bg-gradient-to-br from-yellow-400 to-orange-500 font-black text-slate-950"
                style={{ transformOrigin: origin }}
              >
                {origin}
              </motion.div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Md3dRotation}
        label="3D card flip"
        title="rotateY bilan 3D card flip"
        color="text-pink-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setFlip(!flip)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                flip
                  ? "bg-pink-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {flip ? "Back side" : "Front side"}
            </button>

            <CodePanel
              code={`.flip-card {
  perspective: 1000px;
}

.flip-inner {
  transform-style: preserve-3d;
  transition: 0.6s;
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.front,
.back {
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}`}
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid min-h-[360px] place-items-center rounded-[28px] bg-slate-100 [perspective:1000px]">
              <motion.div
                animate={{ rotateY: flip ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-64 w-52 [transform-style:preserve-3d]"
              >
                <div className="absolute inset-0 grid place-items-center rounded-[32px] bg-gradient-to-br from-pink-500 to-violet-600 p-6 text-center text-white shadow-2xl [backface-visibility:hidden]">
                  <div>
                    <FaCube className="mx-auto mb-4 text-5xl" />
                    <h4 className="text-3xl font-black">Front</h4>
                    <p className="mt-2 text-white/75">Hover card</p>
                  </div>
                </div>

                <div className="absolute inset-0 grid place-items-center rounded-[32px] bg-gradient-to-br from-cyan-500 to-emerald-500 p-6 text-center text-white shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div>
                    <HiSparkles className="mx-auto mb-4 text-5xl" />
                    <h4 className="text-3xl font-black">Back</h4>
                    <p className="mt-2 text-white/75">3D transform</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMousePointer}
        label="Amaliy mashg‘ulot"
        title="Hover card transform animatsiyasi"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Card yarating va border-radius, shadow bering",
              "Cardga transition qo‘shing",
              "hover holatda translateY(-12px) bering",
              "hover holatda scale(1.03) qo‘shing",
              "Icon yoki imagega rotate effect bering",
              "transform-origin qiymatini sinab ko‘ring",
              "3D flip card variantini alohida yarating",
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
            <div className="grid gap-4 md:grid-cols-3">
              {["Scale", "Rotate", "Translate"].map((item, index) => (
                <div
                  key={item}
                  className={`group rounded-3xl bg-gradient-to-br ${
                    index === 0
                      ? "from-emerald-500 to-cyan-500"
                      : index === 1
                        ? "from-orange-500 to-pink-500"
                        : "from-violet-500 to-purple-600"
                  } p-5 text-white shadow-xl transition duration-300 hover:-translate-y-3 hover:scale-105`}
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-2xl transition duration-300 group-hover:rotate-12">
                    <FaCube />
                  </div>
                  <h4 className="text-2xl font-black">{item}</h4>
                  <p className="mt-2 text-sm text-white/75">
                    Hover qilib transform effektni ko‘ring.
                  </p>
                </div>
              ))}
            </div>

            <CodePanel
              className="mt-5"
              code={`.card {
  transition: 0.35s ease;
}

.card:hover {
  transform: translateY(-12px) scale(1.03);
}

.card:hover .icon {
  transform: rotate(12deg);
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
          title="Transform quiz"
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

function TransformHero({ transformValue, origin, flip, setFlip }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-purple-600">Transform Studio</p>
          <h3 className="text-2xl font-black md:text-3xl">2D + 3D Preview</h3>
        </div>
        <Md3dRotation className="text-4xl text-purple-500 md:text-5xl" />
      </div>

      <div className="grid min-h-[310px] place-items-center rounded-[28px] bg-slate-950 p-5 [perspective:1000px]">
        <motion.button
          type="button"
          onClick={() => setFlip(!flip)}
          animate={{
            rotateY: flip ? 180 : 0,
          }}
          whileHover={{
            transform: transformValue,
          }}
          transition={{ duration: 0.45 }}
          className="relative h-48 w-48 cursor-pointer rounded-[32px] bg-gradient-to-br from-purple-500 to-cyan-500 p-5 text-center font-black text-white shadow-2xl [transform-style:preserve-3d]"
          style={{ transformOrigin: origin }}
        >
          <span className="grid h-full place-items-center [backface-visibility:hidden]">
            Hover / Click
          </span>
        </motion.button>
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
        className="w-full cursor-pointer accent-purple-400"
      />
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
      <Icon className="mb-3 text-2xl text-purple-300 md:text-3xl" />
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
      <Icon className="mb-4 text-4xl text-purple-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
