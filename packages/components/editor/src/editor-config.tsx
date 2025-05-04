import { UIProps } from "@jamsr-ui/utils";

export const EditorConfig = (props: EditorConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace EditorConfig {
  export type Props = UIProps<"div">;
}
