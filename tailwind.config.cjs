/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	safelist: [
		{
			pattern: /bg-.+/
		},
		'mocha',
		'macchiato',
		'frappe',
		'latte'
	],
	plugins: [
		require('@catppuccin/tailwindcss'),
		require('flowbite/plugin'),
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				ctp: {
					rosewater: '#dc8a78',
					flamingo: '#dd7878',
					pink: '#ea76cb',
					mauve: '#8839ef',
					red: '#d20f39',
					maroon: '#e64553',
					peach: '#fe640b',
					yellow: '#df8e1d',
					green: '#40a02b',
					teal: '#179299',
					sky: '#04a5e5',
					sapphire: '#209fb5',
					blue: '#1e66f5',
					lavender: '#7287fd',
					text: '#4c4f69',
					subtext1: '#5c5f77',
					subtext0: '#6c6f85',
					overlay2: '#7c7f93',
					overlay1: '#8c8fa1',
					overlay0: '#9ca0b0',
					surface2: '#acb0be',
					surface1: '#bcc0cc',
					surface0: '#ccd0da',
					base: '#eff1f5',
					mantle: '#e6e9ef',
					crust: '#dce0e8'
				},
				ctpf: {
					rosewater: '#f2d5cf',
					flamingo: '#eebebe',
					pink: '#f4b8e4',
					mauve: '#ca9ee6',
					red: '#e78284',
					maroon: '#ea999c',
					peach: '#ef9f76',
					yellow: '#e5c890',
					green: '#a6d189',
					teal: '#81c8be',
					sky: '#99d1db',
					sapphire: '#85c1dc',
					blue: '#8caaee',
					lavender: '#babbf1',
					text: '#c6d0f5',
					subtext1: '#b5bfe2',
					subtext0: '#a5adce',
					overlay2: '#949cbb',
					overlay1: '#838ba7',
					overlay0: '#737994',
					surface2: '#626880',
					surface1: '#51576d',
					surface0: '#414559',
					base: '#303446',
					mantle: '#292c3c',
					crust: '#232634',
				}

			}
		}
	}
};

module.exports = config; 
