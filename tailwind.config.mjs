/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			// "nova": ["Nova Flat"],
			"overpass-mono": ["Overpass Mono"],
			// "alegreya": ["Alegreya Sans"],
			"montserrat": ["Montserrat Alternates"],
		},
		colors: {

			'obscure': '#202020',
			'obscure-dark': '#222',
			'obscure-light': '#464646',

			'blank': '#D9D9D9',
			'blank-dark': '#9CA2C3',
			'blank-light': '#CFDCE7',

			'first': '#252238',
			// 'first-dark': '#000000',
			// 'first-light': '#464646',

			'second': '#CF9065',
			'second-dark': '#63815E',
			'second-light': '#C37376'

			// 'obscure': '#1D5D9B',
			// 'obscure-dark': '#0A1931',
			// 'obscure-light': '#0F67B1',

			// 'blank': '#FBEEAC',
			// 'blank-dark': '#F4F27E',
			// 'blank-light': '#FEFFD2',

			// 'first': '#75C2F6',
			// 'first-dark': '#3081D0',
			// 'first-light': '#77CDFF',

			// 'second': '#F4D160',
			// 'second-dark': '#FFCF4C',
			// 'second-light': '#FAE458'
		}
	},
	darkMode: ['class'],
	plugins: [],
}
