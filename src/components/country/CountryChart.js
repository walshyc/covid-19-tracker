import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
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
  if (countryHistory !== "") {
    for (let key in countryHistory.cases) {
      let cases = countryHistory.cases[key];
      let deaths = countryHistory.deaths[key];

      data.push({
        date: moment(new Date(key).toISOString()).format("D/M"),
        Cases: cases,
        Deaths: deaths,
      });
    }
  }


  const calcIncrease = (oldNum, newNum) => {
    if (oldNum === 0) {
      return null;
    }
    return ((newNum / oldNum) * 100).toFixed(0) - 100;
  };

  const formatYAxis = (tickItem) => {
    return tickItem.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  if (data !== []) {
    return (
      <>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="alert alert-dismissible alert-primary">
              <strong className="text-uppercase">{nation.country} Cases</strong>{" "}
              - Last 30 days{" "}
              {data[0].Cases === 0 ? (
                ""
              ) : (
                <span className="float-right">
                  <FaArrowUp></FaArrowUp>{" "}
                  <NumberFormat
                    value={calcIncrease(data[0].Cases, data[29].Cases)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  %
                </span>
              )}
            </div>
            <ResponsiveContainer Width="99%" aspect={1.9}>
              <LineChart data={data}>
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
                {/* <Line type="monotone" dataKey="Deaths" stroke="#D23430" /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="alert alert-dismissible alert-primary">
              <strong className="text-uppercase">
                {nation.country} Deaths
              </strong>{" "}
              - Last 30 days{" "}
              {data[0].Deaths === 0 ? (
                ""
              ) : (
                <span className="float-right">
                  <FaArrowUp></FaArrowUp>{" "}
                  <NumberFormat
                    value={calcIncrease(data[0].Deaths, data[29].Deaths)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  %
                </span>
              )}
            </div>
            <ResponsiveContainer Width="99%" aspect={1.9}>
              <LineChart data={data}>
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
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
  } else return <></>;
};
