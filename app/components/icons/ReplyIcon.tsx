// ToDo: Replace it @radix-ui/icons
// system-uiicons:jump-left
import type { SVGProps } from "react";

export default function ReplyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15.5 14.5v-2a3 3 0 0 0-3-3h-8"></path>
        <path d="m7.5 12.5l-3.001-3l3.001-3"></path>
      </g>
    </svg>
  );
}
