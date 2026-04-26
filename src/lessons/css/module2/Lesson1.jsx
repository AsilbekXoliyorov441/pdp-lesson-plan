import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCss3Alt,
  FaHtml5,
  FaLink,
  FaPaintBrush,
  FaFileCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { MdQuiz, MdOutlineColorLens } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const cssMethods = {
  inline: {
    title: "Inline CSS",
    badge: "Eng tez, lekin tartibsiz",
    color: "from-red-500 to-orange-500",
    desc: "CSS to‘g‘ridan-to‘g‘ri HTML tag ichidagi style attributiga yoziladi.",
    code: `<p style="color: red; background-color: yellow;">
  Salom CSS!
</p>`,
    previewClass: "text-red-600 bg-yellow-200",
  },
  internal: {
    title: "Internal CSS",
    badge: "Bitta HTML fayl ichida",
    color: "from-purple-500 to-pink-500",
    desc: "CSS HTML faylning <head> qismidagi <style> tegi ichida yoziladi.",
    code: `<style>
  p {
    color: blue;
    background-color: lightcyan;
  }
</style>`,
    previewClass: "text-blue-600 bg-cyan-100",
  },
  external: {
    title: "External CSS",
    badge: "Eng professional usul",
    color: "from-emerald-500 to-cyan-500",
    desc: "CSS alohida style.css yoki main.css faylga yoziladi va HTMLga link orqali ulanadi.",
    code: `<!-- index.html -->
<link rel="stylesheet" href="./style.css" />

/* style.css */
p {
  color: white;
  background-color: #2563eb;
}`,
    previewClass: "text-white bg-blue-600",
  },
};

const quiz = [
  {
    question: "CSS nima uchun kerak?",
    options: [
      "HTML sahifaga dizayn berish uchun",
      "Server ochish uchun",
      "Database yaratish uchun",
    ],
    correct: 0,
  },
  {
    question: "Eng professional CSS yozish usuli qaysi?",
    options: ["External CSS", "Inline CSS", "Faqat HTML ichida yozish"],
    correct: 0,
  },
  {
    question: "<link> tegi nima uchun kerak?",
    options: [
      "CSS faylni HTMLga ulash uchun",
      "Rasm chizish uchun",
      "Jadval yaratish uchun",
    ],
    correct: 0,
  },
  {
    question: "href attributi nimani bildiradi?",
    options: ["Ulanadigan fayl manzilini", "Matn rangini", "Tag nomini"],
    correct: 0,
  },
];

