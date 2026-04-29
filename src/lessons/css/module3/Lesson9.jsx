import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaExclamationTriangle,
  FaEye,
  FaGem,
  FaLayerGroup,
  FaMousePointer,
  FaRocket,
  FaScroll,
  FaServer,
  FaTimesCircle,
} from "react-icons/fa";
import { MdAnimation, MdQuiz, MdSpeed } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const performanceTabs = {
  gpu: {
    title: "GPU",
    color: "from-emerald-500 to-teal-500",
    desc: "GPU transform va opacity kabi animatsiyalarni ancha yengilroq ishlaydi. Shuning uchun hover/scroll effektlarda transform ishlatish yaxshi.",
    code: `.card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  opacity: 0.95;
}`,
  },
  paint: {
    title: "Paint",
    color: "from-orange-500 to-red-500",
    desc: "Paint — browser elementni qayta chizishi. box-shadow, background, color kabi narsalar ko‘p o‘zgarsa og‘ir bo‘lishi mumkin.",
    code: `/* Ehtiyotkorlik bilan */
.card:hover {
  box-shadow: 0 30px 80px rgba(0,0,0,.25);
}`,
  },
  reflow: {
    title: "Reflow",
    color: "from-red-500 to-pink-500",
    desc: "Reflow — layout qayta hisoblanishi. width, height, margin, top, left kabi propertylarni animatsiya qilish og‘irroq.",
    code: `/* Yomonroq */
.card:hover {
  width: 360px;
  margin-top: -20px;
}

/* Yaxshiroq */
.card:hover {
  transform: translateY(-20px) scale(1.03);
}`,
  },
  willChange: {
    title: "will-change",
    color: "from-cyan-500 to-blue-500",
    desc: "will-change browserga oldindan “bu element animatsiya bo‘ladi” deb signal beradi. Lekin hamma joyga yozish kerak emas.",
    code: `.card {
  will-change: transform;
}

.card:hover {
  transform: translateY(-12px);
}`,
  },
};

const quiz = [
  {
    question: "Performance uchun eng yaxshi animatsiya propertylari qaysilar?",
    options: ["transform va opacity", "width va height", "margin va padding"],
    correct: 0,
  },
  {
    question: "Reflow nima?",
    options: [
      "Layout qayta hisoblanishi",
      "Faqat rang o‘zgarishi",
      "Font yuklanishi",
    ],
    correct: 0,
  },
  {
    question: "Paint nima?",
    options: ["Elementni qayta chizish", "HTMLni o‘chirish", "Flex direction"],
    correct: 0,
  },
  {
    question: "will-change nima qiladi?",
    options: [
      "Browserga animatsiya bo‘lishini oldindan bildiradi",
      "Rasmni compress qiladi",
      "Form valid qiladi",
    ],
    correct: 0,
  },
  {
    question: "will-change ni hamma elementga berish to‘g‘rimi?",
    options: ["Yo‘q, faqat kerakli joyda", "Ha, har doim", "Faqat bodyga"],
    correct: 0,
  },
  {
    question: "Keraksiz animatsiya UXga qanday ta’sir qiladi?",
    options: [
      "Charchatadi va chalg‘itadi",
      "Har doim yaxshi qiladi",
      "Saytni o‘chiradi",
    ],
    correct: 0,
  },
  {
    question: "Smooth hover uchun nima kerak?",
    options: ["transition", "table", "alt"],
    correct: 0,
  },
];

