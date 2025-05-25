import { Text } from "@jamsr-ui/text";
import React, { isValidElement } from "react";

type Props = {
  children: React.ReactNode;
};

export const DocsOnThisPage = (props: Props) => {
  const { children } = props;
  const headings = React.Children.toArray(children).map((item) => {
    if (isValidElement<{ title: string }>(item)) {
      return item.props.title;
    }
  });
  return (
    <aside className="col-span-1 py-24">
      <ul className="flex flex-col gap-2">
        {headings.map((item) => {
          return (
            <li key={item}>
              <Text variant="caption" className="text-foreground-tertiary">
                {item}
              </Text>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
