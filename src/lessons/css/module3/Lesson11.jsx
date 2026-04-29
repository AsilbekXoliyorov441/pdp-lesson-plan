import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCode,
  FaExternalLinkAlt,
  FaGem,
  FaGithub,
  FaGlobe,
  FaLink,
  FaRocket,
  FaServer,
  FaTimesCircle,
  FaUpload,
} from "react-icons/fa";
import { SiNetlify, SiVercel, SiGithub, SiGit } from "react-icons/si";
import { MdQuiz, MdCompareArrows, MdSettings } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const deployTabs = {
  deploy: {
    title: "Deploy nima?",
    color: "from-blue-500 to-cyan-500",
    desc: "Deploy — local kompyuteringizdagi saytni internetga joylash. Shundan keyin boshqalar ham link orqali saytingizni ko‘ra oladi.",
    code: `Local project:
http://localhost:5173

Deploy qilingandan keyin:
https://my-portfolio.vercel.app
https://my-portfolio.netlify.app`,
  },
  netlify: {
    title: "Netlify",
    color: "from-emerald-500 to-teal-500",
    desc: "Netlify oddiy HTML/CSS/JS va React loyihalarni tez deploy qilish uchun juda qulay. Drag & Drop deploy ham bor.",
    code: `Build command:
npm run build

Publish directory:
dist

Framework:
Vite / React`,
  },
  vercel: {
    title: "Vercel",
    color: "from-slate-800 to-black",
    desc: "Vercel React, Next.js va frontend loyihalar uchun professional platforma. GitHub bilan ulanib avtomatik deploy qiladi.",
    code: `Build command:
npm run build

Output directory:
dist

Framework preset:
Vite`,
  },
  domain: {
    title: "Custom domain",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Custom domain — saytingizga o‘z domeningizni ulash. Masalan: asilbekdev.uz yoki portfolio.uz.",
    code: `Default link:
my-site.vercel.app

Custom domain:
www.asilbekdev.uz`,
  },
};

const quiz = [
  {
    question: "Deploy nima?",
    options: [
      "Saytni internetga joylash",
      "Faqat CSS yozish",
      "Kompyuterni restart qilish",
    ],
    correct: 0,
  },
  {
    question: "Vercel ko‘proq qaysi framework bilan mashhur?",
    options: ["Next.js", "Photoshop", "Excel"],
    correct: 0,
  },
  {
    question: "Netlify’da Vite project uchun publish directory nima bo‘ladi?",
    options: ["dist", "src", "node_modules"],
    correct: 0,
  },
  {
    question: "GitHub orqali deploy qilishning foydasi nima?",
    options: [
      "Push qilinsa avtomatik deploy bo‘ladi",
      "Internet o‘chadi",
      "HTML ishlamaydi",
    ],
    correct: 0,
  },
  {
    question: "Custom domain nima?",
    options: [
      "Saytga o‘z domen nomini ulash",
      "Faqat logo qo‘yish",
      "Terminal buyrug‘i",
    ],
    correct: 0,
  },
  {
    question:
      "React/Vite projectni deploydan oldin qaysi command bilan tekshirish yaxshi?",
    options: ["npm run build", "delete src", "git reset pc"],
    correct: 0,
  },
];

