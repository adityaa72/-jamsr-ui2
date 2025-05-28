import { IconButton } from "@jamsr-ui/icon-button";
import { EmailIcon } from "@jamsr-ui/icons";

export const IconButtonVariants = () => {
  const variants: IconButton.Props["variant"][] = [
    "solid",
    "light",
    "outlined",
    "text",
    "flat",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <IconButton
          label={`${variant} Icon Button`}
          color="primary"
          key={variant}
          variant={variant}
        >
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
