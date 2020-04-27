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
  globalHistory: [],
  countryHistory: [],
  irlCounties: [],
  irlStats: [],
  iconData: [],
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

    // let countiesData = [];
    let irelandStats = [];

    if (res.data.country === "Ireland") {
      // irelandData = await axios.get(
      //   "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIreland/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      // );

      // countiesData = irelandData.data.features.slice(-26);
      const secondRes = await axios.get(
        `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`
      );
      irelandStats =
        secondRes.data.features[secondRes.data.features.length - 1].attributes;
    }

    dispatch({
      type: "SET_COUNTRY",
      payload: res.data,
      // secondPayload: countiesData,
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
    let res;
    let data;
    try {
      res = await axios.get(
        `https://api.thevirustracker.com/free-api?countryTimeline=${country}`,
        requestOptions
      );
      
      data = res.data.timelineitems[0]
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        data = [];
      }
    }

    dispatch({
      type: "GET_COUNTRY_HISTORY",
      payload: data,
    });
  };

  const increaseCalc = (newNum, totalNum) => {
    const oldNum = totalNum - newNum;
    const increase = (((totalNum - oldNum) / oldNum) * 100).toFixed();
    return increase;
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const setLoadingFalse = () => dispatch({ type: "SET_LOADING_FALSE" });

  return (
    <GlobalContext.Provider
      value={{
        nation: state.nation,
        loading: state.loading,
        countries: state.countries,
        countriesHistory: state.countriesHistory,
        global: state.global,
        globalHistory: state.globalHistory,
        countryHistory: state.countryHistory,
        irlCounties: state.irlCounties,
        irlStats: state.irlStats,
        iconData: state.iconData,
        getCountries,
        setCountry,
        setLoading,
        setLoadingFalse,
        getGlobalData,
        increaseCalc,
        getGlobalHistory,
        getCountryHistory,
        getCountriesHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
