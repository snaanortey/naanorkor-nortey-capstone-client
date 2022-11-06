import React from "react";
import SearchMeal from "../../Components/SearchMeal/SearchMeal";
import "./SearchIngredients.scss";

export default function SearchIngredients() {
  return (
    <div className="">
      <h2 className="">Type the meal you want...</h2>
      <h2 className="">...Get your shopping list</h2>
      <SearchMeal />
    </div>
  );
}
