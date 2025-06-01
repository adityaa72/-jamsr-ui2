import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@jamsr-ui/react";

export const CardUsage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>Hey there i' m content</CardContent>
    </Card>
  );
};
