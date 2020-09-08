export default class SwapiService {
  _myHref = "https://swapi.dev/api";

  async getResourse(url) {
    const response = await fetch(`${this._myHref}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, recived ${response.status}`);
    }

    return await response.json();
  }

  async getAllPeople() {
    const response = await this.getResourse("/people/");
    return response.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}/`);
  }

  async getAllPlanets() {
    const response = await this.getResourse("/planets/");
    return response.results;
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}/`);
  }
  async getAllStarships() {
    const response = await this.getResourse("/starships/");
    return response.results;
  }

  getStarship(id) {
    return this.getResourse(`/starships/${id}/`);
  }
}
