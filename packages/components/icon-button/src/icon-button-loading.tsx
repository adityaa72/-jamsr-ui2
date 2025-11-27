"use client";

import { useIconButtonContext } from "./icon-button-context";
import { LoadingSpinner } from "./spinner";

export const IconButtonLoading = (props: IconButtonLoading.Props) => {
  const { children = <LoadingSpinner /> } = props;
  const { isLoading } = useIconButtonContext();
  return (
    <span className={isLoading ? "" : "hidden"}>
      {isLoading ? children : null}
    </span>
  );
};

export namespace IconButtonLoading {
  export interface Props {
    children?: React.ReactNode;
  }
}
