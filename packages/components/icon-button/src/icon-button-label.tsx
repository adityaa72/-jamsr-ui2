"use client";
import { useIconButtonContext } from "./icon-button-context";

export const IconButtonLabel = () => {
  const { getLabelProps, label } = useIconButtonContext();
  return <span {...getLabelProps({})}>{label}</span>;
};
