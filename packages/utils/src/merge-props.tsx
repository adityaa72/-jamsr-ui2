import React from "react";

export const mergeProps = <Element extends React.ElementType>(
  ...propsArray: React.ComponentProps<Element>[]
): React.ComponentPropsWithoutRef<Element> => {
  const mergedProps = Object.assign({}, ...propsArray);

  // Collect and concatenate classNames
  const classNames = propsArray.map((prop) => prop.className).filter(Boolean);
  if (classNames.length > 0) {
    mergedProps.className = classNames.join(" ");
  }

  // Merge styles
  const styles = propsArray.map((prop) => prop.style).filter(Boolean);
  if (styles.length > 0) {
    mergedProps.style = Object.assign({}, ...styles);
  }

  // Find all event handler keys
  const eventKeys = new Set<string>();
  propsArray.forEach((prop) => {
    Object.keys(prop).forEach((key) => {
      if (key.startsWith("on") && typeof prop[key] === "function") {
        eventKeys.add(key);
      }
    });
  });

  // Combine event handlers from right to left
  eventKeys.forEach((key) => {
    const handlers = propsArray
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
