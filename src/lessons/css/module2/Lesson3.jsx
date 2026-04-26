import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCss3Alt,
  FaHtml5,
  FaCode,
  FaBug,
  FaSearch,
  FaTools,
  FaLayerGroup,
  FaCheckCircle,
  FaTimesCircle,
  FaMousePointer,
  FaIdBadge,
  FaRulerCombined,
  FaImage,
} from "react-icons/fa";
import {
  MdQuiz,
  MdOutlineDeveloperMode,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const groupTabs = {
  div: {
    title: "<div>",
    subtitle: "Block element",
    color: "from-blue-500 to-cyan-500",
    desc: "div — HTML elementlarni guruhlash uchun ishlatiladi. U odatda butun qatorni egallaydi va section, card, wrapper kabi bloklar yaratishda ishlatiladi.",
    code: `<div class="card">
  <h2>Frontend</h2>
  <p>HTML + CSS</p>
</div>`,
  },
  span: {
    title: "<span>",
    subtitle: "Inline element",
    color: "from-purple-500 to-pink-500",
    desc: "span — matn ichidagi kichik qismlarni ajratish uchun ishlatiladi. U yangi qator ochmaydi, inline element hisoblanadi.",
    code: `<p>
  Men <span class="accent">CSS</span> o‘rganayapman
</p>`,
  },
  class: {
    title: 'class=""',
    subtitle: "Reusable selector",
    color: "from-emerald-500 to-teal-500",
    desc: "class bir xil style’ni bir nechta elementga qo‘llash uchun kerak. Class nomi aniq, tushunarli va ma’noli bo‘lishi kerak.",
    code: `<div class="product-card">
  <h3 class="product-title">Laptop</h3>
</div>`,
  },
  id: {
    title: 'id=""',
    subtitle: "Unique selector",
    color: "from-orange-500 to-red-500",
    desc: "id sahifada bitta yagona element uchun ishlatiladi. Ko‘pincha anchor link yoki JavaScriptda aniq elementni topish uchun ishlatiladi.",
    code: `<section id="contact">
  <h2>Contact</h2>
</section>`,
  },
};

const devPanels = {
  elements: {
    title: "Elements",
    color: "from-orange-500 to-red-500",
    desc: "HTML strukturani ko‘rish, element tanlash va sahifadagi taglarni tekshirish uchun.",
    bullets: [
      "HTML taglarni ko‘rish",
      "Element tanlash",
      "Class/id tekshirish",
    ],
  },
  styles: {
    title: "Styles",
    color: "from-blue-500 to-cyan-500",
    desc: "Tanlangan elementga qaysi CSS ishlayotganini ko‘rish va real vaqtda o‘zgartirish uchun.",
    bullets: [
      "CSS property ko‘rish",
      "color o‘zgartirish",
      "width/height test qilish",
    ],
  },
  console: {
    title: "Console",
    color: "from-emerald-500 to-teal-500",
    desc: "JavaScript xatolari, loglar va test commandlar chiqadigan joy.",
    bullets: ["Error ko‘rish", "console.log natijasi", "JS test"],
  },
};

const quiz = [
  {
    question: "<div> tegi nima uchun ishlatiladi?",
    options: [
      "Elementlarni guruhlash uchun",
      "Faqat rasm chiqarish uchun",
      "Audio qo‘yish uchun",
    ],
    correct: 0,
  },
  {
    question: "<span> qanday element?",
    options: ["Inline element", "Block element", "Table element"],
    correct: 0,
  },
  {
    question: "class nima uchun kerak?",
    options: [
      "Style’ni qayta ishlatish uchun",
      "Rasm yuklash uchun",
      "Browserni ochish uchun",
    ],
    correct: 0,
  },
  {
    question: "id qanday ishlatilishi kerak?",
    options: [
      "Sahifada unique bo‘lishi kerak",
      "Har elementga bir xil beriladi",
      "Faqat p tegida ishlaydi",
    ],
    correct: 0,
  },
  {
    question: "width nima qiladi?",
    options: [
      "Element kengligini belgilaydi",
      "Matn rangini o‘zgartiradi",
      "Link ochadi",
    ],
    correct: 0,
  },
  {
    question: "height nima qiladi?",
    options: [
      "Element balandligini belgilaydi",
      "Font nomini beradi",
      "Table yaratadi",
    ],
    correct: 0,
  },
  {
    question: "background-image nima qiladi?",
    options: [
      "Orqa fonga rasm qo‘yadi",
      "Matnni qalin qiladi",
      "Tag nomini o‘zgartiradi",
    ],
    correct: 0,
  },
  {
    question: "background-size: cover nima qiladi?",
    options: [
      "Rasmni blokni to‘ldiradigan qiladi",
      "Rasmni takrorlaydi",
      "Rasmni yashiradi",
    ],
    correct: 0,
  },
  {
    question: "background-repeat: no-repeat nima qiladi?",
    options: [
      "Rasm takrorlanishini to‘xtatadi",
      "Rasmni markazga olib keladi",
      "Matnni o‘chiradi",
    ],
    correct: 0,
  },
  {
    question: "DevTools nima uchun kerak?",
    options: [
      "Sahifani tekshirish va xatoni topish uchun",
      "Faqat video ko‘rish uchun",
      "Kompyuter o‘chirish uchun",
    ],
    correct: 0,
  },
];

export default function CssM2L3() {
  const [activeGroup, setActiveGroup] = useState("div");
  const [activePanel, setActivePanel] = useState("styles");
  const [boxWidth, setBoxWidth] = useState(320);
  const [boxHeight, setBoxHeight] = useState(190);
  const [bgSize, setBgSize] = useState("cover");
  const [bgPosition, setBgPosition] = useState("center");
  const [bgRepeat, setBgRepeat] = useState("no-repeat");
  const [bugFixed, setBugFixed] = useState({
    className: false,
    width: false,
    repeat: false,
  });
  const [answers, setAnswers] = useState({});

  const group = groupTabs[activeGroup];
  const panel = devPanels[activePanel];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  const fixedCount = Object.values(bugFixed).filter(Boolean).length;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-cyan-400/20 bg-gradient-to-br from-[#061826] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              <HiSparkles />
              CSS • Module 2 • 3-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Div, class, background va DevTools bilan sahifani boshqaramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun HTML elementlarni guruhlash, div/span farqi, class/id,
              width/height, background image va Chrome DevTools orqali real
              vaqtda CSS tahrirlashni o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaLayerGroup} title="Grouping" text="div/span" />
              <HeroBadge
                icon={FaIdBadge}
                title="class/id"
                text="selector control"
              />
              <HeroBadge icon={FaTools} title="DevTools" text="debug lab" />
            </div>
          </div>

          <DevHero fixedCount={fixedCount} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaLayerGroup}
        label="HTML grouping"
        title="Elementlarni guruhlash nima?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaHtml5}
            title="Structure"
            text="Bir nechta elementni bitta blokga yig‘ib, tartibli structure hosil qilamiz."
          />
          <InfoCard
            icon={FaCss3Alt}
            title="Styling"
            text="Guruhlangan blokga class berib, umumiy background, width, padding beramiz."
          />
          <InfoCard
            icon={FaCode}
            title="Layout"
            text="Card, header, section, wrapper kabi qismlar div orqali quriladi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="div, span, class, id"
        title="Asosiy grouping va selector tushunchalari"
        color="text-purple-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(groupTabs).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGroup(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeGroup === key
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
              key={activeGroup}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${group.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">{group.subtitle}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {group.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{group.desc}</p>
            </motion.div>
          </AnimatePresence>

          <CodePreview code={group.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaIdBadge}
        label="Naming best practice"
        title="class nomini to‘g‘ri berish"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-red-400/20 bg-red-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              ❌ Yomon class nomlari
            </h4>
            <CodeBlock
              code={`<div class="box1"></div>
<div class="red"></div>
<div class="a"></div>
<div class="left-big-card-new"></div>`}
              color="text-red-300"
            />
            <p className="mt-4 leading-7 text-slate-300">
              Bunday nomlardan keyin project kattalashsa, qaysi class nima
              qilayotganini tushunish qiyin bo‘ladi.
            </p>
          </div>

          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              ✅ Yaxshi class nomlari
            </h4>
            <CodeBlock
              code={`<div class="product-card"></div>
<section class="hero-section"></section>
<button class="primary-button"></button>
<div class="student-profile"></div>`}
              color="text-emerald-300"
            />
            <p className="mt-4 leading-7 text-slate-300">
              Class nomi element vazifasini bildirishi kerak: product-card,
              hero-title, contact-form kabi.
            </p>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRulerCombined}
        label="Size playground"
        title="width va height natijasini live ko‘ramiz"
        color="text-orange-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`width: ${boxWidth}px`}
              min={160}
              max={560}
              value={boxWidth}
              onChange={setBoxWidth}
            />
            <RangeControl
              label={`height: ${boxHeight}px`}
              min={100}
              max={340}
              value={boxHeight}
              onChange={setBoxHeight}
            />

            <CodeBlock
              code={`.card {
  width: ${boxWidth}px;
  height: ${boxHeight}px;
}`}
              color="text-orange-300"
            />
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
            <div className="rounded-3xl bg-white p-5">
              <motion.div
                animate={{ width: boxWidth, height: boxHeight }}
                className="grid max-w-full place-items-center rounded-3xl bg-gradient-to-br from-orange-500 to-pink-500 p-5 text-center font-black text-white shadow-2xl"
              >
                width: {boxWidth}px <br />
                height: {boxHeight}px
              </motion.div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaImage}
        label="Background image"
        title="background, background-image va background properties"
        color="text-fuchsia-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ButtonGroup
              title="background-size"
              value={bgSize}
              setValue={setBgSize}
              options={["cover", "contain", "auto"]}
            />
            <ButtonGroup
              title="background-position"
              value={bgPosition}
              setValue={setBgPosition}
              options={[
                "center",
                "top",
                "bottom",
                "left",
                "right",
                "calc(100% - 20px) center",
              ]}
            />
            <ButtonGroup
              title="background-repeat"
              value={bgRepeat}
              setValue={setBgRepeat}
              options={["no-repeat", "repeat", "repeat-x", "repeat-y"]}
            />
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div
              className="grid h-80 place-items-center overflow-hidden rounded-[28px] border border-white/10 bg-slate-900"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80')",
                backgroundSize: bgSize,
                backgroundPosition: bgPosition,
                backgroundRepeat: bgRepeat,
              }}
            >
              <div className="rounded-3xl bg-black/50 px-6 py-4 text-center text-white backdrop-blur-md">
                <h4 className="text-3xl font-black">Background Preview</h4>
                <p className="mt-2 text-white/80">
                  DevTools orqali ham shuni test qilamiz
                </p>
              </div>
            </div>

            <CodeBlock
              code={`.hero {
  background-image: url("./image.jpg");
  background-size: ${bgSize};
  background-position: ${bgPosition};
  background-repeat: ${bgRepeat};
}`}
              color="text-fuchsia-300"
              className="mt-5"
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineDeveloperMode}
        label="Chrome DevTools"
        title="Elements, Styles va Console panellari"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(devPanels).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePanel(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activePanel === key
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
              key={activePanel}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${panel.color} p-7`}
            >
              <h4 className="mb-3 text-4xl font-black text-white">
                {panel.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{panel.desc}</p>

              <div className="mt-5 grid gap-2">
                {panel.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/15 p-3 font-bold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <DevToolsMock activePanel={activePanel} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaBug}
        label="Debug mini-game"
        title="Sahifadagi xatolarni DevTools orqali tuzatamiz"
        color="text-red-300"
      >
        <div className="mb-5 flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-white">
          <span className="font-black">Tuzatilgan xatolar</span>
          <span className="font-black text-emerald-300">{fixedCount}/3</span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <FixButton
              active={bugFixed.className}
              title="1. Class nomi noto‘g‘ri"
              wrong={`<div class="box1">`}
              correct={`<div class="product-card">`}
              onClick={() =>
                setBugFixed({ ...bugFixed, className: !bugFixed.className })
              }
            />
            <FixButton
              active={bugFixed.width}
              title="2. Card width juda kichik"
              wrong={`width: 90px;`}
              correct={`width: 320px;`}
              onClick={() =>
                setBugFixed({ ...bugFixed, width: !bugFixed.width })
              }
            />
            <FixButton
              active={bugFixed.repeat}
              title="3. Background takrorlanyapti"
              wrong={`background-repeat: repeat;`}
              correct={`background-repeat: no-repeat;`}
              onClick={() =>
                setBugFixed({ ...bugFixed, repeat: !bugFixed.repeat })
              }
            />
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div
              className={`rounded-3xl p-5 text-white transition ${
                bugFixed.width ? "w-full" : "w-[130px]"
              }`}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80')",
                backgroundSize: "cover",
                backgroundRepeat: bugFixed.repeat ? "no-repeat" : "repeat",
              }}
            >
              <div className="rounded-2xl bg-black/50 p-5 backdrop-blur-sm">
                <p className="mb-2 text-sm opacity-80">
                  class="{bugFixed.className ? "product-card" : "box1"}"
                </p>
                <h4 className="text-3xl font-black">Debug Card</h4>
                <p className="mt-2 text-white/80">
                  DevTools orqali xatolarni topish juda muhim skill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaTools}
        label="Amaliy mashg‘ulot"
        title="Saytdagi bo‘limlarni div orqali guruhlash va DevToolsda tahrirlash"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "header, hero, cards, footer bo‘limlarini div orqali guruhlang",
              "Har bir divga ma’noli class bering",
              "style.css ichida width, height va background yozing",
              "Chrome’da Inspect oching",
              "Styles panelda color yoki widthni vaqtincha o‘zgartiring",
              "Console panelni ochib xato bor-yo‘qligini tekshiring",
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

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-7">
            <p className="text-orange-300">&lt;div class="page"&gt;</p>
            <p className="pl-5 text-cyan-300">
              &lt;div class="hero-section"&gt;
            </p>
            <p className="pl-10 text-white">
              &lt;h1&gt;Frontend Course&lt;/h1&gt;
            </p>
            <p className="pl-10 text-white">
              &lt;p&gt;HTML va CSS o‘rganamiz&lt;/p&gt;
            </p>
            <p className="pl-5 text-cyan-300">&lt;/div&gt;</p>
            <p className="pl-5 text-purple-300">
              &lt;div class="cards-wrapper"&gt;...&lt;/div&gt;
            </p>
            <p className="text-orange-300">&lt;/div&gt;</p>
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
          title="Div, class, background va DevTools quiz"
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

function DevHero({ fixedCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-slate-950/80 p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-cyan-300">DevTools Lab</p>
          <h3 className="text-3xl font-black text-white">Inspect Mode</h3>
        </div>
        <FaSearch className="text-5xl text-cyan-300" />
      </div>

      <div className="rounded-3xl bg-white p-4 text-slate-950">
        <div className="mb-3 rounded-2xl bg-slate-900 p-4 text-white">
          <h4 className="text-2xl font-black">Hero section</h4>
          <p className="text-slate-300">class="hero-section"</p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-cyan-100 p-4">div</div>
          <div className="rounded-2xl bg-purple-100 p-4">span</div>
          <div className="rounded-2xl bg-emerald-100 p-4">class</div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-emerald-400/10 p-4 text-emerald-300">
        Debug progress: {fixedCount}/3
      </div>
    </motion.div>
  );
}

function CodePreview({ code }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
      <p className="mb-3 text-sm font-black text-slate-400">Kod ko‘rinishi:</p>
      <CodeBlock code={code} color="text-cyan-300" />
    </div>
  );
}

function DevToolsMock({ activePanel }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
      <div className="mb-4 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>

      <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl bg-black/40 p-4 font-mono text-sm">
          <p
            className={
              activePanel === "elements" ? "text-orange-300" : "text-slate-500"
            }
          >
            &lt;div class="card"&gt;
          </p>
          <p className="pl-4 text-slate-400">&lt;h2&gt;Title&lt;/h2&gt;</p>
          <p className="pl-4 text-slate-400">&lt;p&gt;Text&lt;/p&gt;</p>
          <p className="text-slate-500">&lt;/div&gt;</p>
        </div>

        <div className="rounded-2xl bg-black/40 p-4 font-mono text-sm">
          {activePanel === "console" ? (
            <>
              <p className="text-emerald-300">console.log("CSS loaded")</p>
              <p className="text-yellow-300">
                Warning: class name not semantic
              </p>
            </>
          ) : (
            <>
              <p
                className={
                  activePanel === "styles" ? "text-cyan-300" : "text-slate-500"
                }
              >
                .card {"{"}
              </p>
              <p className="pl-4 text-white">width: 320px;</p>
              <p className="pl-4 text-white">background: #0f172a;</p>
              <p className="text-slate-500">{"}"}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function RangeControl({ label, min, max, value, onChange }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{label}</h4>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-orange-400"
      />
    </div>
  );
}

function ButtonGroup({ title, value, setValue, options }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setValue(item)}
            className={`cursor-pointer rounded-2xl px-4 py-3 text-sm font-black transition ${
              value === item
                ? "bg-white text-slate-950"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function FixButton({ active, title, wrong, correct, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full cursor-pointer rounded-3xl border p-5 text-left transition ${
        active
          ? "border-emerald-400 bg-emerald-400/15"
          : "border-red-400/30 bg-red-400/10 hover:bg-red-400/15"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-black text-white">{title}</h4>
        {active ? (
          <FaCheckCircle className="text-emerald-300" />
        ) : (
          <FaBug className="text-red-300" />
        )}
      </div>
      <pre
        className={`whitespace-pre-wrap font-mono text-sm ${active ? "text-emerald-300" : "text-red-300"}`}
      >
        {active ? correct : wrong}
      </pre>
    </button>
  );
}

function CodeBlock({ code, color = "text-cyan-300", className = "" }) {
  return (
    <pre
      className={`whitespace-pre-wrap rounded-2xl bg-black/40 p-4 font-mono text-sm leading-7 ${color} ${className}`}
    >
      {code}
    </pre>
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
      <Icon className="mb-3 text-3xl text-cyan-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-cyan-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
