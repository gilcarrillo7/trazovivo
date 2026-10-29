// Full class names (not interpolated) so Tailwind keeps them in production builds.
export type LayoutColor = "white" | "black";

export const textColor: Record<LayoutColor, string> = {
	white: "text-white",
	black: "text-black",
};

export const bgColor: Record<LayoutColor, string> = {
	white: "bg-white",
	black: "bg-black",
};
