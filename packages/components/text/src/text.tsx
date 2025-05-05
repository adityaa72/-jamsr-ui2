import { useRenderElement } from "@jamsr-ui/hooks";
import { mapPropsVariants, mergeProps, UIProps } from "@jamsr-ui/utils";
import { TextVariants, textVariants } from "./styles";
import { useTextConfig } from "./text-config";

export const Text = (props: Text.Props) => {
  const config = useTextConfig();
  const mergedProps = mergeProps(config, props);
  const [elementProps, variantProps] = mapPropsVariants(
    mergedProps,
    textVariants.variantKeys
  );
  const className = textVariants(variantProps);
  const renderElement = useRenderElement("p", mergedProps, {
    props: [elementProps, { className }],
  });
  return renderElement;
};

export namespace Text {
  export interface Props extends UIProps<"p">, TextVariants {}
}
