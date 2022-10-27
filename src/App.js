import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
<Route path ="/" element={<HomePage/>}></Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
