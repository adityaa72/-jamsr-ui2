import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import type {ClassValue} from "clsx";

const tw = extendTailwindMerge({
  extend: {
    classGroups: {
      gap: ["gap-responsive"],
      "font-size": ["text-size-inherit"],
      shadow: ["shadow-card"],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return tw(clsx(inputs));
};
