import { UIProps } from "@jamsr-ui/utils";

export const DatepickerConfig = (props: DatepickerConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace DatepickerConfig {
  export type Props = UIProps<"div">;
}
