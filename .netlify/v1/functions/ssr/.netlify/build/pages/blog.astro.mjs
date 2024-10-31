/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7lyRi_1.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_BAPvIaSJ.mjs';
import { B as BLOG_NAME } from '../chunks/constants_yUSyhBmQ.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D5dOfSwo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lcg-knowbud.netlify.app");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_CPDqsd8B.mjs').then(n => n._),"./posts/post-10.md": () => import('../chunks/post-10_ClxCAasN.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_7RZGea6r.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_DdPZd3fp.mjs').then(n => n._),"./posts/post-5.md": () => import('../chunks/post-5_BZwasc43.mjs').then(n => n._),"./posts/post-6.md": () => import('../chunks/post-6_98iXgAu6.mjs').then(n => n._)}), () => "./posts/*.md");
  const pageTitle = BLOG_NAME;
  return renderTemplate`<!-- <div> -->${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-3xl text-center py-8 text-first dark:text-second">Blog</h2> <ul class="flex-1 flex flex-wrap gap-4 items-center justify-center my-4"> ${allPosts.map((c) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "urlPost": c.url ?? "/blog", "title": c.frontmatter.title, "author": c.frontmatter.author, "description": c.frontmatter.description, "date": c.frontmatter.pubDate.slice(0, 10), "coverImage": c.frontmatter.image.url })}`)} </ul> ` })} <!-- </div> -->`;
}, "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/blog.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
