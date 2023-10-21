import React from "react";

function Main(props) {
  return (
    <div className="main-container">
      <img src={props.photos} alt="MyPhoto" className="main-photo" />
      <div className="review-container">
        <span class="material-symbols-outlined" id="star-icon">
          star
        </span>
        <span style={{ padding: "5px" }}>{props.rate} </span>
        <span style={{ color: "#bcbcbc", padding: "5px" }}>{props.levels}</span>
        <span style={{ color: "#bcbcbc", padding: "5px" }}>
          {props.country}
        </span>
      </div>
      <p className="teacher">{props.about}</p>
      <p className="price-rate">
        <span className="bold-text">{props.prices}</span> / person
      </p>
    </div>
  );
}
export default Main;
