export const devDataAttr = (value: string) =>
  process.env.NODE_ENV === "production" ? undefined : `data-${value}`;
