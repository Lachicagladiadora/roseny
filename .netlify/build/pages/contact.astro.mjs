/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderComponent, b as createAstro } from '../chunks/astro/server_CA3yrJsu.mjs';
import 'kleur/colors';
import { G as GithubIcon, $ as $$BaseLayout, B as BLOG_NAME } from '../chunks/BaseLayout_Duzgy3--.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

function LinkedinIcon(props) {
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
          d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        }
      )
    }
  );
}

const $$Astro = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const pageTitle = BLOG_NAME;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Blogüi-about</title>${renderHead()}</head> <body> ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` <div class="flex-1 flex flex-col gap-6 items-center justify-center text-obscure-dark dark:text-blank-light"> <h2 class="text-3xl text-center py-2 text-first-dark dark:text-second">Contact</h2> <p>I'd love to hear from you! If you enjoy my explanations and have suggestions for topics we haven't covered yet, feel free to reach out to me through any of the options below. Whether you want to connect because you liked my code or have questions, I'm here to share my knowledge!</p> <div class="w-full flex flex-col gap-4 items-center justify-center"> <a target="_blank" href="https://github.com/Lachicagladiadora" class="flex items-center justify-center gap-2 group/icon dark:hover:text-second hover:text-first-dark"> ${renderComponent($$result2, "GithubIcon", GithubIcon, { "className": "h-8 w-8 text-obscure-dark dark:text-blank-light icon dark:group-hover/icon:text-second group-hover/icon:text-first-dark" })} GitHub
</a> <a target="_blank" href="https://www.linkedin.com/in/dev-roseny-quintanilla/" class="flex items-center justify-center gap-2 group/icon dark:hover:text-second hover:text-first-dark"> ${renderComponent($$result2, "LinkedinIcon", LinkedinIcon, { "className": "h-8 w-8 text-obscure-dark dark:text-blank-light icon  dark:group-hover/icon:text-second group-hover/icon:text-first-dark" })} Linkedin
</a> </div> </div> ` })} </body></html>`;
}, "/home/el_descendiente_del_mal/dev/me/blog/src/pages/contact.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/blog/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
