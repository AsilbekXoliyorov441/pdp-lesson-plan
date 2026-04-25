import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFigma,
  FaHtml5,
  FaCode,
  FaLayerGroup,
  FaQuoteLeft,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaRocket,
} from "react-icons/fa";
import {
  MdQuiz,
  MdOutlineViewModule,
  MdOutlineDesignServices,
} from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";
import { IoDocumentText, IoLayers } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const sections = [
  {
    id: "header",
    title: "Header",
    tag: "<header>",
    color: "from-orange-500 to-red-500",
    desc: "Logo, navbar va call-to-action button joylashadigan yuqori qism.",
  },
  {
    id: "hero",
    title: "Hero",
    tag: "<section>",
    color: "from-purple-500 to-pink-500",
    desc: "Landing sahifaning eng asosiy birinchi qismi: headline, description, button, image.",
  },
  {
    id: "services",
    title: "Services",
    tag: "<section>",
    color: "from-cyan-500 to-blue-500",
    desc: "Xizmatlar yoki imkoniyatlar card ko‘rinishida beriladigan bo‘lim.",
  },
  {
    id: "footer",
    title: "Footer",
    tag: "<footer>",
    color: "from-emerald-500 to-teal-500",
    desc: "Saytning pastki qismi: contact, copyright, social links.",
  },
];

const semanticTags = [
  {
    id: "address",
    tag: "<address>",
    icon: FaMapMarkerAlt,
    color: "from-emerald-500 to-teal-500",
    desc: "Kontakt ma’lumotlari: manzil, email, telefon uchun ishlatiladi.",
    code: `<address>
  Tashkent, Uzbekistan <br />
  <a href="mailto:info@site.uz">info@site.uz</a>
</address>`,
  },
  {
    id: "time",
    tag: "<time>",
    icon: FaClock,
    color: "from-cyan-500 to-blue-500",
    desc: "Sana yoki vaqtni semantik ko‘rsatadi. datetime attribute mashina o‘qishi uchun kerak.",
    code: `<time datetime="2026-04-26">
  26-aprel, 2026
</time>`,
  },
  {
    id: "blockquote",
    tag: "<blockquote>",
    icon: FaQuoteLeft,
    color: "from-purple-500 to-pink-500",
    desc: "Boshqa manbadan olingan uzun iqtibos uchun ishlatiladi.",
    code: `<blockquote cite="https://example.com">
  Bu loyiha juda foydali bo‘ldi.
</blockquote>`,
  },
  {
    id: "cite",
    tag: "<cite>",
    icon: IoDocumentText,
    color: "from-orange-500 to-red-500",
    desc: "Asar, maqola, kitob yoki iqtibos manbasini ko‘rsatadi.",
    code: `<cite>PDP Junior Frontend Course</cite>`,
  },
  {
    id: "pre",
    tag: "<pre>",
    icon: FaCode,
    color: "from-slate-500 to-slate-800",
    desc: "Matn formatini qanday yozilgan bo‘lsa, shunday saqlaydi. Kod bloklar uchun qulay.",
    code: `<pre>
  HTML
    CSS
      JavaScript
</pre>`,
  },
  {
    id: "details",
    tag: "<details>",
    icon: MdOutlineViewModule,
    color: "from-yellow-500 to-orange-500",
    desc: "Ochilib-yopiladigan qo‘shimcha ma’lumot bloki yaratadi.",
    code: `<details>
  <summary>Ko‘proq ma’lumot</summary>
  <p>Bu yerda batafsil izoh bo‘ladi.</p>
</details>`,
  },
  {
    id: "subsup",
    tag: "<sub> / <sup>",
    icon: FaHtml5,
    color: "from-pink-500 to-rose-500",
    desc: "sub — pastki indeks, sup — yuqori indeks. Masalan H₂O yoki x².",
    code: `H<sub>2</sub>O
x<sup>2</sup>`,
  },
];

