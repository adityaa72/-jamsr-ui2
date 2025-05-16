import { createConfigContext } from "@jamsr-ui/utils";

import type { Alert } from "./alert";

export const [AlertConfig, useAlertConfig] =
  createConfigContext<AlertConfig.Props>({
    displayName: "AlertConfigContext",
  });

// const AlertConfigContext = createContext<AlertConfig.Props>({});
// export const AlertConfig = (props: AlertConfig.Props) => {
//   const { merge = true, ...elementProps } = props;

//   const innerConfig = useAlertConfig();
//   const mergedProps = merge
//     ? mergeProps(innerConfig, elementProps)
//     : elementProps;
//   const { children, ...restProps } = mergedProps;
//   return <AlertConfigContext value={restProps}>{children}</AlertConfigContext>;
// };

// export const useAlertConfig = () => use(AlertConfigContext);

export namespace AlertConfig {
  export interface Props extends Alert.Props {
    merge?: boolean;
  }
}
