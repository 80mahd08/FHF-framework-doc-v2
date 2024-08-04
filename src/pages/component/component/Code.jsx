import React from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import Swal from "sweetalert2";
import codeCopyLogo from "/copy-regular.svg";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

const Code = ({ children, long = "js" }) => {
  const language = long === "js" ? "javascript" : "xml";
  const highlightedChildren = hljs.highlight(language, children).value;

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Copied to clipboard!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "megaRounded sweetAlertStyle",
          },
        });
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };

  return (
    <div className="code">
      <pre
        className={`inner-code language-${language}`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        <code dangerouslySetInnerHTML={{ __html: highlightedChildren }} />
      </pre>
      <span className="codeCopyLogo" onClick={() => copyToClipboard(children)}>
        <img src={codeCopyLogo} alt="codeCopyLogo" />
      </span>
    </div>
  );
};

export default Code;
