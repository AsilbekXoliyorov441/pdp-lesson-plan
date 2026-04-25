import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code2,
  Monitor,
  Server,
  Database,
  Globe,
  Palette,
  Zap,
  Gamepad2,
  Keyboard,
  CheckCircle,
  XCircle,
  Sparkles,
  Rocket,
  MousePointerClick,
  ShoppingCart,
  MessageCircle,
  Trophy,
  Play,
  Target,
  Flame,
  Star,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const techs = {
  html: {
    title: "HTML",
    subtitle: "Sahifaning skeleti",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    text: "HTML web sahifadagi matn, rasm, tugma, sarlavha va bo‘limlarni joylashtiradi.",
    example: "Uy qurishda HTML — bu devor, xona va asosiy konstruktsiya.",
  },
  css: {
    title: "CSS",
    subtitle: "Sahifaning dizayni",
    icon: Palette,
    color: "from-blue-500 to-cyan-400",
    text: "CSS sahifaga rang, chiroy, joylashuv, o‘lcham, animatsiya va zamonaviy ko‘rinish beradi.",
    example: "Uy qurishda CSS — bu bo‘yoq, mebel, chiroqlar va bezaklar.",
  },
  js: {
    title: "JavaScript",
    subtitle: "Sahifaning miyasi",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    text: "JavaScript button bosilganda nima bo‘lishini, modal ochilishini, hisoblagich ishlashini boshqaradi.",
    example: "Uyda JS — bu elektr, lift, smart qurilmalar va avtomatik eshik.",
  },
};

const projects = [
  {
    title: "YouTube",
    icon: Play,
    color: "from-red-500 to-orange-500",
    items: ["Navbar", "Search input", "Video card", "Like button"],
  },
  {
    title: "Amazon",
    icon: ShoppingCart,
    color: "from-yellow-400 to-orange-500",
    items: ["Product card", "Cart", "Price", "Buy button"],
  },
  {
    title: "Instagram",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-500",
    items: ["Story", "Post card", "Comment", "Profile"],
  },
];

const quiz = [
  {
    question: "Frontend dasturchi nima qiladi?",
    options: [
      "Saytning foydalanuvchi ko‘radigan qismini yaratadi",
      "Faqat kompyuter tuzatadi",
      "Internet tezligini oshiradi",
    ],
    correct: 0,
  },
  {
    question: "HTML nima uchun kerak?",
    options: [
      "Sahifani interaktiv qilish uchun",
      "Sahifa skeletini yaratish uchun",
      "Server ochish uchun",
    ],
    correct: 1,
  },
  {
    question: "CSS nima qiladi?",
    options: [
      "Dizayn, rang va joylashuv beradi",
      "Parollarni saqlaydi",
      "Kompyuterni yoqadi",
    ],
    correct: 0,
  },
  {
    question: "JavaScript nima qiladi?",
    options: [
      "Sahifani harakatga keltiradi",
      "Faqat rasm chiqaradi",
      "Internetni o‘chiradi",
    ],
    correct: 0,
  },
];

