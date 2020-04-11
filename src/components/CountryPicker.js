import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const CountryPicker = ({country}) => {
  const { nation} = useContext(GlobalContext);


  return (
    <>
      <option value={country}>{country}</option>
    </>
  );
};
