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

export const GlobalChart = () => {
  const { getGlobalHistory, globalHistory } = useContext(GlobalContext);
  useEffect(() => {
    getGlobalHistory();
    // eslint-disable-next-line
  }, []);

  let data = [];
  if (globalHistory !== "") {
    for (let key in globalHistory.cases) {
      let cases = globalHistory.cases[key];
      let deaths = globalHistory.deaths[key];

      data.push({
        date: moment(new Date(key).toISOString()).format("D/M"),
        Cases: cases,
        Deaths: deaths,
      });
    }
  }


  data.splice(0, [data.length - 30]);

  const formatXAxis = (tickItem) => {
    return tickItem;
  };

  return (
    <>
      <div className="alert alert-dismissible alert-primary">
        <strong className='text-uppercase'>Worldwide</strong> - Last 30 days
      </div>
      <ResponsiveContainer Width="99%" aspect={1.9}>
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: "0.7em", fill:'#2C72EA' }} />
          <YAxis
            tick={{ fontSize: "0.7em", fill:'#2C72EA' }}
            tickFormatter={formatXAxis}
            orientation="right"
            dx={1}
          />

          <Tooltip
            formatter={(value) => new Intl.NumberFormat("en").format(value)}
          />
          <Legend />

          <Line type="monotone" dataKey="Cases" stroke="#02B875" />
          <Line type="monotone" dataKey="Deaths" stroke="#D23430" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
