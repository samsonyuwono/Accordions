import React from "react";
import "../../styles/Button.css";

const ShowLessButton = ({ decrease }) => {
  return (
    <button className="button show-less" onClick={decrease}>
      Show Less -
    </button>
  );
};

export default ShowLessButton;
