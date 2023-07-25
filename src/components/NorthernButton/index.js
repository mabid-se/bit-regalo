import React from "react";
import classes from "./styles.module.scss";

const NorthernButton = ({ kind, text, styles, onClick }) => {
  return (
    <span
      // className={["nt-btn " + kind]}
      className={`${classes.nt_btn} ${classes[kind]}`}
      style={{ ...styles }}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default NorthernButton;
