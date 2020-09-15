import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "assets/stylesheets/App.css";

import TopValidator from "pages/TopValidator";
import TopNominator from "pages/TopNominator";
import About from "pages/About";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/top-validator">
						<TopValidator />
					</Route>
					<Route path="/top-nominator">
						<TopNominator />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
