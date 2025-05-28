import { IconButton } from "@jamsr-ui/icon-button";
import { EmailIcon } from "@jamsr-ui/icons";

export const IconButtonVariantsColors = () => {
  const variants: IconButton.Props["variant"][] = [
    "solid",
    "light",
    "outlined",
    "text",
    "flat",
  ];
  const colors: IconButton.Props["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-col flex-wrap gap-4">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <IconButton
              label={`${variant} - ${color}`}
              key={`${variant}-${color}`}
              variant={variant}
              color={color}
            >
              <EmailIcon />
            </IconButton>
          ))}
        </div>
      ))}
    </div>
  );
};
