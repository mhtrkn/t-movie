import * as React from "react";
import { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M3.75 11a7.25 7.25 0 1 1 12.457 5.044.763.763 0 0 0-.163.163A7.25 7.25 0 0 1 3.75 11zm12.884 6.695a8.75 8.75 0 1 1 1.06-1.06l3.836 3.835a.75.75 0 1 1-1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SearchIcon;
