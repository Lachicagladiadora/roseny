/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			"raleway": ["Raleway", "sans-serif"],
		},
		colors: {
			'obscure': '#252238',
			'blank': '#D9D9D9',
			'blank-dark': '#9CA2C3',
			'blank-light': '#CFDCE7',
			// 'first': '#252238',
			'second': '#CF9065',
			'second-dark': '#63815E',
			'second-light': '#C37376'
		}
	},
	darkMode: ['class'],
	plugins: [],
}
