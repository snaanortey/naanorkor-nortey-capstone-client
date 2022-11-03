import axios from "axios";
import React from "react";
import { useState } from "react";

export default function GetRecipes() {
  const [ingredientList, getIngredientList] = useState([]);

  const ingredientsBoxHandler = (e) => {
    e.preventDefault();
    const ingredientBox = e.target.ingredients.value;
    const ingredientBoxInArray = ingredientBox.split("\n");
    console.log(ingredientBoxInArray);

    axios
      .post("http://localhost:8000/recipes/search", ingredientBoxInArray)
      .then((res) => {
        console.log(res.data);
        getIngredientList(res.data);
      });

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={ingredientsBoxHandler} action="">
        <textarea name="ingredients" id="" cols="30" rows="12"></textarea>
        <button>Get recipes for ingredients</button>
      </form>
      <div>
        {ingredientList.map((ingredient, i) => (
          <div key={i}>
            <div>
              <h3>{ingredient._source.title}</h3>
            </div>
            <div>{ingredient._source.instructions}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
