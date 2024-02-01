import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="instaNav">
      <NavLink
        style={() => {
          if (
            location.pathname === "/docs/installation/" ||
            location.pathname === "/docs/installation"
          ) {
            return {
              borderBottom: "5px solid #a3759c",
            };
          } else {
            return {
              borderBottom: "5px solid #f1c5ea",
            };
          }
        }}
        to={"/docs/installation/"}
      >
        by npm
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          borderBottom: isActive ? "5px solid #a3759c" : "5px solid #f1c5ea",
        })}
        to={"/docs/installation/byYarn"}
      >
        by yarn
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          borderBottom: isActive ? "5px solid #a3759c" : "5px solid #f1c5ea",
        })}
        to={"/docs/installation/byCdn"}
      >
        by cdn
      </NavLink>
    </div>
  );
}

export default Nav;
