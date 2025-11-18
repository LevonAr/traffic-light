import React from "react";
import "./traffic-light.css";
import TrafficLight from "./TrafficLight";

function TrafficLightContainer({ activeColor }) {
  return (
    <div className="TrafficLightContainer">
      <TrafficLight color="red" active={activeColor === "red"} />
      <TrafficLight color="yellow" active={activeColor === "yellow"} />
      <TrafficLight color="green" active={activeColor === "green"} />
    </div>
  );
}

export default TrafficLightContainer;


