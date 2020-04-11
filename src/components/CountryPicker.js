import React from "react";

export const CountryPicker = ({ country }) => {
  return (
    <>
      <option value={country.countryInfo.iso2}>{country.country}</option>
    </>
  );
};
