import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown from "./components/InnerDropDown";
function FlexBox() {
	return (
		<>
			<DropDown dropDownHeadContent={"FlexBox"} dropDownHeight={"500px"}>
				<p className="respP">
					.flex-container: Displays elements in a flex layout with wrapping,
				</p>
				<p className="respPaddingLeft-20-30 respP">
					.flex-item: Sets flex properties for child items
				</p>
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
		</>
	);
}

export default FlexBox;
