import React from "react";
import "./SharedCard.scss";

const SharedCard = (props) => {
  return (
    <div className="post">
      <h2 className="post-title">{props.title}</h2>
      <a className="post-link" href={props.link}>
        {props.link}
      </a>
      <div className="post-text">{props.text}</div>
    </div>
  );
};

export default SharedCard;