export default function DeployLesson11() {
  const [activeTab, setActiveTab] = useState("deploy");
  const [platform, setPlatform] = useState("vercel");
  const [autoDeploy, setAutoDeploy] = useState(true);
  const [domainConnected, setDomainConnected] = useState(false);
  const [answers, setAnswers] = useState({});

  const tab = deployTabs[activeTab];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const platformInfo = {
    vercel: {
      name: "Vercel",
      icon: SiVercel,
      color: "from-black to-slate-800",
      link: "my-portfolio.vercel.app",
      desc: "React va Next.js loyihalar uchun juda professional deploy platforma.",
    },
    netlify: {
      name: "Netlify",
      icon: SiNetlify,
      color: "from-emerald-500 to-cyan-500",
      link: "my-portfolio.netlify.app",
      desc: "Oddiy frontend va React loyihalar uchun juda oson platforma.",
    },
  };

  const current = platformInfo[platform];
  const CurrentIcon = current.icon;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[38px] border border-blue-400/20 bg-gradient-to-br from-[#06142f] via-[#0b1020] to-[#020617] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-300">
              <FaGem />
              Frontend • Module Deploy • 11-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Netlify va Vercel’da deploy qilish
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bugun portfolio saytni local kompyuterdan internetga chiqaramiz:
              deploy nima, Netlify va Vercel farqi, GitHub orqali avtomatik
              deploy, custom domain ulash va oxirida tayyor link olishni amaliy
              bajaramiz.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaRocket}
                title="Deploy"
                text="Saytni internetga chiqarish"
              />
              <HeroBadge
                icon={FaGithub}
                title="GitHub"
                text="Auto deploy workflow"
              />
              <HeroBadge
                icon={FaGlobe}
                title="Domain"
                text="Custom link ulash"
              />
            </div>
          </div>

          <DeployHero
            platform={current}
            autoDeploy={autoDeploy}
            domainConnected={domainConnected}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaRocket}
        label="Deploy basics"
        title="Deploy nima?"
        color="text-blue-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaCode}
            title="Local"
            text="Sayt faqat sizning kompyuteringizda ishlaydi: localhost."
          />
          <InfoCard
            icon={FaUpload}
            title="Deploy"
            text="Sayt serverga joylanadi va internet orqali ochiladi."
          />
          <InfoCard
            icon={FaExternalLinkAlt}
            title="Live Link"
            text="O‘quvchi, ustoz yoki mijoz link orqali saytni ko‘ra oladi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdCompareArrows}
        label="Platform compare"
        title="Netlify va Vercel farqlari"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <PlatformCard
            icon={SiNetlify}
            title="Netlify"
            color="from-emerald-500 to-cyan-500"
            items={[
              "HTML/CSS/JS projectlar uchun juda qulay",
              "Drag & Drop deploy qilish mumkin",
              "Vite/React projectlarni tez chiqaradi",
              "Beginnerlar uchun tushunarli interfeys",
            ]}
          />
          <PlatformCard
            icon={SiVercel}
            title="Vercel"
            color="from-slate-900 to-black"
            items={[
              "React va Next.js uchun juda kuchli",
              "GitHub bilan avtomatik deploy",
              "Professional dashboard",
              "Frontend portfolio uchun juda mos",
            ]}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaServer}
        label="Deploy map"
        title="Muhim tushunchalarni interaktiv o‘rganamiz"
        color="text-violet-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(deployTabs).map(([key, item]) => (
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
        icon={SiGithub}
        label="GitHub workflow"
        title="GitHub repo orqali avtomatik deploy"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "Portfolio projectni GitHub’ga push qiling",
              "Vercel yoki Netlify accountga kiring",
              "New Project / Add new site tugmasini bosing",
              "GitHub repository tanlang",
              "Build command: npm run build",
              "Output / Publish directory: dist",
              "Deploy tugmasini bosing va live link oling",
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

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="rounded-[28px] bg-slate-950 p-5 text-white">
              <div className="mb-5 flex items-center gap-3">
                <SiGit className="text-4xl text-orange-400" />
                <div>
                  <p className="text-sm font-black text-slate-400">Terminal</p>
                  <h4 className="text-2xl font-black">GitHub push</h4>
                </div>
              </div>

              <CodePanel
                code={`git init
git add .
git commit -m "portfolio deploy ready"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main`}
              />
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdSettings}
        label="Deploy simulator"
        title="Platformani tanlang va deploy holatini ko‘ring"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Deploy platform"
              value={platform}
              setValue={setPlatform}
              options={[
                ["vercel", "Vercel"],
                ["netlify", "Netlify"],
              ]}
            />

            <ToggleButton
              active={autoDeploy}
              setActive={setAutoDeploy}
              activeText="Auto deploy yoqilgan"
              inactiveText="Auto deploy o‘chirilgan"
            />

            <ToggleButton
              active={domainConnected}
              setActive={setDomainConnected}
              activeText="Custom domain ulangan"
              inactiveText="Custom domain ulanmagan"
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div
              className={`rounded-[30px] bg-gradient-to-br ${current.color} p-6 text-white`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-white/60">
                    Deploy preview
                  </p>
                  <h4 className="text-3xl font-black">{current.name}</h4>
                </div>
                <CurrentIcon className="text-5xl" />
              </div>

              <div className="space-y-3">
                <StatusRow good text="GitHub repository connected" />
                <StatusRow
                  good={autoDeploy}
                  text="Automatic deploy after push"
                />
                <StatusRow good text="Build command: npm run build" />
                <StatusRow good text="Output directory: dist" />
                <StatusRow
                  good={domainConnected}
                  text="Custom domain connected"
                />
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-4">
                <p className="mb-2 text-sm font-black text-white/60">
                  Live link
                </p>
                <div className="flex items-center gap-3 font-black">
                  <FaLink />
                  {domainConnected ? "www.asilbekdev.uz" : current.link}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaGlobe}
        label="Custom domain"
        title="Custom domain ulash tartibi"
        color="text-pink-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <PracticeCard
            good
            title="Kerakli qadamlar"
            items={[
              "Domain sotib olinadi",
              "Vercel/Netlify dashboardga domain qo‘shiladi",
              "DNS recordlar sozlanadi",
              "SSL avtomatik yoqiladi",
              "Sayt o‘z domeningizda ochiladi",
            ]}
          />

          <PracticeCard
            title="Ehtiyot bo‘lish kerak"
            items={[
              "DNS yozuvlarini noto‘g‘ri qo‘ymaslik",
              "Oldingi A/CNAME recordlarni tekshirish",
              "Domain ishlashi uchun biroz vaqt kutish",
              "Build error bo‘lsa link ochilmasligini tushunish",
              "dist o‘rniga src yozib yubormaslik",
            ]}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Amaliy mashg‘ulot"
        title="Portfolio saytingizni deploy qilib linkini olish"
        color="text-blue-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "Portfolio projectni yakunlang",
              "npm run build qilib error bor-yo‘qligini tekshiring",
              "GitHub’da yangi repository oching",
              "Projectni GitHub’ga push qiling",
              "Vercel yoki Netlify’da GitHub repo tanlang",
              "Deploy settingsni tekshiring",
              "Deploy qiling va live linkni ustozga yuboring",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-blue-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <CodePanel
              code={`// 1. Projectni tekshirish
npm run build

// 2. GitHub'ga yuklash
git add .
git commit -m "deploy portfolio"
git push

// 3. Deploy settings
Build command: npm run build
Output directory: dist

// 4. Natija
https://your-portfolio.vercel.app`}
            />
          </div>
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Deploy quiz"
          color="text-blue-300"
        />

        <div className="mb-5 mt-6 flex items-center justify-between rounded-2xl bg-slate-950/60 p-4 text-white">
          <span>To‘g‘ri javoblar</span>
          <span className="flex items-center gap-2 font-black text-blue-300">
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

