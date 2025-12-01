"use client";

import { OtpInput, toast } from "@jamsrui/react";

export const OtpInputOnComplete = () => {
  return (
    <OtpInput
      maxLength={4}
      onComplete={(value) => {
        toast.success(`OTP Completed. You entered: ${value}`);
      }}
    >
      <OtpInput.Group>
        <OtpInput.Slot index={0} />
        <OtpInput.Slot index={1} />
        <OtpInput.Slot index={2} />
        <OtpInput.Slot index={3} />
      </OtpInput.Group>
    </OtpInput>
  );
};
