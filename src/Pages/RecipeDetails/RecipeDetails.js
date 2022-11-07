import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RecipeDetails.scss";
import recipepic from "../../assets/images/recipe1.jpeg";

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
      <img className="recipeDetails__image" src={recipepic} alt="food" />
      <div className="recipeDetails__text"> 
      <div className="recipeDetails__title">
        <h3>{recipe.title}</h3>
      </div>
      <h3>Ingredients</h3>
      {recipe.ingredients.map((ingredient, i) => (
        <p key={i}>{ingredient}</p>
      ))}
      <div>
        <h3 className="recipeDetails__instructions">Cooking Instructions...</h3>
        <p>{recipe.instructions}</p>
      </div>
      </div>
    </div>
  );
}
