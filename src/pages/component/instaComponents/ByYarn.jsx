import React from "react";
import Code from "../component/Code";

function ByYarn() {
  return (
    <div className="byYarn">
      <h2 className="respH2">step 1: Installing Yarn</h2>
      <h3 className="respH3">1 - Enable Corepack:</h3>
      <Code>{"corepack enable"}</Code>
      <p className="respP">This adds the Yarn binary to your PATH.</p>
      <h3 className="respH3">2 - Initialize a new project:</h3>
      <Code>{"yarn init -2"}</Code>
      <p className="respP">This initializes a new project with Yarn.</p>
      <h2 className="respH2">step 2: Installing FHF</h2>
      <Code>{"yarn add fhf"}</Code>
      <p className="respP">
        This will download and install the FHF CSS framework into your project.
      </p>
    </div>
  );
}

export default ByYarn;
