/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			"nova": ["Nova Flat"],
			"montserrat-thin": ["Montserrat Alternates-100"],
			"montserrat-extralight": ["Montserrat Alternates"],
			"montserrat-light": ["Montserrat Alternates"],
			"montserrat-regular": ["Montserrat Alternates 400"],
			"montserrat-medium": ["Montserrat Alternates"],
			"montserrat-semibold": ["Montserrat Alternates"],
			"montserrat-bold": ["Montserrat Alternates"],
			"montserrat-extrabold": ["Montserrat Alternates"],
			"montserrat-black": ["Montserrat Alternates"],
			"montserrat-thin-italic": ["Montserrat Alternates"],
			"montserrat-extralight-italic": ["Montserrat Alternates"],
			"montserrat-light-italic": ["Montserrat Alternates"],
			"montserrat-regular-italic": ["Montserrat Alternates"],
			"montserrat-medium-italic": ["Montserrat Alternates"],
			"montserrat-semibold-italic": ["Montserrat Alternates"],
			"montserrat-bold-italic": ["Montserrat Alternates"],
			"montserrat-extrabold-italic": ["Montserrat Alternates"],
			"montserrat-black-italic": ["Montserrat Alternates"],
		},
		colors: {

			'obscure': '#202020',
			'obscure-dark': '#222',
			'obscure-light': '#464646',

			'blank': '#dadada',
			'blank-dark': '#cacaca',
			'blank-light': '#aaa',

			'first': '#202020',
			'first-dark': '#000000',
			'first-light': '#464646',

			'second': '#dadada',
			'second-dark': '#cacaca',
			'second-light': '#fffefa'

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
