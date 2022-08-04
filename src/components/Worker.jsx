import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Worker({ element, position }) {
  return (
    <article className={position}>
      <img
        src={element.picture.large}
        alt={element.name.first}
        className="person-img"
      />
      <h4>
        {element.name.first} {element.name.last}
      </h4>
      <p className="title">{element.email}</p>
      <p className="title">
        Location: {element.location.city}, {element.location.country}
      </p>
      <p className="text">Phone: {element.phone}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}

export default Worker;
