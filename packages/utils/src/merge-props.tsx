// eslint-disable

import { cn } from "./cn";

export const mergeProps = <T extends Record<string, any>>(
  ...props: (T | undefined)[]
): T => {
  const propsValues = props.filter(Boolean) as T[];
  const mergedProps = Object.assign({}, ...propsValues);

  // Handle classNames (object with keys like title, content)
  const classNamesObjects = propsValues
    .map((prop) => prop.classNames)
    .filter(Boolean);
  if (classNamesObjects.length > 0) {
    mergedProps.classNames = {};
    const allKeys = new Set(
      classNamesObjects.flatMap((obj) => Object.keys(obj))
    );
    allKeys.forEach((key) => {
      const classes = classNamesObjects.map((obj) => obj[key]).filter(Boolean);
      if (classes.length > 0) {
        mergedProps.classNames[key] = cn(classes.join(" "));
      }
    });
  }

  // Handle slotProps (object with keys like title, description, base)
  if (mergedProps.slots) {
    mergedProps.slots = propsValues.reduce(
      (acc, prop) => ({
        ...acc,
        ...prop.slots,
      }),
      {}
    );
  }

  // Handle className (string)
  const classNames = propsValues.map((prop) => prop.className).filter(Boolean);
  if (classNames.length > 0) {
    mergedProps.className = cn(classNames.join(" "));
  }

  // Handle style
  const styles = propsValues.map((prop) => prop.style).filter(Boolean);
  if (styles.length > 0) {
    mergedProps.style = Object.assign({}, ...styles);
  }

  // Handle event handlers
  const eventKeys = new Set<string>();
  propsValues.forEach((prop) => {
    Object.keys(prop).forEach((key) => {
      if (key.startsWith("on") && typeof prop[key] === "function") {
        eventKeys.add(key);
      }
    });
  });
  eventKeys.forEach((key) => {
    const handlers = propsValues
      .map((prop) => prop[key])
      .filter(Boolean)
      .reverse();
    if (handlers.length > 0) {
      mergedProps[key] = (event: any) => {
        handlers.forEach((handler) => handler(event));
      };
    }
  });

  return mergedProps;
};

export const mergeConfigProps = <
  P extends Record<string, any>,
  T extends P & {
    props?: (props: Partial<P>) => P;
    omitProps?: string[];
    slots?: Record<string, any>;
  },
>(
  defaultValues: P,
  globalConfig: Partial<T>,
  props: P
): P => {
  const { props: configProps, omitProps, slots, ...restProps } = globalConfig;
  const actualProps = omitProps?.length
    ? Object.fromEntries(
        Object.entries(props).filter(([key]) => !omitProps.includes(key))
      )
    : props;

  // @ts-expect-error tserror
  const mergedProps = mergeProps(defaultValues, restProps, props);
  // @ts-expect-error tserror
  return mergeProps(restProps, configProps?.(mergedProps), actualProps);
};
