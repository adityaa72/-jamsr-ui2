import { Text } from "@jamsr-ui/text";
import { cn } from "@jamsr-ui/utils";

const theme = {
  dark: [
    {
      heading: "Primary",
      items: [
        {
          name: "default",
          color: "oklch(54.6% 0.215 262.9)",
          className: "bg-primary",
        },
        {
          name: "hover",
          color: "oklch(62.3% 0.188 259.8)",
          className: "bg-primary-hover",
        },
        {
          name: "active",
          color: "oklch(48.8% 0.217 264.4)",
          className: "bg-primary-active",
        },
        {
          name: "stroke",
          color: "oklch(37.9% 0.138 265.5)",
          className: "bg-primary-stroke",
        },
        {
          name: "fill",
          color: "oklch(28.2% 0.087 267.9)",
          className: "bg-primary-fill",
        },
      ],
    },
    {
      heading: "Secondary",
      items: [
        {
          name: "default",
          color: "oklch(54.1% 0.247 293)",
          className: "bg-secondary",
        },
        {
          name: "hover",
          color: "oklch(60.6% 0.219 292.7)",
          className: "bg-secondary-hover",
        },
        {
          name: "active",
          color: "oklch(49.1% 0.241 292.6)",
          className: "bg-secondary-active",
        },
        {
          name: "stroke",
          color: "oklch(38% 0.178 293.7)",
          className: "bg-secondary-stroke",
        },
        {
          name: "fill",
          color: "oklch(28.3% 0.135 291.1)",
          className: "bg-secondary-fill",
        },
      ],
    },
    {
      heading: "Success",
      items: [
        {
          name: "default",
          color: "oklch(62.7% 0.17 149.2)",
          className: "bg-success",
        },
        {
          name: "hover",
          color: "oklch(72.3% 0.192 149.6)",
          className: "bg-success-hover",
        },
        {
          name: "active",
          color: "oklch(52.7% 0.137 150.1)",
          className: "bg-success-active",
        },
        {
          name: "stroke",
          color: "oklch(39.3% 0.09 152.5)",
          className: "bg-success-stroke",
        },
        {
          name: "fill",
          color: "oklch(26.6% 0.063 152.9)",
          className: "bg-success-fill",
        },
      ],
    },
    {
      heading: "Warning",
      items: [
        {
          name: "default",
          color: "oklch(79.5% 0.162 86)",
          className: "bg-warning",
        },
        {
          name: "hover",
          color: "oklch(86.1% 0.173 91.9)",
          className: "bg-warning-hover",
        },
        {
          name: "active",
          color: "oklch(68.1% 0.142 75.8)",
          className: "bg-warning-active",
        },
        {
          name: "stroke",
          color: "oklch(42.1% 0.09 57.7)",
          className: "bg-warning-stroke",
        },
        {
          name: "fill",
          color: "oklch(28.6% 0.064 53.8)",
          className: "bg-warning-fill",
        },
      ],
    },
    {
      heading: "Danger",
      items: [
        {
          name: "default",
          color: "oklch(57.7% 0.215 27.3)",
          className: "bg-danger",
        },
        {
          name: "hover",
          color: "oklch(63.7% 0.208 25.3)",
          className: "bg-danger-hover",
        },
        {
          name: "active",
          color: "oklch(50.5% 0.19 27.5)",
          className: "bg-danger-active",
        },
        {
          name: "stroke",
          color: "oklch(39.6% 0.133 25.7)",
          className: "bg-danger-stroke",
        },
        {
          name: "fill",
          color: "oklch(25.8% 0.089 26)",
          className: "bg-danger-fill",
        },
      ],
    },
    {
      heading: "Text",
      items: [
        {
          name: "primary",
          color: "oklch(96.7% 0.001 286.4)",
          className: "bg-foreground-primary",
        },
        {
          name: "secondary",
          color: "oklch(71.2% 0.013 286.1)",
          className: "bg-foreground-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(55.2% 0.014 285.9)",
          className: "bg-foreground-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(44.2% 0.015 285.8)",
          className: "bg-foreground-quaternary",
        },
      ],
    },
    {
      heading: "Background",
      items: [
        {
          name: "primary",
          color: "oklch(14.1% 0.004 285.8)",
          className: "bg-background-primary",
        },
        {
          name: "secondary",
          color: "oklch(21% 0.006 285.9)",
          className: "bg-background-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(27.4% 0.005 286)",
          className: "bg-background-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(37% 0.012 285.8)",
          className: "bg-background-quaternary",
        },
      ],
    },
    {
      heading: "Gray",
      items: [
        {
          name: "primary",
          color: "oklch(71.2% 0.013 286.1)",
          className: "bg-gray-primary",
        },
        {
          name: "secondary",
          color: "oklch(55.2% 0.014 285.9)",
          className: "bg-gray-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(44.2% 0.015 285.8)",
          className: "bg-gray-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(37% 0.012 285.8)",
          className: "bg-gray-quaternary",
        },
      ],
    },
    {
      heading: "Fill",
      items: [
        {
          name: "primary",
          color: "oklch(100% 0 0 / 0.1569)",
          className: "bg-fill-primary",
        },
        {
          name: "secondary",
          color: "oklch(100% 0 0 / 0.0784)",
          className: "bg-fill-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(100% 0 0 / 0.0392)",
          className: "bg-fill-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(100% 0 0 / 0.0196)",
          className: "bg-fill-quaternary",
        },
      ],
    },
    {
      heading: "Stroke",
      items: [
        {
          name: "primary",
          color: "oklch(44.2% 0.015 285.8 / 0.3176)",
          className: "bg-stroke-primary",
        },
        {
          name: "secondary",
          color: "oklch(44.2% 0.015 285.8 / 0.3176)",
          className: "bg-stroke-secondary",
        },
      ],
    },
  ],
  light: [
    {
      heading: "Primary",
      items: [
        {
          name: "default",
          color: "oklch(54.6% 0.215 262.9)",
          className: "bg-primary",
        },
        {
          name: "hover",
          color: "oklch(62.3% 0.188 259.8)",
          className: "bg-primary-hover",
        },
        {
          name: "active",
          color: "oklch(48.8% 0.217 264.4)",
          className: "bg-primary-active",
        },
        {
          name: "stroke",
          color: "oklch(88.2% 0.057 254.1)",
          className: "bg-primary-stroke",
        },
        {
          name: "fill",
          color: "oklch(97% 0.014 254.6)",
          className: "bg-primary-fill",
        },
      ],
    },
    {
      heading: "Secondary",
      items: [
        {
          name: "default",
          color: "oklch(54.1% 0.247 293)",
          className: "bg-secondary",
        },
        {
          name: "hover",
          color: "oklch(60.6% 0.219 292.7)",
          className: "bg-secondary-hover",
        },
        {
          name: "active",
          color: "oklch(49.1% 0.241 292.6)",
          className: "bg-secondary-active",
        },
        {
          name: "stroke",
          color: "oklch(89.4% 0.055 293.3)",
          className: "bg-secondary-stroke",
        },
        {
          name: "fill",
          color: "oklch(96.9% 0.016 293.8)",
          className: "bg-secondary-fill",
        },
      ],
    },
    {
      heading: "Success",
      items: [
        {
          name: "default",
          color: "oklch(62.7% 0.17 149.2)",
          className: "bg-success",
        },
        {
          name: "hover",
          color: "oklch(72.3% 0.192 149.6)",
          className: "bg-success-hover",
        },
        {
          name: "active",
          color: "oklch(52.7% 0.137 150.1)",
          className: "bg-success-active",
        },
        {
          name: "stroke",
          color: "oklch(92.5% 0.081 156)",
          className: "bg-success-stroke",
        },
        {
          name: "fill",
          color: "oklch(98.2% 0.018 155.8)",
          className: "bg-success-fill",
        },
      ],
    },
    {
      heading: "Warning",
      items: [
        {
          name: "default",
          color: "oklch(79.5% 0.162 86)",
          className: "bg-warning",
        },
        {
          name: "hover",
          color: "oklch(86.1% 0.173 91.9)",
          className: "bg-warning-hover",
        },
        {
          name: "active",
          color: "oklch(68.1% 0.142 75.8)",
          className: "bg-warning-active",
        },
        {
          name: "stroke",
          color: "oklch(94.5% 0.124 101.5)",
          className: "bg-warning-stroke",
        },
        {
          name: "fill",
          color: "oklch(98.7% 0.026 102.2)",
          className: "bg-warning-fill",
        },
      ],
    },
    {
      heading: "Danger",
      items: [
        {
          name: "default",
          color: "oklch(57.7% 0.215 27.3)",
          className: "bg-danger",
        },
        {
          name: "hover",
          color: "oklch(63.7% 0.208 25.3)",
          className: "bg-danger-hover",
        },
        {
          name: "active",
          color: "oklch(50.5% 0.19 27.5)",
          className: "bg-danger-active",
        },
        {
          name: "stroke",
          color: "oklch(88.5% 0.059 18.3)",
          className: "bg-danger-stroke",
        },
        {
          name: "fill",
          color: "oklch(97.1% 0.013 17.4)",
          className: "bg-danger-fill",
        },
      ],
    },
    {
      heading: "Gray",
      items: [
        {
          name: "primary",
          color: "oklch(44.2% 0.015 285.8)",
          className: "bg-gray-primary",
        },
        {
          name: "secondary",
          color: "oklch(55.2% 0.014 285.9)",
          className: "bg-gray-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(71.2% 0.013 286.1)",
          className: "bg-gray-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(87.1% 0.005 286.3)",
          className: "bg-gray-quaternary",
        },
      ],
    },
    {
      heading: "Fill",
      items: [
        {
          name: "primary",
          color: "oklch(21% 0.006 285.9 / 0.1569)",
          className: "bg-fill-primary",
        },
        {
          name: "secondary",
          color: "oklch(21% 0.006 285.9 / 0.0784)",
          className: "bg-fill-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(21% 0.006 285.9 / 0.0392)",
          className: "bg-fill-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(21% 0.006 285.9 / 0.0196)",
          className: "bg-fill-quaternary",
        },
      ],
    },
    {
      heading: "Stroke",
      items: [
        {
          name: "primary",
          color: "oklch(21% 0.006 285.9 / 0.1176)",
          className: "bg-stroke-primary",
        },
        {
          name: "secondary",
          color: "oklch(21% 0.006 285.9 / 0.0588)",
          className: "bg-stroke-secondary",
        },
      ],
    },
    {
      heading: "Text",
      items: [
        {
          name: "primary",
          color: "oklch(21% 0.006 285.9)",
          className: "bg-foreground-primary",
        },
        {
          name: "secondary",
          color: "oklch(55.2% 0.014 285.9)",
          className: "bg-foreground-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(71.2% 0.013 286.1)",
          className: "bg-foreground-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(87.1% 0.005 286.3)",
          className: "bg-foreground-quaternary",
        },
      ],
    },
    {
      heading: "Background",
      items: [
        {
          name: "primary",
          color: "oklch(98.5% 0 0)",
          className: "bg-background-primary",
        },
        {
          name: "secondary",
          color: "oklch(100% 0 0)",
          className: "bg-background-secondary",
        },
        {
          name: "tertiary",
          color: "oklch(100% 0 0)",
          className: "bg-background-tertiary",
        },
        {
          name: "quaternary",
          color: "oklch(100% 0 0)",
          className: "bg-background-quaternary",
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-24 flex flex-col gap-12">
      {theme.dark.map((item) => {
        const { heading, items } = item;
        return (
          <div key={heading} className="flex flex-col gap-2">
            <Text variant="h6">{heading}</Text>
            <div className="grid grid-cols-5 gap-4">
              {items.map((item) => {
                const { className, color, name } = item;
                return (
                  <div
                    key={name}
                    className={cn(
                      "rounded-md p-1 flex aspect-square border border-stroke-secondary",
                      className
                    )}
                  >
                    <div className="bg-background-secondary w-full mt-auto rounded-md py-2 px-4">
                      <Text>{name}</Text>
                      <Text variant="paragraph2">{color}</Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
