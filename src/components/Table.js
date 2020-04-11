import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { CountryData } from "./CountryData";

export const Table = () => {
  const { nation, loading } = useContext(GlobalContext);

  console.log(nation);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr className="table-primary">
            <th scope="col">Ireland</th>
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
