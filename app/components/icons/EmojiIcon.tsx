// ToDo: Replace it @radix-ui/icons
// system-uiicons:face-happy
import type { SVGProps } from "react";

export default function EmojiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      {...props}
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <circle
          cx={8.5}
          cy={8.5}
          r={8}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle cx={6} cy={6} r={1} fill="currentColor"></circle>
        <circle cx={11} cy={6} r={1} fill="currentColor"></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 9.5c.603 1.333 1.603 2 3 2s2.397-.667 3-2"
        ></path>
      </g>
    </svg>
  );
}
