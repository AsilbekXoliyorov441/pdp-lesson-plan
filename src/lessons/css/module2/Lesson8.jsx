import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFont,
  FaGoogle,
  FaLink,
  FaDownload,
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaPalette,
  FaMagic,
  FaLaptopCode,
} from "react-icons/fa";
import { MdQuiz, MdTextFields, MdOutlineImportContacts } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const fontFamilies = {
  serif: {
    title: "Serif",
    preview: "Georgia, Times New Roman",
    css: `font-family: Georgia, serif;`,
    desc: "Harflarida kichik bezak chiziqlari bo‘ladi. Kitob, maqola, premium editorial designlarda ishlatiladi.",
    style: { fontFamily: "Georgia, serif" },
    color: "from-amber-500 to-orange-500",
  },
  sans: {
    title: "Sans-serif",
    preview: "Arial, Inter, Roboto",
    css: `font-family: Arial, sans-serif;`,
    desc: "Harflari toza va bezaksiz. Web saytlar, dashboard, landing page uchun eng ko‘p ishlatiladi.",
    style: { fontFamily: "Arial, sans-serif" },
    color: "from-cyan-500 to-blue-500",
  },
  mono: {
    title: "Monospace",
    preview: "Consolas, Courier New",
    css: `font-family: Consolas, monospace;`,
    desc: "Har bir harf bir xil kenglikda. Kod bloklari va terminal ko‘rinishlari uchun ishlatiladi.",
    style: { fontFamily: "Consolas, monospace" },
    color: "from-emerald-500 to-teal-500",
  },
  cursive: {
    title: "Cursive",
    preview: "Brush Script style",
    css: `font-family: cursive;`,
    desc: "Qo‘l yozuviga o‘xshash shriftlar. Juda ehtiyotkorlik bilan ishlatish kerak.",
    style: { fontFamily: "cursive" },
    color: "from-pink-500 to-rose-500",
  },
  fantasy: {
    title: "Fantasy",
    preview: "Decorative style",
    css: `font-family: fantasy;`,
    desc: "Dekorativ, o‘yin, poster yoki special headinglar uchun. Oddiy textda ishlatish tavsiya qilinmaydi.",
    style: { fontFamily: "fantasy" },
    color: "from-purple-500 to-fuchsia-500",
  },
};

const fontFormats = [
  {
    title: "TTF",
    text: "Eski va keng tarqalgan format. Local font uchun ishlatilishi mumkin.",
  },
  {
    title: "OTF",
    text: "Professional typography imkoniyatlari ko‘proq bo‘lgan format.",
  },
  {
    title: "WOFF",
    text: "Web uchun optimallashtirilgan font format.",
  },
  {
    title: "WOFF2",
    text: "Eng yaxshi va zamonaviy web font formatlardan biri. Hajmi kichikroq.",
  },
  {
    title: "EOT",
    text: "Eski Internet Explorer uchun ishlatilgan format.",
  },
  {
    title: "SVG Font",
    text: "Eski usul. Hozir kam ishlatiladi.",
  },
];

