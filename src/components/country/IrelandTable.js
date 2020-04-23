import React from "react";
import { IrelandTableData } from "./IrelandTableData";

export const IrelandTable = ({ info, type, title }) => {
  const recentInfo = info.data.features.slice(-26);
  recentInfo.sort((a, b) => {
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
          {recentInfo.map((county) => {
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
