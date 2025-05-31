import { Alert, AlertDescription } from "@jamsr-ui/alert";

export const AlertUsage = () => {
  return (
    <Alert status="success">
      <AlertDescription>
        Here is a gentle confirmation that your action was successful.
      </AlertDescription>
    </Alert>
  );
};
