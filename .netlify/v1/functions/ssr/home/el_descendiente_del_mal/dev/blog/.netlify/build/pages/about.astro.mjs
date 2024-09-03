/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, b as createAstro } from '../chunks/astro/server_CvsVr5mG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const skills = ["html", "css", "js", "react", "jest", "vitest", "astro", "tailwind"];
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>LCG-Blog</title>${renderHead()}</head> <body> <a href="/">Home</a> <a href="/about/">About</a> <h1>About</h1> <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p> <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p> <p>${skills.map((c) => renderTemplate`<strong${addAttribute(`${c === "astro" ? "text-purple-600" : "text-amber-400"}`, "class")}> ${c}, </strong>`)}</p> </body></html>`;
}, "/home/el_descendiente_del_mal/dev/blog/src/pages/about.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
