import React from "react";
import classes from "./styles.module.scss";

const MouseScroll = () => {
  return (
    <div class={classes.mouseScrollWrapper}>
      <div class={classes.mouse}>
        <div class={classes.scroller}></div>
      </div>
    </div>
  );
};

export default MouseScroll;
