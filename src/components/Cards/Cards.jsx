import React from "react";
import useCountryStore from "../../Store/CountriesStore";
import "../Cards/cards.css";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const { myArray, Search, Region, DarkMode } = useCountryStore();
  const navigate = useNavigate();

  const filteredByRegion = Region
    ? myArray.filter((country) =>
        country.region.toLowerCase().includes(Region.toLowerCase())
      )
    : myArray;

  const filteredBySearch = Search
    ? filteredByRegion.filter((country) =>
        country.name.toLowerCase().includes(Search.toLowerCase())
      )
    : filteredByRegion;

  const handleClick = (countryName) => {
    navigate(`/cardcountry/${countryName}`);
  };

  return (
    <section className="cards" data-theme={DarkMode?"dark":"light"}>
      {filteredBySearch?.map((country) => (
        <div
          onClick={() => handleClick(country.name)}
          key={country.alpha3Code}
          className="card"
        >
          <img className="card__image" src={country.flags.svg} alt="" />
          <h3 className="card__title">{country.name}</h3>
          <p className="card__info">{`Population: ${country.population}`}</p>
          <p className="card__info">{`Region: ${country.region}`}</p>
          <p className="card__info">{`Capital: ${country.capital}`}</p>
        </div>
      ))}
    </section>
  );
};

export default Cards;
