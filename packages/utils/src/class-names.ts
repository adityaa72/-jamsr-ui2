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
    "bg-primary border border-primary text-primary-foreground ui-hover:bg-primary-hover",
  secondary:
    "bg-secondary border border-secondary text-secondary-foreground ui-hover:bg-secondary-hover",
  success:
    "bg-success border border-success text-success-foreground ui-hover:bg-success-hover",
  warning:
    "bg-warning border border-warning text-warning-foreground ui-hover:bg-warning-hover",
  danger:
    "bg-danger border border-danger text-danger-foreground ui-hover:bg-danger-hover",
} satisfies Record<Color, string>;

const outlinedClasses = {
  default:
    "bg-transparent border-default text-foreground ui-hover:bg-default-fill",
  primary: "bg-transparent border-primary text-primary ui-hover:bg-primary-fill",
  secondary:
    "bg-transparent border-secondary text-secondary ui-hover:bg-secondary-fill",
  success: "bg-transparent border-success text-success ui-hover:bg-success-fill",
  warning: "bg-transparent border-warning text-warning ui-hover:bg-warning-fill",
  danger: "bg-transparent border-danger text-danger ui-hover:bg-danger-fill",
} satisfies Record<Color, string>;

const textClasses = {
  default: "text-foreground ui-hover:text-foreground-active",
  primary: "text-primary ui-hover:text-primary-active",
  secondary: "text-secondary ui-hover:text-secondary-active",
  success: "text-success ui-hover:text-success-active",
  warning: "text-warning ui-hover:text-warning-active",
  danger: "text-danger ui-hover:text-danger-active",
} satisfies Record<Color, string>;

const lightClasses = {
  default:
    "bg-transparent text-foreground ui-hover:bg-default-fill ui-hover:text-default-foreground",
  primary:
    "bg-transparent text-primary ui-hover:bg-primary-fill ui-hover:text-primary-foreground",
  secondary:
    "bg-transparent text-secondary ui-hover:bg-secondary-fill ui-hover:text-secondary-foreground",
  success:
    "bg-transparent text-success ui-hover:bg-success-fill ui-hover:text-success-foreground",
  warning:
    "bg-transparent text-warning ui-hover:bg-warning-fill ui-hover:text-warning-foreground",
  danger:
    "bg-transparent text-danger ui-hover:bg-danger-fill ui-hover:text-danger-foreground",
} satisfies Record<Color, string>;

const flatClasses = {
  default: "bg-default-fill text-default-foreground ui-hover:bg-default",
  primary: "bg-primary-fill text-primary-foreground ui-hover:bg-primary",
  secondary:
    "bg-secondary-fill text-secondary-foreground ui-hover:bg-secondary",
  success: "bg-success-fill text-success-foreground ui-hover:bg-success",
  warning: "bg-warning-fill text-warning-foreground ui-hover:bg-warning",
  danger: "bg-danger-fill text-danger-foreground ui-hover:bg-danger",
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

/**
 * focus classNames when the element is focused by keyboard.
 */
export const focusVisibleClasses = [
  "focus-visible:outline-solid",
  "focus-visible:z-10",
  "focus-visible:outline-2",
  "focus-visible:outline-focus",
  "focus-visible:outline-offset-2",
];

export const dataFocusVisibleClasses = [
  "outline-none",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-solid",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2",
];

export const groupDataFocusVisibleClasses = [
  "outline-none",
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:ring-2",
  "group-data-[focus-visible=true]:ring-focus",
  "group-data-[focus-visible=true]:ring-offset-2",
  "group-data-[focus-visible=true]:ring-offset-background",
];

export const ringClasses = [
  "outline-none",
  "ring-2",
  "ring-focus",
  "ring-offset-2",
  "ring-offset-background",
];

/**
 * This classes centers the element by using absolute positioning.
 */
export const translateCenterClasses = [
  "absolute",
  "top-1/2",
  "left-1/2",
  "-translate-x-1/2",
  "-translate-y-1/2",
];

export const absoluteFullClasses = ["absolute", "inset-0"];