const quiz = [
  {
    question: "Landing sahifaning birinchi asosiy qismi nima deb ataladi?",
    options: ["Hero", "Footer", "Table"],
    correct: 0,
  },
  {
    question: "<address> tegi nima uchun ishlatiladi?",
    options: [
      "Kontakt ma’lumotlari uchun",
      "Rasm chiqarish uchun",
      "Button qilish uchun",
    ],
    correct: 0,
  },
  {
    question: "<details> va <summary> nima qiladi?",
    options: [
      "Ochilib-yopiladigan blok yaratadi",
      "Video qo‘yadi",
      "Jadval yaratadi",
    ],
    correct: 0,
  },
  {
    question: "Figma dizaynni HTMLga o‘tkazishda birinchi nima qilinadi?",
    options: [
      "Bo‘limlar aniqlanadi",
      "Darhol CSS yoziladi",
      "Kompyuter o‘chiriladi",
    ],
    correct: 0,
  },
];

export default function HtmlLesson10() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeTag, setActiveTag] = useState("address");
  const [answers, setAnswers] = useState({});

  const selectedSection = sections.find((item) => item.id === activeSection);
  const selectedTag = semanticTags.find((item) => item.id === activeTag);
  const TagIcon = selectedTag.icon;

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
        className="relative overflow-hidden rounded-[42px] border border-violet-400/20 bg-gradient-to-br from-[#160f2f] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-black text-violet-300">
              <HiSparkles />
              10-DARS • Landing structure
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Figma dizaynni HTML strukturaga aylantiramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun landing page bo‘limlarini aniqlaymiz,
              header/hero/services/footer strukturasini tuzamiz va yangi
              semantik teglarni real loyiha ichida ishlatishni o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaFigma} title="Figma" text="Dizayn tahlili" />
              <HeroBadge
                icon={IoLayers}
                title="Sections"
                text="HTML blueprint"
              />
              <HeroBadge
                icon={FaRocket}
                title="Project"
                text="Landing skeleton"
              />
            </div>
          </div>

          <LandingPreview active={activeSection} />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdOutlineDesignServices}
        label="Metodika"
        title="Dizayndan HTMLga o‘tish tartibi"
        color="text-cyan-300"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Dizaynni ko‘rish"
            text="Avval butun landing sahifani umumiy ko‘rib chiqamiz."
          />
          <StepCard
            number="02"
            title="Bo‘limga ajratish"
            text="Header, hero, services, footer qismlarini belgilaymiz."
          />
          <StepCard
            number="03"
            title="Tag tanlash"
            text="Har bir bo‘limga mos semantik HTML teg tanlaymiz."
          />
          <StepCard
            number="04"
            title="Skeleton yozish"
            text="Avval faqat HTML structure yoziladi, CSS keyingi bosqich."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Section detector"
        title="Landing page bo‘limlarini aniqlaymiz"
        color="text-violet-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {sections.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(item.id)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeSection === item.id
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
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${selectedSection.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">
                {selectedSection.tag}
              </p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {selectedSection.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">
                {selectedSection.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <SectionCode active={activeSection} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={IoDocumentText}
        label="Yangi semantik teglar"
        title="Landing ichida ishlatiladigan foydali HTML teglar"
        color="text-orange-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {semanticTags.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTag(item.id)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeTag === item.id
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item.tag}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${selectedTag.color} p-7`}
            >
              <TagIcon className="mb-4 text-5xl text-white" />
              <h4 className="mb-3 text-4xl font-black text-white">
                {selectedTag.tag}
              </h4>
              <p className="text-lg leading-8 text-white/90">
                {selectedTag.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-orange-300">
            <pre className="whitespace-pre-wrap">{selectedTag.code}</pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="HTML Blueprint"
        title="Landing pagening to‘liq HTML skeletoni"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {[
              "header: logo, nav, button",
              "hero: h1, p, cta, image",
              "services: cardlar",
              "testimonial: blockquote + cite",
              "contact: address",
              "footer: copyright",
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
              &lt;section class="hero"&gt;...&lt;/section&gt;
            </p>
            <p className="pl-5 text-cyan-300">
              &lt;section class="services"&gt;...&lt;/section&gt;
            </p>
            <p className="pl-5 text-yellow-300">
              &lt;blockquote&gt;...&lt;/blockquote&gt;
            </p>
            <p className="pl-5 text-emerald-300">
              &lt;address&gt;...&lt;/address&gt;
            </p>
            <p className="text-purple-300">&lt;/main&gt;</p>
            <p className="text-orange-300">&lt;footer&gt;...&lt;/footer&gt;</p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaHtml5}
        label="Amaliy mashg‘ulot"
        title="Tayyor Figma dizayn asosida HTML tuzilmasi yaratish"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <p className="mb-3 text-sm font-black text-violet-600">
              Figma landing preview
            </p>

            <header className="mb-4 flex items-center justify-between rounded-2xl bg-slate-900 p-4 text-white">
              <strong>Brand</strong>
              <nav className="flex gap-3 text-sm text-slate-300">
                <span>Home</span>
                <span>Services</span>
                <span>Contact</span>
              </nav>
            </header>

            <section className="rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 p-6 text-white">
              <h3 className="text-3xl font-black">Build modern websites</h3>
              <p className="mt-2 text-white/80">
                HTML structure birinchi qadam.
              </p>
              <button className="mt-5 cursor-pointer rounded-2xl bg-white px-5 py-3 font-black text-violet-600">
                Start project
              </button>
            </section>

            <section className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-violet-100 p-4">Service 1</div>
              <div className="rounded-2xl bg-cyan-100 p-4">Service 2</div>
              <div className="rounded-2xl bg-emerald-100 p-4">Service 3</div>
            </section>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-7">
            <p className="text-orange-300">&lt;header&gt;</p>
            <p className="pl-5 text-white">
              &lt;strong&gt;Brand&lt;/strong&gt;
            </p>
            <p className="pl-5 text-cyan-300">&lt;nav&gt;...&lt;/nav&gt;</p>
            <p className="text-orange-300">&lt;/header&gt;</p>
            <br />
            <p className="text-purple-300">&lt;main&gt;</p>
            <p className="pl-5 text-cyan-300">&lt;section class="hero"&gt;</p>
            <p className="pl-10 text-white">
              &lt;h1&gt;Build modern websites&lt;/h1&gt;
            </p>
            <p className="pl-10 text-white">
              &lt;p&gt;HTML structure birinchi qadam.&lt;/p&gt;
            </p>
            <p className="pl-5 text-cyan-300">&lt;/section&gt;</p>
            <p className="text-purple-300">&lt;/main&gt;</p>
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
          title="Landing structure quiz"
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

function LandingPreview({ active }) {
  const cls = (id) =>
    active === id ? "ring-4 ring-yellow-300 scale-[1.02]" : "opacity-80";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <header
        className={`mb-3 rounded-2xl bg-slate-900 p-4 text-white transition ${cls(
          "header",
        )}`}
      >
        <div className="flex justify-between">
          <strong>Brand</strong>
          <span className="text-sm text-slate-300">nav links</span>
        </div>
      </header>

      <section
        className={`mb-3 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 p-6 text-white transition ${cls(
          "hero",
        )}`}
      >
        <h3 className="text-3xl font-black">Hero section</h3>
        <p className="mt-2 text-white/80">Main title + CTA</p>
      </section>

      <section
        className={`mb-3 grid gap-3 md:grid-cols-3 transition ${cls("services")}`}
      >
        <div className="rounded-2xl bg-violet-100 p-4">Service</div>
        <div className="rounded-2xl bg-cyan-100 p-4">Service</div>
        <div className="rounded-2xl bg-emerald-100 p-4">Service</div>
      </section>

      <footer
        className={`rounded-2xl bg-slate-200 p-4 text-sm transition ${cls(
          "footer",
        )}`}
      >
        Footer content
      </footer>
    </motion.div>
  );
}

function SectionCode({ active }) {
  const code = {
    header: `<header>
  <strong>Brand</strong>
  <nav>
    <a href="#services">Services</a>
  </nav>
</header>`,
    hero: `<section class="hero">
  <h1>Build modern websites</h1>
  <p>HTML structure birinchi qadam.</p>
  <a href="#services">Start project</a>
</section>`,
    services: `<section class="services">
  <article>Service 1</article>
  <article>Service 2</article>
  <article>Service 3</article>
</section>`,
    footer: `<footer>
  <address>Tashkent, Uzbekistan</address>
  <p>© 2026 Brand</p>
</footer>`,
  };

  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-cyan-300">
      <pre className="whitespace-pre-wrap">{code[active]}</pre>
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
      <Icon className="mb-3 text-3xl text-violet-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
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
