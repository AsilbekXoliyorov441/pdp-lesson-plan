import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUniversalAccess,
  FaEyeSlash,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaVolumeUp,
  FaKeyboard,
} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const ariaItems = [
  {
    id: "label",
    title: "aria-label",
    desc: "Element nima ekanini screen readerga tushuntiradi",
    code: `<button aria-label="Menu ochish">☰</button>`,
  },
  {
    id: "role",
    title: "role",
    desc: "Elementning vazifasini belgilaydi",
    code: `<div role="button">Bosish</div>`,
  },
  {
    id: "hidden",
    title: "aria-hidden",
    desc: "Screen readerga ko‘rinmas qiladi",
    code: `<span aria-hidden="true">🔥</span>`,
  },
];

const quiz = [
  {
    question: "ARIA nima uchun ishlatiladi?",
    options: [
      "Accessibility yaxshilash uchun",
      "Rang berish uchun",
      "Server bilan ishlash uchun",
    ],
    correct: 0,
  },
  {
    question: "aria-label nima qiladi?",
    options: [
      "Elementni tushuntiradi",
      "Elementni yashiradi",
      "Fontni o‘zgartiradi",
    ],
    correct: 0,
  },
  {
    question: "aria-hidden nima qiladi?",
    options: [
      "Screen readerdan yashiradi",
      "Elementni kattalashtiradi",
      "Input yaratadi",
    ],
    correct: 0,
  },
];

export default function HtmlLesson7() {
  const [active, setActive] = useState("label");
  const [simulateBlind, setSimulateBlind] = useState(false);
  const [answers, setAnswers] = useState({});

  const selected = ariaItems.find((i) => i.id === active);

  const correctCount = quiz.filter((q, i) => answers[i] === q.correct).length;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        className="rounded-[42px] border border-indigo-400/20 bg-gradient-to-br from-[#0b0f2a] via-[#0b1020] to-black p-6"
      >
        <div className="flex items-center gap-3 mb-5">
          <HiSparkles className="text-indigo-300 text-xl" />
          <span className="text-indigo-300 font-black">
            7-DARS • Accessibility
          </span>
        </div>

        <h2 className="text-2xl font-black text-white mb-4">
          ARIA bilan saytni hamma uchun qulay qilamiz
        </h2>

        <p className="text-slate-300 max-w-3xl">
          Bu darsda biz ko‘zi ojiz foydalanuvchilar uchun saytni qanday
          tushunarli qilishni o‘rganamiz. Bu professional developerlar
          ishlatadigan skill.
        </p>
      </motion.section>

      {/* WHAT IS ARIA */}
      <Section title="ARIA nima?" icon={FaUniversalAccess}>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            title="Accessibility"
            text="Nogironligi bor foydalanuvchilar uchun saytni ishlatishni oson qiladi"
          />
          <Card
            title="Screen Reader"
            text="Ko‘zi ojiz foydalanuvchilar saytni eshitadi"
          />
          <Card
            title="Professional skill"
            text="Senior developerlar doim accessibility qiladi"
          />
        </div>
      </Section>

      {/* SIMULATOR */}
      <Section title="Ko‘zi ojiz user qanday ko‘radi?" icon={FaEyeSlash}>
        <div className="flex gap-4 mb-5">
          <button
            onClick={() => setSimulateBlind(!simulateBlind)}
            className="cursor-pointer px-5 py-3 rounded-2xl bg-indigo-500 text-white font-black"
          >
            {simulateBlind ? "Normal ko‘rish" : "Blind mode"}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-3xl text-black">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl">
              ☰
            </button>
          </div>

          <div className="bg-black p-5 rounded-3xl text-green-300 font-mono">
            {simulateBlind
              ? "Button: Menu ochish"
              : "👀 Bu yerda faqat icon ko‘rinadi"}
          </div>
        </div>
      </Section>

      {/* ARIA ATTRIBUTES */}
      <Section title="ARIA atributlari" icon={FaKeyboard}>
        <div className="flex gap-3 mb-5">
          {ariaItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`px-4 py-2 rounded-xl font-black cursor-pointer ${
                active === item.id
                  ? "bg-white text-black"
                  : "bg-white/10 text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-indigo-500 p-6 rounded-3xl text-white">
            <h3 className="text-2xl font-black mb-3">{selected.title}</h3>
            <p>{selected.desc}</p>
          </div>

          <div className="bg-black p-5 rounded-3xl text-green-300 font-mono text-sm">
            {selected.code}
          </div>
        </div>
      </Section>

      {/* PRACTICE */}
      <Section title="Amaliy mashg‘ulot" icon={FaVolumeUp}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-slate-900 p-6 rounded-3xl text-white">
            <h3 className="text-xl font-black mb-4">To‘g‘ri button yozing:</h3>

            <p className="text-slate-300 mb-3">
              Menu icon bor, lekin text yo‘q
            </p>

            <div className="bg-black p-4 rounded-xl font-mono text-green-300">
              {`<button aria-label="Menu ochish">☰</button>`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl text-black">
            <button
              aria-label="Menu ochish"
              className="bg-indigo-500 text-white px-5 py-3 rounded-xl cursor-pointer"
            >
              ☰
            </button>

            <p className="mt-4 text-sm text-gray-600">
              Screen reader: "Menu ochish tugmasi"
            </p>
          </div>
        </div>
      </Section>

      {/* QUIZ */}
      <motion.section
        variants={fadeUp}
        className="rounded-3xl border border-white/10 p-6"
      >
        <h3 className="text-white font-black text-2xl mb-4 flex items-center gap-2">
          <MdQuiz /> Quiz
        </h3>

        <p className="mb-4 text-green-400 font-bold">
          {correctCount}/{quiz.length} to‘g‘ri
        </p>

        {quiz.map((q, i) => (
          <div key={i} className="mb-5">
            <p className="text-white mb-3">{q.question}</p>

            <div className="grid md:grid-cols-3 gap-3">
              {q.options.map((opt, idx) => {
                const selected = answers[i] === idx;
                const correct = q.correct === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setAnswers({ ...answers, [i]: idx })}
                    className={`p-3 rounded-xl cursor-pointer ${
                      selected && correct
                        ? "bg-green-500"
                        : selected && !correct
                          ? "bg-red-500"
                          : "bg-white/10 text-white"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </motion.section>
    </motion.div>
  );
}

/* reusable components */

function Section({ title, icon: Icon, children }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl border border-white/10 p-6"
    >
      <h3 className="text-white text-2xl font-black mb-5 flex gap-2 items-center">
        <Icon /> {title}
      </h3>
      {children}
    </motion.div>
  );
}

function Card({ title, text }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-slate-900 p-5 rounded-3xl">
      <h4 className="text-white font-black mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{text}</p>
    </motion.div>
  );
}
