import React from "react";
import { GlobalTableData } from "./GlobalTableData";

export const GlobalTable = ({ info, type, title }) => {
  return (
    <>

        <table className="table table-hover">
          <thead className="">
            <tr className="table-primary text-uppercase rounded">
              <th scope="col" colSpan="3">
                {title}
              </th>
            </tr>
          </thead>
          <tbody>
            {info.map((country) => {
              return (
                <GlobalTableData
                  type={type}
                  key={country.countryInfo.iso2}
                  data={country}
                ></GlobalTableData>
              );
            })}
          </tbody>
        </table>
    </>
  );
};
