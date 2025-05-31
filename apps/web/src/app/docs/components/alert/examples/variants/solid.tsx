import { Alert } from "@jamsr-ui/alert";

export const AlertVariantSolid = () => {
  return (
    <div className="grid gap-4">
      <Alert variant="solid" status="success">
        This is a success Alert.
      </Alert>
      <Alert variant="solid" status="warning">
        This is an warning Alert.
      </Alert>
      <Alert variant="solid" status="info">
        This is an info Alert.
      </Alert>
      <Alert variant="solid" status="danger">
        This is an danger Alert.
      </Alert>
      <Alert variant="solid" status="default">
        This is a default Alert.
      </Alert>
    </div>
  );
};
