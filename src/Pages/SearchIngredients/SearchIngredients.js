import React from "react";
import SearchMeal from "../../Components/SearchMeal/SearchMeal";
import "./SearchIngredients.scss";

export default function SearchIngredients() {
  return (
    <div className="searchIngredients">
      <div className="">Ready to eat? Type the meal you want...</div>
      <SearchMeal />
      <div className="">...Get your shopping list</div>
    </div>
  );
}
