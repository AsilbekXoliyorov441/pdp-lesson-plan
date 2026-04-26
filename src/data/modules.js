const lessonPlans = {
  1: {
    1: {
      id: 1,
      moduleId: 1,
      title: "1-DARS",
      topic: "Tanishuv va Frontend dasturlash asoslari",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    2: {
      id: 2,
      moduleId: 1,
      title: "2-DARS",
      topic: "Sozlamalar va ishchi muhitni tayyorlash",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    3: {
      id: 3,
      moduleId: 1,
      title: "3-DARS",
      topic: "HTML ga kirish – Tushuncha va tarix",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    4: {
      id: 4,
      moduleId: 1,
      title: "4-DARS",
      topic: "HTML struktura va asosiy teglar",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    5: {
      id: 5,
      moduleId: 1,
      title: "5-DARS",
      topic: "HTML5 semantikasi va semantik elementlar",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    6: {
      id: 6,
      moduleId: 1,
      title: "6-DARS",
      topic: "Form taglari va jadvallar bilan ishlash",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    7: {
      id: 7,
      moduleId: 1,
      title: "7-DARS",
      topic: "ARIA va Accessibility asoslari",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    8: {
      id: 8,
      moduleId: 1,
      title: "8-DARS",
      topic: "Soft Skills – Muloqot ko‘nikmalari",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    9: {
      id: 9,
      moduleId: 1,
      title: "9-DARS",
      topic: "Figma bilan tanishish",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    10: {
      id: 10,
      moduleId: 1,
      title: "10-DARS",
      topic: "Mini loyiha: Landing sahifa strukturasi 1-qism",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    11: {
      id: 11,
      moduleId: 1,
      title: "11-DARS",
      topic: "Mini loyiha: Landing sahifa strukturasi 2-qism",
      level: "Beginner",
      duration: "90 daqiqa",
    },
    12: {
      id: 12,
      moduleId: 1,
      title: "12-DARS",
      topic: "Birinchi oyni yakunlash, takrorlash va mini test",
      level: "Beginner",
      duration: "90 daqiqa",
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
        title: `${lessonId}-DARS`,
        topic: "Mavzu keyin qo‘shiladi",
        level,
        duration: "90 daqiqa",
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
        description:
          "HTML taglar, structure, semantic elements, formalar, Figma va landing page asoslari.",
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
