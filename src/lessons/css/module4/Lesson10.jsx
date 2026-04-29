import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaCrown,
  FaLightbulb,
  FaEye,
  FaBug,
  FaBroom,
  FaPuzzlePiece,
  FaComments,
  FaStar,
  FaUserCheck,
  FaListAlt,
} from "react-icons/fa";
import { MdQuiz, MdRateReview } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  readability: {
    title: "Code readability",
    icon: FaEye,
    color: "from-cyan-600 via-blue-600 to-indigo-700",
    simple: "Readable code — boshqa odam oson o‘qiy oladigan kod.",
    result:
      "Natija: o‘qituvchi, jamoa yoki kelajakdagi o‘zingiz kodni tez tushunadi.",
    badCode: `<div><h1>salom</h1><p>mening saytim</p><button>bos</button></div>`,
    goodCode: `<section class="hero">
  <h1>Welcome to my website</h1>
  <p>I build clean and responsive websites.</p>
  <button class="hero-btn">View Projects</button>
</section>`,
    review: [
      "Kod hammasi bitta qatorda yozilgan",
      "Elementlar ichma-ichligi ko‘rinmayapti",
      "Class nomlari yo‘q",
      "Good code’da indentation bor",
      "Good code’da section ma’noli ishlatilgan",
    ],
  },
  naming: {
    title: "Naming",
    icon: FaBroom,
    color: "from-violet-600 via-fuchsia-600 to-pink-700",
    simple: "Naming — class, id va variable nomlarini tushunarli yozish.",
    result:
      "Natija: .card, .navbar, .hero-title kabi nomlar kodni oson tushunarli qiladi.",
    badCode: `<div class="box1">
  <div class="aaa">Ali Valiyev</div>
  <button class="btn1">Click</button>
</div>`,
    goodCode: `<article class="student-card">
  <h3 class="student-name">Ali Valiyev</h3>
  <button class="student-card-btn">View Profile</button>
</article>`,
    review: [
      "box1, aaa, btn1 nomlari tushunarsiz",
      "student-card nomi element vazifasini bildiradi",
      "student-name kodni o‘qishni osonlashtiradi",
      "button vazifasi aniqroq yozilgan",
    ],
  },
  dry: {
    title: "DRY principle",
    icon: FaPuzzlePiece,
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    simple: "DRY — Don’t Repeat Yourself. Bir xil kodni qayta-qayta yozmaslik.",
    result: "Natija: kod qisqaradi, xato kamayadi, o‘zgartirish osonlashadi.",
    badCode: `.card-1 {
  padding: 20px;
  border-radius: 20px;
  background: #0f172a;
}

.card-2 {
  padding: 20px;
  border-radius: 20px;
  background: #0f172a;
}

.card-3 {
  padding: 20px;
  border-radius: 20px;
  background: #0f172a;
}`,
    goodCode: `.card {
  padding: 20px;
  border-radius: 20px;
  background: #0f172a;
}

.card-primary {
  border: 2px solid #22d3ee;
}

.card-success {
  border: 2px solid #34d399;
}`,
    review: [
      "Bad code’da bir xil style 3 marta takrorlangan",
      "Good code’da umumiy style .card ichiga yozilgan",
      "Farq qiladigan qismlar alohida class bilan berilgan",
      "Kod ixchamroq va professionalroq bo‘lgan",
    ],
  },
  kiss: {
    title: "KISS principle",
    icon: FaLightbulb,
    color: "from-amber-500 via-orange-600 to-red-700",
    simple: "KISS — Keep It Simple. Kodni keraksiz murakkablashtirmaslik.",
    result: "Natija: oddiy, qisqa va tushunarli kod yoziladi.",
    badCode: `.button-wrapper .button-container .button-box button.main-button.active:hover {
  background: linear-gradient(135deg, blue, purple);
}`,
    goodCode: `.primary-btn:hover {
  background: linear-gradient(135deg, blue, purple);
}`,
    review: [
      "Bad code selector juda uzun",
      "Uzun selectorni o‘zgartirish qiyin",
      "Good code qisqa va aniq",
      "KISS — oddiy yozish ham professional yondashuv",
    ],
  },
  semantic: {
    title: "Semantic HTML",
    icon: FaCode,
    color: "from-slate-700 via-blue-700 to-cyan-700",
    simple: "Semantic HTML — elementni vazifasiga qarab tanlash.",
    result: "Natija: kod SEO, accessibility va o‘qilishi uchun yaxshi bo‘ladi.",
    badCode: `<div class="top">
  <div class="menu">Menu</div>
</div>

<div class="content">
  <div class="title">My Blog</div>
</div>`,
    goodCode: `<header class="site-header">
  <nav class="navbar">Menu</nav>
</header>

<main class="site-main">
  <h1>My Blog</h1>
</main>`,
    review: [
      "Bad code’da hamma joyda div ishlatilgan",
      "Good code’da header, nav, main, h1 bor",
      "Semantic HTML kod ma’nosini kuchaytiradi",
      "Screen reader va SEO uchun ham foydali",
    ],
  },
};

