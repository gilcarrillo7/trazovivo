import * as React from "react";
import ReactPlayer from "react-player/lazy";
import {
	EmailShareButton,
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	LinkedinShareButton,
} from "react-share";
import Facebook from "../icons/Facebook";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";
import Twitter from "../icons/Twitter";
import Whatsapp from "../icons/Whatsapp";
import Footer from "../layout/Footer";
import InnerBigContainer from "../layout/InnerBigContainer";
import Button from "../shared/Button";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import useReveal from "../../hooks/useReveal";

interface IProps {
	children: React.ReactNode;
	classVideo: string;
	video: string;
	url: string;
	showValores?: boolean;
	next?: string;
	share?: boolean;
}

interface IPromoProps {
	to: string;
	title: string;
	text: string;
	boxClass: string;
	children: React.ReactNode;
}

const PromoCard = ({ to, title, text, boxClass, children }: IPromoProps) => {
	const { ref, inView } = useReveal(0.5);
	return (
		<Link to={to}>
			<div
				ref={ref}
				className={`text-lg sm:text-xl mb-16 hover:underline transition-all duration-1000 ease-in-out ${
					inView ? "opacity-100" : "opacity-0 -translate-y-8"
				}`}
			>
				<p className="font-bold mb-6">
					<Trans>{title}</Trans>
				</p>
				<div className={`w-full flex justify-center items-center ${boxClass}`}>
					{children}
				</div>
				<p className="text-base sm:text-lg mt-4">
					<Trans>{text}</Trans>.
				</p>
			</div>
		</Link>
	);
};

const dotXs = [5.45, 35.21, 64.97, 94.74];
const dotYs = [4.84, 34.88, 64.91];

const Personal = () => (
	<PromoCard
		to="/personal"
		title="Personal"
		text="Conoce a las personas que conformamos Trazo Vivo"
		boxClass="bg-tvpink p-10 sm:p-7"
	>
		<div className="rounded-full bg-tvpurple w-32 sm:w-20 h-32 sm:h-20"></div>
	</PromoCard>
);

const Proyectos = () => (
	<PromoCard
		to="/#projects"
		title="Proyectos"
		text="Descubre como hemos ayudado a nuestros clientes"
		boxClass="bg-tvpurple p-10 sm:p-7"
	>
		<div className="triangle"></div>
	</PromoCard>
);

const Valores = () => (
	<PromoCard
		to="/valores"
		title="Valores"
		text="Conoce los valores bajo los cuales nos inspiramos"
		boxClass="bg-tvyellow p-14 sm:p-7"
	>
		<svg
			className="scale-125 sm:scale-100"
			width="100"
			height="70"
			viewBox="0 0 100 70"
			fill="none"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			{dotYs.flatMap((cy) =>
				dotXs.map((cx) => (
					<circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2.81} fill="#D10058" />
				)),
			)}
		</svg>
	</PromoCard>
);

const LayoutValor = (props: IProps) => {
	const {
		classVideo,
		video,
		url,
		showValores = false,
		next,
		share = true,
	} = props;

	const { navigate } = useI18next();

	return (
		<>
			<div>
				<div
					className={`sm:w-screen sm:pb-6 lg:pb-10 sm:pt-1 flex items-center ${classVideo}`}
				>
					<InnerBigContainer className="px-0">
						<div className="player-wrapper">
							<ReactPlayer
								width="100%"
								height="100%"
								controls
								playing
								url={`https://vimeo.com/${video}`}
							></ReactPlayer>
						</div>
					</InnerBigContainer>
				</div>
				<InnerBigContainer className="py-8 sm:py-12">
					<div className="flex flex-col sm:flex-row">
						<div className="w-full sm:w-3/5 md:w-4/5 md:pr-48 sm:pr-8">
							<div className="text-lg sm:text-xl xl:pr-36">
								{props.children}
							</div>
							{share && (
								<p className="font-light text-tvpurple text-lg sm:text-2xl mt-16">
									<Trans>Comparte</Trans>
								</p>
							)}
							{share && (
								<div className="flex justify-between items-center px-4 sm:px-0 mt-12 sm:w-72">
									<TwitterShareButton url={url} aria-label="Twitter">
										<Twitter />
									</TwitterShareButton>
									<FacebookShareButton url={url} aria-label="Facebook">
										<Facebook />
									</FacebookShareButton>
									<LinkedinShareButton url={url} aria-label="Linkedin">
										<Linkedin
											className="scale-125"
											color="black"
											link={false}
										/>
									</LinkedinShareButton>
									<WhatsappShareButton url={url} aria-label="Whatsapp">
										<Whatsapp />
									</WhatsappShareButton>
									<EmailShareButton url={url} aria-label="Email">
										<Mail />
									</EmailShareButton>
								</div>
							)}
							{next && (
								<Link
									className="flex font-light text-tvpurple text-xl sm:text-2xl mt-8"
									to={next}
								>
									<Trans>Siguiente</Trans>
								</Link>
							)}
							{!showValores && (
								<Link
									className="flex font-light text-xl sm:text-2xl mt-8"
									to="/valores"
								>
									<Trans>Ver Todos</Trans>
								</Link>
							)}
							<Button
								variant="purple"
								text="Contacto"
								className="mt-8"
								action={() => navigate("/contacto")}
							/>
						</div>
						<div className="w-full sm:w-2/5 md:w-1/5 mt-20 sm:mt-0">
							<Personal />
							<Proyectos />
							{showValores && <Valores />}
						</div>
					</div>
				</InnerBigContainer>
			</div>
			<Footer className="bg-black text-white" />
		</>
	);
};

export default LayoutValor;
