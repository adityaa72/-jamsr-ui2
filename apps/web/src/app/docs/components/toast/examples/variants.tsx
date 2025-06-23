"use client";

import { Button, toast } from "@jamsrui/react";

const ToastVariants = () => {
  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          toast.success("Success message!", {
            closeButton: true,
          })
        }
      >
        Success toast
      </Button>
      <Button onClick={() => toast.error("Error message!")}>Error toast</Button>
      <Button onClick={() => toast.info("Info message!")}>Info toast</Button>
      <Button onClick={() => toast.warning("Warning message!")}>
        Warning toast
      </Button>
    </div>
  );
};

export default ToastVariants;
