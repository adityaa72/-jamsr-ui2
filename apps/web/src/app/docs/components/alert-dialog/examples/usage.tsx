"use client";

import { Button, AlertDialog } from "@jamsrui/react";

export const AlertDialogUsage = () => {
  return (
    <AlertDialog
      title="Are you sure?"
      message="You won't be able to revert this!"
      onConfirm={() => {
        console.log("Confirmed");
      }}
      onCancel={() => {
        console.log("Canceled");
      }}
    >
      <Button>Click to delete!</Button>
    </AlertDialog>
  );
};
