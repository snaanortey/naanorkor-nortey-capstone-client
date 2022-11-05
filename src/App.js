import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShoppingList from "./Pages/ShoppingList/ShoppingList";
import GetRecipes from "./Pages/GetRecipes/GetRecipes";
import TypeMeal from "./Pages/TypeMeal/TypeMeal";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/getRecipes" element={<GetRecipes/>}></Route>
          <Route path="/getShoppingList" element={<TypeMeal/>}></Route>
          <Route path="/ingredients/:mealId" element={<ShoppingList />}></Route>
          <Route path="/ingredientlist" ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
