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
				third: "#8da190",
				error: "#d16556",
			},
			padding: {
				"5px": "5px",
			},
			animation: {
				scaleIn: "scaleIn .35s ease-in-out",
			},
			keyframes: {
				scaleIn: {
					"0%": { opacity: 0, transform: "scale(0.9)" },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1, transform: "scale(1)" },
				},
			},
			// transitionProperty: {
			// 	spacing:
			// 		"transform, border-width, border, color, background-color",
			// },
		},
	},
	plugins: [],
};
