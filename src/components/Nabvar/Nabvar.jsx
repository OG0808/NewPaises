import React from "react";
import "../Nabvar/nabvar.css";
import useCountryStore from "../../Store/CountriesStore";

const Nabvar = () => {
  const { setDarkMode, DarkMode } = useCountryStore();
  console.log(DarkMode);

  return (
    <section className="nav" data-theme={DarkMode ? "dark" : "light"}>
      <nav className="nav__container">
        <h1 className="nav__title">Where in the world?</h1>
        <div onClick={() => setDarkMode()} className="nav__content">
          {DarkMode ? (
            <i style={{ color: "white" }} class="bx bxs-moon bx-sm" />
          ) : (
            <i class="bx bxs-sun bx-sm"></i>
          )}
          <span className="nav__text"> Dark Mode</span>
        </div>
      </nav>
    </section>
  );
};

export default Nabvar;
