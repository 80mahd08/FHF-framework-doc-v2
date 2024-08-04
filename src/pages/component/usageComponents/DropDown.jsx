import React, { useState, useRef } from "react";
import DownOrUp from "../component/DownOrUp";
import { RespHeading, mergeStyles, styles } from "fhf-react";

export default function DropDown({
  dropDownHeadContent,
  children,
  style = {},
}) {
  const [upOrDown, setUpOrDown] = useState(false);
  const bodyRef = useRef(null);

  const handleDropDownClick = () => {
    setUpOrDown((prevState) => !prevState);
  };

  return (
    <div
      style={mergeStyles(
        styles.extraRounded,
        styles.pointer,
        styles.respMarginBottom(20, 30),
        style
      )}
      className={`dropDown ${upOrDown ? "expanded" : ""}`}
      onClick={handleDropDownClick}
    >
      <div className="dropDownHead">
        <RespHeading level={3}>{dropDownHeadContent}</RespHeading>
        <DownOrUp upOrDown={upOrDown} />
      </div>
      <div
        className="dropDownBody"
        ref={bodyRef}
        style={{
          height: upOrDown ? `${bodyRef.current.scrollHeight}px` : 0,
          overflow: "hidden",
          transition: "height 0.3s ease", // Adjust the duration and easing as needed
        }}
      >
        {children}
      </div>
    </div>
  );
}
