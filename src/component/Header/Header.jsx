import LeftPart from "./component/LeftPart";
import RightPart from "./component/RightPart";

export default function Header({ shown, setShowNav, showNav }) {
  return (
    <header>
      {shown && (
        <div
          className={`navLogo ${showNav % 2 === 0 ? "ex" : "def"}`}
          id={`navLogo`}
          onClick={() => {
            setShowNav(showNav + 1);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <LeftPart shownLink={shown} />

      <RightPart />
    </header>
  );
}
