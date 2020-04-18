import React, { useContext } from "react";
import { CountryChart } from "./CountryChart";
import { GlobalContext } from "../../context/GlobalState";
import { CountryCard } from "./CountryCard";
import { IrelandStats } from "./IrelandStats";
import { IrelandTable } from "./IrelandTable";
import Spinner from "../layout/Spinner";

export const Country = () => {
  const { nation, loading, irlCounties } = useContext(GlobalContext);
  if (loading) {
    return <Spinner></Spinner>;
  }
  else if(nation.country ===''){
    return null
  }
  return (
    <>
      {nation.country === "Ireland" ? (
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <CountryCard></CountryCard>
          </div>
          <div className="col-md-12 col-lg-6">
            <IrelandStats></IrelandStats>
          </div>
          <div className="col-12 mb-4">
            <CountryChart></CountryChart>
          </div>
          <div className="col-12">
            <IrelandTable info={irlCounties}></IrelandTable>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <CountryCard></CountryCard>
          </div>
          <div className="col-12 mb-3">
            <CountryChart></CountryChart>
          </div>
        </div>
      )}
    </>
  );
};
