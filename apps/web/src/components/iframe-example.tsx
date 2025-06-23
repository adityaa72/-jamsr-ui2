import { IconButton, Tooltip } from "@jamsr-ui/react";
import { type Route } from "next";

type Props = {
  src: Route;
};

export const IFrameExample = (props: Props) => {
  const { src } = props;
  return (
    <div className="relative">
      <Tooltip title="Open In New Tab">
        <IconButton
          render={<a href={src} target="_blank" rel="noreferrer" />}
          label="Open In New Tab"
          className="absolute right-0 top-0 text-foreground-secondary"
          variant="bordered"
        >
          0
        </IconButton>
      </Tooltip>
      <iframe src={src} title="Header default" className="h-[500px] w-full" />
    </div>
  );
};
