import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
  FaCheck,
  FaMobileAlt,
  FaDesktop,
  FaTabletAlt,
  FaCrown,
  FaLightbulb,
  FaImage,
  FaExpandArrowsAlt,
  FaEye,
  FaChild,
  FaMousePointer,
  FaLayerGroup,
} from "react-icons/fa";
import { MdQuiz, MdDevices, MdDashboardCustomize } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const concepts = {
  responsive: {
    title: "Responsive nima?",
    icon: MdDevices,
    color: "from-cyan-600 via-blue-600 to-indigo-700",
    simple: "Responsive design — sayt ekran o‘lchamiga qarab o‘zi moslashadi.",
    result:
      "Natija: bitta layout desktop, tablet va mobile’da buzilmasdan ko‘rinadi.",
    code: `.container {
  width: min(100% - 32px, 1200px);
  margin: 0 auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}`,
    preview: "responsive",
  },
  adaptive: {
    title: "Adaptive nima?",
    icon: FaLayerGroup,
    color: "from-violet-600 via-fuchsia-600 to-pink-700",
    simple:
      "Adaptive design — har xil ekranlar uchun alohida layout tayyorlash.",
    result:
      "Natija: 320px, 768px, 1024px kabi o‘lchamlarda alohida dizayn ko‘rinishi mumkin.",
    code: `.card {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .card {
    width: 48%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card {
    width: 31%;
  }
}`,
    preview: "adaptive",
  },
  fluid: {
    title: "Fluid layout",
    icon: FaExpandArrowsAlt,
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    simple:
      "Fluid layout — elementlar fixed px emas, foiz, max-width yoki clamp bilan moslashadi.",
    result:
      "Natija: container ekran kichraysa kichrayadi, kattalashsa haddan tashqari cho‘zilib ketmaydi.",
    code: `.wrapper {
  width: min(100% - 32px, 1180px);
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(32px, 6vw, 72px);
}`,
    preview: "fluid",
  },
  images: {
    title: "Flexible images",
    icon: FaImage,
    color: "from-amber-500 via-orange-600 to-red-700",
    simple:
      "Flexible image — rasm containerdan chiqib ketmaydi va ekran bilan moslashadi.",
    result:
      "Natija: rasm mobile’da ham, desktop’da ham container ichida chiroyli qoladi.",
    code: `img {
  max-width: 100%;
  height: auto;
  display: block;
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`,
    preview: "images",
  },
  media: {
    title: "Media queries",
    icon: FaCode,
    color: "from-slate-700 via-blue-700 to-cyan-700",
    simple: "Media query — ma’lum ekran o‘lchamida CSS’ni o‘zgartirish.",
    result:
      "Natija: desktopda menu ko‘rinadi, mobile’da hamburger button chiqadi.",
    code: `.nav-links {
  display: none;
}

.menu-btn {
  display: block;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .menu-btn {
    display: none;
  }
}`,
    preview: "media",
  },
};

const navbarCode = `<!-- HTML -->
<nav class="navbar">
  <a href="#" class="logo">PDP Junior</a>

  <button class="menu-btn">
    ☰
  </button>

  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Courses</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

/* CSS */
.navbar {
  width: min(100% - 32px, 1180px);
  margin: 20px auto;
  padding: 16px 18px;
  border-radius: 24px;
  background: #0f172a;
  border: 1px solid rgba(34, 211, 238, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: white;
  font-size: 22px;
  font-weight: 900;
  text-decoration: none;
}

.nav-links {
  display: none;
  list-style: none;
  gap: 24px;
}

.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 700;
}

.nav-links a:hover {
  color: #22d3ee;
}

.menu-btn {
  border: none;
  background: #22d3ee;
  color: #020617;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
}

/* Tablet va Desktop */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .menu-btn {
    display: none;
  }
}`;

const checklist = [
  "Responsive nima tushuntirildi",
  "Adaptive nima tushuntirildi",
  "Responsive va adaptive farqi aytildi",
  "Fluid layout tushuntirildi",
  "Flexible image tushuntirildi",
  "Media query nima ekani aytildi",
  "Mobile-first yondashuv tushuntirildi",
  "Desktop navbar ko‘rsatildi",
  "Mobile hamburger navbar ko‘rsatildi",
  "To‘liq responsive navbar kodi yozildi",
];

const quiz = [
  {
    question: "Responsive design nima?",
    options: [
      "Sayt ekran o‘lchamiga qarab moslashishi",
      "Faqat desktopda ishlashi",
      "Faqat rang almashtirish",
    ],
    correct: 0,
  },
  {
    question: "Media query nima qiladi?",
    options: [
      "Ma’lum ekran o‘lchamida CSS’ni o‘zgartiradi",
      "HTML faylni o‘chiradi",
      "Rasmni yuklab beradi",
    ],
    correct: 0,
  },
  {
    question: "Flexible image uchun eng kerakli kod qaysi?",
    options: ["max-width: 100%", "font-weight: 900", "position: absolute"],
    correct: 0,
  },
  {
    question: "Mobile-first nima degani?",
    options: [
      "Avval mobile uchun yozib, keyin katta ekranlarga moslash",
      "Faqat mobile uchun sayt qilish",
      "Desktopni o‘chirib tashlash",
    ],
    correct: 0,
  },
];

