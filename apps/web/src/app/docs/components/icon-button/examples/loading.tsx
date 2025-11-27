"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Button, CircularProgress, IconButton } from "@jamsrui/react";
import { useState } from "react";

export const IconButtonLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <IconButton
          color="success"
          label="Loading Icon Button"
          isLoading={isLoading}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          label="Loading Icon Button"
          isLoading={isLoading}
          loadingIcon={<CircularProgress />}
        >
          <EmailIcon />
        </IconButton>
      </div>
      <Button onClick={() => setIsLoading(!isLoading)}>Toggle Loading</Button>
    </div>
  );
};
