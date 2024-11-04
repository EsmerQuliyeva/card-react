import React from "react";

const Card = (props) => {
  let badge;
  if (props.openSpots === 0) {
    badge = "Sold Out";
  } else if (props.location === "Online") {
    badge = "Online";
  }
  return (
    <div className="card">
      <div className="card-first-part">
        {badge && <span className="extra-info">{badge}</span>}
        <img src={props.coverImg} alt={props.title} />
      </div>
      <div className="card-second-part">
        <img src="/assets/Star 1.png" alt="star" />
        <span>{props.rating}</span>
        <span className="span-hero">({props.reviewCount})</span>
        <span className="span-hero">{props.location}</span>
      </div>
      <p className="general-text">{props.title}</p>
      <span>
        <b>From ${props.price}</b> / person
      </span>
    </div>
  );
};

export default Card;
