import { UIProps } from "@jamsr-ui/utils";

export const AvatarConfig = (props: AvatarConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace AvatarConfig {
  export type Props = UIProps<"div">;
}
