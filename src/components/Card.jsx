import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Card({ element, position }) {
  return (
    <article className={position}>
      <img src={element.image} alt={element.name} className="person-img" />
      <h4>{element.name}</h4>
      <p className="title">{element.title}</p>
      <p className="text">{element.quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}

export default Card;
