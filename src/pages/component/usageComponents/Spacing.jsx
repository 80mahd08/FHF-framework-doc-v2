import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown from "./components/InnerDropDown";

function Spacing() {
	return (
		<>
			<DropDown dropDownHeadContent={"Spacing"} dropDownHeight={"2100px"}>
				<div>
					<InnerDropDown
						headerText={"Margins"}
						arrayOfClasses={[
							".mt-_ : Sets the top margin to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the margin size.)",
							".mr-_ : Sets the right margin to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the margin size.)",
							".mb-_ : Sets the bottom margin to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the margin size.)",
							".ml-_ : Sets the left margin to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the margin size.)",
						]}
					/>
					<InnerDropDown
						headerText={"Paddings"}
						arrayOfClasses={[
							".pt-_ : Sets the top padding to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the padding size.)",
							".pr-_ : Sets the right padding to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the padding size.)",
							".pb-_ : Sets the bottom padding to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the padding size.)",
							".pl-_ : Sets the left padding to a multiple of 0.5rem. (_ in class names means that you should set a number between 1 and 20 to define the padding size.)",
						]}
					/>
					<InnerDropDown
						headerText={"Responsive Margins"}
						arrayOfClasses={[
							".resp-m-_ : Responsive margin with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the margin size.)",
							".resp-mt-_ : Responsive top margin with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the margin size.)",
							".resp-mr-_ : Responsive right margin with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the margin size.)",
							".resp-mb-_ : Responsive bottom margin with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the margin size.)",
							".resp-ml-_ : Responsive left margin with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the margin size.)",
						]}
					/>
					<InnerDropDown
						headerText={"Responsive Paddings"}
						arrayOfClasses={[
							".resp-p-_ : Responsive padding with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the padding size.)",
							".resp-pt-_ : Responsive top padding with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the padding size.)",
							".resp-pr-_ : Responsive right padding with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the padding size.)",
							".resp-pb-_ : Responsive bottom padding with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the padding size.)",
							".resp-pl-_ : Responsive left padding with custom values based on breakpoints. (_ in class names means that you should set a number between 1 and 20 for the padding size.)",
						]}
					/>
				</div>
			</DropDown>
		</>
	);
}

export default Spacing;
