import React from "react";

import "./person-details.css";

const PersonDetails = () => {
  return (
    <div className="random person d-flex">
      <div>
        <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />
      </div>
      <div className="items">
        <h3>R2-D2</h3>
        <hr />
        <p>Gender: n/a</p>
        <hr />
        <p>Birth year: 33BY</p>
        <hr />
        <p>Eye color: red</p>
      </div>
    </div>
  );
};

export default PersonDetails;
