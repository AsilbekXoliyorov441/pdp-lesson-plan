import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaCompressAlt,
  FaFileImage,
  FaImage,
  FaRocket,
  FaSearch,
  FaStar,
  FaTimesCircle,
} from "react-icons/fa";
import { MdQuiz, MdSpeed, MdOutlineRateReview } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const formats = {
  jpg: {
    title: "JPG / JPEG",
    color: "from-orange-500 to-red-500",
    size: "Medium",
    best: "Real rasmlar, odamlar, tabiat, foto",
    desc: "Rasm sifati yaxshi, hajmi PNGdan kichikroq bo‘ladi. Lekin transparent background qo‘llamaydi.",
    code: `<img src="./hero-photo.jpg" alt="Student learning coding" />`,
  },
  png: {
    title: "PNG",
    color: "from-cyan-500 to-blue-500",
    size: "Large",
    best: "Transparent logo, icon, screenshot",
    desc: "Sifat yaxshi va transparent background bor. Lekin hajmi katta bo‘lishi mumkin.",
    code: `<img src="./logo.png" alt="EduPro logo" />`,
  },
  webp: {
    title: "WEBP",
    color: "from-emerald-500 to-teal-500",
    size: "Small",
    best: "Modern web uchun eng yaxshi variantlardan biri",
    desc: "Hajmi kichik, sifati yaxshi. Landing page performance uchun juda foydali.",
    code: `<img src="./hero.webp" alt="Frontend course preview" />`,
  },
};

const quiz = [
  {
    question: "Rasm optimallashtirish nima?",
    options: [
      "Rasm hajmini kamaytirib sifatni saqlash",
      "Rasmni o‘chirish",
      "HTMLni yopish",
    ],
    correct: 0,
  },
  {
    question: "WEBP nimasi bilan yaxshi?",
    options: [
      "Hajmi kichik va sifati yaxshi",
      "Faqat audio uchun",
      "Faqat table uchun",
    ],
    correct: 0,
  },
  {
    question: "PNG qachon yaxshi?",
    options: [
      "Transparent logo/icon uchun",
      "Uzun video uchun",
      "Faqat text uchun",
    ],
    correct: 0,
  },
  {
    question: "JPG qachon yaxshi?",
    options: [
      "Real foto rasmlar uchun",
      "Kod yozish uchun",
      "Form yaratish uchun",
    ],
    correct: 0,
  },
  {
    question: "img width/height nega kerak?",
    options: [
      "Layout sakrashini kamaytirish uchun",
      "Rang berish uchun",
      "Font ulash uchun",
    ],
    correct: 0,
  },
  {
    question: "GZIP nima qiladi?",
    options: [
      "Fayllarni siqib tezroq yuboradi",
      "Rasm chizadi",
      "CSSni o‘chiradi",
    ],
    correct: 0,
  },
  {
    question: "Performance nima?",
    options: [
      "Sayt tezligi va ishlash sifati",
      "Faqat ranglar",
      "Faqat footer",
    ],
    correct: 0,
  },
  {
    question: "Katta rasm saytga qanday ta’sir qiladi?",
    options: [
      "Yuklanishni sekinlashtiradi",
      "Saytni tezlashtiradi",
      "Fontni o‘zgartiradi",
    ],
    correct: 0,
  },
  {
    question: "alt attributi nima uchun kerak?",
    options: [
      "Accessibility va SEO uchun",
      "Box shadow uchun",
      "Display flex uchun",
    ],
    correct: 0,
  },
  {
    question: "CSSda gap nima uchun?",
    options: [
      "Elementlar orasidagi bo‘shliq uchun",
      "Rasm hajmi uchun",
      "GZIP uchun",
    ],
    correct: 0,
  },
  {
    question: "display:flex qayerga beriladi?",
    options: ["Parent elementga", "Faqat childga", "img tagiga"],
    correct: 0,
  },
  {
    question: "padding nima?",
    options: ["Ichki bo‘shliq", "Tashqi bo‘shliq", "Rasm formati"],
    correct: 0,
  },
  {
    question: "margin nima?",
    options: ["Tashqi bo‘shliq", "Ichki bo‘shliq", "Matn rangi"],
    correct: 0,
  },
  {
    question: "text-shadow nimaga ishlaydi?",
    options: ["Matnga", "Element qutisiga", "Rasm formatiga"],
    correct: 0,
  },
  {
    question: "External CSS nima uchun yaxshi?",
    options: [
      "HTML toza bo‘ladi va qayta ishlatish oson",
      "Faqat bitta rang beradi",
      "Fontni o‘chiradi",
    ],
    correct: 0,
  },
];

const reviewTopics = [
  "CSS rang formatlari",
  "Box Model",
  "Display turlari",
  "Flexbox",
  "Font va typography",
  "Landing page structure",
  "Image optimization",
];