export default function CssM3L9() {
  const [activeTab, setActiveTab] = useState("gpu");
  const [animationLevel, setAnimationLevel] = useState("balanced");
  const [willChange, setWillChange] = useState(true);
  const [scrollActive, setScrollActive] = useState(false);
  const [answers, setAnswers] = useState({});

  const tab = performanceTabs[activeTab];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const levelMap = {
    none: {
      title: "No animation",
      className: "transition-none",
      desc: "Hech qanday harakat yo‘q. Juda statik tuyulishi mumkin.",
    },
    balanced: {
      title: "Balanced",
      className:
        "transition duration-300 hover:-translate-y-2 hover:scale-[1.02]",
      desc: "Eng yaxshi yondashuv: yengil, tez va professional.",
    },
    tooMuch: {
      title: "Too much",
      className:
        "transition duration-700 hover:-translate-y-8 hover:scale-110 hover:rotate-6",
      desc: "Haddan tashqari harakat UXni chalg‘itadi.",
    },
  };

  const level = levelMap[animationLevel];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[38px] border border-emerald-400/20 bg-gradient-to-br from-[#052e1a] via-[#0b1020] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-emerald-300">
              <FaGem />
              CSS • Module 3 • 9-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Animatsiyalardan to‘g‘ri foydalanish
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun animatsiya performance’ga qanday ta’sir qilishini, GPU,
              paint, reflow, will-change, transform optimizatsiyasi va UX’da
              kerakli/keraksiz animatsiyalarni amaliy o‘rganamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={MdSpeed}
                title="Performance"
                text="GPU paint reflow"
              />
              <HeroBadge
                icon={FaRocket}
                title="Optimize"
                text="transform opacity"
              />
              <HeroBadge icon={FaScroll} title="Scroll" text="smooth reveal" />
            </div>
          </div>

          <MotionPerformanceHero level={level} willChange={willChange} />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdSpeed}
        label="Performance basics"
        title="GPU, Paint va Reflow tushunchasi"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaBolt}
            title="GPU"
            text="transform va opacity animatsiyalarini yengilroq ishlatadi."
          />
          <InfoCard
            icon={FaEye}
            title="Paint"
            text="Element qayta chiziladi. Shadow va background o‘zgarishi paint bo‘lishi mumkin."
          />
          <InfoCard
            icon={FaLayerGroup}
            title="Reflow"
            text="Layout qayta hisoblanadi. width, height, margin animatsiyasi og‘irroq."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Performance map"
        title="Qaysi animatsiya yengil, qaysi biri og‘ir?"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(performanceTabs).map(([key, item]) => (
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
        icon={FaMousePointer}
        label="UX motion"
        title="Kerakli va keraksiz animatsiyani solishtiramiz"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Animation level"
              value={animationLevel}
              setValue={setAnimationLevel}
              options={[
                ["none", "No animation"],
                ["balanced", "Balanced"],
                ["tooMuch", "Too much"],
              ]}
            />

            <button
              type="button"
              onClick={() => setWillChange(!willChange)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                willChange
                  ? "bg-emerald-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {willChange ? "will-change yoqilgan" : "will-change o‘chirilgan"}
            </button>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-5 text-slate-300">
              <b className="text-violet-300">{level.title}:</b> {level.desc}
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid gap-4 md:grid-cols-3">
              {["Course", "Project", "Mentor"].map((item) => (
                <div
                  key={item}
                  className={`rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 p-5 text-white shadow-xl ${level.className}`}
                  style={{ willChange: willChange ? "transform" : "auto" }}
                >
                  <FaGem className="mb-4 text-4xl" />
                  <h4 className="text-2xl font-black">{item}</h4>
                  <p className="mt-2 text-sm text-white/75">
                    Hover qilib UX farqini ko‘ring.
                  </p>
                </div>
              ))}
            </div>

            <CodePanel
              className="mt-5"
              code={`.card {
  transition: ${
    animationLevel === "none"
      ? "none"
      : animationLevel === "balanced"
        ? "0.3s ease"
        : "0.7s ease"
  };
  will-change: ${willChange ? "transform" : "auto"};
}

.card:hover {
  ${
    animationLevel === "none"
      ? "/* no animation */"
      : animationLevel === "balanced"
        ? "transform: translateY(-8px) scale(1.02);"
        : "transform: translateY(-32px) scale(1.1) rotate(6deg);"
  }
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Best practice"
        title="Transform bilan optimizatsiya"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-red-400/20 bg-red-400/10 p-6">
            <FaExclamationTriangle className="mb-4 text-5xl text-red-300" />
            <h4 className="mb-4 text-3xl font-black text-white">Og‘irroq</h4>
            <CodePanel
              code={`.box:hover {
  width: 360px;
  height: 220px;
  margin-top: -20px;
  left: 30px;
}`}
            />
          </div>

          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <FaCheckCircle className="mb-4 text-5xl text-emerald-300" />
            <h4 className="mb-4 text-3xl font-black text-white">Yaxshiroq</h4>
            <CodePanel
              code={`.box {
  transition: transform 0.3s ease;
  will-change: transform;
}

.box:hover {
  transform: translateY(-20px) scale(1.03);
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaScroll}
        label="Scroll animation"
        title="Scroll animatsiyasi + smooth reveal"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setScrollActive(!scrollActive)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                scrollActive
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {scrollActive ? "Scroll reveal active" : "Scroll reveal demo"}
            </button>

            <CodePanel
              code={`.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}`}
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="space-y-4 rounded-[28px] bg-slate-100 p-5">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  animate={{
                    opacity: scrollActive ? 1 : 0.35,
                    y: scrollActive ? 0 : 28,
                  }}
                  transition={{ duration: 0.5, delay: item * 0.12 }}
                  className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-5 text-white shadow-xl"
                >
                  <h4 className="text-2xl font-black">Reveal Card {item}</h4>
                  <p className="mt-2 text-white/75">
                    opacity + translateY bilan smooth scroll effect.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaServer}
        label="Qachon kerak?"
        title="Animatsiyalarni UX’da to‘g‘ri ishlatish"
        color="text-pink-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticeCard
            good
            title="Kerakli joylar"
            items={[
              "Button hover feedback",
              "Modal fade-in/fade-out",
              "Card hover yengil ko‘tarilishi",
              "Scroll reveal qisqa va sekin bo‘lmagan holatda",
              "Loader yoki progress holati",
            ]}
          />

          <PracticeCard
            title="Keraksiz joylar"
            items={[
              "Har bir element doim qimirlayverishi",
              "Juda sekin 2–5 sekundlik hover",
              "Form yozishda chalg‘ituvchi animation",
              "Katta width/height animatsiyalari",
              "Mobile’da og‘ir va ko‘p effektlar",
            ]}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Amaliy mashg‘ulot"
        title="Scroll animatsiyasi + smooth hover effects"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Cardlarga transition yozing",
              "Hoverda transform: translateY(-8px) scale(1.02) ishlating",
              "width/height animatsiyadan qoching",
              "Scroll reveal uchun opacity + translateY ishlating",
              "will-change faqat animatsiya bo‘ladigan cardlarga yozing",
              "Mobile’da animationni yengilroq qiling",
              "DevTools Performance tabda og‘ir animatsiyani tekshirib ko‘ring",
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
            <div className="grid gap-4 md:grid-cols-2">
              {["Smooth", "Fast"].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ willChange: "transform" }}
                >
                  <FaBolt className="mb-4 text-4xl" />
                  <h4 className="text-2xl font-black">{item} hover</h4>
                  <p className="mt-2 text-sm text-white/75">
                    transform + transition bilan performance friendly effect.
                  </p>
                </div>
              ))}
            </div>

            <CodePanel
              className="mt-5"
              code={`.smooth-card {
  transition: transform 0.3s ease, opacity 0.3s ease;
  will-change: transform;
}

.smooth-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
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
          title="Animation performance quiz"
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

function MotionPerformanceHero({ level, willChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-emerald-600">Performance Lab</p>
          <h3 className="text-2xl font-black md:text-3xl">Smooth Motion</h3>
        </div>
        <MdSpeed className="text-4xl text-emerald-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <div
          className={`rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-6 shadow-2xl ${level.className}`}
          style={{ willChange: willChange ? "transform" : "auto" }}
        >
          <FaRocket className="mb-5 text-5xl" />
          <h4 className="text-3xl font-black">{level.title}</h4>
          <p className="mt-2 text-white/75">{level.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PracticeCard({ title, items, good = false }) {
  return (
    <div
      className={`rounded-[32px] border p-6 ${
        good
          ? "border-emerald-400/20 bg-emerald-400/10"
          : "border-red-400/20 bg-red-400/10"
      }`}
    >
      <h4 className="mb-4 text-3xl font-black text-white">{title}</h4>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
          >
            {good ? (
              <FaCheckCircle className="text-emerald-300" />
            ) : (
              <FaTimesCircle className="text-red-300" />
            )}
            {item}
          </div>
        ))}
      </div>
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
      <Icon className="mb-3 text-2xl text-emerald-300 md:text-3xl" />
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
      <Icon className="mb-4 text-4xl text-emerald-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
