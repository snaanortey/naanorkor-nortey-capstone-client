import React from "react";
import HomePageImages from "../../Components/HomePageImages/HomePageImages";
import axios from "axios";
import { useState } from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [suggestedmeal, setSuggestedMeal] = useState([]);

  const getSuggestedMeal = (e) => {
    const value = e.target.value;

    if (value.length >= 3) {
      axios.get(`http://localhost:8000/search?query=${value}`).then((res) => {
        setSuggestedMeal(res.data.hits.hits);
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

      <Link to = "/ingredients"><div>
        {suggestedmeal.map((eachmeal, i) => (
          <p key={i}>{eachmeal.fields.title}</p>
        ))}
      </div></Link>
    </div>
  );
}



