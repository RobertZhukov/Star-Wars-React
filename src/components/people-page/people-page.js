import React from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import SwapiServices from '../../services/swapi-services';

import './people-page.css';

export default class PeoplePage extends React.Component {
	swapiServices = new SwapiServices();

	state = {
		selectedPerson: 4,
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

		return(
			<div className='people_planet d-flex'>
				<ItemList 
					onItemSelected={(id) => this.onPersonSelected(id)}
					getData={this.swapiServices.getAllPeople} />
				<PersonDetails personId={this.state.selectedPerson}/>
			</div>
		)
	};
};