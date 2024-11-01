/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7lyRi_1.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_BAPvIaSJ.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DMnD81T3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lcg-knowbud.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_CcQxXarl.mjs').then(n => n._),"./posts/post-10.md": () => import('../chunks/post-10_DkFVYCVT.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_C8-WYyVt.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_letMPoKK.mjs').then(n => n._),"./posts/post-5.md": () => import('../chunks/post-5_Dx4-pKlS.mjs').then(n => n._),"./posts/post-6.md": () => import('../chunks/post-6_C4dHz2z_.mjs').then(n => n._)}), () => "./posts/*.md");
  const post = allPosts[allPosts.length - 1];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="flex-1 flex flex-wrap gap-4 items-center justify-center my-4"> ${renderComponent($$result2, "BlogPost", $$BlogPost, { "urlPost": post.frontmatter.url ?? "/blog", "title": post.frontmatter.title, "author": post.frontmatter.author, "description": post.frontmatter.description, "date": post.frontmatter.pubDate.slice(0, 10), "coverImage": post.frontmatter.image.url })} </ul> ` })}`;
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
