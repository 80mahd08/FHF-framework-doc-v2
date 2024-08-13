import ReactDOM from "react-dom/client";
import "fhf/dist/main.min.css";
import "./sass/App.sass";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<AnimatedRoutes />
	</Router>
);
cd;
