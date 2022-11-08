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
            Upload pic(s) of your ingredients...
          </h3>
          <h3 className="recipespage__heading">...Or type your ingredients</h3>
          <h4 className="recipespage__description">
            And find a recipe to cook!
          </h4>
        </div>
        
          <GetRecipes />
          
      

      </div>
    </div>
  );
}
