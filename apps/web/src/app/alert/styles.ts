"use client";

import { alertStyles } from "@jamsr-ui/alert";
import { tv } from "@jamsr-ui/utils";

export const alertStylesCustom = tv({
  extend: alertStyles,
  slots: {
    root: "bg-red-500",
    title: "bg-blue-500",
    description: "bg-lime-500",
    content: "bg-yellow-500",
  },
});
