import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShoppingList from "./Pages/ShoppingList/ShoppingList";
import IngredientList from "./Pages/IngredientList/IngredientList";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/ingredients/:mealId" element={<ShoppingList />}></Route>
          <Route path="/ingredientlist" element={<IngredientList/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
