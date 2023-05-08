/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "15px",
				sm: "1rem",
				lg: "2rem",
				xl: "3rem",
				"2xl": "4rem",
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				tvpink: "#D10058",
				tvpurple: "#5830A0",
				tvyellow: "#FFC80E",
			},
			flex: {
				2: "1 0 45%",
			},
		},
	},
	plugins: [],
};
