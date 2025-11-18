import React from "react";

function TrafficLight({ color, active }) {
  return (
    <div
      className="TrafficLight"
      style={{
        backgroundColor: active ? color : "darkgrey",
      }}
    ></div>
  );
}

export default TrafficLight;
