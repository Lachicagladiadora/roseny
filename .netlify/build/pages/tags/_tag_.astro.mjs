/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DcQTzJrz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BDXYFKHP.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_CMmcec7H.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lcg-knowbud.netlify.app");
const Astro = $$Astro;
const prerender = true;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../../chunks/post-1_u2Mh5FQ4.mjs').then(n => n._),"../posts/post-10.md": () => import('../../chunks/post-10_BXkmFrNt.mjs').then(n => n._),"../posts/post-3.md": () => import('../../chunks/post-3_yauhmY0L.mjs').then(n => n._),"../posts/post-4.md": () => import('../../chunks/post-4_BKdXOkos.mjs').then(n => n._),"../posts/post-5.md": () => import('../../chunks/post-5_C5T1MGbN.mjs').then(n => n._),"../posts/post-6.md": () => import('../../chunks/post-6_BJEuRhyD.mjs').then(n => n._)}), () => "../posts/*.md");
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts?.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-1 flex flex-col items-center justify-center gap-4"> <h2 class="text-3xl text-center py-8 text-first dark:text-second">Tags</h2> <p class="w-full flex items-center gap-2">Posts tagged with <span class="text-2xl font-bold text-first dark:text-second">${tag}</span></p> <div class="h-full w-full flex flex-col items-center justify-center"> ${!posts && renderTemplate`<p>Not posts found</p>`} </div> <ul class="flex flex-wrap gap-4 items-center justify-center my-4"> ${posts.length > 0 && posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "urlPost": post.url ?? "/blog/", "title": post.frontmatter.title, "author": post.frontmatter.author, "date": post.frontmatter.pubDate, "description": post.frontmatter.description, "coverImage": post.frontmatter.image.url, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/el_descendiente_del_mal/dev/me/blog/src/components/BlogPost.astro", "client:component-export": "default" })}`)} </ul> </div> ` })}`;
}, "/home/el_descendiente_del_mal/dev/me/blog/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
