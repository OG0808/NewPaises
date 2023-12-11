import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nabvar from "./components/Nabvar/Nabvar";
import Home from "./pages/Home";
import CardCountry from "./pages/CardCountry";
import useCountryStore from "./Store/CountriesStore";


function App() {
  const { DarkMode } = useCountryStore();
  return (
    <main className="main__container" data-theme={DarkMode ? "dark" : "light"}>
      <Nabvar />
      <Routes>
      <Route path="/cardcountry/:countryName" element={<CardCountry/>}/>
        <Route path="/"  element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;