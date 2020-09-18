import React from "react";
import SwapiServices from '../../services/swapi-services';

import "./person-details.css";

export default class PersonDetails extends React.Component {
	swapiServices = new SwapiServices();
	
	state = {
		person: null
	};

	componentDidMount() {
		this.updatePerson();
	};

	componentDidUpdate(prevProps) {
		if(this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	};

	updatePerson() {
		const { personId } = this.props;
		if(!personId) {
			return;
		};

		this.swapiServices
			.getPerson(personId)
			.then((person) => {
				this.setState({ person })
			});
	};

	render() {
		if(!this.state.person) {
			return <span> Select a person froma list </span>
		}

		const { id, name, gender, birthYear, eyeColor } = this.state.person;

		return (
			<div className="random person d-flex">
			  <div>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='person details' />
			  </div>
			  <div className="items">
				<h3>{name}</h3>
				<hr />
				<p>{`Gender: ${gender}`}</p>
				<hr />
				<p>{`Birth year: ${birthYear}`}</p>
				<hr />
				<p>{`Eye color: ${eyeColor}`}</p>
			  </div>
			</div>
		  );
	};
};
