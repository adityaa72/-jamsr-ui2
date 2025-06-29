import { LinearProgress } from "@jamsrui/linear-progress";

export const DataGridLoading = (props: DataGridLoading.Props) => {
  return <LinearProgress className="absolute inset-0" {...props} />;
};

export namespace DataGridLoading {
  export interface Props {}
}
