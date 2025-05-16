/* eslint-disable @typescript-eslint/no-namespace */
import type { AlertVariants } from "@jamsr-ui/alert";
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

declare module "@jamsr-ui/alert" {
  export namespace Alert {
    export interface Props {
      variant?: AlertVariants.Variant | "custom";
    }
  }
}

const Page = () => {
  return (
    <div>
      <AlertConfig>
        <Alert
          variant="custom"
          endContent={<button>Click Me 2</button>}
          status="warning"
          icon={false}
        >
          <AlertTitle className="rounded-sm">Hey i am title</AlertTitle>
          <AlertDescription>Hey i am description</AlertDescription>
        </Alert>
      </AlertConfig>

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
        {/* <Alert
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
        </Alert> */}

        <Alert
          variant="outlined"
          endContent={<button>Click Me 2</button>}
          status="warning"
          icon={false}
        >
          <AlertTitle className="rounded-sm">Hey i am title</AlertTitle>
          <AlertDescription>Hey i am description</AlertDescription>
        </Alert>

        <AlertConfig merge={false}>
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
        </AlertConfig>
      </AlertConfig>
    </div>
  );
};

export default Page;
