import { Alert } from "@jamsr-ui/react";

export const AlertVariantBordered = () => {
  return (
    <div className="grid gap-4">
      <Alert variant="bordered" status="success">
        This is a success Alert.
      </Alert>
      <Alert variant="bordered" status="warning">
        This is an warning Alert.
      </Alert>
      <Alert variant="bordered" status="info">
        This is an info Alert.
      </Alert>
      <Alert variant="bordered" status="danger">
        This is an danger Alert.
      </Alert>
      <Alert variant="bordered" status="default">
        This is a default Alert.
      </Alert>
    </div>
  );
};
