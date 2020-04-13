import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { GlobalContext } from "../../context/GlobalState";
import FlagIcon from "../layout/FlagIcon.js";
import * as moment from "moment";
import { FaArrowUp } from "react-icons/fa";

export const GlobalInfo = ({ stats }) => {
  const { increaseCalc } = useContext(GlobalContext);
  let updated = "";
  if (stats.updated) {
    updated = moment(new Date(stats.updated).toISOString()).fromNow("");
  }
  //
  return (
    <>
      <div className="card bg-light mb-3">
        <div className="card-body"  style={{padding:'1em', paddingBottom:'.1em'}}>
          <h4 className="card-title">
            <span className="flag-icon flag-icon-un flag-icon-lg"></span>
            <span className="align-top text-primary pl-2">
              Worldwide{" "}
              <span>
                <small style={{ fontWeight: "600" }}>
                  ({stats.affectedCountries})
                </small>
              </span>
            </span>
          </h4>
          <div className="card-body"  style={{padding:'1em'}}>
            <div className="row pb-3">
              <div
                className="col-4"
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
              >
                <h6>
                  <small className="muted-text">Cases</small>
                  <br />
                  <div className="text-bolder text-primary">
                    <NumberFormat
                      value={stats.cases}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </div>
                </h6>
              </div>
              <div
                className="col-4"
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
              >
                <h6>
                  <small className="muted-text">Deaths</small>
                  <br />
                  <div className="text-bolder text-primary">
                    <NumberFormat
                      value={stats.deaths}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </div>
                </h6>
              </div>
              <div
                className="col-4"
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
              >
                <h6>
                  <small className="muted-text">Tests</small>
                  <br />
                  <div className="text-bolder text-primary">
                    <NumberFormat
                      value={stats.tests}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </div>
                </h6>
              </div>
            </div>
            {stats.todayCases === 0 && stats.todayDeaths === 0 ? (
              ""
            ) : (
              <div className="row pb-3">
                <div
                  className="col-4"
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                >
                  <h6>
                    <small className="muted-text">New Cases</small>
                    <br />
                    <div className="text-bolder text-primary">
                      {stats.todayCases === 0 ? (
                        ""
                      ) : (
                        <>
                          <NumberFormat
                            value={stats.todayCases}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                          <span>
                            <small
                              className="text-primary font-weight-normal"
                              style={{
                                fontSize: "60%",
                                paddingLeft: "5px",
                                verticalAlign: "middle",
                              }}
                            >
                              <FaArrowUp></FaArrowUp>{" "}
                              {isNaN(
                                increaseCalc(stats.todayCases, stats.cases)
                              ) ||
                              increaseCalc(stats.todayCases, stats.cases) ===
                                "0.00"
                                ? ""
                                : `${increaseCalc(
                                    stats.todayCases,
                                    stats.cases
                                  )}%`}
                            </small>
                          </span>
                        </>
                      )}
                    </div>
                  </h6>
                </div>
                <div
                  className="col-4"
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                >
                  <h6>
                    <small className="muted-text">New Deaths</small>
                    <br />
                    <div className="text-bolder text-primary">
                      {stats.todayDeaths === 0 ? (
                        ""
                      ) : (
                        <>
                          <NumberFormat
                            value={stats.todayDeaths}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                          <span>
                            <small
                              className="text-primary font-weight-normal"
                              style={{
                                fontSize: "60%",
                                paddingLeft: "5px",
                                verticalAlign: "middle",
                              }}
                            >
                              <FaArrowUp></FaArrowUp>{" "}
                              {isNaN(
                                increaseCalc(stats.todayDeaths, stats.deaths)
                              ) ||
                              increaseCalc(stats.todayDeaths, stats.deaths) ===
                                "0.00"
                                ? ""
                                : `${increaseCalc(
                                    stats.todayDeaths,
                                    stats.deaths
                                  )}%`}
                            </small>
                          </span>
                        </>
                      )}
                    </div>
                  </h6>
                </div>
                <div
                  className="col-4"
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                ></div>
              </div>
            )}

            <div className="row">
              <div
                className="col-4"
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
              >
                <h6>
                  <small className="muted-text">Cases Per Million</small>
                  <br />
                  <div className="text-bolder text-primary">
                    <NumberFormat
                      value={stats.casesPerOneMillion}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </div>
                </h6>
              </div>
              <div
                className="col-4"
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
              >
                <h6>
                  <small className="muted-text">Deaths Per Million</small>
                  <br />
                  <div className="text-bolder text-primary">
                    <NumberFormat
                      value={stats.deathsPerOneMillion}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </div>
                </h6>
              </div>
              <div
                className="col-4"
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
              >
                <h6>
                  <small className="muted-text">Tests Per Million</small>
                  <br />
                  <div className="text-bolder text-primary">
                    <NumberFormat
                      value={stats.testsPerOneMillion}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale='0'
                      decimalSeparator=''
                    />
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted text-right" style={{padding:'0.2rem .5rem'}}>
          <small> Updated {updated} </small>
        </div>
      </div>
    </>
  );
};
