import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [colorMode, setColorMode] = useState("light");
	return (
		<>
			<Router>
				<Navbar colorMode={colorMode} setColorMode={setColorMode} />
				<Switch>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/">
						<TextForm heading="Enter your Text to Analyse" colorMode={colorMode} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
