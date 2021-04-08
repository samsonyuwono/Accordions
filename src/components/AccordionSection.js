import React from "react";
import AccordionIcon from "./AccordionIcon";
import AccordionTitle from "./AccordionTitle";
import AccordionParagraph from "./AccordionParagraph";
import "../styles/Accordion.css";

const AccordionSection = ({
  activeIndexes,
  data,
  toggleAccordion,
  disabled,
  maxPanel
}) => {
  return (
    <div>
      {data.map(({ title, body }, index) => {
        if (index >= maxPanel) return;
        return (
          <div key={index} className="accordion-section">
            <div
              className={
                disabled === true
                  ? "toggle-accordion disabled"
                  : "toggle-accordion"
              }
              onClick={() => {
                !disabled && toggleAccordion(index);
              }}
            >
              <AccordionTitle index={index} title={title} />
              <AccordionIcon
                className={
                  activeIndexes[index]
                    ? "accordion-icon rotate"
                    : "accordion-icon"
                }
                fill={"#777"}
              />
            </div>
            <AccordionParagraph
              className={
                activeIndexes[index]
                  ? "accordion-paragraph active"
                  : "accordion-paragraph"
              }
              body={body}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AccordionSection;
