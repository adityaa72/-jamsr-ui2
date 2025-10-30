import {
  Switch,
  SwitchContent,
  SwitchDescription,
  SwitchInput,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  SwitchTrack,
  SwitchWrapper,
} from "@jamsrui/switch/primitive";
import { AnimatePresence } from "motion/react";

export const SwitchPrimitiveUsage = () => {
  return (
    <Switch>
      <SwitchRoot>
        <SwitchWrapper>
          <SwitchInput />
          <SwitchContent>
            <SwitchLabel>Hey there</SwitchLabel>
            <SwitchDescription>This is the description</SwitchDescription>
          </SwitchContent>
          <AnimatePresence initial={false}>
            <SwitchTrack>
              <SwitchThumb />
            </SwitchTrack>
          </AnimatePresence>
        </SwitchWrapper>
      </SwitchRoot>
    </Switch>
  );
};
