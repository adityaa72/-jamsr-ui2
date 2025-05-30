import { Alert } from "@jamsr-ui/alert";

export const AlertWithoutIcon = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning" variant="solid" hideIcon>
        This is a warning message.
      </Alert>
      <Alert status="info" variant="solid" hideIcon>
        This is an info message.
      </Alert>
      <Alert status="success" variant="solid" hideIcon>
        This is an success message.
      </Alert>
    </div>
  );
};
