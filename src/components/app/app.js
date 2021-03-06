import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import SwapiServices from '../../services/swapi-services';

import './app.css';

export default class App extends React.Component {
	swapiServices = new SwapiServices();

	state = {
		hasError: false
	};

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
	};
	
	componentDidCatch() {
		this.setState({ hasError: true });
	};

	render() {
		if(this.state.hasError) {
			return <ErrorIndicator />
		};

		return (
			<div className='container'>
				<Header />
				<RandomPlanet />
				<PeoplePage />
			</div>
		)	
	};
};