const reviewSamples = [
  {
    title: "Indentation xatosi",
    before: `<section>
<h1>Portfolio</h1>
<p>My projects</p>
<div>
<button>View</button>
</div>
</section>`,
    after: `<section>
  <h1>Portfolio</h1>
  <p>My projects</p>

  <div>
    <button>View</button>
  </div>
</section>`,
    comments: [
      "Ichma-ich elementlar 2 space yoki 4 space bilan ajratildi",
      "Kod ko‘zga tartibli ko‘rindi",
      "Qaysi element qaysining ichida ekanligi aniq bo‘ldi",
    ],
  },
  {
    title: "Class nomlash xatosi",
    before: `<div class="quti">
  <h2 class="yozuv">Product</h2>
</div>`,
    after: `<article class="product-card">
  <h2 class="product-title">Product</h2>
</article>`,
    comments: [
      "quti va yozuv umumiy nom, professional emas",
      "product-card va product-title element vazifasini bildiradi",
      "article elementi card uchun semantikroq",
    ],
  },
  {
    title: "Takrorlangan CSS",
    before: `.btn-blue {
  padding: 14px 20px;
  border-radius: 14px;
  background: blue;
}

.btn-green {
  padding: 14px 20px;
  border-radius: 14px;
  background: green;
}`,
    after: `.btn {
  padding: 14px 20px;
  border-radius: 14px;
}

.btn-blue {
  background: blue;
}

.btn-green {
  background: green;
}`,
    comments: [
      "padding va radius takrorlanmayapti",
      "umumiy style .btn ichiga olindi",
      "ranglar alohida classlarda qoldi",
    ],
  },
];

const fullReviewCode = `<!-- BEFORE: review qilinadigan kod -->
<div class="box">
<h1>mening portfolio saytim</h1>
<p>men frontend o'rganayapman</p>
<div class="card1">
<h2>project 1</h2>
<button>bosish</button>
</div>
</div>

/* CSS */
.box {
background: black;
color: white;
padding: 20px;
}

.card1 {
background: blue;
padding: 20px;
border-radius: 20px;
}

.card2 {
background: blue;
padding: 20px;
border-radius: 20px;
}

/* AFTER: reviewdan keyingi kod */
<section class="portfolio">
  <h1 class="portfolio-title">Mening portfolio saytim</h1>
  <p class="portfolio-text">Men frontend dasturlashni o‘rganayapman.</p>

  <article class="project-card">
    <h2 class="project-title">Project 1</h2>
    <button class="project-btn">Ko‘rish</button>
  </article>
</section>

/* CSS */
.portfolio {
  padding: 20px;
  background: #020617;
  color: white;
}

.project-card {
  padding: 20px;
  border-radius: 20px;
  background: #2563eb;
}

.project-btn {
  border: none;
  border-radius: 14px;
  padding: 12px 18px;
  background: #22d3ee;
  color: #020617;
  font-weight: 900;
}`;

const checklist = [
  "Code review nima ekanligi tushuntirildi",
  "Readability tushuntirildi",
  "Indentation tekshirildi",
  "Naming tekshirildi",
  "DRY principle tushuntirildi",
  "KISS principle tushuntirildi",
  "Semantic HTML tushuntirildi",
  "Before/after code review qilindi",
  "O‘quvchilar kodini tahlil qilish mezoni berildi",
  "Yaxshi feedback berish qoidasi aytildi",
];

const quiz = [
  {
    question: "Code readability nima?",
    options: [
      "Kodni oson o‘qish va tushunish",
      "Kodga faqat rang berish",
      "Kodni yashirish",
    ],
    correct: 0,
  },
  {
    question: "DRY nimani anglatadi?",
    options: [
      "Bir xil kodni qayta-qayta yozmaslik",
      "Kodga animatsiya berish",
      "Rasmni kichraytirish",
    ],
    correct: 0,
  },
  {
    question: "KISS principle nimani maslahat beradi?",
    options: [
      "Kodni oddiy va tushunarli yozishni",
      "Kodni juda murakkab qilishni",
      "Hamma joyda ID ishlatishni",
    ],
    correct: 0,
  },
  {
    question: "Semantic HTML qaysi variantda to‘g‘ri?",
    options: [
      "header, nav, main, section",
      "div, div, div, div har doim",
      "Faqat span ishlatish",
    ],
    correct: 0,
  },
];

