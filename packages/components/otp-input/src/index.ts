import { OtpInput as OtpInputRoot } from "./otp-input";
import { OtpInputGroup } from "./otp-input-group";
import { OtpInputSeparator } from "./otp-input-separator";
import { OtpInputSlot } from "./otp-input-slot";

export { OtpInputConfig, useOtpInputConfig } from "./otp-input-config";
export {
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "./regexp";

export const OtpInput = Object.assign(OtpInputRoot, {
  Root: OtpInputRoot,
  Slot: OtpInputSlot,
  Separator: OtpInputSeparator,
  Group: OtpInputGroup,
});
