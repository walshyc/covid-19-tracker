import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  nation: {
    country: "Ireland",
    TotalConfirmed: "8089",
    TotalDeaths: "287",
    NewConfirmed: "1515",
    NewDeaths: "24",
    casesIncrease: "23.05",
    deathsIncrease: "9.13",
    lastUpdated: "",
  },
  countries: ['ireland', 'england'],
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setCountry = async (country) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://api.covid19api.com/summary`,
      requestOptions
    );
    let selectedCountry;
    const countries = res.data.Countries;

    countries.map((nation) => {
      if (nation.Country === country) {
        selectedCountry = nation;
      }
    });

    dispatch({
      type: "SET_COUNTRY",
      payload: selectedCountry,
    });
  };
  const getCountries = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://api.covid19api.com/summary`,
      requestOptions
    );

    const countries = res.data.Countries;
    let countriesArr = [];
    countries.map((country) => {
      const countryName = country.Country;
      countriesArr.push(countryName);
    });
    console.log(countriesArr)

    dispatch({
      type: "GET_COUNTRIES",
      payload: countriesArr,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        nation: state.nation,
        loading: state.loading,
        countries: state.countries,
        getCountries,
        setCountry,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