export default function CssM4L10() {
  const [activeConcept, setActiveConcept] = useState("readability");
  const [activeSample, setActiveSample] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});

  const current = concepts[activeConcept];
  const sample = reviewSamples[activeSample];

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
      transition={{ staggerChildren: 0.08 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[42px] border border-cyan-400/20 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 10-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Code Review — To‘g‘ri yozilgan kod
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bu darsda o‘quvchilar kod faqat ishlashi emas, balki chiroyli,
              tushunarli va professional yozilishi kerakligini o‘rganadi.
              Readability, naming, DRY, KISS va semantic HTML real misollar
              orqali tahlil qilinadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaEye}
                title="Readability"
                text="o‘qilishi oson"
              />
              <HeroBadge
                icon={FaBroom}
                title="Clean Code"
                text="tartibli kod"
              />
              <HeroBadge
                icon={FaComments}
                title="Review"
                text="feedback berish"
              />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Simple idea"
        title="Code review nima?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaCode}
            title="Kod ishlashi kerak"
            text="Birinchi maqsad — kod xatosiz ishlashi. Lekin bu yetarli emas."
          />
          <InfoCard
            icon={FaEye}
            title="Kod tushunarli bo‘lishi kerak"
            text="Boshqa odam kodni ko‘rsa, nima qilayotganini tez tushunishi kerak."
          />
          <InfoCard
            icon={FaUserCheck}
            title="Kod professional bo‘lishi kerak"
            text="Naming, indentation, DRY, KISS va semantic HTML professional kodning belgilaridir."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCrown}
        label="Code + Review"
        title="Clean code asoslari"
        color="text-indigo-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(concepts).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveConcept(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeConcept === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-cyan-400/20"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.8fr_1fr_0.9fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConcept}
              initial={{ opacity: 0, x: -22, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 22, scale: 0.97 }}
              className={`rounded-[34px] bg-gradient-to-br ${current.color} p-7`}
            >
              <current.icon className="mb-5 text-5xl text-white" />
              <h4 className="mb-4 text-3xl font-black text-white">
                {current.title}
              </h4>

              <div className="mb-4 rounded-2xl bg-white/15 p-4">
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  Oddiy tushuncha
                </p>
                <p className="mt-2 text-lg font-black leading-8 text-white">
                  {current.simple}
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  Natijasi
                </p>
                <p className="mt-2 leading-8 text-white/90">{current.result}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <CompareCode badCode={current.badCode} goodCode={current.goodCode} />

          <ReviewNotes notes={current.review} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdRateReview}
        label="Interactive review"
        title="Real code review misollari"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Review misolini tanlang
            </h4>

            <div className="grid gap-3">
              {reviewSamples.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setActiveSample(index);
                    setShowAfter(false);
                  }}
                  className={`cursor-pointer rounded-2xl border p-4 text-left font-black transition ${
                    activeSample === index
                      ? "border-cyan-300 bg-cyan-400/20 text-cyan-300"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAfter(!showAfter)}
              className={`mt-5 flex w-full cursor-pointer items-center justify-between rounded-3xl border p-5 font-black transition ${
                showAfter
                  ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                  : "border-white/10 bg-white/5 text-slate-300"
              }`}
            >
              {showAfter ? "After kod ko‘rinyapti" : "After kodni ko‘rsatish"}
              {showAfter ? <FaCheckCircle /> : <HiMiniCursorArrowRays />}
            </button>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              {sample.title}
            </h4>

            <CodePanel code={showAfter ? sample.after : sample.before} />

            <div className="mt-5">
              <ReviewNotes notes={sample.comments} />
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaListAlt}
        label="Student activity"
        title="Amaliy: o‘quvchilar kodini tahlil qilish"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "O‘quvchi o‘z portfolio yoki grid layout kodini ochadi",
              "Avval kod ishlayaptimi — tekshiriladi",
              "Keyin indentation tartibi ko‘riladi",
              "Class nomlari tushunarlimi — tekshiriladi",
              "Takrorlangan CSS bor-yo‘qligi aniqlanadi",
              "Semantic HTML ishlatilganmi — ko‘riladi",
              "O‘quvchi o‘z kodidagi 3 ta xatoni topadi",
              "Oxirida kodni tozalab, qayta yozadi",
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

          <CodePanel code={fullReviewCode} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Checklist"
        title="Code review checklist"
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
              <button
                key={item}
                onClick={() => setChecked({ ...checked, [index]: !active })}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left font-bold transition ${
                  active
                    ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                    : "border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                {active ? <FaCheckCircle /> : <HiMiniCursorArrowRays />}
                {item}
              </button>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaStar}
        label="Feedback culture"
        title="Code review’da feedback qanday beriladi?"
        color="text-yellow-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticeCard
            good
            title="Yaxshi feedback"
            items={[
              "Kod ishlayapti, endi uni yanada tartibli qilamiz",
              "Bu class nomini aniqroq yozsak yaxshi bo‘ladi",
              "Bu yerda bir xil CSS takrorlangan, umumiy class qilamiz",
              "Bu joyda div o‘rniga section ishlatsak ma’noliroq bo‘ladi",
              "Yaxshi harakat, endi professionalroq shaklga keltiramiz",
            ]}
          />

          <PracticeCard
            title="Noto‘g‘ri feedback"
            items={[
              "Koding yomon",
              "Buni noto‘g‘ri qilgansan",
              "Hech narsani bilmaysan",
              "Shunchaki boshidan yoz",
              "Sababini tushuntirmasdan tanqid qilish",
            ]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini quiz"
          title="Code Review quiz"
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
            <div
              key={item.question}
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
                    <button
                      type="button"
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
                            : "border-white/10 bg-white/5 text-slate-300"
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
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

function CompareCode({ badCode, goodCode }) {
  return (
    <div className="grid gap-5">
      <div>
        <div className="mb-3 flex items-center gap-2 text-red-300">
          <FaBug />
          <h4 className="font-black">Before — yaxshilash kerak</h4>
        </div>
        <CodePanel code={badCode} danger />
      </div>

      <div>
        <div className="mb-3 flex items-center gap-2 text-emerald-300">
          <FaCheckCircle />
          <h4 className="font-black">After — professionalroq</h4>
        </div>
        <CodePanel code={goodCode} />
      </div>
    </div>
  );
}

function ReviewNotes({ notes }) {
  return (
    <div className="rounded-[32px] border border-cyan-400/20 bg-slate-950/80 p-5">
      <div className="mb-4 flex items-center gap-3">
        <FaComments className="text-2xl text-cyan-300" />
        <h4 className="text-xl font-black text-white">Review notes:</h4>
      </div>

      <div className="space-y-3">
        {notes.map((note, index) => (
          <div
            key={note}
            className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300"
          >
            <span className="font-black text-cyan-300">{index + 1}.</span>
            <span>{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Clean Code</p>
          <h3 className="text-2xl font-black md:text-3xl">Review Panel</h3>
        </div>
        <MdRateReview className="text-5xl text-cyan-500" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <div className="mb-4 rounded-2xl border border-red-400/20 bg-red-400/10 p-4">
          <p className="font-mono text-sm text-red-200">
            &lt;div&gt;&lt;h1&gt;salom&lt;/h1&gt;&lt;/div&gt;
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
          <p className="font-mono text-sm text-emerald-200">
            &lt;section class="hero"&gt; ... &lt;/section&gt;
          </p>
        </div>

        <p className="mt-5 text-center text-sm font-bold text-slate-300">
          Before → Review → After
        </p>
      </div>
    </div>
  );
}

function CodePanel({ code, className = "", danger = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className={`relative rounded-[28px] border ${
        danger ? "border-red-400/20" : "border-cyan-400/20"
      } bg-slate-950/90 p-5 ${className}`}
    >
      <button
        type="button"
        onClick={handleCopy}
        className={`absolute right-4 top-4 flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-black text-slate-950 transition hover:scale-105 ${
          danger ? "bg-red-300" : "bg-cyan-300"
        }`}
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? "Copied" : "Copy"}
      </button>

      <p
        className={`mb-3 text-sm font-black ${
          danger ? "text-red-300" : "text-cyan-300"
        }`}
      >
        Code:
      </p>

      <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 pt-12 font-mono text-sm leading-7 text-cyan-100">
        {code}
      </pre>
    </div>
  );
}

function PremiumSection({ icon: Icon, label, title, color, children }) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-[34px] border border-white/10 bg-[#0f172a]/80 p-5 shadow-xl backdrop-blur-xl md:p-6"
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
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 md:p-5">
      <Icon className="mb-3 text-2xl text-cyan-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
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
