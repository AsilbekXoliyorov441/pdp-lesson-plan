import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaFileCode,
  FaFolderOpen,
  FaChrome,
  FaCode,
  FaHistory,
  FaTags,
  FaKeyboard,
  FaRocket,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import {
  HiSparkles,
  HiMiniCommandLine,
  HiMiniDocumentText,
  HiMiniCpuChip,
} from "react-icons/hi2";
import {
  MdOutlineWeb,
  MdOutlineTitle,
  MdOutlineDataObject,
  MdQuiz,
} from "react-icons/md";
import { IoDocumentText, IoLayers } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const structureParts = [
  {
    key: "doctype",
    title: "<!DOCTYPE html>",
    icon: HiMiniDocumentText,
    color: "from-orange-500 to-red-500",
    desc: "Browserga bu HTML5 hujjat ekanini aytadi. Ya’ni browser sahifani zamonaviy HTML qoidalari bilan o‘qiydi.",
    code: "<!DOCTYPE html>",
  },
  {
    key: "html",
    title: "<html>",
    icon: FaHtml5,
    color: "from-yellow-500 to-orange-500",
    desc: "Butun HTML sahifaning asosiy konteyneri. Hamma HTML kodlar shu tag ichida yoziladi.",
    code: '<html lang="uz"> ... </html>',
  },
  {
    key: "head",
    title: "<head>",
    icon: HiMiniCpuChip,
    color: "from-cyan-500 to-blue-500",
    desc: "Sahifa haqida ma’lumotlar joylashadi: title, meta, font, SEO, CSS linklar.",
    code: "<head> ... </head>",
  },
  {
    key: "body",
    title: "<body>",
    icon: MdOutlineWeb,
    color: "from-purple-500 to-pink-500",
    desc: "Foydalanuvchi browserda ko‘radigan barcha narsalar body ichida yoziladi.",
    code: "<body> ... </body>",
  },
];

const metaCards = [
  {
    title: "charset",
    code: '<meta charset="UTF-8" />',
    desc: "O‘zbekcha harflar to‘g‘ri chiqishi uchun kerak: o‘, g‘, sh, ch.",
  },
  {
    title: "viewport",
    code: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    desc: "Sayt telefon, planshet va kompyuter ekraniga moslashishi uchun kerak.",
  },
  {
    title: "description",
    code: '<meta name="description" content="Mening birinchi saytim" />',
    desc: "Google va boshqa qidiruv tizimlariga sahifa haqida qisqa ma’lumot beradi.",
  },
];

const quiz = [
  {
    question: "Nega boshlang‘ich fayl ko‘pincha index.html deb nomlanadi?",
    options: [
      "Server odatda birinchi shu faylni qidiradi",
      "Chunki boshqa nom ishlamaydi",
      "Faqat CSS uchun kerak",
    ],
    correct: 0,
  },
  {
    question: "<body> ichida nima yoziladi?",
    options: [
      "Foydalanuvchi ko‘radigan content",
      "Faqat meta taglar",
      "Faqat sayt nomi",
    ],
    correct: 0,
  },
  {
    question: "Juft tag qaysi?",
    options: ["<h1></h1>", "<img>", "<br>"],
    correct: 0,
  },
  {
    question: "HTML nima?",
    options: [
      "Web sahifa strukturasi uchun markup language",
      "Kompyuter o‘yini",
      "Internet tezligini oshiruvchi dastur",
    ],
    correct: 0,
  },
];

