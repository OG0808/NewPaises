import React, { useEffect } from "react";
import "../Filters/filterCountrie.css";
import useCountryStore from "../../Store/CountriesStore";
import Data from "../../../data.json";

const FiltersCountrie = () => {
  const { setcCuntryArray, Search, setSearch, DarkMode} = useCountryStore();

    

  const ShowData = async () => {
    setcCuntryArray(Data);
  };


  const searcher = (e) => {
    setSearch(e.target.value);
  };
  

  useEffect(() => {
    ShowData();
  }, []);

  return (
    <section className="filters-countrie" data-theme={DarkMode?"dark":"light"}>
      {DarkMode ? <i style={{ color: "white" }} className='bx bx-search-alt-2 bx-sm'/> :<i  className='bx bx-search-alt-2 bx-sm'/> }
      <input
        className="filters-countrie__input"
        value={Search}
        onChange={searcher}
        type="text"
        placeholder="Search for a country…"
      />
    </section>
  );
};

export default FiltersCountrie;
