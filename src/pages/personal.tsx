import { graphql, navigate } from "gatsby";
import React from "react";
import InnerBigContainer from "../components/layout/InnerBigContainer";
import Layout from "../components/layout/Layout";

import TrazoVivo from "../images/personal/TRAZOVIVO.png";
import Img1 from "../images/personal/1.jpg";
import Img2 from "../images/personal/2.jpg";
import Img3 from "../images/personal/3.jpg";
import Img4 from "../images/personal/4.jpg";
import Img5 from "../images/personal/5.jpg";
import Footer from "../components/layout/Footer";
import { useInView } from "react-intersection-observer";
import Button from "../components/shared/Button";
import { Trans } from "react-i18next";
import { SEO } from "../components/layout/SEO";

const Person = ({
	title,
	text,
	pic,
}: {
	title: string;
	text: string;
	pic: string;
}) => {
	const { ref: refFirst, inView: view } = useInView({ threshold: 0.3 });
	return (
		<div
			ref={refFirst}
			className={`text-center transition-all duration-1000 ease-in-out ${
				view ? "opacity-100" : "opacity-0 translate-y-16"
			}`}
		>
			<img src={pic} alt={title} className="w-48 mx-auto mb-8" />
			<p className="font-bold text-xl sm:text-2xl mb-0 sm:mb-2">{title}</p>
			<p className="font-light py-4 text-lg sm:text-xl mb-0 sm:mb-8 md:px-6">
				<Trans>{text}</Trans>
			</p>
		</div>
	);
};

const Personal = () => {
	const { ref: refFirst, inView: viewFirst } = useInView({ threshold: 0.3 });

	const persons = [
		{
			img: Img1,
			title: "Juan Carlos Cabadas",
			text: "juan",
		},
		{
			img: Img2,
			title: "Jonathan Saenz",
			text: "jon",
		},
		{
			img: Img3,
			title: "Gilberto Carrillo",
			text: "gil",
		},
		{
			img: Img4,
			title: "Cecile Terrier",
			text: "cecile",
		},
		{
			img: Img5,
			title: "Miguel Ángel García",
			text: "miguel",
		},
	];
	return (
		<Layout color="black">
			<InnerBigContainer>
				<div
					ref={refFirst}
					className={`flex flex-col sm:flex-row py-4 sm:py-20 transition-all duration-1000 ease-in-out ${
						viewFirst
							? "opacity-100"
							: "opacity-0 translate-x-24 sm:translate-x-72"
					}`}
				>
					<div className="sm:w-1/2">
						<img
							src={TrazoVivo}
							alt="Trazo Vivo"
							className="2xl:pr-48 lg:pr-36 sm:pr-20 py-4 sm:py-0 px-20 sm:px-0"
						/>
					</div>
					<div className="flex items-center sm:w-1/2 font-light text-xl sm:text-2xl mt-4 sm:mt-0">
						<div className="">
							<p className="mb-4 text-left">
								<Trans>pers1</Trans>
								<br className="hidden lg:block" />
								<Trans>pers2</Trans>
								<br className="hidden lg:block" />
								<Trans>pers3</Trans>
							</p>
							<p className="mb-4">
								<span className="font-semibold">
									<Trans>pers4</Trans>
								</span>
								<br className="hidden lg:block" />
								<Trans>pers5</Trans>
								<br className="hidden lg:block" />
								<Trans>pers6</Trans>
								<br className="hidden lg:block" />
								<Trans>pers7</Trans>
							</p>
							<p className="mb-4">
								<Trans>pers8</Trans>
								<br className="hidden lg:block" />
								<Trans>pers9</Trans>
								<br className="hidden lg:block" />
								<Trans>pers10</Trans>
								<br className="hidden lg:block" />
								<Trans>pers11</Trans>
							</p>
						</div>
					</div>
				</div>
				<div className="grid sm:grid-cols-2 gap-16 mt-8 sm:mt-16">
					{persons.map((person, i) => (
						<Person
							key={`${i}${person.text}`}
							title={person.title}
							text={person.text}
							pic={person.img}
						/>
					))}
				</div>
				<p className="mt-8 font-bold text-2xl md:text-4xl leading-[2rem]">
					<Trans>
						Creemos en una sociedad donde hay cabida para todas las emociones
					</Trans>
					.
				</p>
				<p className="text-tvpurple mt-8 text-lg sm:text-xl">
					Trazo Vivo.{" "}
					<span className="font-bold ">
						<Trans>Somos humanos</Trans>.
					</span>
				</p>
				<Button
					className="mt-8"
					text={"Contacto"}
					variant={"purple"}
					action={() => navigate("/contacto")}
				/>
			</InnerBigContainer>
			<Footer className={"bg-black text-white mt-16"} />
		</Layout>
	);
};

export default Personal;

export const Head = () => <SEO title="Personal" />;

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
