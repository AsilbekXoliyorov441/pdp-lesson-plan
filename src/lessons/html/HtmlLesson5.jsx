import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaSearch,
  FaImage,
  FaVideo,
  FaVolumeUp,
  FaYoutube,
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaNewspaper,
} from "react-icons/fa";
import {
  MdWeb,
  MdOutlineArticle,
  MdOutlineNavigation,
  MdQuiz,
} from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";
import { IoLayers, IoDocumentText } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const semanticTags = [
  {
    id: "header",
    tag: "<header>",
    title: "Header",
    color: "from-orange-500 to-red-500",
    desc: "Sayt yoki bo‘limning yuqori qismi. Logo, title, navbar shu yerda bo‘ladi.",
  },
  {
    id: "nav",
    tag: "<nav>",
    title: "Navigation",
    color: "from-cyan-500 to-blue-500",
    desc: "Sahifa bo‘limlariga yoki boshqa sahifalarga o‘tish linklari joylashadi.",
  },
  {
    id: "main",
    tag: "<main>",
    title: "Main content",
    color: "from-purple-500 to-pink-500",
    desc: "Sahifaning asosiy mazmuni. Har sahifada odatda bitta main bo‘ladi.",
  },
  {
    id: "section",
    tag: "<section>",
    title: "Section",
    color: "from-emerald-500 to-teal-500",
    desc: "Mavzuga oid alohida bo‘lim. Masalan: About, Skills, Projects.",
  },
  {
    id: "article",
    tag: "<article>",
    title: "Article",
    color: "from-yellow-500 to-orange-500",
    desc: "Mustaqil content: blog post, yangilik, product card, maqola.",
  },
  {
    id: "aside",
    tag: "<aside>",
    title: "Aside",
    color: "from-indigo-500 to-violet-500",
    desc: "Yon panel: reklama, tavsiya, related links, qo‘shimcha info.",
  },
  {
    id: "footer",
    tag: "<footer>",
    title: "Footer",
    color: "from-slate-500 to-slate-800",
    desc: "Pastki qism: contact, copyright, social links.",
  },
];

const mediaTabs = {
  img: {
    title: "IMG",
    icon: FaImage,
    color: "from-emerald-500 to-teal-500",
    code: `<img 
  src="profile.jpg"
  alt="Asilbek kompyuter oldida kod yozmoqda"
  width="300"
  height="300"
  loading="lazy"
/>`,
    desc: "img sahifaga rasm chiqaradi. Eng muhim attribut — alt. U rasm ochilmasa yoki screen reader ishlatilsa, rasm mazmunini tushuntiradi.",
  },
  video: {
    title: "VIDEO",
    icon: FaVideo,
    color: "from-purple-500 to-pink-500",
    code: `<video 
  src="lesson.mp4"
  controls
  autoplay
  muted
  loop
  poster="cover.jpg"
  width="600"
></video>`,
    desc: "video sahifaga video joylash uchun ishlatiladi. controls — play/pause tugmalarini chiqaradi.",
  },
  audio: {
    title: "AUDIO",
    icon: FaVolumeUp,
    color: "from-cyan-500 to-blue-500",
    code: `<audio 
  src="audio.mp3"
  controls
  loop
  muted
></audio>`,
    desc: "audio sahifaga ovoz yoki musiqa qo‘shadi. controls bo‘lmasa, foydalanuvchi boshqara olmaydi.",
  },
  iframe: {
    title: "IFRAME",
    icon: FaYoutube,
    color: "from-red-500 to-orange-500",
    code: `<iframe 
  src="https://www.youtube.com/embed/video_id"
  title="YouTube video"
  width="560"
  height="315"
  allowfullscreen
></iframe>`,
    desc: "iframe boshqa sayt contentini sahifamiz ichida ko‘rsatadi. YouTube video embed qilish uchun ko‘p ishlatiladi.",
  },
};

