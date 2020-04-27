import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IconButton } from "./IconButton";

export const IconBox = ({ countries }) => {
  const { loading } = useContext(GlobalContext);
  const topCountries = countries
    .sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else return 1;
    })
    .slice(0, 11);
  let topArray = [];

  topCountries.map((country) => {
    topArray.push({
      code: country.countryInfo.iso3,
      icon: country.countryInfo.iso2.toLowerCase(),
      name: country.country,
    });
    return topArray;
  });
  topArray.push({
    code: "irl",
    name: "Ireland",
    icon: "ie",
  });
  
  if(loading){
      return <></>
  }

  return (

    <div className="card mb-3 bg-light">
      <div className="card-body">
        <div className="row">
          {countries.length === 0
            ? ""
            : topArray.map((country) => {
                return (
                  <div className="col-4 col-md-2" key={country.icon}>
                    <IconButton country={country}></IconButton>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};
