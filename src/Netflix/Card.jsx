import React from "react";
import './Card.css';
export default function Card(props) {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={props.img} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category"> {props.title} </span>
            <h3 className="card__title"> {props.sName} </h3>
            <a href="" target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
