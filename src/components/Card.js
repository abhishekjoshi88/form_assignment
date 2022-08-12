import React from "react";

function Card({ firstName, lastName, age }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{firstName}</li>
        <li className="list-group-item">{lastName}</li>
        <li className="list-group-item">{age}</li>
      </ul>
    </div>
  );
}

export default Card;
