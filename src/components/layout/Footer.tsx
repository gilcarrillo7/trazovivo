import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

interface IProps {
	className?: string;
}

const Footer = ({ className = "" }: IProps) => {
	return (
		<footer className={`z-20 ${className}`}>
			<div className="container">
				<div className="py-6 font-light">
					©<span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
					Trazo Vivo. <Trans>Todos los derechos reservados</Trans>.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
