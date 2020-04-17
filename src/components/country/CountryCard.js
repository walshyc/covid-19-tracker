import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Spinner from "../layout/Spinner";
import {CountryInfo} from './CountryInfo'


export const CountryCard = () => {
  const { nation, loading } = useContext(GlobalContext);

  if (loading) {
    return <Spinner></Spinner>;
  } 

  return (
    <>
      <CountryInfo nation={nation}></CountryInfo>
    </>
  );
};
