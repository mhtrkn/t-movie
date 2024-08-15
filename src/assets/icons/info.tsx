import * as React from "react"
import { SVGProps } from "react"
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="transparent" d="M0 0h24v24H0z" />
    <circle
      cx={12}
      cy={12}
      r={9}
      stroke={props?.color ?? "#212121"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      stroke={props?.color ?? "#212121"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 11v6M11.75 8V7h.5v1h-.5Z"
    />
  </svg>
)
export default InfoIcon
