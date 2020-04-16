import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NumberFormat from "react-number-format";

export const IrelandTableData = ({ data }) => {
  const { nation } = useContext(GlobalContext);

  return (
    <>
      <tr className="table-light">
        <th scope="col">{data.attributes.CountyName}</th>
        <th scope="col">
          {" "}
          <NumberFormat
            value={data.attributes.CovidCases}
            displayType={"text"}
            thousandSeparator={true}
          />
        </th>
        <th scope="col">
          {((data.attributes.CovidCases / nation.cases) * 100).toFixed(1)}%
        </th>
      </tr>
    </>
  );
};
