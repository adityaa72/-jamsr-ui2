import { Alert } from "@jamsrui/react";

export const AlertVariantFlat = () => {
  return (
    <div className="grid gap-4">
      <Alert variant="flat" status="success">
        This is a success Alert.
      </Alert>
      <Alert variant="flat" status="warning">
        This is an warning Alert.
      </Alert>
      <Alert variant="flat" status="info">
        This is an info Alert.
      </Alert>
      <Alert variant="flat" status="danger">
        This is an danger Alert.
      </Alert>
      <Alert variant="flat" status="default">
        This is a default Alert.
      </Alert>
    </div>
  );
};
