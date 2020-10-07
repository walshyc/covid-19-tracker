import React, {useContext} from "react";
import NumberFormat from "react-number-format";
import {GlobalContext} from '../../context/GlobalState'

export const GlobalTableData = ({ data, index, type }) => {
  const {setCountry} = useContext(GlobalContext)
  let tableType;
  if (type === "cases") {
    tableType = data.cases;
  } else if (type === "deaths") {
    tableType = data.deaths;
  } else if (type === "tests") {
    tableType = data.tests;
  } else if (type === "testsPerMillion") {
    tableType = data.testsPerOneMillion;
  } else if (type === "deathsPerMillion") {
    tableType = data.deathsPerOneMillion;
  } else if (type === "casesPerMillion") {
    tableType = data.casesPerOneMillion;
  }

  const handleClick = (e) => {
    setCountry(e.target.getAttribute('value'));
  }

  return (
    <>
      <tr  onClick={handleClick}  className="table-light">
        <th value={data.countryInfo.iso2} scope="col">
          <span
            style={{ verticalAlign: "bottom" }}
            className={
              data.countryInfo.iso2 === null
                ? ""
                : `flag-icon flag-icon-${data.countryInfo.iso2.toLowerCase()} flag-icon-lg`
            }
          ></span>
          <span style={{ paddingLeft: "10px" }}>{data.country}</span>
        </th>
        <th scope="col">
          <NumberFormat
            value={tableType}
            displayType={"text"}
            thousandSeparator={true}
          />
        </th>
      </tr>
    </>
  );
};
