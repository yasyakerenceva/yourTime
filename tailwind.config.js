module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			"rock-salt": ["RockSalt", "sans-serif"],
		},
		screens: {
			"4k": "1921px",
			// => @media (min-width: 1921px) { ... }
		},
		extend: {
			colors: {
				primary: "#3b523f",
				secondary: "#537458",
			},
		},
	},
	plugins: [],
};
