import {
  Alert,
  AlertConfig,
  AlertDescription,
  AlertTitle,
} from "@jamsr-ui/alert";
import { Metadata } from "next";
import { alertStylesCustom } from "./styles";

export const metadata: Metadata = {
  title: "Alert",
};

const Page = () => {
  return (
    <div>
      <AlertConfig
        about="alert-comp"
        classNames={{
          title: "cl-test",
        }}
        slotProps={{
          description: {
            render: <section />,
            className: "bg-background-secondary",
          },
          title: {
            render: <h2 className="border-2 border-white" />,
            className: "bg-background-tertiary border-2 border-white",
            role: "alert",
          },
        }}
      >
        <Alert
          className="border-lime-900 border-2"
          endContent={<button>Click Me 2</button>}
          classNames={{
            title: "cl-test2",
            content: "cl-content",
          }}
          slotProps={{
            title: {
              about: "test-title",
              className: "bg-blue-500 text-white border-lime-500",
              render: <span />,
            },
          }}
        >
          <AlertTitle className="rounded-sm">Hey i am title</AlertTitle>
          <AlertDescription>Hey i am description</AlertDescription>
        </Alert>
      </AlertConfig>

      <Alert
        tv={alertStylesCustom}
        variant="outlined"
        endContent={<button>Click Me 2</button>}
        status="warning"
        icon={false}
      >
        <AlertTitle className="rounded-sm">Hey i am title</AlertTitle>
        <AlertDescription>Hey i am description</AlertDescription>
      </Alert>
    </div>
  );
};

export default Page;
