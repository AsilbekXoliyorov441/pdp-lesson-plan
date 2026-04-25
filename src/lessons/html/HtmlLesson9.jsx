import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFigma,
  FaCode,
  FaImage,
  FaLayerGroup,
  FaDownload,
  FaCheckCircle,
  FaTimesCircle,
  FaMousePointer,
  FaHtml5,
} from "react-icons/fa";
import { MdDesignServices, MdQuiz, MdOutlineFileCopy } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";
import { IoColorPalette, IoLayers } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const exportTypes = {
  svg: {
    title: "SVG",
    color: "from-emerald-500 to-teal-500",
    best: "Logo, icon, vector shakllar",
    desc: "SVG sifatini yo‘qotmaydi. Kattalashtirsangiz ham tiniq qoladi. Icon va logo uchun eng yaxshi tanlov.",
    code: `<img src="logo.svg" alt="PDP Junior logotipi" />`,
  },
  png: {
    title: "PNG",
    color: "from-cyan-500 to-blue-500",
    best: "Transparent background kerak bo‘lsa",
    desc: "PNG fon shaffofligini qo‘llab-quvvatlaydi. Screenshot, UI element, transparent rasm uchun yaxshi.",
    code: `<img src="hero-image.png" alt="Frontend dars rasmi" />`,
  },
  jpeg: {
    title: "JPEG",
    color: "from-orange-500 to-red-500",
    best: "Katta foto rasmlar",
    desc: "JPEG rasm hajmini kichraytiradi, lekin sifat biroz pasayishi mumkin. Real foto uchun qulay.",
    code: `<img src="student-photo.jpg" alt="Darsda qatnashayotgan o‘quvchi" />`,
  },
};

const tools = [
  {
    title: "Move tool",
    icon: FaMousePointer,
    text: "Elementlarni tanlash va joyini o‘zgartirish uchun.",
  },
  {
    title: "Frame",
    icon: FaLayerGroup,
    text: "Web sahifa yoki section uchun asosiy canvas.",
  },
  {
    title: "Design panel",
    icon: IoColorPalette,
    text: "Rang, font, spacing, width, height ma’lumotlarini ko‘rish.",
  },
  {
    title: "Inspect",
    icon: FaCode,
    text: "Developer uchun CSSga o‘xshash qiymatlarni olish.",
  },
];

const quiz = [
  {
    question: "Figma dasturchiga nima uchun kerak?",
    options: [
      "Dizayndan o‘lcham, rang va assetlarni olish uchun",
      "Faqat video montaj qilish uchun",
      "Internet tezlatish uchun",
    ],
    correct: 0,
  },
  {
    question: "Logo va icon uchun eng yaxshi format qaysi?",
    options: ["SVG", "JPEG", "DOCX"],
    correct: 0,
  },
  {
    question: "PNG qachon foydali?",
    options: [
      "Transparent background kerak bo‘lsa",
      "Faqat audio uchun",
      "Faqat table uchun",
    ],
    correct: 0,
  },
  {
    question: "Frame nima?",
    options: [
      "Dizayn joylashadigan asosiy maydon",
      "HTML tegi",
      "Keyboard tugmasi",
    ],
    correct: 0,
  },
];

