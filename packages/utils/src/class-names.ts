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
    "bg-default border-default text-default-foreground data-hover:bg-default-hover data-pressed:bg-default-active",
  primary:
    "bg-primary border-primary text-primary-foreground data-hover:bg-primary-hover data-pressed:bg-primary-active",
  secondary:
    "bg-secondary border-secondary text-secondary-foreground data-hover:bg-secondary-hover data-pressed:bg-secondary-active",
  success:
    "bg-success border-success text-success-foreground data-hover:bg-success-hover data-pressed:bg-success-active",
  warning:
    "bg-warning border-warning text-warning-foreground data-hover:bg-warning-hover data-pressed:bg-warning-active",
  danger:
    "bg-danger border-danger text-danger-foreground data-hover:bg-danger-hover data-pressed:bg-danger-active",
} satisfies Record<Color, string>;

const borderedClasses = {
  default:
    "bg-transparent border-default text-foreground data-hover:bg-default-flat data-pressed:bg-default-flat-active",
  primary:
    "bg-transparent border-primary text-primary data-hover:bg-primary-flat data-pressed:bg-primary-flat-active",
  secondary:
    "bg-transparent border-secondary text-secondary data-hover:bg-secondary-flat data-pressed:bg-secondary-flat-active",
  success:
    "bg-transparent border-success text-success data-hover:bg-success-flat data-pressed:bg-success-flat-active",
  warning:
    "bg-transparent border-warning text-warning data-hover:bg-warning-flat data-pressed:bg-warning-flat-active",
  danger:
    "bg-transparent border-danger text-danger data-hover:bg-danger-flat data-pressed:bg-danger-flat-active",
} satisfies Record<Color, string>;

const textClasses = {
  default: "text-foreground data-hover:opacity-90",
  primary: "text-primary data-hover:text-primary-hover",
  secondary: "text-secondary data-hover:text-secondary-hover",
  success: "text-success data-hover:text-success-hover",
  warning: "text-warning data-hover:text-warning-hover",
  danger: "text-danger data-hover:text-danger-hover",
} satisfies Record<Color, string>;

const lightClasses = {
  default:
    "bg-transparent text-foreground data-hover:bg-default-flat-hover data-pressed:bg-foreground-flat-active",
  primary:
    "bg-transparent text-primary data-hover:bg-primary-flat-hover data-pressed:bg-primary-flat-active",
  secondary:
    "bg-transparent text-secondary data-hover:bg-secondary-flat-hover data-pressed:bg-secondary-flat-active",
  success:
    "bg-transparent text-success data-hover:bg-success-flat-hover data-pressed:bg-success-flat-active",
  warning:
    "bg-transparent text-warning data-hover:bg-warning-flat-hover data-pressed:bg-warning-flat-active",
  danger:
    "bg-transparent text-danger data-hover:bg-danger-flat-hover data-pressed:bg-danger-flat-active",
} satisfies Record<Color, string>;

const flatClasses = {
  default:
    "bg-default-flat-hover text-foreground data-hover:bg-default-flat data-pressed:bg-default-flat-active",
  primary:
    "bg-primary-flat-hover text-primary data-hover:bg-primary-flat data-pressed:bg-primary-flat-active",
  secondary:
    "bg-secondary-flat-hover text-secondary data-hover:bg-secondary-flat data-pressed:bg-secondary-flat-active",
  success:
    "bg-success-flat-hover text-success data-hover:bg-success-flat data-pressed:bg-success-flat-active",
  warning:
    "bg-warning-flat-hover text-warning data-hover:bg-warning-flat data-pressed:bg-warning-flat-active",
  danger:
    "bg-danger-flat-hover text-danger data-hover:bg-danger-flat data-pressed:bg-danger-flat-active",
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
  "uig-focus-visible:z-10",
  "uig-focus-visible:ring-2",
  "uig-focus-visible:ring-focus",
  "uig-focus-visible:ring-offset-2",
  "uig-focus-visible:ring-offset-background",
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
