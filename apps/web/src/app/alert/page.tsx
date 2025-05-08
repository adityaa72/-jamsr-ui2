import {
  Alert,
  AlertConfig,
  AlertDescription,
  AlertTitle,
} from "@jamsr-ui/alert";
import { Metadata } from "next";

export const title: Metadata = {
  title: "Alert",
};

const Page = () => {
  return (
    <div>
      <AlertConfig
        slotProps={{
          description: {
            render: <section />,
            className: "bg-background-secondary",
          },
          title: {
            render: <h2 className="border-2 border-white" />,
            className: "bg-background-tertiary",
            role: "alert",
          },
        }}
      >
        <Alert
          slotProps={{
            title: {
              about: "test-title",
            },
          }}
        >
          <AlertTitle className="rounded-sm">Hey i am title</AlertTitle>
          <AlertTitle
            className="rounded-sm"
            render={<h1 className="text-blue-500" />}
          >
            Hey i am title
          </AlertTitle>
          <AlertDescription>Hey i am description</AlertDescription>
        </Alert>
      </AlertConfig>
    </div>
  );
};

export default Page;
