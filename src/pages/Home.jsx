import React from "react";
import "../style/home.css";
import Cards from "../components/Cards/Cards";
import Filters from "../components/Filters/FiltersCountrie";
import FilterRegion from "../components/Filters/FilterRegion";
import useCountryStore from "../Store/CountriesStore";

const Home = () => {
  const { DarkMode } = useCountryStore();
  return (
    <div className="home__container" data-theme={DarkMode?"dark":"light"}>
      <div className="container__filters">
        <Filters />
        <FilterRegion />
      </div>
      <section className="cards__container">
        <Cards />
      </section>
    </div>
  );
};

export default Home;
