import { mergeStyles, styles } from "fhf-react";
import React from "react";
import down from "/angle-down-solid.svg";

export default function DownOrUp({ upOrDown }) {
  return (
    <span>
      <img
        style={mergeStyles(
          styles.transition("transform", 0.5, 0),
          upOrDown ? styles.rotate(180) : styles.rotate(0)
        )}
        src={down}
        alt="angle up"
      />
    </span>
  );
}
