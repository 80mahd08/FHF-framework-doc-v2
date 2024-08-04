import Card from "./component/Card";
import introLogo from "/introduction.svg";
import instLogo from "/installation.svg";
import usageLogo from "/arrow-up-solid.svg";
import { NavLink } from "react-router-dom";

export default function ContPart() {
  return (
    <div className="ContPart">
      <div className="container respGridFill-290">
        <NavLink to="/Docs/introduction" style={NavLinkStyle}>
          <Card
            logo={introLogo}
            title="introduction"
            disc="FHF is a pre-prepared library that is meant to allow for easier, more standards-compliant styling of web pages ..."
          />
        </NavLink>
        <NavLink to="/Docs/installation" style={NavLinkStyle}>
          <Card
            logo={instLogo}
            title="installation"
            disc="you can install FHF using npm or by installing folder in github"
          />
        </NavLink>
        <NavLink to="/Docs/usage" style={NavLinkStyle}>
          <Card
            logo={usageLogo}
            title="usage"
            disc="you can use this framework by adding classes in your HTML or TSX"
          />
        </NavLink>
      </div>
    </div>
  );
}

const NavLinkStyle = {
  textDecoration: "none",
};
