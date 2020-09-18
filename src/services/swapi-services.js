export default class SwapiServices {
  _myHref = "https://swapi.dev/api";

  getResourse = async (url) => {
    const response = await fetch(`${this._myHref}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, recived ${response.status}`);
    }
    return await response.json();
  }

  getAllPeople = async () => {
    const response = await this.getResourse("/people/");
    return response.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
	const person = await this.getResourse(`/people/${id}/`);
	return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const response = await this.getResourse("/planets/");
    return response.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
	const planet = await this.getResourse(`/planets/${id}/`);
	return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const response = await this.getResourse("/starships/");
    return response.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
	const starship = await this.getResourse(`/starships/${id}/`);
	return this._transformStarship(starship);
  }

  _extractId = (item) => {
	const idRegExp = /\/([0-9]*)\/$/;
	return item.url.match(idRegExp)[1];
  }

  _transformPerson = (person) => {
	  return {
		  id: this._extractId(person),
		  name: person.name,
		  gender: person.gender,
		  birthYear: person.birthYear,
		  eyeColor: person.eyeColor
	  }
  }

  _transformPlanet = (planet) => {

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship = (starship) => {
	return {
		id: this._extractId(starship),
		name: starship.name,
		model: starship.model,
		manufacturer: starship.manufacturer,
		costInCredits: starship.costInCredits,
		length: starship.length,
		crew: starship.crew,
		passwengers: starship.passwengers,
		cargoCapacity: starship.cargoCapacity
	}
  }
}
