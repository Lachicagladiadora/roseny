import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, a as addAttribute, d as renderHead, f as renderSlot, b as createAstro } from './astro/server_CA3yrJsu.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                          */

const BLOG_NAME = "Blogüi";

function GithubIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        }
      )
    }
  );
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full flex gap-2 items-center justify-center p-2 text-xs bg-obscure-dark text-blank-light dark:bg-blank-dark dark:text-obscure-dark md:text-sm"> <div class="flex gap-3 items-center justify-center"> <a href="https://github.com/Lachicagladiadora" target="_blank"> ${renderComponent($$result, "GithubIcon", GithubIcon, { "className": "h-5 w-5 text-blank-light dark:text-obscure-dark md:h-6 md:w-6 lg:h-7 lg:w-7" })} </a> </div> <p class="flex items-center gap-3 text-blank-light dark:text-obscure-dark">Lachicagladiadora</p> </footer>`;
}, "/home/el_descendiente_del_mal/dev/me/blog/src/components/Footer.astro", void 0);

function Sun(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "m494.2 221.9l-59.8-40.5l13.7-71c2.6-13.2-1.6-26.8-11.1-36.4c-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7l-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9l-70.8-13.7C98 60.4 84.5 64.5 75 74.1s-13.7 23.1-11.1 36.3l13.7 71l-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5l-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3s22.9 13.7 36.3 11.1l70.8-13.7l40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9l70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1s13.6-23.1 11.1-36.3l-13.7-71l59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5c-.1-13.6-6.7-26.1-17.9-33.7m-112.9 85.6l17.6 91.2l-91-17.6L256 458l-51.9-77l-90.9 17.6l17.6-91.2l-76.8-52l76.8-52l-17.6-91.2l91 17.6L256 53l51.9 76.9l91-17.6l-17.6 91.1l76.8 52zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104s104-46.7 104-104s-46.7-104-104-104m0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56"
        }
      )
    }
  );
}

function Moon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992zm5 1a2 2 0 0 0 2 2a2 2 0 0 0-2 2a2 2 0 0 0-2-2a2 2 0 0 0 2-2m2 7h2m-1-1v2"
        }
      )
    }
  );
}

function Close(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ jsx("path", { d: "m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
          }
        )
      ] })
    }
  );
}

function Hamburger(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx("path", { d: "m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
          }
        )
      ] })
    }
  );
}

const Menu = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "w-full py-2 px-1 border-0  border-obscure-dark text-obscure-dark bg-second-light z-10\n      dark:border-blank-light dark:text-blank-light dark:bg-obscure-light \n        md:rounded-b-2xl md:border-[2px] md:border-t-0\n      ",
      children: [
        /* @__PURE__ */ jsx("h3", { className: "py-6 text-lg font-bold text-center", children: "Menu" }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              className: "block py-4 px-2 text-center border-t-4 border-b-2 last:border-b-0 border-second \n        hover:bg-first/80 hover:text-blank-light\n        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second",
              children: "Home"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/about",
              className: "block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second \n        hover:bg-first/80 hover:text-blank-light\n        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second",
              children: "About"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/tags",
              className: "block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second \n        hover:bg-first/80 hover:text-blank-light\n        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second",
              children: "Tags"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/blog",
              className: "block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second \n        hover:bg-first/80 hover:text-blank-light\n        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second",
              children: "Blog"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/contact",
              className: "block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 last:rounded-b-xl border-second \n        hover:bg-first/80 hover:text-blank-light\n        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second",
              children: "Contact"
            }
          ) })
        ] })
      ]
    }
  );
};

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    const bodyElement = document.querySelector("#body-element");
    if (!bodyElement) return;
    bodyElement.classList.toggle("dark");
  }, [isDarkTheme]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center py-2 bg-obscure-dark dark:bg-blank-dark md:py-4", children: /* @__PURE__ */ jsxs("header", { className: "w-full max-w-[900px] px-4 flex items-center justify-between relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `h-6 w-6 text-2xl lg:3xl p-[2px] md:h-8 md:w-8 rounded-full flex items-center justify-center ${isOpenMenu ? "text-second-light dark:text-obscure-light hover:bg-first-dark dark:hover:bg-second" : "text-blank-light dark:text-obscure-dark hover:bg-first-light dark:hover:bg-second"}`,
          onClick: () => setIsOpenMenu((p) => !p),
          children: isOpenMenu ? /* @__PURE__ */ jsx(Close, {}) : /* @__PURE__ */ jsx(Hamburger, {})
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "flex-1 text-center text-[30px] font-bold text-blank-dark dark:text-obscure", children: BLOG_NAME }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `h-[36px] w-[36px] text-xl md:text-2xl lg:3xl p-[2px] rounded-full flex items-center justify-center transition text-blank-light dark:text-obscure-dark ${isDarkTheme ? "hover:bg-first-light hover:text-obscure-dark" : "hover:bg-second-dark hover:text-blank-light"}`,
          onClick: () => setIsDarkTheme((p) => !p),
          children: isDarkTheme ? /* @__PURE__ */ jsx(Moon, {}) : /* @__PURE__ */ jsx(Sun, {})
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-[900px] flex items-center justify-center relative", children: isOpenMenu && /* @__PURE__ */ jsx("div", { className: "w-[100vw] h-[100vh] absolute top-[0px] left-0  md:top-[0px] md:w-96 md:h-[600px] drop-shadow-md z-10", children: /* @__PURE__ */ jsx(Menu, {}) }) }) })
  ] });
};

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${BLOG_NAME}</title>${renderHead()}</head> <body id="body-element" class="w-full h-full min-h-[100vh] transition-colors bg-blank-light text-obscure flex flex-col  dark:bg-obscure-dark dark:text-blank-light"> ${renderComponent($$result, "Header", Header, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/el_descendiente_del_mal/dev/me/blog/src/components/Header", "client:component-export": "Header" })} <main class="w-full flex-1 mx-auto flex flex-col p-5 md:max-w-[900px]"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/el_descendiente_del_mal/dev/me/blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, BLOG_NAME as B, GithubIcon as G };
