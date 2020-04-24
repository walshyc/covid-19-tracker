import React from "react";
import { IrelandTableData } from "./IrelandTableData";

export const IrelandTable = ({ info, type, title }) => {
  
  info.sort((a, b) => {
    if (a.attributes.ConfirmedCovidCases < b.attributes.ConfirmedCovidCases) {
      return 1;
    } else return -1;
  });

  return (
    <>
      <table className="table table-hover ">
        <thead className="">
          <tr className="table-primary text-uppercase rounded">
            <th scope="col">County</th>
            <th scope="col">Cases</th>
            <th scope="col">% of Total</th>
          </tr>
        </thead>
        <tbody>
          {info.map((county) => {
            return (
              <IrelandTableData
                data={county}
                key={county.attributes.ORIGID}
              ></IrelandTableData>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
