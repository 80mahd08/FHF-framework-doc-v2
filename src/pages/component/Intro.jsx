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
			transition={{ duration: 0.5 }}>
			<div className="title">
				<RespHeading level={1}>Introduction</RespHeading>
			</div>
			<div className="intro-text">
				<p className="respP">
					Welcome to our adaptive and responsive CSS framework! This lightweight
					library is an excellent option for you whether you are a skilled
					developer or a novice in design. It is an efficient way for web
					developers to apply professional-quality Interface design elements to
					elements in their HTML.
				</p>
				<RespHeading level={3}>Features:</RespHeading>
				<ol>
					<li>
						<p className="respP">
							<strong>Responsive Design:</strong>Our framework has incorporated
							the most up-to-date responsive design elements available. Our
							framework will fit all devices and sizes.
						</p>
					</li>
					<li>
						<p className="respP">
							<strong>Usability:</strong> From the naming convention of our
							classes to the intuitive clear design, anyone at any skill level
							can have their projects looking fantastic.
						</p>
					</li>
					<li>
						<p className="respP">
							<strong>Customizable:</strong> Because we built our framework
							using SCSS, you can adapt the framework to look the way you like.
							Make this framework as unique as you need. - **Performance:** This
							is a lightweight framework that does not necessarily have
							unnecessary bloatware; it is fast and useful.
						</p>
					</li>
					<li>
						<p className="respP">
							<strong>Documentation:</strong> Comprehensive documentation for
							both starters and advanced web developers.
						</p>
					</li>
				</ol>
				<RespHeading level={3} className="marginTop-20">
					Why Choose Our CSS framework?
				</RespHeading>
				<ul>
					<li>
						<p className="respP">
							<strong>Performance:</strong> Quickly apply to your HTML design
							elements using pre-defined grid classes.
						</p>
					</li>
					<li>
						<p className="respP">
							<strong>Versatility:</strong> There is not an end use case for our
							framework. It will work for small personal projects and large
							corporate projects.
						</p>
					</li>
					<li>
						<p className="respP">
							<strong>Current Design:</strong> We have followed the current CSS
							standards and design trends.
						</p>
					</li>
					<li>
						<p className="respP">
							<strong>Usable:</strong> This framework is easy to set up and
							configure alongside your current project setup or start a new
							project.
						</p>
					</li>
					<li>
						<p className="respP">
							<strong>Open Source:</strong> Modify and do what you want with
							this open source framework. Contribute back to the community and
							benefit from others making contributions as well.
						</p>
					</li>
				</ul>
				<b
					className="textCenter widthFull respMarginTop-40-50 respMarginBottom-40-50"
					style={{ display: "block" }}>
					Get started with our CSS framework today and leverage the design
					possibilities it offers for your website design. The setup process
					is...
				</b>
				<Link to={"/docs/installation"}>
					<motion.button
						className="howToInstallItBtn margCenter superRounded respPaddingLeft-20-30 respPaddingRight-20-30 respPaddingTop-10-20 respPaddingBottom-10-20"
						style={{ display: "block" }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}>
						how to install it ?
					</motion.button>
				</Link>
			</div>
		</motion.div>
	);
}
