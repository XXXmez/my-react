import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  title = "",
  descr = "",
  cb = "",
  url = "",
  favorites = false,
  lastWork = false,
}) => {
  return (
    <div className="card" style={{ border: `6px double ${cb}` }}>
      <div className="card-header">
        {favorites && (
          <div className="card-icon">
            <span className="card-icon-span favorite">Interesting</span>
          </div>
        )}
        {lastWork && (
          <div className="card-icon">
            <span className="card-icon-span lastwork">Last work</span>
          </div>
        )}
        <Link to={url} className="card-button">
          ➜
        </Link>
      </div>
      <div className="card-title">
        <h3 className="card-title-h3">{title}</h3>
      </div>
      <div className="card-line"></div>
      <div className="card-description">
        <p className="card-text">{descr}</p>
      </div>
    </div>
  );
};

export default Card;
