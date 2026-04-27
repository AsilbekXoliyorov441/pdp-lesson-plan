import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaCompressAlt,
  FaCss3Alt,
  FaEye,
  FaFileCode,
  FaGem,
  FaMagic,
  FaMobileAlt,
  FaRocket,
  FaSpinner,
  FaTimesCircle,
} from "react-icons/fa";
import { MdQuiz, MdSpeed } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const foucTabs = {
  problem: {
    title: "FOUC muammosi",
    color: "from-red-500 to-orange-500",
    desc: "FOUC — sahifa avval CSSsiz ko‘rinib, keyin birdan style bilan o‘zgarib ketishi. Bu foydalanuvchiga hunuk va professional bo‘lmagan tajriba beradi.",
    code: `<!-- CSS kech yuklansa -->
<body>
  <h1>Premium Landing</h1>
  <p>Avval oddiy text ko‘rinadi...</p>
</body>

<link rel="stylesheet" href="./style.css" />`,
  },
  head: {
    title: "CSS head ichida",
    color: "from-emerald-500 to-teal-500",
    desc: "CSS faylni head ichida ulash browserga style’ni sahifa chizilishidan oldin tayyorlashga yordam beradi.",
    code: `<head>
  <link rel="stylesheet" href="./style.css" />
</head>`,
  },
  preload: {
    title: "Preload",
    color: "from-cyan-500 to-blue-500",
    desc: "Preload muhim CSS faylni oldinroq yuklashga signal beradi. Katta projectlarda performance uchun foydali.",
    code: `<link 
  rel="preload" 
  href="./style.css" 
  as="style" 
/>

<link 
  rel="stylesheet" 
  href="./style.css" 
/>`,
  },
  preloader: {
    title: "Preloader",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Preloader sahifa tayyor bo‘lguncha foydalanuvchiga chiroyli loading ko‘rsatadi. Bu FOUC hissini kamaytiradi.",
    code: `<div id="preloader">
  <div class="loader"></div>
</div>

<script>
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
</script>`,
  },
};

const quiz = [
  {
    question: "FOUC nimani anglatadi?",
    options: [
      "Flash of Unstyled Content",
      "File Open User Code",
      "Font Online Update CSS",
    ],
    correct: 0,
  },
  {
    question: "FOUC qachon yuzaga keladi?",
    options: [
      "CSS kech yuklanganda",
      "HTML umuman bo‘lmaganda",
      "Rasm alt yozilganda",
    ],
    correct: 0,
  },
  {
    question: "CSS faylni qayerda ulash yaxshi?",
    options: ["head ichida", "body oxirida", "footer ichida"],
    correct: 0,
  },
  {
    question: "preload nima qiladi?",
    options: [
      "Muhim resursni oldinroq yuklashga yordam beradi",
      "Elementni flex qiladi",
      "Rangni o‘chiradi",
    ],
    correct: 0,
  },
  {
    question: "Preloader nima uchun kerak?",
    options: [
      "Sahifa tayyor bo‘lguncha loading ko‘rsatish uchun",
      "Faqat border radius berish uchun",
      "HTMLni yashirish uchun emas, JSni o‘chirish uchun",
    ],
    correct: 0,
  },
  {
    question: "Minify nima?",
    options: [
      "Kod hajmini kichraytirish",
      "Kodga emoji qo‘shish",
      "Rasmni JPG qilish",
    ],
    correct: 0,
  },
  {
    question: "FOUC UXga qanday ta’sir qiladi?",
    options: [
      "Sahifa hunuk sakrab ko‘ringandek bo‘ladi",
      "Har doim saytni tezlatadi",
      "CSSni chiroyli qiladi",
    ],
    correct: 0,
  },
];

