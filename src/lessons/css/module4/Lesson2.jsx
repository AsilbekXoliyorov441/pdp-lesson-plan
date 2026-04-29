import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMoon,
  FaSun,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaLayerGroup,
  FaPaintBrush,
  FaLightbulb,
  FaWindowMaximize,
  FaDatabase,
  FaMousePointer,
  FaSlidersH,
  FaStar,
} from "react-icons/fa";
import { MdQuiz, MdExpandMore } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  switch: {
    title: "Toggle switch",
    icon: FaSlidersH,
    color: "from-blue-500 to-cyan-500",
    desc: "Checkbox orqali ON/OFF holatga ega switch button yaratiladi. Bu dark mode, notification yoki settinglarda ko‘p ishlatiladi.",
    code: `<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>

/* CSS */
.switch input {
  display: none;
}

.slider {
  width: 64px;
  height: 34px;
  border-radius: 999px;
  background: #334155;
}

input:checked + .slider {
  background: #38bdf8;
}`,
  },
  details: {
    title: "details / summary",
    icon: MdExpandMore,
    color: "from-violet-500 to-fuchsia-500",
    desc: "details va summary orqali JavaScript yozmasdan accordion/collapse yaratish mumkin.",
    code: `<details>
  <summary>CSS Variables nima?</summary>
  <p>
    CSS variables rang, spacing va theme qiymatlarini
    qayta ishlatish uchun kerak.
  </p>
</details>`,
  },
  root: {
    title: ":root",
    icon: FaDatabase,
    color: "from-emerald-500 to-teal-500",
    desc: ":root global CSS variables saqlash uchun ishlatiladi. Theme ranglari, text color, background va border qiymatlarini shu yerga yozish qulay.",
    code: `:root {
  --bg: #ffffff;
  --text: #0f172a;
  --card: #f8fafc;
  --primary: #2563eb;
}

[data-theme="dark"] {
  --bg: #020617;
  --text: #f8fafc;
  --card: #0f172a;
}`,
  },
  modal: {
    title: "Modal window",
    icon: FaWindowMaximize,
    color: "from-orange-500 to-red-500",
    desc: "Modal overlay, fixed position, z-index va animation orqali yaratiladi. Login, alert, confirm yoki preview oynalarda ishlatiladi.",
    code: `<div class="overlay">
  <div class="modal">
    <h2>Premium Modal</h2>
    <p>This is modal content.</p>
    <button>Close</button>
  </div>
</div>

/* CSS */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.65);
}`,
  },
};

const checklist = [
  "Toggle switch nima ekanligi tushuntirildi",
  "Checkbox orqali switch yaratildi",
  "details va summary orqali accordion qilindi",
  ":root tushunchasi tushuntirildi",
  "CSS variables ishlatildi",
  "data-theme tushuntirildi",
  "Dark mode va light mode qilindi",
  "localStorage nima uchun kerakligi aytildi",
  "Modal overlay yaratildi",
  "Modal position fixed bilan chiqarildi",
  "Modal ochish/yopish logic qilindi",
  "Smooth animation qo‘shildi",
];

const quiz = [
  {
    question: "Toggle switch odatda qaysi input orqali qilinadi?",
    options: ["Checkbox", "Text input", "Textarea"],
    correct: 0,
  },
  {
    question: "<details> va <summary> nima uchun ishlatiladi?",
    options: [
      "Accordion/collapse qilish uchun",
      "Rasm qo‘yish uchun",
      "Font ulash uchun",
    ],
    correct: 0,
  },
  {
    question: ":root nima uchun kerak?",
    options: [
      "Global CSS variables saqlash uchun",
      "HTML o‘chirish uchun",
      "Faqat hover qilish uchun",
    ],
    correct: 0,
  },
  {
    question: "localStorage nima qiladi?",
    options: [
      "Theme tanlovini browserda saqlaydi",
      "CSS faylni o‘chiradi",
      "Modalni avtomatik yaratadi",
    ],
    correct: 0,
  },
  {
    question: "Modal overlay odatda qanday position bilan qilinadi?",
    options: ["fixed", "static", "relative"],
    correct: 0,
  },
];

