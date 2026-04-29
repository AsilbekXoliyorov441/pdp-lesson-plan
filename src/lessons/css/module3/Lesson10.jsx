import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaGitAlt,
  FaCodeBranch,
  FaRocket,
  FaTerminal,
  FaCloudUploadAlt,
  FaDownload,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaFolderOpen,
  FaHistory,
  FaLink,
  FaUserFriends,
  FaLock,
} from "react-icons/fa";
import { MdQuiz, MdOutlineSaveAlt } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const commandTabs = {
  init: {
    title: "git init",
    color: "from-orange-500 to-red-500",
    desc: "Loyihani Git bilan kuzatishni boshlaydi. Papka ichida yashirin .git papkasi yaratiladi.",
    code: `git init`,
  },
  add: {
    title: "git add",
    color: "from-cyan-500 to-blue-500",
    desc: "O‘zgargan fayllarni staging area’ga qo‘shadi. Commit qilishdan oldingi tayyorlash bosqichi.",
    code: `git add .
git status`,
  },
  commit: {
    title: "git commit",
    color: "from-emerald-500 to-teal-500",
    desc: "Kodning hozirgi holatini save point sifatida saqlaydi.",
    code: `git commit -m "first commit"`,
  },
  push: {
    title: "git push",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Local kompyuterdagi commitlarni GitHub’ga yuklaydi.",
    code: `git push -u origin main`,
  },
};

const workflowSteps = [
  {
    icon: FaFolderOpen,
    title: "Project folder",
    text: "Portfolio loyihangiz papkasini oching.",
    command: `cd portfolio-project`,
  },
  {
    icon: FaGitAlt,
    title: "Git init",
    text: "Loyihani Git repository qiling.",
    command: `git init`,
  },
  {
    icon: MdOutlineSaveAlt,
    title: "Add files",
    text: "Barcha fayllarni staging area’ga qo‘shing.",
    command: `git add .`,
  },
  {
    icon: FaHistory,
    title: "Commit",
    text: "Birinchi save point yarating.",
    command: `git commit -m "portfolio project"`,
  },
  {
    icon: FaLink,
    title: "Connect GitHub",
    text: "GitHub repo bilan ulang.",
    command: `git remote add origin https://github.com/username/portfolio.git`,
  },
  {
    icon: FaCloudUploadAlt,
    title: "Push",
    text: "Loyihani GitHub’ga yuklang.",
    command: `git push -u origin main`,
  },
];

const quiz = [
  {
    question: "Git nima uchun ishlatiladi?",
    options: [
      "Kod versiyalarini saqlash uchun",
      "Rasm compress qilish uchun",
      "CSS yozish uchun",
    ],
    correct: 0,
  },
  {
    question: "GitHub nima?",
    options: ["Online repository platforma", "HTML tegi", "Browser extension"],
    correct: 0,
  },
  {
    question: "Qaysi buyruq save point yaratadi?",
    options: ["git commit", "git clone", "git pull"],
    correct: 0,
  },
  {
    question: ".gitignore nima qiladi?",
    options: [
      "Keraksiz fayllarni Git’dan yashiradi",
      "GitHub profilni o‘chiradi",
      "Branch yaratadi",
    ],
    correct: 0,
  },
  {
    question: "git push nima qiladi?",
    options: [
      "Commitlarni GitHub’ga yuklaydi",
      "Git’ni o‘rnatadi",
      "Terminalni yopadi",
    ],
    correct: 0,
  },
  {
    question: "Conflict qachon chiqadi?",
    options: [
      "Bir xil joyni ikki kishi o‘zgartirganda",
      "Rasm yuklanmaganda",
      "CSS ishlamaganda",
    ],
    correct: 0,
  },
];

