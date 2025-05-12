import {
  Alert,
  AlertConfig,
  AlertDescription,
  AlertTitle,
} from "@jamsr-ui/alert";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alert",
};

const Page = () => {
  return (
    <div>
      <AlertConfig
        about="alert-comp"
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
        <div className="grid gap-4">
          <Alert
            slotProps={{
              title: {
                about: "test-title",
                className: "bg-blue-500 text-white",
                render: <span />,
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
          <Alert>
            <AlertTitle>Hey i am title</AlertTitle>
            <AlertDescription>Hey i am description</AlertDescription>
          </Alert>
        </div>
      </AlertConfig>
      {/* 
      <Card>
        <CardHeader
          startContent={<Avatar />}
          endContent={<IconButton></IconButton>}
        >
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardStartContent>
            <Avatar />
          </CardStartContent>
          <CardEndContent>
            <IconButton></IconButton>
          </CardEndContent>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card> */}
    </div>
  );
};

export default Page;
