import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaPaintBrush,
  FaUniversalAccess,
  FaLayerGroup,
  FaMousePointer,
  FaWpforms,
  FaLightbulb,
  FaStar,
  FaMagic,
} from "react-icons/fa";
import { MdQuiz, MdOutlineDesignServices } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  default: {
    title: "Default input",
    icon: FaWpforms,
    color: "from-blue-500 to-cyan-500",
    desc: "Brauzer checkbox va radio elementlariga o‘zining default style’ini beradi. Shuning uchun dizaynni to‘liq nazorat qilish qiyin bo‘ladi.",
    code: `<label>
  <input type="checkbox" />
  I agree
</label>

<label>
  <input type="radio" name="level" />
  Beginner
</label>`,
  },
  appearance: {
    title: "appearance: none",
    icon: FaMagic,
    color: "from-violet-500 to-fuchsia-500",
    desc: "appearance: none orqali inputning default ko‘rinishi olib tashlanadi va custom style berish imkoniyati paydo bo‘ladi.",
    code: `input[type="checkbox"] {
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #38bdf8;
  border-radius: 8px;
}`,
  },
  pseudo: {
    title: "::before / ::after",
    icon: FaLayerGroup,
    color: "from-emerald-500 to-teal-500",
    desc: "Pseudo-elementlar yordamida checkbox ichidagi check belgisi yoki radio ichidagi nuqta chiroyli qilib yasaladi.",
    code: `.checkbox::before {
  content: "✓";
  opacity: 0;
  transform: scale(0);
}

.checkbox:checked::before {
  opacity: 1;
  transform: scale(1);
}`,
  },
  accessible: {
    title: "Accessible form",
    icon: FaUniversalAccess,
    color: "from-orange-500 to-red-500",
    desc: "Custom input qilganda label, keyboard focus va aria atributlarini unutmaslik kerak. Form faqat chiroyli emas, qulay ham bo‘lishi kerak.",
    code: `<label for="agree">I agree</label>
<input 
  id="agree"
  type="checkbox"
  aria-label="Agree to terms"
/>`,
  },
};

const checklist = [
  "Checkbox default style’i tushuntirildi",
  "Radio default style’i tushuntirildi",
  "appearance: none ishlatildi",
  "Custom checkbox yaratildi",
  "Custom radio yaratildi",
  "::before yoki ::after ishlatildi",
  ":checked holati qo‘shildi",
  ":focus-visible holati qo‘shildi",
  "label bilan input bog‘landi",
  "ARIA/accessibility haqida gapirildi",
  "Stylized form qilindi",
  "Responsive holat tekshirildi",
];

const quiz = [
  {
    question: "appearance: none nima uchun ishlatiladi?",
    options: [
      "Default input ko‘rinishini olib tashlash uchun",
      "Inputni o‘chirish uchun",
      "Faqat rang berish uchun",
    ],
    correct: 0,
  },
  {
    question: "Radio buttonlarda name atributi nima uchun kerak?",
    options: [
      "Bitta guruh ichida faqat bittasini tanlash uchun",
      "Rang berish uchun",
      "Inputni kattalashtirish uchun",
    ],
    correct: 0,
  },
  {
    question: ":checked qachon ishlaydi?",
    options: [
      "Input tanlanganda",
      "Sahifa ochilganda",
      "Mouse hover bo‘lganda",
    ],
    correct: 0,
  },
  {
    question: "Custom formda accessibility uchun eng muhim narsa?",
    options: [
      "Label va keyboard focus ishlashi",
      "Faqat gradient qo‘shish",
      "Inputni display none qilish",
    ],
    correct: 0,
  },
  {
    question: "::before va ::after nima uchun kerak?",
    options: [
      "Dekorativ element yaratish uchun",
      "HTML fayl ochish uchun",
      "Font size berish uchun",
    ],
    correct: 0,
  },
];

