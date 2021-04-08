import React from "react";
import "../../styles/Button.css";

const ShowMoreButton = ({ increase }) => {
  return (
    <button className="button show-more" onClick={increase}>
      Show More +
    </button>
  );
};

export default ShowMoreButton;
