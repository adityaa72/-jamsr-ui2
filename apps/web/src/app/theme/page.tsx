import { Text } from "@jamsr-ui/text";

const theme = {
  dark: {
    heading: "Primary",
    items: [
      {
        name: "default",
        color: "#2563EB",
        className: "bg-primary",
      },
    ],
  },
  light: {
    heading: "Primary",
    items: [
      {
        name: "default",
        color: "#2563EB",
        className: "bg-primary",
      },
    ],
  },
};

const Page = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="bg-primary">
        <div>
          default
          <Text>default</Text>
          <Text>#2563EB</Text>
        </div>
      </div>
    </div>
  );
};

export default Page;
