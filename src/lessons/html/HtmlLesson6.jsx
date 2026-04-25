import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWpforms,
  FaKeyboard,
  FaMousePointer,
  FaCheckCircle,
  FaTimesCircle,
  FaTable,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaCode,
} from "react-icons/fa";
import {
  MdOutlineInput,
  MdOutlineTableRows,
  MdQuiz,
  MdOutlineContactMail,
} from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";
import { IoDocumentText, IoLayers } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const formTags = [
  {
    id: "form",
    tag: "<form>",
    title: "Form container",
    color: "from-cyan-500 to-blue-500",
    desc: "Barcha input, label, textarea, select va buttonlar form ichida turadi.",
    code: `<form action="/send" method="POST">
  ...
</form>`,
  },
  {
    id: "input",
    tag: "<input>",
    title: "Input field",
    color: "from-orange-500 to-red-500",
    desc: "Foydalanuvchidan ma’lumot olish uchun ishlatiladi: ism, email, parol, telefon.",
    code: `<input 
  type="email"
  name="email"
  placeholder="Email kiriting"
/>`,
  },
  {
    id: "label",
    tag: "<label>",
    title: "Input nomi",
    color: "from-purple-500 to-pink-500",
    desc: "Input nimaga kerakligini tushuntiradi. for attributi input id bilan bog‘lanadi.",
    code: `<label for="name">Ismingiz</label>
<input id="name" type="text" />`,
  },
  {
    id: "select",
    tag: "<select>",
    title: "Tanlash oynasi",
    color: "from-emerald-500 to-teal-500",
    desc: "Foydalanuvchiga bir nechta variantdan tanlash imkonini beradi.",
    code: `<select name="course">
  <option>HTML</option>
  <option>CSS</option>
</select>`,
  },
  {
    id: "textarea",
    tag: "<textarea>",
    title: "Katta matn maydoni",
    color: "from-yellow-500 to-orange-500",
    desc: "Xabar, izoh, fikr yoki katta matn yozish uchun ishlatiladi.",
    code: `<textarea 
  name="message"
  rows="5"
  placeholder="Xabar yozing"
></textarea>`,
  },
  {
    id: "button",
    tag: "<button>",
    title: "Tugma",
    color: "from-indigo-500 to-violet-500",
    desc: "Formani yuborish yoki boshqa amal bajarish uchun ishlatiladi.",
    code: `<button type="submit">
  Yuborish
</button>`,
  },
];

const inputAttrs = [
  {
    name: "type",
    example: `type="email"`,
    desc: "Input turini belgilaydi: text, email, password, number, date.",
  },
  {
    name: "placeholder",
    example: `placeholder="Ismingizni kiriting"`,
    desc: "Input ichida yordamchi matn ko‘rsatadi.",
  },
  {
    name: "required",
    example: `required`,
    desc: "Bu maydon to‘ldirilishi shart ekanini bildiradi.",
  },
  {
    name: "name",
    example: `name="email"`,
    desc: "Serverga yuboriladigan maydon nomi.",
  },
  {
    name: "value",
    example: `value="Asilbek"`,
    desc: "Inputning boshlang‘ich qiymati.",
  },
  {
    name: "disabled",
    example: `disabled`,
    desc: "Inputni vaqtincha ishlamaydigan qiladi.",
  },
];

const tableTags = [
  ["<table>", "Jadvalning asosiy konteyneri"],
  ["<caption>", "Jadval sarlavhasi"],
  ["<thead>", "Jadval bosh qismi"],
  ["<tbody>", "Jadval asosiy qismi"],
  ["<tfoot>", "Jadval pastki qismi"],
  ["<tr>", "Table row — qator"],
  ["<th>", "Table heading — ustun nomi"],
  ["<td>", "Table data — oddiy katak"],
];

const quiz = [
  {
    question:
      "Form ichidagi ma’lumotlarni serverga yuborishda qaysi teg ishlatiladi?",
    options: ["<form>", "<table>", "<img>"],
    correct: 0,
  },
  {
    question: "Inputni to‘ldirish majburiy qilish uchun qaysi attribute kerak?",
    options: ["required", "href", "src"],
    correct: 0,
  },
  {
    question: "Jadvalda qator yaratish uchun qaysi teg ishlatiladi?",
    options: ["<tr>", "<td>", "<form>"],
    correct: 0,
  },
  {
    question: "colspan nima qiladi?",
    options: [
      "Katakni bir nechta ustun bo‘ylab kengaytiradi",
      "Input rangini o‘zgartiradi",
      "Rasm qo‘yadi",
    ],
    correct: 0,
  },
];

