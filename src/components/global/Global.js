import React, {useContext} from "react";
import { GlobalStats } from "./GlobalStats";
import { GlobalChart } from "./GlobalChart";
import { GlobalCard } from "./GlobalCard";
import {GlobalContext} from '../../context/GlobalState'
import Spinner from '../layout/Spinner'

export const Global = () => {
  
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-lg-6"><GlobalCard></GlobalCard></div>
        <div className="col-md-12 col-lg-6"><GlobalChart></GlobalChart></div>
      </div>
      
      
      <GlobalStats></GlobalStats>
    </>
  );
};
