import React from "react";
import GetRecipes from "../GetRecipes/GetRecipes";
import "./RecipesPage.scss";

export default function RecipesPage() {
  return (
    <div className="recipespage">
      <div className="recipespage__container">
        <div className="recipespage__wrap">
          <h2 className="recipespage__title">Not knowing what to cook?</h2>
          <h3 className="recipespage__heading">
            Take a pic of your ingredients
          </h3>
          <h3 className="recipespage__heading">Or type your ingredients</h3>
          <h4 className="recipespage__description">
            We'll get you the best recipes with what you have
          </h4>
        </div>
        <div className="recipespage__component">
          <GetRecipes />
        </div>
      </div>
    </div>
  );
}