export default function HtmlLesson1() {
  const [activeTech, setActiveTech] = useState("html");
  const [answers, setAnswers] = useState({});
  const [count, setCount] = useState(0);
  const [activeMission, setActiveMission] = useState(0);

  const active = techs[activeTech];
  const ActiveIcon = active.icon;

  const correctCount = quiz.filter(
    (item, index) => answers[index] === item.correct,
  ).length;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="mx-auto max-w-[1320px] space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-bold text-orange-300"
            >
              <Sparkles size={16} />
              1-DARS • Frontend asoslari
            </motion.div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Frontend dasturchi o‘zi kim?
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun IT, Frontend, Backend, HTML, CSS va JavaScriptni oddiy,
              visual va interaktiv misollar bilan tushunamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroStat title="Maqsad" value="Tushunish" />
              <HeroStat title="Format" value="Interactive" />
              <HeroStat title="Natija" value="Frontendni tanish" />
            </div>
          </div>

          <LessonMissionBoard
            activeMission={activeMission}
            setActiveMission={setActiveMission}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={Target}
        label="Dars yo‘li"
        title="Bugun nimalarni bosqichma-bosqich o‘rganamiz?"
        color="text-cyan-300"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <RoadmapCard
            number="01"
            title="IT nima?"
            text="Texnologiyalar olami bilan tanishamiz."
          />
          <RoadmapCard
            number="02"
            title="Frontend"
            text="Saytning ko‘rinadigan qismini tushunamiz."
          />
          <RoadmapCard
            number="03"
            title="Backend"
            text="Sahna ortida nima bo‘lishini ko‘ramiz."
          />
          <RoadmapCard
            number="04"
            title="HTML/CSS/JS"
            text="3 ta asosiy texnologiyani ajratamiz."
          />
        </div>
      </PremiumSection>

      <motion.section variants={fadeUp} className="grid gap-5 lg:grid-cols-2">
        <GlassCard>
          <CardTitle
            icon={Monitor}
            label="Ko‘rinadigan qism"
            title="Frontend"
            color="text-cyan-300"
          />

          <p className="leading-7 text-slate-300">
            Frontend — foydalanuvchi ko‘radigan va ishlatadigan qism: button,
            rasm, menu, input, card, login page, dashboard.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-6 rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="h-4 w-28 rounded-full bg-cyan-300" />
              <div className="h-8 w-8 rounded-full bg-white/20" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>

            <motion.button
              whileTap={{ scale: 0.92 }}
              className="mt-4 rounded-xl bg-cyan-400 px-5 py-2 font-black text-slate-950"
            >
              Men buttonman
            </motion.button>
          </motion.div>
        </GlassCard>

        <GlassCard>
          <CardTitle
            icon={Server}
            label="Sahna orti"
            title="Backend"
            color="text-purple-300"
          />

          <p className="leading-7 text-slate-300">
            Backend — foydalanuvchi ko‘rmaydigan, lekin sayt ishlashi uchun
            muhim qism: login, server, database, buyurtma, xavfsizlik.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-6 rounded-3xl border border-purple-400/20 bg-slate-950/70 p-5"
          >
            <BackendRow label="Login" value="asilbek" />
            <BackendRow label="Password" value="*********" />
            <div className="mt-4 rounded-2xl bg-emerald-400/15 p-4 font-bold text-emerald-300">
              Server javobi: Kirish muvaffaqiyatli ✅
            </div>
          </motion.div>
        </GlassCard>
      </motion.section>

      <PremiumSection
        icon={Brain}
        label="Esda qoladigan misol"
        title="Restoran orqali tushunamiz"
        color="text-yellow-300"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ExplainCard
            icon={Monitor}
            title="Frontend"
            text="Mijoz ko‘radigan zal, menyu, stol va chiroyli dizayn."
          />
          <ExplainCard
            icon={Server}
            title="Backend"
            text="Oshxona, oshpazlar va buyurtmani tayyorlash jarayoni."
          />
          <ExplainCard
            icon={Database}
            title="Database"
            text="Menu, narxlar va buyurtmalar saqlanadigan joy."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Globe}
        label="Live Visual Demo"
        title="HTML, CSS, JavaScript farqi"
        color="text-orange-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(techs).map(([key, item]) => {
            const Icon = item.icon;

            return (
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.94 }}
                key={key}
                onClick={() => setActiveTech(key)}
                className={`flex items-center gap-2 rounded-2xl px-5 py-3 font-black transition ${
                  activeTech === key
                    ? "bg-white text-slate-950 shadow-xl"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Icon size={18} />
                {item.title}
              </motion.button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[30px] bg-gradient-to-br ${active.color} p-7`}
            >
              <ActiveIcon className="mb-4 text-white" size={46} />
              <p className="mb-2 text-sm font-bold text-white/80">
                {active.subtitle}
              </p>
              <h4 className="mb-4 text-4xl font-black text-white">
                {active.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{active.text}</p>
              <div className="mt-5 rounded-2xl bg-white/15 p-4 text-sm font-bold text-white">
                {active.example}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-6">
            <p className="mb-4 text-sm font-bold text-slate-400">
              Natija preview:
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
              >
                {activeTech === "html" && <HtmlPreview />}
                {activeTech === "css" && <CssPreview />}
                {activeTech === "js" && (
                  <JsPreview count={count} setCount={setCount} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Rocket}
        label="Real saytlar"
        title="Katta loyihalarda frontend qayerda?"
        color="text-pink-300"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -10, rotate: index === 1 ? 1 : -1 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.05] p-5"
              >
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${project.color}`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                <h4 className="mb-4 text-2xl font-black text-white">
                  {project.title}
                </h4>

                <div className="space-y-2">
                  {project.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Lightbulb}
        label="O‘quvchi eslab qolishi uchun"
        title="Frontendni 10 soniyada tushuntirish"
        color="text-amber-300"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <MemoryCard
            icon={Code2}
            title="HTML"
            text="Nima bor?"
            desc="Matn, rasm, tugma, forma, link."
          />
          <MemoryCard
            icon={Palette}
            title="CSS"
            text="Qanday ko‘rinadi?"
            desc="Rang, joylashuv, o‘lcham, chiroy."
          />
          <MemoryCard
            icon={Zap}
            title="JavaScript"
            text="Nima qiladi?"
            desc="Bosilganda ishlaydi, sanaydi, ochadi, yopadi."
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <CardTitle
          icon={Gamepad2}
          label="Mini Game"
          title="Tezkor viktorina"
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
                      className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm font-bold transition ${
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
        label="Amaliy mashq"
        title="Klaviaturada tez yozishni mashq qilamiz"
        color="text-purple-300"
      >
        <p className="mb-5 max-w-[1600px] leading-7 text-slate-300">
          Dasturchi uchun tez va xatosiz yozish juda muhim. Dars oxirida
          o‘quvchilar 5-10 daqiqa typing practice qiladi.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <TypingCard title="Typing.com" url="https://www.typing.com" />
          <TypingCard title="Monkeytype" url="https://monkeytype.com" />
          <TypingCard title="Keybr" url="https://www.keybr.com" />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={Flame}
        label="Next lesson teaser"
        title="Keyingi darsda nima qilamiz?"
        color="text-orange-300"
      >
        <div className="rounded-[30px] border border-orange-400/20 bg-orange-400/10 p-6">
          <h4 className="mb-3 text-3xl font-black text-white">
            O‘zimizning birinchi HTML sahifamizni yaratamiz!
          </h4>
          <p className="max-w-[1600px] text-slate-300 leading-7">
            Keyingi darsda kod yozishni boshlaymiz: sarlavha, paragraph, button,
            rasm va linklar bilan birinchi mini web sahifani yasaymiz.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {["HTML structure", "Heading", "Paragraph", "Button", "Link"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-orange-200"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-slate-950/70 p-6"
      >
        <h3 className="mb-5 text-2xl font-black text-white">
          Dars oxirida o‘quvchi nimalarni bilishi kerak?
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {[
            "IT nima ekanini oddiy tilda tushuntira oladi",
            "Frontend dasturchi kimligini ayta oladi",
            "Frontend va Backend farqini hayotiy misol bilan tushuntiradi",
            "HTML, CSS, JavaScript vazifasini ajrata oladi",
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
      </motion.section>
    </motion.div>
  );
}

function LessonMissionBoard({ activeMission, setActiveMission }) {
  const missions = [
    {
      title: "IT nima?",
      text: "Atrofimizdagi saytlar, ilovalar, o‘yinlar va smart tizimlar IT orqali yaratiladi.",
      icon: Brain,
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Frontend kim?",
      text: "Frontend dasturchi foydalanuvchi ko‘radigan chiroyli web sahifalarni yaratadi.",
      icon: Monitor,
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Nima o‘rganamiz?",
      text: "HTML bilan skelet, CSS bilan dizayn, JavaScript bilan harakat beramiz.",
      icon: Rocket,
      color: "from-purple-400 to-pink-500",
    },
  ];

  const CurrentIcon = missions[activeMission].icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
    >
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 left-5 h-52 w-52 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-cyan-300">Lesson Mission</p>
            <h3 className="text-2xl font-black text-white">
              Bugungi sarguzasht
            </h3>
          </div>

          <motion.div
            key={activeMission}
            initial={{ rotate: -20, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            className={`grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${missions[activeMission].color}`}
          >
            <CurrentIcon className="text-white" size={32} />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMission}
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.96 }}
            className={`rounded-[28px] bg-gradient-to-br ${missions[activeMission].color} p-6`}
          >
            <h4 className="mb-3 text-3xl font-black text-white">
              {missions[activeMission].title}
            </h4>
            <p className="text-lg leading-8 text-white/90">
              {missions[activeMission].text}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 grid gap-3">
          {missions.map((mission, index) => (
            <motion.button
              key={mission.title}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveMission(index)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                activeMission === index
                  ? "border-cyan-300 bg-cyan-300/10 text-white"
                  : "border-white/10 bg-slate-950/50 text-slate-300 hover:bg-white/10"
              }`}
            >
              <span className="font-bold">
                {index + 1}. {mission.title}
              </span>
              <span>{activeMission === index ? "🚀" : "→"}</span>
            </motion.button>
          ))}
        </div>
      </div>
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

