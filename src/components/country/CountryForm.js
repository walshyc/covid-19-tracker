import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { CountryPicker } from "./CountryPicker";


export const CountryForm = () => {
  const {
    setCountry,
    countries,
    nation,
    getGlobalData,
    getCountries,
    getCountryHistory,
    getCountriesHistory
  } = useContext(GlobalContext);

  const handleChange = (e) => {
    setCountry(e.target.value);
    getCountryHistory(e.target.value)
    getCountriesHistory()
  };

  useEffect(() => {
    getGlobalData();
    getCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p></p>
      <form>
        <div className="form-group">
                    <select
            id="country-selector"
            className="form-control"
            onChange={handleChange}
          >
            <option
              disabled={nation.country !== "" ? true : null}
              id="noCountry"
              defaultValue
            >
              Select a Country
            </option>
            {countries.map((c) => {
              return (
                <CountryPicker key={c.country} country={c}></CountryPicker>
              );
            })}
          </select>
        </div>
      </form>
    </>
  );
};
