import React from "react";
import { Trans } from "react-i18next";

interface IProps {
	text: string;
	variant: string;
	action?: () => void;
	disabled?: boolean;
	className?: string;
	type?: "button" | "submit" | "reset";
	mouseOver?: () => void;
	mouseLeave?: () => void;
}

const Button = ({
	text,
	action,
	disabled,
	className,
	variant,
	type,
	mouseOver,
	mouseLeave,
}: IProps) => {
	return (
		<>
			{variant === "white" && (
				<button
					className={`w-full font-normal sm:w-60 bg-transparent hover:bg-white border-solid border-2 border-white text-xl p-2 py-3 sm:py-2 text-white hover:text-tvpink ${
						className ? className : ""
					}`}
					onClick={action}
					type={type ? type : "button"}
					disabled={disabled}
					onMouseEnter={mouseOver}
					onMouseLeave={mouseLeave}
				>
					<Trans>{text}</Trans>
				</button>
			)}
			{variant === "whiteblack" && (
				<button
					className={`w-full font-normal sm:w-60 bg-transparent hover:bg-white border-solid border-2 border-white text-xl p-2 py-3 sm:py-2 text-white hover:text-black ${
						className ? className : ""
					}`}
					onClick={action}
					type={type ? type : "button"}
					disabled={disabled}
				>
					<Trans>{text}</Trans>
				</button>
			)}
			{variant === "purple" && (
				<button
					className={`w-full font-normal sm:w-60 bg-transparent hover:bg-tvpurple border-solid border-2 border-tvpurple text-xl p-2 py-3 sm:py-2 text-tvpurple hover:text-white ${
						className ? className : ""
					}`}
					onClick={action}
					type={type ? type : "button"}
					disabled={disabled}
				>
					<Trans>{text}</Trans>
				</button>
			)}
			{variant === "fillpurple" && (
				<button
					className={`w-full font-normal sm:w-60 bg-tvpurple border-solid border-2 border-tvpurple text-xl p-2 py-3 sm:py-2 text-white ${
						className ? className : ""
					}`}
					onClick={action}
					type={type ? type : "button"}
					disabled={disabled}
				>
					<Trans>{text}</Trans>
				</button>
			)}
		</>
	);
};

export default Button;
