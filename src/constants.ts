import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    name: "Diet Pixie",
    collaboration: false,
    coverImage: "/diet-pixie.png",
    technologies: [
      "React",
      "Typescript",
      "Tailwind ",
      "Astro",
      "ev-component-library",
      "Playwright",
    ],
    urlProject: "https://diet-pixie.roseny.dev/",
    urlGitHub: "",
    about:
      "A web application that allows you to calculate your nutritional values ​​based on your physical activity level to help you achieve your goals. You can also access your history and view your progress.",
  },
  {
    name: "Workout Tracker",
    collaboration: true,
    coverImage: "/workout-tracker.png",
    technologies: [
      "React",
      "Typescript",
      "Tailwind ",
      "Astro",
      "ev-component-library",
    ],
    urlProject: "https://pocket-budget.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Do you need to track your exercise? Implemented with ev-component-library, it stores data in IndexedDB. It allows for detailed exercise tracking based on your routine.",
  },
  {
    name: "BitSip",
    collaboration: false,
    coverImage: "/bitsip.png",
    technologies: [
      "React",
      "Typescript",
      "Tailwind",
      "React Router Dom",
      "Vitest",
      "Cypress",
    ],
    urlProject: "https://bitsip.roseny.dev/",
    urlGitHub: "https://github.com/Lachicagladiadora/bitsip",
    about:
      "Don't know what to cook? Or Need recipes? Web application with integration of two APIs, along with a function to efficiently extract and render ingredients. Implemented with routes, following Clean Architecture, and including unit tests to avoid errors.",
  },
  {
    name: "Pocket Budget",
    collaboration: true,
    coverImage: "/pocket-budget.png",
    technologies: [
      "React",
      "Typescript",
      "Tailwind ",
      "Astro",
      "ev-component-library",
    ],
    urlProject: "https://pocket-budget.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Web application for recording and managing expenses. It allows users to record expenses with descriptions and view a detailed history with dates, making it easier to track and analyze monthly expenses.",
  },
  {
    name: "Card Quest",
    collaboration: true,
    coverImage: "/card-quest.png",
    technologies: [
      "React",
      "Typescript",
      "Tailwind ",
      "Astro",
      "ev-component-library",
    ],
    urlProject: "https://card-quest.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Flashcards that feature dark mode, voice recognition, and fast card flipping. Each card includes a question (front) and an answer (back). You can flip the card if you forget the answer while studying.",
  },
  {
    name: "ev-component-library",
    collaboration: true,
    coverImage: "/ev-component-library.png",
    technologies: ["React", "Typescript", "Tailwind ", "Storybook"],
    urlProject:
      "https://ev-component-library.jimynicanor.com/?path=/docs/ev-component-library--docs",
    urlGitHub: "",
    about:
      "A library of reusable components with a minimalist style. Developed with React, TypeScript, and TailwindCSS, it includes detailed Storybook documentation for easy implementation.",
  },
  {
    name: "Cartago ecommerce",
    collaboration: true,
    coverImage: "/cartago-ecommerce.png",
    technologies: [
      "React",
      "Typescript",
      "Nextjs",
      "Tailwind",
      "Prisma",
      "React Form",
      "Zustand",
      "Aws",
    ],
    urlProject: "https://cartago.vercel.app/",
    urlGitHub: "https://github.com/DevCorvus/cartago",
    about:
      "E-commerce platform designed to demonstrate skills in more complex projects and learn how to organize large-scale projects. Manage products, orders, and roles: customers place orders, sellers manage inventory, and administrators oversee categories and platform control.",
  },
  {
    name: "Chuck Norris Jokes",
    collaboration: false,
    coverImage: "/chuck-norris-jokes.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    urlProject: "https://lachicagladiadora.github.io/chuck-norris-jokes/",
    urlGitHub: "https://github.com/Lachicagladiadora/chuck-norris-jokes",
    about:
      "Project developed to practice DOM manipulation, promises, and styles. After requesting data, interface elements are dynamically updated. It also features responsive design. It also offers a Chuck Norris joke feed for fans.",
  },
  {
    name: "Social Media Dashboard",
    collaboration: false,
    coverImage: "/social-media-dashboard.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    urlProject:
      "https://lachicagladiadora.github.io/dashboard-project-html-css/",
    urlGitHub:
      "https://github.com/Lachicagladiadora/dashboard-project-html-css",
    about:
      "Project to improve interface creation skills. An interface featuring dark mode, responsive design, and well-structured HTML was implemented.",
  },
];
