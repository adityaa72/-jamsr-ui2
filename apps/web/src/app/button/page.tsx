import { Button, ButtonConfig } from "@jamsr-ui/button";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <ButtonConfig variant="outlined">
        <Button>I'm button</Button>
        <Button isDisabled>I'm button</Button>
        <Button isLoading>I'm button</Button>
      </ButtonConfig>
      <Button radius="full" color="primary">
        I'm primary button
      </Button>
      <Button radius="full" color="secondary">
        I'm primary button
      </Button>
      <Button radius="full" color="default">
        I'm primary button
      </Button>
      <Button radius="full" color="success">
        I'm primary button
      </Button>
      <Button radius="full" color="warning">
        I'm primary button
      </Button>
      <Button radius="full" color="danger">
        I'm primary button
      </Button>
    </div>
  );
};

export default Page;
