type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type Variant = "solid" | "bordered" | "text" | "light" | "flat";

const solidClasses = {
  default:
    "bg-default border-default text-default-foreground ui-hover:bg-default-hover",
  primary:
    "bg-primary border-primary text-primary-foreground ui-hover:bg-primary-hover",
  secondary:
    "bg-secondary border-secondary text-secondary-foreground ui-hover:bg-secondary-hover",
  success:
    "bg-success border-success text-success-foreground ui-hover:bg-success-hover",
  warning:
    "bg-warning border-warning text-warning-foreground ui-hover:bg-warning-hover",
  danger:
    "bg-danger border-danger text-danger-foreground ui-hover:bg-danger-hover",
} satisfies Record<Color, string>;

const borderedClasses = {
  default:
    "bg-transparent border-default text-foreground ui-hover:bg-default-subtle",
  primary:
    "bg-transparent border-primary text-primary ui-hover:bg-primary-subtle",
  secondary:
    "bg-transparent border-secondary text-secondary ui-hover:bg-secondary-subtle",
  success:
    "bg-transparent border-success text-success ui-hover:bg-success-subtle",
  warning:
    "bg-transparent border-warning text-warning ui-hover:bg-warning-subtle",
  danger: "bg-transparent border-danger text-danger ui-hover:bg-danger-subtle",
} satisfies Record<Color, string>;

const textClasses = {
  default: "text-foreground ui-hover:opacity-90",
  primary: "text-primary ui-hover:text-primary-hover",
  secondary: "text-secondary ui-hover:text-secondary-hover",
  success: "text-success ui-hover:text-success-hover",
  warning: "text-warning ui-hover:text-warning-hover",
  danger: "text-danger ui-hover:text-danger-hover",
} satisfies Record<Color, string>;

const lightClasses = {
  default:
    "bg-transparent text-foreground ui-hover:bg-default-subtle-hover ui-hover:text-foreground",
  primary:
    "bg-transparent text-primary ui-hover:bg-primary-subtle-hover ui-hover:text-primary",
  secondary:
    "bg-transparent text-secondary ui-hover:bg-secondary-subtle-hover ui-hover:text-secondary",
  success:
    "bg-transparent text-success ui-hover:bg-success-subtle-hover ui-hover:text-success",
  warning:
    "bg-transparent text-warning ui-hover:bg-warning-subtle-hover ui-hover:text-warning",
  danger:
    "bg-transparent text-danger ui-hover:bg-danger-subtle-hover ui-hover:text-danger",
} satisfies Record<Color, string>;

const flatClasses = {
  default: "bg-default-subtle-hover text-foreground ui-hover:bg-default-subtle",
  primary: "bg-primary-subtle-hover text-primary ui-hover:bg-primary-subtle",
  secondary: "bg-secondary-subtle-hover text-secondary ui-hover:bg-secondary-subtle",
  success: "bg-success-subtle-hover text-success ui-hover:bg-success-subtle",
  warning: "bg-warning-subtle-hover text-warning ui-hover:bg-warning-subtle",
  danger: "bg-danger-subtle-hover text-danger ui-hover:bg-danger-subtle",
} satisfies Record<Color, string>;

export const colorVariants = {
  solid: solidClasses,
  bordered: borderedClasses,
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
  "bordered",
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
  "focus-visible:outline-primary",
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
