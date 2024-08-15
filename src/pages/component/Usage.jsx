import { RespHeading, mergeStyles, styles, useActive } from "fhf-react";
import Code from "./component/Code";
import { color, motion } from "framer-motion";
import DropDown from "./usageComponents/DropDown";
import colors from "./colors.json";
import InnerDropDown, {
	dropDownHeaderInsideOFBodyStyles,
} from "./usageComponents/InnerDropDown";
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

				<DropDown dropDownHeadContent={"Base"} dropDownHeight="2000px">
					<div>
						<InnerDropDown
							headerText={"Object Fit"}
							arrayOfClasses={[
								".object-contain: Object fits within the container with aspect ratio preserved.",
								".object-cover: Object fills the container while maintaining aspect ratio.",
								".object-fill: Object stretches to fill the container, ignoring aspect ratio.",
								".object-none: Object is displayed at its intrinsic size.",
								".object-scale-down: Object scales down to fit within the container.",
							]}
						/>

						<InnerDropDown
							headerText={"Positioning"}
							arrayOfClasses={[
								".tp-1 to .tp-20: Top positioning from 0.5rem to 10rem in increments of 0.5rem.",
								".rh-1 to .rh-20: Right positioning from 0.5rem to 10rem in increments of 0.5rem.",
								".bt-1 to .bt-20: Bottom positioning from 0.5rem to 10rem in increments of 0.5rem.",
								".lf-1 to .lf-20: Left positioning from 0.5rem to 10rem in increments of 0.5rem.",
							]}
						/>

						<InnerDropDown
							headerText={"Z-index"}
							arrayOfClasses={[
								".z-index-0 to .z-index-50: Z-index values from 0 to 50.",
								".z-index-auto: Automatically sets the z-index based on stacking context.",
							]}
						/>

						<InnerDropDown
							headerText={"Visibility"}
							arrayOfClasses={[
								".visible-xs: Visible on extra small screens (0px and up).",
								".hidden-xs: Hidden on extra small screens (0px and up), but it still occupies space.",
								".visible-sm: Visible on small screens (768px and up).",
								".hidden-sm: Hidden on small screens (768px and up), but it still occupies space.",
								".visible-md: Visible on medium screens (992px and up).",
								".hidden-md: Hidden on medium screens (992px and up), but it still occupies space.",
								".visible-lg: Visible on large screens (1200px and up).",
								".hidden-lg: Hidden on large screens (1200px and up), but it still occupies space.",
							]}
						/>

						<InnerDropDown
							headerText={"Overflow"}
							arrayOfClasses={[
								".overflow-auto: Automatically adds scrollbars when necessary.",
								".overflow-hidden: Clips the content if it overflows.",
								".overflow-visible: Content is not clipped and is visible outside the element.",
								".overflow-scroll: Always shows scrollbars.",
							]}
						/>

						<InnerDropDown
							headerText={"Opacity"}
							arrayOfClasses={[
								".opacity-0 to .opacity-100: Opacity levels from 0 to 100 in increments of 1.",
							]}
						/>

						<InnerDropDown
							headerText={"Cursor"}
							arrayOfClasses={[
								".cursor-pointer: Changes the cursor to a pointer (hand icon).",
								".cursor-default: Resets the cursor to the default arrow.",
								".cursor-not-allowed: Shows a 'not allowed' cursor (circle with a slash).",
								".cursor-wait: Shows a waiting cursor (spinning wheel or hourglass).",
							]}
						/>

						<InnerDropDown
							headerText={"Width and Height Utilities"}
							arrayOfClasses={[
								".w-1 to .w-100: Width percentage values from 1% to 100%.",
								".h-1 to .h-100: Height percentage values from 1% to 100%.",
								".w-1px to .w-1000px: Width in pixels from 1px to 1000px.",
								".h-1px to .h-1000px: Height in pixels from 1px to 1000px.",
							]}
						/>
					</div>
				</DropDown>
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
						_ mean that you should Use 'text' for text color, 'b' for border
						color, and 'bg' for background color.
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

				<DropDown dropDownHeadContent={"layout"} dropDownHeight={"200px"}>
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
						<InnerDropDown
							headerText={"grid styles"}
							arrayOfClasses={[
								".respGridFit-_: Creates a grid with auto-fit columns.(_ in class names means that you should set a number between 100 and 500 to define the grid width.)",
								".respGridFit-_: Creates a grid with auto-fit columns.(_ in class names means that you should set a number between 100 and 500 to define the grid width.)",
							]}
						/>
						<InnerDropDown
							headerText={"float styles"}
							arrayOfClasses={[
								".float-left: Floats an element to the left",
								".float-right: Floats an element to the right",
								".clear-fix: Ensures proper clearing of floats within a container.",
							]}
						/>
						<InnerDropDown
							headerText={"Positioning Utilities"}
							arrayOfClasses={[
								".position-relative: Sets position to relative.",
								".position-absolute: Sets position to absolute.",
								".position-fixed: Sets position to fixed.",
								".position-sticky: Sets position to sticky.",
							]}
						/>
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
						<RespHeading level={4} style={dropDownHeaderInsideOFBodyStyles}>
							Width and Height Styles
						</RespHeading>
						<div className="respPaddingLeft-20-30">
							<p className="respP">
								_ in class names means that you should set a number between 1
								and 100 (inclusive) for percentage units and between 1 and 1000
								for pixel units.
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
					</div>
				</DropDown>
				<DropDown dropDownHeadContent={"FlexBox"} dropDownHeight={"500px"}>
					<InnerDropDown
						headerText={"Flex direction"}
						arrayOfClasses={[
							".flex-row: Default flex direction (row).",
							".flex-row-reverse: Flex direction set to row-reverse.",
							".flex-column: Flex direction set to column.",
							".flex-column-reverse: Flex direction set to column-reverse.",
						]}
					/>
					<InnerDropDown
						headerText={"Justify content"}
						arrayOfClasses={[
							".justify-content-start: Justify content to the start.",
							".justify-content-end: Justify content to the end.",
							".justify-content-center: Justify content to the center.",
							".justify-content-between: Justify content evenly, with space between items.",
							".justify-content-around: Justify content evenly, with space around items.",
							".justify-content-evenly: Justify content with equal space around each item.",
						]}
					/>
					<InnerDropDown
						headerText={"Align items"}
						arrayOfClasses={[
							".align-items-start: Aligns flex items to the start.",
							".align-items-end: Aligns flex items to the end.",
							".align-items-center: Aligns flex items in the center.",
							".align-items-baseline: Aligns flex items according to the baseline.",
							".align-items-stretch: Stretch flex items to fill the container.",
						]}
					/>
					<InnerDropDown
						headerText={"Align self"}
						arrayOfClasses={[
							".align-self-auto: Default align self behavior.",
							".align-self-start: Aligns a flex item to the start.",
							".align-self-end: Aligns a flex item to the end.",
							".align-self-center: Aligns a flex item to the center.",
							".align-self-baseline: Aligns a flex item according to the baseline.",
							".align-self-stretch: Stretch a flex item to fill the container.",
						]}
					/>
					<InnerDropDown
						headerText={"Flex wrap"}
						arrayOfClasses={[
							".flex-nowrap: Flex items will not wrap.",
							".flex-wrap: Flex items will wrap to the next line.",
							".flex-wrap-reverse: Flex items will wrap to the next line in reverse order.",
						]}
					/>
					<InnerDropDown
						headerText={"Align content"}
						arrayOfClasses={[
							".align-content-start: Aligns the flex lines to the start.",
							".align-content-end: Aligns the flex lines to the end.",
							".align-content-center: Aligns the flex lines to the center.",
							".align-content-between: Aligns the flex lines with space between them.",
							".align-content-around: Aligns the flex lines with space around them.",
							".align-content-stretch: Stretches the flex lines to fill the container.",
						]}
					/>
				</DropDown>
				<DropDown dropDownHeadContent={"Border"} dropDownHeight={"500px"}>
					<InnerDropDown
						headerText={"Border style"}
						arrayOfClasses={[
							".b-solid-_: Solid border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-dashed-_: Dashed border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-dotted-_: Dotted border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-double-_: Double border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-groove-_: Groove border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-ridge-_: Ridge border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-inset-_: Inset border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-outset-_: Outset border with width _ (_ mean that you should set number between 0 and 10 (border color set to black by default , you can change it by using the classes below))",
							".b-none: No border",
						]}
					/>
					<RespHeading level={4} style={dropDownHeaderInsideOFBodyStyles}>
						border radius
					</RespHeading>
					<div>
						<p style={styles.respMarginLeft(20, 30)}>
							.rounded: Regular rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.extraRounded: Extra rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.megaRounded: Mega rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.superRounded: Super rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.ultraRounded: Ultra rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.extremeRounded: Extreme rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.redicalRounded: Radical rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.hyperRounded: Hyper rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.ultimateRounded: Ultimate rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.maxRounded: Maximum rounded border radius.
						</p>
						<p style={styles.respMarginLeft(20, 30)}>
							.beyondRounded: Beyond rounded border radius.
						</p>
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
