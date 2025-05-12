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
    <CardConfig className="bg-background-secondary">
      <Card>
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
