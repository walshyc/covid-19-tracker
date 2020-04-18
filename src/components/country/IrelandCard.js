import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IrelandTable } from "./IrelandTable";
import { IrelandStats } from "./IrelandStats";

export const IrelandCard = ({ nation }) => {
  const { irlCounties } = useContext(GlobalContext);

  return (
    <>
      <IrelandStats></IrelandStats>

      <IrelandTable info={irlCounties}></IrelandTable>
    </>
  );
};
