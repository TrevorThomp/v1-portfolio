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
	],

	socialLinks: [
		{
			name: "Github",
			url: "https://github.com/TrevorThomp",
		},
		{
			name: "Twitter",
			url: "https://twitter.com/ThompTrevor",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/trevorthomp/",
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
