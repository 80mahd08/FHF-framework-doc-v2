import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./instaComponents/Nav";
import { useEffect, useState } from "react";
import Purge from "./instaComponents/Purge";

export default function Insta() {
	document.title = "FHF - Insta";
	const [showMainAnimation, setShowMainAnimation] = useState(true);
	const [showNestedAnimation, setShowNestedAnimation] = useState(true);
	useEffect(() => {
		// Main animation
		setTimeout(() => {
			setShowMainAnimation(false);
		}, 1000);

		// Nested routes animation
		setTimeout(() => {
			setShowNestedAnimation(false);
		}, 2000);

		return () => {
			setShowMainAnimation(true);
			setShowNestedAnimation(true);
		};
	}, []);

	const containerVariants = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	};

	return (
		<>
			{showMainAnimation ? (
				<motion.div
					className="insta DocsContPart padding-35"
					variants={containerVariants}
					initial="hidden"
					animate="visible">
					<div className="title">
						<h1 className="respH1">Installation</h1>
					</div>
					<Nav />

					{/* Apply animation to nested routes within Installation */}
					{showNestedAnimation ? (
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}>
							<Outlet />
						</motion.div>
					) : (
						<div>{/* Render nested routes without animation */}</div>
					)}
					<Purge />
				</motion.div>
			) : (
				<div
					className="insta DocsContPart padding-35"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}>
					<div className="title">
						<h1 className="respH1">Installation</h1>
					</div>
					<Nav />

					<Outlet />
					<Purge />
				</div>
			)}
		</>
	);
}
