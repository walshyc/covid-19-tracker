import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { CountryData } from "./CountryData";
import Spinner from "./layout/Spinner";
import FlagIcon from './layout/FlagIcon.js'

export const Table = () => {
  const { nation, loading } = useContext(GlobalContext);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr className="table-light">
            <th scope="col">
              {nation.Country === "" ? (
                ""
              ) : (
                <span className={`flag-icon flag-icon-${nation.countryInfo.iso2.toLowerCase()} flag-icon-lg`}></span>
              )}
            </th>
            <th scope="col">Total</th>
            <th scope="col">New</th>
            <th scope="col">Increase</th>
          </tr>
        </thead>
        <tbody>
          <CountryData nation={nation}></CountryData>
        </tbody>
      </table>
    </>
  );
};
