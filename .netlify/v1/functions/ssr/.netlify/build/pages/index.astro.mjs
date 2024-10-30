/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DcQTzJrz.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_9coRPA9x.mjs';
import { B as BLOG_NAME } from '../chunks/constants_yUSyhBmQ.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BgZbV4kc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lcg-knowbud.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = BLOG_NAME;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_BepPnRo7.mjs').then(n => n._),"./posts/post-10.md": () => import('../chunks/post-10_CqQeNlJb.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_Npf-MLcQ.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_BMeAj2ry.mjs').then(n => n._),"./posts/post-5.md": () => import('../chunks/post-5_hsZYII8Q.mjs').then(n => n._),"./posts/post-6.md": () => import('../chunks/post-6_D-21NlC4.mjs').then(n => n._)}), () => "./posts/*.md");
  const randomPost = Math.floor(Math.random() * allPosts.length);
  const posts = allPosts.slice(randomPost, randomPost > 2 || randomPost < allPosts.length - 3 ? randomPost + 2 : randomPost - 2);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl text-center py-8 text-first dark:text-second">Home</h1> <ul class="flex-1 flex flex-wrap gap-4 items-center justify-center my-4"> ${posts.map((c) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "urlPost": c.frontmatter.url ?? "/blog", "title": c.frontmatter.title, "author": c.frontmatter.author, "description": c.frontmatter.description, "date": c.frontmatter.pubDate.slice(0, 10), "coverImage": c.frontmatter.image.url })}`)} </ul> ` })}`;
}, "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/index.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
