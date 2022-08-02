import * as React from "react";

const Rectangle = (props) => (
  <svg
    width={120}
    height={205}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#3C3C3C" d="M1.385 18.007h117.736v168.986H1.385z" />
    <path d="M0 17.391 91.419 0v205L0 187.609V17.391Z" fill="#939598" />
    <path
      opacity={0.44}
      fill="url(#a)"
      d="M91.419 18.007h20.777v168.986H91.419z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={112.196}
        y1={43.632}
        x2={91.908}
        y2={43.632}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C3C" />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default Rectangle;
