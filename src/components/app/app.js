import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<RandomPlanet />
			<div className='d-flex'>
				<ItemList />
				<PersonDetails />
			</div>
		</div>
	)
};

export default App;