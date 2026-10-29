// Shared react-multi-carousel breakpoints.
export const carouselResponsive = (
	desktopItems = 1,
	{ desktopMin = 576, mobileMax = 576 } = {},
) => ({
	desktop: {
		breakpoint: { max: 3000, min: desktopMin },
		items: desktopItems,
		slidesToSlide: desktopItems,
	},
	mobile: {
		breakpoint: { max: mobileMax, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
});
