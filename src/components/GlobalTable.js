import React from 'react'
import {GlobalTableData} from './GlobalTableData'

export const GlobalTable = ({info, type}) => {
    return (
        <>
        <table className="table table-hover">
        <thead>
          <tr className="table-primary text-uppercase">
    <th scope="col" colSpan='3'>{type}</th>

          </tr>
        </thead>
        <tbody>
            {info.map((country, index) => {
                return <GlobalTableData type={type} index={index} key={country.countryInfo.iso2} data={country}></GlobalTableData>
            })}
          
        </tbody>
      </table>
        </>
    )
}
