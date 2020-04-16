import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import FlagIcon from "../layout/FlagIcon.js";
import { GlobalContext } from "../../context/GlobalState";
import { FaArrowUp } from "react-icons/fa";
import {IrelandTable} from './IrelandTable'

export const IrelandCard = ({ nation }) => {
  const { irlCounties } = useContext(GlobalContext);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <IrelandTable info={irlCounties}></IrelandTable>
        </div>
      </div>
    </>
  );
};
