import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { CountryPicker } from "./CountryPicker";
import {IconBox} from './IconBox'


export const CountryForm = () => {
  const {
    setCountry,
    countries,
    nation,
    getGlobalData,
    getCountries,
    filterCountries,
    getCountryHistory,
    getCountriesHistory,
  } = useContext(GlobalContext);

  const handleChange = (e) => {
    e.preventDefault()
    setCountry(e.target.value);
    getCountryHistory(e.target.value)
    getCountriesHistory()
  };

  useEffect(() => {
    getGlobalData();
    getCountries("All");
    filterCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form className='pt-3'>
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
      <IconBox countries={countries}></IconBox>
    </>
  );
};
