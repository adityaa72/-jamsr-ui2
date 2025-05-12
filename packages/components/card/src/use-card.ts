import { devDataAttr, mapPropsVariants, UIProps } from "@jamsr-ui/utils";
import { cardVariants, CardVariants } from "./styles";
import { useCallback } from "react";

export const useCard = (props: useCard.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    cardVariants.variantKeys
  );
  const styles = cardVariants(variantKeys);

  const getBasePops = useCallback(
    () => ({
      ...newProps,
      "data-slot": devDataAttr("base"),
      className: styles.base({ className: newProps.className }),
    }),
    [newProps, styles]
  );

  const getHeaderProps = useCallback(
    (props: UIProps<"div">) => ({
      ...props,
      "data-slot": devDataAttr("header"),
      className: styles.header({ className: props.className }),
    }),
    [styles]
  );

  const getTitleProps = useCallback(
    (props: UIProps<"div">) => ({
      ...props,
      "data-slot": devDataAttr("title"),
      className: styles.title({ className: props.className }),
    }),
    [styles]
  );

  const getDescriptionProps = useCallback(
    (props: UIProps<"div">) => ({
      ...props,
      "data-slot": devDataAttr("description"),
      className: styles.description({ className: props.className }),
    }),
    [styles]
  );

  const getHeaderContentProps = useCallback(
    (props: UIProps<"div">) => ({
      ...props,
      "data-slot": devDataAttr("header-content"),
      className: styles.headerContent({ className: props.className }),
    }),
    [styles]
  );

  const getContentProps = useCallback(
    (props: UIProps<"div">) => ({
      ...props,
      "data-slot": devDataAttr("content"),
      className: styles.content({ className: props.className }),
    }),
    [styles]
  );

  const getFooterProps = useCallback(
    (props: UIProps<"div">) => ({
      ...props,
      "data-slot": devDataAttr("footer"),
      className: styles.footer({ className: props.className }),
    }),
    [styles]
  );

  return {
    getBasePops,
    getHeaderProps,
    getHeaderContentProps,
    getTitleProps,
    getDescriptionProps,
    getContentProps,
    getFooterProps,
  };
};

export namespace useCard {
  export interface Props extends UIProps<"div">, CardVariants {}
}
