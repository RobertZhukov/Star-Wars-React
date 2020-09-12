import React from "react";
import SwapiServices from "../../services/swapi-services";
import Spinner from "../spinner/spinner";
import PlanetView from './planet-view';

import "./random-planet.css";

export default class RandomPlanet extends React.Component {
  swapiServices = new SwapiServices();

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 17) + 2;
    return this.swapiServices.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
	const { planet, loading } = this.state;

	let preloader = '';

	loading ? preloader = "random d-flex preloader" : preloader = "random d-flex"


	const spinner = loading ? <Spinner /> : null;
	const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
		<div className={preloader}>
			{spinner}
			{content}
		</div>
	)
  }
}

