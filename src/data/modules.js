const lessonPlans = {
  1: {
    1: {
      id: 1,
      moduleId: 1,
      title: "1-DARS",
      topic: "Tanishuv va Frontend dasturlash asoslari",
      level: "Beginner",
      duration: "90 daqiqa",
      description:
        "O‘quvchilar IT sohasi, Frontend dasturlash, Frontend va Backend farqi, web sahifalar qanday ishlashi va frontend dasturchi kasbi bilan tanishadi.",
      goals: [
        "IT sohasi haqida boshlang‘ich tasavvur hosil qilish",
        "Frontend dasturchi kimligini tushunish",
        "Frontend va Backend farqini hayotiy misollar bilan tushunish",
        "HTML, CSS, JavaScript nima vazifa bajarishini bilish",
        "Brauzer va web sahifa qanday ishlashini oddiy tilda tushunish",
      ],
      lessonFlow: [
        {
          title: "1. Tanishuv",
          time: "10 daqiqa",
          text: "O‘quvchilar bilan tanishish, ularning ism-sharifi, qiziqishlari va kursdan maqsadlarini aniqlash.",
        },
        {
          title: "2. IT nima?",
          time: "10 daqiqa",
          text: "IT hayotimizdagi texnologiyalar, saytlar, ilovalar, o‘yinlar va avtomatlashtirilgan tizimlar bilan bog‘liq soha ekanini tushuntirish.",
        },
        {
          title: "3. Frontend dasturchi kim?",
          time: "15 daqiqa",
          text: "Frontend dasturchi foydalanuvchi ko‘radigan qismni yaratadi: button, menu, card, login page, dashboard va boshqa UI elementlar.",
        },
        {
          title: "4. Frontend va Backend farqi",
          time: "15 daqiqa",
          text: "Restoran misolida tushuntirish: Frontend — mijoz ko‘radigan zal va menu, Backend — oshxona va buyurtmani qayta ishlovchi tizim.",
        },
        {
          title: "5. HTML, CSS, JavaScript kirish",
          time: "15 daqiqa",
          text: "HTML — structure, CSS — design, JavaScript — harakat va interaktivlik. Inson tanasi misolida: HTML skelet, CSS kiyim, JS miya.",
        },
        {
          title: "6. Brauzer qanday ishlaydi?",
          time: "10 daqiqa",
          text: "Brauzer HTML, CSS, JavaScript kodlarini o‘qib, foydalanuvchiga chiroyli web sahifa ko‘rinishida chiqaradi.",
        },
        {
          title: "7. Real loyihalar",
          time: "10 daqiqa",
          text: "YouTube, Amazon, Instagram kabi saytlarda frontend qismlarini ko‘rsatish: navbar, search, card, video, button, form.",
        },
        {
          title: "8. Typing practice",
          time: "5 daqiqa",
          text: "O‘quvchilarga tez va to‘g‘ri yozish muhimligini tushuntirish. typing.com, monkeytype.com yoki keybr.com saytlaridan foydalanish.",
        },
      ],
      interactive: {
        title: "Mini viktorina",
        questions: [
          {
            question: "Frontend nimani yaratadi?",
            answer: "Foydalanuvchi ko‘radigan web sahifa qismini.",
          },
          {
            question: "HTML nima vazifa bajaradi?",
            answer: "Sahifaning strukturasi va skeletini yaratadi.",
          },
          {
            question: "CSS nima uchun kerak?",
            answer: "Sahifaga dizayn, rang, joylashuv va chiroy beradi.",
          },
          {
            question: "JavaScript nima qiladi?",
            answer: "Sahifani interaktiv qiladi.",
          },
        ],
      },
      practice: [
        "O‘quvchilardan YouTube sahifasidagi frontend elementlarni topishni so‘rash",
        "Amazon yoki Instagram sahifasida button, card, image, inputlarni ajratish",
        "Frontend va Backendni hayotiy misol bilan tushuntirishni so‘rash",
        "Typing practice saytida 5 daqiqa mashq qilish",
      ],
      homework: [
        "Frontend dasturchi kimligi haqida 5 ta gap yozish",
        "HTML, CSS, JavaScript vazifasini alohida yozib kelish",
        "typing.com yoki monkeytype.com saytida 10 daqiqa mashq qilish",
        "O‘zingiz yoqtirgan 1 ta web saytni tanlab, undagi frontend elementlarni yozib kelish",
      ],
    },
  },
};

const createLessons = (moduleId, level = "Beginner") =>
  Array.from({ length: 12 }, (_, index) => {
    const lessonId = index + 1;

    return (
      lessonPlans[moduleId]?.[lessonId] || {
        id: lessonId,
        moduleId,
        title: `Dars ${lessonId}`,
        topic: "Mavzu keyin qo‘shiladi",
        level,
        duration: "90 daqiqa",
        description: "Bu dars kontenti keyin qo‘shiladi.",
        goals: [],
        lessonFlow: [],
        practice: [],
        homework: [],
      }
    );
  });

export const courseSections = [
  {
    id: "html",
    title: "HTML",
    subtitle: "Web sahifaning skeleti",
    description:
      "HTML orqali sahifa strukturasi, taglar, semantic layout va content bilan ishlash o‘rganiladi.",
    color: "from-orange-500 to-red-500",
    modules: [
      {
        id: 1,
        title: "Module 1",
        subtitle: "HTML Foundation",
        description: "HTML taglar, structure, semantic elements va formalar.",
        color: "from-orange-500 to-red-500",
        lessons: createLessons(1, "Beginner"),
      },
    ],
  },
  {
    id: "css",
    title: "CSS",
    subtitle: "Design va layout",
    description:
      "CSS orqali ranglar, box model, flexbox, grid, responsive va zamonaviy UI yasash o‘rganiladi.",
    color: "from-blue-500 to-cyan-400",
    modules: Array.from({ length: 5 }, (_, index) => {
      const moduleId = index + 2;

      return {
        id: moduleId,
        title: `Module ${moduleId}`,
        subtitle: "CSS Design System",
        description:
          "CSS selectorlar, layout, animation, responsive design va real card sectionlar.",
        color: "from-blue-500 to-cyan-400",
        lessons: createLessons(moduleId, "Beginner"),
      };
    }),
  },
  {
    id: "javascript",
    title: "JavaScript",
    subtitle: "Web sahifaga jon berish",
    description:
      "JavaScript orqali DOM, event, function, array, object va interactive loyihalar qilinadi.",
    color: "from-yellow-400 to-orange-500",
    modules: Array.from({ length: 4 }, (_, index) => {
      const moduleId = index + 7;

      return {
        id: moduleId,
        title: `Module ${moduleId}`,
        subtitle: "JavaScript Logic",
        description:
          "JS fundamentals, DOM, event, array methods, API va mini projects.",
        color: "from-yellow-400 to-orange-500",
        lessons: createLessons(moduleId, "Intermediate"),
      };
    }),
  },
  {
    id: "react",
    title: "React JS",
    subtitle: "Modern frontend framework",
    description:
      "React JS orqali component, props, state, hooks, routing va real frontend architecture o‘rganiladi.",
    color: "from-purple-500 to-pink-500",
    modules: [],
  },
];

export const modules = courseSections.flatMap((section) => section.modules);
