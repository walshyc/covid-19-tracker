import React, { useContext } from "react";
import { GlobalTable } from "./GlobalTable";
import { GlobalContext } from "../../context/GlobalState";

export const GlobalStats = () => {
  const { countries } = useContext(GlobalContext);

  const globalCases = countries
    .sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else return 1;
    })
    .slice(0, 50);

  const globalDeaths = countries
    .sort((a, b) => {
      if (a.deaths > b.deaths) {
        return -1;
      } else return 1;
    })
    .slice(0, 50);
  const globalTests = countries
    .sort((a, b) => {
      if (a.tests > b.tests) {
        return -1;
      } else return 1;
    })
    .slice(0, 50);

  const globalCasesPerMillion = countries
    .sort((a, b) => {
      if (a.casesPerOneMillion > b.casesPerOneMillion) {
        return -1;
      } else return 1;
    })
    .slice(0, 50);
  const globalDeathsPerMillion = countries
    .sort((a, b) => {
      if (a.deathsPerOneMillion > b.deathsPerOneMillion) {
        return -1;
      } else return 1;
    })
    .slice(0, 50);
  const globalTestsPerMillion = countries
    .sort((a, b) => {
      if (a.testsPerOneMillion > b.testsPerOneMillion) {
        return -1;
      } else return 1;
    })
    .slice(0, 50);

    countries.sort((a, b) => {
      if (a.country < b.country) {
        return -1;
      } else return 1;
    })

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <GlobalTable
            info={globalCases}
            title="Cases"
            type="cases"
          ></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable
            info={globalDeaths}
            title="Deaths"
            type="deaths"
          ></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable
            info={globalTests}
            title="Tests"
            type="tests"
          ></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable
            info={globalCasesPerMillion}
            title="Cases's Per Million"
            type="casesPerMillion"
          ></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable
            info={globalTestsPerMillion}
            title="Test's Per Million"
            type="testsPerMillion"
          ></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable
            info={globalDeathsPerMillion}
            title="Death's Per Million"
            type="deathsPerMillion"
          ></GlobalTable>
        </div>
      </div>
    </>
  );
};
