import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { GlobalProvider } from "./context/GlobalState";
import { CountryForm } from "./components/country/CountryForm";
import { Continents } from "./components/country/Continents";
import { Global } from "./components/global/Global";
import { Country } from "./components/country/Country";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

export default function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2E72EA",
      },
    },
  });
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar></Navbar>
            <div className="container">
              <Continents></Continents>
              <CountryForm></CountryForm>
              <Country></Country>
              <Global></Global>
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  );
}

// https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidCountyStatisticsHPSCIreland/FeatureServer/0/query?where=1%3D1&outFields=CountyName,PopulationCensus16,Lat,Long,CovidCaseroundUp,CovidCases,PopulationProportionCovidCases,x,y,ObjectId,UGI&outSR=4326&f=json
