import { createContext, useContext, useMemo } from "react";

const AccordionContext = createContext<AccordionConfig.Props>({});
export const AccordionConfig = (props: AccordionConfig.Props) => {
  const { children, className } = props;
  const value: AccordionConfig.Props = useMemo(
    () => ({ className }),
    [className]
  );
  return <AccordionContext value={value}>{children}</AccordionContext>;
};

export const useAccordionConfig = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionConfig must be used within a AccordionConfig");
  }
  return context;
};

export namespace AccordionConfig {
  export type Props = {
    children?: React.ReactNode;
    className?: string;
  };
}
