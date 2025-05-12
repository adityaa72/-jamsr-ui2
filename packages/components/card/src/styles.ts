import { tv, VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const cardVariants = tv({
  slots: {
    base: "",
    header: "",
    title: "",
    description: "",
    footer: "",
    headerContent: "",
    content: "",
  },
  variants: {},
  defaultVariants: {},
});

export type CardVariants = VariantProps<typeof cardVariants>;
