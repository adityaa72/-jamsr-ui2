type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type Variant = "solid" | "outlined" | "text" | "light" | "flat";

const solidClasses = {
  default:
    "bg-default border border-default text-default-foreground ui-hover:bg-default-dark",
  primary:
    "bg-primary border border-primary text-primary-foreground ui-hover:bg-primary-dark",
  secondary:
    "bg-secondary border border-secondary text-secondary-foreground ui-hover:bg-secondary-dark",
  success:
    "bg-success border border-success text-success-foreground ui-hover:bg-success-dark",
  warning:
    "bg-warning border border-warning text-warning-foreground ui-hover:bg-warning-dark",
  danger:
    "bg-danger border border-danger text-danger-foreground ui-hover:bg-danger-dark",
} satisfies Record<Color, string>;

const outlinedClasses = {
  default:
    "bg-transparent border-default text-foreground ui-hover:bg-default-50",
  primary: "bg-transparent border-primary text-primary ui-hover:bg-primary-50",
  secondary:
    "bg-transparent border-secondary text-secondary ui-hover:bg-secondary-50",
  success: "bg-transparent border-success text-success ui-hover:bg-success-50",
  warning: "bg-transparent border-warning text-warning ui-hover:bg-warning-50",
  danger: "bg-transparent border-danger text-danger ui-hover:bg-danger-50",
} satisfies Record<Color, string>;

const textClasses = {
  default: "text-foreground ui-hover:text-foreground-dark",
  primary: "text-primary ui-hover:text-primary-dark",
  secondary: "text-secondary ui-hover:text-secondary-dark",
  success: "text-success ui-hover:text-success-dark",
  warning: "text-warning ui-hover:text-warning-dark",
  danger: "text-danger ui-hover:text-danger-dark",
} satisfies Record<Color, string>;

const lightClasses = {
  default: "bg-transparent text-foreground ui-hover:bg-default-50",
  primary: "bg-transparent text-primary ui-hover:bg-primary-50",
  secondary: "bg-secondary text-secondary ui-hover:bg-secondary-50",
  success: "bg-success text-success ui-hover:bg-success-50",
  warning: "bg-warning text-warning ui-hover:bg-warning-50",
  danger: "bg-danger text-danger ui-hover:bg-danger-50",
} satisfies Record<Color, string>;

const flatClasses = {
  default: "bg-default text-default-foreground ui-hover:bg-default",
  primary: "bg-primary text-primary ui-hover:bg-primary",
  secondary: "bg-secondary text-secondary ui-hover:bg-secondary",
  success: "bg-success text-success ui-hover:bg-success",
  warning: "bg-warning text-warning ui-hover:bg-warning",
  danger: "bg-danger text-danger ui-hover:bg-danger",
} satisfies Record<Color, string>;

export const colorVariants = {
  solid: solidClasses,
  outlined: outlinedClasses,
  text: textClasses,
  light: lightClasses,
  flat: flatClasses,
} satisfies Record<Variant, Record<Color, string>>;

export const allColors: Color[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
export const allVariants: Variant[] = [
  "solid",
  "outlined",
  "text",
  "light",
  "flat",
];
