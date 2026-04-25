import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaHeading,
  FaParagraph,
  FaLink,
  FaImage,
  FaListUl,
  FaListOl,
  FaBold,
  FaItalic,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaUserAlt,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  MdOutlineViewModule,
  MdOutlineDashboardCustomize,
  MdQuiz,
} from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";
import { IoLayers, IoDocumentText } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const htmlTags = [
  {
    id: "heading",
    title: "Heading",
    tag: "<h1> - <h6>",
    icon: FaHeading,
    color: "from-orange-500 to-red-500",
    desc: "Sarlavhalar sahifadagi mavzular ierarxiyasini bildiradi.",
  },
  {
    id: "paragraph",
    title: "Paragraph",
    tag: "<p>",
    icon: FaParagraph,
    color: "from-cyan-500 to-blue-500",
    desc: "Oddiy matnlar va tushuntirishlar paragraph ichida yoziladi.",
  },
  {
    id: "link",
    title: "Link",
    tag: "<a>",
    icon: FaLink,
    color: "from-purple-500 to-pink-500",
    desc: "Boshqa sahifa, telefon, email yoki tashqi saytga havola beradi.",
  },
  {
    id: "image",
    title: "Image",
    tag: "<img>",
    icon: FaImage,
    color: "from-emerald-500 to-teal-500",
    desc: "Sahifaga rasm chiqarish uchun ishlatiladi.",
  },
];

const quiz = [
  {
    question: "Sahifada eng muhim sarlavha qaysi tag bilan yoziladi?",
    options: ["<h1>", "<h6>", "<p>"],
    correct: 0,
  },
  {
    question: "mailto: qiymati nima uchun ishlatiladi?",
    options: [
      "Email yozish uchun",
      "Rasm chiqarish uchun",
      "Ro‘yxat qilish uchun",
    ],
    correct: 0,
  },
  {
    question: "target='_blank' nima qiladi?",
    options: [
      "Havolani yangi tabda ochadi",
      "Matnni qalin qiladi",
      "Rasmni kattalashtiradi",
    ],
    correct: 0,
  },
  {
    question: "Semantik tag nimaga yordam beradi?",
    options: [
      "Sahifa ma’nosini aniqroq qiladi",
      "Internetni tezlatadi",
      "Kompyuterni o‘chiradi",
    ],
    correct: 0,
  },
];

