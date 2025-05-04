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
    <div>
      <CardConfig className="bg-background-secondary">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Hey there i' m content</CardContent>
        </Card>
      </CardConfig>
    </div>
  );
};

export default Page;
