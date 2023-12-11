import { Link, useNavigate, useParams } from "react-router-dom";
import Data from "../../data.json";
import "../style/cardCountry.css";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFecth";
import useCountryStore from "../Store/CountriesStore";

const CardCountry = () => {
  const { countryName } = useParams();
  const { DarkMode } = useCountryStore();
  const countries = Data.filter((country) => country.name === countryName);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleClick = (border) => {
    navigate(`/cardcountry/${border}`);
    
  };

  const apiUrl = "https://restcountries.com/v3.1/all";
  const [countryBorders, getCountryBorders] = useFetch(apiUrl);
  const [borders, setBorders] = useState();

  useEffect(() => {
    getCountryBorders();
  }, [countryName]);

  useEffect(() => {
    if (countryBorders && countryBorders.length > 0) {
      const targetCountry = countryBorders.find(
        (country) => country?.name.common === countryName
      );

      const borderCountryCodes = targetCountry?.borders || [];

      const borderCountries = countryBorders.filter((country) =>
        borderCountryCodes.includes(country?.cca3)
      );

      setBorders(borderCountries);
    }
  }, [countryBorders]);

  return (
    <div className="card-country" data-theme={DarkMode?"dark":"light"}>
      <button onClick={handleNavigate} className="card-country__button">
        <i className="bx bxs-left-arrow" />
        Back
      </button>
      {countries.map((country) => (
        <section key={country.name} className="card-country__section">
          <img src={country.flags.svg} alt="" className="card-country__image" />
          <div className="card-country__details">
           <div className="card__country__container--info">
           <div className="card-country__info">
              <h2 className="card-country__name">{country.name}</h2>
              <p className="card-country__native-name paragraph"><span>Native Name: </span>{country.nativeName}</p>
              <p className="card-country__population paragraph"><span>Population: </span>{country.population}</p>
              <p className="card-country__region paragraph"><span>Region: </span>{country.region}</p>
              <p className="card-country__subregion paragraph"><span>Sub Region: </span>{country.subregion}</p>
              <p className="card-country__capital paragraph"><span>Capital: </span>{country.capital}</p>
            </div>
            <div className="card-country__additional">
              <p className="card-country__domain paragraph"><span>Top Level Domain: </span>{country.topLevelDomain}</p>
              <p className="card-country__currencies paragraph"><span>Currencies: </span>
                {Object.values(country?.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <div className="card-country__languages paragraph">
              <span>Languajes: </span>
                {country.languages.map((language) => (
                  <p key={language.iso639_1} className="card-country__language paragraph">
                    {language.name}
                  </p>
                ))}
              </div>
            </div>
           </div>
            <div className="card-country__borders">
              <span className="paragraph">Border Countries: </span>
              {borders?.map((border) => (
                <p  onClick={() => handleClick(border.name.common)} key={border.name.common} className="card-country__border paragraph">
                {border.name.common}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CardCountry;
