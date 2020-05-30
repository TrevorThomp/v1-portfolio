import { hex2rgba } from "../utils";

const theme = {
	colors: {
		darkGreen: "#61892F",
		lightGreen: "#86C232",
		fadedGreen: hex2rgba("#86C232", 0.4),
		black: "#000000",
		slateGray: "#414345",
		lightGray: "#6B6E70",
	},

	fonts: {},

	fontSizes: {
		xs: "12px",
		smish: "13px",
		sm: "14px",
		md: "16px",
		lg: "18px",
		xl: "20px",
		xxl: "22px",
		h1: "32px",
	},

	hamburgerStyles: {
		bmBurgerButton: {
			position: "relative",
			width: "36px",
			height: "30px",
		},
		bmBurgerBars: {
			background: "#86C232",
		},
		bmBurgerBarsHover: {
			background: "#a90000",
		},
		bmCrossButton: {
			height: "24px",
			width: "24px",
		},
		bmCross: {
			background: "#bdc3c7",
		},
		bmMenuWrap: {
			position: "fixed",
			top: "0",
			height: "100%",
		},
		bmMenu: {
			background: "#373a47",
			padding: "2.5em 1.5em 0",
			fontSize: "1.15em",
		},
		bmMorphShape: {
			fill: "#373a47",
		},
		bmItemList: {
			display: "flex",
			flexDirection: "column",
			color: "red",
			padding: "0.8em",
		},
		bmItem: {
			color: "#86C232",
			display: "inline-block",
			textDecoration: "none",
			outline: "none",
		},
		bmOverlay: {
			background: "rgba(0, 0, 0, 0.3)",
		},
	},

	borderRadius: "3px",
	transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
};

export default theme;