export default function CssM3L1() {
  const [activeTab, setActiveTab] = useState("problem");
  const [styled, setStyled] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [snippetType, setSnippetType] = useState("basic");
  const [answers, setAnswers] = useState({});

  const active = foucTabs[activeTab];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const snippetCode =
    snippetType === "basic"
      ? `<head>
  <link rel="stylesheet" href="./style.css" />
</head>`
      : snippetType === "preload"
        ? `<head>
  <link rel="preload" href="./style.css" as="style" />
  <link rel="stylesheet" href="./style.css" />
</head>`
        : `<div id="preloader">
  <div class="loader"></div>
</div>

<style>
#preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: #020617;
}

.loader {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255,255,255,.15);
  border-top-color: #38bdf8;
  border-radius: 50%;
  animation: spin .8s linear infinite;
}

body.loaded #preloader {
  opacity: 0;
  visibility: hidden;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>`;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-gradient-to-br from-[#050816] via-[#08111f] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <FaGem />
              CSS • Module 3 • 1-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              FOUC muammosini hal qilish va snippet tayyorlash
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun sahifa CSSsiz ko‘rinib qolish muammosini tushunamiz, CSS’ni
              head ichida ulash, preload, minify, preloader va tez
              ishlatiladigan snippetlar bilan professional yechim qilamiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaEye} title="FOUC" text="unstyled flash" />
              <HeroBadge icon={MdSpeed} title="Preload" text="faster CSS" />
              <HeroBadge icon={FaCode} title="Snippet" text="ready code" />
            </div>
          </div>

          <FoucHero styled={styled} preloader={preloader} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaBolt}
        label="FOUC nima?"
        title="Flash of Unstyled Content muammosi"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaEye}
            title="Avval CSSsiz"
            text="Sahifa bir lahza oddiy HTML ko‘rinishida chiqib qoladi."
          />
          <InfoCard
            icon={FaCss3Alt}
            title="Keyin CSS bilan"
            text="CSS yuklangach sahifa birdan o‘zgaradi va sakragandek tuyuladi."
          />
          <InfoCard
            icon={FaMobileAlt}
            title="Mobile’da seziladi"
            text="Internet sekin bo‘lsa, mobil qurilmada FOUC yanada ko‘proq bilinadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Live demo"
        title="Oddiy FOUC misoli va yechimi"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setStyled(!styled)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                styled
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {styled ? "Styled holat" : "Unstyled holat"}
            </button>

            <button
              type="button"
              onClick={() => setPreloader(!preloader)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                preloader
                  ? "bg-violet-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {preloader ? "Preloader yoqilgan" : "Preloader o‘chirilgan"}
            </button>

            <CodePanel
              code={
                styled
                  ? `/* To‘g‘ri holat */
<head>
  <link rel="stylesheet" href="./style.css" />
</head>`
                  : `/* FOUC bo‘lishi mumkin */
<body>
  <h1>Content</h1>
</body>

<link rel="stylesheet" href="./style.css" />`
              }
            />
          </div>

          <div className="rounded-[32px] bg-white p-4 text-slate-950 md:p-6">
            <div
              className={`relative overflow-hidden rounded-[28px] border transition ${
                styled
                  ? "border-cyan-200 bg-slate-950 p-5 text-white"
                  : "border-slate-200 bg-white p-3 text-black"
              }`}
            >
              {preloader && !styled && (
                <div className="absolute inset-0 z-10 grid place-items-center bg-slate-950 text-white">
                  <div className="text-center">
                    <FaSpinner className="mx-auto mb-3 animate-spin text-4xl text-cyan-300" />
                    <p className="font-black">Loading styles...</p>
                  </div>
                </div>
              )}

              <header
                className={`mb-5 flex items-center justify-between ${
                  styled ? "rounded-2xl bg-white/10 p-4" : ""
                }`}
              >
                <strong className={styled ? "text-xl" : ""}>EduPro</strong>
                <button
                  className={
                    styled
                      ? "rounded-xl bg-cyan-400 px-4 py-2 font-black text-slate-950"
                      : ""
                  }
                >
                  Start
                </button>
              </header>

              <section
                className={
                  styled
                    ? "rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-500 p-6"
                    : ""
                }
              >
                <h3 className={styled ? "text-4xl font-black" : ""}>
                  Premium Frontend
                </h3>
                <p className={styled ? "mt-3 text-white/80" : ""}>
                  CSS vaqtida yuklansa, sahifa birinchi ko‘rinishdan chiroyli
                  chiqadi.
                </p>
              </section>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaFileCode}
        label="FOUC fix map"
        title="FOUC’ni kamaytirish usullari"
        color="text-emerald-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(foucTabs).map(([key, item]) => (
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
        icon={FaCompressAlt}
        label="Minify"
        title="CSS’ni minify qilish nima?"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <CodePanel
            code={`/* Oddiy CSS */
.hero {
  background-color: #020617;
  color: white;
  padding: 80px 20px;
}

/* Minify qilingan */
.hero{background-color:#020617;color:white;padding:80px 20px}`}
          />

          <div className="rounded-[32px] border border-yellow-400/20 bg-yellow-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">Nega kerak?</h4>
            <div className="space-y-3">
              {[
                "CSS fayl hajmi kichrayadi",
                "Browserga tezroq yetib boradi",
                "Sahifa tezroq style oladi",
                "Production projectda foydali",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <FaCheckCircle className="text-yellow-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Snippet generator"
        title="Tez ishlatiladigan FOUC snippetlar"
        color="text-pink-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              ["basic", "Basic CSS head link"],
              ["preload", "Preload + stylesheet"],
              ["preloader", "Luxury preloader"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSnippetType(key)}
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left font-black transition ${
                  snippetType === key
                    ? "border-pink-400 bg-pink-400/15 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/10"
                }`}
              >
                {snippetType === key ? "✅" : "⬜"} {label}
              </button>
            ))}
          </div>

          <CodePanel code={snippetCode} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Amaliy mashg‘ulot"
        title="Oddiy FOUC misoli va professional yechim"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "index.html va style.css yarating",
              "Avval CSS linkni body oxiriga qo‘yib FOUC holatini ko‘rsating",
              "Keyin linkni head ichiga olib o‘ting",
              "preload variantini yozib ko‘ring",
              "Preloader qo‘shing",
              "CSS kodni minify qilingan holat bilan solishtiring",
              "Mobile previewda sahifa birinchi ko‘rinishini tekshiring",
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

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="rounded-[28px] bg-gradient-to-br from-slate-900 to-cyan-950 p-5 text-white">
              <div className="mb-5 flex items-center justify-between">
                <strong>Mobile Preview</strong>
                <FaMobileAlt className="text-cyan-300" />
              </div>

              <div className="mx-auto max-w-[260px] rounded-[32px] border-4 border-slate-700 bg-black p-3">
                <div className="rounded-[24px] bg-slate-950 p-4">
                  <div className="mb-4 h-3 w-24 rounded-full bg-cyan-400/60" />
                  <div className="mb-3 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500" />
                  <div className="mb-2 h-3 rounded-full bg-white/30" />
                  <div className="h-3 w-2/3 rounded-full bg-white/20" />
                </div>
              </div>
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
          title="FOUC va optimization quiz"
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

function FoucHero({ styled, preloader }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">FOUC Preview</p>
          <h3 className="text-2xl font-black md:text-3xl">Luxury Loader</h3>
        </div>
        <FaGem className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-slate-950 p-5 text-white">
        {preloader && !styled && (
          <div className="absolute inset-0 z-10 grid place-items-center bg-slate-950">
            <div className="text-center">
              <FaSpinner className="mx-auto mb-3 animate-spin text-4xl text-cyan-300" />
              <p className="font-black">Preparing styles</p>
            </div>
          </div>
        )}

        <div className={styled ? "rounded-3xl bg-white/10 p-4" : ""}>
          <p className="mb-2 text-cyan-300">Before → After</p>
          <h4 className={styled ? "text-4xl font-black" : "text-xl"}>
            Styled content
          </h4>
          <p className={styled ? "mt-3 text-white/70" : ""}>
            CSS to‘g‘ri yuklansa, sahifa chiroyli ochiladi.
          </p>
        </div>
      </div>
    </motion.div>
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
