import { Link } from "@jamsrui/link";
import { Text } from "@jamsrui/react";
import React, { isValidElement } from "react";

type Props = {
  children: React.ReactNode;
};

export const DocsOnThisPage = (props: Props) => {
  const { children } = props;
  const headings = React.Children.toArray(children)
    .map((item) => {
      if (isValidElement<{ title: string }>(item)) {
        return item.props.title;
      }
    })
    .filter(Boolean);
  return (
    <aside className="col-span-1 py-24 sticky top-24 h-max">
      <Text variant="paragraph2">On this page</Text>
      <ul className="flex flex-col">
        {headings.map((item) => {
          if (!item) return null;
          const id = item.toLowerCase().replace(" ", "-");
          return (
            <li key={item}>
              <Link
                href={`#${id}`}
                variant="caption"
                className="text-foreground-secondary"
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
