import React from "react";
import NumberFormat from 'react-number-format';

export const CountryData = ({ nation }) => {
  const increaseCalc = (newNum, totalNum) => {
    const oldNum = totalNum - newNum;
    const increase = (((totalNum - oldNum) / oldNum) * 100).toFixed(2);
    return increase;
  };
  return (
    <>
      <tr>
        <th scope="row">Cases</th>
        <td><NumberFormat value={nation.cases} displayType={'text'} thousandSeparator={true} /></td>
        <td><NumberFormat value={nation.todayCases} displayType={'text'} thousandSeparator={true} /></td>
        <td>
          {isNaN(increaseCalc(nation.todayCases, nation.cases))
            ? ""
            : `${increaseCalc(nation.todayCases, nation.cases)}%`}
        </td>
        <td><NumberFormat value={nation.casesPerOneMillion} displayType={'text'} thousandSeparator={true} /></td>
      </tr>
      <tr>
        <th scope="row">Deaths</th>
        <td><NumberFormat value={nation.deaths} displayType={'text'} thousandSeparator={true} /></td>
        <td><NumberFormat value={nation.todayDeaths} displayType={'text'} thousandSeparator={true} /></td>
        <td>
          {isNaN(increaseCalc(nation.todayDeaths, nation.deaths))
            ? ""
            : `${increaseCalc(nation.todayDeaths, nation.deaths)}%`}
        </td>
        <td><NumberFormat value={nation.deathsPerOneMillion} displayType={'text'} thousandSeparator={true} /></td>
      </tr>
 

      <tr>
        <th scope="row">Tests</th>
        <td><NumberFormat value={nation.tests} displayType={'text'} thousandSeparator={true} /></td>
        <td></td>
        <td></td>
        <td><NumberFormat value={nation.testsPerOneMillion} displayType={'text'} thousandSeparator={true} /></td>
      </tr>
    </>
  );
};
// updated: 1586637926501,
// country: "Zimbabwe",
// cases: 13,
// todayCases: 0,
// deaths: 3,
// todayDeaths: 0,
// recovered: 0,
// active: 10,
// critical: 0,
// casesPerOneMillion: 0,
// deathsPerOneMillion: 0,
// tests: 438,
// testsPerOneMillion: 29

// cases: 8928,
// todayCases: 839,
// deaths: 320,
// todayDeaths: 33,
// recovered: 25,
// active: 8583,
// critical: 194,
// casesPerOneMillion: 1808,
// deathsPerOneMillion: 65,
// tests: 53000,
// testsPerOneMillion: 10734
