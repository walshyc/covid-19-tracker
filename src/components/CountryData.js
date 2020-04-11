import React from "react";
import { GlobalContext } from "../context/GlobalState";


export const CountryData = ({nation}) => {
  return (
    <>
      <tr>
        <th scope="row">Cases</th>
        <td>{nation.TotalConfirmed}</td>
        <td>{nation.NewConfirmed}</td>
        {/* <td>
          {this.state.loading
            ? ""
            : `${this.increaseCalc(this.state.newCases, this.state.cases)}%`}
        </td> */}
      </tr>
      { <tr>
        <th scope="row">Deaths</th>
        <td>{nation.TotalDeaths}</td>
        <td>{nation.NewDeaths}</td>
        {/* <td>
          {this.state.loading
            ? ""
            : `${this.increaseCalc(this.state.newDeaths, this.state.deaths)}%`}
        </td> */}
      </tr>  }
    </>
  );
};
