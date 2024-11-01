/* empty css                         */
import { a as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_D7lyRi_1.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_CL167nsi.mjs';

const html = "<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>";

				const frontmatter = {"title":"My Third Blog Post","layout":"../../layouts/MarkdownPostLayout.astro","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://images.pexels.com/photos/28178918/pexels-photo-28178918/free-photo-of-comida-madera-ligero-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","alt":"The Astro logo on a dark background with rainbow rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/posts/post-5.md";
				const url = "/posts/post-5";
				function rawContent() {
					return "\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
