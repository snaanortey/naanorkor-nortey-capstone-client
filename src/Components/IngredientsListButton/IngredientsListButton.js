import React from "react";
import { Link } from "react-router-dom";

export default function IngredientsListButton() {
  return (
  <Link to="/ingredientlist"> 
  <button>
    Which ingredients do you have?
  </button>
  </Link>
  );
}
