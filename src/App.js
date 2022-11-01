import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShoppingList from "./Pages/ShoppingList/ShoppingList";

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
<Route path ="/" element={<HomePage/>}></Route>
<Route path ="/ingredients" element={<ShoppingList/>}></Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
