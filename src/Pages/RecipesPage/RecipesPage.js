import React from "react";
import GetRecipes from "../GetRecipes/GetRecipes";
import "./RecipesPage.scss";

export default function RecipesPage() {
  return (
    <div className="recipespage">
      <div className="recipespage__container">
        <div className="recipespage__wrap">
          <h2 className="recipespage__title">Not sure what to cook?</h2>
          <ol className="recipespage__heading-div">
            <li className="recipespage__heading">
              Upload pic(s) of your ingredients
            </li>
            <li className="recipespage__heading">Type your ingredients</li>
            <li className="recipespage__heading">Find a recipe to cook!</li>
          </ol>
        </div>

        <GetRecipes />
      </div>
    </div>
  );
}
