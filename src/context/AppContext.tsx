import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";

interface IProps {
	children: boolean | React.ReactNode | React.ReactFragment | React.ReactPortal;
}

interface IContext {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	hoverReel: boolean;
	setHoverReel: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IContext>({
	menuOpen: false,
	setMenuOpen: () => {},
	hoverReel: false,
	setHoverReel: () => {},
});

const { Provider } = AppContext;

const AppProvider = (props: IProps) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [hoverReel, setHoverReel] = useState<boolean>(false);

	return (
		<Provider value={{ menuOpen, setMenuOpen, hoverReel, setHoverReel }}>
			{props.children}
		</Provider>
	);
};

export { AppContext, AppProvider };
