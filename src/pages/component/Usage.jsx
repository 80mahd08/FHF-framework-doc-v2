import { RespHeading, mergeStyles, styles, useActive } from "fhf-react";
import Code from "./component/Code";
import { color, motion } from "framer-motion";
import DropDown from "./usageComponents/DropDown";
import colors from "./colors.json";
import InnerDropDown from "./usageComponents/InnerDropDown";
export default function Usage() {
	console.log(colors.colors);

	document.title = "FHF - Usage";
	const dropDownHeaderInsideOFBodyStyles = mergeStyles(
		styles.fontColor("rgb(88, 62, 85)")
	);
	const dropDownBodyInsideOFBodyStyles = mergeStyles(
		styles.respMarginLeft(20, 30)
	);
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
				<DropDown dropDownHeadContent={"typography"} dropDownHeight={"2100px"}>
					<div>
						<InnerDropDown
							headerText={"Responsive Font Sizes"}
							arrayOfClasses={[
								".resp-h1: Sets the font size of an h1 element to be responsive to the screen size.",
								".resp-h2: Sets the font size of an h2 element to be responsive to the screen size.",
								".resp-h3: Sets the font size of an h3 element to be responsive to the screen size.",
								".resp-h4: Sets the font size of an h4 element to be responsive to the screen size.",
								".resp-h5: Sets the font size of an h5 element to be responsive to the screen size.",
								".resp-h6: Sets the font size of an h6 element to be responsive to the screen size.",
								".resp-p: Sets the font size of a paragraph element to be responsive to the screen size.",
							]}
						/>
						<InnerDropDown
							headerText={"Text Horizontal Alignments"}
							arrayOfClasses={[
								".textH-center: Sets the text alignment to center.",
								".textH-left: Sets the text alignment to left.",
								".textH-right: Sets the text alignment to right.",
							]}
						/>
						<InnerDropDown
							headerText={"Text Vertical Alignments"}
							arrayOfClasses={[
								".textV-center: Sets the text vertical alignment to center.",
								".textV-auto: Sets the text vertical alignment to auto.",
								".textV-baseline: Sets the text vertical alignment to baseline.",
								".textV-bottom: Sets the text vertical alignment to bottom.",
								".textV-middle: Sets the text vertical alignment to middle.",
								".textV-sub: Sets the text vertical alignment to sub.",
								".textV-super: Sets the text vertical alignment to super.",
								".textV-text-bottom: Sets the text vertical alignment to text-bottom.",
								".textV-text-top: Sets the text vertical alignment to text-top.",
								".textV-top: Sets the text vertical alignment to top.",
							]}
						/>
						<InnerDropDown
							headerText={"Font Weights"}
							arrayOfClasses={[
								".fw-100: Sets the font weight to 100.",
								".fw-200: Sets the font weight to 200.",
								".fw-300: Sets the font weight to 300.",
								".fw-400: Sets the font weight to 400.",
								".fw-500: Sets the font weight to 500.",
								".fw-600: Sets the font weight to 600.",
								".fw-700: Sets the font weight to 700.",
								".fw-800: Sets the font weight to 800.",
								".fw-900: Sets the font weight to 900.",
							]}
						/>
						<InnerDropDown
							headerText={"Text Transformations"}
							arrayOfClasses={[
								".textT-none: Sets the text transformation to none.",
								".textT-capitalize: Sets the text transformation to capitalize.",
								".textT-uppercase: Sets the text transformation to uppercase.",
								".textT-lowercase: Sets the text transformation to lowercase.",
							]}
						/>
						<InnerDropDown
							headerText={"Text Decorations"}
							arrayOfClasses={[
								".textD-none: Sets the text decoration to none.",
								".textD-underline: Sets the text decoration to underline.",
								".textD-line-through: Sets the text decoration to line-through.",
								".textD-overline: Sets the text decoration to overline.",
							]}
						/>
						<InnerDropDown
							headerText={"Word Break"}
							arrayOfClasses={[
								".wb-normal: Normal word wrapping.",
								".wb-words: Word breaks at word boundaries.",
								".wb-all: Word breaks at any character.",
							]}
						/>
						<InnerDropDown
							headerText={"Text Indentation"}
							arrayOfClasses={[
								".whitespace-normal: Normal white-space handling.",
								".whitespace-nowrap: Prevents text from wrapping.",
								".whitespace-pre: Preserves white-space formatting.",
								".whitespace-pre-line: Preserves white-space but wraps text.",
								".whitespace-pre-wrap: Preserves white-space and wraps text.",
							]}
						/>
					</div>
				</DropDown>
				<DropDown dropDownHeadContent={"colors"} dropDownHeight={"500px"}>
					<p>
						_ mean one of those "text" for color, "b" for border color, "bg" for
						background color
					</p>
					<div>
						{Object.keys(colors.colors).map((oneKey, i) => {
							var arr = [];
							Object.keys(colors.colors[oneKey]).forEach((key) => {
								arr.push([
									`_-${toValidClassName(
										oneKey
									)}-${key} : ${oneKey} color, like `,
									colors.colors[oneKey][key],
								]);
							});
							return (
								<InnerDropDown
									key={i}
									headerText={oneKey}
									arrayOfClasses={arr}
								/>
							);
						})}
					</div>
				</DropDown>
				<DropDown
					dropDownHeadContent={"Border styles"}
					dropDownHeight={"500px"}>
					<div>
						<p className="respP">
							_ mean that you should set number between 0 and 10 (border color
							set to black by default , you can change it by using the classes
							below)
						</p>
						<InnerDropDown
							headerText={"Border style"}
							arrayOfClasses={[
								".b-solid-_: Solid border with width _",
								".b-dashed-_: Dashed border with width _",
								".b-dotted-_: Dotted border with width _",
								".b-double-_: Double border with width _",
								".b-groove-_: Groove border with width _",
								".b-ridge-_: Ridge border with width _",
								".b-inset-_: Inset border with width _",
								".b-outset-_: Outset border with width _",
								".b-none: No border",
								// Add any additional information here
							]}
						/>
					</div>
				</DropDown>

				<DropDown
					dropDownHeadContent={"Container Styles"}
					dropDownHeight={"200px"}>
					<div>
						<p className="respP">
							.container: Centers the element horizontally and add
							responsiveness to it and adds padding
						</p>
						<p className="respP">
							.flex-container: Displays elements in a flex layout with wrapping,
						</p>
						<p className="respPaddingLeft-20-30 respP">
							.flex-item: Sets flex properties for child items
						</p>
					</div>
				</DropDown>
				<DropDown dropDownHeadContent={"Grid Styles"} dropDownHeight={"300px"}>
					<div>
						<p className="respP">
							_ in class names means that you should set a number between 100
							and 500 to define the grid width.
						</p>
						<p
							style={mergeStyles(styles.respMarginLeft(20, 30))}
							className="respP">
							.respGridFill-_: Creates a grid with auto-fill columns.
						</p>
						<p
							style={mergeStyles(styles.respMarginLeft(20, 30))}
							className="respP">
							.respGridFit-_: Creates a grid with auto-fit columns.
						</p>
					</div>
				</DropDown>
				<DropDown
					dropDownHeadContent={"Float and Clear Styles"}
					dropDownHeight={"200px"}>
					<div>
						<p className="respP">.float-left: Floats an element to the left</p>
						<p className="respP">
							.float-right: Floats an element to the right
						</p>
						<p className="respP">
							.clear-fix: Ensures proper clearing of floats within a container.
						</p>
					</div>
				</DropDown>
				<DropDown
					dropDownHeadContent={"Visibility Styles"}
					dropDownHeight={"300px"}>
					<div>
						<InnerDropDown
							headerText={"Visible Classes"}
							arrayOfClasses={[
								".visible-xs: Makes the element visible on extra small screens (Below 768px).",
								".visible-sm: Makes the element visible on small screens (768px - 991px).",
								".visible-md: Makes the element visible on medium screens (992px - 1199px).",
								".visible-lg: Makes the element visible on large screens (1200px and above).",
							]}
						/>
						<InnerDropDown
							headerText={"Hidden Classes"}
							arrayOfClasses={[
								".hidden-xs: Hides the element on extra small screens (Below 768px).",
								".hidden-sm: Hides the element on small screens (768px - 991px).",
								".hidden-md: Hides the element on medium screens (992px - 1199px).",
								".hidden-lg: Hides the element on large screens (1200px and above).",
							]}
						/>
					</div>
				</DropDown>
				<DropDown
					dropDownHeadContent={"Width and Height Styles"}
					dropDownHeight={"400px"}>
					<div>
						<p className="respP">
							_ in class names means that you should set a number between 1 and
							100 (inclusive) for percentage units and between 1 and 1000 for
							pixel units.
						</p>
						<p
							className="respP"
							style={mergeStyles(styles.respMarginLeft(20, 30))}>
							.w-_: Sets the width to the specified percentage value.
						</p>
						<p
							className="respP"
							style={mergeStyles(styles.respMarginLeft(20, 30))}>
							.h-_: Sets the height to the specified percentage value.
						</p>
						<p
							className="respP"
							style={mergeStyles(styles.respMarginLeft(20, 30))}>
							.w-_px: Sets the width to the specified pixel value.
						</p>
						<p
							className="respP"
							style={mergeStyles(styles.respMarginLeft(20, 30))}>
							.h-_px: Sets the height to the specified pixel value.
						</p>
					</div>
				</DropDown>
				<DropDown
					dropDownHeadContent={"Button Styles"}
					dropDownHeight={"500px"}>
					<div>
						<p className="respP">.btn-success: Success button style.</p>
						<p className="respP">.btn-error: Error button style.</p>
						<p className="respP">.btn-warning: Warning button style.</p>
						<p className="respP">.btn-info: Info button style."</p>
					</div>
				</DropDown>
				<DropDown
					dropDownHeadContent={"Border Radius Styles"}
					dropDownHeight={"500px"}>
					<div>
						<p>.rounded: Regular rounded border radius.</p>
						<p>.extraRounded: Extra rounded border radius.</p>
						<p>.megaRounded: Mega rounded border radius.</p>
						<p>.superRounded: Super rounded border radius.</p>
						<p>.ultraRounded: Ultra rounded border radius.</p>
						<p>.extremeRounded: Extreme rounded border radius.</p>
						<p>.redicalRounded: Radical rounded border radius.</p>
						<p>.hyperRounded: Hyper rounded border radius.</p>
						<p>.ultimateRounded: Ultimate rounded border radius.</p>
						<p>.maxRounded: Maximum rounded border radius.</p>
						<p>.beyondRounded: Beyond rounded border radius.</p>
					</div>
				</DropDown>

				<DropDown
					dropDownHeadContent={"Image Effects"}
					dropDownHeight={"500px"}>
					<div>
						<p>.gs-image: Grayscale image effect.</p>
						<p>.blur-image: Blur image effect.</p>
					</div>
				</DropDown>
			</div>
		</motion.div>
	);
}
function toValidClassName(name) {
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
