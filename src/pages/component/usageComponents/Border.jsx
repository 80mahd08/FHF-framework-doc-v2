import React from "react";
import DropDown from "./components/DropDown";
import InnerDropDown, {
	dropDownHeaderInsideOFBodyStyles,
} from "./components/InnerDropDown";
import { RespHeading, styles } from "fhf-react";

function Border() {
	return (
		<>
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
		</>
	);
}

export default Border;
