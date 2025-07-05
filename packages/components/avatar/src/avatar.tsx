import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useAvatarConfig } from "./avatar-config";
import { AvatarContext } from "./avatar-context";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-img";
import { useAvatar } from "./use-avatar";

export const Avatar = (props: Avatar.Props) => {
  const { children } = props;
  const config = useAvatarConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useAvatar(mergedProps);
  const { getRootProps } = ctx;

  const composedChildren = (
    <>
      <AvatarImage />
      <AvatarFallback>{children}</AvatarFallback>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [
      getRootProps({}),
      {
        children: composedChildren,
      },
    ],
  });
  return <AvatarContext value={ctx}>{renderElement}</AvatarContext>;
};

export namespace Avatar {
  export interface Props extends useAvatar.Props {}
}
