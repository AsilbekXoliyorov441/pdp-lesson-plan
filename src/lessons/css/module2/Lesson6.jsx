import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaCode,
  FaCrown,
  FaKeyboard,
  FaEye,
  FaComments,
  FaCheckCircle,
  FaTimesCircle,
  FaLaptopCode,
  FaStar,
  FaSyncAlt,
  FaRocket,
  FaUserFriends,
} from "react-icons/fa";
import { MdQuiz, MdOutlineRateReview, MdTimer } from "react-icons/md";
import { HiSparkles, HiMiniCursorArrowRays } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const roles = {
  driver: {
    title: "Driver",
    icon: FaKeyboard,
    color: "from-yellow-400 to-orange-500",
    desc: "Kod yozadi. Lekin xohlaganicha emas — navigator aytgan yo‘nalish bo‘yicha yozadi.",
    tasks: [
      "Kod yozadi",
      "VS Code’da ishlaydi",
      "Navigator fikrini eshitadi",
      "Savol beradi",
    ],
  },
  navigator: {
    title: "Navigator",
    icon: FaEye,
    color: "from-amber-500 to-yellow-300",
    desc: "Kod yozmaydi. Lekin kodni kuzatadi, xatolarni topadi, yo‘l-yo‘riq beradi.",
    tasks: [
      "Kod tekshiradi",
      "Xato topadi",
      "Yaxshiroq yechim taklif qiladi",
      "Tushuntiradi",
    ],
  },
  reviewer: {
    title: "Reviewer",
    icon: FaComments,
    color: "from-stone-600 to-yellow-600",
    desc: "Oxirida kodni tahlil qiladi: class nomlari, spacing, display, ranglar va box model to‘g‘riligini ko‘radi.",
    tasks: [
      "Code review qiladi",
      "Feedback beradi",
      "Kamchilikni aytadi",
      "Yaxshi joylarni maqtaydi",
    ],
  },
};

const reviewItems = [
  { key: "html", label: "HTML structure", icon: FaCode },
  { key: "class", label: "Class nomlari", icon: FaStar },
  { key: "box", label: "Box model", icon: FaCrown },
  { key: "display", label: "Display layout", icon: FaLaptopCode },
  { key: "colors", label: "Rang uyg‘unligi", icon: HiSparkles },
  { key: "teamwork", label: "Teamwork", icon: FaUsers },
];

const quiz = [
  {
    question: "Pair programmingda Driver nima qiladi?",
    options: ["Kod yozadi", "Faqat kuzatadi", "Faqat baholaydi"],
    correct: 0,
  },
  {
    question: "Navigatorning vazifasi nima?",
    options: [
      "Kod yozishni yo‘naltirish va tekshirish",
      "Kompyuterni o‘chirish",
      "Faqat CSS rang tanlash",
    ],
    correct: 0,
  },
  {
    question: "Pair programming nimani oshiradi?",
    options: [
      "Muloqot va teamwork",
      "Internet tezligini",
      "Monitor yorqinligini",
    ],
    correct: 0,
  },
  {
    question: "Code review nima?",
    options: [
      "Kod sifatini tahlil qilish",
      "Koddan rasm yasash",
      "Brauzerni yopish",
    ],
    correct: 0,
  },
  {
    question: "Juftlikda ishlashda eng muhim narsa?",
    options: ["Tushunarli muloqot", "Sherikni eshitmaslik", "Faqat tez yozish"],
    correct: 0,
  },
  {
    question: "Driver va Navigator qachon almashadi?",
    options: [
      "Belgilangan vaqtdan keyin",
      "Hech qachon",
      "Dars tugaganda faqat",
    ],
    correct: 0,
  },
];

