import * as React from "react";
import { Trans } from "react-i18next";

interface IProps {
	className: string;
}

const Footer = ({ className }: IProps) => {
	return (
		<footer
			className={`z-20
			${className}
		`}
		>
			<div className="container">
				<div className="py-6 font-light">
					©{new Date().getFullYear()} Trazo Vivo.{" "}
					<Trans>Todos los derechos reservados</Trans>.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
