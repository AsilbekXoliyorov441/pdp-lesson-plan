import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaHtml5,
  FaImage,
  FaParagraph,
  FaCheckCircle,
  FaTimesCircle,
  FaServer,
  FaUserAlt,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  MdQuiz,
  MdOutlineWeb,
  MdOutlineDashboardCustomize,
  MdPreview,
} from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";
import { IoLayers, IoDocumentText } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const landingParts = [
  {
    id: "hero",
    title: "Hero section",
    tag: "<section>",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Sahifadagi eng birinchi va eng kuchli qism. Visitor 3-5 sekundda sayt nima haqida ekanini tushunishi kerak.",
  },
  {
    id: "about",
    title: "About section",
    tag: "<section>",
    color: "from-cyan-500 to-blue-500",
    desc: "Loyiha yoki shaxs haqida qisqa, aniq va ishonchli ma’lumot beriladi.",
  },
  {
    id: "skills",
    title: "Skills section",
    tag: "<section>",
    color: "from-emerald-500 to-teal-500",
    desc: "Portfolio landingda o‘quvchi o‘z biladigan texnologiyalarini ro‘yxat yoki card qilib ko‘rsatadi.",
  },
  {
    id: "projects",
    title: "Projects section",
    tag: "<section>",
    color: "from-orange-500 to-red-500",
    desc: "O‘quvchining qilgan mini loyihalari yoki darsdagi ishlarini ko‘rsatadigan bo‘lim.",
  },
  {
    id: "contact",
    title: "Contact section",
    tag: "<address>",
    color: "from-pink-500 to-rose-500",
    desc: "Email, telefon, Telegram yoki ijtimoiy tarmoq linklari joylashadi.",
  },
];

const quiz = [
  {
    question: "Landing page asosiy maqsadi nima?",
    options: [
      "Bitta aniq maqsadga foydalanuvchini olib borish",
      "Faqat jadval ko‘rsatish",
      "Kompyuterni sozlash",
    ],
    correct: 0,
  },
  {
    question: "Hero section nimaga kerak?",
    options: [
      "Saytning asosiy g‘oyasini birinchi ko‘rsatish uchun",
      "Faqat footer qilish uchun",
      "Audio qo‘yish uchun",
    ],
    correct: 0,
  },
  {
    question: "Live Server nima uchun ishlatiladi?",
    options: [
      "HTML natijani browserda tez ko‘rish uchun",
      "Rasmni zip qilish uchun",
      "Telefon qilish uchun",
    ],
    correct: 0,
  },
  {
    question: "Portfolio landingda projects section nima ko‘rsatadi?",
    options: [
      "Qilingan ishlar va mini loyihalar",
      "Faqat parol",
      "Brauzer extensionlari",
    ],
    correct: 0,
  },
];

