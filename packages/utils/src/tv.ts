import { removeAttrsFromObject } from "./object";

export const mapPropsVariants = <
  T extends object,
  R extends readonly (keyof T)[],
>(
  props: T,
  variantKeys: R
): [Omit<T, R[number]>, Pick<T, R[number]>] => {
  const propsWithKeysRemoved = removeAttrsFromObject(props, [...variantKeys]);

  const removedKeys: Pick<T, R[number]> = {} as Pick<T, R[number]>;
  variantKeys.forEach((key) => {
    if (key in props) {
      removedKeys[key] = props[key];
    }
  });

  return [propsWithKeysRemoved, removedKeys];
};

export const radiusBaseVariant = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
  none: "rounded-none",
} as const;

export const radiusVariant = (name: string | string[]) => {
  const keys = Array.isArray(name) ? name : [name];
  const value = (className: string) =>
    keys.reduce((acc, key) => ({ ...acc, [key]: className }), {});

  return {
    sm: value("rounded"),
    md: value("rounded-md"),
    lg: value("rounded-lg"),
    xl: value("rounded-xl"),
    "2xl": value("rounded-2xl"),
    "3xl": value("rounded-3xl"),
    full: value("rounded-full"),
    none: value("rounded-none"),
  };
};
