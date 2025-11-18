import "./App.css";
import React, { useEffect, useState } from "react";
import TrafficLightContainer from "./components/TrafficLightContainer";

const trafficLightColors = ["green", "yellow", "red"];
const durationsMs = [5000, 1000, 2000]; // green, yellow, red

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCounter((prev) => (prev + 1) % trafficLightColors.length);
    }, durationsMs[counter]);
    return () => clearTimeout(timeoutId);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <TrafficLightContainer activeColor={trafficLightColors[counter]} />
      </header>
    </div>
  );
}

export default App;