export default function HtmlLesson4() {
  const [activeTag, setActiveTag] = useState("heading");
  const [linkType, setLinkType] = useState("site");
  const [listType, setListType] = useState("ul");
  const [answers, setAnswers] = useState({});
  const [portfolioStep, setPortfolioStep] = useState(0);

  const active = htmlTags.find((item) => item.id === activeTag);
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
        className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#140f2d] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm font-black text-purple-300">
              <HiSparkles />
              4-DARS • HTML elementlar playground
            </div>

            <h2 className="mb-5 text-3xl font-black leading-tight text-white md:text-6xl">
              HTML teglar bilan sahifa skeletini quramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun heading, paragraph, link, image, list, semantic taglar va
              portfolio sahifasining boshlang‘ich skeletini amaliy o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaHtml5} title="Teglar" text="Asosiy HTML" />
              <HeroBadge
                icon={IoLayers}
                title="Struktura"
                text="Semantic layout"
              />
              <HeroBadge
                icon={FaUserAlt}
                title="Project"
                text="Portfolio skeleton"
              />
            </div>
          </div>

          <HeroPlayground />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdOutlineViewModule}
        label="Semantic HTML"
        title="Semantik va no-semantik teglar"
        color="text-cyan-300"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <SemanticCard
            title="Semantik teglar"
            desc="Teg nomining o‘zi ma’noni bildiradi. Browser, Google va boshqa dasturchilar uchun tushunarliroq."
            examples={[
              "<header>",
              "<main>",
              "<section>",
              "<article>",
              "<footer>",
            ]}
            active
          />
          <SemanticCard
            title="No-semantik teglar"
            desc="O‘zi aniq ma’no bermaydi. Faqat blok yoki umumiy konteyner sifatida ishlatiladi."
            examples={["<div>", "<span>"]}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={HiMiniCursorArrowRays}
        label="Interactive"
        title="Asosiy HTML teglar bilan tanishamiz"
        color="text-orange-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {htmlTags.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTag(item.id)}
                className={`flex cursor-pointer items-center gap-2 rounded-2xl px-5 py-3 font-black transition ${
                  activeTag === item.id
                    ? "bg-white text-slate-950"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Icon />
                {item.tag}
              </motion.button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${active.color} p-7`}
            >
              <ActiveIcon className="mb-4 text-5xl text-white" />
              <p className="mb-2 font-black text-white/80">{active.tag}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {active.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{active.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <p className="mb-4 text-sm font-black text-slate-400">
              Browser preview:
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTag}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
              >
                {activeTag === "heading" && <HeadingPreview />}
                {activeTag === "paragraph" && <ParagraphPreview />}
                {activeTag === "link" && <LinkPreview />}
                {activeTag === "image" && <ImagePreview />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaHeading}
        label="Heading hierarchy"
        title="Sarlavha teglarini to‘g‘ri ishlatish"
        color="text-purple-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-purple-400/20 bg-purple-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              H1 faqat asosiy mavzu uchun
            </h4>
            <p className="leading-7 text-slate-300">
              Sahifada odatda bitta asosiy <b className="text-purple-300">h1</b>{" "}
              bo‘ladi. Keyin ichki bo‘limlar uchun h2, h3, h4 ketadi.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-black text-white">h1: Portfolio</h1>
              <h2 className="text-3xl font-black text-cyan-300">
                h2: About me
              </h2>
              <h3 className="text-2xl font-black text-orange-300">
                h3: Skills
              </h3>
              <h4 className="text-xl font-black text-purple-300">h4: HTML</h4>
              <p className="text-slate-400">
                Headinglar sahifa mazmunini tartibli ko‘rsatadi.
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaListUl}
        label="Lists"
        title="Ro‘yxatlar: ul, ol, li"
        color="text-emerald-300"
      >
        <div className="mb-5 flex gap-3">
          <button
            onClick={() => setListType("ul")}
            className={`cursor-pointer rounded-2xl px-5 py-3 font-black ${
              listType === "ul"
                ? "bg-white text-slate-950"
                : "bg-white/10 text-white"
            }`}
          >
            <FaListUl className="mr-2 inline" />
            ul
          </button>
          <button
            onClick={() => setListType("ol")}
            className={`cursor-pointer rounded-2xl px-5 py-3 font-black ${
              listType === "ol"
                ? "bg-white text-slate-950"
                : "bg-white/10 text-white"
            }`}
          >
            <FaListOl className="mr-2 inline" />
            ol
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <h4 className="mb-4 text-2xl font-black">Frontend skills</h4>

            {listType === "ul" ? (
              <ul className="ml-6 list-disc space-y-2">
                <li>HTML structure</li>
                <li>CSS design</li>
                <li>JavaScript logic</li>
              </ul>
            ) : (
              <ol className="ml-6 list-decimal space-y-2">
                <li>HTML structure</li>
                <li>CSS design</li>
                <li>JavaScript logic</li>
              </ol>
            )}
          </div>

          <div className="rounded-[32px] bg-slate-950/80 p-6 font-mono text-sm">
            {listType === "ul" ? (
              <>
                <p className="text-emerald-300">&lt;ul&gt;</p>
                <p className="pl-5 text-white">
                  &lt;li&gt;HTML structure&lt;/li&gt;
                </p>
                <p className="pl-5 text-white">
                  &lt;li&gt;CSS design&lt;/li&gt;
                </p>
                <p className="text-emerald-300">&lt;/ul&gt;</p>
              </>
            ) : (
              <>
                <p className="text-emerald-300">&lt;ol&gt;</p>
                <p className="pl-5 text-white">
                  &lt;li&gt;HTML structure&lt;/li&gt;
                </p>
                <p className="pl-5 text-white">
                  &lt;li&gt;CSS design&lt;/li&gt;
                </p>
                <p className="text-emerald-300">&lt;/ol&gt;</p>
              </>
            )}
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLink}
        label="Links"
        title="a tegi: href, mailto, tel va target"
        color="text-cyan-300"
      >
        <div className="mb-5 flex flex-wrap gap-3">
          {[
            { id: "site", label: "Website", icon: FaExternalLinkAlt },
            { id: "email", label: "mailto", icon: FaEnvelope },
            { id: "phone", label: "tel", icon: FaPhoneAlt },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setLinkType(item.id)}
                className={`cursor-pointer rounded-2xl px-5 py-3 font-black ${
                  linkType === item.id
                    ? "bg-white text-slate-950"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Icon className="mr-2 inline" />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <LinkCode type={linkType} />
          <LinkMeaning type={linkType} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaBold}
        label="Text formatting"
        title="strong, em, br, hr taglari"
        color="text-yellow-300"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <FormatCard
            tag="<strong>"
            text="Muhim matnni qalin qiladi"
            icon={FaBold}
          />
          <FormatCard
            tag="<em>"
            text="Urg‘u berilgan matnni italic qiladi"
            icon={FaItalic}
          />
          <FormatCard
            tag="<br>"
            text="Matnni yangi qatorga tushiradi"
            icon={FaCode}
          />
          <FormatCard
            tag="<hr>"
            text="Gorizontal chiziq chiqaradi"
            icon={IoDocumentText}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineDashboardCustomize}
        label="Amaliy project"
        title="Shaxsiy portfolio sahifasining skeletini yaratamiz"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "header: ism va navbar",
              "main: about, skills, contact",
              "img: profil rasmi",
              "ul/li: skill ro‘yxati",
              "a: email, telefon, GitHub link",
            ].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ x: 7 }}
                onClick={() => setPortfolioStep(index)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left transition ${
                  portfolioStep === index
                    ? "border-orange-400 bg-orange-400/15 text-orange-300"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/10"
                }`}
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-400/15 font-black">
                  {index + 1}
                </span>
                {item}
              </motion.button>
            ))}
          </div>

          <PortfolioPreview active={portfolioStep} />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="HTML elementlar quiz"
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

