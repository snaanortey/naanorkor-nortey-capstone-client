import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import napkin from "../../assets/images/napkin.png";

function HomePageImages() {
  return (
    <div> 
    <div class="container">
  <div class="carousel">
    <div class="carousel__face"><span>Welcome to FOODEASE</span></div>
    <div class="carousel__face"><span>Waste less, save more</span></div>
    <div class="carousel__face"><span>Take a pic of your Ingredients</span></div>
    <div class="carousel__face"><span>Get a meal to cook</span></div>
    <div class="carousel__face"><span>7000+ recipes to choose from</span></div>
    <div class="carousel__face"><span>Type a meal you want to cook</span></div>
    <div class="carousel__face"><span>Get your shopping list</span></div>
    <div class="carousel__face"><span>Buy only what you need</span></div>
    <div class="carousel__face"><span>Save the planet</span></div>
  </div>
</div>
<div class="foodease"><h1 class="foodease__title">Food<em>ease</em>💆🏽‍♀️</h1></div>

</div>
  );
}

export default HomePageImages;
