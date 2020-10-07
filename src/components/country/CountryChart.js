import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Area,
  ComposedChart,
} from "recharts";
import * as moment from "moment";
import { FaArrowUp } from "react-icons/fa";
import NumberFormat from "react-number-format";

export const CountryChart = () => {
  const { countryHistory, nation } = useContext(GlobalContext);
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  let data = [];

  if (countryHistory !== []) {
    for (let key in countryHistory) {
      let cases = countryHistory[key].total_cases;
      let deaths = countryHistory[key].total_deaths;
      let newCases = countryHistory[key].new_daily_cases;
      let newDeaths = countryHistory[key].new_daily_deaths;

      data.push({
        date: moment(moment(key, "MM/DD/YYYY").toISOString()).format("D/M"),
        Cases: cases,
        Deaths: deaths,
        "New Deaths": newDeaths,
        "New Cases": newCases,
      });
    }
  }
  let shortData = data.splice(-31);
  shortData = shortData.filter((date) => !(date.date === "Invalid date"));

  const calcIncrease = (oldNum, newNum) => {
    if (oldNum === 0) {
      return null;
    }
    return ((newNum / oldNum) * 100).toFixed(0) - 100;
  };

  const formatYAxis = (tickItem) => {
    return tickItem.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  if (data.length === 0) {
    return <></>;
  } else {
    return (
      <>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="alert alert-dismissible alert-primary">
              <strong className="text-uppercase">{nation.country} Cases</strong>{" "}
              - Last 30 days
              <span className="float-right">
                <FaArrowUp></FaArrowUp>{" "}
                <NumberFormat
                  value={calcIncrease(shortData[0].Cases, shortData[28].Cases)}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                %
              </span>
            </div>
            <ResponsiveContainer Width="99%" aspect={1.9}>
              <ComposedChart data={shortData}>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: "0.7em", fill: "#2C72EA" }}
                />
                <YAxis
                  tick={{ fontSize: "0.7em", fill: "#2C72EA" }}
                  tickFormatter={formatYAxis}
                  orientation="right"
                  dx={1}
                />

                <Tooltip
                  formatter={(value) =>
                    new Intl.NumberFormat("en").format(value)
                  }
                />
                <Legend />

                <Line type="monotone" dataKey="Cases" stroke="#02B875" />
                <Area
                  type="monotone"
                  dataKey="New Cases"
                  fill="#4682ec"
                  stroke="#4682ec"
                />
                {/* <Line type="monotone" dataKey="Deaths" stroke="#D23430" /> */}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="alert alert-dismissible alert-primary">
              <strong className="text-uppercase">
                {nation.country} Deaths
              </strong>{" "}
              - Last 30 days{" "}
              {shortData[0].Deaths === 0 ? (
                ""
              ) : (
                <span className="float-right">
                  <FaArrowUp></FaArrowUp>{" "}
                  <NumberFormat
                    value={calcIncrease(
                      shortData[0].Deaths,
                      shortData[28].Deaths
                    )}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  %
                </span>
              )}
            </div>
            <ResponsiveContainer Width="99%" aspect={1.9}>
              <ComposedChart data={shortData}>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: "0.7em", fill: "#2C72EA" }}
                />
                <YAxis
                  tick={{ fontSize: "0.7em", fill: "#2C72EA" }}
                  tickFormatter={formatYAxis}
                  orientation="right"
                  dx={1}
                />

                <Tooltip
                  formatter={(value) =>
                    new Intl.NumberFormat("en").format(value)
                  }
                />
                <Legend />

                {/* <Line type="monotone" dataKey="Cases" stroke="#02B875" /> */}
                <Line type="monotone" dataKey="Deaths" stroke="#D23430" />
                <Area
                  type="monotone"
                  dataKey="New Deaths"
                  fill="#4682ec"
                  stroke="#4682ec"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
  }
};
