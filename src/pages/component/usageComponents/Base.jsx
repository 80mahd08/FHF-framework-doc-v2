import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown from "./components/InnerDropDown";

function Base() {
	return (
		<>
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
		</>
	);
}

export default Base;
