import { OtpInput } from "@jamsrui/react";

export const OtpInputRadius = () => {
  return (
    <OtpInput maxLength={4}>
      <OtpInput.Group>
        <OtpInput.Slot index={0} />
        <OtpInput.Slot index={1} />
        <OtpInput.Slot index={2} />
        <OtpInput.Slot index={3} />
      </OtpInput.Group>
    </OtpInput>
  );
};
