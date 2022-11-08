import React from "react";
import { useState } from "react";
import "./RecipeSummary.scss";
import axios from "axios";
import { useEffect } from "react";

export default function RecipeSummary(props) {
  const [imageUrl, setImageUrl] = useState(null);

  // useEffect(async () => {
  //   const {
  //     data: { image },
  //   } = await axios.get("https://foodish-api.herokuapp.com/api/");

  //   setImageUrl(image);
  // },[]);

  return (
    <div class="center">
      <div class="property-card">
        <div class="property-image">
          {/* <img src="https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg" /> */}
          <img src={props.recipe.imageUrl}/>
          <div class="property-image-title">
            <h5>{props.recipe.title}</h5>
          </div>
        </div>
        <div class="property-description">
          <h5> {props.recipe.title} </h5>
          <p>{props.recipe.instructions.substring(0, 50)}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="recipeSummary">
      <div className="recipeSummary__imagediv">
        {/* <img
          className="recipeSummary__image"
          src={props.randomImage.image}
          alt="random food image"
        /> */}
      </div>
      <div className="recipeSummary__wrapTwo">
        <div className="recipeSummary__contianer">
          <h3 className="recipeSummary__title">{props.recipe.title}</h3>
        </div>
        <div className="recipeSummary__instructions">
          <h3 className="recipeSummary__instructions-heading">
            Cooking Instructions:
          </h3>
          <p className="recipeSummary__instructions-description">
            {props.recipe.instructions.substring(0, 50)}...
          </p>
        </div>
      </div>
    </div>
  );
}
