/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			primary: '#545F71',
			secondary: '#121212',
			shadow: '#121212E6',
			white: '#F1F1F1',
			dark: '#121212',
			error: '#d80032',
		},
	},
	plugins: [],
};
