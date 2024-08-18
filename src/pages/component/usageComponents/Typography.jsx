import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown from "./components/InnerDropDown";

function Typography() {
	return (
		<>
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
					<InnerDropDown
						headerText={"List Styles"}
						arrayOfClasses={[
							".list-style-none: Removes the list marker.",
							".list-style-disc: Default list marker type.",
							".list-style-circle: List marker type is a circle.",
							".list-style-square: List marker type is a square.",
							".list-style-decimal: List marker type is a decimal number.",
							".list-style-lower-alpha: List marker type is a lower-case alphabet.",
							".list-style-upper-alpha: List marker type is an upper-case alphabet.",
							".list-style-lower-roman: List marker type is a lower-case Roman numeral.",
							".list-style-upper-roman: List marker type is an upper-case Roman numeral.",
							".list-style-inherit: List marker type is inherited from the parent",
						]}
					/>
				</div>
			</DropDown>
		</>
	);
}

export default Typography;
