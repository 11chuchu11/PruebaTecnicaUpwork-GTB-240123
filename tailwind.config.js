/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				title: ['24px','38.93px'],
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				sans: ['DM Sans', 'sans-serif'],
				baloo: ['Baloo Bhai 2', 'sans-serif'],
			},
			colors: {
				red100: '#FFD4D4',
				red200: '#F40101',
				red300: '#A1140B',
				green100: '#D5FFD4',
				green200: '#0D970A',
				blue100: '#367DFD',
				blue200: '#1A3D7D',
				gray100: '#D6D5D5',
				gray200: '#828282',
				gray300: '#777777',
				gray400: '#626262',
				black100: '#222222',
				black: '#000000',
				white: '#FFFFFF',
				white100: '#FCFDFF',
			},
		},
	},
	plugins: [],
}




