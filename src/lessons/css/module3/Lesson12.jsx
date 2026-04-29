import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaLaptopCode,
  FaRocket,
  FaGithub,
  FaMicrophoneAlt,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaPaintBrush,
  FaLayerGroup,
  FaEnvelope,
  FaFolderOpen,
  FaPlay,
  FaBullhorn,
  FaLightbulb,
  FaStar,
} from "react-icons/fa";
import { MdQuiz, MdOutlineDesignServices } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const sections = {
  header: {
    title: "Header",
    icon: FaLayerGroup,
    color: "from-blue-500 to-cyan-500",
    desc: "Portfolio sahifasining eng yuqori qismi. Ism, navigatsiya va call-to-action button bo‘ladi.",
    code: `<header class="hero">
  <nav>
    <h2>Asilbek</h2>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <h1>Frontend Developer</h1>
  <p>I build modern and responsive websites.</p>
  <button>View Projects</button>
</header>`,
  },
  about: {
    title: "About",
    icon: FaUserTie,
    color: "from-violet-500 to-fuchsia-500",
    desc: "O‘quvchi o‘zi haqida qisqa, ishonchli va sodda ma’lumot yozadi.",
    code: `<section id="about">
  <h2>About Me</h2>
  <p>
    I am a beginner frontend developer.
    I love creating beautiful websites with HTML and CSS.
  </p>
</section>`,
  },
  projects: {
    title: "Projects",
    icon: FaFolderOpen,
    color: "from-emerald-500 to-teal-500",
    desc: "Portfolio ichida 2–3 ta kichik loyiha card ko‘rinishida beriladi.",
    code: `<section id="projects">
  <h2>My Projects</h2>

  <div class="project-card">
    <h3>Landing Page</h3>
    <p>HTML and CSS project</p>
    <a href="#">View Demo</a>
  </div>
</section>`,
  },
  contact: {
    title: "Contact",
    icon: FaEnvelope,
    color: "from-orange-500 to-red-500",
    desc: "Bog‘lanish qismi: email, telefon, Telegram yoki GitHub link.",
    code: `<section id="contact">
  <h2>Contact Me</h2>
  <p>Email: asilbek@example.com</p>
  <p>GitHub: github.com/asilbek</p>
</section>`,
  },
};

const checklist = [
  "Header qismi bor",
  "About qismi yozilgan",
  "Projects cardlari qo‘shilgan",
  "Contact qismi bor",
  "Flexbox ishlatilgan",
  "Gradient background bor",
  "Hover pseudo-class ishlatilgan",
  "::before yoki ::after ishlatilgan",
  "Kamida bitta animation bor",
  "Responsive ko‘rinish tekshirilgan",
  "GitHub’ga yuklangan",
  "Deploy link olingan",
];

const presentationSteps = [
  {
    title: "1. O‘zingizni tanishtiring",
    text: "Assalomu alaykum, mening ismim ... Bugun men portfolio loyihamni taqdim qilaman.",
  },
  {
    title: "2. Loyiha maqsadini ayting",
    text: "Bu portfolio orqali men o‘zim haqimda, loyihalarim va kontaktlarimni ko‘rsatdim.",
  },
  {
    title: "3. Dizaynni tushuntiring",
    text: "Men gradient, flexbox, hover effect va animationlardan foydalandim.",
  },
  {
    title: "4. Kodni ko‘rsating",
    text: "Header, About, Projects va Contact qismlarini alohida tushuntiring.",
  },
  {
    title: "5. Xulosa qiling",
    text: "Bu loyiha orqali HTML, CSS va GitHub deploy qilishni mustahkamlab oldim.",
  },
];

