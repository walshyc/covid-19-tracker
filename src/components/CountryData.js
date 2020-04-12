import React from "react";
import NumberFormat from 'react-number-format';
import * as moment from 'moment';

export const CountryData = ({ nation }) => {
  const increaseCalc = (newNum, totalNum) => {
    const oldNum = totalNum - newNum;
    const increase = (((totalNum - oldNum) / oldNum) * 100).toFixed(2);
    console.log(typeof increase)
    return increase;
  };

  const updated = moment(new Date(nation.updated).toISOString()).format('llll')

  return (
    <>
      <tr>
        <th scope="row">Cases</th>
        <td><NumberFormat value={nation.cases} displayType={'text'} thousandSeparator={true} /></td>
        <td>{nation.todayCases === 0? '':<NumberFormat value={nation.todayCases} displayType={'text'} thousandSeparator={true} />}</td>
        <td>
          {isNaN(increaseCalc(nation.todayCases, nation.cases)) || increaseCalc(nation.todayCases, nation.cases) === '0.00'
            ? ""
            : `${increaseCalc(nation.todayCases, nation.cases)}%`}
        </td>
        <td><NumberFormat value={nation.casesPerOneMillion} displayType={'text'} thousandSeparator={true} /></td>
      </tr>
      <tr>
        <th scope="row">Deaths</th>
        <td><NumberFormat value={nation.deaths} displayType={'text'} thousandSeparator={true} /></td>
        <td>{nation.todayDeaths === 0? '':<NumberFormat value={nation.todayDeaths} displayType={'text'} thousandSeparator={true} />}</td>
        <td>
          {isNaN(increaseCalc(nation.todayDeaths, nation.deaths)) || increaseCalc(nation.todayDeaths, nation.deaths) === '0.00'
            ? ""
            : `${increaseCalc(nation.todayDeaths, nation.deaths)}%`}
        </td>
        <td><NumberFormat value={nation.casesPerOneMillion} displayType={'text'} thousandSeparator={true} /></td>
      </tr>
 

      <tr>
        <th scope="row">Tests</th>
        <td><NumberFormat value={nation.tests} displayType={'text'} thousandSeparator={true} /></td>
        <td></td>
        <td></td>
        <td><NumberFormat value={nation.testsPerOneMillion} displayType={'text'} thousandSeparator={true} /></td>
      </tr>
      <tr>
        
          <td colSpan='5'>Updated on {updated}</td>
      </tr>
    </>
  );
};
