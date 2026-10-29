import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

type Variant = "white" | "whiteblack" | "purple" | "fillpurple";

interface IProps {
	text: string;
	variant: Variant;
	action?: () => void;
	disabled?: boolean;
	className?: string;
	type?: "button" | "submit" | "reset";
	mouseOver?: () => void;
	mouseLeave?: () => void;
}

const base =
	"w-full font-normal sm:w-60 border-solid border-2 text-xl p-2 py-3 sm:py-2";

const variants: Record<Variant, string> = {
	white:
		"bg-transparent hover:bg-white border-white text-white hover:text-tvpink",
	whiteblack:
		"bg-transparent hover:bg-white border-white text-white hover:text-black",
	purple:
		"bg-transparent hover:bg-tvpurple border-tvpurple text-tvpurple hover:text-white",
	fillpurple: "bg-tvpurple border-tvpurple text-white",
};

const Button = ({
	text,
	action,
	disabled,
	className = "",
	variant,
	type = "button",
	mouseOver,
	mouseLeave,
}: IProps) => (
	<button
		className={`${base} ${variants[variant]} ${className}`}
		onClick={action}
		type={type}
		disabled={disabled}
		onMouseEnter={mouseOver}
		onMouseLeave={mouseLeave}
	>
		<Trans>{text}</Trans>
	</button>
);

export default Button;
