import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorCog,
  Wifi,
  Globe,
  Code2,
  Puzzle,
  FolderOpen,
  FileText,
  Archive,
  Camera,
  CheckCircle,
  XCircle,
  MousePointerClick,
  Sparkles,
  Terminal,
  Settings,
  Gamepad2,
  Rocket,
  Trophy,
  Keyboard,
  Download,
  Eye,
  FolderTree,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const setupSteps = [
  {
    title: "VS Code o‘rnatish",
    icon: Download,
    color: "from-blue-500 to-cyan-400",
    text: "Code yozish uchun eng qulay editorlardan biri — Visual Studio Code.",
    actions: [
      "Google’dan VS Code deb qidirish",
      "Official saytga kirish",
      "Download tugmasini bosish",
      "Install qilish",
    ],
  },
  {
    title: "Theme va font sozlash",
    icon: Settings,
    color: "from-purple-500 to-pink-500",
    text: "Ko‘z charchamasligi uchun dark theme va qulay font size tanlanadi.",
    actions: [
      "Settings ochish",
      "Color Theme tanlash",
      "Font size 16-18 qilish",
      "Auto Save yoqish",
    ],
  },
  {
    title: "Extension o‘rnatish",
    icon: Puzzle,
    color: "from-orange-500 to-red-500",
    text: "Extensionlar kod yozishni tezlashtiradi va xatolarni kamaytiradi.",
    actions: [
      "Extensions panel ochish",
      "Live Server qidirish",
      "Prettier o‘rnatish",
      "Auto Rename Tag o‘rnatish",
    ],
  },
];

const extensions = [
  {
    name: "Live Server",
    icon: Rocket,
    desc: "HTML faylni browserda jonli ko‘rsatadi. Save qilsangiz, sahifa yangilanadi.",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    name: "Prettier",
    icon: Code2,
    desc: "Kodlarni avtomatik chiroyli qilib formatlaydi.",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Auto Rename Tag",
    icon: FileText,
    desc: "Ochilgan va yopilgan HTML taglarni birga o‘zgartiradi.",
    color: "from-orange-400 to-red-500",
  },
];

const fileMethods = [
  {
    title: "1-usul",
    name: "File → Open Folder",
    text: "VS Code ichidan File menyusiga kirib, Open Folder tanlanadi.",
  },
  {
    title: "2-usul",
    name: "Drag & Drop",
    text: "Papka sichqoncha bilan VS Code oynasiga tortib tashlanadi.",
  },
  {
    title: "3-usul",
    name: "Right click → Open with Code",
    text: "Papka ustiga o‘ng tugma bosib, Open with Code tanlanadi.",
  },
];

const quiz = [
  {
    question: "VS Code nima uchun kerak?",
    options: [
      "Kod yozish uchun",
      "Faqat video ko‘rish uchun",
      "Internet tarqatish uchun",
    ],
    correct: 0,
  },
  {
    question: "Live Server nima qiladi?",
    options: [
      "HTML faylni browserda jonli ochadi",
      "Kompyuterni o‘chiradi",
      "Rasm chizadi",
    ],
    correct: 0,
  },
  {
    question: "Prettier nima uchun kerak?",
    options: [
      "Kodlarni chiroyli formatlash uchun",
      "Wi-Fi tezlatish uchun",
      "Zip ochish uchun",
    ],
    correct: 0,
  },
  {
    question: "Developer Tools qayerda ishlatiladi?",
    options: [
      "Browserda sahifani tekshirish uchun",
      "Telegramda yozish uchun",
      "Klaviatura almashtirish uchun",
    ],
    correct: 0,
  },
];

