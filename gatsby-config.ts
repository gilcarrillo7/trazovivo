import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `trazovivo`,
		siteUrl: `https://www.traovivo.com`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		`gatsby-plugin-smoothscroll`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locale`,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/tvlogo.svg",
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
				languages: [`en`, `es`],
				defaultLanguage: `es`,
				// if you are using Helmet, you must include siteUrl, and make sure you add http:https
				siteUrl: `https://www.trazovivo.com`,
				// if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
				trailingSlash: "always",
				// you can pass any i18next options
				i18nextOptions: {
					interpolation: {
						escapeValue: false, // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false,
				},
				pages: [],
			},
		},
	],
};

export default config;
