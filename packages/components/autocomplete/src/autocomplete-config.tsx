import { UIProps } from "@jamsr-ui/utils";

export const AutocompleteConfig = (props: AutocompleteConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace AutocompleteConfig {
  export type Props = UIProps<"div">;
}
