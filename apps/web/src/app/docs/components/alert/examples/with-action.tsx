"use client";

import { Alert } from "@jamsr-ui/alert";
import { Button } from "@jamsr-ui/button";
import { IconButton } from "@jamsr-ui/icon-button";
import { CloseIcon, EyeClosedIcon } from "@jamsr-ui/icons";
import { useState } from "react";

export const AlertWithAction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col gap-4">
      <Alert
        status="warning"
        endContent={
          <Button variant="light" color="warning">
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
            <div className="flex flex-row gap-2">
              <IconButton
                label="Close"
                radius="full"
                variant="light"
                color="success"
              >
                <EyeClosedIcon className="size-5" />
              </IconButton>
              <IconButton
                label="Close"
                onClick={handleClose}
                radius="full"
                color="danger"
                variant="light"
              >
                <CloseIcon className="size-5" />
              </IconButton>
            </div>
          }
        >
          Your Pro plan has expired.
        </Alert>
      )}

      <Alert
        status="success"
        endContent={
          <Button variant="solid" color="success">
            Let's start!
          </Button>
        }
      >
        Your Pro plan has been activated.
      </Alert>
    </div>
  );
};
