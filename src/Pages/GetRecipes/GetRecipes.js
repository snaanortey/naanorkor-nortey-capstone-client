import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import camera_icon from "../../assets/images/5849-camera-icon.gif";
import "./GetRecipes.scss";
import search_icon from "../../assets/images/search-icon.jpeg";
import RecipeSummary from "../../Components/RecipeSummary/RecipeSummary";

export default function GetRecipes(props) {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipes, setRecipes] = useState([]);
  // const [randomImage, setRandomImage] = useState(null);

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
    // e.preventDefault();
    // Adds value in input button to ingredientLists state after the enter key is typed
    if (e.key === "Enter") {
      const typedInput = e.target.value;
      const newValue = Array.from(
        new Set([...ingredientList, typedInput]).values()
      );
      setIngredientList(newValue);
      e.target.value = "";
    }
  };

  // Removes ingredient from array when the delete button is clicked
  const deleteIngredient = (index) => {
    const filteredArray = ingredientList.filter((_, i) => i !== index);
    setIngredientList(filteredArray);
  };

  // Calls the API that returns list of recipes when the form is submitted
  const getRecipesHandler = async (e) => {
    const { data } = await axios.post(
      "http://localhost:8000/recipes/search",
      ingredientList
    );

    setRecipes(data);
  };

  return (
    <>
      <div className="searchrecipes">
        <div>
          <div className="searchrecipes__wrapTwo">
            <div className="searchrecipes__allinputs">
              <div className="searchrecipes__containerTwo">
                <input
                  className="searchrecipes__input"
                  placeholder="Type your ingredients"
                  onKeyDown={pressEnterKey}
                ></input>
                <div>
                  {ingredientList.map((ingredient, index) => (
                    <button key={index}>
                      {ingredient}
                      <span onClick={() => deleteIngredient(index)}>x</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <input
                  className="searchrecipes__container"
                  onChange={getIngredientsViaImage}
                  type="file"
                  accept="image/*"
                  id="upload-button"
                />

                <label htmlFor="upload-button">
                  <img
                    className="searchrecipes__camera"
                    src={camera_icon}
                    alt="camera icon"
                  />
                </label>
              </div>
            </div>
            <button
              className="searchrecipes__button"
              onClick={getRecipesHandler}
            >
              GET RECIPE
            </button>
          </div>
        </div>
      </div>
      <div className="searchrecipes__results">
        {recipes.map((recipe, i) => (
          <div className="searchrecipes__summary" key={i}>
            <Link to={`/recipe/${recipe.id}`}>
              <RecipeSummary recipe={recipe} /* randomImage={randomImage} */ />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
