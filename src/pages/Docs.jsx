import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import up from "/angle-up-solid.svg";
import down from "/angle-down-solid.svg";
import { motion } from "framer-motion";
import { mergeStyles, styles } from "fhf-react";
import DownOrUp from "./component/component/DownOrUp";

export default function Docs({ showNav }) {
  const [upOrDown, setUpOrDown] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("usage")) {
      setUpOrDown(true);
    }
  }, [location]);
  return (
    <>
      <nav style={{ left: showNav % 2 === 0 ? "0%" : "-200%" }}>
        <ul className="unstyledList">
          <li>
            <NavLink
              className="mainLink"
              to="/docs/introduction"
              style={({ isActive }) => ({
                borderLeft: isActive
                  ? "5px solid #a3759c"
                  : "5px solid #f1c5ea",
              })}
              onClick={() => setUpOrDown(false)}
            >
              Introduction
            </NavLink>
          </li>
        </ul>
        <ul className="unstyledList">
          <li>
            <NavLink
              className="mainLink"
              to="/docs/installation"
              style={({ isActive }) => ({
                borderLeft: isActive
                  ? "5px solid #a3759c"
                  : "5px solid #f1c5ea",
              })}
              onClick={() => setUpOrDown(false)}
            >
              Installation
            </NavLink>
          </li>
        </ul>
        <ul className="unstyledList">
          <li>
            <NavLink
              className="mainLink lastLink"
              to="/docs/usage"
              style={({ isActive }) => ({
                borderLeft: isActive
                  ? "5px solid #a3759c"
                  : "5px solid #f1c5ea",
              })}
              onClick={() => setUpOrDown(true)}
            >
              Usage
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
