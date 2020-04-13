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
  global: "",
  globalCases: [],
  globalDeaths: [],
  globalTests: [],
  globalTestsPerMillion: [],
  globalHistory: [],
  countryHistory:[]
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
      `https://corona.lmao.ninja/v2/countries/${country}`,
      requestOptions
    );
    dispatch({
      type: "SET_COUNTRY",
      payload: res.data,
    });
  };

  const getGlobalData = async () => {
    setLoading();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://corona.lmao.ninja/v2/all`,
      requestOptions
    );
    dispatch({
      type: "GET_GLOBAL",
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
      `https://corona.lmao.ninja/v2/countries?sort=-country`,
      requestOptions
    );
    dispatch({
      type: "GET_COUNTRIES",
      payload: res.data,
    });
  };

  const getGlobalHistory = async () => {
    setLoading();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://corona.lmao.ninja/v2/historical/all?lastdays=30`,
      requestOptions
    );
    dispatch({
      type: "GET_GLOBAL_HISTORY",
      payload: res.data,
    });
  };

  const getCountryHistory = async (country) => {
    setLoading();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://corona.lmao.ninja/v2/historical/${country}`,
      requestOptions
    );
    dispatch({
      type: "GET_COUNTRY_HISTORY",
      payload: res.data.timeline,
    });
  };


  const increaseCalc = (newNum, totalNum) => {
    const oldNum = totalNum - newNum;
    const increase = (((totalNum - oldNum) / oldNum) * 100).toFixed();
    return increase;
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GlobalContext.Provider
      value={{
        nation: state.nation,
        loading: state.loading,
        countries: state.countries,
        global: state.global,
        globalCases: state.globalCases,
        globalDeaths: state.globalDeaths,
        globalTests: state.globalTests,
        globalTestsPerMillion: state.globalTestsPerMillion,
        globalHistory: state.globalHistory,
        countryHistory: state.countryHistory,
        getCountries,
        setCountry,
        setLoading,
        getGlobalData,
        increaseCalc,
        getGlobalHistory,
        getCountryHistory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
