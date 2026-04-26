import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCode,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaRocket,
  FaServicestack,
  FaTimesCircle,
} from "react-icons/fa";
import { MdContactMail, MdQuiz, MdRateReview } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const sections = {
  review: {
    title: "Header + Hero review",
    color: "from-cyan-500 to-blue-500",
    desc: "Avvalgi darsda header, navigation va hero section yaratildi. Endi nima qilinganini ko‘rib, qolgan bo‘limlarni aniqlaymiz.",
    code: `<header class="site-header">...</header>

<section class="hero">
  <div class="hero-content">...</div>
  <div class="hero-image">...</div>
</section>`,
  },
  services: {
    title: "Features / Services",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Bu bo‘limda sayt yoki kompaniya qanday foyda berishi cardlar orqali ko‘rsatiladi.",
    code: `<section class="services">
  <div class="container">
    <h2>Our Services</h2>

    <div class="services-grid">
      <article class="service-card">...</article>
      <article class="service-card">...</article>
      <article class="service-card">...</article>
    </div>
  </div>
</section>`,
  },
  contact: {
    title: "Contact section",
    color: "from-emerald-500 to-teal-500",
    desc: "Kontakt bo‘limida form, address, telefon link va xarita rasmi bo‘lishi mumkin.",
    code: `<section class="contact">
  <form class="contact-form">...</form>

  <address>
    <a href="tel:+998977449363">
      +998 97 744 93 63
    </a>
  </address>
</section>`,
  },
  footer: {
    title: "Footer",
    color: "from-orange-500 to-red-500",
    desc: "Footer saytning yakuniy qismi. Kompaniya nomi, linklar va social tarmoqlar shu yerda bo‘ladi.",
    code: `<footer class="footer">
  <p>© 2026 EduPro</p>
  <div class="socials">...</div>
</footer>`,
  },
};

const quiz = [
  {
    question: "Landing page 2-qismda asosan nima yakunlanadi?",
    options: [
      "Services, contact va footer",
      "Faqat body tagi",
      "Faqat font ulash",
    ],
    correct: 0,
  },
  {
    question: "Services section nima uchun kerak?",
    options: [
      "Xizmat yoki imkoniyatlarni cardlar orqali ko‘rsatish",
      "Faqat table qilish",
      "Rasmni zip qilish",
    ],
    correct: 0,
  },
  {
    question: "Telefon raqam uchun to‘g‘ri link qaysi?",
    options: [`href="tel:+998977449363"`, `href="phone:998"`, `src="tel"`],
    correct: 0,
  },
  {
    question: "Contact bo‘limida nimalar bo‘lishi mumkin?",
    options: ["Form, address, tel link, map image", "Faqat h1", "Faqat audio"],
    correct: 0,
  },
  {
    question: "Footerda odatda nimalar bo‘ladi?",
    options: ["Company name, links, socials", "Faqat input", "Faqat img"],
    correct: 0,
  },
  {
    question: "address tegi nima uchun?",
    options: [
      "Kontakt/manzil ma’lumotlari uchun",
      "Card radius uchun",
      "Gradient uchun",
    ],
    correct: 0,
  },
];