export default function CssM2L6() {
  const [activeRole, setActiveRole] = useState("driver");
  const [round, setRound] = useState(1);
  const [minutes, setMinutes] = useState(8);
  const [review, setReview] = useState({
    html: 0,
    class: 0,
    box: 0,
    display: 0,
    colors: 0,
    teamwork: 0,
  });
  const [answers, setAnswers] = useState({});
  const [taskDone, setTaskDone] = useState({
    structure: true,
    colors: false,
    box: false,
    display: false,
    review: false,
  });

  const role = roles[activeRole];
  const RoleIcon = role.icon;

  const reviewScore = Object.values(review).reduce((a, b) => a + Number(b), 0);
  const taskScore = Object.values(taskDone).filter(Boolean).length;

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
        className="relative overflow-hidden rounded-[44px] border border-yellow-400/30 bg-gradient-to-br from-[#241706] via-[#0b1020] to-[#020617] p-6 shadow-2xl md:p-8"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-yellow-400/25 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-600/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300">
              <FaCrown />
              CSS • Module 2 • 6-DARS • GOLD LAB
            </div>

            <h2 className="mb-5 text-2xl font-black leading-tight text-white">
              Pair programming orqali premium landing yasaymiz
            </h2>

            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Bugun o‘tilgan CSS mavzularni takrorlaymiz: ranglar, box model,
              display, div/class, DevTools. O‘quvchilar juftlikda ishlaydi: biri
              kod yozadi, biri nazorat qiladi.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBadge
                icon={FaUsers}
                title="Pair"
                text="Driver + Navigator"
              />
              <HeroBadge
                icon={MdOutlineRateReview}
                title="Review"
                text="Code tahlil"
              />
              <HeroBadge icon={FaRocket} title="Project" text="Mini landing" />
            </div>
          </div>

          <GoldHero
            round={round}
            minutes={minutes}
            reviewScore={reviewScore}
            taskScore={taskScore}
          />
        </div>
      </motion.section>

      <PremiumSection
        icon={FaUserFriends}
        label="Pair programming"
        title="Pair programming nima?"
        color="text-yellow-300"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={FaKeyboard}
            title="1-kishi: Driver"
            text="Kod yozadi, lekin hamma qarorni yolg‘iz qabul qilmaydi."
          />
          <InfoCard
            icon={FaEye}
            title="2-kishi: Navigator"
            text="Kod yo‘nalishini aytadi, xatoni ko‘radi, savol beradi."
          />
          <InfoCard
            icon={FaSyncAlt}
            title="Role almashish"
            text="Har 5–10 daqiqada rollar almashadi. Ikkalasi ham o‘rganadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCrown}
        label="Role cards"
        title="Driver, Navigator va Reviewer rollari"
        color="text-amber-300"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(roles).map(([key, item]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveRole(key)}
              className={`cursor-pointer rounded-2xl px-5 py-3 font-black transition ${
                activeRole === key
                  ? "bg-yellow-400 text-slate-950"
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
              key={activeRole}
              initial={{ opacity: 0, x: -25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 25, scale: 0.96 }}
              className={`rounded-[32px] bg-gradient-to-br ${role.color} p-7`}
            >
              <RoleIcon className="mb-4 text-5xl text-white" />
              <h4 className="mb-3 text-4xl font-black text-white">
                {role.title}
              </h4>
              <p className="text-lg leading-8 text-white/90">{role.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
            <h4 className="mb-4 text-2xl font-black text-white">
              {role.title} vazifalari
            </h4>
            <div className="grid gap-3">
              {role.tasks.map((task) => (
                <div
                  key={task}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-slate-300"
                >
                  <FaCheckCircle className="text-yellow-300" />
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdTimer}
        label="Workshop timer"
        title="Juftlikda ishlash metodikasi"
        color="text-cyan-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-5">
              <h4 className="mb-4 text-2xl font-black text-white">
                Round: {round}
              </h4>

              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRound(item)}
                    className={`cursor-pointer rounded-2xl px-5 py-3 font-black ${
                      round === item
                        ? "bg-yellow-400 text-slate-950"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    Round {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-5">
              <h4 className="mb-4 text-2xl font-black text-white">
                Vaqt: {minutes} daqiqa
              </h4>

              <input
                type="range"
                min="3"
                max="15"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full cursor-pointer accent-yellow-400"
              />

              <p className="mt-4 text-slate-300">
                Tavsiya: 7–10 daqiqadan keyin Driver va Navigator rollari
                almashadi.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-yellow-400/20 bg-yellow-400/10 p-6">
            <h4 className="mb-5 text-3xl font-black text-white">
              Pair workflow
            </h4>

            <div className="space-y-3">
              {[
                "1. Vazifa o‘qiladi",
                "2. Driver kod yozadi",
                "3. Navigator yo‘naltiradi",
                "4. DevTools bilan tekshiriladi",
                "5. Rollar almashadi",
                "6. Reviewer feedback beradi",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 7 }}
                  className="rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  <span className="mr-2 font-black text-yellow-300">
                    {index + 1}
                  </span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaLaptopCode}
        label="VS Code Live Share"
        title="Live Share yoki navbat bilan ishlash"
        color="text-purple-300"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] border border-purple-400/20 bg-purple-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Agar Live Share bo‘lsa
            </h4>
            <div className="space-y-3">
              {[
                "VS Code’da Live Share extension o‘rnatiladi",
                "Driver session ochadi",
                "Navigator link orqali ulanadi",
                "Ikkalasi bir faylni ko‘radi",
                "Navigator comment va taklif beradi",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h4 className="mb-4 text-3xl font-black text-white">
              Agar Live Share bo‘lmasa
            </h4>
            <div className="space-y-3">
              {[
                "Bitta kompyuterda navbat bilan ishlanadi",
                "Driver klaviaturada yozadi",
                "Navigator yonida kuzatadi",
                "5–10 daqiqadan keyin joy almashiladi",
                "Oxirida code review qilinadi",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-950/60 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaRocket}
        label="Mini project"
        title="O‘rganilgan CSS xususiyatlar bo‘yicha kichik landing page"
        color="text-yellow-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <TaskToggle
              active={taskDone.structure}
              title="HTML structure"
              text="header, hero, cards va footer div orqali guruhlanadi"
              onClick={() =>
                setTaskDone({ ...taskDone, structure: !taskDone.structure })
              }
            />
            <TaskToggle
              active={taskDone.colors}
              title="Premium color palette"
              text="HEX/RGBA yoki gradient bilan rang uyg‘unligi beriladi"
              onClick={() =>
                setTaskDone({ ...taskDone, colors: !taskDone.colors })
              }
            />
            <TaskToggle
              active={taskDone.box}
              title="Box model"
              text="padding, margin, border-radius, border ishlatiladi"
              onClick={() => setTaskDone({ ...taskDone, box: !taskDone.box })}
            />
            <TaskToggle
              active={taskDone.display}
              title="Display layout"
              text="block, inline-block, none/hidden farqlari amalda ko‘riladi"
              onClick={() =>
                setTaskDone({ ...taskDone, display: !taskDone.display })
              }
            />
            <TaskToggle
              active={taskDone.review}
              title="Code review"
              text="Sherik kodni tekshiradi va feedback beradi"
              onClick={() =>
                setTaskDone({ ...taskDone, review: !taskDone.review })
              }
            />
          </div>

          <GoldLandingPreview taskDone={taskDone} />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={MdOutlineRateReview}
        label="Code review"
        title="Kod sifatini baholash paneli"
        color="text-amber-300"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {reviewItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="text-2xl text-yellow-300" />
                      <h4 className="font-black text-white">{item.label}</h4>
                    </div>
                    <span className="font-black text-yellow-300">
                      {review[item.key]}/10
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={review[item.key]}
                    onChange={(e) =>
                      setReview({
                        ...review,
                        [item.key]: Number(e.target.value),
                      })
                    }
                    className="w-full cursor-pointer accent-yellow-400"
                  />
                </div>
              );
            })}
          </div>

          <div className="rounded-[32px] bg-white p-6 text-slate-950">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-black text-yellow-600">
                  Review result
                </p>
                <h3 className="text-3xl font-black">Gold Score</h3>
              </div>
              <FaCrown className="text-5xl text-yellow-500" />
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-center text-white">
              <p className="text-slate-400">Umumiy baho</p>
              <div className="mt-2 text-7xl font-black text-yellow-300">
                {reviewScore}
              </div>
              <p className="mt-2 text-slate-400">/ 60</p>
            </div>

            <div className="mt-5 rounded-3xl bg-yellow-50 p-5">
              <h4 className="mb-2 font-black">Feedback formulasi:</h4>
              <p className="text-slate-600">
                “Menga yoqqan joyi... Yaxshilash kerak bo‘lgan joyi... Keyingi
                safar shuni sinab ko‘r...”
              </p>
            </div>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaComments}
        label="Networking"
        title="Pair programming networkingni qanday oshiradi?"
        color="text-cyan-300"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Gapirish"
            text="O‘quvchi kodni og‘zaki tushuntiradi."
          />
          <StepCard
            number="02"
            title="Tinglash"
            text="Sherik fikrini eshitishni o‘rganadi."
          />
          <StepCard
            number="03"
            title="Savol berish"
            text="Nega bunday yozdik? deb so‘raydi."
          />
          <StepCard
            number="04"
            title="Feedback"
            text="Tanqidni to‘g‘ri berish va qabul qilishni o‘rganadi."
          />
        </div>
      </PremiumSection>

      <PremiumSection
        icon={FaCode}
        label="Amaliy mashg‘ulot"
        title="Juftlikda elementga bezak berish"
        color="text-emerald-300"
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {[
              "Juftlik tanlang: Driver va Navigator",
              "Bitta card yoki hero section tanlang",
              "Driver HTML structure yozadi",
              "Navigator class nomlarini tekshiradi",
              "CSS’da rang, padding, border-radius, display qo‘llang",
              "DevTools orqali spacing va layoutni tekshiring",
              "Rollarni almashtiring va yana bitta section qiling",
              "Oxirida code review va taqdimot qiling",
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
            <p className="text-orange-300">&lt;div class="gold-card"&gt;</p>
            <p className="pl-5 text-cyan-300">
              &lt;h2&gt;Premium Card&lt;/h2&gt;
            </p>
            <p className="pl-5 text-slate-300">
              &lt;p&gt;Pair programming bilan yaratildi&lt;/p&gt;
            </p>
            <p className="pl-5 text-purple-300">
              &lt;button&gt;Start&lt;/button&gt;
            </p>
            <p className="text-orange-300">&lt;/div&gt;</p>
            <br />
            <p className="text-yellow-300">.gold-card {"{"}</p>
            <p className="pl-5 text-white">padding: 32px;</p>
            <p className="pl-5 text-white">border-radius: 28px;</p>
            <p className="pl-5 text-white">background: linear-gradient(...);</p>
            <p className="text-yellow-300">{"}"}</p>
          </div>
        </div>
      </PremiumSection>

      <motion.section
        variants={fadeUp}
        className="rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-cyan-500/10 p-6"
      >
        <SectionTitle
          icon={MdQuiz}
          label="Mini Game"
          title="Pair programming quiz"
          color="text-yellow-300"
        />

        <div className="mb-5 mt-6 flex items-center justify-between rounded-2xl bg-slate-950/60 p-4 text-white">
          <span>To‘g‘ri javoblar</span>
          <span className="flex items-center gap-2 font-black text-yellow-300">
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
                          ? "border-yellow-400 bg-yellow-400/20 text-yellow-300"
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

function GoldHero({ round, minutes, reviewScore, taskScore }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="rounded-[36px] border border-yellow-400/20 bg-white p-5 text-slate-950"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-yellow-600">Gold Workshop</p>
          <h3 className="text-3xl font-black">Pair Lab</h3>
        </div>
        <FaCrown className="text-5xl text-yellow-500" />
      </div>

      <div className="rounded-[30px] bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 p-6 text-white">
        <h4 className="text-4xl font-black">Round {round}</h4>
        <p className="mt-2 text-white/85">
          Driver + Navigator • {minutes} daqiqa
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
            <p className="text-sm opacity-80">Project tasks</p>
            <h5 className="text-3xl font-black">{taskScore}/5</h5>
          </div>
          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
            <p className="text-sm opacity-80">Review score</p>
            <h5 className="text-3xl font-black">{reviewScore}/60</h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GoldLandingPreview({ taskDone }) {
  return (
    <div className="rounded-[32px] bg-white p-5 text-slate-950">
      <div className="rounded-[30px] bg-gradient-to-br from-[#18181b] via-[#3f2f07] to-[#0f172a] p-6 text-white">
        <header className="mb-8 flex items-center justify-between">
          <strong className="text-xl">GoldTeam</strong>
          <nav className="hidden gap-4 text-sm text-white/70 md:flex">
            <span>Home</span>
            <span>Project</span>
            <span>Review</span>
          </nav>
        </header>

        <section className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-black text-yellow-300">
              Pair Programming Project
            </p>
            <h4 className="text-4xl font-black">Premium CSS Landing</h4>
            <p className="mt-3 text-white/75">
              Rang, box model, display va teamwork orqali qurildi.
            </p>
            <button className="mt-6 cursor-pointer rounded-2xl bg-yellow-400 px-5 py-3 font-black text-slate-950">
              View Project
            </button>
          </div>

          <div className="grid gap-3">
            {[
              ["Structure", taskDone.structure],
              ["Colors", taskDone.colors],
              ["Box model", taskDone.box],
              ["Display", taskDone.display],
              ["Review", taskDone.review],
            ].map(([label, done]) => (
              <div
                key={label}
                className={`rounded-2xl p-4 font-black ${
                  done
                    ? "bg-yellow-400 text-slate-950"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {done ? "✅" : "⬜"} {label}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function TaskToggle({ active, title, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full cursor-pointer rounded-3xl border p-5 text-left transition ${
        active
          ? "border-yellow-400 bg-yellow-400/15"
          : "border-white/10 bg-slate-950/70 hover:bg-white/10"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-black text-white">{title}</h4>
        {active ? (
          <FaCheckCircle className="text-yellow-300" />
        ) : (
          <FaStar className="text-slate-400" />
        )}
      </div>
      <p className="text-sm text-slate-300">{text}</p>
    </button>
  );
}

function StepCard({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
    >
      <span className="text-4xl font-black text-yellow-300/30">{number}</span>
      <h4 className="mb-2 mt-4 text-xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
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
      className="rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5"
    >
      <Icon className="mb-3 text-3xl text-yellow-300" />
      <h4 className="font-black text-white">{title}</h4>
      <p className="text-sm text-slate-400">{text}</p>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-yellow-400/10 bg-slate-950/70 p-5"
    >
      <Icon className="mb-4 text-4xl text-yellow-300" />
      <h4 className="mb-3 text-2xl font-black text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </motion.div>
  );
}