export default function HtmlLesson11() {
  const [activePart, setActivePart] = useState("hero");
  const [answers, setAnswers] = useState({});
  const [previewMode, setPreviewMode] = useState("desktop");

  const selected = landingParts.find((item) => item.id === activePart);

  const correctCount = quiz.filter(
    (item, index) => answers[index] === item.correct,
  ).length;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[42px] border border-cyan-400/20 bg-gradient-to-br from-[#071b2e] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              <HiSparkles />
              11-DARS • Landing structure 2-qism
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Portfolio landing sahifani HTML bilan takomillashtiramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun landing page maqsadini tushunamiz, asosiy bo‘limlarni HTML
              teglari bilan quramiz, rasm va matnlarni joylashtiramiz hamda
              natijani Live Server orqali browserda ko‘ramiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaRocket} title="Landing" text="Aniq maqsad" />
              <HeroBadge icon={FaHtml5} title="HTML" text="Structure build" />
              <HeroBadge icon={MdPreview} title="Preview" text="Live Server" />
            </div>
          </div>

          <PortfolioHeroPreview mode={previewMode} setMode={setPreviewMode} />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdOutlineWeb}
        label="Landing page"
        title="Landing page nima va uning maqsadi?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaRocket}
            title="Bitta aniq maqsad"
            text="Landing page foydalanuvchini bitta actionga olib boradi: ro‘yxatdan o‘tish, bog‘lanish yoki portfolio ko‘rish."
          />
          <InfoCard
            icon={FaParagraph}
            title="Qisqa va tushunarli"
            text="Matn uzun bo‘lmasligi kerak. Har section foydalanuvchiga aniq signal beradi."
          />
          <InfoCard
            icon={FaCheckCircle}
            title="Ishonch uyg‘otadi"
            text="Portfolio, skill, loyiha va kontaktlar o‘quvchini professional ko‘rsatadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={IoLayers}
        label="Section builder"
        title="Landing page asosiy qismlarini quramiz"
        color="text-violet-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {landingParts.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePart(item.id)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activePart === item.id
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
              key={activePart}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${selected.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">{selected.tag}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {selected.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{selected.desc}</p>
            </motion.div>
          </AnimatePresence>

          <LandingPartCode active={activePart} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Effective HTML"
        title="Samarali landing page HTML strukturasi"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "header ichida logo va nav bo‘ladi",
              "main ichida sahifaning asosiy bo‘limlari bo‘ladi",
              "section har bir alohida mavzu uchun ishlatiladi",
              "article project card yoki testimonial uchun qulay",
              "address contact ma’lumotlarini semantik qiladi",
              "footer sahifaning yakuniy qismi bo‘ladi",
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

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-7 text-slate-300">
            <p className="text-orange-300">&lt;header&gt;...&lt;/header&gt;</p>
            <p className="text-purple-300">&lt;main&gt;</p>
            <p className="pl-5 text-cyan-300">
              &lt;section id="hero"&gt;...&lt;/section&gt;
            </p>
            <p className="pl-5 text-cyan-300">
              &lt;section id="about"&gt;...&lt;/section&gt;
            </p>
            <p className="pl-5 text-cyan-300">
              &lt;section id="skills"&gt;...&lt;/section&gt;
            </p>
            <p className="pl-5 text-cyan-300">
              &lt;section id="projects"&gt;...&lt;/section&gt;
            </p>
            <p className="pl-5 text-pink-300">
              &lt;address&gt;...&lt;/address&gt;
            </p>
            <p className="text-purple-300">&lt;/main&gt;</p>
            <p className="text-orange-300">&lt;footer&gt;...&lt;/footer&gt;</p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaImage}
        label="Content placement"
        title="Rasm va matnlarni joylashtirish"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <section className="grid gap-5 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-3xl font-black">Hi, I am Asilbek</h3>
                <p className="mt-3 text-slate-600">
                  I am learning frontend development at PDP Junior.
                </p>
                <button className="mt-5 cursor-pointer rounded-2xl bg-slate-900 px-5 py-3 font-black text-white">
                  Contact me
                </button>
              </div>

              <div className="grid h-56 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 text-6xl">
                🧑‍💻
              </div>
            </section>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-7">
            <p className="text-cyan-300">&lt;section class="hero"&gt;</p>
            <p className="pl-5 text-white">&lt;div&gt;</p>
            <p className="pl-10 text-orange-300">
              &lt;h1&gt;Hi, I am Asilbek&lt;/h1&gt;
            </p>
            <p className="pl-10 text-slate-300">
              &lt;p&gt;I am learning frontend...&lt;/p&gt;
            </p>
            <p className="pl-10 text-purple-300">
              &lt;button&gt;Contact me&lt;/button&gt;
            </p>
            <p className="pl-5 text-white">&lt;/div&gt;</p>
            <p className="pl-5 text-emerald-300">
              &lt;img src="profile.png" alt="Asilbek coding" /&gt;
            </p>
            <p className="text-cyan-300">&lt;/section&gt;</p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaServer}
        label="Live Server"
        title="Natijani browserda ko‘rish"
        color="text-purple-300"
      >
        <div className="grid gap-5 md:grid-cols-4">
          <StepCard
            number="01"
            title="index.html"
            text="HTML faylni yarating yoki oching."
          />
          <StepCard
            number="02"
            title="Right click"
            text="Fayl ustida o‘ng tugma bosing."
          />
          <StepCard
            number="03"
            title="Open with Live Server"
            text="Live Server orqali browserda oching."
          />
          <StepCard
            number="04"
            title="Save + preview"
            text="Har saqlaganda natijani tekshiring."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineDashboardCustomize}
        label="Amaliy mashg‘ulot"
        title="Portfolio landing page loyihasini takomillashtirish"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Hero sectionga ism, kasb va CTA yozish",
              "About sectionga o‘zingiz haqingizda 2-3 gap yozish",
              "Skills sectionga HTML, CSS, JS ro‘yxatini qo‘shish",
              "Projects sectionga kamida 2 ta mini loyiha card qo‘shish",
              "Contact sectionga email va telefon link qo‘shish",
              "Footerga copyright yozish",
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

          <PortfolioLandingPreview />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Landing page structure quiz"
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
                  const selectedAnswer = answers[questionIndex] === optionIndex;
                  const correct = item.correct === optionIndex;

                  return (
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      key={option}
                      onClick={() =>
                        setAnswers({
                          ...answers,
                          [questionIndex]: optionIndex,
                        })
                      }
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left text-sm font-bold transition ${
                        selectedAnswer && correct
                          ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                          : selectedAnswer && !correct
                            ? "border-red-400 bg-red-400/20 text-red-300"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {selectedAnswer ? (
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

function PortfolioHeroPreview({ mode, setMode }) {
  const isMobile = mode === "mobile";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-slate-950/80 p-5"
    >
      <div className="mb-4 flex gap-3">
        {["desktop", "mobile"].map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={`cursor-pointer rounded-2xl px-4 py-2 font-black ${
              mode === item
                ? "bg-white text-slate-950"
                : "bg-white/10 text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className={`mx-auto rounded-[30px] bg-white p-4 text-slate-950 transition-all ${
          isMobile ? "max-w-[300px]" : "max-w-full"
        }`}
      >
        <header className="mb-3 flex items-center justify-between rounded-2xl bg-slate-900 p-4 text-white">
          <strong>Asilbek</strong>
          {!isMobile && (
            <nav className="flex gap-3 text-sm text-slate-300">
              <span>About</span>
              <span>Skills</span>
              <span>Projects</span>
            </nav>
          )}
        </header>

        <section
          className={`grid gap-4 rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-600 p-5 text-white ${
            isMobile ? "" : "md:grid-cols-2 md:items-center"
          }`}
        >
          <div>
            <h3 className="text-3xl font-black">Frontend Portfolio</h3>
            <p className="mt-2 text-white/80">HTML structure bilan qurildi.</p>
          </div>
          <div className="grid h-32 place-items-center rounded-2xl bg-white/20 text-5xl">
            🧑‍💻
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function LandingPartCode({ active }) {
  const code = {
    hero: `<section id="hero">
  <h1>Hi, I am Asilbek</h1>
  <p>Frontend student</p>
  <a href="#contact">Contact me</a>
</section>`,
    about: `<section id="about">
  <h2>About me</h2>
  <p>Men frontend o‘rganayapman.</p>
</section>`,
    skills: `<section id="skills">
  <h2>Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</section>`,
    projects: `<section id="projects">
  <h2>Projects</h2>
  <article>Portfolio card</article>
</section>`,
    contact: `<address id="contact">
  <a href="mailto:me@gmail.com">Email</a>
  <a href="tel:+998901234567">Phone</a>
</address>`,
  };

  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-cyan-300">
      <pre className="whitespace-pre-wrap">{code[active]}</pre>
    </div>
  );
}

function PortfolioLandingPreview() {
  return (
    <div className="rounded-[32px] bg-white p-5 text-slate-950">
      <header className="mb-3 flex justify-between rounded-2xl bg-slate-900 p-4 text-white">
        <strong>Asilbek</strong>
        <span className="text-sm text-slate-300">Portfolio</span>
      </header>

      <section className="rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-600 p-6 text-white">
        <h3 className="text-3xl font-black">Hi, I am Asilbek</h3>
        <p className="mt-2 text-white/80">Frontend developer student</p>
        <button className="mt-5 cursor-pointer rounded-2xl bg-white px-5 py-3 font-black text-violet-600">
          Contact me
        </button>
      </section>

      <section className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-cyan-100 p-4">
          <h4 className="font-black">HTML</h4>
          <p className="text-sm">Structure</p>
        </div>
        <div className="rounded-2xl bg-violet-100 p-4">
          <h4 className="font-black">CSS</h4>
          <p className="text-sm">Design</p>
        </div>
        <div className="rounded-2xl bg-emerald-100 p-4">
          <h4 className="font-black">JS</h4>
          <p className="text-sm">Logic</p>
        </div>
      </section>

      <footer className="mt-4 rounded-2xl bg-slate-200 p-4 text-sm">
        © 2026 Portfolio
      </footer>
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

function StepCard({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <span className="text-4xl font-black text-white/20">{number}</span>
      <h4 className="mb-2 mt-4 text-xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
