import useCountryStore from "../../Store/CountriesStore";
import "../Filters/filterRegion.css";
import { useState } from "react";


const FilterRegion = () => {


  const { setRegionArray, Region, DarkMode} = useCountryStore();
  const [isOpen, setIsOpen] = useState(false);


  const handleListClick = (region) => {
    setRegionArray(region);
    setIsOpen(false);
  };

  return (
    <div className="filter-region" data-theme={DarkMode?"dark":"light"}>
      <div onClick={() => setIsOpen(!isOpen)} className="filter-region__select">
        {Region || "Filter by Region"} <i class='bx bx-chevron-down bx-sm'></i>
      </div>
      {isOpen && (
        <ul className="filter-region__list">
          <li className="filter-region__list-item"
            onClick={() => handleListClick("africa")}>
            Africa
          </li>
          <li  className="filter-region__list-item"
            onClick={() => handleListClick("america")}>
            America
          </li>
          <li className="filter-region__list-item"
            onClick={() => handleListClick("asia")}>
            Asia
          </li>
          <li className="filter-region__list-item"
            onClick={() => handleListClick("europe")}>
            Europe
          </li>
          <li className="filter-region__list-item"
            onClick={() => handleListClick("oceania")}>
            Oceania
          </li>
          <li className="filter-region__list-item"
            onClick={() => handleListClick("")}>
            All Regions
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterRegion;
