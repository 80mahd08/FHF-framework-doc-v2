import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown from "./components/InnerDropDown";

function Layout() {
	return (
		<>
			<DropDown dropDownHeadContent={"layout"} dropDownHeight={"200px"}>
				<div>
					<p className="respP">
						.container: Centers the element horizontally and adds responsiveness
						to it and adds padding
					</p>

					<InnerDropDown
						headerText={"Grid Styles"}
						arrayOfClasses={[
							".respGridFill-_: Creates a grid with auto-fill columns. (_ in class names means that you should set a number between 100 and 500 to define the grid width.)",
							".respGridFit-_: Creates a grid with auto-fit columns. (_ in class names means that you should set a number between 100 and 500 to define the grid width.)",
						]}
					/>

					<InnerDropDown
						headerText={"Float Styles"}
						arrayOfClasses={[
							".float-left: Floats an element to the left",
							".float-right: Floats an element to the right",
							".clear-fix: Ensures proper clearing of floats within a container.",
						]}
					/>

					<InnerDropDown
						headerText={"Positioning Utilities"}
						arrayOfClasses={[
							".p-static: Sets position to static.",
							".p-relative: Sets position to relative.",
							".p-absolute: Sets position to absolute.",
							".p-fixed: Sets position to fixed.",
							".p-sticky: Sets position to sticky.",
							".p-relative-top: Positions element at the top relative to its normal position.",
							".p-relative-bottom: Positions element at the bottom relative to its normal position.",
							".p-relative-left: Positions element at the left relative to its normal position.",
							".p-relative-right: Positions element at the right relative to its normal position.",
							".p-relative-center: Centers the element both horizontally and vertically using relative positioning.",
						]}
					/>

					<InnerDropDown
						headerText={"Display Utilities"}
						arrayOfClasses={[
							".d-block: Sets display to block.",
							".d-inline-block: Sets display to inline-block.",
							".d-inline: Sets display to inline.",
							".d-none: Sets display to none.",
							".d-flex: Sets display to flex.",
							".d-inline-flex: Sets display to inline-flex.",
							".d-grid: Sets display to grid.",
							".d-inline-grid: Sets display to inline-grid.",
							".d-table: Sets display to table.",
							".d-table-row: Sets display to table-row.",
							".d-table-cell: Sets display to table-cell.",
							".d-table-caption: Sets display to table-caption.",
							".d-table-column: Sets display to table-column.",
							".d-table-column-group: Sets display to table-column-group.",
							".d-table-header-group: Sets display to table-header-group.",
							".d-table-footer-group: Sets display to table-footer-group.",
							".d-table-row-group: Sets display to table-row-group.",
						]}
					/>

					<InnerDropDown
						headerText={"Gap Utilities"}
						arrayOfClasses={[
							".gap-_: Sets the gap between grid items or flex items. (_ represents various gap sizes)",
							".gap-x-_: Sets the horizontal gap between grid items or flex items. (_ represents various gap sizes)",
							".gap-y-_: Sets the vertical gap between grid items or flex items. (_ represents various gap sizes)",
						]}
					/>
				</div>
			</DropDown>
		</>
	);
}

export default Layout;
