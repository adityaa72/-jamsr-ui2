"use client";

import { Alert } from "@jamsrui/react";
import { Button } from "@jamsrui/react";
import { IconButton } from "@jamsrui/react";
import { CloseIcon } from "@jamsrui/icons";
import { useState } from "react";

export const AlertWithAction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col gap-4">
      <Alert
        status="warning"
        endContent={
          <Button variant="light" color="warning" size="sm">
            Renew Now!
          </Button>
        }
      >
        Your plan will expire soon, please renew your plan.
      </Alert>
      {isOpen && (
        <Alert
          status="danger"
          endContent={
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
          }
        >
          Your Pro plan has expired.
        </Alert>
      )}
      <Alert
        status="success"
        endContent={
          <Button variant="solid" color="success" size="sm">
            Let's start!
          </Button>
        }
      >
        Your Pro plan has been activated.
      </Alert>
    </div>
  );
};
