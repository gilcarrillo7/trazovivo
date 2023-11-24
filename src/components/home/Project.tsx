import { useInView } from "react-intersection-observer";
import { Link } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";

interface IProps {
	img: string;
	title: string;
	text: string;
	link: string;
	className: string;
}

const Project = ({ img, title, text, link, className }: IProps) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	return (
		<Link to={`/projects/${link}`}>
			<div
				ref={ref}
				className={`text-base mb-8 sm:mb-12 cursor-pointer ${className} transition-all duration-1000 delay-300 ease-in-out ${
					inView ? "opacity-100" : "opacity-0 translate-y-8"
				}`}
			>
				<img src={img} alt={title} className="w-full mb-4" />
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
