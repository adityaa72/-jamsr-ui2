import { Alert } from "@jamsrui/react";

export const AlertWithoutIcon = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning">
        <Alert.Content>This is a warning message.</Alert.Content>
      </Alert>
      <Alert status="info">
        <Alert.Content>This is an info message.</Alert.Content>
      </Alert>
      <Alert status="success">
        <Alert.Content>This is an success message.</Alert.Content>
      </Alert>
    </div>
  );
};
