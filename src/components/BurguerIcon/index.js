import React from "react";
import "./style.css";

export const BurguerIcon = React.forwardRef(({ open, ...props }, ref) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props} ref={ref}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
));