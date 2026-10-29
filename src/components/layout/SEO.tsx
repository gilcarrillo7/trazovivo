import React from "react";

interface IProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}

const SITE = "https://www.trazovivo.com";

const imageType = (image: string) => {
	const ext = image.split("?")[0].split(".").pop()?.toLowerCase();
	if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
	if (ext === "gif") return "image/gif";
	if (ext === "webp") return "image/webp";
	return "image/png";
};

export const SEO = ({
	title = "Trazo Vivo",
	description = "Potenciamos organizaciones comprometidas con el impacto social. Comunicar es algo más que solamente hablar. La comunicación significativa involucra varias acciones a la vez, como saber escuchar, mostrar empatía y sobre todo, cercanía y comprensión.",
	image = "https://trazovivo.com/mailing/THUMB_REDES.jpg",
	url = "",
}: IProps) => {
	const fullUrl = `${SITE}${url}`;
	return (
		<>
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:secure_url" content={image} />
			<meta property="og:image:type" content={imageType(image)} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:url" content={fullUrl} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<title>{title}</title>
		</>
	);
};
