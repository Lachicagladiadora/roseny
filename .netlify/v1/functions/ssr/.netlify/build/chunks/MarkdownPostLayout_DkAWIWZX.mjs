import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, g as renderSlot } from './astro/server_DcQTzJrz.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { $ as $$BaseLayout } from './BaseLayout_BgZbV4kc.mjs';

function LeftArrow(props) {
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
          fillRule: "evenodd",
          d: "m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
        }
      )
    }
  );
}

function UpArrow(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m14.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "m11.043 10.457l1.414-1.414L8 4.586L3.543 9.043l1.414 1.414L8 7.414z"
          }
        )
      ]
    }
  );
}

const $$Astro = createAstro("https://lcg-knowbud.netlify.app");
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex flex-col items-center gap-10"> <header class="w-full flex flex-col text-justify gap-2"> <div class="w-full py-6 flex items-center justify-between gap-4"> <a href="/blog" class="p-2 flex gap-2 items-center rounded-lg font-bold text-first-dark hover:text-blank hover:bg-obscure-dark dark:text-second dark:hover:text-obscure-dark dark:hover:bg-second-dark" title="More blog posts"> ${renderComponent($$result2, "LeftArrow", LeftArrow, {})}More posts</a> </div> <p class="w-full ps-4 text-obscure/50 text-left dark:text-blank/50"><span class="text-neutral-500 italic">${frontmatter.pubDate.toString().slice(0, 10)}</span></p> <h1 class="text-4xl text-center font-bold text-first-dark dark:text-second-light">${frontmatter.title}</h1> <p class="py-8 italic text-center text-second-dark stroke-obscure-dark stroke-2 dark:text-first-light">"${frontmatter.description}"</p> <div class="flex flex-wrap gap-6 items-center justify-center"> ${frontmatter.tags.map((c) => renderTemplate`<a${addAttribute(`/tags/${c}/`, "href")} class="bg-violet-900 border-2 text-first-dark border-first-dark  dark:text-second dark:border-second px-2 py-1 rounded-md hover:text-second-light hover:bg-first-dark dark:hover:text-first-dark dark:hover:bg-second">${c}</a>`)} </div> </header> <article class="w-full relative"> ${renderSlot($$result2, $$slots["default"])} <p class="w-full py-6 text-obscure/50 text-right dark:text-blank/50">by <span class="text-neutral-500 italic">${frontmatter.author}</span></p> <div class="w-full py-10 flex items-center justify-between gap-4"> <a class="text-4xl p-2 rounded-full absolute right-1 bg-first text-blank-light hover:text-obscure-dark hover:bg-first-light dark:bg-second dark:text-obscure-dark dark:hover:text-blank-light dark:hover:bg-second-dark" href="#body-element" title="Go to top of post">${renderComponent($$result2, "UpArrow", UpArrow, {})}</a> <a href="/blog" class="p-2 flex gap-2 items-center rounded-lg font-bold text-first-dark hover:text-blank hover:bg-obscure-dark dark:text-second dark:hover:text-obscure-dark dark:hover:bg-second-dark" title="More blog posts"> ${renderComponent($$result2, "LeftArrow", LeftArrow, {})}More posts</a> </div> </article> </div> ` })}`;
}, "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
