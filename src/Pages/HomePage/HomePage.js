import React from "react";
import HomePageImages from "../../Components/HomePageImages/HomePageImages";
import axios from "axios";
import { useState } from "react";
import "./HomePage.scss";

export default function HomePage() {
  const [suggestedmeal, setSuggestedMeal] = useState([]);

  const getSuggestedMeal = (e) => {
    const value = e.target.value;

    if (value.length >= 3) {
      axios.get(`http://localhost:8000/suggest/${value}`).then((res) => {
        setSuggestedMeal(res.data);
      });
    }
    if (value.length <= 2) {
      setSuggestedMeal([]);
    }
  };

  return (
    <div>
      <HomePageImages />
      <div className="first">
        <input
          onChange={getSuggestedMeal}
          type="text"
          placeholder="type your meal"
          name="search"
        />
      </div>

      <div>
        {suggestedmeal.map((eachmeal, i) => (
          <p key={i}>{eachmeal}</p>
        ))}
      </div>
    </div>
  );
}
