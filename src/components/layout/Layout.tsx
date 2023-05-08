import * as React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

interface IProps {
	children: boolean | React.ReactFragment | React.ReactPortal | React.ReactNode;
	color: string;
	classNameHeader?: string;
	justLogo?: boolean;
}

const Layout = (props: IProps) => {
	const { color, classNameHeader, justLogo } = props;

	return (
		<>
			<Header color={color} className={classNameHeader} justLogo={justLogo} />
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					type: "spring",
					mass: 0.35,
					stiffness: 50,
					duration: 0.5,
				}}
				className="flex flex-col overflow-hidden"
			>
				{props.children}
			</motion.main>
		</>
	);
};

export default Layout;
