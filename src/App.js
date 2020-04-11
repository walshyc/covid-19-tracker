import React, { Component, useContext, useEffect } from "react";
import moment from "moment";
import "./App.css";
import Navbar from "./components/Navbar";
import { Title } from "./components/Title";
import { GlobalProvider } from "./context/GlobalState";
import { Table } from "./components/Table";
import { CountryForm } from "./components/CountryForm";
import { GlobalContext } from "./context/GlobalState";

export default function App() {
  const { nation, loading, setCountry, getCountries } = useContext(
    GlobalContext
  );


  // increaseCalc(newNum, totalNum) {
  //   const oldNum = totalNum - newNum;
  //   const increase = (((totalNum - oldNum) / oldNum) * 100).toFixed(2);
  //   return increase;
  // }

  return (
    <GlobalProvider>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Title></Title>
          <CountryForm></CountryForm>
          <Table></Table>
        </div>
      </div>
    </GlobalProvider>
  );
}

// https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidCountyStatisticsHPSCIreland/FeatureServer/0/query?where=1%3D1&outFields=CountyName,PopulationCensus16,Lat,Long,CovidCaseroundUp,CovidCases,PopulationProportionCovidCases,x,y,ObjectId,UGI&outSR=4326&f=json
