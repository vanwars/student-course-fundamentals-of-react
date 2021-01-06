import React from "react";

function Card(props) {
    return (
      <div className="card-holder">
          <div class="card">
              <h2>{props.name}</h2>
              <img src={'.' + props.imgURL} alt="avatar_img" class="img1" />
              <p>{props.phone}</p>
              <p>{props.email}</p>
          </div>
      </div>
    );
}

export default Card;