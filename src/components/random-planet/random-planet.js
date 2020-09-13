import React from "react";
import SwapiServices from "../../services/swapi-services";
import Spinner from "../spinner/spinner";
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator/error-indicator';

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
	setInterval(this.updatePlanet, 3000)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
	  loading: false,
	  error: false
    });
  };

  onError = (err) => {
	  this.setState({
		  error: true,
		  loading: false
	  });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
	return ( this.swapiServices
				.getPlanet(id)
				.then(this.onPlanetLoaded)
				.catch(this.onError)
	)
  }

  render() {
	const { planet, loading, error } = this.state;

	let preloader = '';

	(loading || error) ? preloader = "random d-flex preloader" : preloader = "random d-flex"

	const dataPlanet = !loading && !error;

	const errorMassage = error ? <ErrorIndicator /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = dataPlanet ? <PlanetView planet={planet} /> : null;

    return (
		<div className={preloader}>
			{errorMassage}
			{spinner}
			{content}
		</div>
	)
  }
}

