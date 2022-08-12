import React from "react";

function Card({ firstName, lastName, age }) {
  return (
    <div>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{age}</h2>
    </div>
  );
}

export default Card;
