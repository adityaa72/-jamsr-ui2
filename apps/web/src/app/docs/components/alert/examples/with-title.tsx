import { Alert } from "@jamsrui/react";

export const AlertWithTitle = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>Warning!</Alert.Title>
          <Alert.Description>
            Your plan will expire soon, please renew your plan.
          </Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert status="info">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>Info!</Alert.Title>
          <Alert.Description>
            Your Pro account has been verified.
          </Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert status="success">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>Success!</Alert.Title>
          <Alert.Description>
            Your Pro plan has been activated.
          </Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert status="danger">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>Error!</Alert.Title>
          <Alert.Description>Something went wrong!</Alert.Description>
        </Alert.Content>
      </Alert>
    </div>
  );
};
