import { Alert, AlertDescription, AlertTitle } from "@jamsr-ui/alert";

export const AlertWithTitle = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning">
        <AlertTitle>Warning!</AlertTitle>
        Your plan will expire soon, please renew your plan.
      </Alert>
      <Alert status="info">
        <AlertTitle>Info!</AlertTitle>
        <AlertDescription>Your Pro account has been verified.</AlertDescription>
      </Alert>
      <Alert status="success">
        <AlertTitle>Success!</AlertTitle>
        Your Pro plan has been activated.
      </Alert>
    </div>
  );
};
