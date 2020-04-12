import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { GlobalProvider } from "./context/GlobalState";
import { CountryCard } from "./components/CountryCard";
import { GlobalCard } from "./components/GlobalCard";
import { CountryForm } from "./components/CountryForm";
import { GlobalStats } from "./components/GlobalStats";

export default function App() {
  
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <CountryForm></CountryForm>
            <CountryCard></CountryCard>
            <GlobalCard></GlobalCard>
            <GlobalStats></GlobalStats>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </GlobalProvider>
  );
}

// https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidCountyStatisticsHPSCIreland/FeatureServer/0/query?where=1%3D1&outFields=CountyName,PopulationCensus16,Lat,Long,CovidCaseroundUp,CovidCases,PopulationProportionCovidCases,x,y,ObjectId,UGI&outSR=4326&f=json
