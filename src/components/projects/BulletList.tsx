import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

// Bold heading followed by a bulleted list. `title` and `items` are i18n keys
// (e.g. title="common.tasks").
const BulletList = ({
	title,
	items,
	className = "",
}: {
	title: string;
	items: string[];
	className?: string;
}) => (
	<div className={`mb-4 ${className}`}>
		<span className="font-bold">
			<Trans>{title}</Trans>
		</span>
		<ul className="list-disc pl-4">
			{items.map((item) => (
				<li key={item}>
					<Trans>{item}</Trans>
				</li>
			))}
		</ul>
	</div>
);

export default BulletList;
