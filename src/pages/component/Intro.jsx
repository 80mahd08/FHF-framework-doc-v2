import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RespHeading } from "fhf-react";

export default function Intro() {
  const navigate = useNavigate();
  document.title = "FHF - into";
  return (
    <motion.div
      className="intro DocsContPart padding-35"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="title">
        <RespHeading level={1}>Introduction</RespHeading>
      </div>
      <div className="intro-text">
        <p className="respP">
          Welcome to our CSS framework, a versatile and lightweight toolkit
          designed to simplify the styling process for your web pages. Whether
          you're a beginner or an experienced developer, our framework provides
          an efficient way to add professional-quality styling to your HTML
          elements with minimal effort.
        </p>
        <RespHeading level={3}>Key Features:</RespHeading>
        <ol>
          <li>
            <p className="respP">
              <strong>Responsive Design:</strong>Our framework incorporates the
              latest responsive design techniques, ensuring your website looks
              great on various devices and screen sizes.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Simplicity and Ease of Use:</strong> With clear and
              intuitive class naming conventions, you don't need to be a CSS
              expert to utilize our framework effectively. The simplicity of our
              framework makes it accessible to developers of all skill levels.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Lightweight Structure:</strong> We prioritize performance
              by keeping our framework lightweight. You won't have to worry
              about unnecessary bloat, ensuring your website remains fast and
              efficient.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Customization:</strong> Built using SCSS, our framework is
              open-source, allowing you to customize and adapt it to meet your
              specific needs. Tailor the framework to create unique and
              responsive designs for your projects.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Comprehensive Documentation:</strong> Whether you're just
              starting or looking for advanced features, our documentation
              provides clear guidance on using the framework effectively.
            </p>
          </li>
        </ol>
        <RespHeading level={3} className="marginTop-20">
          Why Choose Us?
        </RespHeading>
        <ul>
          <li>
            <p className="respP">
              <strong>Efficiency:</strong> Quickly style your HTML elements with
              pre-defined classes.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Versatility:</strong> Suitable for a wide range of
              projects, from personal blogs to large corporate websites.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Modern Design:</strong> Stay up-to-date with the latest
              CSS standards and design trends.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Adaptability:</strong> Easily adapt the framework to your
              specific project requirements.
            </p>
          </li>
          <li>
            <p className="respP">
              <strong>Open Source:</strong> Contribute to and benefit from a
              growing community of developers.
            </p>
          </li>
        </ul>
        <b
          className="textCenter widthFull respMarginTop-40-50 respMarginBottom-40-50"
          style={{ display: "block" }}
        >
          Get started with our CSS framework today and elevate your web
          development experience!
        </b>
        <Link to={"/docs/installation"}>
          <motion.button
            className="howToInstallItBtn margCenter superRounded respPaddingLeft-20-30 respPaddingRight-20-30 respPaddingTop-10-20 respPaddingBottom-10-20"
            style={{ display: "block" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            how to install it ?
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
