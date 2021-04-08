import React from "react";
import "../styles/Accordion.css";

const AccordionTitle = ({ title, index }) => {
  return (
    <p className="accordion-title" id={index}>
      {title}
    </p>
  );
};

export default AccordionTitle;
