export interface GlobalConfigProps<T> {
  props?: (props: Partial<T>) => T;
  omitProps?: string[];
}
