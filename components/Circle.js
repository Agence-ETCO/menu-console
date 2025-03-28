import * as React from "react";

const Circle = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={7} cy={7} r={7} fill="#F5BA18" />
  </svg>
);

export default Circle;
