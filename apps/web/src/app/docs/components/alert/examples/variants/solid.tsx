import { Alert } from "@jamsrui/react";

export const AlertVariantSolid = () => {
  return (
    <div className="grid gap-4">
      <Alert variant="solid" status="success">
        <Alert.Icon />
        <Alert.Content>This is a success Alert.</Alert.Content>
      </Alert>
      <Alert variant="solid" status="warning">
        <Alert.Icon />
        <Alert.Content>This is an warning Alert.</Alert.Content>
      </Alert>
      <Alert variant="solid" status="info">
        <Alert.Icon />
        <Alert.Content>This is an info Alert.</Alert.Content>
      </Alert>
      <Alert variant="solid" status="danger">
        <Alert.Icon />
        <Alert.Content>This is an danger Alert.</Alert.Content>
      </Alert>
      <Alert variant="solid" status="default">
        <Alert.Icon />
        <Alert.Content>This is a default Alert.</Alert.Content>
      </Alert>
    </div>
  );
};
