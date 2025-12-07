import { OtpInput as OtpInputRoot } from "./otp-input";
import { OtpInputConfig, useOtpInputConfig } from "./otp-input-config";
import { OtpInputGroup } from "./otp-input-group";
import { OtpInputSeparator } from "./otp-input-separator";
import { OtpInputSlot } from "./otp-input-slot";
import { OtpInputSlots, OtpInputVariants, otpInputVariants } from "./styles";
import { useOtpInput } from "./use-otp-input";

export {
  OtpInputConfig,
  OtpInputGroup,
  OtpInputSeparator,
  OtpInputSlot,
  otpInputVariants,
  useOtpInput,
  useOtpInputConfig,
  type OtpInputSlots,
  type OtpInputVariants,
};
export {
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "./regexp";

export const OtpInput = Object.assign(OtpInputRoot, {
  Slot: OtpInputSlot,
  Separator: OtpInputSeparator,
  Group: OtpInputGroup,
});

export namespace OtpInput {
  export interface Props extends OtpInputRoot.Props {}
  export interface Config extends OtpInputConfig.Props {}
  export interface Group extends OtpInputGroup.Props {}
  export interface Separator extends OtpInputSeparator.Props {}
  export interface Slot extends OtpInputSlot.Props {}
}
