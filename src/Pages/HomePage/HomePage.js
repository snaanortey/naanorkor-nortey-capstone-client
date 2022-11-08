import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePageImages() {
  return (
    <section className="homepage">
      <div className="homepage__button-container">
        <Link className="homepage__button-div" to="/getRecipes">
          <button className="homepage__button homepage__button--ingredients">
            Snap your ingredients ➟ Get recipes!
          </button>
        </Link>
        <Link className="homepage__button-div" to="/getShoppingList">
          <button className="homepage__button homepage__button--shoppinglist">
            Type your meal ➠ Get shopping list!
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomePageImages;
