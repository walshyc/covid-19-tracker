import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import NumberFormat from "react-number-format";

export const GlobalCard = () => {
  const { global, getGlobalData } = useContext(GlobalContext);
  useEffect(() => {
    getGlobalData();

    // eslint-disable-next-line
  }, []);
  return (
    <div className="card text-dark bg-light my-3">
      <div className="card-header bg-custom text-xs font-weight-bolder text-light text-uppercase mb-1">
        Worldwide
      </div>
      <div className="card-body" style={{ padding: "0.5em" }}>
        <div className="row">
          <div className="col-6 col-md-3 py-2">
            <div className="card border-left-success shadow h-100 bg-custom">
              <div className="card-body" style={{ padding: "0.25em" }}>
                <div className="row no-gutters align-items-center">
                  <div className="col text-center">
                    <div className="h5 mb-0 font-weight-bold text-white text-uppercase">
                      Cases <br />
                      <NumberFormat
                        value={global.cases}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </div>
                    <div className="mb-0 text-white">
                      <small>
                        New{" "}
                        <NumberFormat
                          value={global.todayCases}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </small>
                      <div className="clearfix"></div>
                      <small>
                        Per Million{" "}
                        <NumberFormat
                          value={global.casesPerOneMillion}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 py-2">
            <div className="card border-left-success shadow h-100 bg-custom">
              <div className="card-body" style={{ padding: "0.25em" }}>
                <div className="row no-gutters align-items-center">
                  <div className="col text-center">
                    <div className="h5 mb-0 font-weight-bold text-white text-uppercase">
                      Deaths <br />
                      <NumberFormat
                        value={global.deaths}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </div>
                    <div className="mb-0 text-white">
                      <small>
                        New{" "}
                        <NumberFormat
                          value={global.todayDeaths}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </small>
                      <div className="clearfix"></div>
                      <small>
                        Per Million{" "}
                        <NumberFormat
                          value={global.deathsPerOneMillion}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 py-2">
            <div className="card border-left-success shadow h-100 bg-custom">
              <div className="card-body" style={{ padding: "0.25em" }}>
                <div className="row no-gutters align-items-center">
                  <div className="col text-center">
                    <div className="h5 mb-0 font-weight-bold text-white text-uppercase">
                      Tests
                      <br />
                      <NumberFormat
                        value={global.tests}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </div>
                    <div className="mb-0 text-white">
                      <small>
                        Per Million{" "}
                        <NumberFormat
                          value={global.testsPerOneMillion}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 py-2">
            <div className="card border-left-success shadow h-100 bg-custom">
              <div className="card-body" style={{ padding: "1.1em" }}>
                <div className="row no-gutters align-items-center">
                  <div className="col text-center ">
                    <div className="h6 mb-0 font-weight-bold text-white text-uppercase align-middle">
                      Countries
                      <br />
                      <NumberFormat
                        value={global.affectedCountries}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
