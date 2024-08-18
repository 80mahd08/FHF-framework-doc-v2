import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown from "./components/InnerDropDown";

function Button() {
	return (
		<>
			<DropDown dropDownHeadContent={"Buttons"} dropDownHeight={"300px"}>
				<div>
					<InnerDropDown
						headerText={"Button Styles"}
						arrayOfClasses={[
							".btn: Basic button style with padding and pointer cursor.",
							".btn-primary: Button with a primary blue color.",
							".btn-secondary: Button with a secondary gray color.",
							".btn-success: Button with a success green color.",
							".btn-danger: Button with a danger red color.",
							".btn-warning: Button with a warning yellow color.",
							".btn-info: Button with an info light blue color.",
							".btn-light: Button with a light gray color.",
							".btn-dark: Button with a dark black color.",
						]}
					/>
				</div>
			</DropDown>
		</>
	);
}

export default Button;
