import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCode,
  FaBezierCurve,
  FaEnvelope,
  FaKeyboard,
  FaLink,
  FaListOl,
  FaMousePointer,
  FaTimesCircle,
  FaWpforms,
} from "react-icons/fa";
import { MdQuiz, MdMenuOpen } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const pseudoTabs = {
  hover: {
    title: ":hover",
    color: "from-cyan-500 to-blue-500",
    desc: "Mouse element ustiga kelganda ishlaydi. Button, card, menu linklarda ko‘p ishlatiladi.",
    code: `.menu-link:hover {
  color: #38bdf8;
  background-color: rgba(56, 189, 248, 0.12);
}`,
  },
  focus: {
    title: ":focus",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Input yoki button tanlanganda ishlaydi. Form UX va accessibility uchun juda muhim.",
    code: `.form-input:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
  outline: none;
}`,
  },
  active: {
    title: ":active",
    color: "from-orange-500 to-red-500",
    desc: "Element bosib turilganda ishlaydi. Button bosilganini sezdirish uchun ishlatiladi.",
    code: `.button:active {
  transform: scale(0.96);
}`,
  },
  visited: {
    title: ":visited",
    color: "from-emerald-500 to-teal-500",
    desc: "Oldin tashrif buyurilgan linklarga style berish uchun ishlatiladi.",
    code: `a:visited {
  color: #a78bfa;
}`,
  },
};

const quiz = [
  {
    question: ":hover qachon ishlaydi?",
    options: [
      "Mouse element ustiga borganda",
      "Input noto‘g‘ri bo‘lganda",
      "Link bosilgandan keyin",
    ],
    correct: 0,
  },
  {
    question: ":focus nima uchun muhim?",
    options: [
      "Input tanlanganini ko‘rsatish uchun",
      "Rasm hajmini kamaytirish uchun",
      "Elementni yashirish uchun",
    ],
    correct: 0,
  },
  {
    question: ":active qachon ishlaydi?",
    options: [
      "Element bosib turilganda",
      "Sahifa ochilganda",
      "Form valid bo‘lganda",
    ],
    correct: 0,
  },
  {
    question: ":valid qachon ishlaydi?",
    options: [
      "Input qoidaga mos bo‘lsa",
      "Button hover bo‘lsa",
      "Link visited bo‘lsa",
    ],
    correct: 0,
  },
  {
    question: ":invalid qachon ishlaydi?",
    options: [
      "Input qoidaga mos bo‘lmasa",
      "Element flex bo‘lsa",
      "Card hover bo‘lsa",
    ],
    correct: 0,
  },
  {
    question: ":nth-child(odd) nimani tanlaydi?",
    options: [
      "Toq tartibdagi elementlarni",
      "Faqat birinchi elementni",
      "Barcha linklarni",
    ],
    correct: 0,
  },
  {
    question: ":not(.active) nima qiladi?",
    options: [
      ".active bo‘lmagan elementlarni tanlaydi",
      "Faqat active elementni tanlaydi",
      "CSSni o‘chiradi",
    ],
    correct: 0,
  },
];

