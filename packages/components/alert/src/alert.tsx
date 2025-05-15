import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useAlertConfig } from "./alert-config";
import { AlertContent } from "./alert-content";
import { AlertContextProvider } from "./alert-context";
import { InfoIcon } from "./icons";
import { useAlert } from "./use-alert";

import type { SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { AlertSlots } from "./styles";

export const Alert = (props: Alert.Props) => {
  const config = useAlertConfig();
  const mergedProps = mergeProps(config ?? {}, props);

  const { children, classNames, endContent, slotProps, tv, ...elementProps } =
    mergedProps;
  const ctx = useAlert({ classNames, slotProps, tv });

  const composedChildren = (
    <>
      <InfoIcon />
      <AlertContent>{children}</AlertContent>
      {endContent}
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [ctx.getRootProps(elementProps), { children: composedChildren }],
  });
  return <AlertContextProvider ctx={ctx}>{renderElement}</AlertContextProvider>;
};

export namespace Alert {
  export interface Props extends UIProps<"div">, useAlert.Props {
    classNames?: SlotsToClassNames<AlertSlots>;
    endContent?: React.ReactNode;
  }
}
