
import { InputGroup as InputGroupBase } from "./input-group";
import {
  InputGroupContext,
  useInputGroupContext,
  useInputGroupContextOpt,
} from "./input-group-context";
import { InputGroupPrefix } from "./input-group-prefix";
import { InputGroupSuffix } from "./input-group-suffix";
import { useInputGroup } from "./use-input-group";

export {
  InputGroupContext,
  InputGroupPrefix,
  InputGroupSuffix,
  useInputGroup,
  useInputGroupContext,
  useInputGroupContextOpt,
};

export const InputGroup = Object.assign(InputGroupBase, {
  Root: InputGroupBase,
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
});

export namespace InputGroup {
  export interface Props extends InputGroupBase.Props {}
  export interface Prefix extends InputGroupPrefix.Props {}
  export interface Suffix extends InputGroupSuffix.Props {}
}
