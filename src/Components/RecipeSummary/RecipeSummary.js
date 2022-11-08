import React from "react";
import { useState } from "react";
import "./RecipeSummary.scss";
import veggies from "../../assets/images/veggies_icon.png";
import clock from "../../assets/images/clock.png";

export default function RecipeSummary(props) {
  return (
    <div class="recipeSummary">
      <div class="recipeSummary__card">
        <div class="recipeSummary__image">
          <img class="recipeSummary__image-image" src={props.recipe.imageUrl} />
        </div>
        <div class="recipeSummary__description">
          <h5 class="recipeSummary__title"> {props.recipe.title} </h5>
          <div class="recipeSummary__details">
            <div class="recipeSummary__details-div">
              {" "}
              <img
                class="recipeSummary__details-image"
                src={veggies}
                alt="veggies"
              />
              <p>veggie</p>
            </div>
            <div class="recipeSummary__details-div">
              <img
                class="recipeSummary__details-image"
                src={clock}
                alt="clock"
              />
              <p>30 min</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