const quiz = [
  {
    question: "Semantik HTML nimani bildiradi?",
    options: [
      "Teg nomi o‘z vazifasini anglatadi",
      "Faqat rang beruvchi kod",
      "Faqat JavaScript kodi",
    ],
    correct: 0,
  },
  {
    question: "Sahifaning asosiy contenti qaysi teg ichida bo‘ladi?",
    options: ["<main>", "<footer>", "<aside>"],
    correct: 0,
  },
  {
    question: "img alt attributi nima uchun kerak?",
    options: [
      "Rasm mazmunini tushuntirish uchun",
      "Rasmni qizil qilish uchun",
      "Video qo‘yish uchun",
    ],
    correct: 0,
  },
  {
    question: "YouTube videoni sahifaga qo‘yishda qaysi teg ishlatiladi?",
    options: ["<iframe>", "<section>", "<br>"],
    correct: 0,
  },
];

export default function HtmlLesson5() {
  const [activeTag, setActiveTag] = useState("header");
  const [activeMedia, setActiveMedia] = useState("img");
  const [answers, setAnswers] = useState({});

  const selectedTag = semanticTags.find((item) => item.id === activeTag);
  const media = mediaTabs[activeMedia];
  const MediaIcon = media.icon;

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
        className="relative overflow-hidden rounded-[42px] border border-emerald-400/20 bg-gradient-to-br from-[#052e2b] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
              <HiSparkles />
              5-DARS • HTML5 Semantika
            </div>

            <h2 className="mb-5 text-3xl font-black leading-tight text-white md:text-6xl">
              HTML sahifani ma’noli qilib quramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun semantik taglar, SEO, o‘qiluvchanlik, img alt, video, audio
              va YouTube iframe bilan ishlashni amaliy ko‘ramiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={IoLayers}
                title="Semantic"
                text="Ma’noli teglar"
              />
              <HeroBadge icon={FaSearch} title="SEO" text="Google tushunadi" />
              <HeroBadge
                icon={FaYoutube}
                title="Media"
                text="img/video/audio"
              />
            </div>
          </div>

          <SemanticPreview active={activeTag} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaHtml5}
        label="Tushuncha"
        title="Semantika nima va nima uchun muhim?"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={IoDocumentText}
            title="Ma’no beradi"
            text="Semantik teg sahifadagi bo‘lim nima vazifa bajarishini nomidan ko‘rsatadi."
          />
          <InfoCard
            icon={FaSearch}
            title="SEO uchun foydali"
            text="Google sahifani yaxshiroq tushunadi: header, main, article, footer qayerda ekanini biladi."
          />
          <InfoCard
            icon={FaCode}
            title="Kod o‘qilishi oson"
            text="Boshqa dasturchi kodni ochganda sahifa strukturasi tez tushunarli bo‘ladi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdWeb}
        label="Interactive layout"
        title="Semantik teglarni qayerda ishlatamiz?"
        color="text-cyan-300"
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
              <p className="mb-2 font-black text-white/80">{selectedTag.tag}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {selectedTag.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">
                {selectedTag.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <CodePanel activeTag={activeTag} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaImage}
        label="Image"
        title="img tegi va alt attributining ahamiyati"
        color="text-orange-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-orange-400/20 bg-orange-400/10 p-6">
            <FaImage className="mb-4 text-5xl text-orange-300" />
            <h4 className="mb-3 text-3xl font-black text-white">
              alt — rasmning matnli ta’rifi
            </h4>
            <p className="leading-7 text-slate-300">
              Alt ichiga “rasm” deb yozilmaydi. Rasmda nima borligini aniq
              yozish kerak. Masalan:{" "}
              <span className="font-bold text-orange-300">
                “O‘quvchi laptopda HTML kod yozmoqda”
              </span>
              .
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="rounded-3xl bg-white p-5 text-slate-950">
              <div className="grid h-52 place-items-center rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 text-6xl">
                🧑‍💻
              </div>
              <p className="mt-4 text-sm text-slate-600">
                alt="O‘quvchi laptopda HTML kod yozmoqda"
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-black/40 p-4 font-mono text-sm text-orange-300">
              &lt;img src="student.jpg" alt="O‘quvchi laptopda HTML kod
              yozmoqda" width="400" loading="lazy" /&gt;
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaVideo}
        label="Media tags"
        title="img, video, audio va iframe atributlari"
        color="text-purple-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(mediaTabs).map(([key, item]) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={key}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveMedia(key)}
                className={`flex cursor-pointer items-center gap-2 rounded-2xl px-5 py-3 font-black transition ${
                  activeMedia === key
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
              key={activeMedia}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${media.color} p-7`}
            >
              <MediaIcon className="mb-4 text-5xl text-white" />
              <h4 className="mb-3 text-4xl font-black text-white">
                {media.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{media.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-slate-300">
            <pre className="whitespace-pre-wrap">{media.code}</pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaYoutube}
        label="YouTube iframe"
        title="YouTube videoni sahifaga joylash"
        color="text-red-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-red-400/20 bg-red-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              YouTube’dan embed olish tartibi
            </h4>

            <div className="space-y-3">
              {[
                "YouTube videoni oching",
                "Share tugmasini bosing",
                "Embed ni tanlang",
                "iframe kodni copy qiling",
                "HTML sahifaga joylang",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-red-400/15 font-black text-red-300">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <div className="grid aspect-video place-items-center rounded-3xl bg-black text-center">
              <div>
                <FaYoutube className="mx-auto mb-4 text-6xl text-red-500" />
                <p className="font-black text-white">YouTube iframe preview</p>
                <p className="mt-2 text-sm text-slate-400">
                  Real projectda bu joyga iframe chiqadi
                </p>
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineArticle}
        label="Amaliy mashg‘ulot"
        title="Semantik elementlardan foydalanib sahifa tuzamiz"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "<header> sayt boshi",
              "<nav> menyu linklari",
              "<main> asosiy content",
              "<section> bo‘lim",
              "<article> karta yoki maqola",
              "<aside> qo‘shimcha info",
              "<footer> pastki qism",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-bold text-slate-300"
              >
                {index + 1}. {item}
              </motion.div>
            ))}
          </div>

          <SemanticPagePreview />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Semantic HTML quiz"
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

