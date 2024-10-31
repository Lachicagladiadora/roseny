/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D7lyRi_1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D5dOfSwo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lcg-knowbud.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../chunks/post-1_ObjwP4By.mjs').then(n => n._),"../posts/post-10.md": () => import('../chunks/post-10_ClxCAasN.mjs').then(n => n._),"../posts/post-3.md": () => import('../chunks/post-3_7RZGea6r.mjs').then(n => n._),"../posts/post-4.md": () => import('../chunks/post-4_DdPZd3fp.mjs').then(n => n._),"../posts/post-5.md": () => import('../chunks/post-5_BZwasc43.mjs').then(n => n._),"../posts/post-6.md": () => import('../chunks/post-6_98iXgAu6.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((c) => c.frontmatter.tags).flat())];
  const pageTitle = "Tags";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6 items-center justify-center"> <h2 class="text-3xl text-center py-8 text-first dark:text-second">Tags</h2> <p>Selec a tag for show relation posts</p> ${tags.map((c) => renderTemplate`<a${addAttribute(`/tags/${c}/`, "href")} class="bg-violet-900 border-2 text-first-dark border-first-dark  dark:text-second dark:border-second px-2 py-1 rounded-md hover:text-second-light hover:bg-first-dark dark:hover:text-first-dark dark:hover:bg-second">${c}</a>`)} </div> ` })}`;
}, "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/tags/index.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
