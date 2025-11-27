"use client";

import { useButtonContext } from "./button-context";
import { LoadingSpinner } from "./spinner";

export const ButtonLoading = (props: ButtonLoading.Props) => {
  const { children = <LoadingSpinner /> } = props;
  const { isLoading } = useButtonContext();
  return (
    <span className={isLoading ? "" : "hidden"}>
      {isLoading ? children : null}
    </span>
  );
};

export namespace ButtonLoading {
  export interface Props {
    children?: React.ReactNode;
  }
}
