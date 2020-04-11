import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  nation: { countryInfo: { iso2: "" }, country: "" },
  increase: {
    cases: "",
    deaths: "",
  },
  countries: [],
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setCountry = async (country) => {
    setLoading();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://corona.lmao.ninja/countries/${country}`,
      requestOptions
    );
    let selectedCountry;
    const countries = res.data.Countries;
    console.log(res.data);

    // countries.map((nation) => {
    //   if (nation.Country === country) {
    //    selectedCountry = nation;
    //   }
    //   return selectedCountry
    // });

    dispatch({
      type: "SET_COUNTRY",
      payload: res.data,
    });
  };

  const getCountries = async () => {
    setLoading();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://corona.lmao.ninja/countries?sort=country`,
      requestOptions
    );

    const countriesList = res.data;
    console.log(res.data);

    let countriesArr = [];
    countriesList.map((c) => {
      countriesArr.push(c.country);
    });

    dispatch({
      type: "GET_COUNTRIES",
      payload: res.data,
    });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GlobalContext.Provider
      value={{
        nation: state.nation,
        loading: state.loading,
        countries: state.countries,
        getCountries,
        setCountry,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
