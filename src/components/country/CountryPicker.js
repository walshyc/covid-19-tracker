import React from "react";

export const CountryPicker = ({ country }) => {
  return (
    <>
      <option value={country.countryInfo.iso3}>{country.country}</option>
    </>
  );
};
