/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as createAstro } from '../chunks/astro/server_CA3yrJsu.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_57uX4rQU.mjs';
import { $ as $$BaseLayout, B as BLOG_NAME } from '../chunks/BaseLayout_Duzgy3--.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_DY8rF1do.mjs').then(n => n._),"./posts/post-10.md": () => import('../chunks/post-10_VKhO3VYy.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_BHo6nho-.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_CcvyO5yq.mjs').then(n => n._),"./posts/post-5.md": () => import('../chunks/post-5_BpldCZnG.mjs').then(n => n._),"./posts/post-6.md": () => import('../chunks/post-6_JRalnbGP.mjs').then(n => n._)}), () => "./posts/*.md");
  const pageTitle = BLOG_NAME;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` <h2 class="text-3xl text-center py-8 text-first dark:text-second">Blog</h2> <ul class="flex flex-wrap gap-4 items-center justify-center my-4"> ${allPosts.map((c) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "urlPost": c.url ?? "", "title": c.frontmatter.title, "author": c.frontmatter.author, "description": c.frontmatter.description, "date": c.frontmatter.pubDate.slice(0, 10), "coverImage": c.frontmatter.image.url })}`)} </ul> ` })} </div>`;
}, "/home/el_descendiente_del_mal/dev/me/blog/src/pages/blog.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/blog/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
