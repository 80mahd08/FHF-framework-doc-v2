import React, { useState, useRef, useEffect } from "react";
import DownOrUp from "../component/DownOrUp";
import { RespHeading, mergeStyles, styles } from "fhf-react";

export default function DropDown({ dropDownHeadContent, children }) {
  const [upOrDown, setUpOrDown] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (upOrDown) {
      setBodyHeight(bodyRef.current.scrollHeight);
    } else {
      setBodyHeight(0);
    }
  }, [upOrDown]);

  useEffect(() => {
    console.log(bodyHeight);
  }, [bodyHeight]);

  return (
    <div
      style={mergeStyles(
        styles.extraRounded,
        styles.pointer,
        styles.respMarginBottom(20, 30)
      )}
      className={`dropDown ${upOrDown ? "expanded" : ""}`}
      onClick={() => setUpOrDown(!upOrDown)}
    >
      <div className="dropDownHead">
        <RespHeading level={3}>{dropDownHeadContent}</RespHeading>
        <DownOrUp upOrDown={upOrDown} />
      </div>
      <div
        className="dropDownBody"
        style={{ height: bodyHeight + "px" }}
        ref={bodyRef}
      >
        {children}
      </div>
    </div>
  );
}
