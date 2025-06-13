import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useSwitchConfig } from "./switch-config";
import { SwitchContext } from "./switch-context";
import { SwitchDescription } from "./switch-description";
import { SwitchLabel } from "./switch-label";
import { SwitchThumb } from "./switch-thumb";
import { SwitchTrack } from "./switch-track";
import { SwitchWrapper } from "./switch-wrapper";
import { SwitchContent } from "./swith-content";
import { SwitchErrorMessage } from "./swith-error-message";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const { children } = props;
  const config = useSwitchConfig();
  const mergedProps = mergeProps(config, props);

  const ctx = useSwitch(mergedProps);
  const { getRootProps, hasContent } = ctx;

  const composedChildren = (
    <>
      <SwitchWrapper>
        {!!hasContent && (
          <SwitchContent>
            <SwitchLabel />
            {!!children && <SwitchDescription>{children}</SwitchDescription>}
          </SwitchContent>
        )}
        <SwitchTrack>
          <SwitchThumb />
        </SwitchTrack>
      </SwitchWrapper>
      <SwitchErrorMessage />
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
  return <SwitchContext value={ctx}>{renderElement}</SwitchContext>;
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