export default function CssM3L5() {
  const [activeTab, setActiveTab] = useState("hover");
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectorMode, setSelectorMode] = useState("nthOdd");
  const [answers, setAnswers] = useState({});

  const tab = pseudoTabs[activeTab];

  const isEmailValid = email.includes("@") && email.includes(".");
  const isNameValid = name.trim().length >= 3;

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
        className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-gradient-to-br from-[#031926] via-[#0b1020] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS • Module 3 • 5-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Pseudo-classlar: hover, focus, active, visited
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun CSS orqali elementlarning holatlarini boshqaramiz: hover,
              focus, active, visited, valid, invalid, nth-child va not
              selectorlari bilan interactive menu va form validation effect
              yaratamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaMousePointer}
                title="Hover"
                text="menu effect"
              />
              <HeroBadge icon={FaWpforms} title="Focus" text="form UX" />
              <HeroBadge icon={FaListOl} title="Selectors" text="nth/not" />
            </div>
          </div>

          <PseudoHero email={email} isEmailValid={isEmailValid} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaBezierCurve}
        label="Pseudo-class nima?"
        title="Interaktiv holatlar bilan ishlash"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          <InfoCard
            icon={FaMousePointer}
            title=":hover"
            text="Mouse element ustiga kelganda style o‘zgaradi."
          />
          <InfoCard
            icon={FaKeyboard}
            title=":focus"
            text="Input yoki button tanlanganda ko‘rinadi."
          />
          <InfoCard
            icon={FaBezierCurve}
            title=":active"
            text="Element bosib turilganda ishlaydi."
          />
          <InfoCard
            icon={FaLink}
            title=":visited"
            text="Oldin kirilgan linkga style beradi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="State map"
        title="Pseudo-classlarni live tushunamiz"
        color="text-violet-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(pseudoTabs).map(([key, item]) => (
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
        icon={MdMenuOpen}
        label="Interactive menu"
        title="hover, active va visited uslubidagi menu"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {["Home", "Courses", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedMenu(item)}
                className={`group flex w-full cursor-pointer items-center justify-between rounded-3xl border p-5 text-left font-black transition active:scale-[0.98] ${
                  selectedMenu === item
                    ? "border-emerald-400 bg-emerald-400/15 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-white"
                }`}
              >
                <span>{item}</span>
                <FaArrowIcon active={selectedMenu === item} />
              </button>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <nav className="flex flex-wrap gap-3 rounded-3xl bg-slate-950 p-4">
              {["Home", "Courses", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedMenu(item)}
                  className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 active:scale-95 ${
                    selectedMenu === item
                      ? "bg-emerald-400 text-slate-950"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="mt-5 rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-black text-emerald-600">Active menu</p>
              <h4 className="mt-1 text-4xl font-black">{selectedMenu}</h4>
            </div>

            <CodePanel
              className="mt-5"
              code={`.menu-link {
  transition: 0.3s;
}

.menu-link:hover {
  background-color: #22d3ee;
  color: #020617;
  transform: translateY(-4px);
}

.menu-link:active {
  transform: scale(0.95);
}

.menu-link.active {
  background-color: #34d399;
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaWpforms}
        label="Form validation"
        title=":focus, :valid va :invalid bilan form effect"
        color="text-pink-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-5">
            <label className="mb-2 block font-black text-white">Ism</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Kamida 3 ta harf"
              className={`mb-5 w-full rounded-2xl border bg-black/30 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 ${
                name.length === 0
                  ? "border-white/10"
                  : isNameValid
                    ? "border-emerald-400"
                    : "border-red-400"
              }`}
            />

            <label className="mb-2 block font-black text-white">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className={`w-full rounded-2xl border bg-black/30 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 ${
                email.length === 0
                  ? "border-white/10"
                  : isEmailValid
                    ? "border-emerald-400"
                    : "border-red-400"
              }`}
            />

            <div className="mt-5 grid gap-3">
              <ValidationLine active={isNameValid} label="Ism valid" />
              <ValidationLine active={isEmailValid} label="Email valid" />
            </div>
          </div>

          <CodePanel
            code={`input:focus {
  border-color: #22d3ee;
  box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.15);
  outline: none;
}

input:valid {
  border-color: #34d399;
}

input:invalid {
  border-color: #f87171;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaListOl}
        label="Advanced selectors"
        title=":nth-child va :not selectorlari"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <ButtonGroup
              title="Selector mode"
              value={selectorMode}
              setValue={setSelectorMode}
              options={[
                ["nthOdd", ":nth-child(odd)"],
                ["nthEven", ":nth-child(even)"],
                ["third", ":nth-child(3)"],
                ["notActive", ":not(.active)"],
              ]}
            />

            <CodePanel
              code={
                selectorMode === "nthOdd"
                  ? `.card:nth-child(odd) {
  background-color: #22d3ee;
}`
                  : selectorMode === "nthEven"
                    ? `.card:nth-child(even) {
  background-color: #a78bfa;
}`
                    : selectorMode === "third"
                      ? `.card:nth-child(3) {
  transform: scale(1.08);
}`
                      : `.card:not(.active) {
  opacity: 0.45;
}`
              }
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => {
                const active =
                  selectorMode === "nthOdd"
                    ? item % 2 === 1
                    : selectorMode === "nthEven"
                      ? item % 2 === 0
                      : selectorMode === "third"
                        ? item === 3
                        : item === 2;

                return (
                  <motion.div
                    key={item}
                    animate={{
                      scale: selectorMode === "third" && item === 3 ? 1.08 : 1,
                      opacity:
                        selectorMode === "notActive" && item !== 2 ? 0.45 : 1,
                    }}
                    className={`grid h-28 place-items-center rounded-3xl font-black text-white ${
                      active
                        ? "bg-gradient-to-br from-cyan-500 to-violet-500"
                        : "bg-slate-800"
                    }`}
                  >
                    Card {item}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Amaliy mashg‘ulot"
        title="Interactive menu + form validation effect"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Menu linklarga hover effect bering",
              "Buttonlarga active scale effect qo‘shing",
              "Inputlarga focus border va ring bering",
              "Email input uchun valid/invalid style yozing",
              "List cardlarda nth-child orqali rang almashtiring",
              ":not(.active) orqali inactive elementlarni pasaytiring",
              "Mobile previewda hover o‘rniga active holatni test qiling",
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
            <div className="rounded-[28px] bg-slate-950 p-5 text-white">
              <div className="mb-5 flex flex-wrap gap-3">
                {["Home", "Courses", "Contact"].map((item) => (
                  <button
                    key={item}
                    className="cursor-pointer rounded-2xl bg-white/10 px-4 py-3 font-black transition hover:bg-cyan-400 hover:text-slate-950 active:scale-95"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <input
                placeholder="Focus me..."
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15"
              />
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
          title="Pseudo-class quiz"
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

function PseudoHero({ email, isEmailValid }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">
            Interaction Preview
          </p>
          <h3 className="text-2xl font-black md:text-3xl">CSS States</h3>
        </div>
        <FaBezierCurve className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <button className="mb-4 w-full cursor-pointer rounded-2xl bg-cyan-400 px-5 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300 active:scale-95">
          Hover / Active button
        </button>

        <div className="rounded-2xl bg-white/10 p-4">
          <div className="mb-2 flex items-center gap-2">
            <FaEnvelope className="text-cyan-300" />
            <span className="font-black">Email status</span>
          </div>

          <p
            className={`font-black ${
              email.length === 0
                ? "text-slate-400"
                : isEmailValid
                  ? "text-emerald-300"
                  : "text-red-300"
            }`}
          >
            {email.length === 0
              ? "Empty"
              : isEmailValid
                ? "Valid email"
                : "Invalid email"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ValidationLine({ active, label }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl p-4 font-black ${
        active
          ? "bg-emerald-400/10 text-emerald-300"
          : "bg-red-400/10 text-red-300"
      }`}
    >
      {active ? <FaCheckCircle /> : <FaTimesCircle />}
      {label}
    </div>
  );
}

function FaArrowIcon({ active }) {
  return (
    <span
      className={`grid h-9 w-9 place-items-center rounded-xl transition ${
        active ? "bg-emerald-400 text-slate-950" : "bg-white/10 text-cyan-300"
      }`}
    >
      →
    </span>
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

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
