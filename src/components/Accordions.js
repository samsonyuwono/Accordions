import React, { useState, useEffect } from "react";
import AccordionSection from "./AccordionSection";
import CollapseButton from "./buttons/CollapseButton";
import { useFetch } from "../hooks/useFetch";
import { config } from "../config.js";
import "../styles/Accordion.css";

export default function Accordions(props) {
  const [activeIndexes, setActiveIndexes] = useState({
    [config.initialExpandedPanel]: true
  });
  const [disabled, setDisabled] = useState(false);
  const [collapse, setCollapse] = useState(
    config.initialExpandedPanel > -1 || config.minPanelCount > 0 ? false : true
  );

  const toggleAccordion = (index) => {
    let panelExpandOption;

    if (config.maxExpandedPanelCount === 1) {
      panelExpandOption = [];
    } else if (config.maxExpandedPanelCount === -1) {
      panelExpandOption = activeIndexes;
    }

    setActiveIndexes({
      ...panelExpandOption,
      [index]: !activeIndexes[index]
    });
  };

  const collapseAll = () => {
    setCollapse(!collapse);
    setActiveIndexes({});
  };

  const disable = () => {
    if (config.maxExpandedPanelCount === 0) {
      setDisabled(true);
      setActiveIndexes({});
    }
  };

  useEffect(() => {
    if (config.maxExpandedPanelCount === 0) disable();
  }, []);

  const url = "https://jsonplaceholder.typicode.com/posts/?_limit=";

  const [data, loading] = useFetch(`${url}` + config.fetchCount);

  return (
    <div>
      <CollapseButton collapseAll={collapseAll} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="accordion-container">
          <AccordionSection
            activeIndexes={activeIndexes}
            data={data}
            disabled={disabled}
            loading={loading}
            toggleAccordion={toggleAccordion}
            maxPanel={props.current}
          />
        </div>
      )}
    </div>
  );
}
