import axios from "axios";
import React from "react";
import { useState } from "react";

export default function GetRecipes() {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getIngredientsViaImage = async (e) => {
    const inputElement = e.target;

    const fileName = e.target.value;

    let formdata = new FormData();

    formdata.append("image", inputElement.files[0], fileName);

    const { data } = await axios.post(
      "http://localhost:8000/image/ingredients",
      formdata
    );

    // Prevents array from having duplicate values
    const newArray = Array.from(new Set([...ingredientList, ...data]).values());

    setIngredientList(newArray);
  };

  // Adds typed ingredient to ingredient array when the Enter key is pressed
  const pressEnterKey = (e) => {
    e.preventDefault();
    // Adds value in input button to ingredientLists state after the enter key is typed
    if (e.key === "Enter") {
      const typedInput = e.target.value;
      const newValue = Array.from(
        new Set([...ingredientList, typedInput]).values()
      );
      setIngredientList(newValue);
    }
    e.target.value = "";
  };

  // Removes ingredient from array when the delete button is clicked
  const deleteIngredient = (index) => {
    const filteredArray = ingredientList.filter((_, i) => i !== index);
    setIngredientList(filteredArray);
  };

  // Calls the API that returns list of recipes when the form is submitted
  const getRecipesHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "http://localhost:8000/recipes/search",
      ingredientList
    );

    setRecipes(data);

    // e.target.reset();
  };

  return (
    <div>
      <form onSubmit={getRecipesHandler} action="">
        <div>
          <input
            onChange={getIngredientsViaImage}
            type="file"
            accept="image/*"
            id="upload-button"
          />
          <label htmlFor="upload-button"></label>
        </div>

        <input onKeyDown={pressEnterKey} ></input>
        <div >
          {ingredientList.map((ingredient, index) => (
            <button key={index}>
              {ingredient}{" "}
              <span onClick={() => deleteIngredient(index)}>x</span>
            </button>
          ))}
        </div>
        <button>Get recipes</button>
      </form>

      <div>
        {recipes.map((recipe, i) => (
          <div key={i}>
            <div>
              <h3>{recipe.title}</h3>
            </div>
            <h3>Ingredients</h3>
            {recipe.ingredients.map((ingredient, i) => (
              <p key={i}>{ingredient}</p>
            ))}
            <div>
              <h3>Cooking Instructions...</h3>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
