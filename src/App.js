import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShoppingList from "./Pages/ShoppingList/ShoppingList";
import SearchIngredients from "./Pages/SearchIngredients/SearchIngredients";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import RecipesPage from "./Pages/RecipesPage/RecipesPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far);

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/getRecipes" element={<RecipesPage />}></Route>
          <Route
            path="/getShoppingList"
            element={<SearchIngredients />}
          ></Route>
          <Route path="/ingredients/:mealId" element={<ShoppingList />}></Route>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />}></Route>
          <Route path="/ingredientlist"></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
