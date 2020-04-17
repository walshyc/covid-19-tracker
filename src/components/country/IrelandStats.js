import React from "react";
import { IrelandPie } from "./IrelandPie";


export const IrelandStats = () => {

  return (
    <>

            <div className="col-md-12 col-lg-6" style={{ width: "600px", height: "300px" }}>
              <div className="alert alert-dismissible alert-primary">
                <strong className="text-uppercase">Ireland Cases by Gender</strong>
              </div>
              <IrelandPie></IrelandPie>
            </div>
            <div className="col-12">
              <IrelandPie></IrelandPie>
            </div>

    </>
  );
};