function RoadmapCard({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-3xl font-black text-white/20">{number}</span>
        <ArrowRight className="text-cyan-300" size={20} />
      </div>
      <h4 className="mb-2 text-xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-400">{text}</p>
    </motion.div>
  );
}

function GlassCard({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="rounded-[36px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
    >
      {children}
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

function BackendRow({ label, value }) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-2xl bg-white/5 p-4">
      <span className="text-sm text-slate-400">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

function ExplainCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
    >
      <Icon className="mb-4 text-cyan-300" size={30} />
      <h4 className="mb-3 text-xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function MemoryCard({ icon: Icon, title, text, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white">
          <Icon size={28} />
        </div>
        <Star className="text-yellow-300" />
      </div>

      <h4 className="mb-2 text-3xl font-black text-white">{title}</h4>
      <p className="mb-3 text-xl font-black text-cyan-300">{text}</p>
      <p className="text-sm leading-6 text-slate-400">{desc}</p>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <motion.div
      animate={{ opacity: [0.45, 1, 0.45] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="h-24 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/20"
    />
  );
}

function HtmlPreview() {
  return (
    <div className="rounded-3xl bg-white p-6 text-slate-950">
      <h1 className="text-3xl font-black">Salom PDP Junior!</h1>
      <p className="mt-2">Bu mening birinchi web sahifam.</p>
      <button className="mt-5 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white">
        Boshlash
      </button>
    </div>
  );
}

function CssPreview() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 p-6 text-white shadow-2xl">
      <h1 className="text-3xl font-black">Chiroyli Card</h1>
      <p className="mt-2 text-white/80">Bu CSS yordamida bezatildi.</p>
      <button className="mt-5 rounded-xl bg-white px-5 py-3 font-black text-blue-600">
        Hover qiling
      </button>
    </div>
  );
}

function JsPreview({ count, setCount }) {
  return (
    <div className="rounded-3xl bg-slate-900 p-6 text-center text-white">
      <p className="mb-2 text-slate-400">JavaScript click hodisasi</p>
      <motion.h1
        key={count}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-5 text-6xl font-black text-yellow-300"
      >
        {count}
      </motion.h1>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setCount(count + 1)}
        className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-slate-950"
      >
        Click me
      </motion.button>
    </div>
  );
}

function TypingCard({ title, url }) {
  return (
    <motion.a
      whileHover={{ y: -6, scale: 1.02 }}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-3xl border border-white/10 bg-slate-950/60 p-5 hover:border-purple-400/40 hover:bg-purple-400/10"
    >
      <Keyboard className="mb-4 text-purple-300" size={30} />
      <h4 className="mb-2 text-xl font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">Amaliyot qilish uchun ochish</p>
    </motion.a>
  );
}
