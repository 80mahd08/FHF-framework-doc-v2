import React from "react";
import Code from "../component/Code";

function ByCDN() {
  return (
    <div className="byCDN">
      <h2 className="respH2">Step 1: Add CDN Link</h2>
      <p className="respP">
        In the `{"<head>"}` section of your HTML file, add the following link to
        include FHF via CDN:
      </p>
      <Code long="xml">
        {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fhf/dist/main.min.css">`}
      </Code>
      <p className="respP">or</p>

      <Code>{`import "https://cdn.jsdelivr.net/npm/fhf"`}</Code>
      <h2 className="respH2">Step 2: Start Using FHF</h2>
      <p className="respP">
        Once the CDN link is added, you can start using FHF classes and styles
        in your HTML or jsx files without any local installation.
      </p>
    </div>
  );
}

export default ByCDN;
