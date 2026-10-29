import * as React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import useReveal from "../../hooks/useReveal";

interface IProps {
	img: string;
	title: string;
	text: string;
	link: string;
}

const Project = ({ img, title, text, link }: IProps) => {
	const { ref, inView } = useReveal(0.5);
	return (
		<Link to={`/projects/${link}`}>
			<div
				ref={ref}
				className={`text-base mb-8 sm:mb-12 cursor-pointer transition-all duration-1000 delay-300 ease-in-out ${
					inView ? "opacity-100" : "opacity-0 translate-y-8"
				}`}
			>
				<img
					src={img}
					alt={title}
					loading="lazy"
					decoding="async"
					className="w-full mb-4"
				/>
				<p className="font-bold hover:underline text-lg">
					<Trans>{title}</Trans>
				</p>
				<p className="font-normal">
					<Trans>{text}</Trans>
				</p>
			</div>
		</Link>
	);
};

export default Project;
