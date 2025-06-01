import { useCallback, useMemo } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { avatarVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Avatar } from "./avatar";
import type { AvatarVariants } from "./styles";

export const useAvatar = (props: useAvatar.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    avatarVariants.variantKeys
  );
  const { ...elementProps } = $props;

  const styles = avatarVariants(variantProps);
  const getRootProps: PropGetter<Avatar.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("avatar"),
      className: styles,
    }),
    [elementProps, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
    }),
    [getRootProps]
  );
};
export namespace useAvatar {
  export interface Props extends AvatarVariants, UIProps<"img"> {}
}
