"use client";

import { CloseIcon } from "@jamsrui/icons";
import { Alert, Button, IconButton } from "@jamsrui/react";
import { useState } from "react";

export const AlertWithAction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning">
        <Alert.Icon />
        <Alert.Content>
          Your plan will expire soon, please renew your plan.
        </Alert.Content>
        <Button variant="light" color="warning" size="sm">
          Renew Now!
        </Button>
      </Alert>
      {isOpen && (
        <Alert status="danger">
          <Alert.Icon />
          <Alert.Content>Your Pro plan has expired.</Alert.Content>
          <IconButton
            label="Close"
            onClick={handleClose}
            radius="full"
            color="danger"
            variant="solid"
            size="sm"
          >
            <CloseIcon className="size-5" />
          </IconButton>
        </Alert>
      )}
      <Alert status="success">
        <Alert.Icon />
        <Alert.Content>Your Pro plan has been activated.</Alert.Content>
        <Button variant="solid" color="success" size="sm">
          Let's start!
        </Button>
      </Alert>
    </div>
  );
};
