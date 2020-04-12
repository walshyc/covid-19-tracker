import React, { useContext } from "react";
import { GlobalTable } from "./GlobalTable";
import { GlobalContext } from "../context/GlobalState";

export const GlobalStats = () => {
  const {globalCases,globalDeaths,globalTests } = useContext(GlobalContext);

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <GlobalTable info={globalCases} type="cases"></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable info={globalDeaths} type="deaths"></GlobalTable>
        </div>
        <div className="col-md-4 col-xs-12">
          <GlobalTable info={globalTests} type="tests"></GlobalTable>
        </div>
      </div>
    </>
  );
};
