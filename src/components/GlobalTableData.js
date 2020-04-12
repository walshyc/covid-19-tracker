import React from "react";
import NumberFormat from "react-number-format";
export const GlobalTableData = ({ data, index,type }) => {
    let tableType;
    if(type === 'cases'){
        tableType = data.cases
    } else if(type === 'deaths'){
        tableType = data.deaths
    } else if(type === 'tests'){
        tableType = data.tests
    }
  return (
    <>
      <tr className="table-light">
        <th scope="col">{index + 1}</th>
        <th scope="col"><span style={{verticalAlign: 'bottom'}}
                className={
                  data.countryInfo.iso2 === null
                    ? ""
                    : `flag-icon flag-icon-${data.countryInfo.iso2.toLowerCase()} flag-icon-lg`
                }
              ></span><span style={{paddingLeft:'10px'}}>{data.country}</span></th>
        <th scope="col">
          <NumberFormat
            value = {tableType}
            displayType={"text"}
            thousandSeparator={true}
          />
        </th>
      </tr>
    </>
  );
};
