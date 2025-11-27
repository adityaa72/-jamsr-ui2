"use client";

import { Button, CircularProgress } from "@jamsrui/react";
import { useState } from "react";

export const ButtonLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => setIsLoading((prev) => !prev);
  return (
    <div>
      <div className="flex flex-row gap-4">
        <Button isLoading={isLoading} color="danger">
          <Button.Loading />
          Danger
        </Button>
        <Button isLoading={isLoading} color="success">
          <Button.Loading>
            <CircularProgress />
          </Button.Loading>
          Success
        </Button>
        <Button isLoading={isLoading} color="warning">
          <span className="empty:hidden">
            {isLoading && <CircularProgress />}
          </span>
          Warning
        </Button>
        <Button color="secondary" isLoading={isLoading}>
          <CustomLoading isLoading={isLoading}>Saving...</CustomLoading>
        </Button>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <Button onClick={toggleLoading}>Toggle loading</Button>
      </div>
    </div>
  );
};

const CustomLoading = (props: {
  children: React.ReactNode;
  isLoading: boolean;
}) => {
  const { children, isLoading } = props;
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
