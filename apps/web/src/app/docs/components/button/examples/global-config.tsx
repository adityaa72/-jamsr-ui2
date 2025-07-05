"use client";

import { Button, ButtonConfig } from "@jamsrui/react";

declare module "@jamsrui/react" {
  export namespace Button {
    export interface VariantProps {
      gap?: "sm" | "md" | "lg";
    }

    export interface Props {
      justRandomOne?: boolean;
      size?: Button.VariantProps["size"] | "2xs";
    }
  }
}

export const ButtonGlobalConfig = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button color="primary">Button1</Button>
      <ButtonConfig
        color="secondary"
        radius="full"
        props={(props) => {
          const justRandomOne = props.justRandomOne;
          const gap = props.gap;
          return {
            size: "sm",
            color: props.size === "2xs" ? "danger" : "warning",
            radius: props.justRandomOne ? "none" : "full",
          };
        }}
        omitProps={["justRandomOne", "gap"]}
      >
        <Button>Button2</Button>
        <Button justRandomOne gap="lg">
          Button3
        </Button>
        <Button size="2xs" radius="md">
          Button4
        </Button>
      </ButtonConfig>
    </div>
  );
};