export default function CssM2L1() {
  const [activeMethod, setActiveMethod] = useState("external");
  const [selectedColor, setSelectedColor] = useState("text-purple-500");
  const [selectedBg, setSelectedBg] = useState("bg-yellow-100");
  const [answers, setAnswers] = useState({});

  const method = cssMethods[activeMethod];

  const correctCount = quiz.filter(
    (item, index) => answers[index] === item.correct,
  ).length;

  const colorCode = selectedColor.includes("purple")
    ? "purple"
    : selectedColor.includes("red")
      ? "red"
      : selectedColor.includes("blue")
        ? "blue"
        : "green";

  const bgCode = selectedBg.includes("yellow")
    ? "lightyellow"
    : selectedBg.includes("cyan")
      ? "lightcyan"
      : selectedBg.includes("pink")
        ? "pink"
        : "lightgreen";

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-blue-400/20 bg-gradient-to-br from-[#07162f] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-black text-blue-300">
              <HiSparkles />
              CSS • Module 2 • 1-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              CSS sahifaga rang, chiroy va kayfiyat beradi
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun CSS nima, uni HTMLga ulashning 3 xil usuli, link tegi,
              rel/href attributlari, color va background-color xususiyatlarini
              amaliy ko‘ramiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaCss3Alt} title="CSS" text="Design language" />
              <HeroBadge icon={FaLink} title="link" text="External CSS" />
              <HeroBadge
                icon={FaPaintBrush}
                title="color"
                text="Live preview"
              />
            </div>
          </div>

          <LiveCssHero
            selectedColor={selectedColor}
            selectedBg={selectedBg}
            colorCode={colorCode}
            bgCode={bgCode}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaCss3Alt}
        label="CSS nima?"
        title="CSS nima va nima uchun kerak?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaHtml5}
            title="HTML — skelet"
            text="HTML sahifadagi elementlarni yaratadi: h1, p, button, img."
          />
          <InfoCard
            icon={FaCss3Alt}
            title="CSS — dizayn"
            text="CSS rang, joylashuv, o‘lcham, spacing, shadow va ko‘rinish beradi."
          />
          <InfoCard
            icon={FaPaintBrush}
            title="Natija"
            text="Oddiy HTML sahifa CSS bilan chiroyli landing pagega aylanadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaFileCode}
        label="3 xil usul"
        title="CSS yozish usullarini live ko‘ramiz"
        color="text-blue-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(cssMethods).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMethod(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeMethod === key
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
              key={activeMethod}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${method.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">{method.badge}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {method.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{method.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <p className="mb-3 text-sm font-black text-slate-400">
              Kod qanday yoziladi?
            </p>
            <pre className="whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-7 text-cyan-300">
              {method.code}
            </pre>

            <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950">
              <p
                className={`rounded-2xl p-4 text-center text-2xl font-black ${method.previewClass}`}
              >
                Salom CSS!
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLink}
        label="External CSS"
        title="Nima uchun External CSS eng yaxshi?"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Professional projectda CSS alohida faylda bo‘ladi
            </h4>

            <div className="space-y-3">
              {[
                "HTML toza va tartibli bo‘ladi",
                "Bitta CSS fayl ko‘p sahifaga ulanadi",
                "Kod topish va o‘zgartirish osonlashadi",
                "Real projectlarda eng ko‘p ishlatiladi",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <FaCheckCircle className="text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-7">
            <p className="text-orange-300">&lt;!-- index.html --&gt;</p>
            <p className="text-cyan-300">
              &lt;link rel="stylesheet" href="./style.css" /&gt;
            </p>
            <br />
            <p className="text-emerald-300">/* style.css */</p>
            <p className="text-white">h1 {"{"}</p>
            <p className="pl-5 text-cyan-300">color: blue;</p>
            <p className="pl-5 text-cyan-300">background-color: lightcyan;</p>
            <p className="text-white">{"}"}</p>

            <div className="mt-5 rounded-2xl bg-white/5 p-4 text-slate-300">
              <b className="text-emerald-300">rel="stylesheet"</b> — bu fayl CSS
              ekanini bildiradi.
              <br />
              <b className="text-emerald-300">href="./style.css"</b> — CSS fayl
              manzilini bildiradi.
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineColorLens}
        label="Live CSS Playground"
        title="color va background-color natijasini o‘zingiz ko‘ring"
        color="text-purple-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <ControlGroup
              title="color tanlang"
              options={[
                ["Purple", "text-purple-500"],
                ["Red", "text-red-500"],
                ["Blue", "text-blue-500"],
                ["Green", "text-green-500"],
              ]}
              value={selectedColor}
              onChange={setSelectedColor}
            />

            <ControlGroup
              title="background-color tanlang"
              options={[
                ["Yellow", "bg-yellow-100"],
                ["Cyan", "bg-cyan-100"],
                ["Pink", "bg-pink-100"],
                ["Green", "bg-green-100"],
              ]}
              value={selectedBg}
              onChange={setSelectedBg}
            />
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="rounded-3xl bg-white p-6 text-slate-950">
              <p
                className={`rounded-2xl p-6 text-center text-3xl font-black transition ${selectedColor} ${selectedBg}`}
              >
                Men CSS bilan o‘zgaryapman!
              </p>
            </div>

            <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-7 text-purple-300">
              {`p {
  color: ${colorCode};
  background-color: ${bgCode};
}`}
            </pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Selector"
        title="CSS sintaksisi va tag selector"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-orange-400/20 bg-orange-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              CSS formulasi
            </h4>

            <div className="rounded-2xl bg-slate-950/70 p-5 font-mono text-sm text-orange-300">
              selector {"{"}
              <br />
              <span className="pl-5 text-cyan-300">property: value;</span>
              <br />
              {"}"}
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              Masalan, <b className="text-orange-300">p</b> selector barcha p
              teglarini chaqiradi. <b className="text-orange-300">color</b>{" "}
              property, <b className="text-orange-300">red</b> value
              hisoblanadi.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-7">
            <p className="text-cyan-300">p {"{"}</p>
            <p className="pl-5 text-white">color: red;</p>
            <p className="pl-5 text-white">background-color: yellow;</p>
            <p className="text-cyan-300">{"}"}</p>

            <div className="mt-5 rounded-2xl bg-white p-5 font-sans text-slate-950">
              <p className="rounded-xl bg-yellow-200 p-4 text-center text-2xl font-black text-red-600">
                Bu p tegi CSS orqali chaqirildi
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Amaliy mashg‘ulot"
        title="Bitta sahifaga 3 xil CSS turini qo‘llash"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "index.html fayl oching",
              "Bitta p tegiga inline style yozing",
              "head ichiga style tegi bilan internal CSS yozing",
              "style.css fayl yarating",
              "link orqali external CSS ulang",
              "Live Serverda natijani tekshiring",
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
            <p className="text-orange-300">&lt;head&gt;</p>
            <p className="pl-5 text-cyan-300">
              &lt;link rel="stylesheet" href="./style.css" /&gt;
            </p>
            <p className="pl-5 text-purple-300">&lt;style&gt;</p>
            <p className="pl-10 text-white">h1 {"{ color: blue; }"}</p>
            <p className="pl-5 text-purple-300">&lt;/style&gt;</p>
            <p className="text-orange-300">&lt;/head&gt;</p>
            <br />
            <p className="text-orange-300">&lt;body&gt;</p>
            <p className="pl-5 text-white">
              &lt;p style="color:red"&gt;Inline CSS&lt;/p&gt;
            </p>
            <p className="text-orange-300">&lt;/body&gt;</p>
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
          title="CSS intro quiz"
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

function LiveCssHero({ selectedColor, selectedBg, colorCode, bgCode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-blue-600">Live preview</p>
          <h3 className="text-3xl font-black">CSS Playground</h3>
        </div>
        <FaCss3Alt className="text-5xl text-blue-500" />
      </div>

      <div className="rounded-3xl bg-slate-100 p-5">
        <p
          className={`rounded-2xl p-6 text-center text-3xl font-black transition ${selectedColor} ${selectedBg}`}
        >
          Hello CSS!
        </p>
      </div>

      <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-sm leading-7 text-cyan-300">
        {`p {
  color: ${colorCode};
  background-color: ${bgCode};
}`}
      </pre>
    </motion.div>
  );
}

function ControlGroup({ title, options, value, onChange }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map(([label, className]) => (
          <button
            key={className}
            type="button"
            onClick={() => onChange(className)}
            className={`cursor-pointer rounded-2xl px-4 py-3 font-black transition ${
              value === className
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
      <Icon className="mb-3 text-3xl text-cyan-300" />
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
