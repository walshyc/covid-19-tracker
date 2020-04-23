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
  countriesHistory: [],
  loading: true,
  global: "",
  globalCases: [],
  globalDeaths: [],
  globalTests: [],
  globalTestsPerMillion: [],
  globalHistory: [],
  countryHistory: [],
  irlCounties: [],
  irlStats: [],
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
    let irelandData = [];

    if (res.data.country === "Ireland") {
      irelandData = await axios.get(
        "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      );
    }

    const secondRes = await axios.get(
      `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`
    );
    const irelandStats =
      secondRes.data.features[secondRes.data.features.length - 1].attributes;

      console.log(irelandStats)

    dispatch({
      type: "SET_COUNTRY",
      payload: res.data,
      secondPayload: irelandData,
      thirdPayload: irelandStats,
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

  const getCountriesHistory = async () => {
    setLoading();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(
      `https://corona.lmao.ninja/v2/historical`,
      requestOptions
    );
    dispatch({
      type: "GET_COUNTRIES_HISTORY",
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
        countriesHistory: state.countriesHistory,
        global: state.global,
        globalCases: state.globalCases,
        globalDeaths: state.globalDeaths,
        globalTests: state.globalTests,
        globalTestsPerMillion: state.globalTestsPerMillion,
        globalHistory: state.globalHistory,
        countryHistory: state.countryHistory,
        irlCounties: state.irlCounties,
        irlStats: state.irlStats,
        getCountries,
        setCountry,
        setLoading,
        getGlobalData,
        increaseCalc,
        getGlobalHistory,
        getCountryHistory,
        getCountriesHistory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
