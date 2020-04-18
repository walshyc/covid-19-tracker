import React from "react";
import { IrelandPie } from "./IrelandPie";
import { IrelandBar } from "./IrelandBar";

export const IrelandStats = () => {
  return (
    <>
      <div className="alert alert-dismissible alert-primary">
        <strong className="text-uppercase">Ireland Cases Breakdown</strong>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-4" style={{ width: "600px", height: "300px" }}>
          <IrelandPie></IrelandPie>
        </div>
        <div className="col-md-12 col-lg-8" style={{ width: "600px", height: "300px" }}>
          <IrelandBar></IrelandBar>
        </div>
      </div>

    </>
  );
};
