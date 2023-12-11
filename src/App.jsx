import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nabvar from "./components/Nabvar/Nabvar";
import Home from "./pages/Home";
import CardCountry from "./pages/CardCountry";


function App() {
  return (
    <main className="main__container">
      <Nabvar />
      <Routes>
      <Route path="/cardcountry/:countryName" element={<CardCountry/>}/>
        <Route path="/"  element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;