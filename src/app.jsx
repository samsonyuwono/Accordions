import React, { useState } from "react";
import Accordions from "./components/Accordions.js";
import ShowLessButton from "./components/buttons/ShowLessButton";
import ShowMoreButton from "./components/buttons/ShowMoreButton";
import { config } from "./config";

export const App = () => {
  let [current, setCurrent] = useState(config.initialPanelCount);

  return (
    <div className="App">
      <ShowMoreButton
        increase={() => current < config.maxPanelCount && setCurrent(++current)}
      />
      <ShowLessButton
        decrease={() => current > config.minPanelCount && setCurrent(--current)}
      />
      <Accordions current={current} />
    </div>
  );
};