export default function GitGithubLesson10() {
  const [activeTab, setActiveTab] = useState("init");
  const [activeStep, setActiveStep] = useState(0);
  const [showConflict, setShowConflict] = useState(false);
  const [answers, setAnswers] = useState({});

  const tab = commandTabs[activeTab];

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
        className="relative overflow-hidden rounded-[38px] border border-orange-400/20 bg-gradient-to-br from-[#1f1305] via-[#0f172a] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-orange-300">
              <HiSparkles />
              GitHub • 10-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Git va GitHub bilan ishlash
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun o‘quvchilar Git orqali kod versiyalarini saqlashni,
              GitHub’da repository ochishni, push/pull/clone qilishni, branch
              bilan ishlashni va conflict hal qilishni amaliy o‘rganadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge icon={FaGitAlt} title="Git" text="version control" />
              <HeroBadge icon={FaGithub} title="GitHub" text="online repo" />
              <HeroBadge
                icon={FaRocket}
                title="Deploy mindset"
                text="real workflow"
              />
            </div>
          </div>

          <GitHeroCard />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaTerminal}
        label="Git basics"
        title="Git nima va nega kerak?"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaHistory}
            title="Time Machine"
            text="Git kodning eski holatlarini saqlab boradi. Xato bo‘lsa, oldingi versiyaga qaytish mumkin."
          />
          <InfoCard
            icon={FaUserFriends}
            title="Team Work"
            text="Bir nechta developer bitta loyiha ustida tartibli ishlashi uchun Git juda muhim."
          />
          <InfoCard
            icon={FaGithub}
            title="Portfolio"
            text="GitHub orqali o‘quvchilar loyihalarini online ko‘rsatishi mumkin."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaGitAlt}
        label="Git vs GitHub"
        title="Git va GitHub farqi"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <CompareCard
            icon={FaGitAlt}
            title="Git"
            badge="Local"
            text="Kompyuteringizda ishlaydi. Kod tarixini, commitlarni va branchlarni saqlaydi."
            items={[
              "git init",
              "git add",
              "git commit",
              "git status",
              "git log",
            ]}
          />

          <CompareCard
            icon={FaGithub}
            title="GitHub"
            badge="Online"
            text="Internetdagi repository platforma. Kodni saqlash, ulashish va jamoa bilan ishlash uchun kerak."
            items={["repository", "push", "pull", "clone", "collaboration"]}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaTerminal}
        label="Command lab"
        title="Asosiy Git buyruqlari"
        color="text-emerald-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(commandTabs).map(([key, item]) => (
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
              className={`rounded-[32px] bg-gradient-to-br ${tab.color} p-7`}
            >
              <h4 className="mb-3 text-3xl font-black text-white md:text-4xl">
                {tab.title}
              </h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                {tab.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={tab.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLock}
        label="Real problem"
        title=".gitignore nima uchun kerak?"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-red-400/20 bg-red-400/10 p-6">
            <FaExclamationTriangle className="mb-4 text-5xl text-red-300" />
            <h4 className="mb-4 text-3xl font-black text-white">
              Noto‘g‘ri holat
            </h4>
            <p className="mb-5 leading-7 text-slate-300">
              node_modules, .env yoki dist kabi fayllarni GitHub’ga yuklash
              kerak emas. Bu loyiha hajmini oshiradi yoki secret key chiqib
              ketishi mumkin.
            </p>
            <CodePanel
              code={`node_modules/
.env
dist/
.DS_Store`}
            />
          </div>

          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <FaCheckCircle className="mb-4 text-5xl text-emerald-300" />
            <h4 className="mb-4 text-3xl font-black text-white">
              To‘g‘ri yechim
            </h4>
            <p className="mb-5 leading-7 text-slate-300">
              Loyiha root qismida .gitignore fayl ochiladi va Git kuzatmasligi
              kerak bo‘lgan fayllar yoziladi.
            </p>
            <CodePanel
              code={`# dependencies
node_modules/

# environment
.env

# build
dist/
build/`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCloudUploadAlt}
        label="Main practice"
        title="Portfolio loyihasini GitHub’ga yuklash"
        color="text-violet-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const active = activeStep === index;

              return (
                <motion.button
                  key={step.title}
                  whileHover={{ x: 7 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveStep(index)}
                  className={`w-full cursor-pointer rounded-3xl border p-4 text-left transition ${
                    active
                      ? "border-violet-400 bg-violet-400/20"
                      : "border-white/10 bg-slate-950/70 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${
                        active
                          ? "bg-violet-400 text-slate-950"
                          : "bg-white/10 text-violet-300"
                      }`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <h4 className="font-black text-white">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-sm text-slate-400">{step.text}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="mb-5 rounded-[28px] bg-slate-950 p-6 text-white">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-violet-300">
                    Step {activeStep + 1}
                  </p>
                  <h4 className="text-3xl font-black">
                    {workflowSteps[activeStep].title}
                  </h4>
                </div>
                <FaRocket className="text-5xl text-violet-300" />
              </div>

              <p className="leading-7 text-slate-300">
                {workflowSteps[activeStep].text}
              </p>
            </div>

            <CodePanel code={workflowSteps[activeStep].command} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaDownload}
        label="Team workflow"
        title="clone, pull, push va branch"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          <CommandCard
            icon={FaDownload}
            title="clone"
            text="Repository’ni GitHub’dan kompyuterga yuklab olish."
            code="git clone link"
          />
          <CommandCard
            icon={FaCloudUploadAlt}
            title="push"
            text="Local commitlarni GitHub’ga yuborish."
            code="git push"
          />
          <CommandCard
            icon={FaDownload}
            title="pull"
            text="GitHub’dagi yangi o‘zgarishlarni olish."
            code="git pull"
          />
          <CommandCard
            icon={FaCodeBranch}
            title="branch"
            text="Asosiy kodni buzmasdan alohida ishlash."
            code="git branch feature"
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCodeBranch}
        label="Conflict lab"
        title="Git conflictni tushunish"
        color="text-red-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setShowConflict(!showConflict)}
              className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
                showConflict
                  ? "bg-red-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {showConflict
                ? "Conflict ko‘rsatilmoqda"
                : "Conflict demo ochish"}
            </button>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-5 text-slate-300">
              <b className="text-red-300">Conflict</b> — ikki developer bitta
              faylning bir xil joyini o‘zgartirganda chiqadi. To‘g‘ri kod
              tanlanadi, markerlar o‘chiriladi va yana commit qilinadi.
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <AnimatePresence mode="wait">
              {showConflict ? (
                <motion.div
                  key="conflict"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                >
                  <CodePanel
                    code={`<<<<<<< HEAD
<h1>My Portfolio</h1>
=======
<h1>Asilbek Portfolio Website</h1>
>>>>>>> feature-branch`}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="clean"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                >
                  <CodePanel
                    code={`<h1>Asilbek Portfolio Website</h1>

git add .
git commit -m "fix conflict"`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Best practice"
        title="Commit yozish madaniyati"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <PracticeCard
            good
            title="Yaxshi commit"
            items={[
              "add navbar section",
              "fix hero responsive bug",
              "create portfolio cards",
              "update contact form UI",
              "remove unused images",
            ]}
          />

          <PracticeCard
            title="Yomon commit"
            items={["update", "fix", "123", "final", "new changes"]}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-orange-400/10 to-violet-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Git & GitHub quiz"
          color="text-orange-300"
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

function GitHeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-orange-600">
            Developer Workflow
          </p>
          <h3 className="text-2xl font-black md:text-3xl">GitHub Ready</h3>
        </div>
        <FaGithub className="text-5xl text-slate-950" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-violet-600 p-6 shadow-2xl"
        >
          <FaGitAlt className="mb-5 text-5xl" />
          <h4 className="text-3xl font-black">Version Control</h4>
          <p className="mt-2 text-white/75">
            Kod tarixini saqlang, GitHub’ga yuklang va professional developer
            kabi ishlang.
          </p>
        </motion.div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {["add", "commit", "push"].map((item) => (
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

function CompareCard({ icon: Icon, title, badge, text, items }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.01 }}
      className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <Icon className="text-5xl text-orange-300" />
        <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950">
          {badge}
        </span>
      </div>

      <h4 className="mb-3 text-3xl font-black text-white">{title}</h4>
      <p className="mb-5 leading-7 text-slate-300">{text}</p>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CommandCard({ icon: Icon, title, text, code }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-[30px] border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="mb-4 text-sm leading-6 text-slate-300">{text}</p>

      <pre className="rounded-2xl bg-black/50 p-4 font-mono text-xs text-cyan-300">
        {code}
      </pre>
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
      <p className="mb-3 text-sm font-black text-slate-400">Terminal / Code:</p>
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
      <Icon className="mb-3 text-2xl text-orange-300 md:text-3xl" />
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
      <Icon className="mb-4 text-4xl text-orange-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
