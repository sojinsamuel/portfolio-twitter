import React from "react";
import GaugeChart from "react-gauge-chart";
import MoreInfo from "./MoreInfo";

function SeoMeter() {
  return (
    <div className=" flex flex-col items-center">
      <GaugeChart
        arcWidth={0.2}
        id="gauge-chart2"
        colors={[
          "#FF0000",
          "#FF3300",
          "#FF6600",
          "#FF9900",
          "#FFCC00",
          "#FFFF00",
          "#CCFF00",
          "#99FF00",
          "#66FF00",
          "#33FF00",
          "#00FF00",
        ]}
        nrOfLevels={10}
        percent={0.95}
        textColor="#3498db"
        style={{ width: "500px", height: "300px" }}
      />
      <div className="flex justify-center items-center">
        <p className="text-lg">Improve your Google Light House Score</p>
        <MoreInfo />
      </div>
    </div>
  );
}

export default SeoMeter;
