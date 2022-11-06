import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./TypeMeal.scss";
import search_icon from "../../assets/images/search-icon.jpeg";

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
      <div className="">

        
        <div class="search-container">
          <input
            onChange={getSuggestedMeal}
            type="text"
            name="search"
            placeholder="Search your meal..."
            class="search-input"
          />

          <p className="meal__icon">🔍</p>
        </div>

        <div className="typeMeal__list">
          {suggestedmeal.map((eachmeal, i) => (
            <Link
              className="typeMeal__link"
              key={i}
              to={`/ingredients/${eachmeal.id}`}
            >
              <p className="typeMeal__text" onClick={setInputToEmpty} key={i}>
                {eachmeal.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
