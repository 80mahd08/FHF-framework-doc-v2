import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown from "./components/InnerDropDown";
import colors from "./colors.json";
import { toValidClassName } from "../Usage";

function Colors() {
	return (
		<>
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
								`_-${toValidClassName(oneKey)}-${key} : ${oneKey} color, like `,
								colors.colors[oneKey][key],
							]);
						});
						return (
							<InnerDropDown key={i} headerText={oneKey} arrayOfClasses={arr} />
						);
					})}
				</div>
			</DropDown>
		</>
	);
}

export default Colors;
