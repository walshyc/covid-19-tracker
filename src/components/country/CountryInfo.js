import React from "react";
import NumberFormat from "react-number-format";
import FlagIcon from "../layout/FlagIcon.js";
import { FaArrowUp } from "react-icons/fa";

export const CountryInfo = ({ nation }) => {
  const increaseCalc = (newNum, totalNum) => {
    const oldNum = totalNum - newNum;
    const increase = (((totalNum - oldNum) / oldNum) * 100).toFixed();
    return increase;
  };

  return (
    <>
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h4 className="card-title">
            {nation.country === "" ? (
              ""
            ) : (
              <span
                className={
                  nation.countryInfo.iso2 === null
                    ? ""
                    : `flag-icon flag-icon-${nation.countryInfo.iso2.toLowerCase()} flag-icon-lg`
                }
              ></span>
            )}{" "}
            <span className="align-top text-primary">{nation.country}</span>
          </h4>
          <div className="row pb-3">
            <div className="col-4">
              <h5>
                <small className="muted-text">Cases</small>
                <br />
                <div className="text-bolder text-primary">
                  <NumberFormat
                    value={nation.cases}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
              </h5>
            </div>
            <div className="col-4">
              <h5>
                <small className="muted-text">Deaths</small>
                <br />
                <div className="text-bolder text-primary">
                  <NumberFormat
                    value={nation.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
              </h5>
            </div>
            <div className="col-4">
              <h5>
                <small className="muted-text">Tests</small>
                <br />
                <div className="text-bolder text-primary">
                  <NumberFormat
                    value={nation.tests}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
              </h5>
            </div>
          </div>
          {nation.todayCases === 0 && nation.todayDeaths === 0 ? (
            ""
          ) : (
            <div className="row pb-3">
              <div className="col-4">
                <h5>
                
                  <small className="muted-text">New Cases</small>
                  <br />
                  <div className="text-bolder text-primary">
                    {nation.todayCases === 0 ? (
                      ""
                    ) : (
                      <>
                        <NumberFormat
                          value={nation.todayCases}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        <span>
                          <small
                            className="text-primary font-weight-normal"
                            style={{ fontSize: "60%", paddingLeft: "5px", verticalAlign:'middle' }}
                          ><FaArrowUp></FaArrowUp> {' '}
                            {isNaN(
                              increaseCalc(nation.todayCases, nation.cases)
                            ) ||
                            increaseCalc(nation.todayCases, nation.cases) ===
                              "0.00"
                              ? ""
                              : `${increaseCalc(
                                  nation.todayCases,
                                  nation.cases
                              )}%`}
                          </small>
                        </span>
                      </>
                    )}
                  </div>
                </h5>
              </div>
              <div className="col-4">
                <h5>
                  <small className="muted-text">New Deaths</small>
                  <br />
                  <div className="text-bolder text-primary">
                  {nation.todayDeaths === 0 ? (
                      ""
                    ) : (
                      <>
                        <NumberFormat
                          value={nation.todayDeaths}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        <span>
                          <small
                            className="text-primary font-weight-normal"
                            style={{ fontSize: "60%", paddingLeft: "5px", verticalAlign:'middle' }}
                          ><FaArrowUp></FaArrowUp> {' '}
                            {isNaN(
                              increaseCalc(nation.todayDeaths, nation.deaths)
                            ) ||
                            increaseCalc(nation.todayDeaths, nation.deaths) ===
                              "0.00"
                              ? ""
                              : `${increaseCalc(
                                  nation.todayDeaths,
                                  nation.deaths
                              )}%`}
                          </small>
                        </span>
                      </>
                    )}
                  </div>
                </h5>
              </div>
              <div className="col-4">
              <h6>
                <small className="muted-text">Case Fatality Rate</small>
                <br />
                <div className="text-bolder text-primary">
                  <NumberFormat
                    value={increaseCalc(nation.deaths,nation.cases)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />%
                </div>
              </h6>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-4">
              <h6>
                <small className="muted-text">Cases Per Million</small>
                <br />
                <div className="text-bolder text-primary">
                <NumberFormat value={nation.casesPerOneMillion} displayType={'text'} thousandSeparator={true} />
                </div>
              </h6>
            </div>
            <div className="col-4">
              <h6>
                <small className="muted-text">Deaths Per Million</small>
                <br />
                <div className="text-bolder text-primary">
                <NumberFormat value={nation.deathsPerOneMillion} displayType={'text'} thousandSeparator={true} />
                </div>
              </h6>
            </div>
            <div className="col-4">
              <h6>
                <small className="muted-text">Tests Per Million</small>
                <br />
                <div className="text-bolder text-primary">
                <NumberFormat value={nation.testsPerOneMillion} displayType={'text'} thousandSeparator={true} />
                </div>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
