import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RecipeDetails.scss";
import recipepic from "../../assets/images/avocadosalad3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);

  const { recipeId } = useParams();

  const getRecipe = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/ingredients/${recipeId}`
    );

    setRecipe(data);
  };

  useEffect(() => {
    getRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <p>loading recipe...</p>;
  }

  return (
    <div className="recipeDetails">
      <div className="recipeDetails__container"> 
      <div className="recipeDetails__wrapOne">
        <div className="recipeDetails__image">
        <div className="recipeDetails__title">
          <h3 className="recipeDetails__name">{recipe.title}</h3>
          <div className="recipeDetails__others">
            <FontAwesomeIcon icon={["far", "clock"]} /> 30 min
          </div>
          <div className="recipeDetails__others">
            <FontAwesomeIcon icon={["far", "user"]} /> 2 servings
          </div>
          <div className="recipeDetails__others">
            <FontAwesomeIcon icon={["far", "compass"]} /> 457 calories
          </div>
        </div>
        </div>
      </div>

      <div className="recipeDetails__wrapTwo">
        <h3 className="recipeDetails__ingredients-heading">Ingredients</h3>
        <div className="recipeDetails__list">
          {recipe.ingredients.map((ingredient, i) => (
            <li className="recipeDetails__ingredient" key={i}>
              {ingredient}
            </li>
          ))}
        </div>
        <div>
          <h3 className="recipeDetails__instructions-header">Directions</h3>
          <ol className="recipeDetails__instructions-body">
            {recipe.instructions.split(". ").map((line) => (
              <li className="recipeDetails__instructions-list">{line}</li>
            ))}
          </ol>
        </div>
      </div>
      </div>
    </div>
  );
}
