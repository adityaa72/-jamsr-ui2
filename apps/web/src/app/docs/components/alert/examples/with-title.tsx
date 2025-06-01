import { Alert, AlertDescription, AlertTitle } from "@jamsrui/react";

export const AlertWithTitle = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning">
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>
          Your plan will expire soon, please renew your plan.
        </AlertDescription>
      </Alert>
      <Alert status="info">
        <AlertTitle>Info!</AlertTitle>
        <AlertDescription>Your Pro account has been verified.</AlertDescription>
      </Alert>
      <Alert status="success">
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Your Pro plan has been activated.</AlertDescription>
      </Alert>
      <Alert status="danger">
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>Something went wrong!</AlertDescription>
      </Alert>
    </div>
  );
};
