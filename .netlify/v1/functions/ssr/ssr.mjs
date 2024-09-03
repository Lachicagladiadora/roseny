
				import createSSRHandler from './home/el_descendiente_del_mal/dev/blog/.netlify/build/entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = {
					includedFiles: ['**/*'],
					name: 'Astro SSR',
					nodeBundler: 'none',
					generator: '@astrojs/netlify@5.5.1',
					path: '/*',
					preferStatic: true,
				};
			