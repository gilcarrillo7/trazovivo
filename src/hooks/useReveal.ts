import { useInView } from "react-intersection-observer";

// Reveal-on-scroll: fires once, so elements don't animate in/out on every scroll.
const useReveal = (threshold = 0.25) =>
	useInView({ threshold, triggerOnce: true });

export default useReveal;
