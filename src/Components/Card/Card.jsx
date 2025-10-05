import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ emoji, heading, detail, links }) => {
  return (
    <article
      className="card"
      aria-label={heading}
      itemScope
      itemType="https://schema.org/Service"
    >
      <header>
        <img
          src={emoji}
          alt={heading + " icon"}
          loading="lazy"
          width={64}
          height={64}
          itemProp="image"
        />
        <h2 className="card-heading" itemProp="name">
          {heading}
        </h2>
      </header>
      <p className="card-detail" itemProp="description">
        {detail}
      </p>
      <Link
        to={links}
        className="card-link"
        aria-label={`View projects related to ${heading}`}
      >
        <button className="button i-buttons">View Projects</button>
      </Link>
    </article>
  );
};

export default Card;
