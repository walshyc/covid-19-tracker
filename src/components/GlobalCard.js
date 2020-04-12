import React, { useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";
import {GlobalInfo} from './GlobalInfo'


export const GlobalCard = () => {
  const { global, getGlobalData, getCountries} = useContext(GlobalContext);

  useEffect(() => {
    getGlobalData();
    getCountries()
    
    // eslint-disable-next-line
  }, []); 


  return (
    <>
      <GlobalInfo stats={global}></GlobalInfo>
    </>
  );
};
