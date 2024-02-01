import { Link } from "react-router-dom";
import ps from "/ps.svg";
import { mergeStyles, styles } from "fhf-react";

export default function LeftPart({ shownLink }) {
  return (
    <div style={mergeStyles(styles.dispFlex)} className="leftPart">
      {shownLink ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="respH1 marginTop-20 marginBottom-20">Fhf</h1>
        </Link>
      ) : (
        <h1 className="respH1 marginTop-10 marginBottom-10">Fhf</h1>
      )}
      <img
        style={mergeStyles(styles.respMarginLeft(50, 60))}
        src={ps}
        alt="free palastine"
      />
    </div>
  );
}
