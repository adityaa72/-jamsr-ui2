import { useRenderElement } from "@jamsrui/hooks";
import { mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { textVariants } from "./styles";
import { useTextConfig } from "./text-config";

import type { UIProps } from "@jamsrui/utils";

import type { TextVariants} from "./styles";

export const Text = (props: Text.Props) => {
  const config = useTextConfig();
  const mergedProps = mergeProps(config, props);
  const [elementProps, variantProps] = mapPropsVariants(
    mergedProps,
    textVariants.variantKeys
  );
  const className = textVariants(variantProps);
  const renderElement = useRenderElement("p", {
    props: [elementProps, { className }],
  });
  return renderElement;
};

export namespace Text {
  export interface Props extends UIProps<"p">, TextVariants {}
}
