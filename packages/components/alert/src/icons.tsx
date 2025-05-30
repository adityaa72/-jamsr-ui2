import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "@jamsr-ui/icons";

import type { AlertVariants } from "./styles";

export type IconMapping = Record<
  NonNullable<AlertVariants["status"]>,
  React.ReactNode
>;

export const iconMappingDefault: IconMapping = {
  danger: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  default: <InfoIcon />,
};
