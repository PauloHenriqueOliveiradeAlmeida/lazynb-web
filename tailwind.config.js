/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			primary: '#545F71',
			secondary: 'rgba(21, 29, 72, 1)',
			shadow: '#121212E6',
			white: '#F1F1F1',
			whiteHighlight: '#EAEBF7',
			dark: '#121212',
			error: '#d80032',
			light_red: '#FFE2E5',
			red: '#FA5A7D',
			light_green: 'rgba(220, 252, 231, 1)',
			green: '#3CD856',
		},
	},
	plugins: [],
};
