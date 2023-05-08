import * as React from "react";

interface IProps {
	className: string;
	color: string;
}

const Linkedin = ({ className, color }: IProps) => {
	const styleObj = {
		fill: `${color}`,
		transition: "all",
		transitionDuration: "1s",
		transitionTimingFunction: "ease-in-out",
	};
	return (
		<a href="https://www.linkedin.com/company/trazo-vivo/" target="_blank">
			<svg
				className={`${className} cursor-pointer`}
				width="29"
				height="30"
				viewBox="0 0 29 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_540_136)">
					<path
						d="M6.69593 10.25H0.825928V29.24H6.69593V10.25Z"
						style={styleObj}
					/>
					<path
						d="M3.73594 7.77C3.04008 7.77793 2.35758 7.57883 1.77513 7.198C1.19267 6.81717 0.736511 6.2718 0.464704 5.63117C0.192896 4.99054 0.117634 4.28357 0.248517 3.60009C0.3794 2.9166 0.710559 2.28744 1.19981 1.79255C1.68906 1.29766 2.31438 0.959367 2.99632 0.820659C3.67826 0.681951 4.38606 0.74909 5.02977 1.01354C5.67347 1.27799 6.22407 1.72781 6.61155 2.30586C6.99904 2.88391 7.20587 3.5641 7.20591 4.26001C7.20859 5.18482 6.84511 6.0731 6.19493 6.73078C5.54474 7.38847 4.66073 7.76208 3.73594 7.77Z"
						style={styleObj}
					/>
					<path
						d="M28.7259 29.24H22.8759V19.24C22.8759 16.51 21.8759 14.98 19.6759 14.98C17.3259 14.98 16.0959 16.57 16.0959 19.24V29.24H10.4559V10.24H16.0959V12.8C16.6962 11.8265 17.5389 11.0254 18.5415 10.475C19.5441 9.92461 20.6723 9.64379 21.8159 9.66C25.8159 9.66 28.7259 12.12 28.7259 17.21V29.21V29.24Z"
						style={styleObj}
					/>
				</g>
				<defs>
					<clipPath id="clip0_540_136">
						<rect
							width="28.47"
							height="28.48"
							fill={color}
							transform="translate(0.25592 0.76)"
						/>
					</clipPath>
				</defs>
			</svg>
		</a>
	);
};

export default Linkedin;