const quiz = [
  {
    question: "Portfolio sahifasida Header nima uchun kerak?",
    options: [
      "Saytning yuqori qismi va navigatsiya uchun",
      "Faqat rasm qo‘yish uchun",
      "GitHub parolini saqlash uchun",
    ],
    correct: 0,
  },
  {
    question: "Projects qismida nima bo‘ladi?",
    options: [
      "O‘quvchining qilgan ishlari",
      "Faqat telefon raqam",
      "Faqat CSS ranglari",
    ],
    correct: 0,
  },
  {
    question: "Deploy nima?",
    options: ["Saytni internetga chiqarish", "Kod o‘chirish", "Rasm chizish"],
    correct: 0,
  },
  {
    question: "Taqdimotda eng muhim narsa nima?",
    options: [
      "Loyihani tushunarli qilib gapirish",
      "Juda tez gapirish",
      "Kodga qaramaslik",
    ],
    correct: 0,
  },
  {
    question: "Portfolio uchun qaysi bo‘limlar kerak?",
    options: [
      "Header, About, Projects, Contact",
      "Faqat Footer",
      "Faqat bitta button",
    ],
    correct: 0,
  },
];

export default function FinalPortfolioLesson12() {
  const [activeSection, setActiveSection] = useState("header");
  const [checked, setChecked] = useState({});
  const [activePresentation, setActivePresentation] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = sections[activeSection];

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
        className="relative overflow-hidden rounded-[38px] border border-blue-400/20 bg-gradient-to-br from-[#061833] via-[#0f172a] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-300">
              <HiSparkles />
              Final Project • 12-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Yakuniy loyiha – Portfolio + Taqdimot
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun har bir o‘quvchi boshlang‘ich darajadagi portfolio yaratadi,
              uni GitHub’ga yuklaydi, deploy qiladi va sahnada o‘z loyihasini
              demo + kod tushuntirish orqali taqdim qiladi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaLaptopCode}
                title="Portfolio"
                text="real project"
              />
              <HeroBadge icon={FaGithub} title="GitHub" text="upload code" />
              <HeroBadge
                icon={FaMicrophoneAlt}
                title="Presentation"
                text="speak confidently"
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
        color="text-blue-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaPaintBrush}
            title="Design"
            text="Header, About, Projects va Contact qismlaridan iborat chiroyli portfolio tuzish."
          />
          <InfoCard
            icon={FaCode}
            title="Code"
            text="Flexbox, gradient, pseudo-class, pseudo-element va animationlarni amalda qo‘llash."
          />
          <InfoCard
            icon={FaBullhorn}
            title="Speak"
            text="O‘quvchini sahnada loyihasini tushuntirishga tayyorlash."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineDesignServices}
        label="Portfolio structure"
        title="Portfolio sahifasining tuzilishi"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(sections).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeSection === key
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
              key={activeSection}
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
        icon={FaLaptopCode}
        label="Main practice"
        title="Boshlang‘ich portfolio loyihasi"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "index.html va style.css fayl ochiladi",
              "Header va navigatsiya yoziladi",
              "About Me qismi qo‘shiladi",
              "Projects cardlari yaratiladi",
              "Contact qismi qo‘shiladi",
              "Flexbox bilan joylashuv beriladi",
              "Gradient, hover va animation qo‘shiladi",
              "Responsive holat tekshiriladi",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-violet-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="rounded-[28px] bg-slate-950 p-5 text-white">
              <div className="rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 p-6">
                <h3 className="text-4xl font-black">My Portfolio</h3>
                <p className="mt-3 text-white/80">
                  Beginner Frontend Developer
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {["About", "Projects", "Contact"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/15 p-4 text-center font-black"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <CodePanel
              className="mt-5"
              code={`/* Final portfolio skills */
display: flex;
background: linear-gradient(...);
button:hover { transform: translateY(-4px); }
.card::before { content: ""; }
@keyframes fadeUp { ... }`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Project checklist"
        title="Portfolio tayyorligini tekshirish"
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
        icon={FaGithub}
        label="Upload and deploy"
        title="GitHub’ga yuklash va deploy qilish"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-orange-400/20 bg-orange-400/10 p-6">
            <FaGithub className="mb-4 text-5xl text-orange-300" />
            <h4 className="mb-4 text-3xl font-black text-white">
              GitHub workflow
            </h4>
            <CodePanel
              code={`git init
git add .
git commit -m "final portfolio project"
git remote add origin https://github.com/username/portfolio.git
git push -u origin main`}
            />
          </div>

          <div className="rounded-[32px] border border-blue-400/20 bg-blue-400/10 p-6">
            <FaRocket className="mb-4 text-5xl text-blue-300" />
            <h4 className="mb-4 text-3xl font-black text-white">
              Deploy workflow
            </h4>
            <div className="space-y-3">
              {[
                "GitHub repo ochilganini tekshirish",
                "Netlify yoki Vercel’ga kirish",
                "GitHub repository tanlash",
                "Deploy tugmasini bosish",
                "Portfolio linkini olish",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <span className="mr-3 font-black text-blue-300">
                    {index + 1}.
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMicrophoneAlt}
        label="Presentation training"
        title="O‘quvchilarni sahnada gapirishga tayyorlash"
        color="text-pink-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {presentationSteps.map((step, index) => (
              <motion.button
                key={step.title}
                whileHover={{ x: 7 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActivePresentation(index)}
                className={`w-full cursor-pointer rounded-3xl border p-4 text-left transition ${
                  activePresentation === index
                    ? "border-pink-400 bg-pink-400/20"
                    : "border-white/10 bg-slate-950/70 hover:bg-white/10"
                }`}
              >
                <h4 className="font-black text-white">{step.title}</h4>
                <p className="mt-1 text-sm text-slate-400">Taqdimot bosqichi</p>
              </motion.button>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="rounded-[28px] bg-slate-950 p-6 text-white">
              <FaMicrophoneAlt className="mb-5 text-5xl text-pink-300" />
              <h4 className="mb-4 text-3xl font-black">
                {presentationSteps[activePresentation].title}
              </h4>
              <p className="text-lg leading-8 text-slate-300">
                {presentationSteps[activePresentation].text}
              </p>
            </div>

            <div className="mt-5 rounded-[28px] bg-slate-100 p-5">
              <h5 className="mb-3 font-black text-slate-950">
                Speaking template:
              </h5>
              <p className="leading-7 text-slate-700">
                “Hello everyone. My name is ______. Today I want to present my
                portfolio project. In this project, I used HTML, CSS, Flexbox,
                gradient, hover effects and animations.”
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaStar}
        label="Assessment"
        title="O‘quvchini baholash mezonlari"
        color="text-yellow-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticeCard
            good
            title="Yaxshi natija"
            items={[
              "Portfolio tuzilishi aniq",
              "Dizayn chiroyli va tartibli",
              "Kod toza yozilgan",
              "GitHub link ishlaydi",
              "Deploy link ishlaydi",
              "O‘quvchi loyihani tushuntira oladi",
            ]}
          />

          <PracticeCard
            title="E’tibor berish kerak"
            items={[
              "Responsive tekshirilmagan",
              "Hover effect haddan tashqari ko‘p",
              "Projects qismi bo‘sh",
              "Commit nomlari tushunarsiz",
              "Taqdimotda juda past ovoz",
              "Demo link ishlamaydi",
            ]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-400/10 to-fuchsia-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Final portfolio quiz"
          color="text-blue-300"
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
          <p className="text-sm font-black text-blue-600">Final Demo</p>
          <h3 className="text-2xl font-black md:text-3xl">Student Portfolio</h3>
        </div>
        <FaPlay className="text-4xl text-blue-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-600 p-6 shadow-2xl"
        >
          <FaLaptopCode className="mb-5 text-5xl" />
          <h4 className="text-3xl font-black">My First Portfolio</h4>
          <p className="mt-2 text-white/75">
            HTML, CSS, GitHub va deploy bilan yakuniy loyiha.
          </p>
        </motion.div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {["Design", "Code", "Speak"].map((item) => (
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
      <Icon className="mb-3 text-2xl text-blue-300 md:text-3xl" />
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
      <Icon className="mb-4 text-4xl text-blue-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
