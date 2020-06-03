module.exports = {
	navLinks: [
		{
			name: "About",
			url: "about",
		},
		{
			name: "Experience",
			url: "experience",
		},
		{
			name: "Work",
			url: "projects",
		},
		{
			name: "Contact",
			url: "contact",
		},
	],

	srConfig: (delay = 150) => ({
		origin: "bottom",
		distance: "20px",
		duration: 300,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
		mobile: true,
		reset: false,
		useDelay: "always",
		viewFactor: 0.25,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
	}),
};
