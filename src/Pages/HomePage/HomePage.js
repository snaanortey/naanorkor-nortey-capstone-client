import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePageImages() {
  return (
    <section className="homepage">
      <div className="homepage__button-container">
        <Link to="/getRecipes">
          <button className="homepage__button homepage__button--ingredients">
            <h3 className="homepage__button-text">
              Snap your ingredients ➟ Get recipes!
            </h3>
          </button>
        </Link>
        <Link to="/getShoppingList">
          <button className="homepage__button homepage__button--shoppinglist">
            <h3 className="homepage__button-text">
              Type your meal ➠ Get a shopping list!
            </h3>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomePageImages;
