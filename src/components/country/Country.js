import React, { useContext } from "react";
import { CountryChart } from "./CountryChart";
import { GlobalContext } from "../../context/GlobalState";
import { CountryCard } from "./CountryCard";
import { IrelandCard } from "./IrelandCard";
import Spinner from "../layout/Spinner";

export const Country = () => {
  const { nation, loading } = useContext(GlobalContext);
  if (loading) {
    return <Spinner></Spinner>;
  } else if (nation.country === "") {
    return "";
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <CountryCard></CountryCard>
        </div>
        <div className="col-md-12 col-lg-6">
          <CountryChart></CountryChart>
        </div>
      </div>
      {nation.country === "Ireland" ? (
        <div className="row">
          <div className="col-12">
            <IrelandCard></IrelandCard>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
