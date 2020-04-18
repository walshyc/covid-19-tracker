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
        <div className="col-12"><GlobalCard></GlobalCard></div>
        <div className="col-12"><GlobalChart></GlobalChart></div>
      </div>
      
      
      <GlobalStats></GlobalStats>
    </>
  );
};
