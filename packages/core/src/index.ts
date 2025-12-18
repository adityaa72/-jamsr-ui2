export interface GlobalConfigProps<T> {
  props?: (props: Partial<T>) => T;
  omitProps?: string[];
}

export type WithGlobalConfig<T extends object> = Partial<T> & {
  props?: (props: Partial<T>) => T;
  omitProps?: (keyof T)[];
};