const connectMethods = {
  link: {
    title: "<link>",
    color: "from-emerald-500 to-teal-500",
    best: "Best practice",
    desc: "Google Fonts ulashda link usuli ko‘proq tavsiya qilinadi. HTML head qismida yoziladi va performance uchun yaxshiroq.",
    code: `<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link 
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" 
    rel="stylesheet"
  >
</head>`,
  },
  import: {
    title: "@import",
    color: "from-orange-500 to-red-500",
    best: "Oson, lekin sekinroq",
    desc: "@import CSS ichida yoziladi, lekin font yuklanishi kechroq boshlanishi mumkin. Katta projectlarda link yaxshi.",
    code: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

body {
  font-family: 'Inter', sans-serif;
}`,
  },
  local: {
    title: "@font-face",
    color: "from-purple-500 to-pink-500",
    best: "Local/offline font",
    desc: "Font faylni project ichiga yuklab, @font-face bilan ulanadi. Internet bo‘lmasa ham ishlashi mumkin.",
    code: `@font-face {
  font-family: "MyCustomFont";
  src: url("./fonts/MyCustomFont.woff2") format("woff2"),
       url("./fonts/MyCustomFont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: "MyCustomFont", sans-serif;
}`,
  },
};

const quiz = [
  {
    question: "Shrift nima uchun kerak?",
    options: [
      "Matn ko‘rinishi va kayfiyatini belgilash uchun",
      "HTML faylni o‘chirish uchun",
      "Internet tezlatish uchun",
    ],
    correct: 0,
  },
  {
    question: "Web saytlar uchun eng ko‘p ishlatiladigan font oilasi qaysi?",
    options: ["sans-serif", "fantasy", "EOT"],
    correct: 0,
  },
  {
    question: "Kod yozish previewlarida qaysi font yaxshi?",
    options: ["monospace", "cursive", "serif"],
    correct: 0,
  },
  {
    question: "Google Fonts ulashda best practice qaysi?",
    options: [
      "<link> orqali ulash",
      "@import har doim eng yaxshi",
      "Fontni umuman ulamaslik",
    ],
    correct: 0,
  },
  {
    question: "@font-face nima uchun?",
    options: [
      "Local custom font ulash uchun",
      "Image ulash uchun",
      "Flex yaratish uchun",
    ],
    correct: 0,
  },
  {
    question: "WOFF2 nimasi bilan yaxshi?",
    options: [
      "Web uchun optimallashtirilgan va yengilroq",
      "Faqat video uchun",
      "Faqat HTML tag",
    ],
    correct: 0,
  },
  {
    question: "font-weight nima qiladi?",
    options: [
      "Matn qalinligini belgilaydi",
      "Matn rangini belgilaydi",
      "Background beradi",
    ],
    correct: 0,
  },
  {
    question: "font-style: italic nima qiladi?",
    options: [
      "Matnni qiyaroq qiladi",
      "Matnni yashiradi",
      "Elementni block qiladi",
    ],
    correct: 0,
  },
];

export default function CssM2L8() {
  const [activeFamily, setActiveFamily] = useState("sans");
  const [activeMethod, setActiveMethod] = useState("link");
  const [fontSize, setFontSize] = useState(42);
  const [fontWeight, setFontWeight] = useState(800);
  const [italic, setItalic] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [figmaStep, setFigmaStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const family = fontFamilies[activeFamily];
  const method = connectMethods[activeMethod];

  const correctCount = useMemo(
    () => quiz.filter((item, index) => answers[index] === item.correct).length,
    [answers],
  );

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[44px] border border-violet-400/20 bg-gradient-to-br from-[#140923] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-black text-violet-300">
              <HiSparkles />
              CSS • Module 2 • 8-DARS
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Typography sahifaning ovozi va xarakteri
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun font family turlari, Google Fonts, link vs @import,
              @font-face, local font, font-size, font-weight va Figma fontni
              projectga to‘g‘ri ulashni o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaFont} title="Fonts" text="typography system" />
              <HeroBadge
                icon={FaGoogle}
                title="Google Fonts"
                text="CDN orqali"
              />
              <HeroBadge icon={FaDownload} title="Local" text="@font-face" />
            </div>
          </div>

          <TypographyHero
            fontSize={fontSize}
            fontWeight={fontWeight}
            italic={italic}
            letterSpacing={letterSpacing}
            familyStyle={family.style}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaFont}
        label="Font nima?"
        title="Shrift nima va nima uchun ishlatiladi?"
        color="text-violet-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={MdTextFields}
            title="Matn kayfiyati"
            text="Font saytning hissiyotini beradi: rasmiy, bolalarcha, premium, texnik yoki kreativ."
          />
          <InfoCard
            icon={FaPalette}
            title="Design identity"
            text="Brand, portfolio yoki landing page o‘ziga xos ko‘rinishi uchun font juda muhim."
          />
          <InfoCard
            icon={FaLaptopCode}
            title="O‘qilishi"
            text="Yaxshi font matnni o‘qishni oson qiladi. Juda bezakli font esa charchatadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineImportContacts}
        label="Font oilalari"
        title="Serif, sans-serif, monospace, cursive va fantasy"
        color="text-cyan-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(fontFamilies).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFamily(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeFamily === key
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
              key={activeFamily}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${family.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">{family.preview}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {family.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{family.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="rounded-3xl bg-white p-6 text-slate-950">
              <p
                className="text-center text-5xl font-black"
                style={family.style}
              >
                Frontend Typography
              </p>
              <p
                className="mt-4 text-center text-lg text-slate-500"
                style={family.style}
              >
                Har bir font sayt kayfiyatini o‘zgartiradi.
              </p>
            </div>

            <CodePanel className="mt-5" code={`body {\n  ${family.css}\n}`} />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaFileFormatIcon}
        label="Font formatlari"
        title="EOT, TTF, WOFF, WOFF2 va SVG Font"
        color="text-emerald-300"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {fontFormats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 px-4 py-2 font-black text-emerald-300">
                {item.title}
              </div>
              <p className="text-sm leading-6 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaGoogle}
        label="Google Fonts"
        title="Google Fonts orqali online shrift ulash"
        color="text-orange-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(connectMethods).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMethod(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeMethod === key
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
              key={activeMethod}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${method.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">{method.best}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {method.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{method.desc}</p>
            </motion.div>
          </AnimatePresence>

          <CodePanel code={method.code} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaMagic}
        label="Font playground"
        title="font-family, font-size, font-weight va font-style"
        color="text-fuchsia-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <RangeControl
              label={`font-size: ${fontSize}px`}
              min={18}
              max={76}
              value={fontSize}
              onChange={setFontSize}
            />

            <RangeControl
              label={`font-weight: ${fontWeight}`}
              min={100}
              max={900}
              step={100}
              value={fontWeight}
              onChange={setFontWeight}
            />

            <RangeControl
              label={`letter-spacing: ${letterSpacing}px`}
              min={-2}
              max={10}
              value={letterSpacing}
              onChange={setLetterSpacing}
            />

            <button
              type="button"
              onClick={() => setItalic(!italic)}
              className={`w-full cursor-pointer rounded-2xl px-5 py-4 font-black transition ${
                italic
                  ? "bg-fuchsia-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {italic ? "font-style: italic" : "font-style: normal"}
            </button>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="rounded-3xl bg-white p-8 text-slate-950">
              <motion.h3
                animate={{
                  fontSize,
                  fontWeight,
                  letterSpacing,
                }}
                style={{
                  ...family.style,
                  fontStyle: italic ? "italic" : "normal",
                }}
                className="text-center leading-tight"
              >
                Design starts with type
              </motion.h3>
            </div>

            <CodePanel
              className="mt-5"
              code={`.title {
  ${family.css}
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  font-style: ${italic ? "italic" : "normal"};
  letter-spacing: ${letterSpacing}px;
}`}
            />
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Local font"
        title="Offline local font ulash"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Project ichida font papkasi
            </h4>

            <div className="space-y-3">
              {[
                "src yoki public ichida fonts papka ochiladi",
                "font fayl: .woff2 yoki .woff joylanadi",
                "@font-face bilan font nomi beriladi",
                "body yoki kerakli classda font-family ishlatiladi",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <span className="mr-2 font-black text-cyan-300">
                    {index + 1}.
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <CodePanel
            code={`project/
├── index.html
├── style.css
└── fonts/
    ├── Inter-Regular.woff2
    └── Inter-Bold.woff2

@font-face {
  font-family: "Inter";
  src: url("./fonts/Inter-Regular.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "Inter";
  src: url("./fonts/Inter-Bold.woff2") format("woff2");
  font-weight: 700;
}

body {
  font-family: "Inter", sans-serif;
}`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaPalette}
        label="Figma practice"
        title="Figma dizaynidagi fontni projectga ulash"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Figma design ichida text elementni tanlang",
              "Right paneldan font family nomini ko‘ring",
              "Font weight va font size qiymatlarini yozib oling",
              "Google Fontsdan shu fontni toping",
              "<link> orqali HTML head qismiga ulang",
              "CSSda font-family, size, weightni takrorlang",
            ].map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setFigmaStep(index + 1)}
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left transition ${
                  figmaStep === index + 1
                    ? "border-yellow-400 bg-yellow-400/15 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/10"
                }`}
              >
                <span className="mr-2 font-black text-yellow-300">
                  {index + 1}.
                </span>
                {item}
              </button>
            ))}
          </div>

          <div className="rounded-[32px] bg-white p-5 text-slate-950">
            <div className="rounded-[30px] bg-gradient-to-br from-violet-600 to-cyan-500 p-6 text-white">
              <p className="mb-3 text-sm font-black opacity-80">
                Figma text style
              </p>
              <h4 className="text-5xl font-black">Inter Bold 48px</h4>
              <p className="mt-4 max-w-md text-lg text-white/80">
                Fontni to‘g‘ri ulash dizaynni pixel perfect qilishga yordam
                beradi.
              </p>
            </div>

            <div className="mt-5 rounded-3xl bg-slate-100 p-5">
              <p className="font-black text-slate-500">Hozirgi step:</p>
              <p className="mt-2 text-2xl font-black">{figmaStep}-bosqich</p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLaptopCode}
        label="Amaliy mashg‘ulot"
        title="Loyihaga o‘ziga xos shrift o‘rnatish"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Google Fontsdan Inter yoki Poppins tanlang",
              "Regular, Medium, Bold weightlarni belgilang",
              "<link> kodini index.html head qismiga qo‘ying",
              "bodyga font-family yozing",
              "h1 uchun font-size va font-weight bering",
              "button va card textlarida font weightlarni farqlang",
              "DevTools orqali font ishlayotganini tekshiring",
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

          <CodePanel
            code={`<!-- index.html -->
<link 
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" 
  rel="stylesheet"
/>

/* style.css */
body {
  font-family: "Poppins", sans-serif;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
}

.card-text {
  font-size: 16px;
  font-weight: 400;
}`}
          />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Fontlar quiz"
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

function TypographyHero({
  fontSize,
  fontWeight,
  italic,
  letterSpacing,
  familyStyle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-violet-600">
            Typography Preview
          </p>
          <h3 className="text-3xl font-black">Font Lab</h3>
        </div>
        <FaFont className="text-5xl text-violet-500" />
      </div>

      <div className="rounded-[30px] bg-gradient-to-br from-violet-600 to-cyan-500 p-6 text-white">
        <motion.h4
          animate={{ fontSize, fontWeight, letterSpacing }}
          style={{
            ...familyStyle,
            fontStyle: italic ? "italic" : "normal",
          }}
          className="leading-tight"
        >
          Typography
        </motion.h4>

        <p className="mt-4 text-white/80">
          Font o‘zgarsa, saytning kayfiyati ham o‘zgaradi.
        </p>
      </div>
    </motion.div>
  );
}

function RangeControl({ label, min, max, value, onChange, step = 1 }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
      <h4 className="mb-4 text-xl font-black text-white">{label}</h4>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-violet-400"
      />
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

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-violet-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function FaFileFormatIcon(props) {
  return <FaDownload {...props} />;
}