export default function CssM4L8() {
  const [activeConcept, setActiveConcept] = useState("responsive");
  const [device, setDevice] = useState("mobile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});

  const current = concepts[activeConcept];

  const doneCount = useMemo(
    () => checklist.filter((_, index) => checked[index]).length,
    [checked],
  );

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const liveCode = `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  display: ${device === "desktop" ? "flex" : "none"};
}

.menu-btn {
  display: ${device === "desktop" ? "none" : "block"};
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .menu-btn {
    display: none;
  }
}`;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.08 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[42px] border border-cyan-400/20 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] p-5 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
              <HiSparkles />
              CSS 3-OY • 4-MODUL • 8-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-4xl">
              Responsive va Adaptive Design
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Bu darsda o‘quvchilar saytni mobile, tablet va desktop ekranlarga
              moslashni o‘rganadi. Har bir tushuncha code + natija bilan
              ko‘rsatiladi va yakunda responsive navbar qilinadi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <HeroBadge
                icon={FaMobileAlt}
                title="Mobile"
                text="hamburger menu"
              />
              <HeroBadge
                icon={FaTabletAlt}
                title="Tablet"
                text="middle layout"
              />
              <HeroBadge icon={FaDesktop} title="Desktop" text="full navbar" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLightbulb}
        label="Senior explanation"
        title="Responsive va Adaptive farqi"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard
            icon={MdDevices}
            title="Responsive"
            text="Bitta layout ekran o‘lchamiga qarab suyuq moslashadi. Masalan cardlar joy bo‘lsa yonma-yon, joy kam bo‘lsa pastma-past tushadi."
          />
          <InfoCard
            icon={FaLayerGroup}
            title="Adaptive"
            text="Har xil ekran o‘lchamlari uchun alohida layout holatlari tayyorlanadi. Masalan 375px, 768px, 1024px uchun alohida ko‘rinish."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCrown}
        label="Code + Result"
        title="Asosiy responsive tushunchalar"
        color="text-indigo-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(concepts).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveConcept(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeConcept === key
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-white hover:bg-cyan-400/20"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.8fr_1fr_0.9fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConcept}
              initial={{ opacity: 0, x: -22, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 22, scale: 0.97 }}
              className={`rounded-[34px] bg-gradient-to-br ${current.color} p-7`}
            >
              <current.icon className="mb-5 text-5xl text-white" />
              <h4 className="mb-4 text-3xl font-black text-white">
                {current.title}
              </h4>

              <div className="mb-4 rounded-2xl bg-white/15 p-4">
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  Oddiy tushuncha
                </p>
                <p className="mt-2 text-lg font-black leading-8 text-white">
                  {current.simple}
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  Natijasi
                </p>
                <p className="mt-2 leading-8 text-white/90">{current.result}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={current.code} />

          <ResultPreview type={current.preview} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdDashboardCustomize}
        label="Interactive practice"
        title="Responsive Navbar Builder"
        color="text-emerald-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/70 p-6">
            <h4 className="mb-2 text-2xl font-black text-white">
              Device tanlang
            </h4>
            <p className="mb-5 leading-7 text-slate-400">
              Mobile’da hamburger chiqadi. Desktop’da linklar to‘liq ko‘rinadi.
            </p>

            <div className="grid gap-3">
              {[
                { key: "mobile", label: "Mobile", icon: FaMobileAlt },
                { key: "tablet", label: "Tablet", icon: FaTabletAlt },
                { key: "desktop", label: "Desktop", icon: FaDesktop },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setDevice(item.key);
                    setMenuOpen(false);
                  }}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 font-black transition ${
                    device === item.key
                      ? "border-cyan-300 bg-cyan-400/20 text-cyan-300"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <item.icon />
                    {item.label}
                  </span>
                  <FaMousePointer />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <h4 className="mb-5 text-2xl font-black text-white">
              Navbar natijasi
            </h4>

            <NavbarPreview
              device={device}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />

            <CodePanel className="mt-6" code={liveCode} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Full practice"
        title="Responsive navbar — to‘liq HTML/CSS kod"
        color="text-cyan-300"
      >
        <PracticeWithPreview
          title="Responsive navbar"
          code={navbarCode}
          preview="navbar"
        />
      </PremiumSection>

      <PremiumSection
        icon={FaCheckCircle}
        label="Checklist"
        title="Dars yakunida tekshirish"
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
              <button
                key={item}
                onClick={() => setChecked({ ...checked, [index]: !active })}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left font-bold transition ${
                  active
                    ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                    : "border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                {active ? <FaCheckCircle /> : <HiMiniCursorArrowRays />}
                {item}
              </button>
            );
          })}
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini quiz"
          title="Responsive Design quiz"
          color="text-cyan-300"
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
            <div
              key={item.question}
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
                    <button
                      type="button"
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
                            : "border-white/10 bg-white/5 text-slate-300"
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
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

