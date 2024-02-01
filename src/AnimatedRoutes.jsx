import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Docs from "./pages/Docs";
import Intro from "./pages/component/Intro";
import Insta from "./pages/component/Insta";
import Usage from "./pages/component/Usage";
import App from "./App";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ByNpm from "./pages/component/instaComponents/ByNpm";
import ByYarn from "./pages/component/instaComponents/ByYarn";
import ByCDN from "./pages/component/instaComponents/byCDN";

function AnimatedRoutes() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(0);
  return (
    <AnimatePresence>
      {location.pathname != "/" ? (
        <>
          <Header shown={true} showNav={showNav} setShowNav={setShowNav} />
          <Docs showNav={showNav} setShowNav={setShowNav} />)
        </>
      ) : null}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} key="main" />
        <Route path="/Docs" key="docs-key">
          <Route index element={<Intro />} key="intro-key" />
          <Route path="introduction" element={<Intro />} key="intor-2key" />
          <Route path="installation" element={<Insta />} key="insta-key">
            <Route index element={<ByNpm />} key="npm" />
            <Route path="byYarn" element={<ByYarn />} key="yarn" />
            <Route path="byCdn" element={<ByCDN />} key="cdn" />
          </Route>
          <Route path="usage" element={<Usage />} key="usage" />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
