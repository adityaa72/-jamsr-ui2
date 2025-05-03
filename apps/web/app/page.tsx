import { Button } from "@jamsr-ui/button";

const Page = () => {
  return (
    <div className="bg-black dark text-white size-full h-screen">
      <h1 className="text-fuchsia-50">Hey there</h1>
      <div className="flex flex-col gap-4 items-center">
        <Button>I'm button</Button>
        <Button isDisabled>I'm button</Button>
        <Button isLoading>I'm button</Button>
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
      {/* <div className="grid gap-4">
        <AccordionTest1 />
        <AccordionTest2 />
      </div> */}
    </div>
  );
};

export default Page;
