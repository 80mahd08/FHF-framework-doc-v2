import React from "react";
import DropDown from "./components/DropDown";

function Normalize() {
	return (
		<>
			<DropDown dropDownHeadContent={"Normalize CSS"} dropDownHeight={"200px"}>
				<div>
					<p>
						The Normalize CSS file resets and normalizes CSS styles across
						different browsers. It ensures a consistent baseline for elements,
						making it easier to build responsive and consistent designs without
						worrying about browser discrepancies.
					</p>
					<p>
						Key features include:
						<ul>
							<li>Setting box-sizing to border-box for all elements.</li>
							<li>Smooth scrolling behavior in all browsers.</li>
							<li>Consistent font sizing and line-height adjustments.</li>
							<li>
								Normalization of form elements like buttons, inputs, and
								textareas.
							</li>
							<li>
								Handling of specific HTML5 elements like{" "}
								<code>&lt;main&gt;</code> and <code>&lt;summary&gt;</code>.
							</li>
						</ul>
					</p>
					<p>
						This file is essential for any modern web project as it reduces
						browser-specific inconsistencies, allowing for a cleaner, more
						predictable CSS foundation.
					</p>
				</div>
			</DropDown>
		</>
	);
}

export default Normalize;