export default function CssM2L12() {
  const [activeFormat, setActiveFormat] = useState("webp");
  const [optimized, setOptimized] = useState(true);
  const [hasSize, setHasSize] = useState(true);
  const [gzipOn, setGzipOn] = useState(true);
  const [answers, setAnswers] = useState({});
  const [weakTopics, setWeakTopics] = useState({
    colors: false,
    box: true,
    display: false,
    flex: false,
    fonts: true,
    landing: false,
    optimization: false,
  });

  const format = formats[activeFormat];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const answeredCount = Object.keys(answers).length;
  const quizProgress = Math.round((answeredCount / quiz.length) * 100);
  const performanceScore =
    (optimized ? 35 : 10) + (hasSize ? 35 : 10) + (gzipOn ? 30 : 5);

  const weakCount = Object.values(weakTopics).filter(Boolean).length;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-emerald-400/20 bg-gradient-to-br from-[#052e16] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-yellow-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
              <HiSparkles />
              CSS • Module 2 • 12-DARS • FINAL
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Optimization va 2-oy yakuniy takrorlash
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun rasm optimallashtirish, JPG/PNG/WEBP farqi, width/height,
              GZIP, performance ta’siri va 2-modul bo‘yicha yakuniy quiz orqali
              bilimlarni mustahkamlaymiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaImage} title="Images" text="JPG PNG WEBP" />
              <HeroBadge icon={FaCompressAlt} title="GZIP" text="compression" />
              <HeroBadge icon={MdQuiz} title="Final Quiz" text="15 savol" />
            </div>
          </div>

          <PerformanceHero
            score={performanceScore}
            optimized={optimized}
            hasSize={hasSize}
            gzipOn={gzipOn}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaRocket}
        label="Optimization nima?"
        title="Optimizatsiya performance uchun nega muhim?"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaBolt}
            title="Tez yuklanadi"
            text="Rasm va fayllar kichik bo‘lsa, sayt tezroq ochiladi."
          />
          <InfoCard
            icon={FaSearch}
            title="SEO yaxshilanadi"
            text="Tez sayt foydalanuvchi va qidiruv tizimlari uchun yaxshi signal."
          />
          <InfoCard
            icon={FaStar}
            title="UX kuchayadi"
            text="Foydalanuvchi kutib qolmaydi, sahifadan chiqib ketish ehtimoli kamayadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaFileImage}
        label="Image formats"
        title="JPG, PNG va WEBP formatlarini solishtiramiz"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(formats).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFormat(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeFormat === key
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
              key={activeFormat}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${format.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">
                Hajm: {format.size}
              </p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {format.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{format.desc}</p>
              <div className="mt-5 rounded-2xl bg-white/15 p-4 font-bold text-white">
                Eng yaxshi: {format.best}
              </div>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={format.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdSpeed}
        label="Performance simulator"
        title="Optimized image, width/height va GZIP ta’siri"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <ToggleCard
              active={optimized}
              title="Rasm optimallashtirilgan"
              text="WEBP yoki siqilgan JPG ishlatiladi"
              onClick={() => setOptimized(!optimized)}
            />
            <ToggleCard
              active={hasSize}
              title="img width/height berilgan"
              text="Layout shift kamayadi"
              onClick={() => setHasSize(!hasSize)}
            />
            <ToggleCard
              active={gzipOn}
              title="GZIP yoqilgan"
              text="HTML/CSS/JS fayllar siqib yuboriladi"
              onClick={() => setGzipOn(!gzipOn)}
            />
          </div>

          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-black text-emerald-600">
                  Performance score
                </p>
                <h3 className="text-4xl font-black">{performanceScore}/100</h3>
              </div>
              <FaBolt className="text-5xl text-emerald-500" />
            </div>

            <div className="h-5 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                animate={{ width: `${performanceScore}%` }}
                className={`h-full rounded-full ${
                  performanceScore > 80
                    ? "bg-emerald-500"
                    : performanceScore > 50
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
              />
            </div>

            <div className="mt-6 rounded-3xl bg-slate-950 p-5 font-mono text-sm leading-7 text-cyan-300">
              &lt;img <br />
              &nbsp;&nbsp;src="./hero.webp" <br />
              &nbsp;&nbsp;alt="Frontend course preview" <br />
              {hasSize && (
                <>
                  &nbsp;&nbsp;width="800" <br />
                  &nbsp;&nbsp;height="500" <br />
                </>
              )}
              /&gt;
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCompressAlt}
        label="GZIP"
        title="GZIP nima va nima uchun kerak?"
        color="text-violet-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-violet-400/20 bg-violet-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              GZIP oddiy tushuncha
            </h4>
            <p className="leading-8 text-slate-300">
              GZIP server HTML, CSS va JavaScript fayllarni browserga
              yuborishdan oldin siqib beradi. Fayl hajmi kichrayadi, internet
              orqali tezroq keladi, sayt tezroq ochiladi.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <div className="grid gap-4">
              <SizeLine label="style.css oldin" value="120 KB" bad />
              <SizeLine label="style.css GZIP keyin" value="28 KB" />
              <SizeLine label="app.js oldin" value="350 KB" bad />
              <SizeLine label="app.js GZIP keyin" value="90 KB" />
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Best practice"
        title="Rasm optimallashtirish qoidalari"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Keraksiz katta rasm ishlatmang",
              "WEBP formatni sinab ko‘ring",
              "img uchun width va height yozing",
              "alt attributini to‘liq yozing",
              "Logo/icon uchun SVG yoki PNG ishlating",
              "Real photo uchun JPG yoki WEBP ishlating",
              "Rasm nomini tushunarli qiling: hero-student.webp",
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
            code={`<!-- Yaxshi yozilgan img -->
<img
  src="./images/hero-student.webp"
  alt="Frontend kursida laptopda kod yozayotgan o‘quvchi"
  width="800"
  height="500"
/>

/* CSS */
.hero-image {
  width: 100%;
  max-width: 520px;
  border-radius: 32px;
  object-fit: cover;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineRateReview}
        label="2-oy review"
        title="Kim nimani yaxshi tushunmadi?"
        color="text-pink-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {Object.entries({
              colors: "Ranglar",
              box: "Box Model",
              display: "Display",
              flex: "Flexbox",
              fonts: "Fontlar",
              landing: "Landing page",
              optimization: "Optimization",
            }).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() =>
                  setWeakTopics({ ...weakTopics, [key]: !weakTopics[key] })
                }
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left font-black transition ${
                  weakTopics[key]
                    ? "border-pink-400 bg-pink-400/15 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/10"
                }`}
              >
                {weakTopics[key] ? "🔁 Takrorlash kerak: " : "✅ Tushunarli: "}
                {label}
              </button>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <p className="text-sm font-black text-pink-600">Repeat plan</p>
            <h3 className="mt-1 text-4xl font-black">
              {weakCount} ta mavzu qayta ko‘riladi
            </h3>

            <div className="mt-6 rounded-3xl bg-slate-100 p-5">
              <p className="font-bold text-slate-600">
                Dars oxirida har o‘quvchidan so‘rang:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>Qaysi mavzu eng oson bo‘ldi?</li>
                <li>Qaysi mavzu qiyin bo‘ldi?</li>
                <li>Qaysi propertyni amaliyotda ishlata olasan?</li>
                <li>Keyingi modulda nimani kuchaytirish kerak?</li>
              </ul>
            </div>
          </div>
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-emerald-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Kahoot style"
          title="2-oy yakuniy quiz — 15 savol"
          color="text-yellow-300"
        />

        <div className="mb-5 mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
          <div className="mb-3 flex items-center justify-between text-white">
            <span className="font-black">Quiz progress</span>
            <span className="font-black text-yellow-300">{quizProgress}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ width: `${quizProgress}%` }}
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Badge>To‘g‘ri: {correctCount}</Badge>
            <Badge>Xato: {answeredCount - correctCount}</Badge>
            <Badge>Jami: {quiz.length}</Badge>
          </div>
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

function PerformanceHero({ score, optimized, hasSize, gzipOn }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-emerald-600">
            Final optimization
          </p>
          <h3 className="text-3xl font-black">Performance Lab</h3>
        </div>
        <MdSpeed className="text-5xl text-emerald-500" />
      </div>

      <div className="rounded-[30px] bg-gradient-to-br from-emerald-600 to-cyan-500 p-6 text-white">
        <p className="text-white/75">Score</p>
        <h4 className="text-7xl font-black">{score}</h4>
        <p className="mt-2 text-white/80">/ 100</p>

        <div className="mt-6 grid gap-3">
          <MiniCheck active={optimized} label="Optimized image" />
          <MiniCheck active={hasSize} label="width / height" />
          <MiniCheck active={gzipOn} label="GZIP compression" />
        </div>
      </div>
    </motion.div>
  );
}

function MiniCheck({ active, label }) {
  return (
    <div className="rounded-2xl bg-white/15 p-3 font-black backdrop-blur">
      {active ? "✅" : "⚠️"} {label}
    </div>
  );
}

function ToggleCard({ active, title, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full cursor-pointer rounded-3xl border p-5 text-left transition ${
        active
          ? "border-emerald-400 bg-emerald-400/15"
          : "border-red-400/30 bg-red-400/10 hover:bg-red-400/15"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-black text-white">{title}</h4>
        {active ? (
          <FaCheckCircle className="text-emerald-300" />
        ) : (
          <FaTimesCircle className="text-red-300" />
        )}
      </div>
      <p className="text-sm text-slate-300">{text}</p>
    </button>
  );
}

function SizeLine({ label, value, bad = false }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-4">
      <span className="font-bold text-slate-600">{label}</span>
      <span
        className={`font-black ${bad ? "text-red-500" : "text-emerald-600"}`}
      >
        {value}
      </span>
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
      <Icon className="mb-3 text-3xl text-emerald-300" />
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
      <Icon className="mb-4 text-4xl text-emerald-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white">
      {children}
    </span>
  );
}
