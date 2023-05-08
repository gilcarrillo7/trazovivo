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
import { Link, navigate } from "gatsby";
import { useInView } from "react-intersection-observer";
import { Trans } from "react-i18next";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";

interface IProps {
	children: boolean | React.ReactFragment | React.ReactPortal | React.ReactNode;
	classVideo: string;
	video: string;
	url: string;
	showValores?: boolean;
	next?: string;
	share?: boolean;
}

const Personal = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	return (
		<Link to="/personal">
			<div
				ref={ref}
				className={`text-lg sm:text-xl mb-16 hover:underline transition-all duration-1000 ease-in-out ${
					inView ? "opacity-100" : "opacity-0 -translate-y-8"
				}`}
			>
				<p className="font-bold mb-6">
					<Trans>Personal</Trans>
				</p>
				<div className="w-full flex justify-center items-center bg-tvpink p-10 sm:p-7">
					<div className="rounded-full bg-tvpurple w-32 sm:w-20 h-32 sm:h-20"></div>
				</div>
				<p className="text-base sm:text-lg mt-4">
					<Trans>Conoce a las personas que conformamos Trazo Vivo</Trans>.
				</p>
			</div>
		</Link>
	);
};
const Proyectos = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	return (
		<Link to="/#projects">
			<div
				ref={ref}
				className={`text-lg sm:text-xl mb-16 hover:underline transition-all duration-1000 ease-in-out ${
					inView ? "opacity-100" : "opacity-0 -translate-y-8"
				}`}
			>
				<p className="font-bold mb-6">
					<Trans>Proyectos</Trans>
				</p>
				<div className="w-full flex justify-center items-center bg-tvpurple p-10 sm:p-7">
					<div className="triangle"></div>
				</div>
				<p className="text-base sm:text-lg mt-4">
					<Trans>Descubre como hemos ayudado a nuestros clientes</Trans>.
				</p>
			</div>
		</Link>
	);
};
const Valores = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	return (
		<Link to="/valores">
			<div
				ref={ref}
				className={`text-lg sm:text-xl mb-16 hover:underline transition-all duration-1000 ease-in-out ${
					inView ? "opacity-100" : "opacity-0 -translate-y-8"
				}`}
			>
				<p className="font-bold mb-6">
					<Trans>Valores</Trans>
				</p>
				<div className="w-full flex justify-center items-center bg-tvyellow p-14 sm:p-7">
					<svg
						className="scale-125 sm:scale-100"
						width="100"
						height="70"
						viewBox="0 0 100 70"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.25989 4.84002C8.25989 6.39002 6.99989 7.65002 5.44989 7.65002C3.89989 7.65002 2.63989 6.39002 2.63989 4.84002C2.63989 3.28002 3.89989 2.02002 5.44989 2.02002C6.99989 2.02002 8.25989 3.28002 8.25989 4.84002Z"
							fill="#D10058"
						/>
						<path
							d="M38.0199 4.84002C38.0199 6.39002 36.7599 7.65002 35.2099 7.65002C33.6599 7.65002 32.3999 6.39002 32.3999 4.84002C32.3999 3.28002 33.6599 2.02002 35.2099 2.02002C36.7699 2.02002 38.0199 3.28002 38.0199 4.84002Z"
							fill="#D10058"
						/>
						<path
							d="M67.7799 4.84002C67.7799 6.39002 66.5199 7.65002 64.9699 7.65002C63.4199 7.65002 62.1599 6.39002 62.1599 4.84002C62.1599 3.28002 63.4199 2.02002 64.9699 2.02002C66.5199 2.02002 67.7799 3.28002 67.7799 4.84002Z"
							fill="#D10058"
						/>
						<path
							d="M97.5499 4.84002C97.5499 6.39002 96.2899 7.65002 94.7399 7.65002C93.1899 7.65002 91.9299 6.39002 91.9299 4.84002C91.9299 3.28002 93.1899 2.02002 94.7399 2.02002C96.2899 2.02002 97.5499 3.28002 97.5499 4.84002Z"
							fill="#D10058"
						/>
						<path
							d="M8.25989 34.88C8.25989 36.43 6.99989 37.69 5.44989 37.69C3.89989 37.69 2.63989 36.43 2.63989 34.88C2.63989 33.33 3.89989 32.07 5.44989 32.07C6.99989 32.06 8.25989 33.32 8.25989 34.88Z"
							fill="#D10058"
						/>
						<path
							d="M38.0199 34.88C38.0199 36.43 36.7599 37.69 35.2099 37.69C33.6599 37.69 32.3999 36.43 32.3999 34.88C32.3999 33.33 33.6599 32.07 35.2099 32.07C36.7699 32.06 38.0199 33.32 38.0199 34.88Z"
							fill="#D10058"
						/>
						<path
							d="M67.7799 34.88C67.7799 36.43 66.5199 37.69 64.9699 37.69C63.4199 37.69 62.1599 36.43 62.1599 34.88C62.1599 33.33 63.4199 32.07 64.9699 32.07C66.5199 32.06 67.7799 33.32 67.7799 34.88Z"
							fill="#D10058"
						/>
						<path
							d="M97.5499 34.88C97.5499 36.43 96.2899 37.69 94.7399 37.69C93.1899 37.69 91.9299 36.43 91.9299 34.88C91.9299 33.33 93.1899 32.07 94.7399 32.07C96.2899 32.06 97.5499 33.32 97.5499 34.88Z"
							fill="#D10058"
						/>
						<path
							d="M8.25989 64.91C8.25989 66.47 6.99989 67.72 5.44989 67.72C3.89989 67.72 2.63989 66.47 2.63989 64.91C2.63989 63.36 3.89989 62.1 5.44989 62.1C6.99989 62.1 8.25989 63.36 8.25989 64.91Z"
							fill="#D10058"
						/>
						<path
							d="M38.0199 64.91C38.0199 66.47 36.7599 67.72 35.2099 67.72C33.6599 67.72 32.3999 66.47 32.3999 64.91C32.3999 63.36 33.6599 62.1 35.2099 62.1C36.7699 62.1 38.0199 63.36 38.0199 64.91Z"
							fill="#D10058"
						/>
						<path
							d="M67.7799 64.91C67.7799 66.47 66.5199 67.72 64.9699 67.72C63.4199 67.72 62.1599 66.47 62.1599 64.91C62.1599 63.36 63.4199 62.1 64.9699 62.1C66.5199 62.1 67.7799 63.36 67.7799 64.91Z"
							fill="#D10058"
						/>
						<path
							d="M97.5499 64.91C97.5499 66.47 96.2899 67.72 94.7399 67.72C93.1899 67.72 91.9299 66.47 91.9299 64.91C91.9299 63.36 93.1899 62.1 94.7399 62.1C96.2899 62.1 97.5499 63.36 97.5499 64.91Z"
							fill="#D10058"
						/>
					</svg>
				</div>
				<p className="text-base sm:text-lg mt-4">
					<Trans>Conoce los valores bajo los cuales nos inspiramos</Trans>.
				</p>
			</div>
		</Link>
	);
};

const LayoutValor = (props: IProps) => {
	const {
		classVideo,
		video,
		url,
		showValores = false,
		next,
		share = true,
	} = props;

	const [loaded, setLoaded] = useState(true);

	return (
		<>
			{!loaded && (
				<div className="min-h-screen min-w-screen flex justify-center items-center">
					<ColorRing
						visible={true}
						height="80"
						width="80"
						ariaLabel="blocks-loading"
						wrapperStyle={{}}
						wrapperClass="blocks-wrapper"
						colors={["#D10058", "#D10058", "#D10058", "#D10058", "#D10058"]}
					/>
				</div>
			)}
			<div className={`${loaded ? "" : "opacity-0"}`}>
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
									<TwitterShareButton url={url}>
										<Twitter />
									</TwitterShareButton>
									<FacebookShareButton url={url}>
										<Facebook />
									</FacebookShareButton>
									<LinkedinShareButton url={url}>
										<Linkedin className="scale-125" color="black" />
									</LinkedinShareButton>
									<WhatsappShareButton url={url}>
										<Whatsapp />
									</WhatsappShareButton>
									<EmailShareButton url={url}>
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
