import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { LinearProgressBar } from "./linear-progress-bar";
import { useLinearProgressConfig } from "./linear-progress-config";
import { LinearProgressContext } from "./linear-progress-context";
import { useLinearProgress } from "./use-linear-progress";

export const LinearProgress = (props: LinearProgress.Props) => {
  const config = useLinearProgressConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useLinearProgress(mergedProps);
  const { getRootProps } = ctx;
  const composedChildren = (
    <>
      <LinearProgressBar />
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return (
    <LinearProgressContext value={ctx}>{renderElement}</LinearProgressContext>
  );
};

export namespace LinearProgress {
  export interface Props extends useLinearProgress.Props {}
}
