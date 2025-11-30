import { OtpInput } from "@jamsrui/react";

export const OtpInputUsage = () => {
  return (
    <OtpInput maxLength={6}>
      <OtpInput.Group>
        <OtpInput.Slot index={0} />
        <OtpInput.Slot index={1} />
        <OtpInput.Slot index={2} />
      </OtpInput.Group>
      <OtpInput.Separator />
      <OtpInput.Group>
        <OtpInput.Slot index={3} />
        <OtpInput.Slot index={4} />
        <OtpInput.Slot index={5} />
      </OtpInput.Group>
    </OtpInput>
  );
};
