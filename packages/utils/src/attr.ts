export const dataAttrDev = (value: string) =>
  process.env.NODE_ENV === "production" ? undefined : value;
