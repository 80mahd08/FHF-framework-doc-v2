import { RespHeading, mergeStyles, styles } from "fhf-react";
import React from "react";

export default function InnerDropDown({
  headerText,
  arrayOfClasses,
  pIfNeeded = "",
  style = {},
}) {
  const dropDownHeaderInsideOFBodyStyles = mergeStyles(
    styles.fontColor("rgb(88, 62, 85)")
  );
  const dropDownBodyInsideOFBodyStyles = mergeStyles(
    styles.respMarginLeft(20, 30)
  );
  return (
    <div style={style}>
      <div className="header">
        <RespHeading level={4} style={dropDownHeaderInsideOFBodyStyles}>
          {headerText}:
        </RespHeading>
        {pIfNeeded !== "" ? (
          <p className="respP p-if-needed">{pIfNeeded}</p>
        ) : (
          ""
        )}
      </div>
      <div style={dropDownBodyInsideOFBodyStyles} className="body">
        {arrayOfClasses.map((item, index) => {
          if (typeof item === "object") {
            return (
              <p className="respP" key={index}>
                {item[0]} <span style={{ background: item[1] }}>{item[1]}</span>
              </p>
            );
          }
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}
