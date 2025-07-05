import { createContext, use } from "react";

import type { Rating } from "./rating";

const RatingContext = createContext<RatingConfig.Props>({});
export const RatingConfig = (props: RatingConfig.Props) => {
  const { children, ...restProps } = props;
  return <RatingContext value={restProps}>{children}</RatingContext>;
};

export const useRatingConfig = () => {
  const context = use(RatingContext);
  return context;
};

export namespace RatingConfig {
  export interface Props extends Rating.Props, GlobalConfigProps<Rating.Props> {}
}