export default function HtmlLesson3() {
  const [activePart, setActivePart] = useState("doctype");
  const [answers, setAnswers] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const active = structureParts.find((item) => item.key === activePart);
  const ActiveIcon = active.icon;

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
        className="relative overflow-hidden rounded-[42px] border border-orange-400/20 bg-[#0b1020] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-black text-orange-300">
              <HiSparkles />
              3-DARS • HTML ga kirish
            </div>

            <h2 className="mb-5 text-3xl font-black leading-tight text-white md:text-6xl">
              HTML sahifaning ichki skeletini ochamiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun `index.html`, HTML tarixi, HTML4 vs HTML5, asosiy structure,
              meta taglar, juft/toq taglar va birinchi HTML sahifani yaratishni
              amaliy o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaHistory} title="Tarix" text="HTML4 → HTML5" />
              <HeroBadge icon={FaTags} title="Taglar" text="Juft va toq" />
              <HeroBadge icon={FaRocket} title="Natija" text="1-sahifa" />
            </div>
          </div>

          <CodeWindow />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaFileCode}
        label="Muhim savol"
        title="Nega aynan index.html?"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-orange-400/20 bg-orange-400/10 p-6">
            <FaFolderOpen className="mb-4 text-5xl text-orange-300" />
            <h4 className="mb-3 text-3xl font-black text-white">
              index.html — asosiy kirish eshigi
            </h4>
            <p className="leading-7 text-slate-300">
              Ko‘p serverlar papkani ochganda avtomatik ravishda
              <span className="font-bold text-orange-300"> index.html </span>
              faylini qidiradi. Shuning uchun birinchi sahifa odatda shu nom
              bilan yaratiladi.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-5 font-mono text-sm">
            <TreeLine level={0} text="my-website/" folder />
            <TreeLine level={1} text="index.html  ✅ birinchi ochiladi" />
            <TreeLine level={1} text="about.html" />
            <TreeLine level={1} text="contact.html" />
            <div className="mt-5 rounded-2xl bg-emerald-400/10 p-4 text-emerald-300">
              Browser yoki server: “Boshlash uchun index.html ni ochaman”
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaHistory}
        label="Qisqa tarix"
        title="HTML4 va HTML5 farqi"
        color="text-cyan-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CompareCard
            title="HTML4"
            desc="Eskiroq versiya. Ko‘p layoutlar div va table orqali qilinardi. Multimedia uchun ko‘pincha plugin kerak bo‘lardi."
            items={[
              "Kamroq semantic tag",
              "Video/audio noqulayroq",
              "Eski web davri",
            ]}
          />
          <CompareCard
            title="HTML5"
            desc="Zamonaviy web uchun qulay. Semantic taglar, video/audio, form imkoniyatlari va mobile-friendly yondashuv kuchli."
            items={[
              "header, main, section",
              "video/audio",
              "Mobile va SEO uchun yaxshi",
            ]}
            active
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={IoLayers}
        label="HTML anatomy"
        title="HTML faylining asosiy tuzilmasi"
        color="text-purple-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {structureParts.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.key}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePart(item.key)}
                className={`flex cursor-pointer items-center gap-2 rounded-2xl px-5 py-3 font-black transition ${
                  activePart === item.key
                    ? "bg-white text-slate-950"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Icon />
                {item.title}
              </motion.button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePart}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${active.color} p-7`}
            >
              <ActiveIcon className="mb-4 text-5xl text-white" />
              <h4 className="mb-3 text-4xl font-black text-white">
                {active.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{active.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-slate-300">
            <p className="text-orange-300">&lt;!DOCTYPE html&gt;</p>
            <p className="text-yellow-300">&lt;html lang="uz"&gt;</p>
            <p className="pl-5 text-cyan-300">&lt;head&gt;</p>
            <p className="pl-10 text-slate-300">
              &lt;meta charset="UTF-8" /&gt;
            </p>
            <p className="pl-10 text-slate-300">
              &lt;title&gt;My Website&lt;/title&gt;
            </p>
            <p className="pl-5 text-cyan-300">&lt;/head&gt;</p>
            <p className="pl-5 text-purple-300">&lt;body&gt;</p>
            <p className="pl-10 text-white">&lt;h1&gt;Salom!&lt;/h1&gt;</p>
            <p className="pl-5 text-purple-300">&lt;/body&gt;</p>
            <p className="text-yellow-300">&lt;/html&gt;</p>

            <div className="mt-5 rounded-2xl bg-white/5 p-4 text-white">
              Tanlangan qism:{" "}
              <span className="font-black text-orange-300">{active.code}</span>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineDataObject}
        label="Meta tags"
        title="Meta teglar nima uchun kerak?"
        color="text-emerald-300"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {metaCards.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
            >
              <MdOutlineTitle className="mb-4 text-4xl text-emerald-300" />
              <h4 className="mb-3 text-2xl font-black text-white">
                {item.title}
              </h4>
              <div className="mb-4 rounded-2xl bg-black/40 p-4 font-mono text-xs text-emerald-300">
                {item.code}
              </div>
              <p className="text-sm leading-6 text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaTags}
        label="Tag tushunchasi"
        title="Juft tag va toq tag"
        color="text-pink-300"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <TagCard
            title="Juft tag"
            code="<h1>Salom</h1>"
            desc="Ochiluvchi va yopiluvchi tag bor. Ichida content bo‘ladi."
            examples={[
              "<p>Matn</p>",
              "<button>Bosish</button>",
              "<h1>Sarlavha</h1>",
            ]}
          />
          <TagCard
            title="Toq tag"
            code="<img />"
            desc="Yopiluvchi jufti bo‘lmaydi. Odatda o‘zi mustaqil ishlaydi."
            examples={["<img />", "<br />", "<input />", "<meta />"]}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={HiMiniCommandLine}
        label="Amaliy mashg‘ulot"
        title="Birinchi HTML sahifani yaratamiz"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "Desktopda my-first-website nomli papka oching",
              "VS Code orqali papkani oching",
              "index.html fayl yarating",
              "html:5 yoki ! yozib Enter bosing",
              "body ichiga h1 va p yozing",
              "Live Server orqali browserda oching",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-400/15 font-black text-orange-300">
                  {index + 1}
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="rounded-2xl bg-black/40 p-4 font-mono text-sm">
              <p className="text-orange-300">&lt;!DOCTYPE html&gt;</p>
              <p className="text-yellow-300">&lt;html lang="uz"&gt;</p>
              <p className="pl-4 text-cyan-300">&lt;head&gt;</p>
              <p className="pl-8 text-slate-300">
                &lt;meta charset="UTF-8" /&gt;
              </p>
              <p className="pl-8 text-slate-300">
                &lt;title&gt;Birinchi sahifam&lt;/title&gt;
              </p>
              <p className="pl-4 text-cyan-300">&lt;/head&gt;</p>
              <p className="pl-4 text-purple-300">&lt;body&gt;</p>
              <p className="pl-8 text-white">
                &lt;h1&gt;Salom PDP Junior!&lt;/h1&gt;
              </p>
              <p className="pl-8 text-white">
                &lt;p&gt;Men HTML o‘rganishni boshladim.&lt;/p&gt;
              </p>
              <p className="pl-4 text-purple-300">&lt;/body&gt;</p>
              <p className="text-yellow-300">&lt;/html&gt;</p>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPreview(!showPreview)}
              className="mt-5 w-full cursor-pointer rounded-2xl bg-orange-400 px-5 py-4 font-black text-slate-950"
            >
              {showPreview ? "Previewni yopish" : "Previewni ko‘rish"}
            </motion.button>

            <AnimatePresence>
              {showPreview && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.96 }}
                  className="mt-5 rounded-2xl bg-white p-5 text-slate-950"
                >
                  <h1 className="text-3xl font-black">Salom PDP Junior!</h1>
                  <p className="mt-2">Men HTML o‘rganishni boshladim.</p>
                </motion.div>
              )}
            </AnimatePresence>
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
          title="HTML start quiz"
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
                        <FaKeyboard />
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
        icon={FaRocket}
        label="Keyingi dars teaser"
        title="Keyingi darsda HTML taglar bilan real content yasaymiz"
        color="text-orange-300"
      >
        <div className="rounded-[30px] border border-orange-400/20 bg-orange-400/10 p-6">
          <h4 className="mb-3 text-3xl font-black text-white">
            Sarlavha, paragraph, link va rasmlar bilan mini sahifa
          </h4>
          <p className="max-w-4xl text-slate-300 leading-7">
            Endi HTML structure tayyor. Keyingi darsda sahifani haqiqiy content
            bilan to‘ldiramiz va brauzerda natijani ko‘ramiz.
          </p>
        </div>
      </PremiumSection>
    </motion.div>
  );
}

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-slate-950/80 p-5 shadow-2xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-300">
          index.html
        </span>
      </div>

      <div className="rounded-2xl bg-black/40 p-5 font-mono text-sm leading-7">
        <p className="text-orange-300">&lt;!DOCTYPE html&gt;</p>
        <p className="text-yellow-300">&lt;html&gt;</p>
        <p className="pl-5 text-cyan-300">&lt;head&gt;</p>
        <p className="pl-10 text-slate-300">
          &lt;title&gt;PDP Junior&lt;/title&gt;
        </p>
        <p className="pl-5 text-cyan-300">&lt;/head&gt;</p>
        <p className="pl-5 text-purple-300">&lt;body&gt;</p>
        <p className="pl-10 text-white">&lt;h1&gt;Hello HTML&lt;/h1&gt;</p>
        <p className="pl-5 text-purple-300">&lt;/body&gt;</p>
        <p className="text-yellow-300">&lt;/html&gt;</p>
      </div>
    </motion.div>
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
      <Icon className="mb-3 text-3xl text-orange-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}

function TreeLine({ level, text, folder }) {
  return (
    <div
      className="mb-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3 text-slate-300"
      style={{ marginLeft: `${level * 28}px` }}
    >
      {folder ? (
        <FaFolderOpen className="text-yellow-300" />
      ) : (
        <IoDocumentText className="text-cyan-300" />
      )}
      {text}
    </div>
  );
}

function CompareCard({ title, desc, items, active }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`rounded-3xl border p-6 ${
        active
          ? "border-cyan-300/30 bg-cyan-400/10"
          : "border-white/10 bg-slate-950/60"
      }`}
    >
      <h4 className="mb-3 text-3xl font-black text-white">{title}</h4>
      <p className="mb-5 leading-7 text-slate-300">{desc}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TagCard({ title, code, desc, examples }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
    >
      <FaTags className="mb-4 text-4xl text-pink-300" />
      <h4 className="mb-3 text-3xl font-black text-white">{title}</h4>
      <div className="mb-4 rounded-2xl bg-black/40 p-4 font-mono text-orange-300">
        {code}
      </div>
      <p className="mb-5 leading-7 text-slate-300">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {examples.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
