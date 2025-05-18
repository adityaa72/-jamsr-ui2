import { Button } from "@jamsr-ui/button";
import { Tooltip } from "@jamsr-ui/tooltip";

const Page = () => {
  return (
    <div className="py-24 px-24 grid gap-4">
      <Tooltip title="This is a tooltip">
        <button type="button">Click me</button>
      </Tooltip>
      {/* <Tooltip title="This is a tooltip">
        <Button variant="solid" size="xs">
          Click me
        </Button>
      </Tooltip> */}
    </div>
  );
};

export default Page;
