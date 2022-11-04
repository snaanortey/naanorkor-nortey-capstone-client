import React from "react";
import "./HomePageImages.scss";
import foodgif from "../../assets/images/Foodeaselogo.gif";
import { Link } from "react-router-dom";

function HomePageImages() {
  return (
    <section className="homepage">
      <img className="homepage__image" src={foodgif} alt="" />
      <Link to="/"><h2 className="homepage__text">Get started</h2></Link>
      
    </section>
  );
}

export default HomePageImages;
