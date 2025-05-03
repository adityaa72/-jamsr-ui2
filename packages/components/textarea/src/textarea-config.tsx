import { UIProps } from "@jamsr-ui/utils";

export const TextareaConfig = (props: TextareaConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace TextareaConfig {
  export type Props = UIProps<"div">;
}
