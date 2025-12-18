"use client";

import { AlertDialog, Button } from "@jamsrui/react";
import { useState } from "react";

export const AlertDialogControlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click to delete!</Button>
      <AlertDialog isOpen={open} onOpenChange={setOpen}>
        <AlertDialog.Content>
          <AlertDialog.Body>
            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description>
              You won't be able to revert this!
            </AlertDialog.Description>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <AlertDialog.Cancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialog.Cancel>
            <AlertDialog.Action onClick={() => setOpen(false)}>
              Confirm
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </div>
  );
};