function DeployHero({ platform, autoDeploy, domainConnected }) {
  const Icon = platform.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-blue-600">Deploy Lab</p>
          <h3 className="text-2xl font-black md:text-3xl">Live Website</h3>
        </div>
        <FaRocket className="text-4xl text-blue-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <div
          className={`rounded-3xl bg-gradient-to-br ${platform.color} p-6 shadow-2xl`}
        >
          <Icon className="mb-5 text-5xl" />
          <h4 className="text-3xl font-black">{platform.name}</h4>
          <p className="mt-2 text-white/75">{platform.desc}</p>

          <div className="mt-5 space-y-3">
            <StatusRow good text="GitHub connected" />
            <StatusRow good={autoDeploy} text="Auto deploy" />
            <StatusRow good={domainConnected} text="Custom domain" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PlatformCard({ icon: Icon, title, color, items }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.01 }}
      className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70"
    >
      <div className={`bg-gradient-to-br ${color} p-6 text-white`}>
        <Icon className="mb-4 text-5xl" />
        <h4 className="text-3xl font-black">{title}</h4>
      </div>

      <div className="space-y-3 p-5">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-slate-300"
          >
            <FaCheckCircle className="text-emerald-300" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StatusRow({ good, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm font-bold text-white">
      {good ? (
        <FaCheckCircle className="text-emerald-300" />
      ) : (
        <FaTimesCircle className="text-red-300" />
      )}
      {text}
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

function ButtonGroup({ title, value, setValue, options }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setValue(key)}
            className={`cursor-pointer rounded-2xl px-4 py-3 text-sm font-black transition ${
              value === key
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

function ToggleButton({ active, setActive, activeText, inactiveText }) {
  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      className={`w-full cursor-pointer rounded-3xl px-5 py-4 font-black transition ${
        active
          ? "bg-blue-400 text-slate-950"
          : "bg-white/10 text-white hover:bg-white/20"
      }`}
    >
      {active ? activeText : inactiveText}
    </button>
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
