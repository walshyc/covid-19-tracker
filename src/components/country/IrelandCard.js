import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IrelandTable } from "./IrelandTable";
import { IrelandStats } from "./IrelandStats";

export const IrelandCard = ({ nation }) => {
  const { irlCounties } = useContext(GlobalContext);

  return (
    <>
      <div className="row">
          <IrelandStats></IrelandStats>
      </div>
      <div className="row">
        <div className="col-12">
          <IrelandTable info={irlCounties}></IrelandTable>
        </div>
      </div>
    </>
  );
};
