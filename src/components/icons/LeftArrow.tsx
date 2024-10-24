import React from "react";
import type { SVGProps } from "react";

export function LeftArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
      ></path>
    </svg>
  );
}
