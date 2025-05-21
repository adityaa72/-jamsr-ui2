"use client";

import { Button } from "@jamsr-ui/button";
import { Ripple } from "@jamsr-ui/ripple";

const Page = () => {
  return (
    <div>
      This is ripple Page
      <Button >
        Click me
        <Ripple />
      </Button>
    </div>
  );
};

export default Page;