function ResultPreview({ type }) {
  return (
    <div className="rounded-[32px] border border-cyan-400/20 bg-slate-950/80 p-5">
      <div className="mb-4 flex items-center gap-3">
        <FaEye className="text-2xl text-cyan-300" />
        <h4 className="text-xl font-black text-white">Natija:</h4>
      </div>

      {type === "responsive" && (
        <div className="grid gap-3 sm:grid-cols-2">
          <MiniDevice title="Mobile" narrow />
          <MiniDevice title="Desktop" />
        </div>
      )}

      {type === "adaptive" && (
        <div className="grid gap-3">
          <div className="rounded-2xl bg-cyan-500/20 p-4 text-cyan-200">
            375px: 1 column
          </div>
          <div className="rounded-2xl bg-violet-500/20 p-4 text-violet-200">
            768px: 2 columns
          </div>
          <div className="rounded-2xl bg-emerald-500/20 p-4 text-emerald-200">
            1024px: 3 columns
          </div>
        </div>
      )}

      {type === "fluid" && (
        <div className="space-y-3">
          <div className="h-10 w-full rounded-2xl bg-cyan-400" />
          <div className="h-10 w-4/5 rounded-2xl bg-violet-400" />
          <div className="h-10 w-2/3 rounded-2xl bg-emerald-400" />
        </div>
      )}

      {type === "images" && (
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900 p-4">
          <div className="grid aspect-video place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-4xl font-black text-white">
            IMG
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Rasm containerdan chiqib ketmaydi.
          </p>
        </div>
      )}

      {type === "media" && <NavbarPreview device="mobile" menuOpen={false} />}
      {type === "navbar" && <NavbarPreview device="desktop" menuOpen={false} />}
    </div>
  );
}

function MiniDevice({ title, narrow = false }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-4">
      <p className="mb-3 text-sm font-black text-cyan-300">{title}</p>
      <div className={`grid gap-2 ${narrow ? "grid-cols-1" : "grid-cols-3"}`}>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="grid h-14 place-items-center rounded-xl bg-cyan-400/20 font-black text-cyan-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function NavbarPreview({ device, menuOpen, setMenuOpen }) {
  const isDesktop = device === "desktop";

  return (
    <div
      className={`mx-auto rounded-[28px] border border-cyan-400/20 bg-slate-900 p-4 ${
        device === "mobile"
          ? "max-w-[360px]"
          : device === "tablet"
            ? "max-w-[560px]"
            : "max-w-full"
      }`}
    >
      <nav className="rounded-2xl bg-slate-950 p-4">
        <div className="flex items-center justify-between">
          <a className="font-black text-white">PDP Junior</a>

          {isDesktop ? (
            <div className="flex gap-5 text-sm font-bold text-slate-300">
              <a>Home</a>
              <a>Courses</a>
              <a>Projects</a>
              <a>Contact</a>
            </div>
          ) : (
            <button
              onClick={() => setMenuOpen && setMenuOpen(!menuOpen)}
              className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300 text-slate-950"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>

        {!isDesktop && menuOpen && (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 text-sm font-bold text-slate-300">
            <a>Home</a>
            <a>Courses</a>
            <a>Projects</a>
            <a>Contact</a>
          </div>
        )}
      </nav>
    </div>
  );
}

function PracticeWithPreview({ title, code, preview }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-slate-950/50 p-5">
      <h4 className="mb-5 text-xl font-black text-white">{title}</h4>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <CodePanel code={code} />
        <ResultPreview type={preview} />
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-4 text-slate-950 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-600">Responsive UI</p>
          <h3 className="text-2xl font-black md:text-3xl">Navbar Preview</h3>
        </div>
        <FaMobileAlt className="text-4xl text-cyan-500 md:text-5xl" />
      </div>

      <div className="rounded-[28px] bg-slate-950 p-5 text-white">
        <NavbarPreview device="mobile" menuOpen />
      </div>
    </div>
  );
}

function CodePanel({ code, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className={`relative rounded-[32px] border border-cyan-400/20 bg-slate-950/90 p-5 ${className}`}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-4 top-4 flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2 text-xs font-black text-slate-950 transition hover:scale-105"
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? "Copied" : "Copy"}
      </button>

      <p className="mb-3 text-sm font-black text-cyan-300">Code:</p>

      <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 pt-12 font-mono text-sm leading-7 text-cyan-100">
        {code}
      </pre>
    </div>
  );
}

function PremiumSection({ icon: Icon, label, title, color, children }) {
  return (
    <motion.section
      variants={fadeUp}
      className="rounded-[34px] border border-white/10 bg-[#0f172a]/80 p-5 shadow-xl backdrop-blur-xl md:p-6"
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
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 md:p-5">
      <Icon className="mb-3 text-2xl text-cyan-300 md:text-3xl" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-xl font-black text-white md:text-2xl">
        {title}
      </h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