export default function HtmlLesson2() {
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});
  const [activeFileMethod, setActiveFileMethod] = useState(0);

  const correctCount = quiz.filter(
    (item, index) => answers[index] === item.correct,
  ).length;

  const step = setupSteps[activeStep];
  const StepIcon = step.icon;

  function toggleCheck(key) {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
            >
              <Sparkles size={16} />
              2-DARS • Ishchi muhitni tayyorlash
            </motion.div>

            <h2 className="mb-5 text-3xl font-black leading-tight text-white md:text-6xl">
              Kod yozishga tayyorlanamiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun kompyuter, internet, browser, VS Code, extensionlar, fayl va
              papka strukturasi, zip hamda screenshot olishni amaliy o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroStat title="Maqsad" value="Setup qilish" />
              <HeroStat title="Format" value="Step by step" />
              <HeroStat title="Natija" value="Kodga tayyor" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-20 left-5 h-52 w-52 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-cyan-300">
                    Setup Mission
                  </p>
                  <h3 className="text-2xl font-black text-white">
                    Bugungi vazifa
                  </h3>
                </div>

                <motion.div
                  key={activeStep}
                  initial={{ rotate: -20, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  className={`grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${step.color}`}
                >
                  <StepIcon className="text-white" size={32} />
                </motion.div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 30, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.96 }}
                  className={`rounded-[28px] bg-gradient-to-br ${step.color} p-6`}
                >
                  <h4 className="mb-3 text-3xl font-black text-white">
                    {step.title}
                  </h4>
                  <p className="text-lg leading-8 text-white/90">{step.text}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 grid gap-3">
                {setupSteps.map((item, index) => (
                  <motion.button
                    key={item.title}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActiveStep(index)}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 text-left transition ${
                      activeStep === index
                        ? "border-cyan-300 bg-cyan-300/10 text-white"
                        : "border-white/10 bg-slate-950/50 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <span className="font-bold">
                      {index + 1}. {item.title}
                    </span>
                    <span>{activeStep === index ? "🚀" : "→"}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <PremiumSection
        icon={MonitorCog}
        label="Asosiy tushuncha"
        title="Kompyuter, internet va browser qanday ishlaydi?"
        color="text-cyan-300"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <ConceptCard
            icon={MonitorCog}
            title="Kompyuter"
            text="Kompyuter buyruqlarni bajaradi. Biz kod yozamiz, kompyuter esa uni fayl sifatida saqlaydi va dasturlar orqali ishlatadi."
          />
          <ConceptCard
            icon={Wifi}
            title="Internet"
            text="Internet — kompyuterlar bir-biri bilan ma’lumot almashadigan ulkan tarmoq."
          />
          <ConceptCard
            icon={Globe}
            title="Browser"
            text="Browser HTML, CSS va JavaScriptni o‘qib, bizga web sahifa ko‘rinishida ko‘rsatadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Code2}
        label="Editor"
        title="VS Code nima va nima uchun kerak?"
        color="text-blue-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-blue-400/20 bg-blue-400/10 p-6">
            <Terminal className="mb-4 text-blue-300" size={42} />
            <h4 className="mb-3 text-3xl font-black text-white">
              Code editor — dasturchining ish stoli
            </h4>
            <p className="leading-7 text-slate-300">
              VS Code kod yozish, fayllarni boshqarish, sahifani browserda
              tekshirish va extensionlar bilan tez ishlash uchun kerak.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="grid gap-3 md:grid-cols-[180px_1fr]">
              <div className="rounded-2xl bg-white/5 p-4">
                {["index.html", "style.css", "script.js"].map((file) => (
                  <div
                    key={file}
                    className="mb-2 rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-300"
                  >
                    {file}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-slate-900 p-4 font-mono text-sm text-slate-300">
                <p className="text-orange-300">&lt;h1&gt;</p>
                <p className="pl-5 text-white">Salom PDP Junior!</p>
                <p className="text-orange-300">&lt;/h1&gt;</p>
                <p className="mt-4 text-cyan-300">/* Bu yerda kod yozamiz */</p>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Puzzle}
        label="Extensions"
        title="VS Code uchun eng kerakli extensionlar"
        color="text-purple-300"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {extensions.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                key={item.name}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
              >
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${item.color}`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h4 className="mb-3 text-2xl font-black text-white">
                  {item.name}
                </h4>
                <p className="text-sm leading-6 text-slate-300">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={CheckCircle}
        label="Amaliy checklist"
        title="O‘quvchi darsda bajarishi kerak"
        color="text-emerald-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {setupSteps[activeStep].actions.map((action, index) => {
            const key = `${activeStep}-${index}`;
            const isChecked = checked[key];

            return (
              <motion.button
                key={action}
                whileTap={{ scale: 0.97 }}
                onClick={() => toggleCheck(key)}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left transition ${
                  isChecked
                    ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                    : "border-white/10 bg-slate-950/60 text-slate-300 hover:bg-white/10"
                }`}
              >
                <CheckCircle
                  size={20}
                  className={isChecked ? "text-emerald-300" : "text-slate-500"}
                />
                <span className="font-bold">{action}</span>
              </motion.button>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Globe}
        label="Browser"
        title="Developer Tools bilan tanishamiz"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <h4 className="mb-4 text-2xl font-black text-white">
              DevTools qanday ochiladi?
            </h4>

            <div className="space-y-3">
              {[
                "Chrome browserni oching",
                "Sayt ustida o‘ng tugma bosing",
                "Inspect tugmasini tanlang",
                "Elements bo‘limida HTML strukturani ko‘ring",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-400/15 font-black text-orange-300">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-orange-400/20 bg-slate-950/70 p-5">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="rounded-2xl bg-white p-4 text-slate-950">
              <h1 className="text-2xl font-black">My First Website</h1>
              <p className="mt-2">Bu sahifa browserda ko‘rinadi.</p>
              <button className="mt-4 cursor-pointer rounded-xl bg-slate-900 px-5 py-2 font-bold text-white">
                Button
              </button>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-900 p-4 font-mono text-sm text-orange-300">
              &lt;h1&gt;My First Website&lt;/h1&gt;
              <br />
              &lt;p&gt;Bu sahifa browserda ko‘rinadi.&lt;/p&gt;
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FolderOpen}
        label="Folder va fayl"
        title="Papka va fayl strukturasini tushunamiz"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[30px] border border-yellow-400/20 bg-yellow-400/10 p-6">
            <FolderTree className="mb-4 text-yellow-300" size={42} />
            <h4 className="mb-3 text-3xl font-black text-white">
              Project tartibli bo‘lishi kerak
            </h4>
            <p className="leading-7 text-slate-300">
              Dasturchi fayllarni tartib bilan saqlaydi. Aks holda projectda
              adashib qoladi.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-5 font-mono">
            <TreeItem level={0} icon={FolderOpen} text="my-first-website" />
            <TreeItem level={1} icon={FileText} text="index.html" />
            <TreeItem level={1} icon={FileText} text="style.css" />
            <TreeItem level={1} icon={FileText} text="script.js" />
            <TreeItem level={1} icon={FolderOpen} text="images" />
            <TreeItem level={2} icon={FileText} text="logo.png" />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FolderOpen}
        label="Fayl ochish"
        title="Fayl yoki papkani ochishning 3 ta usuli"
        color="text-cyan-300"
      >
        <div className="mb-5 flex flex-wrap gap-3">
          {fileMethods.map((item, index) => (
            <motion.button
              key={item.title}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFileMethod(index)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeFileMethod === index
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFileMethod}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            className="rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-6"
          >
            <h4 className="mb-3 text-3xl font-black text-white">
              {fileMethods[activeFileMethod].name}
            </h4>
            <p className="text-lg leading-8 text-slate-300">
              {fileMethods[activeFileMethod].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </PremiumSection>

      <PremiumSection
        icon={Archive}
        label="Zip"
        title="Fayllarni ziplash nima uchun kerak?"
        color="text-pink-300"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ConceptCard
            icon={Archive}
            title="Bitta faylga yig‘ish"
            text="Ko‘p faylni bitta .zip fayl qilib yuborish oson bo‘ladi."
          />
          <ConceptCard
            icon={Rocket}
            title="Yuborish oson"
            text="Telegram, Google Drive yoki email orqali tez jo‘natiladi."
          />
          <ConceptCard
            icon={CheckCircle}
            title="Project saqlanadi"
            text="Papka strukturasi buzilmaydi, hamma fayl bir joyda turadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Camera}
        label="Screenshot"
        title="Screenshot olish va ulashish"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6">
            <h4 className="mb-4 text-2xl font-black text-white">
              Oddiy screenshot usullari
            </h4>

            <div className="space-y-3">
              {[
                "Windows: Win + Shift + S",
                "Mac: Command + Shift + 4",
                "Browserda: DevTools orqali elementni tekshirish",
                "Screenshotni nomlab saqlash",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-slate-300"
                >
                  <Camera className="text-emerald-300" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <Eye className="mb-4 text-emerald-300" size={42} />
            <h4 className="mb-3 text-3xl font-black text-white">
              Nega screenshot kerak?
            </h4>
            <p className="leading-7 text-slate-300">
              O‘quvchi xato yoki natijani o‘qituvchiga ko‘rsatishi uchun
              screenshot yuboradi. Bu debuggingni tezlashtiradi.
            </p>
          </div>
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <CardTitle
          icon={Gamepad2}
          label="Mini Game"
          title="Setup bo‘yicha tezkor viktorina"
          color="text-emerald-300"
        />

        <div className="mb-5 mt-6 flex items-center justify-between rounded-2xl bg-slate-950/60 p-4 text-white">
          <span>To‘g‘ri javoblar</span>
          <span className="flex items-center gap-2 font-black text-emerald-300">
            <Trophy size={18} />
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
                          <CheckCircle size={18} />
                        ) : (
                          <XCircle size={18} />
                        )
                      ) : (
                        <MousePointerClick size={18} />
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

      <PremiumSection
        icon={Keyboard}
        label="Uyga vazifa"
        title="Keyingi darsgacha bajariladigan mission"
        color="text-purple-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "VS Code o‘rnatish",
            "Live Server, Prettier, Auto Rename Tag extensionlarini o‘rnatish",
            "my-first-website nomli papka ochish",
            "index.html fayl yaratish",
            "Win + Shift + S orqali screenshot olishni mashq qilish",
            "Project papkasini zip qilib ko‘rish",
          ].map((item) => (
            <motion.div
              whileHover={{ x: 6 }}
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-slate-300"
            >
              <CheckCircle className="shrink-0 text-emerald-300" size={20} />
              {item}
            </motion.div>
          ))}
        </div>
      </PremiumSection>
    </motion.div>
  );
}

function HeroStat({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
    >
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-1 text-2xl font-black text-white">{value}</h3>
    </motion.div>
  );
}

function PremiumSection({ icon: Icon, label, title, color, children }) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-[36px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
    >
      <CardTitle icon={Icon} label={label} title={title} color={color} />
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}

function CardTitle({ icon: Icon, label, title, color }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ${color}`}
      >
        <Icon size={30} />
      </div>
      <div>
        <p className={`text-sm font-bold ${color}`}>{label}</p>
        <h3 className="text-2xl font-black text-white">{title}</h3>
      </div>
    </div>
  );
}

function ConceptCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
    >
      <Icon className="mb-4 text-cyan-300" size={32} />
      <h4 className="mb-3 text-xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function TreeItem({ level, icon: Icon, text }) {
  return (
    <div
      className="mb-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3 text-slate-300"
      style={{ marginLeft: `${level * 28}px` }}
    >
      <Icon size={20} className="text-yellow-300" />
      {text}
    </div>
  );
}
