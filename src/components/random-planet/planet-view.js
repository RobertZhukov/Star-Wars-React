import React from "react";

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <div>
        <img className='random_planet_img'
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
		  alt='random planet'
		/>
      </div>
      <div className="items">
        <h3>{name}</h3>
        <hr />
        <p>{`Population: ${population}`}</p>
        <hr />
        <p>{`Rotation Period: ${rotationPeriod}`}</p>
        <hr />
        <p>{`Diameter: ${diameter}`}</p>
      </div>
    </React.Fragment>
  );
};

export default PlanetView;