export default function CssM4L1() {
  const [activeConcept, setActiveConcept] = useState("default");
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});
  const [agree, setAgree] = useState(true);
  const [features, setFeatures] = useState({
    design: true,
    responsive: false,
    animation: true,
  });
  const [level, setLevel] = useState("middle");

  const current = concepts[activeConcept];

  const doneCount = useMemo(
    () => checklist.filter((_, index) => checked[index]).length,
    [checked],
  );

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
        className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-gradient-to-br from-[#061833] via-[#0f172a] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 1-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Form elementlari — Checkbox va Radio’ga custom style berish
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bu darsda o‘quvchilar default checkbox/radio cheklovlarini
              tushunadi, appearance: none orqali custom input yaratadi,
              pseudo-elementlardan foydalanadi va accessible stylized form
              yasaydi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaWpforms} title="Form" text="checkbox/radio" />
              <HeroBadge
                icon={FaPaintBrush}
                title="Custom UI"
                text="premium style"
              />
              <HeroBadge
                icon={FaUniversalAccess}
                title="ARIA"
                text="accessible"
              />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Lesson goal"
        title="Dars maqsadi"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaWpforms}
            title="Default form"
            text="Checkbox va radio elementlarining brauzerdagi default ko‘rinishini tushunish."
          />
          <InfoCard
            icon={FaPaintBrush}
            title="Custom style"
            text="appearance: none, :checked, ::before va ::after orqali premium input yaratish."
          />
          <InfoCard
            icon={FaUniversalAccess}
            title="Accessibility"
            text="Label, focus-visible va ARIA yordamida qulay form yaratish."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineDesignServices}
        label="Core concepts"
        title="Asosiy tushunchalar"
        color="text-violet-300"
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
              className={`rounded-[32px] bg-gradient-to-br ${current.color} p-7`}
            >
              <current.icon className="mb-5 text-5xl text-white" />
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                {current.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {current.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={current.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMousePointer}
        label="Interactive demo"
        title="Custom checkbox va radio demo"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Stylized form
            </h4>

            <div className="space-y-4">
              <CustomCheckbox
                checked={agree}
                onChange={() => setAgree(!agree)}
                label="Men dars shartlariga roziman"
              />

              <CustomCheckbox
                checked={features.design}
                onChange={() =>
                  setFeatures({ ...features, design: !features.design })
                }
                label="Premium design qo‘shish"
              />

              <CustomCheckbox
                checked={features.responsive}
                onChange={() =>
                  setFeatures({
                    ...features,
                    responsive: !features.responsive,
                  })
                }
                label="Responsive holatni tekshirish"
              />

              <CustomCheckbox
                checked={features.animation}
                onChange={() =>
                  setFeatures({
                    ...features,
                    animation: !features.animation,
                  })
                }
                label="Smooth hover effect qo‘shish"
              />
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h5 className="mb-4 font-black text-white">Darajani tanlang:</h5>

              <div className="grid gap-3 sm:grid-cols-3">
                {["beginner", "middle", "strong"].map((item) => (
                  <CustomRadio
                    key={item}
                    active={level === item}
                    onClick={() => setLevel(item)}
                    label={item}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="rounded-[28px] bg-slate-950 p-6 text-white">
              <FaPaintBrush className="mb-5 text-5xl text-cyan-300" />
              <h4 className="mb-3 text-3xl font-black">Natija ko‘rinishi</h4>

              <div className="mt-5 grid gap-3">
                <ResultRow label="Rozilik" value={agree ? "Ha" : "Yo‘q"} />
                <ResultRow
                  label="Design"
                  value={features.design ? "Active" : "Off"}
                />
                <ResultRow
                  label="Responsive"
                  value={features.responsive ? "Active" : "Off"}
                />
                <ResultRow
                  label="Animation"
                  value={features.animation ? "Active" : "Off"}
                />
                <ResultRow label="Level" value={level} />
              </div>
            </div>

            <CodePanel
              className="mt-5"
              code={`input[type="checkbox"] {
  appearance: none;
}

input[type="checkbox"]:checked {
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
}

input[type="radio"]:focus-visible {
  outline: 3px solid #22d3ee;
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Main practice"
        title="Amaliy loyiha: stylized form"
        color="text-blue-300"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            {[
              "HTML’da form, checkbox va radio yoziladi",
              "Har bir input label bilan bog‘lanadi",
              "Default style ko‘rib chiqiladi",
              "appearance: none beriladi",
              "Checkbox uchun border, radius va size beriladi",
              ":checked holatida gradient va check icon chiqadi",
              "Radio uchun doira va ichki nuqta qilinadi",
              ":focus-visible bilan keyboard accessibility qo‘shiladi",
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

          <CodePanel
            code={`<form class="premium-form">
  <label class="custom-check">
    <input type="checkbox" />
    <span></span>
    Accept terms
  </label>

  <label class="custom-radio">
    <input type="radio" name="level" />
    <span></span>
    Beginner
  </label>
</form>

/* CSS */
.custom-check input,
.custom-radio input {
  appearance: none;
}

.custom-check span {
  width: 24px;
  height: 24px;
  border: 2px solid #38bdf8;
  border-radius: 8px;
}

.custom-check input:checked + span {
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Project checklist"
        title="Dars yakunida tekshirish"
        color="text-emerald-300"
      >
        <div className="mb-5 flex items-center justify-between rounded-2xl bg-slate-950/60 p-4 text-white">
          <span>Bajarilgan vazifalar</span>
          <span className="flex items-center gap-2 font-black text-emerald-300">
            <FaCheckCircle />
            {doneCount}/{checklist.length}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {checklist.map((item, index) => {
            const active = checked[index];

            return (
              <motion.button
                key={item}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  setChecked({
                    ...checked,
                    [index]: !active,
                  })
                }
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left font-bold transition ${
                  active
                    ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {active ? <FaCheckCircle /> : <HiMiniCursorArrowRays />}
                {item}
              </motion.button>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaStar}
        label="Teacher notes"
        title="O‘qituvchi uchun tushuntirish yo‘nalishi"
        color="text-yellow-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticeCard
            good
            title="Yaxshi tushuntirish"
            items={[
              "Avval default checkbox/radio ko‘rsatiladi",
              "Keyin nega custom qilish kerakligi aytiladi",
              "appearance: none sababi tushuntiriladi",
              "checked va focus holatlari alohida ko‘rsatiladi",
              "Accessibility unutmaslik aytiladi",
            ]}
          />

          <PracticeCard
            title="Xatolar"
            items={[
              "Inputni display: none qilib yuborish",
              "Label ishlatmaslik",
              "Keyboard focusni olib tashlash",
              "Radio buttonlarda name bermaslik",
              "Faqat chiroyga e’tibor berib accessibilityni unutish",
            ]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Checkbox va radio quiz"
          color="text-cyan-300"
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

function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Live Demo</p>
          <h3 className="text-2xl font-black md:text-3xl">Premium Form UI</h3>
        </div>
        <FaMousePointer className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 p-6 shadow-2xl"
        >
          <FaWpforms className="mb-5 text-5xl" />
          <h4 className="text-3xl font-black">Custom Inputs</h4>
          <p className="mt-2 text-white/75">
            Checkbox, radio, checked state va accessibility.
          </p>
        </motion.div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {["Checked", "Radio", "ARIA"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-sm font-black"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CustomCheckbox({ checked, onChange, label }) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={checked}
      className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-slate-300 transition hover:bg-white/10"
    >
      <span
        className={`grid h-7 w-7 place-items-center rounded-xl border-2 transition ${
          checked
            ? "border-cyan-300 bg-gradient-to-br from-cyan-400 to-violet-500"
            : "border-slate-500 bg-slate-900"
        }`}
      >
        {checked && <FaCheckCircle className="text-sm text-white" />}
      </span>
      <span className="font-bold">{label}</span>
    </button>
  );
}

function CustomRadio({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex cursor-pointer items-center justify-center gap-3 rounded-2xl border p-4 font-black capitalize transition ${
        active
          ? "border-violet-400 bg-violet-400/20 text-violet-200"
          : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
      }`}
    >
      <span
        className={`grid h-6 w-6 place-items-center rounded-full border-2 ${
          active ? "border-violet-300" : "border-slate-500"
        }`}
      >
        {active && <span className="h-3 w-3 rounded-full bg-violet-300" />}
      </span>
      {label}
    </button>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="text-slate-400">{label}</span>
      <span className="font-black capitalize text-cyan-300">{value}</span>
    </div>
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
