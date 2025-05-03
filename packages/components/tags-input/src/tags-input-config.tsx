import { UIProps } from "@jamsr-ui/utils";

export const TagsInputConfig = (props: TagsInputConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace TagsInputConfig {
  export type Props = UIProps<"div">;
}