export default function CssM4L2() {
  const [activeConcept, setActiveConcept] = useState("switch");
  const [theme, setTheme] = useState("dark");
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});
  const [activeFaq, setActiveFaq] = useState(0);

  const current = concepts[activeConcept];

  useEffect(() => {
    const savedTheme = localStorage.getItem("css-m4-l2-theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("css-m4-l2-theme", theme);
  }, [theme]);

  const isLight = theme === "light";

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
      data-theme={theme}
      className={`space-y-8 transition ${
        isLight ? "text-slate-950" : "text-white"
      }`}
    >
      <motion.section
        variants={fadeUp}
        className={`relative overflow-hidden rounded-[38px] border p-5 shadow-2xl md:p-8 ${
          isLight
            ? "border-blue-200 bg-gradient-to-br from-white via-blue-50 to-slate-100"
            : "border-blue-400/20 bg-gradient-to-br from-[#061833] via-[#0f172a] to-[#020617]"
        }`}
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-400">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 2-DARS
            </div>

            <h2
              className={`mb-5 text-2xl font-black leading-tight md:text-4xl ${
                isLight ? "text-slate-950" : "text-white"
              }`}
            >
              Switch button, details/summary, Modal va Dark/Light Mode
            </h2>

            <p
              className={`max-w-3xl text-base leading-8 md:text-lg ${
                isLight ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Bu darsda o‘quvchilar real web app’larda ishlatiladigan setting
              switch, accordion, CSS variables, data-theme, localStorage va
              modal oynani premium UI ko‘rinishida o‘rganadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaSlidersH}
                title="Switch"
                text="checkbox toggle"
              />
              <HeroBadge icon={FaMoon} title="Theme" text="dark/light" />
              <HeroBadge
                icon={FaWindowMaximize}
                title="Modal"
                text="overlay UI"
              />
            </div>
          </div>

          <HeroPreview
            isLight={isLight}
            theme={theme}
            setTheme={setTheme}
            setModalOpen={setModalOpen}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Lesson goal"
        title="Dars maqsadi"
        color="text-blue-300"
        isLight={isLight}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaSlidersH}
            title="Switch"
            text="Checkbox orqali premium toggle switch yaratishni o‘rganish."
            isLight={isLight}
          />
          <InfoCard
            icon={FaDatabase}
            title="Theme system"
            text=":root, CSS variables, data-theme va localStorage orqali theme saqlash."
            isLight={isLight}
          />
          <InfoCard
            icon={FaWindowMaximize}
            title="Modal"
            text="Overlay, position fixed va animation yordamida modal oyna qilish."
            isLight={isLight}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Core concepts"
        title="Asosiy tushunchalar"
        color="text-cyan-300"
        isLight={isLight}
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
                  ? "bg-blue-500 text-white"
                  : isLight
                    ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
        title="Dark mode tugmasi va modal demo"
        color="text-violet-300"
        isLight={isLight}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={`rounded-[32px] border p-6 ${
              isLight
                ? "border-slate-200 bg-white"
                : "border-white/10 bg-slate-950/70"
            }`}
          >
            <h4
              className={`mb-5 text-2xl font-black ${
                isLight ? "text-slate-950" : "text-white"
              }`}
            >
              App settings panel
            </h4>

            <div className="space-y-4">
              <ThemeSwitch theme={theme} setTheme={setTheme} />

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group flex w-full cursor-pointer items-center justify-between rounded-3xl bg-gradient-to-r from-blue-500 to-violet-600 p-5 text-left font-black text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  <FaWindowMaximize />
                  Modal oynani ochish
                </span>
                <FaMousePointer className="transition group-hover:rotate-12" />
              </button>

              <div
                className={`rounded-3xl border p-5 ${
                  isLight
                    ? "border-slate-200 bg-slate-50"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <h5 className="mb-3 font-black">Accordion demo</h5>

                {[
                  {
                    q: "data-theme nima?",
                    a: "HTML yoki wrapper elementga beriladigan attribute. Masalan: data-theme='dark'.",
                  },
                  {
                    q: "localStorage nima uchun kerak?",
                    a: "Foydalanuvchi tanlagan theme browserda saqlanib qolishi uchun.",
                  },
                  {
                    q: "Modalda overlay nima?",
                    a: "Modal orqasidagi qoraygan fon. U foydalanuvchi diqqatini modalga qaratadi.",
                  },
                ].map((item, index) => (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() => setActiveFaq(index)}
                    className={`mb-3 w-full rounded-2xl border p-4 text-left transition ${
                      activeFaq === index
                        ? "border-blue-400 bg-blue-500/10"
                        : isLight
                          ? "border-slate-200 bg-white"
                          : "border-white/10 bg-slate-950/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 font-black">
                      {item.q}
                      <MdExpandMore
                        className={`text-2xl transition ${
                          activeFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`mt-3 overflow-hidden text-sm leading-6 ${
                            isLight ? "text-slate-600" : "text-slate-300"
                          }`}
                        >
                          {item.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div
              className={`rounded-[28px] p-6 ${
                isLight ? "bg-slate-100" : "bg-slate-950 text-white"
              }`}
            >
              {isLight ? (
                <FaSun className="mb-5 text-5xl text-yellow-500" />
              ) : (
                <FaMoon className="mb-5 text-5xl text-blue-300" />
              )}

              <h4 className="mb-3 text-3xl font-black">
                Current theme: {theme}
              </h4>

              <p className={isLight ? "text-slate-600" : "text-slate-300"}>
                Theme holati localStorage’da saqlanadi. Sahifa refresh bo‘lsa
                ham tanlangan mode qoladi.
              </p>
            </div>

            <CodePanel
              className="mt-5"
              code={`const [theme, setTheme] = useState("dark");

useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);

<div data-theme={theme}>
  ...
</div>`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Main practice"
        title="Amaliy loyiha: Dark mode + Modal"
        color="text-emerald-300"
        isLight={isLight}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            {[
              "Switch button uchun checkbox strukturasi yoziladi",
              "details va summary bilan accordion qilinadi",
              ":root ichida CSS variables yaratiladi",
              "data-theme='dark' va data-theme='light' yoziladi",
              "JavaScript bilan theme almashtiriladi",
              "localStorage bilan theme saqlanadi",
              "Modal uchun overlay va modal box qilinadi",
              "Modal ochish/yopish buttonlari ulanadi",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className={`rounded-2xl border p-4 ${
                  isLight
                    ? "border-slate-200 bg-white text-slate-700"
                    : "border-white/10 bg-slate-950/70 text-slate-300"
                }`}
              >
                <span className="mr-3 font-black text-blue-400">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <CodePanel
            code={`:root {
  --bg: #ffffff;
  --text: #0f172a;
  --card: #f8fafc;
}

[data-theme="dark"] {
  --bg: #020617;
  --text: #f8fafc;
  --card: #0f172a;
}

body {
  background: var(--bg);
  color: var(--text);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .65);
  display: grid;
  place-items: center;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Project checklist"
        title="Dars yakunida tekshirish"
        color="text-emerald-300"
        isLight={isLight}
      >
        <div
          className={`mb-5 flex items-center justify-between rounded-2xl p-4 ${
            isLight ? "bg-white text-slate-950" : "bg-slate-950/60 text-white"
          }`}
        >
          <span>Bajarilgan vazifalar</span>
          <span className="flex items-center gap-2 font-black text-emerald-400">
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
                    : isLight
                      ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
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
        title="O‘qituvchi uchun muhim eslatmalar"
        color="text-yellow-300"
        isLight={isLight}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticeCard
            good
            title="Yaxshi yondashuv"
            items={[
              "Avval oddiy checkbox ko‘rsatiladi",
              "Keyin switchga aylantirib beriladi",
              "details/summary JSsiz accordion ekanligi aytiladi",
              ":root global sozlama markazi sifatida tushuntiriladi",
              "Modalda overlay, fixed va z-index alohida ko‘rsatiladi",
            ]}
          />

          <PracticeCard
            title="Xatolar"
            items={[
              "Switchni checkboxsiz qilish",
              "details ichida summary yozmaslik",
              "CSS variables nomlarini chalkashtirish",
              "localStorage’dan o‘qishni unutish",
              "Modal yopish tugmasini qilmaslik",
            ]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className={`rounded-[36px] border p-6 ${
          isLight
            ? "border-slate-200 bg-white"
            : "border-white/10 bg-gradient-to-br from-blue-400/10 to-violet-500/10"
        }`}
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Switch, theme va modal quiz"
          color="text-blue-300"
        />

        <div
          className={`mb-5 mt-6 flex items-center justify-between rounded-2xl p-4 ${
            isLight
              ? "bg-slate-100 text-slate-950"
              : "bg-slate-950/60 text-white"
          }`}
        >
          <span>To‘g‘ri javoblar</span>
          <span className="flex items-center gap-2 font-black text-emerald-400">
            <FaCheckCircle />
            {correctCount}/{quiz.length}
          </span>
        </div>

        <div className="space-y-5">
          {quiz.map((item, questionIndex) => (
            <motion.div
              key={item.question}
              whileHover={{ scale: 1.01 }}
              className={`rounded-3xl border p-5 ${
                isLight
                  ? "border-slate-200 bg-slate-50"
                  : "border-white/10 bg-slate-950/60"
              }`}
            >
              <h4
                className={`mb-4 text-lg font-black ${
                  isLight ? "text-slate-950" : "text-white"
                }`}
              >
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
                          ? "border-emerald-400 bg-emerald-400/20 text-emerald-400"
                          : selected && !correct
                            ? "border-red-400 bg-red-400/20 text-red-400"
                            : isLight
                              ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
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
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-[999] grid place-items-center bg-black/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-2xl"
            >
              <div className="mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-blue-500/20 text-blue-300">
                <FaWindowMaximize className="text-3xl" />
              </div>

              <h3 className="mb-3 text-3xl font-black">Premium Modal</h3>

              <p className="mb-6 leading-7 text-slate-300">
                Bu modal overlay, fixed position, animation va close action
                orqali ishlayapti. Real loyihalarda login, alert, confirm yoki
                preview uchun ishlatiladi.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer rounded-2xl bg-white px-5 py-4 font-black text-slate-950 transition hover:-translate-y-1"
                >
                  Yopish
                </button>

                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="cursor-pointer rounded-2xl bg-blue-500 px-5 py-4 font-black text-white transition hover:-translate-y-1"
                >
                  Theme almashtirish
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ThemeSwitch({ theme, setTheme }) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`flex w-full cursor-pointer items-center justify-between rounded-3xl border p-5 transition ${
        isLight
          ? "border-slate-200 bg-slate-50 text-slate-950"
          : "border-white/10 bg-white/5 text-white"
      }`}
    >
      <span className="flex items-center gap-3 font-black">
        {isLight ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-blue-300" />
        )}
        {isLight ? "Light mode active" : "Dark mode active"}
      </span>

      <span
        className={`relative h-9 w-18 rounded-full p-1 transition ${
          isLight ? "bg-yellow-400" : "bg-blue-500"
        }`}
      >
        <motion.span
          animate={{ x: isLight ? 35 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="grid h-7 w-7 place-items-center rounded-full bg-white text-slate-950 shadow-lg"
        >
          {isLight ? (
            <FaSun className="text-xs" />
          ) : (
            <FaMoon className="text-xs" />
          )}
        </motion.span>
      </span>
    </button>
  );
}

function HeroPreview({ isLight, theme, setTheme, setModalOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-blue-600">Live Interface</p>
          <h3 className="text-2xl font-black md:text-3xl">Theme Control</h3>
        </div>
        {isLight ? (
          <FaSun className="text-4xl text-yellow-500 md:text-5xl" />
        ) : (
          <FaMoon className="text-4xl text-blue-500 md:text-5xl" />
        )}
      </div>

      <div
        className={`rounded-[28px] p-5 ${
          isLight ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white"
        }`}
      >
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-600 p-6 text-white shadow-2xl"
        >
          <FaPaintBrush className="mb-5 text-5xl" />
          <h4 className="text-3xl font-black">Luxury UI Settings</h4>
          <p className="mt-2 text-white/75">
            Switch, accordion, modal va theme system.
          </p>
        </motion.div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer rounded-2xl bg-white p-3 text-center text-sm font-black text-slate-950"
          >
            Toggle theme
          </button>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="cursor-pointer rounded-2xl bg-blue-500 p-3 text-center text-sm font-black text-white"
          >
            Open modal
          </button>
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

function PremiumSection({
  icon: Icon,
  label,
  title,
  color,
  children,
  isLight,
}) {
  return (
    <motion.section
      variants={fadeUp}
      className={`rounded-[32px] border p-5 shadow-xl backdrop-blur-xl md:p-6 ${
        isLight
          ? "border-slate-200 bg-slate-50"
          : "border-white/10 bg-[#0f172a]/80"
      }`}
    >
      <SectionTitle
        icon={Icon}
        label={label}
        title={title}
        color={color}
        isLight={isLight}
      />
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}

function SectionTitle({ icon: Icon, label, title, color, isLight }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid h-13 w-13 place-items-center rounded-2xl ${
          isLight ? "bg-white" : "bg-white/10"
        } ${color}`}
      >
        <Icon className="text-2xl md:text-3xl" />
      </div>
      <div>
        <p className={`text-xs font-black uppercase tracking-widest ${color}`}>
          {label}
        </p>
        <h3
          className={`text-xl font-black md:text-2xl ${
            isLight ? "text-slate-950" : "text-white"
          }`}
        >
          {title}
        </h3>
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

function InfoCard({ icon: Icon, title, text, isLight }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.02 }}
      className={`rounded-3xl border p-5 ${
        isLight
          ? "border-slate-200 bg-white"
          : "border-white/10 bg-slate-950/70"
      }`}
    >
      <Icon className="mb-4 text-4xl text-blue-300" />
      <h4
        className={`mb-3 text-xl font-black md:text-2xl ${
          isLight ? "text-slate-950" : "text-white"
        }`}
      >
        {title}
      </h4>
      <p
        className={`text-sm leading-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}
      >
        {text}
      </p>
    </motion.div>
  );
}
