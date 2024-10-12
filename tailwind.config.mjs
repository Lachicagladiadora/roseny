/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'obscure': '#1F1717',
			// 'obscure-dark': '#0c0a09',
			// 'obscure-light': '#292524',

			'blank': '#FCF5ED',
			// 'blank-dark': '#e7e5e4',
			// 'blank-light': '#ffffff',

			'first': '#CE5A67',
			// 'first-dark': '',
			// 'first-light': '',

			'second': '#F4BF96',
			// 'second-dark': '',
			// 'second-light': '',
		}
	},
	darkMode: ['selector'],
	plugins: [],
}
