import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { GlobalInfo } from "./GlobalInfo";

export const GlobalCard = () => {
  const { global } = useContext(GlobalContext);
  return (
    <>
      <GlobalInfo stats={global}></GlobalInfo>
    </>
  );
};
