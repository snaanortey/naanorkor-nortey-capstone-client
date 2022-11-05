import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./TypeMeal.scss";

export default function TypeMeal() {
  const [suggestedmeal, setSuggestedMeal] = useState([]);

  const getSuggestedMeal = (e) => {
    const value = e.target.value;

    if (value.length >= 3) {
      axios
        .get(`http://localhost:8000/meals/search?query=${value}`)
        .then((res) => {
          setSuggestedMeal(res.data);
        });
    }
    if (value.length <= 2) {
      setSuggestedMeal([]);
    }
  };

  const setInputToEmpty = () => {
    setSuggestedMeal([]);
  };

  return (
    <div className="typeMeal">
      <div className="first">
        <input
          onChange={getSuggestedMeal}
          type="text"
          placeholder="type your meal"
          name="search"
        />
      </div>

      <div className="typeMeal__list">
        {suggestedmeal.map((eachmeal, i) => (
          <Link key={i} to={`/ingredients/${eachmeal.id}`}>
            <p onClick={setInputToEmpty} key={i}>
              {eachmeal.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
