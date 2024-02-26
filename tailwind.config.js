module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			"rock-salt": ["RockSalt", "sans-serif"],
		},
		fontSize: {
			"40px": "40px",
			"24px": "24px",
			"20px": "20px",
			"16px": "16px",
		},
		extend: {
			colors: {
				primary: "#3b523f",
				secondary: "#537458",
				error: "#d16556",
			},
			padding: {
				"5px": "5px",
			},
		},
	},
	plugins: [],
};
