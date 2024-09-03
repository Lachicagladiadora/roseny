/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_OUFvhD1P.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  console.log("This runs in your terminal, not the browser!");
  return renderTemplate`<!-- Below is your "component template." It's just HTML, but with
    some magic sprinkled in to help you build great templates. --><html data-astro-cid-j7pv25f6> ${maybeRenderHead()}<body data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Hello, World!</h1> </body></html>`;
}, "/home/el_descendiente_del_mal/dev/blog/src/pages/index.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
