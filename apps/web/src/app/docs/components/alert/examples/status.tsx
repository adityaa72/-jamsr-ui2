import { Alert } from "@jamsrui/react";

export const AlertStatus = () => {
  return (
    <div className="grid gap-4">
      <Alert status="warning">
        <Alert.Icon />
        <Alert.Content>This is a warning message.</Alert.Content>
      </Alert>
      <Alert status="info">
        <Alert.Icon />
        <Alert.Content>This is a info message.</Alert.Content>
      </Alert>
      <Alert status="success">
        <Alert.Icon />
        <Alert.Content>This is a success message.</Alert.Content>
      </Alert>
      <Alert status="danger">
        <Alert.Icon />
        <Alert.Content>This is a danger message.</Alert.Content>
      </Alert>
      <Alert status="default">
        <Alert.Icon />
        <Alert.Content>This is a default message.</Alert.Content>
      </Alert>
    </div>
  );
};