export default function HtmlLesson6() {
  const [activeTag, setActiveTag] = useState("form");
  const [method, setMethod] = useState("POST");
  const [answers, setAnswers] = useState({});
  const [tableMode, setTableMode] = useState("normal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "HTML",
    message: "",
  });

  const selected = formTags.find((item) => item.id === activeTag);
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
        className="relative overflow-hidden rounded-[42px] border border-cyan-400/20 bg-gradient-to-br from-[#061826] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              <HiSparkles />
              6-DARS • Form va Table
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white md:text-6xl">
              Formalar va jadvallar bilan real sahifa quramiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun form, input, label, select, textarea, button, action/method
              hamda table, thead, tbody, tr, th, td, colspan va rowspan bilan
              ishlashni amaliy o‘rganamiz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge icon={FaWpforms} title="Form" text="Ma’lumot olish" />
              <HeroBadge icon={FaTable} title="Table" text="Jadval qurish" />
              <HeroBadge
                icon={MdOutlineContactMail}
                title="Project"
                text="Kontakt forma"
              />
            </div>
          </div>

          <ContactPreview formData={formData} setFormData={setFormData} />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaWpforms}
        label="Form asoslari"
        title="Form nima va qachon ishlatiladi?"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaUser}
            title="Ma’lumot olish"
            text="Ism, email, telefon, parol, xabar kabi ma’lumotlar form orqali olinadi."
          />
          <InfoCard
            icon={FaPaperPlane}
            title="Yuborish"
            text="Submit qilinganda ma’lumot action manziliga method orqali yuboriladi."
          />
          <InfoCard
            icon={FaCheckCircle}
            title="Tekshirish"
            text="required, type=email kabi atributlar oddiy tekshiruvlar qilishga yordam beradi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={IoLayers}
        label="Interactive"
        title="Form taglari bilan tanishamiz"
        color="text-orange-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {formTags.map((item) => (
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
              className={`rounded-[32px] bg-gradient-to-br ${selected.color} p-7`}
            >
              <p className="mb-2 font-black text-white/80">{selected.tag}</p>
              <h4 className="mb-3 text-4xl font-black text-white">
                {selected.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{selected.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-cyan-300">
            <pre className="whitespace-pre-wrap">{selected.code}</pre>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaPaperPlane}
        label="action va method"
        title="Form ma’lumotni qayerga va qanday yuboradi?"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              action + method
            </h4>
            <p className="leading-7 text-slate-300">
              <b className="text-emerald-300">action</b> — form qayerga
              yuborilishini bildiradi.{" "}
              <b className="text-emerald-300">method</b> esa qanday
              yuborilishini bildiradi: GET yoki POST.
            </p>

            <div className="mt-5 flex gap-3">
              {["GET", "POST"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMethod(item)}
                  className={`cursor-pointer rounded-2xl px-5 py-3 font-black ${
                    method === item
                      ? "bg-white text-slate-950"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-slate-300">
            <p className="text-emerald-300">
              &lt;form action="/contact" method="{method}"&gt;
            </p>
            <p className="pl-5 text-white">
              &lt;input name="email" type="email" /&gt;
            </p>
            <p className="pl-5 text-white">
              &lt;button type="submit"&gt;Yuborish&lt;/button&gt;
            </p>
            <p className="text-emerald-300">&lt;/form&gt;</p>

            <div className="mt-5 rounded-2xl bg-white/5 p-4 text-white">
              {method === "GET"
                ? "GET: ma’lumot URL orqali ko‘rinishi mumkin. Qidiruv, filter uchun qulay."
                : "POST: ma’lumot body orqali yuboriladi. Login, kontakt forma uchun to‘g‘riroq."}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineInput}
        label="Input attributes"
        title="Input tegi uchun eng kerakli attributlar"
        color="text-purple-300"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {inputAttrs.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
            >
              <FaKeyboard className="mb-4 text-3xl text-purple-300" />
              <h4 className="mb-2 text-2xl font-black text-white">
                {item.name}
              </h4>
              <div className="mb-4 rounded-2xl bg-black/40 p-3 font-mono text-sm text-purple-300">
                {item.example}
              </div>
              <p className="text-sm leading-6 text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaTable}
        label="Table"
        title="Jadval teglari bilan tanishamiz"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3">
            {tableTags.map(([tag, text]) => (
              <motion.div
                key={tag}
                whileHover={{ x: 7 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
              >
                <span className="font-mono font-black text-yellow-300">
                  {tag}
                </span>
                <p className="mt-1 text-sm text-slate-300">{text}</p>
              </motion.div>
            ))}
          </div>

          <TablePreview mode={tableMode} setMode={setTableMode} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineTableRows}
        label="colspan va rowspan"
        title="Kataklarni birlashtirish"
        color="text-pink-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <MergeCard
            title="colspan"
            desc="Katakni bir nechta ustun bo‘ylab kengaytiradi."
            code={`<td colspan="2">Jami</td>`}
          />
          <MergeCard
            title="rowspan"
            desc="Katakni bir nechta qator bo‘ylab kengaytiradi."
            code={`<td rowspan="2">Frontend</td>`}
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineContactMail}
        label="Amaliy mashg‘ulot"
        title="Kontakt formasi yaratamiz"
        color="text-cyan-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Form skeleti
            </h4>

            <div className="space-y-3">
              {[
                "form action va method yoziladi",
                "label + input bilan ism olinadi",
                "email input type=email bo‘ladi",
                "select orqali kurs tanlanadi",
                "textarea orqali xabar yoziladi",
                "button type=submit bilan yuboriladi",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 7 }}
                  className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-cyan-400/15 font-black text-cyan-300">
                    {index + 1}
                  </span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <ContactPreview formData={formData} setFormData={setFormData} large />
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Form va table quiz"
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
                  const selectedAnswer = answers[questionIndex] === optionIndex;
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
                        selectedAnswer && correct
                          ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                          : selectedAnswer && !correct
                            ? "border-red-400 bg-red-400/20 text-red-300"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {selectedAnswer ? (
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

function ContactPreview({ formData, setFormData, large = false }) {
  function updateField(field, value) {
    setFormData({ ...formData, [field]: value });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-white/10 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="font-black text-cyan-600">Live contact form</p>
          <h3 className="text-2xl font-black">Kontakt formasi</h3>
        </div>
        <FaWpforms className="text-4xl text-cyan-500" />
      </div>

      <div className={`grid gap-4 ${large ? "md:grid-cols-2" : ""}`}>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">Ism</span>
          <input
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Ismingiz"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold">Email</span>
          <input
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="email@example.com"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold">Telefon</span>
          <input
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="+998 90 123 45 67"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold">Kurs</span>
          <select
            value={formData.course}
            onChange={(e) => updateField("course", e.target.value)}
            className="w-full cursor-pointer rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
          >
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
          </select>
        </label>

        <label className={`block ${large ? "md:col-span-2" : ""}`}>
          <span className="mb-2 block text-sm font-bold">Xabar</span>
          <textarea
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Xabaringiz..."
            rows={4}
            className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
          />
        </label>
      </div>

      <button className="mt-5 w-full cursor-pointer rounded-2xl bg-cyan-500 px-5 py-4 font-black text-white">
        Yuborish
      </button>
    </motion.div>
  );
}

function TablePreview({ mode, setMode }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
      <div className="mb-5 flex flex-wrap gap-3">
        {["normal", "colspan", "rowspan"].map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={`cursor-pointer rounded-2xl px-4 py-2 font-black ${
              mode === item
                ? "bg-white text-slate-950"
                : "bg-white/10 text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl bg-white text-slate-950">
        <table className="w-full border-collapse text-left">
          <caption className="bg-slate-100 p-3 font-black">
            PDP Junior Students
          </caption>
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="border p-3">Ism</th>
              <th className="border p-3">Kurs</th>
              <th className="border p-3">Ball</th>
            </tr>
          </thead>
          <tbody>
            {mode === "rowspan" ? (
              <>
                <tr>
                  <td className="border p-3" rowSpan="2">
                    Asilbek
                  </td>
                  <td className="border p-3">HTML</td>
                  <td className="border p-3">95</td>
                </tr>
                <tr>
                  <td className="border p-3">CSS</td>
                  <td className="border p-3">90</td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td className="border p-3">Asilbek</td>
                  <td className="border p-3">HTML</td>
                  <td className="border p-3">95</td>
                </tr>
                <tr>
                  <td className="border p-3">Ali</td>
                  <td className="border p-3">CSS</td>
                  <td className="border p-3">88</td>
                </tr>
              </>
            )}
          </tbody>
          <tfoot className="bg-slate-100 font-black">
            <tr>
              <td className="border p-3" colSpan={mode === "colspan" ? 2 : 1}>
                Jami
              </td>
              {mode !== "colspan" && <td className="border p-3">2 kurs</td>}
              <td className="border p-3">183</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

function MergeCard({ title, desc, code }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
    >
      <h4 className="mb-3 text-3xl font-black text-white">{title}</h4>
      <p className="mb-5 leading-7 text-slate-300">{desc}</p>
      <div className="rounded-2xl bg-black/40 p-4 font-mono text-pink-300">
        {code}
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
