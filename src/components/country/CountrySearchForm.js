import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { CountryPicker } from "./CountryPicker";

export const CountrySearchForm = () => {
  const [text, setText] = useState("");
  const {
    setCountry,
    countries,
    nation,
    getGlobalData,
    getCountries,
    searchCountries,
  } = useContext(GlobalContext);

  const handleChange = (e) => {
    setText(e.target.value);
    setCountry(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCountries(text);
    setText("");
  };

  useEffect(() => {
    getGlobalData();
    getCountries();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p></p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
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
