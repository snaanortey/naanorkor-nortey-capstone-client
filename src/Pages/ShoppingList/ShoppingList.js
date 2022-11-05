import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TypeMeal from "../TypeMeal/TypeMeal";

export default function ShoppingList() {
  const params = useParams();

  const { mealId } = params;
  const [ingredients, setIngredients] = useState([]);

  const getIngredientsByMealId = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/ingredients/${mealId}`
    );

    setIngredients(data);
  };

  useEffect(() => {
    getIngredientsByMealId();
  }, [mealId]);

  if (!ingredients) {
    return <p>Loding shopping list...</p>;
  }

  return (
    <section className="shoppinglist">
      <TypeMeal />
      <div className="shoppinglist-div">
        {ingredients.map((ingredient, i) => (
          <p key={i}>{ingredient}</p>
        ))}
      </div>
    </section>
  );
}
