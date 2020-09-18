import React from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./header.css";

export default class Header extends React.Component {
	state = {
		hasError: false
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	};

	render() {
		if(this.setState.hasError) {
			return <ErrorIndicator />
		};

		return (
			<div className="header d-flex">
			  <h1>Star DB</h1>
			  <ul id="d-flex">
				<li>
				  <a href="#">People</a>
				</li>
				<li>
				  <a href="#">Planets</a>
				</li>
				<li>
				  <a href="#">Starships</a>
				</li>
			  </ul>
			</div>
		  );
	};
};

