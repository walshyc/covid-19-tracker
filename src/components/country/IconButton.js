import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
export const IconButton = ({ country }) => {
  const { setCountry, getCountryHistory, getCountriesHistory } = useContext(
    GlobalContext
  );
  const handleChange = (e) => {
    setCountry(e.target.value);
    getCountryHistory(e.target.value);
    getCountriesHistory();
  };
  return (
    <button type="button" className="btn btn-primary btn-block m-1" onClick={handleChange} value={country.icon}>
      <span 
        style={{ verticalAlign: "bottom" }}
        className={`flag-icon flag-icon-${country.icon} flag-icon-lg`}
      ></span>{" "}
      <span className="d-none d-md-block mt-1">{country.name}</span>
      
    </button>
  );
};
