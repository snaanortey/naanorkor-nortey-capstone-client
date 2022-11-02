import React from "react";
import "./HomePageImages.scss";
import broccoli from "../../assets/images/broccoli.jpeg";
import carrot from "../../assets/images/carrot.jpeg";
import lemon from "../../assets/images/lemon.jpeg";
import milk_on_strawberry from "../../assets/images/milk_on_strawberry.jpeg";
import pepper_in_cloud from "../../assets/images/pepper_in_cloud.jpeg";
import pepper from "../../assets/images/pepper.jpeg";
import somefood from "../../assets/images/somefood.jpeg";
import spaghetti from "../../assets/images/spaghetti.jpeg";
import strawberry from "../../assets/images/strawberry.jpeg";
import veggies from "../../assets/images/veggies.jpeg";


function HomePageImages() {
  return (
    <section className="food"> 
    <div className="food__container">
      <img className="food__image" src={broccoli} alt="broccoli" />
      <img className="food__image" src={carrot} alt="carrot" />
      <img className="food__image" src={lemon} alt="lemon" />
      <img className="food__image" src={milk_on_strawberry} alt="milk_on_strawberry" />
      <img className="food__image" src={pepper_in_cloud} alt="pepper_in_cloud" />
      <img className="food__image" src={pepper} alt="pepper" />
      <img className="food__image" src={somefood} alt="somefood" />
      <img className="food__image" src={spaghetti} alt="spaghetti" />
      <img className="food__image" src={strawberry} alt="strawberry" />
      <img className="food__image" src={veggies} alt="veggies" />
    </div>
    </section>
  );
}

export default HomePageImages;