export default function CssM2L11() {
  const [activeSection, setActiveSection] = useState("services");
  const [theme, setTheme] = useState("violet");
  const [showMap, setShowMap] = useState(true);
  const [completed, setCompleted] = useState({
    review: true,
    services: false,
    contact: false,
    footer: false,
    polish: false,
  });
  const [answers, setAnswers] = useState({});

  const section = sections[activeSection];
  const progress = Object.values(completed).filter(Boolean).length;

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const themeMap = {
    violet: {
      gradient: "from-violet-600 to-cyan-500",
      bg: "bg-violet-600",
      text: "text-violet-600",
      soft: "bg-violet-100",
    },
    emerald: {
      gradient: "from-emerald-600 to-teal-400",
      bg: "bg-emerald-600",
      text: "text-emerald-600",
      soft: "bg-emerald-100",
    },
    rose: {
      gradient: "from-rose-500 to-orange-500",
      bg: "bg-rose-500",
      text: "text-rose-600",
      soft: "bg-rose-100",
    },
  };

  const currentTheme = themeMap[theme];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-violet-400/20 bg-gradient-to-br from-[#160923] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-black text-violet-300">
              <HiSparkles />
              CSS • Module 2 • 11-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Landing page’ni to‘liq yakunlaymiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun avvalgi header va hero sectionni ko‘rib chiqamiz, keyin
              services, contact va footer qismlarini yaratib, landing page
              loyihasini to‘liq yakunlaymiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={FaServicestack}
                title="Services"
                text="feature cards"
              />
              <HeroBadge
                icon={MdContactMail}
                title="Contact"
                text="form + address"
              />
              <HeroBadge
                icon={FaRocket}
                title="Finish"
                text="complete landing"
              />
            </div>
          </div>

          <LandingFinalPreview
            theme={currentTheme}
            showMap={showMap}
            progress={progress}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={MdRateReview}
        label="Review"
        title="Nima qilindi va nima qoldi?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              ["review", "Header va hero ko‘rib chiqildi"],
              ["services", "Features/services section yaratildi"],
              ["contact", "Contact form va address qo‘shildi"],
              ["footer", "Footer structure yakunlandi"],
              ["polish", "Rang, spacing, shadow bilan polish qilindi"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() =>
                  setCompleted({ ...completed, [key]: !completed[key] })
                }
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left font-black transition ${
                  completed[key]
                    ? "border-cyan-400 bg-cyan-400/15 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/10"
                }`}
              >
                {completed[key] ? "✅" : "⬜"} {label}
              </button>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6">
            <div className="mb-4 flex items-center justify-between text-white">
              <h4 className="text-2xl font-black">Landing progress</h4>
              <span className="text-2xl font-black text-cyan-300">
                {progress}/5
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${(progress / 5) * 100}%` }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
              />
            </div>

            <p className="mt-5 text-slate-300">
              Maqsad: dars oxirida o‘quvchida header, hero, services, contact va
              footer qismlari bor to‘liq landing page bo‘lishi kerak.
            </p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Section builder"
        title="Landing page qolgan bo‘limlarini tushunamiz"
        color="text-violet-300"
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
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${section.color} p-7`}
            >
              <h4 className="mb-3 text-4xl font-black text-white">
                {section.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{section.desc}</p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={section.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaServicestack}
        label="Services section"
        title="Features va xizmatlar qismini yaratish"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "section.services yarating",
              "container ichiga h2 va paragraph qo‘ying",
              "services-grid nomli wrapper yarating",
              "Har xizmatni article.service-card qilib yozing",
              "Cardlarga padding, border-radius, shadow bering",
              "Flexbox orqali cardlarni yonma-yon joylashtiring",
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
            <h4 className="mb-2 text-3xl font-black">Our Services</h4>
            <p className="mb-5 text-slate-500">
              O‘quvchilar uchun eng foydali imkoniyatlar.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Practice", "Har darsda real amaliyot"],
                ["Mentor", "Code review va feedback"],
                ["Project", "Landing page portfolio"],
              ].map(([title, text]) => (
                <motion.article
                  key={title}
                  whileHover={{ y: -8 }}
                  className={`rounded-3xl ${currentTheme.soft} p-5`}
                >
                  <div
                    className={`mb-4 h-12 w-12 rounded-2xl ${currentTheme.bg}`}
                  />
                  <h5 className="text-xl font-black">{title}</h5>
                  <p className="mt-2 text-sm text-slate-600">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdContactMail}
        label="Contact section"
        title="Form, address, tel link va xarita"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="Theme"
              value={theme}
              setValue={setTheme}
              options={[
                ["violet", "Violet"],
                ["emerald", "Emerald"],
                ["rose", "Rose"],
              ]}
            />

            <button
              type="button"
              onClick={() => setShowMap(!showMap)}
              className={`w-full cursor-pointer rounded-2xl px-5 py-4 font-black transition ${
                showMap
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {showMap ? "Xarita ko‘rinyapti" : "Xaritani ko‘rsatish"}
            </button>

            <CodePanel
              code={`<section class="contact">
  <form class="contact-form">
    <input type="text" placeholder="Ismingiz" />
    <input type="tel" placeholder="Telefon" />
    <textarea placeholder="Xabar"></textarea>
    <button>Yuborish</button>
  </form>

  <address class="contact-info">
    <a href="tel:+998977449363">
      +998 97 744 93 63
    </a>
  </address>
</section>`}
            />
          </div>

          <ContactPreview theme={currentTheme} showMap={showMap} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="CSS code"
        title="Services, contact va footer uchun CSS"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <CodePanel
            code={`.services {
  padding: 90px 0;
}

.services-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.service-card {
  flex: 1 1 250px;
  padding: 28px;
  border-radius: 28px;
  background-color: #ffffff;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}`}
          />

          <CodePanel
            code={`.contact-wrapper {
  display: flex;
  gap: 40px;
  align-items: stretch;
}

.contact-form {
  flex: 1;
  padding: 32px;
  border-radius: 32px;
  background-color: #ffffff;
}

.footer {
  padding: 40px 0;
  background-color: #0f172a;
  color: white;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Final practice"
        title="Landing page loyihasini to‘liq yakunlash"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Header va hero sectionni tekshiring",
              "Services sectionni 3 ta card bilan yarating",
              "Contact form inputlarini to‘g‘ri joylashtiring",
              "address ichida tel link yozing",
              "Map image yoki placeholder qo‘shing",
              "Footerda company name, links va socials yozing",
              "DevTools orqali spacing va alignment tekshiring",
              "Oxirida browserda full landing page ko‘rsating",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-yellow-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <FullLandingPreview theme={currentTheme} showMap={showMap} />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Landing final quiz"
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

function LandingFinalPreview({ theme, showMap, progress }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-violet-600">Final preview</p>
          <h3 className="text-3xl font-black">Landing Complete</h3>
        </div>
        <FaRocket className="text-5xl text-violet-500" />
      </div>

      <FullLandingPreview theme={theme} showMap={showMap} compact />

      <div className="mt-4 rounded-2xl bg-slate-100 p-4">
        <div className="mb-2 flex justify-between font-black">
          <span>Progress</span>
          <span>{progress}/5</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            animate={{ width: `${(progress / 5) * 100}%` }}
            className={`h-full rounded-full ${theme.bg}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ContactPreview({ theme, showMap }) {
  return (
    <div className="rounded-[32px] bg-white p-5 text-slate-950">
      <div className="grid gap-5 md:grid-cols-2">
        <form className="rounded-3xl bg-slate-100 p-5">
          <h4 className="mb-4 text-2xl font-black">Contact us</h4>
          <input
            className="mb-3 w-full rounded-2xl bg-white p-3 outline-none"
            placeholder="Ismingiz"
          />
          <input
            className="mb-3 w-full rounded-2xl bg-white p-3 outline-none"
            placeholder="Telefon"
          />
          <textarea
            className="mb-3 min-h-[90px] w-full rounded-2xl bg-white p-3 outline-none"
            placeholder="Xabar"
          />
          <button
            type="button"
            className={`w-full rounded-2xl px-5 py-3 font-black text-white ${theme.bg}`}
          >
            Yuborish
          </button>
        </form>

        <div className="rounded-3xl bg-slate-950 p-5 text-white">
          <FaMapMarkedAlt className="mb-4 text-4xl text-cyan-300" />
          <h4 className="mb-3 text-2xl font-black">Biz bilan bog‘laning</h4>

          <address className="not-italic text-white/75">
            Tashkent, Uzbekistan <br />
            <a className="mt-3 inline-flex items-center gap-2 text-cyan-300">
              <FaPhoneAlt />
              +998 97 744 93 63
            </a>
          </address>

          {showMap && (
            <div
              className={`mt-5 grid h-28 place-items-center rounded-2xl ${theme.soft} ${theme.text} font-black`}
            >
              Map image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FullLandingPreview({ theme, showMap, compact = false }) {
  return (
    <div className="rounded-[32px] bg-white p-5 text-slate-950">
      <div className="overflow-hidden rounded-[30px] bg-slate-950 text-white">
        <header className="flex items-center justify-between p-5">
          <strong className="text-xl">EduPro</strong>
          <nav className="hidden gap-4 text-sm text-white/70 md:flex">
            <span>Home</span>
            <span>Services</span>
            <span>Contact</span>
          </nav>
        </header>

        <section
          className={`grid gap-5 p-5 ${compact ? "" : "md:grid-cols-2 md:items-center"}`}
        >
          <div>
            <p className={`mb-2 font-black ${theme.text}`}>Frontend landing</p>
            <h4 className="text-3xl font-black leading-tight">
              Build a complete landing page
            </h4>
            <p className="mt-3 text-sm text-white/70">
              Header, hero, services, contact va footer bilan.
            </p>
          </div>

          <div
            className={`rounded-3xl bg-gradient-to-br ${theme.gradient} p-5 text-center text-5xl`}
          >
            🧑‍💻
          </div>
        </section>

        <section className="grid gap-3 p-5 md:grid-cols-3">
          {["Fast", "Modern", "Clean"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-4">
              <h5 className="font-black">{item}</h5>
              <p className="mt-1 text-xs text-white/60">Service card</p>
            </div>
          ))}
        </section>

        <section className="grid gap-3 p-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-4">
            <FaEnvelope className="mb-2 text-cyan-300" />
            <p className="font-black">Contact form</p>
          </div>
          {showMap && (
            <div
              className={`rounded-2xl ${theme.soft} ${theme.text} p-4 font-black`}
            >
              Map + address
            </div>
          )}
        </section>

        <footer className="flex items-center justify-between bg-black/30 p-5 text-sm text-white/70">
          <span>© 2026 EduPro</span>
          <div className="flex gap-3">
            <FaInstagram />
            <FaFacebookF />
            <FaGithub />
          </div>
        </footer>
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
