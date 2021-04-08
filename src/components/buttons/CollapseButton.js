import React from "react";
import "../../styles/Button.css";

const CollapseButton = ({ collapseAll }) => {
  return (
    <button className="button collapse-all" onClick={collapseAll}>
      Collapse All
    </button>
  );
};

export default CollapseButton;
