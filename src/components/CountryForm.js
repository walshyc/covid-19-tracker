import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { CountryPicker } from "./CountryPicker";

export const CountryForm = () => {
  const { countries, setCountry, getCountries } = useContext(GlobalContext);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  useEffect(() => {
    getCountries();

    // eslint-disable-next-line
  }, []);

  // githubContext.repos.map(repo => <RepoItem repo={repo} key={repo.id}></RepoItem>)

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="country-selector">Select a Country</label>
          <select
            id="country-selector"
            className="form-control"
            onChange={handleChange}
          >
            {countries.map((c) => {
              return <CountryPicker country={c}></CountryPicker>;
            })}
          </select>
        </div>
      </form>
    </>
  );
};
