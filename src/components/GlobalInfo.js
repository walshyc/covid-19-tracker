import React from "react";
import NumberFormat from "react-number-format";

export const GlobalInfo = (type, today, million) => {
  return (
    <>
      <div className="card border-left-success shadow h-100 bg-danger">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col text-center">
              <div className="h5 mb-0 font-weight-bold text-white text-uppercase">
                Cases <br />{type}
                {/* <NumberFormat
                  value={type}
                  displayType={"text"}
                  thousandSeparator={true} */}
                />
              </div>
              <div className="mb-0 text-white">
                <small>{today}
                  {/* {today ===''? '':`Today ${<NumberFormat
                    value={today}
                    displayType={"text"}
                    thousandSeparator={true}
                  />}`} */}
                               
                </small>
                <div className="clearfix"></div>
                <small>
                  Per Million {million}
                  {/* <NumberFormat
                    value={million}
                    displayType={"text"}
                    thousandSeparator={true}
                  /> */}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
