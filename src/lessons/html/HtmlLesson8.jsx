import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaComments,
  FaMicrophone,
  FaCode,
  FaExchangeAlt,
  FaLightbulb,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const questions = [
  "Bu qismni nima uchun shunday yozding?",
  "Buni boshqacha yozsa bo‘ladimi?",
  "Bu kod nima vazifa bajaradi?",
  "Bu yerda xato chiqsa sababi nima bo‘ladi?",
];

const quiz = [
  {
    q: "Yaxshi developer nimani yaxshi qiladi?",
    a: [
      "Faqat kod yozadi",
      "Yaxshi gaplashadi va tushuntiradi",
      "Faqat dizayn qiladi",
    ],
    c: 1,
  },
  {
    q: "Pair programming nima?",
    a: ["Ikki kishi navbat bilan ishlaydi", "Yakka ishlash", "Faqat yozish"],
    c: 0,
  },
];

export default function HtmlLesson8() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(30);
  const [running, setRunning] = useState(false);

  function startTimer() {
    setRunning(true);
    let t = 30;
    const interval = setInterval(() => {
      t--;
      setTimer(t);
      if (t === 0) {
        clearInterval(interval);
        setRunning(false);
      }
    }, 1000);
  }

  const correctCount = quiz.filter((q, i) => answers[i] === q.c).length;

  return (
    <motion.div initial="hidden" animate="show" className="space-y-8">
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        className="rounded-[40px] bg-gradient-to-br from-[#0f172a] to-[#020617] p-6 border border-purple-400/20"
      >
        <div className="flex items-center gap-3 mb-5">
          <HiSparkles className="text-purple-400" />
          <span className="text-purple-300 font-black">
            8-DARS • Soft Skills
          </span>
        </div>

        <h2 className="text-2xl font-black text-white mb-4">
          Dasturchi faqat kod yozmaydi — gapira ham oladi
        </h2>

        <p className="text-slate-300 max-w-3xl">
          Bu darsda siz jamoada ishlash, fikr bildirish, public speaking va real
          developer kabi muloqot qilishni o‘rganasiz.
        </p>
      </motion.section>

      {/* WHY IMPORTANT */}
      <Section icon={FaComments} title="Nega kommunikatsiya muhim?">
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="Teamwork">
            Yakka ishlash davri tugadi — hamma jamoada ishlaydi
          </Card>
          <Card title="Tushuntirish">
            Kod yozishdan ham muhim — tushuntirish
          </Card>
          <Card title="Career growth">
            Yaxshi gapira olgan developer tez o‘sadi 🚀
          </Card>
        </div>
      </Section>

      {/* PAIR PROGRAMMING */}
      <Section icon={FaExchangeAlt} title="Pair Programming">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-white font-black mb-3">👨‍💻 Driver</h3>
            <p className="text-slate-400">Kod yozadi</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-white font-black mb-3">🧠 Navigator</h3>
            <p className="text-slate-400">Qanday yozishni aytadi</p>
          </div>
        </div>

        <div className="mt-5 bg-purple-500/10 p-5 rounded-2xl text-purple-300">
          🔁 5 daqiqadan keyin rollar almashadi
        </div>

        <button
          onClick={startTimer}
          className="mt-5 px-6 py-3 bg-purple-500 text-white rounded-2xl cursor-pointer"
        >
          Timer boshlash ({timer}s)
        </button>
      </Section>

      {/* QUESTIONS */}
      <Section icon={FaLightbulb} title="Kod yozayotganda savollar">
        <div className="grid md:grid-cols-2 gap-4">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => setActiveQuestion(q)}
              className="cursor-pointer bg-slate-900 p-5 rounded-2xl text-white"
            >
              {q}
            </motion.div>
          ))}
        </div>

        {activeQuestion && (
          <div className="mt-5 p-5 bg-green-500/10 rounded-2xl text-green-300">
            💡 To‘g‘ri savol: {activeQuestion}
          </div>
        )}
      </Section>

      {/* PUBLIC SPEAKING */}
      <Section icon={FaMicrophone} title="Public Speaking">
        <div className="grid md:grid-cols-3 gap-4">
          <Card>Ko‘z bilan kontakt qiling</Card>
          <Card>Oddiy gapiring</Card>
          <Card>Misollar keltiring</Card>
        </div>

        <div className="mt-5 bg-yellow-500/10 p-5 rounded-2xl text-yellow-300">
          🎤 Vazifa: 1 daqiqa ichida o‘zingni tanishtir
        </div>
      </Section>

      {/* PRESENTATION */}
      <Section icon={FaUsers} title="Loyiha taqdimoti">
        <div className="bg-slate-900 p-6 rounded-3xl text-white">
          <p className="mb-3">Har bir guruh:</p>
          <ul className="list-disc ml-5 text-slate-400">
            <li>G‘oya aytadi</li>
            <li>Nima uchun kerakligini tushuntiradi</li>
            <li>Qanday ishlashini ko‘rsatadi</li>
          </ul>
        </div>
      </Section>

      {/* NETWORKING GAME */}
      <Section icon={FaUsers} title="Networking o‘yini">
        <div className="bg-indigo-500/10 p-6 rounded-3xl text-indigo-300">
          🎮 Har bir o‘quvchi 3 kishiga:
          <ul className="mt-3 list-disc ml-5">
            <li>Ismini aytadi</li>
            <li>Nimani o‘rganayotganini aytadi</li>
            <li>Qiziqishini aytadi</li>
          </ul>
        </div>
      </Section>

      {/* QUIZ */}
      <motion.section
        variants={fadeUp}
        className="p-6 rounded-3xl border border-white/10"
      >
        <h3 className="text-white font-black text-xl mb-4 flex items-center gap-2">
          <MdQuiz /> Quiz
        </h3>

        <p className="text-green-400 mb-4">
          {correctCount}/{quiz.length} to‘g‘ri
        </p>

        {quiz.map((item, i) => (
          <div key={i} className="mb-5">
            <p className="text-white mb-3">{item.q}</p>

            <div className="grid md:grid-cols-3 gap-3">
              {item.a.map((opt, idx) => {
                const selected = answers[i] === idx;
                const correct = item.c === idx;

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

/* components */

function Section({ icon: Icon, title, children }) {
  return (
    <motion.div
      variants={fadeUp}
      className="p-6 rounded-3xl border border-white/10"
    >
      <h3 className="text-white font-black text-2xl mb-5 flex items-center gap-2">
        <Icon /> {title}
      </h3>
      {children}
    </motion.div>
  );
}

function Card({ title, children }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-900 p-5 rounded-2xl text-white"
    >
      <h4 className="font-black mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{children}</p>
    </motion.div>
  );
}
