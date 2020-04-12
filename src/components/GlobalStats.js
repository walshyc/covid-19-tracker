import React, { useContext } from "react";
import { GlobalTable } from "./GlobalTable";
import { GlobalContext } from "../context/GlobalState";

export const GlobalStats = () => {
  const {globalCases,globalDeaths,globalTests, globalTestsPerMillion } = useContext(GlobalContext);

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <GlobalTable info={globalCases} title="Cases" type="cases"></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable info={globalDeaths} title="Deaths" type="deaths"></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable info={globalTestsPerMillion} title="Test's Per Million" type="testsPerMillion"></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable info={globalTests} title="Tests" type="tests"></GlobalTable>
        </div>
      </div>
    </>
  );
};
