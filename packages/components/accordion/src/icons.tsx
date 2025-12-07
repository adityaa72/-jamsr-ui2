"use client";
import type { SVGProps } from "react";

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
