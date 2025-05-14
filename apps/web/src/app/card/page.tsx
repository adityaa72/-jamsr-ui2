import {
  Card,
  CardConfig,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@jamsr-ui/card";

const Page = () => {
  return (
    <CardConfig>
      <Card
        slotProps={{
          footer: {
            className: "bg-red-400",
          },
          base: {
            className: "border",
            classNames: {
              base: "border-3",
            },
          },
        }}
        classNames={{
          title: "border-2 border-red-400",
          base: "border-2 border-red-400",
        }}
      >
        <CardHeader
          startContent={<div className="size-4 bg-red-400 rounded-full" />}
          endContent={<div className="size-4 bg-red-400 rounded-full" />}
        >
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Hey there i' m content</CardContent>
      </Card>
    </CardConfig>
  );
};

export default Page;
