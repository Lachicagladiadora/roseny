// export const BLOG_NAME = "Knowbud";

import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    name: "Diet Pixie",
    collaboration: false,
    coverImage: "/diet-pixie.png",
    urlProject: "https://diet-pixie.roseny.dev/",
    urlGitHub: "",
    about:
      "A web application that allows you to calculate your nutritional values ​​based on your physical activity level to help you achieve your goals. You can also access your history and view your progress.",
  },
  {
    name: "Workout Tracker",
    collaboration: true,
    coverImage: "/workout-tracker.png",
    urlProject: "https://pocket-budget.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Web application designed to log and track physical exercise in an organized way. Developed using ElVengador Dev's template and the ev-component-library, it stores data in IndexedDB to preserve workout history. It allows detailed tracking of exercises according to the followed routine, with the option to add new exercises to existing routines or create new ones. A versatile tool for those who train with multiple routines and want to maintain precise progress tracking.",
  },
  {
    name: "BitSip",
    collaboration: false,
    coverImage: "/bitsip.png",
    urlProject: "https://bitsip.roseny.dev/",
    urlGitHub: "https://github.com/Lachicagladiadora/bitsip",
    about:
      "Web application developed to simplify access to recipes for meals, desserts, and drinks. Two APIs were integrated to fetch data, along with a function to extract and render ingredients efficiently. Built with React Router for routing management, it follows Clean Architecture principles and includes unit tests to ensure stability. Users can choose between dishes and drinks, receive suggestions, and access complete recipes with all necessary details for preparation.",
  },
  {
    name: "Pocket Budget",
    collaboration: true,
    coverImage: "/pocket-budget.png",
    urlProject: "https://pocket-budget.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Web application developed to record and manage expenses in an organized way. Built with Astro, React, TypeScript, and the ev-component library, it stores data in IndexedDB to ensure persistence. It allows users to log expenses with descriptions and view a detailed history with dates, making it easier to track and analyze monthly spending.",
  },
  {
    name: "Card Quest",
    collaboration: true,
    coverImage: "/card-quest.png",
    urlProject: "https://card-quest.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Web application designed for creating and managing study flashcards easily and efficiently. Built with Astro, React, TypeScript, and the ev-component library, it stores data in localStorage to preserve user progress. It features dark mode, and each card includes a question and an answer, with the option to flip it when studying. A practical tool to enhance vocabulary learning and other subjects.",
  },
  {
    name: "ev-component-library",
    collaboration: true,
    coverImage: "/ev-component-library.png",
    urlProject:
      "https://ev-component-library.jimynicanor.com/?path=/docs/ev-component-library--docs",
    urlGitHub: "",
    about:
      "Reusable component library designed to optimize web interface creation. Developed with React, TypeScript, and TailwindCSS, it includes detailed documentation in Storybook for easy implementation. Each component features style variants and customization options, ensuring design consistency. Available elements include simple components such as buttons with two variants and five color variations, adaptable to different needs. A solution focused on efficiency and reusability to accelerate web application development.",
  },
  {
    name: "Cartago ecommerce",
    collaboration: true,
    coverImage: "/cartago-ecommerce.png",
    urlProject: "https://cartago.vercel.app/",
    urlGitHub: "https://github.com/DevCorvus/cartago",
    about:
      "Ecommerce platform created to demonstrate skills in more complex projects and learn how to organize large-scale projects. Built with Next.js and TailwindCSS for the frontend, this app manages products, orders, and roles: customers place orders, sellers manage inventory, and admins oversee categories and platform control. Although simplified compared to commercial solutions, the focus is on demonstrating skills in building a robust and scalable application, but on a smaller scale.",
  },
  {
    name: "Chuck Norris Jokes",
    collaboration: false,
    coverImage: "/chuck-norris-jokes.png",
    urlProject: "https://lachicagladiadora.github.io/chuck-norris-jokes/",
    urlGitHub: "https://github.com/Lachicagladiadora/chuck-norris-jokes",
    about:
      "Project developed to practice DOM manipulation, fetch, and promise handling in JavaScript. A request was made to the Chuck Norris API, and based on the response, elements in the interface were dynamically updated. Built exclusively with HTML, CSS, and JavaScript, the design was adapted to be responsive. In addition to showcasing technical skills, it provides a source of Chuck Norris jokes for fans.",
  },
  {
    name: "Social Media Dashboard",
    collaboration: false,
    coverImage: "/social-media-dashboard.jpg",
    urlProject:
      "https://lachicagladiadora.github.io/dashboard-project-html-css/",
    urlGitHub:
      "https://github.com/Lachicagladiadora/dashboard-project-html-css",
    about:
      "Project developed to improve skills in interface creation. Focused on implementing responsive design, dark mode, and CSS Grid, areas that initially posed challenges. Using only HTML, CSS, and a few lines of JavaScript for dark mode logic, a functional and adaptable interface was created. The result demonstrates the ability to apply key techniques in web design and development, overcoming initial challenges.",
  },
];