function HeroPlayground() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="font-black text-purple-300">Portfolio skeleton</p>
        <FaHtml5 className="text-4xl text-orange-400" />
      </div>

      <div className="rounded-[28px] bg-white p-5 text-slate-950">
        <header className="mb-4 rounded-2xl bg-slate-900 p-4 text-white">
          <h1 className="text-2xl font-black">Asilbek Portfolio</h1>
          <p className="text-slate-300">Frontend Developer</p>
        </header>

        <main className="grid gap-3 md:grid-cols-2">
          <section className="rounded-2xl bg-orange-100 p-4">
            <h2 className="font-black">About me</h2>
            <p className="text-sm">Men HTML o‘rganayapman.</p>
          </section>
          <section className="rounded-2xl bg-cyan-100 p-4">
            <h2 className="font-black">Skills</h2>
            <ul className="ml-5 list-disc text-sm">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </section>
        </main>
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

function SemanticCard({ title, desc, examples, active }) {
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

function HeadingPreview() {
  return (
    <div className="rounded-3xl bg-white p-6 text-slate-950">
      <h1 className="text-4xl font-black">Portfolio</h1>
      <h2 className="mt-4 text-2xl font-black text-cyan-600">About me</h2>
      <h3 className="mt-3 text-xl font-black text-orange-600">Skills</h3>
    </div>
  );
}

function ParagraphPreview() {
  return (
    <div className="rounded-3xl bg-white p-6 text-slate-950">
      <p className="leading-7">
        Men frontend dasturlashni o‘rganayapman. HTML sahifa skeletini yaratadi.
      </p>
      <hr className="my-4" />
      <p>
        <strong>HTML</strong> + <em>CSS</em> + JavaScript
      </p>
    </div>
  );
}

function LinkPreview() {
  return (
    <div className="rounded-3xl bg-white p-6 text-slate-950">
      <a className="cursor-pointer font-black text-blue-600 underline" href="#">
        Portfolio sahifamga o‘tish
      </a>
      <p className="mt-3 text-sm text-slate-600">
        Link foydalanuvchini boshqa manzilga olib boradi.
      </p>
    </div>
  );
}

function ImagePreview() {
  return (
    <div className="rounded-3xl bg-white p-6 text-slate-950">
      <div className="grid h-36 place-items-center rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 text-5xl">
        🧑‍💻
      </div>
      <p className="mt-3 text-sm text-slate-600">
        img orqali sahifaga rasm joylanadi.
      </p>
    </div>
  );
}

function LinkCode({ type }) {
  const data = {
    site: '<a href="https://google.com" target="_blank">Google</a>',
    email: '<a href="mailto:info@example.com">Email yuborish</a>',
    phone: '<a href="tel:+998901234567">Qo‘ng‘iroq qilish</a>',
  };

  return (
    <div className="rounded-[32px] bg-slate-950/80 p-6 font-mono text-sm text-cyan-300">
      {data[type]}
    </div>
  );
}

function LinkMeaning({ type }) {
  const data = {
    site: {
      title: "Website link",
      text: "href ichiga sayt manzili yoziladi. target='_blank' bo‘lsa, yangi tabda ochiladi.",
    },
    email: {
      title: "mailto",
      text: "Foydalanuvchi bosganda email yozish oynasi ochiladi.",
    },
    phone: {
      title: "tel",
      text: "Telefon qurilmada bosilganda qo‘ng‘iroq qilish oynasi ochiladi.",
    },
  };

  return (
    <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6">
      <h4 className="mb-3 text-3xl font-black text-white">
        {data[type].title}
      </h4>
      <p className="text-lg leading-8 text-slate-300">{data[type].text}</p>
    </div>
  );
}

function FormatCard({ tag, text, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-3xl text-yellow-300" />
      <h4 className="mb-3 font-mono text-2xl font-black text-white">{tag}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function PortfolioPreview({ active }) {
  const highlights = [
    "border-orange-400",
    "border-cyan-400",
    "border-purple-400",
    "border-emerald-400",
    "border-pink-400",
  ];

  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-5 text-slate-950">
      <header
        className={`mb-4 rounded-2xl border-4 p-4 ${
          active === 0 ? highlights[0] : "border-slate-900"
        } bg-slate-900 text-white`}
      >
        <h1 className="text-2xl font-black">Asilbek</h1>
        <nav className="mt-2 flex gap-3 text-sm text-slate-300">
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="grid gap-4 md:grid-cols-2">
        <section
          className={`rounded-2xl border-4 bg-orange-100 p-4 ${
            active === 1 ? highlights[1] : "border-transparent"
          }`}
        >
          <h2 className="font-black">About me</h2>
          <p className="text-sm">Men frontend o‘rganayapman.</p>
        </section>

        <section
          className={`rounded-2xl border-4 bg-cyan-100 p-4 ${
            active === 2 ? highlights[2] : "border-transparent"
          }`}
        >
          <div className="grid h-28 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 text-5xl">
            🧑‍💻
          </div>
        </section>

        <section
          className={`rounded-2xl border-4 bg-purple-100 p-4 ${
            active === 3 ? highlights[3] : "border-transparent"
          }`}
        >
          <h2 className="font-black">Skills</h2>
          <ul className="ml-5 list-disc text-sm">
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>

        <section
          className={`rounded-2xl border-4 bg-emerald-100 p-4 ${
            active === 4 ? highlights[4] : "border-transparent"
          }`}
        >
          <h2 className="font-black">Contact</h2>
          <a className="text-sm text-blue-600 underline" href="#">
            Email yuborish
          </a>
        </section>
      </main>
    </div>
  );
}
