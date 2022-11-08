import React from "react";
import SearchMeal from "../../Components/SearchMeal/SearchMeal";
import "./SearchIngredients.scss";

export default function SearchIngredients() {
  return (
    <div className="searchIngredients">
      <div className="searchIngredients__container">
        <h3 className="searchIngredients__heading">Ready to go shopping?</h3>
        <h4 className="searchIngredients__text"> Search the meal you want to cook...</h4>
        <h4 className="searchIngredients__text">...Get your shopping list</h4>
      </div>
      <div className="searchIngredients__container">
        <SearchMeal />
      </div>
    </div>
  );
}