function SemanticPreview({ active }) {
  const blocks = [
    { id: "header", label: "header", className: "bg-orange-400" },
    { id: "nav", label: "nav", className: "bg-cyan-400" },
    { id: "main", label: "main", className: "bg-purple-400" },
    { id: "section", label: "section", className: "bg-emerald-400" },
    { id: "article", label: "article", className: "bg-yellow-400" },
    { id: "aside", label: "aside", className: "bg-indigo-400" },
    { id: "footer", label: "footer", className: "bg-slate-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="space-y-3">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`rounded-2xl p-4 font-black transition ${
              block.className
            } ${
              active === block.id
                ? "scale-[1.03] ring-4 ring-slate-950"
                : "opacity-70"
            }`}
          >
            &lt;{block.label}&gt;
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CodePanel({ activeTag }) {
  const code = {
    header: `<header>
  <h1>My Website</h1>
  <nav>...</nav>
</header>`,
    nav: `<nav>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>`,
    main: `<main>
  <section>Asosiy content</section>
</main>`,
    section: `<section>
  <h2>About me</h2>
  <p>Men frontend o‘rganayapman</p>
</section>`,
    article: `<article>
  <h2>Blog title</h2>
  <p>Maqola matni...</p>
</article>`,
    aside: `<aside>
  <h3>Related links</h3>
</aside>`,
    footer: `<footer>
  <p>© 2026 My Website</p>
</footer>`,
  };

  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-emerald-300">
      <pre className="whitespace-pre-wrap">{code[activeTag]}</pre>
    </div>
  );
}

function SemanticPagePreview() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-5 text-slate-950">
      <header className="mb-3 rounded-2xl bg-orange-200 p-4">
        <h1 className="text-2xl font-black">My Semantic Website</h1>
        <nav className="mt-2 flex gap-3 text-sm font-bold">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="grid gap-3 md:grid-cols-[1fr_180px]">
        <section className="rounded-2xl bg-emerald-100 p-4">
          <h2 className="font-black">Main Section</h2>
          <article className="mt-3 rounded-xl bg-yellow-100 p-3">
            <h3 className="font-black">Article card</h3>
            <p className="text-sm">Bu mustaqil content.</p>
          </article>
        </section>

        <aside className="rounded-2xl bg-indigo-100 p-4">
          <h3 className="font-black">Aside</h3>
          <p className="text-sm">Qo‘shimcha linklar</p>
        </aside>
      </main>

      <footer className="mt-3 rounded-2xl bg-slate-200 p-4 text-sm">
        © 2026 PDP Junior
      </footer>
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

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-emerald-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}

function HeroBadge({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
    >
      <Icon className="mb-3 text-3xl text-emerald-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}
