"use client";

import { SidebarToggle, Text, useSidebarState } from "@jamsrui/react";
import { cn } from "@jamsrui/utils";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  onThisPage?: React.ReactNode;
};

export const DocsPageInner = (props: Props) => {
  const { children, description, title, onThisPage } = props;
  const { isOpen } = useSidebarState();
  return (
    <div
      className={cn(
        "flex w-full transition-transform min-w-0 duration-300 max-w-screen-xl",
        isOpen ? "md:translate-x-[250px] md:w-[calc(100%-250px)]" : "mx-auto"
      )}
    >
      <div className="py-12 w-full px-4 md:px-12">
        <SidebarToggle className="md:hidden" />
        {!isOpen && <SidebarToggle />}
        <article className={cn("flex col-span-2 flex-col gap-8 w-full py-12")}>
          <div className="flex flex-col gap-2">
            <Text render={<h1 />} variant="h2">
              {title}
            </Text>
            <Text className="text-foreground-secondary">{description}</Text>
          </div>
          <div className="flex flex-col gap-4">{children}</div>
        </article>
      </div>
      {onThisPage}
    </div>
  );
};
