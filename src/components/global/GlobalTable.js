import React, {useContext} from "react";
import { GlobalTableData } from "./GlobalTableData";
import {GlobalContext} from "../../context/GlobalState"

export const GlobalTable = ({ info, type, title }) => {
  const { continent } = useContext(GlobalContext);
  return (
    <>

        <table className="table table-hover">
          <thead className="">
            <tr className="table-primary text-uppercase rounded">
              <th scope="col" colSpan="3">
                {`${continent} ${title}`}
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
