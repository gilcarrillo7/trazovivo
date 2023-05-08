import React, {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	useContext,
} from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import { Trans, useTranslation } from "react-i18next";
import { graphql, navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { AppContext } from "../context/AppContext";

import Puntos from "../images/contacto/Puntos.svg";
import UpFlecha from "../images/contacto/btn_flecha_up.png";
import DownFlecha from "../images/contacto/btn_flecha_down.png";

import "react-phone-number-input/style.css";

const CloseButton = ({ onClick }: { onClick: () => void }) => (
	<button
		className={`absolute 2xl:mr-16 xl:mr-12 lg:mr-8 sm:mr-0 mr-2 right-0 top-2 sm:top-4 w-9 h-12 focus:outline-none bg-transparent transition duration-200 ease-in-out z-30 text-white`}
		onClick={onClick}
	>
		<span className="sr-only">Menu</span>
		<span
			aria-hidden="true"
			className={`block absolute h-1 w-7 bg-white transform transition duration-500 ease-in-out rotate-45`}
		></span>
		<span
			aria-hidden="true"
			className={`block absolute h-1 w-7 bg-white transform  transition duration-500 ease-in-out -rotate-45`}
		></span>
	</button>
);

const BotonSiguiente = ({
	text,
	action,
	type = "button",
}: {
	text: string;
	action: () => void;
	type?: "button" | "submit" | "reset";
}) => (
	<button
		onClick={action}
		type={type}
		className="border border-white rounded-lg p-1 mt-4 w-36 text-base hover:bg-white hover:text-black"
	>
		<Trans>{text}</Trans>
	</button>
);

const DivQuestion = (props: {
	children: boolean | React.ReactFragment | React.ReactPortal | React.ReactNode;
	curr?: boolean;
	prev?: boolean;
	next?: boolean;
}) => {
	const { curr = false, prev = false, next = false } = props;
	return (
		<div
			className={`${curr ? "!left-0 !top-1/2 !opacity-100" : ""} ${
				prev ? "!left-0 !-top-[150%] !opacity-100" : ""
			} ${
				next ? "!left-0 !top-[150%] !opacity-100" : ""
			} absolute -left-[200%] top-[150%] -translate-y-1/2 font-light opacity-0 transition-all duration-1000 ease-in-out -mt-16 sm:mt-0 w-full flex justify-center`}
		>
			<div className="flex flex-col items-center w-full sm:w-1/2 gap-2">
				{props.children}
			</div>
		</div>
	);
};

const Contacto = () => {
	const { i18n } = useTranslation("home");
	const { setMenuOpen } = useContext(AppContext);
	/*
	useEffect(() => {
		const lazyApp = import("firebase/firebase");

		Promise.all([lazyApp]).then(([firebase]) => {
			getFirebase(firebase).analytics().logEvent("Contacto Visitado");
		});
	}, []);*/
	const inputClass =
		"bg-transparent text-white !border-b !border-b-white !outline-none text-center w-4/5 md:w-1/2";
	const [currpregunta, setCurrpregunta] = useState(1);
	const [progress, setProgress] = useState(0);
	const [transiting, setTransiting] = useState(false);
	const [error, setError] = useState(true);
	const [errorMail, setErrorMail] = useState(false);
	const [focused, setFocused] = useState(false);

	const inputNombre = useRef(null);
	const inputMail = useRef(null);
	const inputTelefono = useRef(null);
	const inputCompania = useRef(null);

	const [formulario, handleFormulario] = useState({
		nombre: "",
		mail: "",
		telefono: "",
		compania: "",
		pregunta: "",
	});

	const [msgInicio, setMsgInicio] = useState(true);
	const [msgInicioTrans, setMsgInicioTrans] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		var str = e.target.value;

		handleFormulario({
			...formulario,
			[e.target.name]: e.target.value,
		});

		if (str.trim() === "") {
			setError(true);
			return;
		} else {
			setError(false);
		}
	};
	const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
		setError(false);
		handleFormulario({
			...formulario,
			[e.target.name]: e.target.value,
		});
	};
	const handleTelefono = (num: string) => {
		if (typeof num === "undefined") {
			handleFormulario({
				...formulario,
				["telefono"]: "",
			});
			setError(true);
			return;
		}

		handleFormulario({
			...formulario,
			["telefono"]: num,
		});

		if (num.trim() === "") {
			setError(true);
			return;
		} else {
			setError(false);
		}
	};
	const handleMail = (e: ChangeEvent<HTMLInputElement>) => {
		var str = e.target.value;
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		handleFormulario({
			...formulario,
			[e.target.name]: e.target.value,
		});

		if (str.trim() === "") {
			setError(true);
			return;
		}
		if (!re.test(String(str).toLowerCase())) {
			setErrorMail(true);
			return;
		}

		setError(false);
		setErrorMail(false);
	};

	const validateString = (str: string) => {
		if (str.trim() === "") {
			return;
		}
		setCurrpregunta(currpregunta + 1);
	};
	const validateMail = (str: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (str.trim() === "") {
			setError(true);
			return;
		}
		if (!re.test(String(str).toLowerCase())) {
			setErrorMail(true);
			return;
		}
		setError(false);
		setErrorMail(false);
		setCurrpregunta(currpregunta + 1);
	};

	const [serverState, setServerState] = useState<{
		submitting: boolean;
		status: boolean | null;
		msg: string;
	}>({
		submitting: false,
		status: null,
		msg: "",
	});
	const handleServerResponse = (ok: boolean, msg: string) => {
		setServerState({
			submitting: true,
			status: ok,
			msg: msg,
		});
	};
	const handleOnSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const form = event.target as unknown as HTMLFormElement;
		console.log(form);
		setServerState({
			submitting: true,
			status: null,
			msg: "",
		});

		axios({
			method: "post",
			url: "https://getform.io/f/36ef0838-2036-4d87-acd3-6b41d6a3ffce",
			data: new FormData(form),
		})
			.then((r) => {
				handleServerResponse(true, "OK!");
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error);
			});
	};

	useEffect(() => {
		setError(true);
		setErrorMail(false);
		setTransiting(true);
		setTimeout(function () {
			setTransiting(false);
		}, 1600);
	}, [currpregunta]);

	useEffect(() => {
		let percentage = 0;
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (formulario.nombre.trim() !== "") percentage += 20;
		if (
			formulario.mail.trim() !== "" &&
			re.test(String(formulario.mail.trim()).toLowerCase())
		)
			percentage += 20;
		if (formulario.telefono.trim() !== "") percentage += 20;
		if (formulario.compania.trim() !== "") percentage += 20;
		if (formulario.pregunta.trim() !== "") percentage += 20;

		setProgress(percentage);
	}, [formulario]);

	useEffect(() => {
		setTimeout(() => {
			setMsgInicioTrans(true);
			setTimeout(() => {
				setMsgInicio(false);
			}, 1000);
		}, 3000);
	}, []);

	return (
		<div className="w-screen h-screen fixed bg-black text-white overflow-hidden text-xl sm:text-2xl font-light">
			<Helmet>
				<title>Trazo Vivo</title>
			</Helmet>
			{msgInicio && (
				<div
					className={`fixed bg-black z-30 w-screen h-screen text-3xl sm:text-4xl transition-all duration-1000 ease-in-out ${
						msgInicioTrans ? "opacity-0" : "opacity-100"
					}`}
				>
					<div
						className={`font-normal container text-left absolute top-1/2 -translate-y-1/2 -mt-8 sm:mt-0`}
					>
						<p>
							<Trans>
								Inspirar a otra persona, es transmitirle una emoción
							</Trans>
							.
						</p>
					</div>
				</div>
			)}
			<div className="fixed relative container">
				<CloseButton
					onClick={() => {
						setMenuOpen(false);
						navigate(-1);
					}}
				/>
			</div>

			{serverState.status ? (
				<div className="fixed relative text-center w-full container">
					<div className="mt-16">
						<h1>
							<Trans>!Muchas gracias por iniciar conversación!</Trans>
						</h1>
						<p className="p-2 font-bold">
							<Trans>Pronto nos pondremos en contacto contigo.</Trans>
						</p>
						<p className="p-3">
							<Trans>Ten un excelente día.</Trans>
						</p>
					</div>
					<img className="m-auto mt-4" src={Puntos} />
				</div>
			) : (
				<>
					{currpregunta === 1 ? (
						<p className="absolute left-1/2 -translate-x-1/2 top-4 text-3xl">
							<Trans>¡Hola!</Trans>
						</p>
					) : null}
					<form className="w-full" onSubmit={handleOnSubmit}>
						<DivQuestion curr={currpregunta === 1} prev={currpregunta === 2}>
							<label htmlFor="nombre">
								<Trans>1. ¿Cuál es tu nombre?</Trans>
							</label>
							<input
								type="text"
								aria-label="NombreContacto"
								placeholder={
									i18n.language === "es"
										? "Escribe aquí tu respuesta"
										: "Write your answer here"
								}
								className={inputClass}
								ref={inputNombre}
								name="nombre"
								onChange={handleChange}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateString(target.value);
									}
								}}
							/>
							{!error && (
								<BotonSiguiente
									action={() => setCurrpregunta(2)}
									text="Aceptar"
								/>
							)}
						</DivQuestion>
						<DivQuestion
							curr={currpregunta === 2}
							prev={currpregunta === 3}
							next={currpregunta === 1}
						>
							<Trans>2. Escribe tu correo electrónico</Trans>
							<input
								className={inputClass}
								type="mail"
								aria-label="Mail"
								placeholder={
									i18n.language === "es"
										? "nombre@ejemplo.com"
										: "name@example.com"
								}
								ref={inputMail}
								name="mail"
								onChange={handleMail}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateMail(target.value);
									}
								}}
							/>
							{errorMail && (
								<Trans>
									<p className="text-xs text-red">
										<Trans>Formato de correo incorrecto</Trans>
									</p>
								</Trans>
							)}
							{!(error || errorMail) && (
								<BotonSiguiente
									action={() => setCurrpregunta(3)}
									text="Aceptar"
								/>
							)}
						</DivQuestion>
						<DivQuestion
							curr={currpregunta === 3}
							prev={currpregunta === 4}
							next={currpregunta === 2}
						>
							<label htmlFor="telefono">
								<Trans>3. Escribe tu teléfono a 10 dígitos</Trans>
							</label>
							<PhoneInput
								className={inputClass}
								ref={inputTelefono}
								aria-label="Telefono"
								placeholder="2222222222"
								defaultCountry={"MX"}
								name="telefono"
								onChange={handleTelefono}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e: KeyboardEvent) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateString(target.value);
									}
								}}
							/>
							{!error && (
								<BotonSiguiente
									action={() => setCurrpregunta(4)}
									text="Aceptar"
								/>
							)}
						</DivQuestion>
						<DivQuestion
							curr={currpregunta === 4}
							prev={currpregunta === 5}
							next={currpregunta === 3}
						>
							<label htmlFor="compania">
								<Trans>4. Nombre de la compañía</Trans>
							</label>
							<input
								className={inputClass}
								type="text"
								aria-label="Ayuda"
								placeholder={
									i18n.language === "es"
										? "Escribe aquí tu respuesta"
										: "Write your answer here"
								}
								ref={inputCompania}
								name="compania"
								onChange={handleChange}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateString(target.value);
									}
								}}
							/>
							{!error && (
								<BotonSiguiente
									text="Aceptar"
									action={() => setCurrpregunta(5)}
								/>
							)}
						</DivQuestion>
						<DivQuestion
							curr={currpregunta === 5}
							prev={currpregunta === 6}
							next={currpregunta === 4}
						>
							<label htmlFor="pregunta">
								<Trans>5. ¿Cómo podemos ayudarte?</Trans>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									aria-label="animacionvideo"
									name="pregunta"
									value="animacionvideo"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-white rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									<Trans>Animación y vídeo</Trans>
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									aria-label="branding"
									value="branding"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-white rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									<Trans>Branding</Trans>
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="campanasdecomunicacion"
									aria-label="campanasdecomunicacion"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-white rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									<Trans>Campañas de comunicación</Trans>
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="desarrolloweb"
									aria-label="desarrolloweb"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-white rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									<Trans>Desarrollo web</Trans>
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="estrategia"
									aria-label="estrategia"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-white rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									<Trans>Estrategia</Trans>
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="otros"
									aria-label="otros"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-white rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									<Trans>Otros</Trans>
								</div>
							</label>
							{progress === 100 && (
								<BotonSiguiente
									action={() => {}}
									text={serverState.submitting ? "Enviando" : "Enviar"}
									type="submit"
								/>
							)}
						</DivQuestion>
					</form>
					{!focused && (
						<div className="container flex absolute bottom-24 sm:bottom-16">
							<div className="flex flex-col w-44 mr-8 text-sm font-light">
								<p className="mb-1">
									{progress}% <Trans>completado</Trans>
								</p>
								{/** Progreso */}
								<div className="relative">
									<div className="border border-white rounded-lg h-2 z-0"></div>
									<div className="absolute left-0 top-0 w-full w-44">
										{progress === 0 && (
											<div className={`z-10 bg-white rounded-lg h-2 w-0`}></div>
										)}
										{progress === 20 && (
											<div
												className={`z-10 bg-white rounded-lg h-2 w-1/5`}
											></div>
										)}
										{progress === 40 && (
											<div
												className={`z-10 bg-white rounded-lg h-2 w-2/5`}
											></div>
										)}
										{progress === 60 && (
											<div
												className={`z-10 bg-white rounded-lg h-2 w-3/5`}
											></div>
										)}
										{progress === 80 && (
											<div
												className={`z-10 bg-white rounded-lg h-2 w-4/5`}
											></div>
										)}
										{progress === 100 && (
											<div
												className={`z-10 bg-white rounded-lg h-2 w-full`}
											></div>
										)}
									</div>
								</div>
							</div>
							{currpregunta < 5 && (
								<button
									className="bg-transparent border border-white w-8 h-8 flex items-center justify-center rounded-lg mr-1"
									onClick={() => {
										setCurrpregunta(currpregunta + 1);
									}}
									disabled={transiting}
								>
									<img src={DownFlecha} alt="Abajo" className="w-5 h-5" />
								</button>
							)}
							{currpregunta > 1 && (
								<button
									className="bg-transparent border border-white w-8 h-8 flex items-center justify-center rounded-lg"
									onClick={() => {
										setCurrpregunta(currpregunta - 1);
									}}
									disabled={transiting}
								>
									<img src={UpFlecha} alt="Arriba" className="w-5 h-5" />
								</button>
							)}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Contacto;

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
