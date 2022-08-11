import * as React from "react";

const Vector = (props) => (
  <svg
    width={10}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.5 14 8 7.5 1.5 1" stroke="#231F20" strokeWidth={2.5} />
  </svg>
);

export default Vector;
