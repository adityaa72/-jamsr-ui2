import { InputGroup as InputGroupBase } from "./input-group";
import { InputGroupPrefix } from "./input-group-prefix";
import { InputGroupSuffix } from "./input-group-suffix";

export { useInputGroup } from "./use-input-group";
export {
  InputGroupContext,
  useInputGroupContext,
  useInputGroupContextOpt,
} from "./input-group-context";

const InputGroup = Object.assign(InputGroupBase, {
  Root: InputGroupBase,
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
});

export { InputGroup };
