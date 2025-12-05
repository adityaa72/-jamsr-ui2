"use client";

import {
  ButtonLoading,
  CircularProgress,
  useButtonContext,
} from "@jamsrui/react";

export const CustomLoading = (props: ButtonLoading.Props) => {
  const { children } = props;
  const { isLoading } = useButtonContext();
  return (
    <>
      {isLoading && (
        <div className="absolute">
          <CircularProgress
            classNames={{
              progress: "stroke-foreground",
            }}
          />
        </div>
      )}
      <div className={isLoading ? "opacity-0" : ""}>{children}</div>
    </>
  );
};
