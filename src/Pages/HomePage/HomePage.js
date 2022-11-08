import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import napkin from "../../assets/images/napkin.png";

function HomePageImages() {
  return (
    <section className="homepage">
      <div className="homepage__button-container">
        <div className="homepage__button-wrap">
          <Link to="/getRecipes">
            <div className="homepage__button-div homepage__button-div--recipes">
              <h3 className="homepage__welcome">Welcome to Foodease 😉</h3>
              <h3 className="homepage__intro homepage__intro--recipes">
                1. Upload pictures of the ingredients you have at home and 👇🏾
              </h3>
              <button className="homepage__button homepage__button--ingredients">
                📸 Get recipes!
              </button>
            </div>
          </Link>
          <Link to="/getShoppingList">
            <div className="homepage__button-div homepage__button-div--shoppinglist">
              <h3 className="homepage__intro homepage__intro--shoppinglist">
                2. Search for the meal you want to cook and 👇🏾
              </h3>
              <button className="homepage__button homepage__button--shoppinglist">
                🛍 🛒 Get shopping list!
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePageImages;
