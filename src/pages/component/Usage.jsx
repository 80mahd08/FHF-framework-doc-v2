import { RespHeading, mergeStyles, styles, useActive } from "fhf-react";
import Code from "./component/Code";
import { motion } from "framer-motion";
import Base from "./usageComponents/Base";
import Typography from "./usageComponents/Typography";
import Colors from "./usageComponents/Colors";
import Layout from "./usageComponents/Layout";
import FlexBox from "./usageComponents/FlexBox";
import Border from "./usageComponents/Border";
import Spacing from "./usageComponents/Spacing";
import Normalize from "./usageComponents/Normalize";
import Button from "./usageComponents/Button";
export default function Usage() {
	document.title = "FHF - Usage";

	return (
		<motion.div
			className="usage DocsContPart padding-35"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}>
			<div className="title">
				<RespHeading level={1}>Usage</RespHeading>
			</div>
			<div>
				<RespHeading level={2} id="getting-started">
					Getting Started
				</RespHeading>
				<p className="respP">
					To get started, you first need to include the CSS Framework stylesheet
					in your HTML file:
				</p>

				<Code long="xml">
					{'<link rel="stylesheet" href="fhf/dist/main.min.css">'}
				</Code>
				<p>or</p>
				<Code long="xml">
					{'<link rel="stylesheet" href="path/fhf/dist/main.min.css">'}
				</Code>
				<p>or</p>
				<Code>{"import 'fhf'"}</Code>
				<p>or</p>
				<Code>{"import 'fhf/dist/main.min.css'"}</Code>
				<p className="respP">
					Once you have included the stylesheet, you can start using the
					pre-designed CSS classes in your HTML elements.
				</p>
				<Base />
				<Typography />
				<Colors />
				<Layout />
				<FlexBox />
				<Border />
				<Spacing />
				<Normalize />
				<Button />
			</div>
		</motion.div>
	);
}
export function toValidClassName(name) {
	// Replace spaces, special characters, and parentheses with hyphens
	let className = name
		.replace(/\//g, "-")
		.replace(/_/g, "-")
		.replace(/\(/g, "-")
		.replace(/\)/g, "-")
		.replace(/\s+/g, "-");

	// Convert to lowercase
	className = className.toLowerCase();

	return className;
}
