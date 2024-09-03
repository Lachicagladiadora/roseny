/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_CvsVr5mG.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`${maybeRenderHead()}<body> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <h1>My Astro Site</h1> <h1>My Astro Learning Blog</h1> <p>This is where I will post about my journey learning Astro.</p> <ul> <li><a href="/posts/post-1/">Post 1</a></li> <li><a href="/posts/post-2/">Post 2</a></li> <li><a href="/posts/post-3/">Post 3</a></li> </ul> </body>`;
}, "/home/el_descendiente_del_mal/dev/blog/src/pages/blog.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/blog/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
