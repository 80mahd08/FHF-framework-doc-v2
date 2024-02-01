import React from "react";
import Code from "../component/Code";
import { motion } from "framer-motion";

export default function ByNpm() {
  return (
    <div className="byNpm">
      <h2 className="respH2">Step 1: Install Node.js</h2>
      <p>
        Before you can use FHF, ensure you have Node.js installed on your
        system. If you don't have it yet, download and install Node.js by
        clicking the button below:
      </p>
      <motion.button
        className="howToInstallItBtn margCenter superRounded respPaddingLeft-20-30 respPaddingRight-20-30 respPaddingTop-10-20 respPaddingBottom-10-20"
        style={{ display: "block" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://nodejs.org/en/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          Install Node.js
        </a>
      </motion.button>
      <p>
        This link will take you to the official Node.js download page, where you
        can get the latest version for your operating system.
      </p>
      <p className="respP">
        Confirm a successful Node.js installation by running the following
        command in your terminal or command prompt:
      </p>
      <Code>node -v</Code>
      <p className="respP">
        This command displays the installed Node.js version. Similarly, check
        the npm (Node Package Manager) version using:
      </p>
      <Code>npm -v</Code>
      <h2 className="respH2">Step 2: Installing FHF</h2>
      <p className="respP">
        After installing Node.js, you can initialize a new project by running:
      </p>
      <Code>npm init -y</Code>
      <p className="respP">
        Then, proceed to install FHF with the following npm command:
      </p>
      <Code>npm install fhf</Code>
      <p className="respP">
        This will download and install the FHF CSS framework into your project.
      </p>{" "}
    </div>
  );
}
