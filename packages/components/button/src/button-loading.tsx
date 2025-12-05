"use client";

import { useButtonConfig } from "./button-config";
import { useButtonContext } from "./button-context";
import { LoadingSpinner } from "./spinner";

export const ButtonLoading = (props: ButtonLoading.Props) => {
  const { children = <LoadingSpinner /> } = props;
  const { isLoading } = useButtonContext();
  const { slots } = useButtonConfig();
  if (slots?.loading) return <slots.loading {...props} />;
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