export default function HtmlLesson9() {
  const [activeExport, setActiveExport] = useState("svg");
  const [activeLayer, setActiveLayer] = useState("hero");
  const [answers, setAnswers] = useState({});

  const selectedExport = exportTypes[activeExport];

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
        className="relative overflow-hidden rounded-[42px] border border-pink-400/20 bg-gradient-to-br from-[#1b1238] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm font-black text-pink-300">
              <HiSparkles />
              9-DARS • Figma to HTML
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Dizaynni ko‘rib, HTMLga aylantirishni boshlaymiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun Figma interfeysi, frame, design inspect, rang/font/spacing
              olish, SVG/PNG/JPEG export va oddiy UI elementni HTMLga
              o‘tkazishni o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaFigma} title="Figma" text="Dizayn source" />
              <HeroBadge icon={FaDownload} title="Export" text="SVG/PNG/JPEG" />
              <HeroBadge icon={FaHtml5} title="HTML" text="UI ga aylantirish" />
            </div>
          </div>

          <FigmaMockup
            activeLayer={activeLayer}
            setActiveLayer={setActiveLayer}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaFigma}
        label="Tushuncha"
        title="Figma nima va dasturchiga nima uchun kerak?"
        color="text-pink-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={MdDesignServices}
            title="Dizaynni ko‘rish"
            text="Dasturchi Figma orqali sahifa qanday ko‘rinishini aniq biladi."
          />
          <InfoCard
            icon={IoColorPalette}
            title="Rang va font olish"
            text="Color, font size, width, height, spacing kabi qiymatlar olinadi."
          />
          <InfoCard
            icon={FaCode}
            title="HTML/CSSga o‘tkazish"
            text="Dizayn bo‘limlarga ajratilib, HTML strukturaga aylantiriladi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={IoLayers}
        label="Interface"
        title="Figma interfeysi va asosiy joylari"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              "Left panel: layerlar va page/fayllar",
              "Center canvas: dizayn joylashgan maydon",
              "Right panel: design, prototype, inspect",
              "Top toolbar: move, frame, shape, text",
              "Frame: web sahifa yoki section o‘lchami",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-cyan-300">
                  {index + 1}.
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="grid gap-3 md:grid-cols-[160px_1fr_180px]">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="mb-3 font-black text-white">Layers</p>
                {["Hero", "Navbar", "Button", "Image"].map((item) => (
                  <div
                    key={item}
                    className="mb-2 rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-white p-4 text-slate-950">
                <div className="mb-3 h-10 rounded-xl bg-slate-900" />
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl bg-pink-100 p-4">
                    <h4 className="font-black">Hero title</h4>
                    <p className="text-sm">Landing section</p>
                  </div>
                  <div className="rounded-2xl bg-purple-200 p-4" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="mb-3 font-black text-white">Inspect</p>
                <CodeLine text="width: 320px" />
                <CodeLine text="height: 160px" />
                <CodeLine text="color: #ec4899" />
                <CodeLine text="font-size: 32px" />
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLayerGroup}
        label="Design file"
        title="Dizayn fayl va frame tushunchasi"
        color="text-purple-300"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CompareCard
            title="Design file"
            text="Butun loyiha saqlanadigan Figma fayl. Ichida bir nechta sahifa, frame va component bo‘lishi mumkin."
            items={["Landing page", "Dashboard", "Mobile version"]}
          />
          <CompareCard
            title="Frame"
            text="Figma ichidagi alohida ekran yoki section. Masalan: Desktop 1440px, Mobile 390px."
            items={["Desktop frame", "Tablet frame", "Mobile frame"]}
            active
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaDownload}
        label="Export"
        title="SVG, PNG va JPEG farqi"
        color="text-emerald-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(exportTypes).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveExport(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeExport === key
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
              key={activeExport}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${selectedExport.color} p-7`}
            >
              <FaImage className="mb-4 text-5xl text-white" />
              <h4 className="mb-3 text-4xl font-black text-white">
                {selectedExport.title}
              </h4>
              <p className="mb-4 text-lg font-black text-white/90">
                Eng yaxshi: {selectedExport.best}
              </p>
              <p className="text-lg leading-8 text-white/90">
                {selectedExport.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-emerald-300">
            {selectedExport.code}
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Figma → HTML"
        title="Dizayndan kodga o‘tish tartibi"
        color="text-orange-300"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Frame tanlash"
            text="Qaysi sectionni yasashni aniqlaymiz."
          />
          <StepCard
            number="02"
            title="Elementlarni ajratish"
            text="Text, image, button, cardlarni ko‘ramiz."
          />
          <StepCard
            number="03"
            title="HTML strukturasi"
            text="header, section, div, h1, p, a yozamiz."
          />
          <StepCard
            number="04"
            title="Asset export"
            text="Rasm/iconlarni to‘g‘ri formatda olamiz."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineFileCopy}
        label="Amaliy mashg‘ulot"
        title="Oddiy UI elementini HTMLga o‘tkazamiz"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <p className="mb-3 text-sm font-black text-pink-600">
              Figma design preview
            </p>
            <div className="rounded-[28px] bg-gradient-to-br from-pink-500 to-purple-600 p-6 text-white">
              <h4 className="mb-3 text-3xl font-black">Learn Frontend</h4>
              <p className="mb-5 text-white/80">
                HTML, CSS va JavaScriptni amaliy o‘rganing.
              </p>
              <button className="cursor-pointer rounded-2xl bg-white px-5 py-3 font-black text-purple-600">
                Start learning
              </button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm">
            <p className="text-orange-300">&lt;section&gt;</p>
            <p className="pl-5 text-cyan-300">
              &lt;h1&gt;Learn Frontend&lt;/h1&gt;
            </p>
            <p className="pl-5 text-slate-300">
              &lt;p&gt;HTML, CSS va JavaScriptni amaliy o‘rganing.&lt;/p&gt;
            </p>
            <p className="pl-5 text-purple-300">
              &lt;button&gt;Start learning&lt;/button&gt;
            </p>
            <p className="text-orange-300">&lt;/section&gt;</p>
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
          title="Figma to HTML quiz"
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

function FigmaMockup({ activeLayer, setActiveLayer }) {
  const layers = ["hero", "button", "image", "navbar"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-slate-950/80 p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <span className="font-black text-pink-300">Figma file</span>
      </div>

      <div className="grid gap-3 md:grid-cols-[140px_1fr]">
        <div className="rounded-2xl bg-white/5 p-3">
          {layers.map((layer) => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`mb-2 w-full cursor-pointer rounded-xl px-3 py-2 text-left text-sm font-bold ${
                activeLayer === layer
                  ? "bg-pink-400 text-white"
                  : "bg-slate-900 text-slate-300"
              }`}
            >
              {layer}
            </button>
          ))}
        </div>

        <div className="rounded-2xl bg-white p-4 text-slate-950">
          <div
            className={`mb-3 h-10 rounded-xl bg-slate-900 ${
              activeLayer === "navbar" ? "ring-4 ring-pink-400" : ""
            }`}
          />
          <div
            className={`rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 p-5 text-white ${
              activeLayer === "hero" ? "ring-4 ring-yellow-300" : ""
            }`}
          >
            <h3 className="text-2xl font-black">Creative Landing</h3>
            <p className="mt-2 text-white/80">Figma design preview</p>
            <button
              className={`mt-4 cursor-pointer rounded-xl bg-white px-4 py-2 font-black text-purple-600 ${
                activeLayer === "button" ? "ring-4 ring-cyan-300" : ""
              }`}
            >
              Get started
            </button>
          </div>

          <div
            className={`mt-3 grid h-28 place-items-center rounded-2xl bg-purple-100 text-4xl ${
              activeLayer === "image" ? "ring-4 ring-emerald-400" : ""
            }`}
          >
            🖼️
          </div>
        </div>
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
      <Icon className="mb-3 text-3xl text-pink-300" />
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
      <Icon className="mb-4 text-4xl text-pink-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function CodeLine({ text }) {
  return (
    <div className="mb-2 rounded-xl bg-slate-900 px-3 py-2 text-xs text-slate-300">
      {text}
    </div>
  );
}

function CompareCard({ title, text, items, active }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`rounded-3xl border p-6 ${
        active
          ? "border-purple-300/30 bg-purple-400/10"
          : "border-white/10 bg-slate-950/60"
      }`}
    >
      <h4 className="mb-3 text-3xl font-black text-white">{title}</h4>
      <p className="mb-5 leading-7 text-slate-300">{text}</p>
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
