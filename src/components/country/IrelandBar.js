import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { AutoSizer } from "react-virtualized";
import { Bar } from "nivo";

export const IrelandBar = () => {
  const { irlStats } = useContext(GlobalContext);
  const data = [
    {
      ageGroup: "<1",
      Cases: irlStats.Aged1,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "1 to 4",
      Cases: irlStats.Aged1to4,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "5 to 14",
      Cases: irlStats.Aged5to14,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "15 to 24",
      Cases: irlStats.Aged15to24,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "25 to 34",
      Cases: irlStats.Aged25to34,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "35 to 44",
      Cases: irlStats.Aged35to44,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "45 to 54",
      Cases: irlStats.Aged45to54,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "55 to 64",
      Cases: irlStats.Aged55to64,
      CasesColor: "hsl(290, 70%, 50%)",
    },
    {
      ageGroup: "65+",
      Cases: irlStats.Aged65up,
      CasesColor: "hsl(290, 70%, 50%)",
    },
  ];
  const theme = {
    axisBottom: {
      fontSize: ".75em",
    },
  };
  return (
    <>
      <AutoSizer>
        {({ height, width }) => (
          <Bar
            theme={theme}
            layout="vertical"
            height={height}
            width={width}
            legends={[
              {
                symbolSize: 6,
                itemTextColor: "#eee", // <= this worked for me in the end
              },
            ]}
            data={data}
            keys={["Cases"]}
            indexBy="ageGroup"
            margin={{ top: 20, right: 50, bottom: 60, left: 60 }}
            padding={0.05}
            enableLabel={false}
            colors={["hsl(218, 81%, 60%)"]}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "#111111",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "#111111",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderColor="#000000"
            axisTop={null}
            axisRight={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              // tickValues: [500, 1000, 1500, 2000, 2500, 3000, 3500],
              legendPosition: "center",
              legendOffset: 36,
            }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,

              legendPosition: "center",
              legendOffset: 0,
            }}
            enableGridY={false}
            labelSkipHeight={12}
            labelTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        )}
      </AutoSizer>
    </>
  );
};
