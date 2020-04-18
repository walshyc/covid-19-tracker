import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { AutoSizer } from "react-virtualized";

import { Pie } from "nivo";

export const IrelandPie = () => {
  const { irlStats } = useContext(GlobalContext);
  const data = [
    {
      id: "Male",
      label: "Male",
      value: irlStats.Male,
      color: "hsl(218, 81%, 60%)",
    },
    {
      id: "Female",
      label: "Female",
      value: irlStats.Female,
      color: "hsl(8, 100%, 68%)",
    },
  ];

  return (
    <>
      <AutoSizer>
        {({ height, width }) => (
          <Pie
            height={height}
            width={width}
            colors={["hsl(218, 81%, 60%)", "hsl(8, 100%, 68%)"]}
            data={data}
            margin={{ top: 20, right: 0, bottom: 80, left: 0 }}
            cornerRadius={0}
            borderWidth={1}
            borderColor="#000000"
            enableRadialLabels={false}
            radialLabel={function (e) {
              return e.label;
            }}
            radialLabelsSkipAngle={0}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={-24}
            radialLabelsLinkDiagonalLength={0}
            radialLabelsLinkHorizontalLength={0}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor="#008000"
            sliceLabel={function (e) {
              return e.id + " (" + (e.value/(irlStats.Male+irlStats.Female)*100).toFixed(0) + "%)";
            }}
            slicesLabelsSkipAngle={0}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        )}
      </AutoSizer>
    </>
  );
};
