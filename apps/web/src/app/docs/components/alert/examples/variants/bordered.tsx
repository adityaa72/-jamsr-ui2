import { Alert } from "@jamsrui/react";

export const AlertVariantBordered = () => {
  return (
    <div className="grid gap-4">
      <Alert variant="bordered" status="success">
        <Alert.Icon />
        <Alert.Content>This is a success Alert.</Alert.Content>
      </Alert>
      <Alert variant="bordered" status="warning">
        <Alert.Icon />
        <Alert.Content>This is an warning Alert.</Alert.Content>
      </Alert>
      <Alert variant="bordered" status="info">
        <Alert.Icon />
        <Alert.Content>This is an info Alert.</Alert.Content>
      </Alert>
      <Alert variant="bordered" status="danger">
        <Alert.Icon />
        <Alert.Content>This is an danger Alert.</Alert.Content>
      </Alert>
      <Alert variant="bordered" status="default">
        <Alert.Icon />
        <Alert.Content>This is a default Alert.</Alert.Content>
      </Alert>
    </div>
  );
};
