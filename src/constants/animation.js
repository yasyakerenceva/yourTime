export const ROUTE_VARIANTS = {
	initial: {
		x: "100vw",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
	},
	exit: {
		x: 0,
		opacity: 0,
	},
};

export const CARD_VARIANTS = {
	initial: {
		width: "100%",
		opacity: 1,
	},
	animate: {
		width: "40%",
		opacity: 1,
	},
	exit: { width: "100%", opacity: 1 },
};

export const OPACITY_VARIANTS = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

export const CHANGE_WIDTH_VARIANTS = {
	initial: { width: "0%", opacity: 0 },
	animate: { width: "60%", opacity: 1 },
	exit: { width: "0%", opacity: 0 },
};

export const LEFT_MOVE_VARIANTS = {
	initial: { x: "-100%" },
	animate: { x: 0 },
	exit: { x: "-100%" },
};

export const RIGHT_MOVE_VARIANTS = {
	initial: { x: "100%" },
	animate: { x: 0 },
	exit: { x: "100%" },
};

export const TRANSITION_ANIMATION = {
	duration: 0.3,
	type: "tween",
	ease: "easeIn",
};
