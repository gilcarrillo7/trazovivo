import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useMemo,
	useState,
} from "react";

interface IProps {
	children: React.ReactNode;
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

	const value = useMemo(
		() => ({ menuOpen, setMenuOpen, hoverReel, setHoverReel }),
		[menuOpen, hoverReel],
	);

	return <Provider value={value}>{props.children}</Provider>;
};

export { AppContext, AppProvider };
