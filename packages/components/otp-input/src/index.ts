import { OtpInput as OtpInputRoot } from "./otp-input";
import { OtpInputGroup } from "./otp-input-group";
import { OtpInputSeparator } from "./otp-input-separator";
import { OtpInputSlot } from "./otp-input-slot";

export { OtpInputConfig, useOtpInputConfig } from "./otp-input-config";

export const OtpInput = Object.assign(OtpInputRoot, {
  Root: OtpInputRoot,
  Slot: OtpInputSlot,
  Separator: OtpInputSeparator,
  Group: OtpInputGroup,
});
