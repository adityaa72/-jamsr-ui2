export const dataAttrDev = (value: string) =>
  process.env.NODE_ENV === "production" ? undefined : value;

export const isDisabledElement = (element: HTMLElement) =>
  element.getAttribute("disabled") !== null ||
  element.getAttribute("aria-disabled") !== null ||
  element.getAttribute("data-disabled") !== null;

type Booleanish = boolean | "true" | "false";
export const dataAttr = (condition: boolean | undefined) =>
  (condition ? "true" : undefined) as Booleanish;
