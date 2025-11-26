import { TextFieldContext } from "./textfield-context";
import { useTextField } from "./use-textfield";

export const TextField = (props: TextField.Props) => {
  const { children } = props;
  const value = useTextField({});
  return (
    <TextFieldContext value={value}>
      <div className="flex flex-col gap-1">{children}</div>
    </TextFieldContext>
  );
};

export namespace TextField {
  export interface Props {
    children: React.ReactNode;
  }
}
